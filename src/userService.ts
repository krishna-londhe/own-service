import { User, dummyUsers } from "./data";

let users: User[] = [...dummyUsers];
let nextId: number = Math.max(...users.map((u) => u.id)) + 1;

export const UserService = {
  // GET all users
  getAllUsers: (): User[] => {
    return users;
  },

  // GET user by ID
  getUserById: (id: number): User | undefined => {
    return users.find((user) => user.id === id);
  },

  // CREATE new user
  createUser: (
    name: string,
    email: string,
    age: number
  ): User => {
    const newUser: User = {
      id: nextId,
      name,
      email,
      age,
      createdAt: new Date().toISOString(),
    };
    users.push(newUser);
    nextId++;
    return newUser;
  },

  // UPDATE user
  updateUser: (
    id: number,
    name?: string,
    email?: string,
    age?: number
  ): User | undefined => {
    const user = users.find((u) => u.id === id);
    if (user) {
      if (name) user.name = name;
      if (email) user.email = email;
      if (age) user.age = age;
    }
    return user;
  },

  // DELETE user
  deleteUser: (id: number): boolean => {
    const index = users.findIndex((u) => u.id === id);
    if (index !== -1) {
      users.splice(index, 1);
      return true;
    }
    return false;
  },
};
