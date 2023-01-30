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

async function addTicket(ticketTypeId: number, enrollmentId: number) {
  return prisma.ticket.create ({
    data: {
      status: "RESERVED",
      ticketTypeId,
      enrollmentId
    },
    select: {
      id: true,
      status: true,
      ticketTypeId: true,
      enrollmentId: true,
      TicketType: true,
      createdAt: true,
      updatedAt: true
    }
  });
}

const ticketsRepository = {
  getTicketTypes,
  findTicketById,
  addTicket,
};

export default ticketsRepository;
