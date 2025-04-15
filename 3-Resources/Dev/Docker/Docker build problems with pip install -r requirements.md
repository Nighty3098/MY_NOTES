---
tags:
  - Docker
---
[Docker build problems with pip install -r requirements: Failed to establish a new connection: [Errno -2] Name or service not known](https://stackoverflow.com/questions/58087917/docker-build-problems-with-pip-install-r-requirements-failed-to-establish-a-ne)

Dockerfile:

```Dockerfile
FROM python:3.6
ENV PYTHONUNBUFFERED 1
WORKDIR /app
COPY . /app
RUN pip install -r requirements.txt
```


Fix:

```bash

docker build --network=host .

```