import { Elysia } from "elysia";
import openapi from "@elysiajs/openapi";
import { usersRoutes } from "./modules/users";


const app = new Elysia()
  .get("/", () => "Hello Elysia")
  .onError(({ error, code, status }) => {
    if (code === "VALIDATION") {
      return status(422, { status: false, message: error.message, data: null });
    }

    console.error(error);
    return status(500, {
      status: false,
      message: "Internal server error",
      data: null,
    });
  })
  .use(usersRoutes)
  .use(openapi())
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
