# CRUD API Service

A simple Node.js TypeScript CRUD API that returns dummy user data without authentication.

## Features

- ✅ CRUD operations (Create, Read, Update, Delete)
- ✅ Built with Express.js and TypeScript
- ✅ Dummy data included
- ✅ CORS enabled
- ✅ Health check endpoint
- ✅ Docker support (multi-stage build)

## Project Structure

```
own-service/
├── src/
│   ├── index.ts          # Application entry point
│   ├── routes.ts         # API routes
│   ├── userService.ts    # User business logic
│   └── data.ts           # Dummy data
├── dist/                 # Compiled JavaScript (generated)
├── Dockerfile            # Docker configuration
├── .dockerignore         # Docker ignore patterns
├── tsconfig.json         # TypeScript configuration
├── package.json          # Project dependencies
└── README.md             # This file
```

## Prerequisites

- Node.js 18+ (for local development)
- Docker Desktop (for containerized deployment)
- npm or yarn

## Local Setup & Development

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

The server will start at `http://localhost:3000`

### 3. Build for Production

```bash
npm run build
```

### 4. Start Production Server

```bash
npm start
```

## API Endpoints

### Health Check
```
GET /api/health
```

### Get All Users
```
GET /api/users
```

Response:
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john@example.com",
      "age": 28,
      "createdAt": "2024-01-15T10:30:00Z"
    }
  ],
  "message": "All users retrieved successfully"
}
```

### Get User by ID
```
GET /api/users/:id
```

Example: `GET /api/users/1`

### Create New User
```
POST /api/users
Content-Type: application/json

{
  "name": "Alice Brown",
  "email": "alice@example.com",
  "age": 26
}
```

### Update User
```
PUT /api/users/:id
Content-Type: application/json

{
  "name": "Updated Name",
  "email": "updated@example.com",
  "age": 30
}
```

### Delete User
```
DELETE /api/users/:id
```

Example: `DELETE /api/users/1`

## Docker Setup & Deployment

### Prerequisites
- Docker Desktop installed and running

### Step 1: Build the Docker Image

```bash
docker build -t crud-api-service:1.0.0 .
```

**Alternative** (with different tag):
```bash
docker build -t crud-api-service:latest .
```

**Output:**
```
[+] Building 2.3s (13/13) FINISHED
 => [internal] load build definition from Dockerfile
 => [stage-0] FROM node:20-alpine
 ...
 => => writing image sha256:abc123...
```

### Step 2: Run the Docker Container

**Basic run:**
```bash
docker run -p 3000:3000 crud-api-service:1.0.0
```

**Run in background (detached mode):**
```bash
docker run -d -p 3000:3000 --name crud-api crud-api-service:1.0.0
```

**With custom port mapping:**
```bash
docker run -d -p 8080:3000 --name crud-api crud-api-service:1.0.0
```

**Output:**
```
62f1e89e5e9e6f3a7c2b1d8e9f0a1b2c3d4e5f6a
```

### Step 3: Verify the Container is Running

Check if container is running:
```bash
docker ps
```

Expected output:
```
CONTAINER ID   IMAGE                     COMMAND             CREATED         STATUS         PORTS                  NAMES
62f1e89e5e9e   crud-api-service:1.0.0   "node dist/index.js" 10 seconds ago   Up 9 seconds   0.0.0.0:3000->3000/tcp crud-api
```

### Step 4: Test the API

```bash
# Health check
curl http://localhost:3000/api/health

# Get all users
curl http://localhost:3000/api/users

# Get single user
curl http://localhost:3000/api/users/1

# Create new user
curl -X POST http://localhost:3000/api/users \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","email":"test@example.com","age":25}'

# Update user
curl -X PUT http://localhost:3000/api/users/1 \
  -H "Content-Type: application/json" \
  -d '{"name":"Updated User","age":30}'

# Delete user
curl -X DELETE http://localhost:3000/api/users/1
```

### Step 5: Stop and Remove Container

Stop container:
```bash
docker stop crud-api
```

Remove container:
```bash
docker rm crud-api
```

Remove image:
```bash
docker rmi crud-api-service:1.0.0
```

## Docker Common Commands

### View Container Logs
```bash
docker logs crud-api
docker logs -f crud-api  # Follow logs (real-time)
```

### Access Container Shell
```bash
docker exec -it crud-api /bin/sh
```

### Inspect Container
```bash
docker inspect crud-api
```

### List All Images
```bash
docker images
```

### List All Containers
```bash
docker ps -a
```

## Environment Variables

You can pass environment variables to the container:

```bash
docker run -d -p 3000:3000 \
  -e PORT=3000 \
  --name crud-api \
  crud-api-service:1.0.0
```

## Docker Compose (Optional)

Create a `docker-compose.yml` file for easier orchestration:

```yaml
version: '3.8'

services:
  crud-api:
    build: .
    ports:
      - "3000:3000"
    environment:
      - PORT=3000
    restart: unless-stopped
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:3000/api/health"]
      interval: 30s
      timeout: 10s
      retries: 3
      start_period: 40s
```

Then run:
```bash
docker-compose up -d
docker-compose down
```

## Troubleshooting

### Port Already in Use
```bash
# Find process using port 3000
lsof -i :3000  # macOS/Linux
netstat -ano | findstr :3000  # Windows

# Kill process or use different port
docker run -p 8080:3000 crud-api-service:1.0.0
```

### Container Won't Start
```bash
# Check logs
docker logs crud-api

# Run with interactive mode to see errors
docker run -it crud-api-service:1.0.0
```

### Changes Not Reflected
```bash
# Rebuild the image
docker build --no-cache -t crud-api-service:1.0.0 .
```

## Performance Tips

1. Use Alpine Linux base image (reduces image size to ~150MB)
2. Multi-stage build (separates build and runtime)
3. Health checks included for monitoring
4. Minimal dependencies in production

## License

ISC

## Support

For issues or questions, please refer to the code comments and API documentation above.
