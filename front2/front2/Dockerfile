# Stage 1: Build the Angular app
FROM node:16-alpine as builder

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install all dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Build the project
RUN npm run build 

# Stage 2: Serve the app with nginx
FROM nginx:alpine

# Copy nginx configuration
#COPY nginx.conf /etc/nginx/nginx.conf

# Remove default nginx static assets
RUN rm -rf /usr/share/nginx/html/*

# Copy static assets from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80 EXPOSE 80

# Run nginx
CMD ["nginx", "-g", "daemon off;"]

