/* eslint-disable @typescript-eslint/no-unused-vars */
import { Ticket } from "@prisma/client";
import ticketRepository from "@/repositories/tickets-repository";
import { notFoundError } from "@/errors";

async function findTicketsTypes() {
  const ticketsTypes = await ticketRepository.getTicketTypes();
  if (!ticketsTypes) return [];
  return ticketsTypes;
}

async function findTicket(id: number) {
  const ticket = await ticketRepository.findTicketById(id);
  if (!ticket) throw notFoundError();
  return ticket;
}

async function newTicket(ticketTypeid: number, enrollmentId: number) {
  return await ticketRepository.addTicket(ticketTypeid, enrollmentId);
}

const ticketsService = {
  findTicketsTypes,
  findTicket,
  newTicket,
};

export default ticketsService;
