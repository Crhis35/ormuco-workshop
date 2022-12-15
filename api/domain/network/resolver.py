

from interfaces.networks import NetworkType

from domain.network.service import NetworkService
srv = NetworkService()


def get_networks(token: str) -> list[NetworkType]:
    return srv.collect(token) or []
