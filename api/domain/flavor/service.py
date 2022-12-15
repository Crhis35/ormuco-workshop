
import requests
from structlog import get_logger
from interfaces.flavors import FlavorResponse
from interfaces.networks import NetworkResponse, NetworkType

from common.service import BaseService
from helpers.utils import paths

logger = get_logger(__name__)


class FlavorService(BaseService):

    def collect(self, token: str):
        res = requests.get(f"{self.api_url}{paths['flavors']}", headers={
            'X-Auth-Token': token})
        return FlavorResponse(**res.json()).flavors
