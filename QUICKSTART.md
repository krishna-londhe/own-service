# Quick Start Guide - CRUD API Service

## What's Included

✅ Node.js TypeScript CRUD API application  
✅ Express.js server with 5 API endpoints  
✅ Dummy user data pre-loaded  
✅ Dockerfile for containerization  
✅ Complete Docker setup instructions  

## Files Created

```
own-service/
├── src/
│   ├── index.ts          - Main Express app setup
│   ├── routes.ts         - API endpoints (CRUD operations)
│   ├── userService.ts    - Business logic for user operations
│   └── data.ts           - Dummy user data
├── dist/                 - Compiled JavaScript (auto-generated)
├── Dockerfile            - Docker container configuration
├── .dockerignore         - Files to exclude from Docker image
├── .gitignore            - Git ignore patterns
├── tsconfig.json         - TypeScript compiler config
├── package.json          - Project dependencies
└── README.md             - Full documentation
```

## Quick Commands

### Development (Local)
```powershell
# Install dependencies
npm install

# Run development server with hot reload
npm run dev

# Build TypeScript
npm run build

# Run production server
npm start
```

Server will run on: `http://localhost:3000`

---

## Docker Setup (3 Simple Steps)

### Step 1: Build Docker Image

```powershell
cd "c:\Users\91920\Documents\Daily Practice\own-service"
docker build -t crud-api:1.0 .
```

**Expected output:**
```
[+] Building 2.3s (13/13) FINISHED
...
 => => writing image sha256:abc123...
```

### Step 2: Run Docker Container

```powershell
docker run -d -p 3000:3000 --name my-crud-api crud-api:1.0
```

**Explanation:**
- `-d` - Run in background (detached)
- `-p 3000:3000` - Map port 3000 from container to host
- `--name my-crud-api` - Give container a name

### Step 3: Test the API

```powershell
# Health check
curl http://localhost:3000/api/health

# Get all users
curl http://localhost:3000/api/users

# Create new user
curl -X POST http://localhost:3000/api/users `
  -H "Content-Type: application/json" `
  -d '{\"name\":\"Alice\",\"email\":\"alice@example.com\",\"age\":26}'

# Update user (ID 1)
curl -X PUT http://localhost:3000/api/users/1 `
  -H "Content-Type: application/json" `
  -d '{\"name\":\"Updated Name\",\"age\":30}'

# Delete user (ID 1)
curl -X DELETE http://localhost:3000/api/users/1
```

---

## API Endpoints Summary

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/health` | Health check |
| GET | `/api/users` | Get all users |
| GET | `/api/users/1` | Get user by ID |
| POST | `/api/users` | Create new user |
| PUT | `/api/users/1` | Update user |
| DELETE | `/api/users/1` | Delete user |

---

## Docker Container Management

### View Running Containers
```powershell
docker ps
```

### View Container Logs
```powershell
docker logs my-crud-api
docker logs -f my-crud-api  # Follow logs in real-time
```

### Stop Container
```powershell
docker stop my-crud-api
```

### Restart Container
```powershell
docker restart my-crud-api
```

### Remove Container
```powershell
docker stop my-crud-api
docker rm my-crud-api
```

### Remove Image
```powershell
docker rmi crud-api:1.0
```

---

## Troubleshooting

### Port 3000 Already in Use
Use a different port:
```powershell
docker run -d -p 8080:3000 --name my-crud-api crud-api:1.0
# Access at http://localhost:8080
```

### Container Won't Start
Check logs:
```powershell
docker logs my-crud-api
```

### Rebuild After Code Changes
```powershell
docker build --no-cache -t crud-api:1.0 .
docker stop my-crud-api
docker rm my-crud-api
docker run -d -p 3000:3000 --name my-crud-api crud-api:1.0
```

---

## API Response Examples

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
    }
  ],
  "message": "All users retrieved successfully"
}
```

### POST /api/users (Create)
**Request Body:**
```json
{
  "name": "Alice Brown",
  "email": "alice@example.com",
  "age": 26
}
```

**Response:**
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

---

## Next Steps

1. **Customize Users Data** - Edit [src/data.ts](src/data.ts) to change dummy data
2. **Add More Endpoints** - Extend [src/routes.ts](src/routes.ts)
3. **Add Database** - Replace in-memory data with MongoDB/PostgreSQL
4. **Add Authentication** - Implement JWT or OAuth
5. **Deploy** - Push Docker image to Docker Hub or cloud registry

---

## Features

✅ No authentication required (as requested)  
✅ CRUD operations fully implemented  
✅ Dummy data included  
✅ RESTful API design  
✅ Error handling  
✅ CORS enabled for cross-origin requests  
✅ Health check endpoint  
✅ Docker optimized with multi-stage build  
✅ TypeScript for type safety  

---

For more details, see [README.md](README.md)
