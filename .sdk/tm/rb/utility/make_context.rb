# ScentoPerfumeCompendium SDK utility: make_context
require_relative '../core/context'
module ScentoPerfumeCompendiumUtilities
  MakeContext = ->(ctxmap, basectx) {
    ScentoPerfumeCompendiumContext.new(ctxmap, basectx)
  }
end
