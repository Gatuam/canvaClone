export const runtime = "nodejs";

import { NextResponse } from "next/server";
import { Design } from "@/models/Design.model";
import { User } from "@/models/User.model";
import { auth } from "@/auth";
import connectToDb from "@/dbConfig/db.connect";

export async function POST(req) {
  try {
    await connectToDb();
    const session = await auth();

    if (!session || !session.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    console.log("Request body:", body);

    const user = await User.findOne({ email: session.user.email });
    if (!user) {
      console.log("User not found");
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const newDesign = await Design.create({
      title: body.title,
      width: body.width,
      height: body.height,
      data: body.data,
      imagePreview: body.imagePreview,
      userId: user._id,
    });

    console.log("Design created:", newDesign);
    return NextResponse.json({ design: newDesign }, { status: 201 });
  } catch (error) {
    console.error("Error in /api/design:", error.stack);
    return NextResponse.json(
      { error: "Internal Server Error", message: error.message },
      { status: 500 }
    );
  }
}