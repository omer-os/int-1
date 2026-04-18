import { t, type Static } from "elysia";
import { successResponseSchema } from "../../../lib/error-response";

export const listUsersDataSchema = t.Array(
  t.Object({
    id: t.Number(),
    email: t.String({ format: "email" }),
  })
);

export const listUsersResponseSchema = successResponseSchema(listUsersDataSchema);

export type ListUsersData = Static<typeof listUsersDataSchema>;
export type ListUsersResponse = Static<typeof listUsersResponseSchema>;
