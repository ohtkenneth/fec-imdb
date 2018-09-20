FROM mongo

COPY initMovieData.json /initMovieData.json
COPY initMovieReviewData.json /initMovieReviewData.json
CMD ./import.sh
# CMD mongoimport --host mongo --db test --collection movies --type json --file /initMovieData.json --jsonArray
# CMD mongoimport --host mongo --db test --collection moviereviews --type json --file /initMovieReviewData.json --jsonArray