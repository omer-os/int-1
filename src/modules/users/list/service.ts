import { db } from "../../../lib/db";
import type { ListUsersResponse } from "./schema";

export const listUsers = async (): Promise<ListUsersResponse> => {
  const users = await db.user.findMany({
    select: { id: true, email: true },
    orderBy: { id: "asc" },
  });

  return { status: true, message: "Users fetched", data: users };
};
