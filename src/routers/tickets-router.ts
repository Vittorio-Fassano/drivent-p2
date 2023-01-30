/* eslint-disable @typescript-eslint/no-unused-vars */
import { Router } from "express";
import { authenticateToken } from "@/middlewares";
import { getTicketsTypes, getTickets } from "@/controllers/tickets-controller";
import { ticketSchema } from "@/schemas/tickets.schema";

const ticketsRouter = Router();

ticketsRouter
  .all("/*", authenticateToken)
  .get("/", getTickets)
  .get("/types", getTicketsTypes);
  
export { ticketsRouter };
