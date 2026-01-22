"use client";

import React, { createContext, useState, useContext, useEffect, ReactNode } from "react";

interface User {
  name: string;
  email: string;
  phone?: string;
  address?: string;
  registeredAt: string;
}

interface AuthContextType {
  user: User | null;
  isLoggedIn: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  register: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
  updateProfile: (data: Partial<User>) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  // Load user from localStorage on mount
  useEffect(() => {
    const storedUser = localStorage.getItem("sibur_user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Save user to localStorage whenever it changes
  useEffect(() => {
    if (user) {
      localStorage.setItem("sibur_user", JSON.stringify(user));
    } else {
      localStorage.removeItem("sibur_user");
    }
  }, [user]);

  const register = async (name: string, email: string, password: string): Promise<boolean> => {
    try {
      // In a real app, this would be an API call
      // For now, we'll simulate registration
      
      // Check if user already exists
      const existingUsers = JSON.parse(localStorage.getItem("sibur_users") || "[]");
      const userExists = existingUsers.find((u: any) => u.email === email);
      
      if (userExists) {
        alert("Пользователь с таким email уже существует");
        return false;
      }

      // Create new user
      const newUser: User = {
        name,
        email,
        registeredAt: new Date().toLocaleDateString("ru-RU", {
          day: "numeric",
          month: "long",
          year: "numeric",
        }),
      };

      // Save to users list
      existingUsers.push({ ...newUser, password }); // In real app, password would be hashed
      localStorage.setItem("sibur_users", JSON.stringify(existingUsers));

      // Set current user
      setUser(newUser);
      return true;
    } catch (error) {
      console.error("Registration error:", error);
      return false;
    }
  };

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      // In a real app, this would be an API call
      const existingUsers = JSON.parse(localStorage.getItem("sibur_users") || "[]");
      const foundUser = existingUsers.find(
        (u: any) => u.email === email && u.password === password
      );

      if (!foundUser) {
        alert("Неверный email или пароль");
        return false;
      }

      // Remove password from user object
      const { password: _, ...userWithoutPassword } = foundUser;
      setUser(userWithoutPassword);
      return true;
    } catch (error) {
      console.error("Login error:", error);
      return false;
    }
  };

  const logout = () => {
    setUser(null);
  };

  const updateProfile = (data: Partial<User>) => {
    if (user) {
      const updatedUser = { ...user, ...data };
      setUser(updatedUser);

      // Update in users list
      const existingUsers = JSON.parse(localStorage.getItem("sibur_users") || "[]");
      const updatedUsers = existingUsers.map((u: any) =>
        u.email === user.email ? { ...u, ...data } : u
      );
      localStorage.setItem("sibur_users", JSON.stringify(updatedUsers));
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoggedIn: !!user,
        login,
        register,
        logout,
        updateProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
