
import requests
from structlog import get_logger
from interfaces.images import ImageResponse

from common.service import BaseService
from helpers.utils import paths

logger = get_logger(__name__)


class ImageService(BaseService):

    def collect(self, token: str):
        res = requests.get(f"{self.api_url}{paths['images']}", headers={
            'X-Auth-Token': token})
        return ImageResponse(**res.json()).images
