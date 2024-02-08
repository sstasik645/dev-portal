docker rmi backstage_builder
docker rmi backstage_runtime_base

docker image build . -f Dockerfile --target build --tag backstage_builder --no-cache
docker image build . -f Dockerfile --tag backstage_runtime_base --no-cache

docker save backstage_builder -o ../backstage_builder.tar
docker save backstage_runtime_base -o ../backstage_runtime_base.tar