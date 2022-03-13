FROM loadimpact/k6:0.36.0

WORKDIR /home/k6
ADD . /home/k6/tests
RUN uname -m
RUN wget https://github.com/grafana/xk6-browser/releases/download/v0.2.0/xk6-browser-v0.2.0-linux-amd64.tar.gz && \
    tar -xf xk6-browser-v0.2.0-linux-amd64.tar.gz && \
    pwd && \
    mv xk6-browser-v0.2.0-linux-amd64/xk6-browser xk6-browser-v0.2.0-linux-amd64/xk6-browser-linux && \
    mkdir -p /home/k6/tests/load/frontend/ && \
    cp xk6-browser-v0.2.0-linux-amd64/xk6-browser-linux /home/k6
RUN k6 --help && /home/k6/xk6-browser-linux --help
#RUN chmod +x /home/k6/tests/k6-entrypoint.sh
#ENTRYPOINT k6 run /home/k6/tests/load/backend/loadTest.js
ENTRYPOINT ["/home/k6/tests/k6-entrypoint.sh"]