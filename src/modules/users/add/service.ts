import { db } from "../../../lib/db";
import { addUserResponseSchemaType, AddUserSchemaType } from "./schema";

export const addUserService = async ({ data }: { data: AddUserSchemaType }): Promise<addUserResponseSchemaType> => {
  try {
    const newUser = await db.user.create({
      data: {
        email: data.email,
        id: data.id
      }
    });

    return {
      email: newUser.email,
      id: newUser.id
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
};
