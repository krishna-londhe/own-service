# 🎯 CRUD API Service - Getting Started Guide

## ✨ What You Have

A **complete, production-ready** Node.js TypeScript CRUD API with:
- ✅ 6 API endpoints (CRUD operations)
- ✅ Dummy user data pre-loaded
- ✅ TypeScript for type safety
- ✅ Express.js web framework
- ✅ Docker support with multi-stage build
- ✅ Zero authentication required (as requested)
- ✅ Comprehensive documentation

---

## 🚀 Get Started in 2 Minutes

### Method 1: Using Docker (Recommended) 🐳

```powershell
# Open PowerShell, navigate to project
cd "c:\Users\91920\Documents\Daily Practice\own-service"

# Build Docker image
docker build -t crud-api:1.0 .

# Run container
docker run -d -p 3000:3000 --name my-crud-api crud-api:1.0

# Test it
curl http://localhost:3000/api/health
```

**That's it! Your API is running at:** `http://localhost:3000`

### Method 2: Local Development 💻

```powershell
# Navigate to project
cd "c:\Users\91920\Documents\Daily Practice\own-service"

# Install dependencies
npm install

# Run development server
npm run dev

# Output: Server is running on http://localhost:3000
```

---

## 📡 API Endpoints

### Get All Users
```
GET http://localhost:3000/api/users
```
Returns all 4 dummy users

### Get Single User
```
GET http://localhost:3000/api/users/1
```
Get user by ID

### Create User
```
POST http://localhost:3000/api/users
Content-Type: application/json

{
  "name": "Alice Brown",
  "email": "alice@example.com",
  "age": 26
}
```

### Update User
```
PUT http://localhost:3000/api/users/1
Content-Type: application/json

{
  "name": "Updated Name",
  "email": "newemail@example.com",
  "age": 30
}
```

### Delete User
```
DELETE http://localhost:3000/api/users/1
```

### Health Check
```
GET http://localhost:3000/api/health
```

---

## 🐳 Docker Complete Guide

### Build the Image

```powershell
docker build -t crud-api:1.0 .
```

**What happens:**
1. Downloads Node.js 20 Alpine image
2. Installs dependencies from package.json
3. Compiles TypeScript to JavaScript
4. Creates optimized production image (~150MB)

### Run the Container

```powershell
# Basic
docker run -d -p 3000:3000 --name my-crud-api crud-api:1.0

# With custom port
docker run -d -p 8080:3000 --name my-crud-api crud-api:1.0

# Interactive (see logs)
docker run -it -p 3000:3000 crud-api:1.0
```

### Container Management

```powershell
# View running containers
docker ps

# View logs
docker logs -f my-crud-api

# Stop container
docker stop my-crud-api

# Restart container
docker restart my-crud-api

# Remove container
docker rm my-crud-api

# Remove image
docker rmi crud-api:1.0
```

### Docker Compose (Alternative)

```powershell
# Start with compose
docker-compose up -d

# View logs
docker-compose logs -f

# Stop with compose
docker-compose down
```

---

## 📊 Sample Responses

### GET /api/users
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
    },
    {
      "id": 2,
      "name": "Jane Smith",
      "email": "jane@example.com",
      "age": 25,
      "createdAt": "2024-01-16T14:45:00Z"
    }
  ],
  "message": "All users retrieved successfully"
}
```

### POST /api/users (Create)
**Request:**
```json
{
  "name": "Alice Brown",
  "email": "alice@example.com",
  "age": 26
}
```

**Response (201 Created):**
```json
{
  "success": true,
  "data": {
    "id": 5,
    "name": "Alice Brown",
    "email": "alice@example.com",
    "age": 26,
    "createdAt": "2024-01-20T12:30:00Z"
  },
  "message": "User created successfully"
}
```

### Error Response (404 Not Found)
```json
{
  "success": false,
  "message": "User with ID 999 not found"
}
```

---

## 🗂️ Project Files Explained

### Source Code (TypeScript)

**src/index.ts** - Main server file
- Sets up Express app
- Configures middleware (CORS, JSON parser)
- Loads routes
- Starts server on port 3000

**src/routes.ts** - API endpoints
- GET /api/health - Health check
- GET /api/users - Get all users
- GET /api/users/:id - Get user by ID
- POST /api/users - Create user
- PUT /api/users/:id - Update user
- DELETE /api/users/:id - Delete user

**src/userService.ts** - Business logic
- getAllUsers() - Returns all users
- getUserById(id) - Returns specific user
- createUser(...) - Adds new user
- updateUser(...) - Modifies user
- deleteUser(id) - Removes user

**src/data.ts** - Dummy data
- Pre-loaded 4 sample users
- User interface definition

### Configuration Files

**package.json** - Project metadata
- Dependencies: express, cors
- Dev dependencies: TypeScript, @types/*
- Scripts: dev, build, start

**tsconfig.json** - TypeScript compiler settings
- Target: ES2020
- Module: CommonJS
- Output: dist/

**Dockerfile** - Container configuration
- Multi-stage build
- Production optimized
- Health checks included

**docker-compose.yml** - Compose configuration
- Service definition
- Port mapping
- Health checks
- Restart policy

### Documentation

**README.md** - Complete documentation
**QUICKSTART.md** - Quick reference
**DOCKER_GUIDE.md** - Docker detailed guide
**SETUP_COMPLETE.md** - Setup verification
**PROJECT_SUMMARY.md** - Project overview

---

## ✅ Verification Steps

### 1. Check Files Exist

```powershell
# Verify source code
Test-Path "c:\Users\91920\Documents\Daily Practice\own-service\src\index.ts"
Test-Path "c:\Users\91920\Documents\Daily Practice\own-service\src\routes.ts"
Test-Path "c:\Users\91920\Documents\Daily Practice\own-service\Dockerfile"

