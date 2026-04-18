import Elysia from "elysia";
import { listUsersResponseSchema } from "./schema";
import { errorResponseSchema } from "../../../lib/error-response";
import { listUsers } from "./service";

export const listUsersRoute = new Elysia().get(
  "/",
  () => listUsers(),
  {
    response: {
      200: listUsersResponseSchema,
      500: errorResponseSchema,
    },
  }
);
