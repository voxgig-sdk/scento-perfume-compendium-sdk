<?php
declare(strict_types=1);

// ScentoPerfumeCompendium SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class ScentoPerfumeCompendiumMakeContext
{
    public static function call(array $ctxmap, ?ScentoPerfumeCompendiumContext $basectx): ScentoPerfumeCompendiumContext
    {
        return new ScentoPerfumeCompendiumContext($ctxmap, $basectx);
    }
}
