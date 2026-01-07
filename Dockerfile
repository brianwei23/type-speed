FROM node:20

WORKDIR /app

# Install server dependencies
COPY package*.json ./
RUN npm install

# Install client dependencies and build
COPY client/package*.json ./client/
RUN cd client && npm install && npm run build

# Copy source
COPY . .

EXPOSE 8080
CMD ["node", "server/index.js"]