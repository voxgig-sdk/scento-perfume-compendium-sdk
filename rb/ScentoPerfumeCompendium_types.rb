# frozen_string_literal: true

# Typed models for the ScentoPerfumeCompendium SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
# params (op.<name>.points[].g.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Contrast entity data model.
#
# @!attribute [rw] label
#   @return [String]
#
# @!attribute [rw] url
#   @return [String]
Contrast = Struct.new(
  :label,
  :url,
  keyword_init: true
)

# Request payload for Contrast#list.
#
# @!attribute [rw] lang
#   @return [String, nil]
#
# @!attribute [rw] perfume
#   @return [Array]
ContrastListMatch = Struct.new(
  :lang,
  :perfume,
  keyword_init: true
)

# Edit entity data model.
#
# @!attribute [rw] cite
#   @return [String]
#
# @!attribute [rw] continuation
#   @return [Object]
#
# @!attribute [rw] detail
#   @return [Hash]
#
# @!attribute [rw] folio
#   @return [String]
#
# @!attribute [rw] further_reading
#   @return [Array]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] lede
#   @return [String]
#
# @!attribute [rw] scento_page
#   @return [Hash]
Edit = Struct.new(
  :cite,
  :continuation,
  :detail,
  :folio,
  :further_reading,
  :id,
  :lede,
  :scento_page,
  keyword_init: true
)

# Request payload for Edit#load.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] gender_lean
#   @return [String, nil]
#
# @!attribute [rw] lang
#   @return [String, nil]
EditLoadMatch = Struct.new(
  :id,
  :gender_lean,
  :lang,
  keyword_init: true
)

# Family entity data model.
#
# @!attribute [rw] cite
#   @return [String]
#
# @!attribute [rw] continuation
#   @return [Object]
#
# @!attribute [rw] detail
#   @return [Hash]
#
# @!attribute [rw] folio
#   @return [String]
#
# @!attribute [rw] further_reading
#   @return [Array]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] label
#   @return [String]
#
# @!attribute [rw] lede
#   @return [String]
#
# @!attribute [rw] scento_page
#   @return [Hash]
#
# @!attribute [rw] url
#   @return [String]
Family = Struct.new(
  :cite,
  :continuation,
  :detail,
  :folio,
  :further_reading,
  :id,
  :label,
  :lede,
  :scento_page,
  :url,
  keyword_init: true
)

# Request payload for Family#load.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] lang
#   @return [String, nil]
FamilyLoadMatch = Struct.new(
  :id,
  :lang,
  keyword_init: true
)

# Request payload for Family#list.
#
# @!attribute [rw] lang
#   @return [String, nil]
FamilyListMatch = Struct.new(
  :lang,
  keyword_init: true
)

# House entity data model.
#
# @!attribute [rw] cite
#   @return [String]
#
# @!attribute [rw] continuation
#   @return [Object]
#
# @!attribute [rw] detail
#   @return [Hash]
#
# @!attribute [rw] folio
#   @return [String]
#
# @!attribute [rw] further_reading
#   @return [Array]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] lede
#   @return [String]
#
# @!attribute [rw] scento_page
#   @return [Hash]
House = Struct.new(
  :cite,
  :continuation,
  :detail,
  :folio,
  :further_reading,
  :id,
  :lede,
  :scento_page,
  keyword_init: true
)

# Request payload for House#load.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] lang
#   @return [String, nil]
HouseLoadMatch = Struct.new(
  :id,
  :lang,
  keyword_init: true
)

# Journal entity data model.
#
# @!attribute [rw] label
#   @return [String]
#
# @!attribute [rw] url
#   @return [String]
Journal = Struct.new(
  :label,
  :url,
  keyword_init: true
)

# Request payload for Journal#list.
#
# @!attribute [rw] continuation
#   @return [String, nil]
#
# @!attribute [rw] lang
#   @return [String, nil]
#
# @!attribute [rw] q
#   @return [String]
JournalListMatch = Struct.new(
  :continuation,
  :lang,
  :q,
  keyword_init: true
)

# Lexicon entity data model.
#
# @!attribute [rw] cite
#   @return [String]
#
# @!attribute [rw] continuation
#   @return [Object]
#
# @!attribute [rw] detail
#   @return [Hash]
#
# @!attribute [rw] folio
#   @return [String]
#
# @!attribute [rw] further_reading
#   @return [Array]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] lede
#   @return [String]
#
# @!attribute [rw] scento_page
#   @return [Hash]
Lexicon = Struct.new(
  :cite,
  :continuation,
  :detail,
  :folio,
  :further_reading,
  :id,
  :lede,
  :scento_page,
  keyword_init: true
)

# Request payload for Lexicon#load.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] lang
#   @return [String, nil]
LexiconLoadMatch = Struct.new(
  :id,
  :lang,
  keyword_init: true
)

