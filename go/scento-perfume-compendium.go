package voxgigscentoperfumecompendiumsdk

import (
	"github.com/voxgig-sdk/scento-perfume-compendium-sdk/go/core"
	"github.com/voxgig-sdk/scento-perfume-compendium-sdk/go/entity"
	"github.com/voxgig-sdk/scento-perfume-compendium-sdk/go/feature"
	_ "github.com/voxgig-sdk/scento-perfume-compendium-sdk/go/utility"
)

// Type aliases preserve external API.
type ScentoPerfumeCompendiumSDK = core.ScentoPerfumeCompendiumSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type ScentoPerfumeCompendiumEntity = core.ScentoPerfumeCompendiumEntity
type StreamItem = core.StreamItem
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type ScentoPerfumeCompendiumError = core.ScentoPerfumeCompendiumError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewRatelimitFeatureFunc = func() core.Feature {
		return feature.NewRatelimitFeature()
	}
	core.NewRetryFeatureFunc = func() core.Feature {
		return feature.NewRetryFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewTimeoutFeatureFunc = func() core.Feature {
		return feature.NewTimeoutFeature()
	}
	core.NewContrastEntityFunc = func(client *core.ScentoPerfumeCompendiumSDK, entopts map[string]any) core.ScentoPerfumeCompendiumEntity {
		return entity.NewContrastEntity(client, entopts)
	}
	core.NewEditEntityFunc = func(client *core.ScentoPerfumeCompendiumSDK, entopts map[string]any) core.ScentoPerfumeCompendiumEntity {
		return entity.NewEditEntity(client, entopts)
	}
	core.NewFamilyEntityFunc = func(client *core.ScentoPerfumeCompendiumSDK, entopts map[string]any) core.ScentoPerfumeCompendiumEntity {
		return entity.NewFamilyEntity(client, entopts)
	}
	core.NewHouseEntityFunc = func(client *core.ScentoPerfumeCompendiumSDK, entopts map[string]any) core.ScentoPerfumeCompendiumEntity {
		return entity.NewHouseEntity(client, entopts)
	}
	core.NewJournalEntityFunc = func(client *core.ScentoPerfumeCompendiumSDK, entopts map[string]any) core.ScentoPerfumeCompendiumEntity {
		return entity.NewJournalEntity(client, entopts)
	}
	core.NewLexiconEntityFunc = func(client *core.ScentoPerfumeCompendiumSDK, entopts map[string]any) core.ScentoPerfumeCompendiumEntity {
		return entity.NewLexiconEntity(client, entopts)
	}
	core.NewMatchEntityFunc = func(client *core.ScentoPerfumeCompendiumSDK, entopts map[string]any) core.ScentoPerfumeCompendiumEntity {
		return entity.NewMatchEntity(client, entopts)
	}
	core.NewMaterialEntityFunc = func(client *core.ScentoPerfumeCompendiumSDK, entopts map[string]any) core.ScentoPerfumeCompendiumEntity {
		return entity.NewMaterialEntity(client, entopts)
	}
	core.NewNeighbourEntityFunc = func(client *core.ScentoPerfumeCompendiumSDK, entopts map[string]any) core.ScentoPerfumeCompendiumEntity {
		return entity.NewNeighbourEntity(client, entopts)
	}
	core.NewPerfumeEntityFunc = func(client *core.ScentoPerfumeCompendiumSDK, entopts map[string]any) core.ScentoPerfumeCompendiumEntity {
		return entity.NewPerfumeEntity(client, entopts)
	}
	core.NewSearchEntityFunc = func(client *core.ScentoPerfumeCompendiumSDK, entopts map[string]any) core.ScentoPerfumeCompendiumEntity {
		return entity.NewSearchEntity(client, entopts)
	}
	core.NewWardrobeEntityFunc = func(client *core.ScentoPerfumeCompendiumSDK, entopts map[string]any) core.ScentoPerfumeCompendiumEntity {
		return entity.NewWardrobeEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewScentoPerfumeCompendiumSDK = core.NewScentoPerfumeCompendiumSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var SharedConfig = core.SharedConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewScentoPerfumeCompendiumSDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *ScentoPerfumeCompendiumSDK  { return NewScentoPerfumeCompendiumSDK(nil) }
func Test() *ScentoPerfumeCompendiumSDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewRatelimitFeature = feature.NewRatelimitFeature
var NewRetryFeature = feature.NewRetryFeature
var NewTestFeature = feature.NewTestFeature
var NewTimeoutFeature = feature.NewTimeoutFeature
