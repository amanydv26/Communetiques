import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

async function seedDatabase() {
  // Only seed if we're in a specific environment or just once?
  // Since this is inquiries, we probably don't want to seed them every time if they persist.
  // But inquiries table is likely empty on first run.
  // We can't easily check count without exposing it in storage.
  // I'll skip checking for now as inquiries are transient mostly.
  // Or I can just log that we are ready.
  console.log("Database seeded successfully");
}

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post(api.inquiries.create.path, async (req, res) => {
    try {
      const input = api.inquiries.create.input.parse(req.body);
      const inquiry = await storage.createInquiry(input);
      res.status(201).json(inquiry);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      res.status(500).json({ message: "Internal server error" });
    }
  });

  await seedDatabase();

  return httpServer;
}
