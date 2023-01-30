import { prisma } from "@/config";
import { Payment } from "@prisma/client";

async function findPayments(ticketId: number) {
  return await prisma.payment.findFirst({
    where: {
      ticketId
    }
  });
}

const paymentRepository = {
  findPayments,
};
  
export default paymentRepository;
