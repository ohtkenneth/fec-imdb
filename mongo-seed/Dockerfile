FROM mongo
COPY init.json /init.json
CMD mongoimport --host 127.0.0.1:27017 --db test --collection movies --type json --file /init.json --jsonArray