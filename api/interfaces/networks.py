from __future__ import annotations
from dataclasses import field

from typing import Any, List, Optional

from pydantic import BaseModel, Field
import strawberry


class Network(BaseModel):
    id: str
    name: str
    tenant_id: str
    admin_state_up: bool
    mtu: int
    status: str
    subnets: List[str]
    shared: bool
    availability_zone_hints: List
    availability_zones: List[str]
    ipv4_address_scope: Any
    ipv6_address_scope: Any
    router_external: bool = Field(..., alias='router:external')
    description: str
    qos_policy_id: Any
    port_security_enabled: bool
    dns_domain: str
    is_default: Optional[bool] = None
    tags: List
    created_at: str
    updated_at: str
    revision_number: int
    project_id: str


@strawberry.type
class NetworkType:
    id: str
    name: str
    tenant_id: str
    admin_state_up: bool
    mtu: int
    status: str
    subnets: list[str] = field(default_factory=list)
    shared: bool
    availability_zone_hints: list[str] = field(default_factory=list)
    availability_zones: list[str] = field(default_factory=list)
    ipv4_address_scope: Optional[str]
    ipv6_address_scope: Optional[str]
    router_external: bool
    description: str
    qos_policy_id: Optional[str]
    port_security_enabled: bool
    dns_domain: str
    is_default: Optional[bool] = None
    tags: list[str] = field(default_factory=list)
    created_at: str
    updated_at: str
    revision_number: int
    project_id: str


class NetworkResponse(BaseModel):
    networks: List[Network]
