package sdktest

import (
	"encoding/json"
	"os"
	"path/filepath"
	"runtime"
	"strings"
	"testing"
	"time"

	sdk "github.com/voxgig-sdk/scento-perfume-compendium-sdk/go"
	"github.com/voxgig-sdk/scento-perfume-compendium-sdk/go/core"

	vs "github.com/voxgig-sdk/scento-perfume-compendium-sdk/go/utility/struct"
)

// main.kit.test.live.strict is true (the default is true): a live
// request that fails, or a live test missing an input it needs,
// fails the test.
// An account with no record for a test to read skips it either way.
const editEntityLiveStrict = true


func TestEditEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.Edit(nil)
		if ent == nil {
			t.Fatal("expected non-nil EditEntity")
		}
	})

	t.Run("validate", func(t *testing.T) {
		if !fhHasFeature("validate") {
			t.Skip("feature not present in this SDK: validate")
		}
		client := sdk.TestSDK(nil, map[string]any{
			"feature": map[string]any{"validate": map[string]any{"active": true}},
		})
		_, err := client.Edit(nil).Load(map[string]any{"id": 1}, nil)
		if sdkerr, ok := err.(*core.ScentoPerfumeCompendiumError); !ok || "validate_failed" != sdkerr.Code {
			t.Fatalf("expected validate_failed, got %v", err)
		}
	})

	t.Run("basic", func(tt *testing.T) {
		var t testing.TB = tt
		setup := editBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "edit." + _op, _mode); _shouldSkip {
				if _reason == "" {
					_reason = "skipped via sdk-test-control.json"
				}
				t.Skip(_reason)
				return
			}
		}
		if setup.live {
			liveMiss(t, editEntityLiveStrict, "Live entity test blocked: %s", "the flow loads a edit record it has no list to find")
		}
		client := setup.client
		_ = client

		// Bootstrap entity data from existing test data (no create step in flow).
		editRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath(setup.data, "existing.edit")))
		var editRef01Data map[string]any
		if len(editRef01DataRaw) > 0 {
			editRef01Data = core.ToMapAny(editRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = editRef01Data

		// LOAD
		editRef01Ent := client.Edit(nil)
		editRef01MatchDt0 := map[string]any{
			"id": editRef01Data["id"],
		}
		editRef01DataDt0Loaded, err := editRef01Ent.Load(editRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		editRef01DataDt0LoadResult := core.ToMapAny(entityData(editRef01DataDt0Loaded))
		if editRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if editRef01DataDt0LoadResult["id"] != editRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

	})
}

func editBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "edit", "EditTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read edit test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse edit test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"edit01", "edit02", "edit03"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Whether *_ENTID supplied the idmap, read before envOverride consumes it:
	// without it, the ids a live flow binds are the fixture's synthetic ones.
	entidEnvRaw := os.Getenv("SCENTO_PERFUME_COMPENDIUM_TEST_EDIT_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"SCENTO_PERFUME_COMPENDIUM_TEST_EDIT_ENTID": idmap,
		"SCENTO_PERFUME_COMPENDIUM_TEST_LIVE":      "FALSE",
		"SCENTO_PERFUME_COMPENDIUM_TEST_EXPLAIN":   "FALSE",
	})

	idmapResolved := core.ToMapAny(env["SCENTO_PERFUME_COMPENDIUM_TEST_EDIT_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}

	if env["SCENTO_PERFUME_COMPENDIUM_TEST_LIVE"] == "TRUE" {
		// An empty map, not a nil one: Merge returns nil when its last entry
		// is nil, and BasicSetup is normally called with no extras - so a
		// bare nil silently discarded the apikey and server values below.
		extraOpts := extra
		if extraOpts == nil {
			extraOpts = map[string]any{}
		}

		mergedOpts := vs.Merge([]any{
			// liveClientOptions() FIRST, so the generated fields below win:
			// sdk-test-control.json's test.client.options adds to the live
			// client, it does not redirect it.
			liveClientOptions(),
			map[string]any{
			},
			extraOpts,
		})
		client = sdk.NewScentoPerfumeCompendiumSDK(core.ToMapAny(mergedOpts))
	}

	live := env["SCENTO_PERFUME_COMPENDIUM_TEST_LIVE"] == "TRUE"
	return &entityTestSetup{
		client:        client,
		data:          entityData,
		idmap:         idmapResolved,
		env:           env,
		explain:       env["SCENTO_PERFUME_COMPENDIUM_TEST_EXPLAIN"] == "TRUE",
		live:          live,
		syntheticOnly: live && !idmapOverridden,
		now:           time.Now().UnixMilli(),
	}
}
