import { t, Static } from "elysia";

export const addUserSchema = t.Object({
  email: t.String(),
  password: t.String()
})
export const addUserResponseSchema = t.Object({
  id: t.Number(),
  email: t.String(),
})

export type addUserResponseSchemaType = Static<typeof addUserResponseSchema>
export type AddUserSchemaType = Static<typeof addUserResponseSchema>

