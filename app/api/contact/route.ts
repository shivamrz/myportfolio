import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    // Store data in the database
    await prisma.contact.create({
      data: { name, email, subject, message },
    });

    return NextResponse.json({ message: "Message saved successfully!" }, { status: 200 });
  } catch (error) {
    console.error("Error in contact API:", error);
  }
}