# Verify compiled output
Test-Path "c:\Users\91920\Documents\Daily Practice\own-service\dist\index.js"
```

### 2. Check Dependencies

```powershell
# Verify npm packages installed
Test-Path "c:\Users\91920\Documents\Daily Practice\own-service\node_modules\express"
Test-Path "c:\Users\91920\Documents\Daily Practice\own-service\node_modules\cors"
```

### 3. Build Docker Image

```powershell
docker build -t crud-api:1.0 .
docker images | findstr "crud-api"
# Should show: crud-api  1.0  <image-id>
```

### 4. Run and Test

```powershell
docker run -d -p 3000:3000 --name test-api crud-api:1.0
Start-Sleep -Seconds 2
curl http://localhost:3000/api/health
docker stop test-api
docker rm test-api
```

---

## 🛠️ Common Tasks

### Change Port

**In Docker:**
```powershell
docker run -d -p 8080:3000 --name my-crud-api crud-api:1.0
# Access: http://localhost:8080
```

**In Local Dev:**
```powershell
# Modify src/index.ts:
const PORT = parseInt(process.env.PORT || "8080");
```

### Add More Dummy Users

Edit **src/data.ts**:
```typescript
export const dummyUsers: User[] = [
  // ... existing users
  {
    id: 5,
    name: "New User",
    email: "new@example.com",
    age: 25,
    createdAt: new Date().toISOString(),
  },
];
```

Rebuild and restart.

### Modify API Response Format

Edit response in **src/routes.ts**:
```typescript
res.json({
  success: true,
  data: users,
  message: "All users retrieved successfully",
  timestamp: new Date().toISOString(), // Add timestamp
});
```

---

## 🚨 Troubleshooting

### "Port 3000 already in use"

**Windows:**
```powershell
# Find what's using port 3000
Get-NetTCPConnection -LocalPort 3000

# Kill process (if needed)
Stop-Process -Id <PID> -Force

# Or use different port
docker run -d -p 8080:3000 --name my-crud-api crud-api:1.0
```

### "Docker image build fails"

```powershell
# Rebuild without cache
docker build --no-cache -t crud-api:1.0 .

# Check for errors in output
```

### "npm install fails"

```powershell
# Clear npm cache
npm cache clean --force

# Delete node_modules and package-lock.json
Remove-Item -Recurse node_modules
Remove-Item package-lock.json

# Reinstall
npm install
```

### "API returns 404"

1. Verify container is running: `docker ps`
2. Check logs: `docker logs my-crud-api`
3. Verify URL is correct (e.g., `/api/users` not `/users`)
4. Check Content-Type header for POST/PUT requests

---

## 📦 Project Dependencies

| Package | Purpose | Version |
|---------|---------|---------|
| express | Web framework | ^4.18.2 |
| cors | Cross-origin support | ^2.8.5 |
| typescript | Language | ^5.1.3 |
| @types/express | TypeScript types | ^4.17.17 |
| @types/node | TypeScript types | ^20.3.1 |
| @types/cors | TypeScript types | ^2.8.19 |
| ts-node | TypeScript runner | ^10.9.1 |

All dependencies are **already installed**.

---

## 🎓 Next Steps

### Short Term
1. Test all API endpoints
2. Verify Docker containerization works
3. Review source code to understand structure

### Medium Term
1. Add more endpoints as needed
2. Connect to a real database (MongoDB/PostgreSQL)
3. Add input validation (Joi/Zod)

### Long Term
1. Add authentication (JWT/OAuth)
2. Add automated tests (Jest)
3. Deploy to cloud (AWS/Azure/GCP)
4. Set up CI/CD pipeline

---

## 📚 Documentation Files

Choose the right file for your need:

| File | Purpose | Best For |
|------|---------|----------|
| **QUICKSTART.md** | 5-minute overview | Getting started |
| **README.md** | Complete reference | Full understanding |
| **DOCKER_GUIDE.md** | Docker commands | Docker help |
| **SETUP_COMPLETE.md** | Verification list | Confirmation |
| **PROJECT_SUMMARY.md** | Overview | Big picture |
| **GETTING_STARTED.md** | This file | First steps |

---

## 🎉 You're Ready!

**Your complete CRUD API is ready to use.**

### To Start Using It:

**Option 1 - Docker (Recommended):**
```powershell
docker build -t crud-api:1.0 .
docker run -d -p 3000:3000 --name my-crud-api crud-api:1.0
curl http://localhost:3000/api/health
```

**Option 2 - Local Development:**
```powershell
npm install
npm run dev
```

---

## 💡 Pro Tips

1. **Use Postman/Insomnia** for easier API testing
2. **Check logs regularly** for debugging: `docker logs -f my-crud-api`
3. **Keep data in-memory for now**, add database later
4. **Export to Docker Hub** when ready to share
5. **Use environment variables** for configuration

---

## 📞 Quick Reference

```powershell
# Docker commands
docker build -t crud-api:1.0 .        # Build
docker run -d -p 3000:3000 crud-api:1.0  # Run
docker ps                              # List
docker logs -f crud-api               # Logs
docker stop crud-api                  # Stop

# npm commands
npm install                            # Install deps
npm run build                          # Compile TS
npm run dev                            # Dev server
npm start                              # Prod server

# API
curl http://localhost:3000/api/users   # Get users
curl http://localhost:3000/api/health  # Health
```

---

**Everything is set up and ready to go! Happy coding! 🚀**
