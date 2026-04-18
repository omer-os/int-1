import { describe, expect, it, mock } from "bun:test";

mock.module("../../../lib/db", () => ({
  db: {
    user: {
      findMany: async () => [{ id: 1, email: "alice@test.com" }],
    },
  },
}));

const { listUsersRoute } = await import("./route");

describe("GET /users", () => {
  it("returns a list of users", async () => {
    const res = await listUsersRoute.handle(new Request("http://localhost/"));
    const body = await res.json();

    expect(res.status).toBe(200);
    expect(body.status).toBe(true);
    expect(body.data).toEqual([{ id: 1, email: "alice@test.com" }]);
  });
});
