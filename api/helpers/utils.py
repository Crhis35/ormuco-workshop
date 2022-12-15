from pydantic import BaseSettings
from functools import lru_cache


class Settings(BaseSettings):
    api_url: str = 'https://api-uat-001.ormuco.com'

    class Config:
        env_file = ".env"
        orm_true = True


@lru_cache()
def get_settings():
    return Settings()


paths = {
    'auth': ':5000/v3/auth/tokens',
    'images': ':9292/v2/images',
    'networks': ':9696/v2.0/networks',
    'flavors': ':8774/v2.1/flavors',
    'create_instance': ':8774/v2.1/servers',
    'instances': ":8774/v2.1/servers/detail"
}
