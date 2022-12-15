from __future__ import annotations
from dataclasses import field

from typing import List

from pydantic import BaseModel
import strawberry


class Link(BaseModel):
    rel: str
    href: str


class Flavor(BaseModel):
    id: str
    name: str
    links: List[Link]


@strawberry.type
class LinkType:
    rel: str
    href: str


@strawberry.type
class FlavorType:
    id: str
    name: str
    links: list[str] = field(default_factory=list)


class FlavorResponse(BaseModel):
    flavors: List[Flavor]
