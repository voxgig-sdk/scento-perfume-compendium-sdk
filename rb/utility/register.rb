# ScentoPerfumeCompendium SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'graphql'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

ScentoPerfumeCompendiumUtility.registrar = ->(u) {
  u.clean = ScentoPerfumeCompendiumUtilities::Clean
  u.clean_add = ScentoPerfumeCompendiumUtilities::CleanAdd
  u.clean_explain = ScentoPerfumeCompendiumUtilities::CleanExplain
  u.done = ScentoPerfumeCompendiumUtilities::Done
  u.make_error = ScentoPerfumeCompendiumUtilities::MakeError
  u.feature_add = ScentoPerfumeCompendiumUtilities::FeatureAdd
  u.feature_hook = ScentoPerfumeCompendiumUtilities::FeatureHook
  u.feature_init = ScentoPerfumeCompendiumUtilities::FeatureInit
  u.fetcher = ScentoPerfumeCompendiumUtilities::Fetcher
  u.make_fetch_def = ScentoPerfumeCompendiumUtilities::MakeFetchDef
  u.make_context = ScentoPerfumeCompendiumUtilities::MakeContext
  u.make_options = ScentoPerfumeCompendiumUtilities::MakeOptions
  u.make_request = ScentoPerfumeCompendiumUtilities::MakeRequest
  u.make_response = ScentoPerfumeCompendiumUtilities::MakeResponse
  u.make_result = ScentoPerfumeCompendiumUtilities::MakeResult
  u.make_point = ScentoPerfumeCompendiumUtilities::MakePoint
  u.make_spec = ScentoPerfumeCompendiumUtilities::MakeSpec
  u.make_url = ScentoPerfumeCompendiumUtilities::MakeUrl
  u.param = ScentoPerfumeCompendiumUtilities::Param
  u.prepare_auth = ScentoPerfumeCompendiumUtilities::PrepareAuth
  u.prepare_body = ScentoPerfumeCompendiumUtilities::PrepareBody
  u.prepare_headers = ScentoPerfumeCompendiumUtilities::PrepareHeaders
  u.prepare_method = ScentoPerfumeCompendiumUtilities::PrepareMethod
  u.prepare_params = ScentoPerfumeCompendiumUtilities::PrepareParams
  u.prepare_path = ScentoPerfumeCompendiumUtilities::PreparePath
  u.prepare_query = ScentoPerfumeCompendiumUtilities::PrepareQuery
  u.graphql_body = ScentoPerfumeCompendiumUtilities::GraphqlBody
  u.graphql_errors = ScentoPerfumeCompendiumUtilities::GraphqlErrors
  u.result_basic = ScentoPerfumeCompendiumUtilities::ResultBasic
  u.result_body = ScentoPerfumeCompendiumUtilities::ResultBody
  u.result_headers = ScentoPerfumeCompendiumUtilities::ResultHeaders
  u.transform_request = ScentoPerfumeCompendiumUtilities::TransformRequest
  u.transform_response = ScentoPerfumeCompendiumUtilities::TransformResponse
}
