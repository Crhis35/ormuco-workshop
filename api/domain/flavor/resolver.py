

from domain.flavor.service import FlavorService
from interfaces.flavors import FlavorType

srv = FlavorService()


def get_flavors(token: str) -> list[FlavorType]:
    return srv.collect(token) or []
