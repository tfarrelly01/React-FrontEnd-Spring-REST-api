# You should always specify a full version here to ensure all of your developers
# are running the same version of Node.
# FROM node:7.9.0

# Override the base log level (info).
# ENV NPM_CONFIG_LOGLEVEL warn

# Install and configure `serve`.
# RUN npm install -g serve
# CMD serve -s build
# EXPOSE 9090

# Install all dependencies of the current project.
# COPY package.json package.json
# COPY npm-shrinkwrap.json npm-shrinkwrap.json
# RUN npm install

# Copy all local files into the image.
# COPY . .

# Build for production.
# RUN npm run build --production


# FROM java:8u111-jdk-alpine
# ADD target/*.jar app.jar
# RUN sh -c 'touch /app.jar'
# ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","/app.jar"]

FROM node:6.10-alpine
RUN mkdir -p /home/web
COPY public /home/web/public/
COPY src /home/web/src/
COPY package.json /home/web/
COPY .babelrc /home/web/
COPY config.js /home/web/
COPY webpack.config.js /home/web/
COPY .eslintrc /home/web/

WORKDIR "/home/web"
RUN npm install webpack-dev-server --save-dev
RUN npm install
ENTRYPOINT ["node_modules/.bin/webpack-dev-server"]