# Match entity data model.
#
# @!attribute [rw] label
#   @return [String]
#
# @!attribute [rw] url
#   @return [String]
Match = Struct.new(
  :label,
  :url,
  keyword_init: true
)

# Request payload for Match#list.
#
# @!attribute [rw] continuation
#   @return [String, nil]
#
# @!attribute [rw] family
#   @return [String, nil]
#
# @!attribute [rw] lang
#   @return [String, nil]
#
# @!attribute [rw] material
#   @return [Array]
#
# @!attribute [rw] tier
#   @return [String, nil]
MatchListMatch = Struct.new(
  :continuation,
  :family,
  :lang,
  :material,
  :tier,
  keyword_init: true
)

# Material entity data model.
#
# @!attribute [rw] cite
#   @return [String]
#
# @!attribute [rw] continuation
#   @return [Object]
#
# @!attribute [rw] detail
#   @return [Hash]
#
# @!attribute [rw] folio
#   @return [String]
#
# @!attribute [rw] further_reading
#   @return [Array]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] lede
#   @return [String]
#
# @!attribute [rw] scento_page
#   @return [Hash]
Material = Struct.new(
  :cite,
  :continuation,
  :detail,
  :folio,
  :further_reading,
  :id,
  :lede,
  :scento_page,
  keyword_init: true
)

# Request payload for Material#load.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] lang
#   @return [String, nil]
MaterialLoadMatch = Struct.new(
  :id,
  :lang,
  keyword_init: true
)

# Neighbour entity data model.
#
# @!attribute [rw] label
#   @return [String]
#
# @!attribute [rw] url
#   @return [String]
Neighbour = Struct.new(
  :label,
  :url,
  keyword_init: true
)

# Request payload for Neighbour#list.
#
# @!attribute [rw] perfume_id
#   @return [String]
#
# @!attribute [rw] continuation
#   @return [String, nil]
#
# @!attribute [rw] lang
#   @return [String, nil]
#
# @!attribute [rw] same_house
#   @return [Boolean, nil]
NeighbourListMatch = Struct.new(
  :perfume_id,
  :continuation,
  :lang,
  :same_house,
  keyword_init: true
)

# Perfume entity data model.
#
# @!attribute [rw] cite
#   @return [String]
#
# @!attribute [rw] continuation
#   @return [Object]
#
# @!attribute [rw] detail
#   @return [Hash]
#
# @!attribute [rw] folio
#   @return [String]
#
# @!attribute [rw] further_reading
#   @return [Array]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] label
#   @return [String]
#
# @!attribute [rw] lede
#   @return [String]
#
# @!attribute [rw] scento_page
#   @return [Hash]
#
# @!attribute [rw] url
#   @return [String]
Perfume = Struct.new(
  :cite,
  :continuation,
  :detail,
  :folio,
  :further_reading,
  :id,
  :label,
  :lede,
  :scento_page,
  :url,
  keyword_init: true
)

# Request payload for Perfume#load.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] lang
#   @return [String, nil]
PerfumeLoadMatch = Struct.new(
  :id,
  :lang,
  keyword_init: true
)

# Request payload for Perfume#list.
#
# @!attribute [rw] continuation
#   @return [String, nil]
#
# @!attribute [rw] lang
#   @return [String, nil]
#
# @!attribute [rw] q
#   @return [String]
PerfumeListMatch = Struct.new(
  :continuation,
  :lang,
  :q,
  keyword_init: true
)

# Search entity data model.
#
# @!attribute [rw] label
#   @return [String]
#
# @!attribute [rw] url
#   @return [String]
Search = Struct.new(
  :label,
  :url,
  keyword_init: true
)

# Request payload for Search#list.
#
# @!attribute [rw] continuation
#   @return [String, nil]
#
# @!attribute [rw] kind
#   @return [String, nil]
#
# @!attribute [rw] lang
#   @return [String, nil]
#
# @!attribute [rw] q
#   @return [String]
SearchListMatch = Struct.new(
  :continuation,
  :kind,
  :lang,
  :q,
  keyword_init: true
)

# Wardrobe entity data model.
#
# @!attribute [rw] label
#   @return [String]
#
# @!attribute [rw] url
#   @return [String]
Wardrobe = Struct.new(
  :label,
  :url,
  keyword_init: true
)

# Request payload for Wardrobe#list.
#
# @!attribute [rw] avoid
#   @return [Array, nil]
#
# @!attribute [rw] lang
#   @return [String, nil]
#
# @!attribute [rw] love
#   @return [Array]
#
# @!attribute [rw] size
#   @return [Integer, nil]
WardrobeListMatch = Struct.new(
  :avoid,
  :lang,
  :love,
  :size,
  keyword_init: true
)

