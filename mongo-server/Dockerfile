FROM mongo

COPY init.json /init.json
CMD mongoimport --host mongo --db test --collection movies --type json --file /init.json --jsonArray