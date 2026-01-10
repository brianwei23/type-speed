FROM node:20

WORKDIR /app

# Install server dependencies
COPY package*.json ./
RUN npm install

ARG REACT_APP_API_URL
ENV REACT_APP_API_URL=$REACT_APP_API_URL

# Install client dependencies and build
COPY client/package*.json ./client/
COPY client ./client
RUN cd client && npm install && npm run build

# Copy source
COPY . .

EXPOSE 8080
CMD ["node", "server/index.js"]