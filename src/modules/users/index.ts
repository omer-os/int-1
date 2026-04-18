import Elysia from "elysia";
import { listUsersResponseSchema } from "./list/schema";
import { listUsersRoute } from "./list/route";

export const usersRoutes = new Elysia({ prefix: "/users" }).use(listUsersRoute)
