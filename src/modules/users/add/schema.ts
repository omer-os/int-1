import { t, type Static } from "elysia";
import {
  successResponseSchema,
  type ErrorResponse,
} from "../../../lib/error-response";

export const addUserSchema = t.Object({
  email: t.String({ format: "email" }),
  password: t.String({ minLength: 8 }),
});

export const addUserDataSchema = t.Object({
  id: t.Number(),
  email: t.String(),
});

export const addUserResponseSchema = successResponseSchema(addUserDataSchema);

export type AddUserInput = Static<typeof addUserSchema>;
export type AddUserSuccess = Static<typeof addUserResponseSchema>;
export type AddUserResult = AddUserSuccess | ErrorResponse;
