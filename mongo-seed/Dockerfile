FROM mongo

COPY initMovieData.json /initMovieData.json
COPY initMovieReviewData.json /initMovieReviewData.json
COPY initMovieSharedData.json /initMovieSharedData.json
COPY import.sh /import.sh
CMD ./import.sh