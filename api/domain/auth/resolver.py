

from domain.auth.service import AuthService
from interfaces.users import LoginUserInput, TokenType


srv = AuthService()


def login(input: LoginUserInput) -> TokenType:
    return srv.login(input)
