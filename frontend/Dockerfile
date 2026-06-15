# Install Node.js 22
FROM node:22

# Working directory
WORKDIR /frontend

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy project files
COPY . .

# Expose port
EXPOSE 5153

# Start server
CMD ["npm", "run","dev","--","--host"] 

