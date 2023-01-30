import { prisma } from "@/config";

async function getTicketTypes() {
  return prisma.ticketType.findMany();
}

async function findTicketById(id: number) {
  return prisma.ticket.findFirst({
    where: {
      Enrollment: {
        userId: id,
      }
    }
  });
}

const ticketsRepository = {
  getTicketTypes,
  findTicketById,
};

export default ticketsRepository;
