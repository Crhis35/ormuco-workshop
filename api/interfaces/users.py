from __future__ import annotations
from dataclasses import field

from typing import Any, List, Optional

from pydantic import BaseModel
import strawberry


class Domain(BaseModel):
    id: str
    name: str


class User(BaseModel):
    domain: Domain
    id: str
    name: str
    password_expires_at: Any


class Domain1(BaseModel):
    id: str
    name: str


class Project(BaseModel):
    domain: Domain1
    id: str
    name: str


class Role(BaseModel):
    id: str
    name: str


class Endpoint(BaseModel):
    id: str
    interface: str
    region_id: str
    url: str
    region: str


class CatalogItem(BaseModel):
    endpoints: List[Endpoint]
    id: str
    type: str
    name: str


class Token(BaseModel):
    methods: List[str]
    user: User
    audit_ids: List[str]
    expires_at: str
    issued_at: str
    project: Project
    is_domain: bool
    roles: List[Role]
    catalog: List[CatalogItem]
    id: str


@strawberry.type
class RoleType:
    id: str
    name: str


@strawberry.type
class CatalogItemType:
    id: str
    name: str



@strawberry.type
class ProjectType:
    domain: DomainType
    id: str
    name: str


@strawberry.type
class DomainType:
    id: str
    name: str


@strawberry.type
class UserType:
    domain: DomainType
    id: str
    name: str
    password_expires_at: str

@strawberry.input
class LoginUserInput:
    email: str
    password: str
@strawberry.type
class TokenType:
    methods:  list[str] = field(default_factory=list)
    user: UserType
    audit_ids: list[str] = field(default_factory=list)
    expires_at: str
    issued_at: str
    project: ProjectType
    is_domain: bool
    roles: list[RoleType] = field(default_factory=list)
    catalog: list[CatalogItemType] = field(default_factory=list)
    id: str


class UserResponse(BaseModel):
    token: Token
