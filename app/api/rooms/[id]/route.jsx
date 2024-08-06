import prisma from "@/prisma";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { id } = params;
  if (!id) {
    return NextResponse.json(
      { message: "Room Id is required" },
      { status: 400 }
    );
  }
  try {
    const room = await prisma.rooms.findUnique({
      where: {
        id: id,
      },
    });

    if (!room) {
      return NextResponse.json(
        { message: "No room has being found" },
        { status: 404 }
      );
    }

    return NextResponse.json(room);
  } catch (error) {
    console.error("Error getting rooms:", error); // Log the error for debugging
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function DELETE(request, { params }) {
  const { id } = params;
  if (!id) {
    return NextResponse.json(
      { message: "Room Id is required" },
      { status: 400 }
    );
  }
  try {
    const room = await prisma.rooms.findUnique({
      where: {
        id: id,
      },
    });

    if (!room) {
      return NextResponse.json(
        { message: "No room has being found" },
        { status: 404 }
      );
    }
    await prisma.rooms.delete({
      where: {
        id: id,
      },
    });

    return NextResponse.json("Room has been deleted");
  } catch (error) {
    console.error("Error getting rooms:", error); // Log the error for debugging
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
