# 🚀 CRUD API Service - Setup Complete!

## ✅ What Has Been Created

Your complete Node.js TypeScript CRUD API application is ready to use!

### Project Structure
```
own-service/
├── src/
│   ├── index.ts              ← Express app initialization
│   ├── routes.ts             ← CRUD endpoints (5 endpoints)
│   ├── userService.ts        ← Business logic
│   └── data.ts               ← Dummy user data
├── dist/                     ← Compiled JavaScript (ready to run)
├── node_modules/             ← Dependencies installed
├── Dockerfile                ← Docker configuration
├── tsconfig.json             ← TypeScript config
├── package.json              ← Dependencies list
├── README.md                 ← Full documentation
└── QUICKSTART.md             ← Quick reference guide
```

---

## 🎯 API Overview

The application provides these 6 endpoints:

### 1. Health Check
```
GET /api/health
```
Verify server is running

### 2. Get All Users
```
GET /api/users
```
Returns all 4 dummy users

### 3. Get User by ID
```
GET /api/users/1
```
Get specific user (ID 1-4 have data)

### 4. Create User
```
POST /api/users
Body: { "name": "...", "email": "...", "age": ... }
```
Add new user (auto-increments ID)

### 5. Update User
```
PUT /api/users/1
Body: { "name": "...", "email": "...", "age": ... }
```
Modify existing user

### 6. Delete User
```
DELETE /api/users/1
```
Remove user by ID

---

## 🐳 Docker - Three Step Process

### Step 1️⃣: Build the Docker Image

```bash
cd "c:\Users\91920\Documents\Daily Practice\own-service"
docker build -t crud-api:1.0 .
```

**What this does:**
- Creates a Docker image named `crud-api` with tag `1.0`
- Uses Alpine Linux (lightweight)
- Installs dependencies
- Compiles TypeScript
- Creates optimized production image

**Time:** ~30-60 seconds  
**Size:** ~150MB

### Step 2️⃣: Run the Container

```bash
docker run -d -p 3000:3000 --name my-crud-api crud-api:1.0
```

**What this does:**
- `-d` : Run in background
- `-p 3000:3000` : Map port 3000 to port 3000
- `--name my-crud-api` : Name the container

**Your API is now accessible at:** `http://localhost:3000`

### Step 3️⃣: Test It Works

```bash
# Option 1: Using curl
curl http://localhost:3000/api/health

# Option 2: Using browser
# Open: http://localhost:3000/api/health
# Or: http://localhost:3000/api/users

# Option 3: Using PowerShell
(Invoke-WebRequest -Uri "http://localhost:3000/api/health").Content
```

---

## 📊 Sample Data (Pre-loaded)

The API comes with 4 dummy users:

```json
[
  { "id": 1, "name": "John Doe", "email": "john@example.com", "age": 28 },
  { "id": 2, "name": "Jane Smith", "email": "jane@example.com", "age": 25 },
  { "id": 3, "name": "Mike Johnson", "email": "mike@example.com", "age": 32 },
  { "id": 4, "name": "Sarah Williams", "email": "sarah@example.com", "age": 29 }
]
```

---

## 🏃 Local Development (Without Docker)

### Install & Run
```bash
# Install dependencies
npm install

# Run dev server (with hot reload)
npm run dev

# Output: Server is running on http://localhost:3000
```

### Build for Production
```bash
npm run build    # Compiles TypeScript to JavaScript
npm start        # Runs the compiled app
```

---

## 🐳 Docker Common Commands

### Check if container is running
```bash
docker ps
```

### View logs
```bash
docker logs my-crud-api
docker logs -f my-crud-api    # Follow logs in real-time
```

### Stop container
```bash
docker stop my-crud-api
```

### Restart container
```bash
docker restart my-crud-api
```

### Remove container
```bash
docker rm my-crud-api
```

### Remove image
```bash
docker rmi crud-api:1.0
```

---

## 🔧 Troubleshooting

### ❌ "Port 3000 already in use"
Use different port:
```bash
docker run -d -p 8080:3000 --name my-crud-api crud-api:1.0
# Access at http://localhost:8080
```

