# what node version to use
FROM node:latest

# create app directory
RUN mkdir /app

WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json /app/

COPY . /app/
RUN npm install --production
# If you are building your code for production
# RUN npm install --only=production
RUN npm run build:prod

EXPOSE 3000
CMD ["npm", "start"]