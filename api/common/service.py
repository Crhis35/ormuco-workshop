
from abc import abstractmethod
from helpers.utils import get_settings


class BaseService:
    api_url = get_settings().api_url


    @abstractmethod
    def create()-> None:
        raise NotImplementedError("create is not implemented on BaseService")
    
    @abstractmethod
    def collect()-> None:
        raise NotImplementedError("create is not implemented on BaseService")