### ❌ "Container exited immediately"
Check the logs:
```bash
docker logs my-crud-api
```

### ❌ "Docker build fails"
Rebuild without cache:
```bash
docker build --no-cache -t crud-api:1.0 .
```

### ❌ "Cannot connect to localhost:3000"
Verify container is running:
```bash
docker ps
```

---

## 📝 Example Requests

### Get all users
```bash
curl http://localhost:3000/api/users
```

### Create new user
```bash
curl -X POST http://localhost:3000/api/users \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","email":"test@example.com","age":25}'
```

### Update user
```bash
curl -X PUT http://localhost:3000/api/users/1 \
  -H "Content-Type: application/json" \
  -d '{"name":"Updated Name","age":30}'
```

### Delete user
```bash
curl -X DELETE http://localhost:3000/api/users/1
```

---

## 📚 Documentation Files

- **[README.md](README.md)** - Complete detailed documentation
- **[QUICKSTART.md](QUICKSTART.md)** - Quick reference guide
- **[Dockerfile](Dockerfile)** - Docker build configuration
- **[src/index.ts](src/index.ts)** - Main app entry point
- **[src/routes.ts](src/routes.ts)** - API endpoint definitions

---

## 🎓 Tech Stack

- **Runtime:** Node.js 20 (Alpine Linux in Docker)
- **Language:** TypeScript
- **Framework:** Express.js
- **Package Manager:** npm
- **Containerization:** Docker
- **Build:** TypeScript Compiler (tsc)

---

## ✨ Features Included

✅ Full CRUD operations  
✅ No authentication required (as requested)  
✅ TypeScript with type safety  
✅ RESTful API design  
✅ Error handling  
✅ CORS enabled  
✅ Health check endpoint  
✅ Docker multi-stage build (optimized size)  
✅ Dummy data pre-loaded  
✅ Professional logging  
✅ Response standardization  

---

## 🚀 Next Steps

### Option 1: Use Locally
```bash
cd "c:\Users\91920\Documents\Daily Practice\own-service"
npm install
npm run dev
```

### Option 2: Use Docker (Recommended)
```bash
docker build -t crud-api:1.0 .
docker run -d -p 3000:3000 --name my-crud-api crud-api:1.0
```

### Option 3: Extend the Application
- Add database (MongoDB/PostgreSQL)
- Add authentication (JWT)
- Add validation (Joi/Zod)
- Add more endpoints
- Deploy to cloud (AWS/Azure/GCP)

---

## 💡 Pro Tips

1. **Persistent Data:** Currently data is in-memory. Restart container clears it.
2. **Custom Port:** Use `-p 8080:3000` to run on port 8080
3. **Multiple Instances:** Run multiple containers on different ports
4. **Environment Variables:** Can pass `PORT` via `-e PORT=3001`
5. **Docker Compose:** Use docker-compose.yml for complex setups

---

## ✅ Verification Checklist

- [ ] Dependencies installed (`npm install` ran successfully)
- [ ] TypeScript compiled (`npm run build` completed)
- [ ] Files created:
  - [ ] src/index.ts
  - [ ] src/routes.ts
  - [ ] src/userService.ts
  - [ ] src/data.ts
  - [ ] Dockerfile
  - [ ] package.json
  - [ ] tsconfig.json
- [ ] Docker image built (`docker build -t crud-api:1.0 .`)
- [ ] Container running (`docker run -d -p 3000:3000 --name my-crud-api crud-api:1.0`)
- [ ] API accessible (`curl http://localhost:3000/api/health`)

---

## 🤝 Support

For detailed information:
- See **README.md** for comprehensive documentation
- See **QUICKSTART.md** for quick reference
- Check application logs: `docker logs my-crud-api`

---

**Your CRUD API is ready to use! 🎉**

Start with Docker:
```bash
docker build -t crud-api:1.0 .
docker run -d -p 3000:3000 --name my-crud-api crud-api:1.0
curl http://localhost:3000/api/health
```

Happy coding! 🚀
