import strawberry


from fastapi import FastAPI
from strawberry.fastapi import GraphQLRouter
from domain.schema import app_schema

graphql_app = GraphQLRouter(schema=app_schema)


app = FastAPI()
app.include_router(graphql_app, prefix="/graphql")
