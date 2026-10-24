# ScentoPerfumeCompendium SDK utility: make_context

from scentoperfumecompendium_sdk.core.context import ScentoPerfumeCompendiumContext


def make_context_util(ctxmap, basectx):
    return ScentoPerfumeCompendiumContext(ctxmap, basectx)
