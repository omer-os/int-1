import { t, type Static } from "elysia";

export const errorResponseSchema = t.Object({
  status: t.Literal(false),
  message: t.String(),
  data: t.Null(),
});

export type ErrorResponse = Static<typeof errorResponseSchema>;
