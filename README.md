# [Backstage](https://backstage.io)

This is your newly scaffolded Backstage App, Good Luck!

To start the app, run:

```sh
yarn install
yarn dev
```

## Run it on Docker

Build the image locally

```sh

yarn install --frozen-lockfile

# tsc outputs type definitions to dist-types/ in the repo root, which are then consumed by the build
yarn tsc

# Build the backend, which bundles it all up into the packages/backend/dist folder.
# The configuration files here should match the one you use inside the Dockerfile below.
yarn build:backend --config ../../app-config.yaml

# Build docker base docker file
docker image build . -f packages/backend/Dockerfile --tag backstage_base

# Create wrapped docker file for easy app-config changes in house
docker build . -f Dockerfile.Wrapper --tag backstage_runtime
```

Run the on docker locally `docker run -it -p 7007:7007 backstage_runtime`

Save the docker image to file `docker save -o backstage_base.tar backstage_base`

Load the docker in house `docker load --input backstage_base.tar`