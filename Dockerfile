# installing dependencies for Transpile
FROM node:alpine AS build-deps
COPY package.json /build/
WORKDIR /build
RUN npm install

# Transpile typescript
FROM node:alpine AS compile-env
RUN mkdir /compile
COPY --from=build-deps /build /compile
WORKDIR /compile
COPY . .
RUN npm run build

# installing production dependencies
FROM node:alpine AS runtime-deps
COPY package.json /build/
WORKDIR /build
RUN npm install --only=production

# Working Container
FROM node:alpine
WORKDIR /app
# copy compiled artifacts from compile-env
COPY --from=compile-env --chown=node:node /compile/build /app
# copy production dependencies
COPY --from=runtime-deps --chown=node:node /build /app
USER node
ENV PORT=8080
EXPOSE 8080
CMD [ "node", "bundle.js"]