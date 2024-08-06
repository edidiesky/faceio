import { nextauthOptions } from "@/pages/api/auth/[...nextauth]";
import prisma from "@/prisma";
import { getServerSession } from "next-auth";

export default async function getCurrentUserSession() {
  try {
    // get the current session from mext-auth
    const session = await getServerSession(nextauthOptions);
    // return session
    if (!session?.user?.email) {
      return null;
    }
    // // find the current user
    const currentUser = await prisma.user.findUnique({
      where: {
        email: session?.user?.email,
      },
    });
    if (!currentUser) {
      return null;
    }
    return currentUser;
  } catch (error) {
    return null;
  }
}
