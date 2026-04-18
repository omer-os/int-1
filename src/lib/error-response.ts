import { t } from "elysia";

export const errorResponseSchema = t.Object({
  message: t.String(),
  data: t.Null(),
  status: t.Boolean()
})

export type errorResponseSchemaTypes = {
  status: boolean
  message: string
  data: null
}
