import express, { Express } from "express";
import cors from "cors";
import routes from "./routes";

const app: Express = express();
const PORT: number = parseInt(process.env.PORT || "3000");

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api", routes);

// Root endpoint
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Welcome to CRUD API Service",
    version: "1.0.0",
    endpoints: {
      health: "GET /api/health",
      getAllUsers: "GET /api/users",
      getUserById: "GET /api/users/:id",
      createUser: "POST /api/users",
      updateUser: "PUT /api/users/:id",
      deleteUser: "DELETE /api/users/:id",
    },
  });
});

// Start server
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/api/health`);
});
