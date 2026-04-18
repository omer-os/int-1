import { Elysia } from "elysia";
import openapi from "@elysiajs/openapi";
import { usersRoutes } from "./modules/users";


const app = new Elysia().get("/", () => "Hello Elysia")
  .use(usersRoutes)
  .onError(({ error, code }) => {
    if (code === 'VALIDATION') return error.detail(error.message)
  })
  .use(openapi())
  .listen(3000)

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
