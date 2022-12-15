

from domain.image.service import ImageService
from interfaces.images import ImageType
srv = ImageService()


def get_images(token: str) -> list[ImageType]:
    return srv.collect(token) or []
