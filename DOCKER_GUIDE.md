# Docker Setup & Deployment Guide

## Prerequisites

- Docker Desktop installed and running
- Windows 10/11 with WSL 2 (for Windows)
- or macOS with Docker Desktop
- or Linux with Docker installed

## Option 1: Using Docker (Recommended)

### Step 1: Build the Docker Image

```powershell
# Navigate to project directory
cd "c:\Users\91920\Documents\Daily Practice\own-service"

# Build the image
docker build -t crud-api:1.0 .
```

**Explanation:**
- `docker build` - Build an image from Dockerfile
- `-t crud-api:1.0` - Tag the image (name:version)
- `.` - Use Dockerfile in current directory

**Expected output:**
```
[+] Building 45.3s (13/13) FINISHED
 => [internal] load build definition from Dockerfile  
 => [stage-0 1/4] FROM node:20-alpine
 => [stage-0 2/4] WORKDIR /app
 => [stage-0 3/4] COPY package*.json ./
 => [stage-0 4/4] RUN npm install
 => [stage-1 1/4] FROM node:20-alpine
 ...
 => => writing image sha256:abc123def456...
```

### Step 2: Run the Container

```powershell
# Run in background
docker run -d -p 3000:3000 --name my-crud-api crud-api:1.0
```

**Explanation:**
- `docker run` - Create and start a container
- `-d` - Detached mode (background)
- `-p 3000:3000` - Port mapping (host:container)
- `--name my-crud-api` - Container name
- `crud-api:1.0` - Image name:tag

**Expected output:**
```
62f1e89e5e9e6f3a7c2b1d8e9f0a1b2c3d4e5f6a
```

### Step 3: Verify Container is Running

```powershell
# List running containers
docker ps

# Expected output:
# CONTAINER ID   IMAGE          COMMAND              CREATED         STATUS         PORTS                  NAMES
# 62f1e89e5e9e   crud-api:1.0   "node dist/index.js" 5 seconds ago   Up 4 seconds   0.0.0.0:3000->3000/tcp my-crud-api
```

### Step 4: Test the API

```powershell
# Using PowerShell
(Invoke-WebRequest -Uri "http://localhost:3000/api/health").Content

# Using curl (if installed)
curl http://localhost:3000/api/health

# Using browser
# Visit: http://localhost:3000/api/health
# or: http://localhost:3000/api/users
```

**Expected response:**
```json
{
  "success": true,
  "message": "Server is running"
}
```

### Step 5: Stop the Container

```powershell
docker stop my-crud-api
```

---

## Option 2: Using Docker Compose (Easier)

Docker Compose simplifies running containers with a configuration file.

### Step 1: Build and Run with Compose

```powershell
# Navigate to project directory
cd "c:\Users\91920\Documents\Daily Practice\own-service"

# Build and start container
docker-compose up -d

# Expected output:
# [+] Building 45.3s (13/13) FINISHED
# [+] Running 1/1
#  ✓ Container crud-api-service Created
```

### Step 2: View Logs

```powershell
docker-compose logs -f
```

### Step 3: Stop Services

```powershell
# Stop all services
docker-compose down

# Stop but keep volumes
docker-compose stop
```

### Step 4: Restart Services

```powershell
docker-compose restart
```

---

## Common Docker Commands

### View Information

```powershell
# List running containers
docker ps

# List all containers (including stopped)
docker ps -a

# List images
docker images

# Get container details
docker inspect my-crud-api

# View container logs
docker logs my-crud-api

# Follow logs in real-time
docker logs -f my-crud-api

# Get last 50 lines
docker logs --tail 50 my-crud-api
```

### Container Management

```powershell
# Start container
docker start my-crud-api

# Stop container (graceful shutdown)
docker stop my-crud-api

# Restart container
docker restart my-crud-api

# Kill container (force stop)
docker kill my-crud-api

# Remove container
docker rm my-crud-api

# Remove image
docker rmi crud-api:1.0

# Remove unused resources
docker prune
```

### Access Container

```powershell
# Execute command in container
docker exec my-crud-api ls -la

# Interactive shell
docker exec -it my-crud-api /bin/sh

# Exit shell: type 'exit'
```

### Network & Port Information

```powershell
# Show port mappings
docker port my-crud-api

# List networks
docker network ls

# Inspect network
docker network inspect bridge
```

---

## Troubleshooting

### Port 3000 Already in Use

**Problem:** 
```
docker: Error response from daemon: driver failed programming external connectivity on endpoint
```

**Solution 1: Use different port**
```powershell
docker run -d -p 8080:3000 --name my-crud-api crud-api:1.0
# Access at http://localhost:8080
```

