# ScentoPerfumeCompendium SDK feature factory

from scentoperfumecompendium_sdk.feature.base_feature import ScentoPerfumeCompendiumBaseFeature
from scentoperfumecompendium_sdk.feature.ratelimit_feature import ScentoPerfumeCompendiumRatelimitFeature
from scentoperfumecompendium_sdk.feature.retry_feature import ScentoPerfumeCompendiumRetryFeature
from scentoperfumecompendium_sdk.feature.test_feature import ScentoPerfumeCompendiumTestFeature
from scentoperfumecompendium_sdk.feature.timeout_feature import ScentoPerfumeCompendiumTimeoutFeature


_FEATURES = {
    "base": lambda: ScentoPerfumeCompendiumBaseFeature(),
    "ratelimit": lambda: ScentoPerfumeCompendiumRatelimitFeature(),
    "retry": lambda: ScentoPerfumeCompendiumRetryFeature(),
    "test": lambda: ScentoPerfumeCompendiumTestFeature(),
    "timeout": lambda: ScentoPerfumeCompendiumTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
