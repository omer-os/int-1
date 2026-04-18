import { t, type TSchema } from "elysia";

export const successResponseSchema = <T extends TSchema>(data: T) =>
  t.Object({
    status: t.Literal(true),
    message: t.String(),
    data,
  });
