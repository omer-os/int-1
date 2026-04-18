import { t, type Static, type TSchema } from "elysia";

export const errorResponseSchema = t.Object({
  status: t.Literal(false),
  message: t.String(),
  data: t.Null(),
});

export const successResponseSchema = <T extends TSchema>(data: T) =>
  t.Object({
    status: t.Literal(true),
    message: t.String(),
    data,
  });

export type ErrorResponse = Static<typeof errorResponseSchema>;
