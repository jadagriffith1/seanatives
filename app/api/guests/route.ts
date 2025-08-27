import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../lib/prisma";

export async function POST(request: NextRequest) {
  try {
    const { bookingId, name, email, phone } = await request.json();

    const guest = await prisma.guest.create({
      data: { bookingId, name, email, phone },
    });

    return NextResponse.json(guest, { status: 200 });
  } catch (error) {
    console.error("Error creating guest:", error);
    return NextResponse.json(
      { error: "Failed to add guest" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const guests = await prisma.guest.findMany();
    return NextResponse.json(guests, { status: 200 });
  } catch (error) {
    console.error("Error fetching guests:", error);
    return NextResponse.json(
      { error: "Failed to fetch guests" },
      { status: 500 }
    );
  }
}
