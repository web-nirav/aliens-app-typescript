# Step 1: Build React App
FROM node:20.18.2-alpine3.21 as build
WORKDIR /app 
COPY package.json package-lock.json ./
RUN rm -rf node_modules package-lock.json && \
    npm install --legacy-peer-deps && \
    npm install ajv ajv-keywords --save
COPY . .
RUN npm run build 

# Step 2: Serve With Nginx
FROM nginx:1.23-alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf *
COPY --from=build /app/build .
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]