# ScentoPerfumeCompendium SDK utility: prepare_body
require_relative 'media'
module ScentoPerfumeCompendiumUtilities
  PrepareBody = ->(ctx) {
    return nil unless ctx.op.input == "data"
    return ScentoPerfumeCompendiumUtilities.raw_body(ctx.reqdata) if ScentoPerfumeCompendiumUtilities.raw_request?(ctx.point)
    ctx.utility.transform_request.call(ctx)
  }
end
