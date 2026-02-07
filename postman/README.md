# 📮 Postman Configuration Guide

## Overview

This folder contains Postman collection and environment files for testing the CRUD API Service.

## Files Included

### 1. CRUD-API.postman_collection.json
Complete API collection with all 6 endpoints organized in logical groups:
- **Health & Info** - Server status and API information
- **Users - Read** - GET endpoints (all users, single user, error cases)
- **Users - Create** - POST endpoints (create users, validation tests)
- **Users - Update** - PUT endpoints (update users, partial updates)
- **Users - Delete** - DELETE endpoints (delete users, error handling)
- **Testing Scenarios** - Complete CRUD flow examples

**Total Requests:** 30+ pre-configured requests

### 2. Local.postman_environment.json
Environment configuration for **local development**
```
Base URL: http://localhost:3000
```

### 3. Docker.postman_environment.json
Environment configuration for **Docker deployment**
```
Base URL: http://localhost:3000
Container Name: my-crud-api
```

## How to Import

### Step 1: Download Postman
- Download from: https://www.postman.com/downloads/
- Install and open Postman

### Step 2: Import Collection

1. Click **Import** button (top-left)
2. Select **File** tab
3. Choose: `CRUD-API.postman_collection.json`
4. Click **Import**

**Or drag & drop** the JSON file into Postman

### Step 3: Import Environment

1. Click **Import** button again
2. Select **File** tab
3. Choose: `Local.postman_environment.json` (or `Docker.postman_environment.json`)
4. Click **Import**

### Step 4: Select Environment

1. Click environment dropdown (top-right)
2. Select **CRUD API - Local** or **CRUD API - Docker**
3. You're ready to test!

## Using the Collection

### Quick Start

1. Make sure your API is running:
   - **Local:** `npm run dev`
   - **Docker:** `docker run -d -p 3000:3000 --name my-crud-api crud-api:1.0`

2. Select environment (Local or Docker)

3. Start testing:
   - Click any request to open it
   - Click **Send** button to execute
   - View response in the lower panel

### Available Requests

#### Health & Info
- **Health Check** - `GET /api/health` - Verify server is running
- **API Info** - `GET /` - Get API information

#### Read Operations (GET)
- **Get All Users** - Retrieve all users
- **Get User by ID** - Get specific users (1, 2, 3, 4, 999)

#### Create Operations (POST)
- **Create New User** - Alice Brown
- **Create Another User** - Bob Wilson
- **Create User - Missing Email** - Test validation

#### Update Operations (PUT)
- **Update User (ID 1)** - Full update
- **Update User - Partial** - Update only name
- **Update User - Age Only** - Update only age
- **Update Non-Existent User** - Test error handling

#### Delete Operations (DELETE)
- **Delete User (ID 1)** - Delete a user
- **Delete User (ID 2)** - Delete another user
- **Delete Non-Existent User** - Test error handling

#### Testing Scenarios (Complete CRUD Flow)
1. Create a user
2. Verify creation (get all users)
3. Update the user
4. Verify update
5. Delete the user
6. Verify deletion

## Variables Used

### {{baseUrl}}
- **Local:** `http://localhost:3000`
- **Docker:** `http://localhost:3000`

This variable is automatically replaced in all requests when you select an environment.

## Request Examples

### Create User
```json
POST {{baseUrl}}/api/users
Content-Type: application/json

{
  "name": "Alice Brown",
  "email": "alice@example.com",
  "age": 26
}
```

### Update User
```json
PUT {{baseUrl}}/api/users/1
Content-Type: application/json

{
  "name": "Updated Name",
  "email": "updated@example.com",
  "age": 30
}
```

### Delete User
```
DELETE {{baseUrl}}/api/users/1
```

## Expected Responses

### Success Response (200 OK)
```json
{
  "success": true,
  "data": { /* user data */ },
  "message": "User retrieved successfully"
}
```

### Created Response (201 Created)
```json
{
  "success": true,
  "data": { /* new user data */ },
  "message": "User created successfully"
}
```

### Error Response (400 Bad Request)
```json
{
  "success": false,
  "message": "Name, email, and age are required"
}
```

### Not Found Response (404 Not Found)
```json
{
  "success": false,
  "message": "User with ID 999 not found"
}
```

## Tips & Tricks

### 1. Testing Multiple Endpoints
- Click the **play icon** ▶️ next to a folder to run all requests in it
- Results appear in the **Test Results** tab

### 2. Saving Responses
- Click **Save Response** to save API responses for comparison
- Useful for validating changes

### 3. Pre-request Scripts
- You can add scripts to run before each request
- Example: Generate unique data, set timestamps

### 4. Tests/Assertions
- Add tests to validate responses automatically
- Example: Check if status code is 200, or if response contains expected fields

### 5. Environment Variables
- Edit variables by clicking the **eye icon** next to environment name
- Add new variables as needed
- Use `{{variableName}}` in requests

## Running Requests via Runner

1. Click **Runner** button (left sidebar)
2. Select collection: **CRUD API Service**
3. Select environment: **CRUD API - Local** or **CRUD API - Docker**
4. Select which folder/requests to run
5. Click **Run CRUD API Service**
6. Watch all requests execute automatically

## Automating Tests

1. Right-click request → **Tests**
2. Add JavaScript tests:

```javascript
// Check status code
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

// Check response structure
pm.test("Response has success field", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData).to.have.property('success');
});

// Check data
pm.test("User data is correct", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.data.name).to.eql("John Doe");
});
```

## API Documentation

For complete API documentation, see:
- **README.md** - Full details
- **API Endpoints** - All endpoints explained
- **Response formats** - Example responses

## Troubleshooting

### "Cannot GET / "
- Ensure API is running
- Check base URL in environment
- Verify port 3000 is accessible

### "Connection refused"
- Start the API: `npm run dev` or `docker run ...`
- Check if container is running: `docker ps`

### "Unexpected token < in JSON"
- Usually means you're connecting to wrong server
- Verify environment selection
- Check base URL

### Requests not using variables
- Make sure environment is selected (dropdown top-right)
- Variables use `{{variableName}}` syntax
- Check variable name matches exactly

## Environment Switching

Quickly switch between Local and Docker:

1. Click environment dropdown (top-right)
2. Select **Local** or **Docker**
3. All requests automatically use the new base URL

## Creating New Requests

1. Click **+** to create new request
2. Enter request details:
   - Method: GET, POST, PUT, DELETE
   - URL: `{{baseUrl}}/api/...`
   - Headers: Content-Type: application/json
   - Body: Raw JSON (for POST/PUT)
3. Click **Save** to add to collection

## Best Practices

1. **Always select environment** before sending requests
2. **Use variables** instead of hardcoding URLs
3. **Test error cases** - Create tests for invalid IDs
4. **Save responses** - Compare before/after updates
5. **Organize requests** - Use folders for different operations
6. **Add descriptions** - Make requests easy to understand

## Next Steps

1. Import the collection and environment files
2. Select **Local** environment
3. Click **Health Check** and press **Send**
4. Explore other endpoints
5. Create your own requests as needed

---

**Happy API Testing! 🚀**
