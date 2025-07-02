FROM node:18

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# Build React app for production
RUN npm run build

# Serve with a simple static server
RUN npm install -g serve
CMD ["serve", "-s", "build", "-l", "3000"]

EXPOSE 3000

