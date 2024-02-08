docker rm -f backstage
docker rmi backstage_dev
docker build . --tag backstage_dev --build-arg ON_OCP=false
docker rm backstage
docker run -it -p 7007:7007 --name backstage backstage_dev