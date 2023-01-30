/* eslint-disable indent */
import paymentsService from "@/services/payments-service";
import { Request, Response } from "express";
import httpStatus from "http-status";

export async function getPayments(req: Request, res: Response) {
    const ticketId = req.query.ticketId;
    try {
        const paymentTicket = await paymentsService.getPaymentTicket(Number(ticketId));
        res.status(200).send(paymentTicket);
    } catch (error) {
        return res.sendStatus(httpStatus.NOT_FOUND);
    }
}
