/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response } from "express";
import { AuthenticatedRequest } from "@/middlewares";
import ticketsService from "@/services/tickets-service";
import httpStatus from "http-status";

export async function getTicketsTypes(req: AuthenticatedRequest, res: Response) {
  try {
    const ticketsTypes = await ticketsService.findTicketsTypes();
    res.status(200).send(ticketsTypes);
  } catch (err) {
    return res.sendStatus(httpStatus.NOT_FOUND);
  }
}

export async function getTickets(req: AuthenticatedRequest, res: Response) {
  const { userId } = req;
  try {
    const tickets = await ticketsService.findTicket(userId);
    res.status(201).send(tickets);
  } catch (err) {
    return res.sendStatus(httpStatus.NOT_FOUND);
  }
}
