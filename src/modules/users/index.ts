import Elysia from "elysia";
import { listUsersRoute } from "./list/route";
import { addUserRouter } from "./add/route";

export const usersRoutes = new Elysia({ prefix: "/users" })
  .use(listUsersRoute)
  .use(addUserRouter);

