// Typed models for the ScentoPerfumeCompendium SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
// params (op.<name>.points[].g.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import (
	"encoding/json"

	"github.com/voxgig-sdk/scento-perfume-compendium-sdk/go/core"
)

// Contrast is the typed data model for the contrast entity.
type Contrast struct {
}

// ContrastListMatch is the typed request payload for Contrast.ListTyped.
type ContrastListMatch struct {
	Lang *string `json:"lang,omitempty"`
	Perfume []any `json:"perfume"`
}

// Edit is the typed data model for the edit entity.
type Edit struct {
}

// EditLoadMatch is the typed request payload for Edit.LoadTyped.
type EditLoadMatch struct {
	Id string `json:"id"`
	GenderLean *string `json:"gender_lean,omitempty"`
	Lang *string `json:"lang,omitempty"`
}

// Family is the typed data model for the family entity.
type Family struct {
}

// FamilyLoadMatch is the typed request payload for Family.LoadTyped.
type FamilyLoadMatch struct {
	Id string `json:"id"`
	Lang *string `json:"lang,omitempty"`
}

// FamilyListMatch is the typed request payload for Family.ListTyped.
type FamilyListMatch struct {
	Lang *string `json:"lang,omitempty"`
}

// House is the typed data model for the house entity.
type House struct {
}

// HouseLoadMatch is the typed request payload for House.LoadTyped.
type HouseLoadMatch struct {
	Id string `json:"id"`
	Lang *string `json:"lang,omitempty"`
}

// Journal is the typed data model for the journal entity.
type Journal struct {
}

// JournalListMatch is the typed request payload for Journal.ListTyped.
type JournalListMatch struct {
	Continuation *string `json:"continuation,omitempty"`
	Lang *string `json:"lang,omitempty"`
	Q string `json:"q"`
}

// Lexicon is the typed data model for the lexicon entity.
type Lexicon struct {
}

// LexiconLoadMatch is the typed request payload for Lexicon.LoadTyped.
type LexiconLoadMatch struct {
	Id string `json:"id"`
	Lang *string `json:"lang,omitempty"`
}

// Match is the typed data model for the match entity.
type Match struct {
}

// MatchListMatch is the typed request payload for Match.ListTyped.
type MatchListMatch struct {
	Continuation *string `json:"continuation,omitempty"`
	Family *string `json:"family,omitempty"`
	Lang *string `json:"lang,omitempty"`
	Material []any `json:"material"`
	Tier *string `json:"tier,omitempty"`
}

// Material is the typed data model for the material entity.
type Material struct {
}

// MaterialLoadMatch is the typed request payload for Material.LoadTyped.
type MaterialLoadMatch struct {
	Id string `json:"id"`
	Lang *string `json:"lang,omitempty"`
}

// Neighbour is the typed data model for the neighbour entity.
type Neighbour struct {
}

// NeighbourListMatch is the typed request payload for Neighbour.ListTyped.
type NeighbourListMatch struct {
	PerfumeId string `json:"perfume_id"`
	Continuation *string `json:"continuation,omitempty"`
	Lang *string `json:"lang,omitempty"`
	SameHouse *bool `json:"same_house,omitempty"`
}

// Perfume is the typed data model for the perfume entity.
type Perfume struct {
}

// PerfumeLoadMatch is the typed request payload for Perfume.LoadTyped.
type PerfumeLoadMatch struct {
	Id string `json:"id"`
	Lang *string `json:"lang,omitempty"`
}

// PerfumeListMatch is the typed request payload for Perfume.ListTyped.
type PerfumeListMatch struct {
	Continuation *string `json:"continuation,omitempty"`
	Lang *string `json:"lang,omitempty"`
	Q string `json:"q"`
}

// Search is the typed data model for the search entity.
type Search struct {
}

// SearchListMatch is the typed request payload for Search.ListTyped.
type SearchListMatch struct {
	Continuation *string `json:"continuation,omitempty"`
	Kind *string `json:"kind,omitempty"`
	Lang *string `json:"lang,omitempty"`
	Q string `json:"q"`
}

// Wardrobe is the typed data model for the wardrobe entity.
type Wardrobe struct {
}

// WardrobeListMatch is the typed request payload for Wardrobe.ListTyped.
type WardrobeListMatch struct {
	Avoid *[]any `json:"avoid,omitempty"`
	Lang *string `json:"lang,omitempty"`
	Love []any `json:"love"`
	Size *int `json:"size,omitempty"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// entityData unwraps an entity to its data map.
//
// Operations resolve to the ENTITY, not the raw data (see AGENTS.md), and an
// entity's fields are UNEXPORTED — marshalling one directly yields `{}`, so
// every typed accessor would silently hand back a zero-valued struct. The
// typed boundary therefore takes the data hop first.
func entityData(v any) any {
	if ent, ok := v.(core.Entity); ok {
		return ent.Data()
	}
	return v
}

// typedFrom decodes a runtime value (an entity, or the map[string]any the op
// pipeline produced) into a typed model T via a JSON round-trip. On any error
// it returns the zero value of T; the op's own (value, error) tuple carries
// the real error.
func typedFrom[T any](v any) T {
	var out T
	v = entityData(v)
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value into a typed slice []T via a
// JSON round-trip, for list ops. `list` resolves to a slice of ENTITY
// instances, so each element takes the data hop.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	if list, ok := v.([]any); ok {
		unwrapped := make([]any, 0, len(list))
		for _, item := range list {
			unwrapped = append(unwrapped, entityData(item))
		}
		v = unwrapped
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
