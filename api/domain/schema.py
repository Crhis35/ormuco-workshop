import strawberry
from domain.flavor.resolver import get_flavors
from domain.image.resolver import get_images
from domain.instance.resolver import create_Serer, get_servers
from domain.network.resolver import get_networks
from domain.auth.resolver import login
from interfaces.flavors import FlavorType
from interfaces.images import ImageType
from interfaces.instance import ServerType

from interfaces.networks import NetworkType
from interfaces.users import TokenType


@strawberry.type
class Query:
    """GraphQL query."""
    hello: str = 'Hello'
    networks: list[NetworkType] = strawberry.field(
        resolver=get_networks,
    )
    flavors: list[FlavorType] = strawberry.field(
        resolver=get_flavors,
    )
    images: list[ImageType] = strawberry.field(
        resolver=get_images
    )
    servers: list[ServerType] = strawberry.field(
        resolver=get_servers
    )

@strawberry.type
class Mutation:
    login: TokenType = strawberry.field(
        resolver=login
    )
    create_server: str = strawberry.field(
        resolver= create_Serer
    )

app_schema = strawberry.Schema(
    query=Query,
    mutation=Mutation,
)
