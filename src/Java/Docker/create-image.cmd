docker build --no-cache -f SQL\Dockerfile.PostgreSql -t kurs3-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t kurs3-java/app ../../..
