# [Backstage](https://backstage.io)

This is your newly scaffolded Backstage App, Good Luck!

To start the app, run:

```sh
yarn install --frozen-lockfile
yarn dev
```

## Run it on Docker

Prepare images for inside, first build the base images:

```sh
docker image build . -f Dockerfile.Builder --target build --tag backstage_builder
docker image build . -f Dockerfile.Builder --tag backstage_runtime_base
```

This will build two images, one for building the app, and one for running it.

To save the built images execute:

```sh
docker save backstage_builder -o ../../backstage_builder.tar
docker save backstage_runtime_base -o ../../backstage_runtime_base.tar
```

To build the final runtime image, run:

```sh
docker image build . -f Dockerfile.Wrapper --no-cache --tag backstage_runtime 
```
