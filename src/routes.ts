import express, { Request, Response, Router } from "express";
import { UserService } from "./userService";

const router = Router();

// GET all users
router.get("/users", (req: Request, res: Response) => {
  const users = UserService.getAllUsers();
  res.json({
    success: true,
    data: users,
    message: "All users retrieved successfully",
  });
});

// GET user by ID
router.get("/users/:id", (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const user = UserService.getUserById(id);

  if (!user) {
    res.status(404).json({
      success: false,
      message: `User with ID ${id} not found`,
    });
    return;
  }

  res.json({
    success: true,
    data: user,
    message: "User retrieved successfully",
  });
});

// CREATE new user
router.post("/users", (req: Request, res: Response) => {
  const { name, email, age } = req.body;

  if (!name || !email || !age) {
    res.status(400).json({
      success: false,
      message: "Name, email, and age are required",
    });
    return;
  }

  const newUser = UserService.createUser(name, email, age);
  res.status(201).json({
    success: true,
    data: newUser,
    message: "User created successfully",
  });
});

// UPDATE user
router.put("/users/:id", (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const { name, email, age } = req.body;

  const updatedUser = UserService.updateUser(id, name, email, age);

  if (!updatedUser) {
    res.status(404).json({
      success: false,
      message: `User with ID ${id} not found`,
    });
    return;
  }

  res.json({
    success: true,
    data: updatedUser,
    message: "User updated successfully",
  });
});

// DELETE user
router.delete("/users/:id", (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const deleted = UserService.deleteUser(id);

  if (!deleted) {
    res.status(404).json({
      success: false,
      message: `User with ID ${id} not found`,
    });
    return;
  }

  res.json({
    success: true,
    message: "User deleted successfully",
  });
});

// Health check endpoint
router.get("/health", (req: Request, res: Response) => {
  res.json({
    success: true,
    message: "Server is running",
  });
});

export default router;
