import { t } from "elysia";

export const listUsersResponseSchema = t.Array(t.Object({
  id: t.Number({
  }),
  email: t.String({
    format: "email"
  }),
})) 
