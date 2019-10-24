FROM node:8.14.1

LABEL Synergy Designs <<henaohng@gmail.com>>


COPY . /var/www/lookblitz

WORKDIR /var/www/lookblitz

RUN curl -o- -L https://yarnpkg.com/install.sh | bash -s -- --version 1.19.0

RUN ["yarn", "install"]