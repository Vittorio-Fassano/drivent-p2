import { Router } from "express";
import { authenticateToken } from "@/middlewares";
import { getPayments } from "@/controllers/payment-controller";
import { paymentSchema } from "@/schemas/payment-schema";

const paymentRouter = Router();

paymentRouter
  .all("/*", authenticateToken)
  .get("/", getPayments);

export { paymentRouter };
