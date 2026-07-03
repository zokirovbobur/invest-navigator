import { z } from "zod";

export const createPositionSchema = z.object({
  categoryId: z.string().min(1),
  offerId: z.string().min(1).max(100).optional(),
  symbol: z.string().min(1).max(20).optional(),
  amountUsd: z.number().positive().max(1_000_000_000),
  entryDate: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "entryDate must be YYYY-MM-DD")
    .refine((d) => new Date(d).getTime() <= Date.now(), "entryDate cannot be in the future"),
  /** The specific offer's actual annual rate (%), e.g. a specific bank's
   * deposit rate. Only meaningful for rate-based categories. */
  customRatePct: z.number().min(-50).max(500).optional(),
});
