# Used for updating dependencies
# Pin Node.js and NPM versions for reproducible dependency management
FROM node:26-slim

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci

# Default command — override when running the container
CMD ["npm", "update"]
