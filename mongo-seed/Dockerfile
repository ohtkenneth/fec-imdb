FROM mongo

COPY initMovieData.json /initMovieData.json
COPY initMovieReviewData.json /initMovieReviewData.json
COPY initMovieSharedData.json /initMovieSharedData.json
# CMD ./import.sh
COPY import.sh /import.sh

# CMD mongoimport --host mongo --db test --collection movies --type json --file /initMovieData.json --jsonArray
# CMD mongoimport --host mongo --db test --collection moviereviews --type json --file /initMovieReviewData.json --jsonArray
CMD ./import.sh