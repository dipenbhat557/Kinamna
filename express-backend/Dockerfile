# Use the official Node.js runtime as the base image
FROM node:18-alpine

# Install pnpm
RUN npm install -g pnpm

# Set the working directory in the container
WORKDIR /app

# Copy package.json and pnpm-lock.yaml
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install --no-frozen-lockfile

# Copy the rest of the application code
COPY . .

# Generate Prisma client
RUN pnpm dlx prisma generate

# Build TypeScript code
RUN pnpm build

# Create a non-root user to run the application
RUN addgroup -g 1001 -S nodejs
RUN adduser -S express -u 1001

# Change ownership of the app directory to the nodejs user
RUN chown -R express:nodejs /app

# Switch to non-root user
USER express

# Expose the port the app runs on
EXPOSE 3001

# Set environment variables
ENV NODE_ENV=production
ENV PORT=3001

# Define the command to run the application
CMD ["pnpm", "start"] 