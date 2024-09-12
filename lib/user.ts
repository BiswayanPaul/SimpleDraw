import db from "@/lib/db";

export const getUserByEmail = async (email: string) => {
  try {
    const user = await db.user.findFirst({
      where: { email }
    })

    if (!user) {
      return { error: "No user found" }
    }

    return user;
  } catch (e) {
    console.error(e);
    return { error: "Error Occured while finding user with email" }
  }
}


export const getUserById = async (id: string) => {
  try {
    const user = await db.user.findFirst({
      where: { id }
    })

    if (!user) {
      return { error: "No user found" }
    }

    return user;
  } catch (e) {
    console.error(e);
    return { error: "Error Occured while finding user with email" }
  }
}
