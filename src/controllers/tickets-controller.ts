/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response } from "express";
import ticketsService from "@/services/tickets-service";

export async function getTicketsTypes(_req: Request, res: Response) {
  try {
    const ticketsTypes = await ticketsService.findTicketsTypes();
    res.status(200).send(ticketsTypes);
  } catch (err) {
    return res.status(401).send(err);
  }
}
