/* eslint-disable @typescript-eslint/no-unused-vars */
import { Ticket } from "@prisma/client";
import ticketRepository from "@/repositories/tickets-repository";

async function findTicketsTypes() {
  const ticketsTypes = await ticketRepository.getTicketTypes();
  return ticketsTypes;
}

const ticketsService = {
  findTicketsTypes,
};

export default ticketsService;
