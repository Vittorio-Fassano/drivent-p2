/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response } from "express";
import { AuthenticatedRequest } from "@/middlewares";
import ticketsService from "@/services/tickets-service";
import enrollmentsService from "@/services/enrollments-service";
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

export async function postTickets(req: AuthenticatedRequest, res: Response) {
  const ticketTypeId: number = req.body.ticketTypeId;
  const userId: number = req.userId;

  try {
    const enrollment = await enrollmentsService.enrollmentById(userId);
    const ticket = await ticketsService.newTicket(ticketTypeId, enrollment.id);
    res.status(201).send(ticket);
  } catch (error) {
    return res.sendStatus(httpStatus.NOT_FOUND);
  }
}
