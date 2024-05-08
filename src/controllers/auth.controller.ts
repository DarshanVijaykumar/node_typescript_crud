import { Request, Response } from "express";
import bcrypt from "bcrypt";
import pool from "../db";

export const signup = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const result = await /* db/model funtion to add user to the database */
    res.status(201).json({
      message: "User created successfully",
      //   userId: result.rows[0].id,
    });
  } catch (error) {
    console.error("Error signing up:", error);
    res.status(500).json({ error: "An error occurred while signing up" });
  }
};

export const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  try {
    const result =  /* await model funtion to get/find the user and the credentials from the database */;
    if (result.rows.length === 0) {
      return res.status(401).json({ error: "Invalid username or password" });
    }

    const user = result.rows[0];
    const passwordMatch = await bcrypt.compare(password, user.password);//compare the user password with the password saved in the database
    if (!passwordMatch) {
      return res.status(401).json({ error: "Invalid username or password" });
    }

    // Set user session
    req.session.user = { id: user.id, username: user.username };//create a user session
    res.json({ message: "Login successful", user: req.session.user });
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).json({ error: "An error occurred while logging in" });
  }
};

export const logout = (req: Request, res: Response) => {
  // Destroy session
  req.session.destroy((err) => {
    if (err) {
      console.error("Error logging out:", err);
      res.status(500).json({ error: "An error occurred while logging out" });
    } else {
      res.clearCookie("sid"); // Clear session cookie
      res.json({ message: "Logout successful" });
    }
  });
};
