# Use an official Node.js 14 image as a base
FROM node:14

# Set the working directory to /app
WORKDIR /app

# Copy the package.json file
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Move into the build directory
WORKDIR /app

# Expose the port that the application will use
EXPOSE 3000 4000 80

# Run the command to start the application
CMD ["npm", "start"]