-- Typed models for the ScentoPerfumeCompendium SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
-- params (op.<name>.points[].g.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Contrast
---@field label string
---@field url string

---@class ContrastListMatch
---@field lang? string
---@field perfume table

---@class Edit
---@field cite string
---@field continuation string|nil
---@field detail table
---@field folio string
---@field further_reading table
---@field id? string
---@field lede string
---@field scento_page table

---@class EditLoadMatch
---@field id string
---@field gender_lean? string
---@field lang? string

---@class Family
---@field cite string
---@field continuation string|nil
---@field detail table
---@field folio string
---@field further_reading table
---@field id? string
---@field label string
---@field lede string
---@field scento_page table
---@field url string

---@class FamilyLoadMatch
---@field id string
---@field lang? string

---@class FamilyListMatch
---@field lang? string

---@class House
---@field cite string
---@field continuation string|nil
---@field detail table
---@field folio string
---@field further_reading table
---@field id? string
---@field lede string
---@field scento_page table

---@class HouseLoadMatch
---@field id string
---@field lang? string

---@class Journal
---@field label string
---@field url string

---@class JournalListMatch
---@field continuation? string
---@field lang? string
---@field q string

---@class Lexicon
---@field cite string
---@field continuation string|nil
---@field detail table
---@field folio string
---@field further_reading table
---@field id? string
---@field lede string
---@field scento_page table

---@class LexiconLoadMatch
---@field id string
---@field lang? string

---@class Match
---@field label string
---@field url string

---@class MatchListMatch
---@field continuation? string
---@field family? string
---@field lang? string
---@field material table
---@field tier? string

---@class Material
---@field cite string
---@field continuation string|nil
---@field detail table
---@field folio string
---@field further_reading table
---@field id? string
---@field lede string
---@field scento_page table

---@class MaterialLoadMatch
---@field id string
---@field lang? string

---@class Neighbour
---@field label string
---@field url string

---@class NeighbourListMatch
---@field perfume_id string
---@field continuation? string
---@field lang? string
---@field same_house? boolean

---@class Perfume
---@field cite string
---@field continuation string|nil
---@field detail table
---@field folio string
---@field further_reading table
---@field id? string
---@field label string
---@field lede string
---@field scento_page table
---@field url string

---@class PerfumeLoadMatch
---@field id string
---@field lang? string

---@class PerfumeListMatch
---@field continuation? string
---@field lang? string
---@field q string

---@class Search
---@field label string
---@field url string

---@class SearchListMatch
---@field continuation? string
---@field kind? string
---@field lang? string
---@field q string

---@class Wardrobe
---@field label string
---@field url string

---@class WardrobeListMatch
---@field avoid? table
---@field lang? string
---@field love table
---@field size? number

local M = {}

return M
