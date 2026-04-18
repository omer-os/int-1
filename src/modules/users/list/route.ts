import Elysia from "elysia";
import { getAllUsersService } from "./serivce";
import { listUsersResponseSchema } from "./schema";


export const listUsersRoute = new Elysia({ prefix: "/users" })
  .get(
    "/",
    async () => {
      const users = await getAllUsersService();

      return users;
    },
    {
      response: {
        200: listUsersResponseSchema,
      },
    }
  );
