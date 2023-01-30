import paymentRepository from "@/repositories/payments-repository";
import { Payment } from "@prisma/client";
import { notFoundError } from "@/errors";

async function getPaymentTicket(ticketId: number) {
  if (!ticketId) throw new Error("Ticket id is required");

  const payment = await paymentRepository.findPayments(ticketId);
  if (!payment) throw notFoundError();
  return payment;
}

const paymentsService = {
  getPaymentTicket
};

export default paymentsService;
