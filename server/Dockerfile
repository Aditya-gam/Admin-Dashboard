# Use an official Node runtime as a parent image
FROM node:14-alpine

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the server source code to the working directory
COPY . .

# Expose the port that the app will run on
EXPOSE 5001

# Define environment variables for PORT, MONGO_URL, and JWT_SECRET_KEY
ENV PORT=5001
ENV MONGO_URL=mongodb+srv://adigam19:Aditya19@cluster0.ztywgnq.mongodb.net/?retryWrites=true&w=majority
ENV JWT_SECRET_KEY=AdminDashboard

# Run npm start when the container launches
CMD ["npm", "start"]
