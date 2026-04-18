import Elysia from "elysia";
import { addUserResponseSchema, addUserSchema } from "./schema";
import { addUserService } from "./service";


export const addUserRouter = new Elysia({ prefix: "/users" })
  .get(
    "/",
    async ({ body }) => {
      const users = await addUserService(body);

      return users;
    },
    {
      body: addUserSchema,
      response: {
        200: addUserResponseSchema,
      },
      detail: {
        summary: ''
      }
    }
  );
