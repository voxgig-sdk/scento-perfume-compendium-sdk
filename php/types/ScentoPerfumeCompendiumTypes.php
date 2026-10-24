<?php
declare(strict_types=1);

// Typed models for the ScentoPerfumeCompendium SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
// params (op.<name>.points[].g.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Contrast entity data model. */
class Contrast
{
    public string $label;
    public string $url;
}

/** Request payload for Contrast#list. */
class ContrastListMatch
{
    public ?string $lang = null;
    public array $perfume;
}

/** Edit entity data model. */
class Edit
{
    public string $cite;
    public mixed $continuation;
    public array $detail;
    public string $folio;
    public array $further_reading;
    public ?string $id = null;
    public string $lede;
    public array $scento_page;
}

/** Request payload for Edit#load. */
class EditLoadMatch
{
    public string $id;
    public ?string $gender_lean = null;
    public ?string $lang = null;
}

/** Family entity data model. */
class Family
{
    public string $cite;
    public mixed $continuation;
    public array $detail;
    public string $folio;
    public array $further_reading;
    public ?string $id = null;
    public string $label;
    public string $lede;
    public array $scento_page;
    public string $url;
}

/** Request payload for Family#load. */
class FamilyLoadMatch
{
    public string $id;
    public ?string $lang = null;
}

/** Request payload for Family#list. */
class FamilyListMatch
{
    public ?string $lang = null;
}

/** House entity data model. */
class House
{
    public string $cite;
    public mixed $continuation;
    public array $detail;
    public string $folio;
    public array $further_reading;
    public ?string $id = null;
    public string $lede;
    public array $scento_page;
}

/** Request payload for House#load. */
class HouseLoadMatch
{
    public string $id;
    public ?string $lang = null;
}

/** Journal entity data model. */
class Journal
{
    public string $label;
    public string $url;
}

/** Request payload for Journal#list. */
class JournalListMatch
{
    public ?string $continuation = null;
    public ?string $lang = null;
    public string $q;
}

/** Lexicon entity data model. */
class Lexicon
{
    public string $cite;
    public mixed $continuation;
    public array $detail;
    public string $folio;
    public array $further_reading;
    public ?string $id = null;
    public string $lede;
    public array $scento_page;
}

/** Request payload for Lexicon#load. */
class LexiconLoadMatch
{
    public string $id;
    public ?string $lang = null;
}

/** Match entity data model. */
class MatchType
{
    public string $label;
    public string $url;
}

/** Request payload for Match#list. */
class MatchListMatch
{
    public ?string $continuation = null;
    public ?string $family = null;
    public ?string $lang = null;
    public array $material;
    public ?string $tier = null;
}

/** Material entity data model. */
class Material
{
    public string $cite;
    public mixed $continuation;
    public array $detail;
    public string $folio;
    public array $further_reading;
    public ?string $id = null;
    public string $lede;
    public array $scento_page;
}

/** Request payload for Material#load. */
class MaterialLoadMatch
{
    public string $id;
    public ?string $lang = null;
}

/** Neighbour entity data model. */
class Neighbour
{
    public string $label;
    public string $url;
}

/** Request payload for Neighbour#list. */
class NeighbourListMatch
{
    public string $perfume_id;
    public ?string $continuation = null;
    public ?string $lang = null;
    public ?bool $same_house = null;
}

/** Perfume entity data model. */
class Perfume
{
    public string $cite;
    public mixed $continuation;
    public array $detail;
    public string $folio;
    public array $further_reading;
    public ?string $id = null;
    public string $label;
    public string $lede;
    public array $scento_page;
    public string $url;
}

/** Request payload for Perfume#load. */
class PerfumeLoadMatch
{
    public string $id;
    public ?string $lang = null;
}

/** Request payload for Perfume#list. */
class PerfumeListMatch
{
    public ?string $continuation = null;
    public ?string $lang = null;
    public string $q;
}

/** Search entity data model. */
class Search
{
    public string $label;
    public string $url;
}

/** Request payload for Search#list. */
class SearchListMatch
{
    public ?string $continuation = null;
    public ?string $kind = null;
    public ?string $lang = null;
    public string $q;
}

/** Wardrobe entity data model. */
class Wardrobe
{
    public string $label;
    public string $url;
}

/** Request payload for Wardrobe#list. */
class WardrobeListMatch
{
    public ?array $avoid = null;
    public ?string $lang = null;
    public array $love;
    public ?int $size = null;
}

