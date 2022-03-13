FROM cypress/base:17.3.0

RUN apt-get update && \
    apt-get install npm yarn -y && \
    mkdir "/tests"

WORKDIR /tests

ADD . /tests

RUN chmod +x /tests/entrypoint.sh

ENTRYPOINT ["/tests/entrypoint.sh"]