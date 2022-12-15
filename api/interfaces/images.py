from __future__ import annotations
from dataclasses import field

from typing import List, Optional

from pydantic import BaseModel, Field
import strawberry


class Metadata(BaseModel):
    store: str


class Location(BaseModel):
    url: str
    metadata: Metadata


class Image(BaseModel):
    name: str
    disk_format: str
    container_format: str
    visibility: str
    size: int
    virtual_size: int
    status: str
    checksum: str
    protected: bool
    min_ram: int
    min_disk: int
    owner: str
    os_hidden: bool
    os_hash_algo: str
    os_hash_value: str
    id: str
    created_at: str
    updated_at: str
    locations: List[Location]
    direct_url: str
    tags: List[str]
    self: str
    file: str
    schema_: str = Field(alias="schema")
    stores: str
    hw_rng_model: Optional[str] = None
    os_type: Optional[str] = None
    os_distro: Optional[str] = None
    os_version: Optional[str] = None
    username: Optional[str] = None
    version: Optional[str] = None
    owner_specified_openstack_md5: Optional[str] = Field(
        None, alias='owner_specified.openstack.md5'
    )
    owner_specified_openstack_sha256: Optional[str] = Field(
        None, alias='owner_specified.openstack.sha256'
    )
    owner_specified_openstack_object: Optional[str] = Field(
        None, alias='owner_specified.openstack.object'
    )
    architecture: Optional[str] = None
    latest: Optional[str] = None
    distribution: Optional[str] = None
    family: Optional[str] = None


@strawberry.type
class MetadataType:
    store: str


@strawberry.type
class LocationType:
    url: str
    metadata: MetadataType


@strawberry.type
class ImageType:
    name: str
    disk_format: str
    container_format: str
    visibility: str
    size: int
    virtual_size: int
    status: str
    checksum: str
    protected: bool
    min_ram: int
    min_disk: int
    owner: str
    os_hidden: bool
    os_hash_algo: str
    os_hash_value: str
    id: str
    created_at: str
    updated_at: str
    locations:  list[LocationType] = field(default_factory=list)
    direct_url: str
    tags: List[str]
    self: str
    file: str
    schema: str
    stores: str
    hw_rng_model: Optional[str] = None
    os_type: Optional[str] = None
    os_distro: Optional[str] = None
    os_version: Optional[str] = None
    username: Optional[str] = None
    version: Optional[str] = None
    owner_specified_openstack_md5: Optional[str]
    owner_specified_openstack_sha256: Optional[str]
    owner_specified_openstack_object: Optional[str]
    architecture: Optional[str] = None
    latest: Optional[str] = None
    distribution: Optional[str] = None
    family: Optional[str] = None


class ImageResponse(BaseModel):
    images: List[Image]
    first: str
    schema_: str = Field(alias="schema")
