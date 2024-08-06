import prisma from "@/prisma";
import getCurrentUserSession from "@/app/actions/getCurrentUser";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const rooms = await prisma.rooms.findMany({
       orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(rooms);
  } catch (error) {
    console.error("Error getting rooms:", error); // Log the error for debugging
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  const currentUser = await getCurrentUserSession();
  // cehck if the user exist
  if (!currentUser) {
    return NextResponse.json(
      { message: "User not authenticated" },
      { status: 401 }
    );
  }
  // cehck if the user has an admin role

  if (currentUser?.role !== "admin") {
    return NextResponse.json(
      { message: "You are not allowed to perform this action" },
      { status: 401 }
    );
  }
  try {
    const body = await request.json();
    const room = await prisma.rooms.create({
      data: {
        userid: currentUser?.id,
        ...body,
      },
    });

    return NextResponse.json(room);
  } catch (error) {
    console.error("Error getting rooms:", error); // Log the error for debugging
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
