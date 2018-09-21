#import multiple json files
mongoimport --host mongo --db test --collection moviedetails --type json --file /initMovieData.json --jsonArray
mongoimport --host mongo --db test --collection moviereviews --type json --file /initMovieReviewData.json --jsonArray
mongoimport --host mongo --db test --collection movies --type json --file /initMovieSharedData.json --jsonArray