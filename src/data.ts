export interface User {
  id: number;
  name: string;
  email: string;
  age: number;
  createdAt: string;
}

// Dummy users data
export const dummyUsers: User[] = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    age: 28,
    createdAt: "2024-01-15T10:30:00Z",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    age: 25,
    createdAt: "2024-01-16T14:45:00Z",
  },
  {
    id: 3,
    name: "Mike Johnson",
    email: "mike@example.com",
    age: 32,
    createdAt: "2024-01-17T09:15:00Z",
  },
  {
    id: 4,
    name: "Sarah Williams",
    email: "sarah@example.com",
    age: 29,
    createdAt: "2024-01-18T16:20:00Z",
  },
];
