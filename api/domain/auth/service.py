import requests
from structlog import get_logger

from common.service import BaseService
from helpers.utils import paths
from interfaces.users import LoginUserInput, UserResponse

logger = get_logger(__name__)


class AuthService(BaseService):

    def create(self, ):
        logger.info("Creating")

    def login(self, input: LoginUserInput):
        res = requests.post(f"{self.api_url}{paths['auth']}", json={
            "auth": {
                "identity": {
                    "methods": [
                        "password"
                    ],
                    "password": {
                        "user": {
                            "name": input.email,
                            "domain": {
                                "name": "Default"
                            },
                            "password": input.password
                        }
                    }
                }
            }

        })

        return UserResponse(**res.json()).token
