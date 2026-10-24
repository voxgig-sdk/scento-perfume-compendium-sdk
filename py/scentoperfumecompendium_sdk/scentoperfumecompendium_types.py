# Typed models for the ScentoPerfumeCompendium SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
# params (op.<name>.points[].g.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class Contrast(TypedDict):
    label: str
    url: str


class ContrastListMatchRequired(TypedDict):
    perfume: list


class ContrastListMatch(ContrastListMatchRequired, total=False):
    lang: str


class EditRequired(TypedDict):
    cite: str
    continuation: str | None
    detail: dict
    folio: str
    further_reading: list
    lede: str
    scento_page: dict


class Edit(EditRequired, total=False):
    id: str


class EditLoadMatchRequired(TypedDict):
    id: str


class EditLoadMatch(EditLoadMatchRequired, total=False):
    gender_lean: str
    lang: str


class FamilyRequired(TypedDict):
    cite: str
    continuation: str | None
    detail: dict
    folio: str
    further_reading: list
    label: str
    lede: str
    scento_page: dict
    url: str


class Family(FamilyRequired, total=False):
    id: str


class FamilyLoadMatchRequired(TypedDict):
    id: str


class FamilyLoadMatch(FamilyLoadMatchRequired, total=False):
    lang: str


class FamilyListMatch(TypedDict, total=False):
    lang: str


class HouseRequired(TypedDict):
    cite: str
    continuation: str | None
    detail: dict
    folio: str
    further_reading: list
    lede: str
    scento_page: dict


class House(HouseRequired, total=False):
    id: str


class HouseLoadMatchRequired(TypedDict):
    id: str


class HouseLoadMatch(HouseLoadMatchRequired, total=False):
    lang: str


class Journal(TypedDict):
    label: str
    url: str


class JournalListMatchRequired(TypedDict):
    q: str


class JournalListMatch(JournalListMatchRequired, total=False):
    continuation: str
    lang: str


class LexiconRequired(TypedDict):
    cite: str
    continuation: str | None
    detail: dict
    folio: str
    further_reading: list
    lede: str
    scento_page: dict


class Lexicon(LexiconRequired, total=False):
    id: str


class LexiconLoadMatchRequired(TypedDict):
    id: str


class LexiconLoadMatch(LexiconLoadMatchRequired, total=False):
    lang: str


class Match(TypedDict):
    label: str
    url: str


class MatchListMatchRequired(TypedDict):
    material: list


class MatchListMatch(MatchListMatchRequired, total=False):
    continuation: str
    family: str
    lang: str
    tier: str


class MaterialRequired(TypedDict):
    cite: str
    continuation: str | None
    detail: dict
    folio: str
    further_reading: list
    lede: str
    scento_page: dict


class Material(MaterialRequired, total=False):
    id: str


class MaterialLoadMatchRequired(TypedDict):
    id: str


class MaterialLoadMatch(MaterialLoadMatchRequired, total=False):
    lang: str


class Neighbour(TypedDict):
    label: str
    url: str


class NeighbourListMatchRequired(TypedDict):
    perfume_id: str


class NeighbourListMatch(NeighbourListMatchRequired, total=False):
    continuation: str
    lang: str
    same_house: bool


class PerfumeRequired(TypedDict):
    cite: str
    continuation: str | None
    detail: dict
    folio: str
    further_reading: list
    label: str
    lede: str
    scento_page: dict
    url: str


class Perfume(PerfumeRequired, total=False):
    id: str


class PerfumeLoadMatchRequired(TypedDict):
    id: str


class PerfumeLoadMatch(PerfumeLoadMatchRequired, total=False):
    lang: str


class PerfumeListMatchRequired(TypedDict):
    q: str


class PerfumeListMatch(PerfumeListMatchRequired, total=False):
    continuation: str
    lang: str


class Search(TypedDict):
    label: str
    url: str


class SearchListMatchRequired(TypedDict):
    q: str


class SearchListMatch(SearchListMatchRequired, total=False):
    continuation: str
    kind: str
    lang: str


class Wardrobe(TypedDict):
    label: str
    url: str


class WardrobeListMatchRequired(TypedDict):
    love: list


class WardrobeListMatch(WardrobeListMatchRequired, total=False):
    avoid: list
    lang: str
    size: int
