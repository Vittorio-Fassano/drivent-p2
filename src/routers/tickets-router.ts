/* eslint-disable @typescript-eslint/no-unused-vars */
import { Router } from "express";
import { authenticateToken, validateBody } from "@/middlewares";
import { getTicketsTypes, getTickets, postTickets } from "@/controllers/tickets-controller";
import { ticketSchema } from "@/schemas/tickets.schema";

const ticketsRouter = Router();

ticketsRouter
  .all("/*", authenticateToken)
  .get("/types", getTicketsTypes)
  .get("/", getTickets)
  .post("/", validateBody(ticketSchema), postTickets);

export { ticketsRouter };
