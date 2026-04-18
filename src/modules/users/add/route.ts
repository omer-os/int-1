import Elysia from "elysia";
import { addUserSchema, addUserResponseSchema } from "./schema";
import { errorResponseSchema } from "../../../lib/error-response";
import { addUser } from "./service";

export const addUserRouter = new Elysia().post(
  "/",
  async ({ body, status }) => {
    const result = await addUser(body);
    if (!result.status) return status(409, result);
    return result;
  },
  {
    body: addUserSchema,
    response: {
      200: addUserResponseSchema,
      409: errorResponseSchema,
      422: errorResponseSchema,
      500: errorResponseSchema,
    },
  }
);
