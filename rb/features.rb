# ScentoPerfumeCompendium SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module ScentoPerfumeCompendiumFeatures
  def self.make_feature(name)
    case name
    when "base"
      ScentoPerfumeCompendiumBaseFeature.new
    when "ratelimit"
      ScentoPerfumeCompendiumRatelimitFeature.new
    when "retry"
      ScentoPerfumeCompendiumRetryFeature.new
    when "test"
      ScentoPerfumeCompendiumTestFeature.new
    when "timeout"
      ScentoPerfumeCompendiumTimeoutFeature.new
    else
      ScentoPerfumeCompendiumBaseFeature.new
    end
  end
end
