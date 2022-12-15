from __future__ import annotations
from dataclasses import field

from typing import Any, List, Optional

from pydantic import BaseModel, Field
import strawberry

from interfaces.flavors import LinkType, Link


class ServerFlavor(BaseModel):
    id: str
    links: List[Link]


class Metadata(BaseModel):
    source_image: Optional[str] = None
    baremetal: Optional[str] = None
    isBootFromVolume: Optional[str] = None
    freezer: Optional[str] = None


class Link(BaseModel):
    rel: str
    href: str


class Image(BaseModel):
    id: str
    links: List[Link]


class DefaultNetworkItem(BaseModel):
    version: int
    addr: str
    OS_EXT_IPS_type: str = Field(..., alias='OS-EXT-IPS:type')
    OS_EXT_IPS_MAC_mac_addr: str = Field(..., alias='OS-EXT-IPS-MAC:mac_addr')


class Addresses(BaseModel):
    default_network: Optional[List[DefaultNetworkItem]] = Field(
        ..., alias='default-network')


class SecurityGroup(BaseModel):
    name: str


class Compute(BaseModel):
    binary: str
    host: str
    id: int
    state: str
    status: str
    updated_at: str
    zone: str


class Server(BaseModel):
    id: str
    name: str
    status: str
    tenant_id: str
    user_id: str
    metadata: Metadata
    hostId: str
    image: Image
    flavor: ServerFlavor
    created: str
    updated: str
    accessIPv4: str
    accessIPv6: str


@strawberry.type
class SecurityGroupType:
    name: str


@strawberry.type
class ServerFlavorType:
    id: str
    links: List[LinkType]


@strawberry.type
class DefaultNetworkItemType:
    version: int
    addr: str
    OS_EXT_IPS_type: str
    OS_EXT_IPS_MAC_mac_addr: str


@strawberry.type
class AddressesType:
    default_network: Optional[list[DefaultNetworkItemType]]


@strawberry.type
class ComputeType:
    binary: str
    host: str
    id: int
    state: str
    status: str
    updated_at: str
    zone: str


@strawberry.type
class ServerImageType:
    id: str
    links: List[LinkType]


@strawberry.type
class SeverMetadataType:
    source_image: Optional[str] = None
    baremetal: Optional[str] = None
    isBootFromVolume: Optional[str] = None
    freezer: Optional[str] = None


@strawberry.type
class ServerType:
    id: str
    name: str
    status: str
    tenant_id: str
    user_id: str
    metadata: SeverMetadataType
    hostId: str
    image: ServerImageType
    flavor: ServerFlavorType
    created: str
    updated: str
    accessIPv4: str
    accessIPv6: str


class ServerResponse(BaseModel):
    servers: List[Server]
