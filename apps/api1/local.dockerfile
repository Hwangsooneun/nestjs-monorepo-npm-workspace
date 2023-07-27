FROM node:18-alpine as runner

WORKDIR /usr/src/ob_back

COPY . .

RUN npm i -g @nestjs/cli@10.1.4
RUN npm i -w api1
RUN npm i -w libs

CMD NODE_ENV=local

EXPOSE 3000