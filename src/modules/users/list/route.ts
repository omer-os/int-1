import Elysia from "elysia";
import { listUsersResponseSchema } from "./schema";
import { listUsers } from "./service";

export const listUsersRoute = new Elysia().get(
  "/",
  () => listUsers(),
  {
    response: {
      200: listUsersResponseSchema,
    },
  }
);