**Solution 2: Find and stop process using port 3000**
```powershell
# Find process
Get-Process | Where-Object {$_.Handles -match "3000"}

# Or use netstat
netstat -ano | findstr :3000

# Kill process (if needed)
Stop-Process -Id <PID> -Force
```

### Container Exits Immediately

**Problem:** Container stops right after starting

**Solution: Check logs**
```powershell
docker logs my-crud-api
```

Common causes:
- Application error
- Port conflict
- Insufficient memory
- Missing environment variables

### Cannot Connect to Container

**Problem:** Connection refused on localhost:3000

**Solution: Verify container is running**
```powershell
docker ps

# If not listed, check exited containers
docker ps -a

# Check logs
docker logs my-crud-api
```

### Docker Daemon Not Running

**Problem:** 
```
Cannot connect to the Docker daemon
```

**Solution:**
1. Open Docker Desktop application
2. Wait for it to fully start (check system tray)
3. Try command again

### Out of Disk Space

**Problem:**
```
no space left on device
```

**Solution: Clean up Docker**
```powershell
# Remove unused containers
docker container prune -f

# Remove unused images
docker image prune -a

# Remove unused volumes
docker volume prune -f

# Complete cleanup
docker system prune -a
```

### Rebuild After Code Changes

```powershell
# Stop and remove old container
docker stop my-crud-api
docker rm my-crud-api

# Rebuild image without cache
docker build --no-cache -t crud-api:1.0 .

# Run new container
docker run -d -p 3000:3000 --name my-crud-api crud-api:1.0
```

---

## Performance Tips

### Reduce Image Size

The multi-stage Dockerfile:
1. First stage: Build TypeScript
2. Second stage: Only copy compiled code + production dependencies
3. Result: ~150MB image instead of 500MB+

### Use Alpine Linux Base

- Smaller base image (150MB vs 1GB)
- Faster downloads
- Smaller attack surface
- Pre-installed in our Dockerfile

### Health Checks

Container includes health checks:
```powershell
docker ps
# Shows "healthy" or "unhealthy" status
```

### Resource Limits (Optional)

```powershell
docker run -d \
  -p 3000:3000 \
  --name my-crud-api \
  --memory=512m \
  --cpus=1 \
  crud-api:1.0
```

---

## Environment Variables

### Pass to Docker

```powershell
docker run -d \
  -p 3000:3000 \
  -e PORT=3000 \
  -e NODE_ENV=production \
  --name my-crud-api \
  crud-api:1.0
```

### In Docker Compose

```yaml
services:
  crud-api:
    environment:
      - PORT=3000
      - NODE_ENV=production
```

---

## Production Deployment

### Recommended Setup

```powershell
# Build production image
docker build -t crud-api:v1.0.0 .

# Tag for registry
docker tag crud-api:v1.0.0 username/crud-api:v1.0.0

# Push to Docker Hub
docker push username/crud-api:v1.0.0

# Run on production server
docker run -d \
  -p 3000:3000 \
  --name crud-api \
  --restart unless-stopped \
  username/crud-api:v1.0.0
```

### Auto-restart Policy

```powershell
docker run -d \
  -p 3000:3000 \
  --restart unless-stopped \
  --name my-crud-api \
  crud-api:1.0
```

Options:
- `no` - Don't automatically restart
- `always` - Always restart
- `unless-stopped` - Always unless explicitly stopped
- `on-failure` - Only on non-zero exit code

---

## Docker Compose Advanced

### Multiple Services

```yaml
version: '3.8'
services:
  api:
    build: .
    ports:
      - "3000:3000"
  
  database:
    image: postgres:15
    ports:
      - "5432:5432"
    environment:
      POSTGRES_PASSWORD: password
```

### Volumes for Data Persistence

```yaml
services:
  api:
    build: .
    volumes:
      - ./data:/app/data
    ports:
      - "3000:3000"
```

### Networks

```yaml
networks:
  app-network:
    driver: bridge

services:
  api:
    networks:
      - app-network
```

---

## Useful Links

- [Docker Documentation](https://docs.docker.com/)
- [Docker Hub](https://hub.docker.com/)
- [Node.js Docker Image](https://hub.docker.com/_/node)
- [Docker Best Practices](https://docs.docker.com/develop/dev-best-practices/)

---

## Quick Reference

| Task | Command |
|------|---------|
| Build | `docker build -t crud-api:1.0 .` |
| Run | `docker run -d -p 3000:3000 --name my-crud-api crud-api:1.0` |
| Logs | `docker logs -f my-crud-api` |
| Stop | `docker stop my-crud-api` |
| Remove | `docker rm my-crud-api` |
| List | `docker ps` |
| Compose Up | `docker-compose up -d` |
| Compose Down | `docker-compose down` |

---

Your application is ready for containerization! 🐳
