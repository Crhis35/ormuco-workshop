# 
FROM python:3.10 as requirements-stage

# 
WORKDIR /tmp

# 
RUN pip install poetry

# 
COPY ./pyproject.toml ./poetry.lock* /tmp/

# 
RUN poetry export -f requirements.txt --output requirements.txt
# 
FROM python:3.10

# 
WORKDIR /usr/src/api

RUN pip install poetry
# 
COPY --from=requirements-stage /tmp/requirements.txt ./requirements.txt

# 
RUN pip install --no-cache-dir --upgrade -r ./requirements.txt

# 
COPY ./ /usr/src/api

# 
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "3000"]

EXPOSE 3000
