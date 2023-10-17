FROM node:16.15.0

# env set
ARG DATABASE_URL
ENV DATABASE_URL=$DATABASE_URL

# folder set
RUN mkdir -p /app
WORKDIR /app
ADD . /app/
RUN echo "FOLDER CREATED"

RUN node -v
RUN echo "NODE VERSION CHECK"

# install
RUN rm yarn.lock || true
RUN yarn
RUN echo "INSTALL CREATED"

# build
RUN yarn build
RUN echo "BUILD CREATED"

# 가상 머신에 오픈할 포트
ENV HOST 0.0.0.0
EXPOSE 4000

CMD [ "yarn", "start" ]