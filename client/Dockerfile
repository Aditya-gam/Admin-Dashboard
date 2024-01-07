# Use an official Node runtime as a parent image
FROM node:14-alpine

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the client source code to the working directory
COPY . .

# Expose the port that the app will run on
EXPOSE 3000

# Define environment variable for REACT_APP_BASE_URL
ENV REACT_APP_BASE_URL=http://localhost:5001

# Run npm start when the container launches
CMD ["npm", "start"]
