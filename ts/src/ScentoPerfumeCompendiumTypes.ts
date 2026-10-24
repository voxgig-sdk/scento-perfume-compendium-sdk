// Typed models for the ScentoPerfumeCompendium SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
// params (op.<name>.points[].g.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Contrast {
  label: string
  url: string
}

export interface ContrastListMatch {
  lang?: string
  perfume: any[]
}

export interface Edit {
  cite: string
  continuation: string | null
  detail: Record<string, any>
  folio: string
  further_reading: any[]
  id?: string
  lede: string
  scento_page: Record<string, any>
}

export interface EditLoadMatch {
  id: string
  gender_lean?: string
  lang?: string
}

export interface Family {
  cite: string
  continuation: string | null
  detail: Record<string, any>
  folio: string
  further_reading: any[]
  id?: string
  label: string
  lede: string
  scento_page: Record<string, any>
  url: string
}

export interface FamilyLoadMatch {
  id: string
  lang?: string
}

export interface FamilyListMatch {
  lang?: string
}

export interface House {
  cite: string
  continuation: string | null
  detail: Record<string, any>
  folio: string
  further_reading: any[]
  id?: string
  lede: string
  scento_page: Record<string, any>
}

export interface HouseLoadMatch {
  id: string
  lang?: string
}

export interface Journal {
  label: string
  url: string
}

export interface JournalListMatch {
  continuation?: string
  lang?: string
  q: string
}

export interface Lexicon {
  cite: string
  continuation: string | null
  detail: Record<string, any>
  folio: string
  further_reading: any[]
  id?: string
  lede: string
  scento_page: Record<string, any>
}

export interface LexiconLoadMatch {
  id: string
  lang?: string
}

export interface Match {
  label: string
  url: string
}

export interface MatchListMatch {
  continuation?: string
  family?: string
  lang?: string
  material: any[]
  tier?: string
}

export interface Material {
  cite: string
  continuation: string | null
  detail: Record<string, any>
  folio: string
  further_reading: any[]
  id?: string
  lede: string
  scento_page: Record<string, any>
}

export interface MaterialLoadMatch {
  id: string
  lang?: string
}

export interface Neighbour {
  label: string
  url: string
}

export interface NeighbourListMatch {
  perfume_id: string
  continuation?: string
  lang?: string
  same_house?: boolean
}

export interface Perfume {
  cite: string
  continuation: string | null
  detail: Record<string, any>
  folio: string
  further_reading: any[]
  id?: string
  label: string
  lede: string
  scento_page: Record<string, any>
  url: string
}

export interface PerfumeLoadMatch {
  id: string
  lang?: string
}

export interface PerfumeListMatch {
  continuation?: string
  lang?: string
  q: string
}

export interface Search {
  label: string
  url: string
}

export interface SearchListMatch {
  continuation?: string
  kind?: string
  lang?: string
  q: string
}

export interface Wardrobe {
  label: string
  url: string
}

export interface WardrobeListMatch {
  avoid?: any[]
  lang?: string
  love: any[]
  size?: number
}

