# Build stage
FROM node:alpine AS build
WORKDIR /usr/src/app

# Copy the root package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm config set strict-ssl false
RUN npm install --force


# Copy the code
COPY . .

# Build the specific application (e-suggestion)
RUN npm run build

# Deploy the dist to nginx
FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the built application from the build stage
COPY --from=build /usr/src/app/dist/project-name/browser /usr/share/nginx/html

EXPOSE 80