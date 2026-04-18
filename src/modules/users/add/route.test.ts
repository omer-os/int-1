import { describe, expect, it, mock } from "bun:test";

mock.module("../../../lib/db", () => ({
  db: {
    user: {
      findFirst: async () => null,
      create: async () => ({ id: 1, email: "new@test.com" }),
    },
  },
}));

const { addUserRouter } = await import("./route");

describe("POST /users", () => {
  it("creates a new user", async () => {
    const res = await addUserRouter.handle(
      new Request("http://localhost/", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          email: "new@test.com",
          password: "password123",
        }),
      })
    );
    const body = await res.json();

    expect(res.status).toBe(200);
    expect(body.status).toBe(true);
    expect(body.data).toEqual({ id: 1, email: "new@test.com" });
  });

  it("rejects an invalid payload with 422", async () => {
    const res = await addUserRouter.handle(
      new Request("http://localhost/", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email: "not-an-email", password: "short" }),
      })
    );

    expect(res.status).toBe(422);
  });
});
