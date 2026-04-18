import { db } from "../../../lib/db";

export const getAllUsersService = async () => {
  try {
    const users = await db.user.findMany();

    return users.map(i => ({
      id: i.id,
      email: i.email
    }));
  } catch (error: any) {
    console.log(error);
    throw error;
  }
};
