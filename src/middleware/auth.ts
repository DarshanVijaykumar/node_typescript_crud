import { Request, Response, NextFunction } from "express";

// Middleware function to check if the user is logged in
export const isLoggedIn = (req: Request, res: Response, next: NextFunction) => {
  // Check if user is authenticated/logged in
  if (req.isAuthenticated()) {
    // Assuming you are using Passport.js for authentication
    // If user is authenticated, continue with the next middleware or route handler
    return next();
  } else {
    // If user is not authenticated, return an error response
    return res.status(401).json({ error: "Unauthorized" });
  }
};
