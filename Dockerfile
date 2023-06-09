# Base image
FROM node:alpine
# ENV NODE_ENV=development
# Create app directory
WORKDIR /usr/src/app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

# Install app dependencies
RUN npm ci --silent --progress=false

# Bundle app source
COPY . .

# Creates a "dist" folder with the production build
RUN npm run build

EXPOSE $API_SERVER_PORT
# Start the server using the production build
CMD [ "npm", "run", "start" ]