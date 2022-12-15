
import requests
from structlog import get_logger
from interfaces.networks import NetworkResponse, NetworkType

from common.service import BaseService
from helpers.utils import paths

logger = get_logger(__name__)


class NetworkService(BaseService):

    def collect(self, token: str):
        res = requests.get(f"{self.api_url}{paths['networks']}", headers={
            'X-Auth-Token': token})
        return NetworkResponse(**res.json()).networks
