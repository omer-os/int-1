import { db } from "../../../lib/db";
import type { AddUserInput, AddUserResult } from "./schema";

export const addUser = async (input: AddUserInput): Promise<AddUserResult> => {
  const existing = await db.user.findFirst({
    where: { email: input.email },
    select: { id: true },
  });

  if (existing) {
    return { status: false, message: "Email already in use", data: null };
  }

  const password = await Bun.password.hash(input.password);

  const user = await db.user.create({
    data: { email: input.email, password },
    select: { id: true, email: true },
  });

  return { status: true, message: "User created", data: user };
};
