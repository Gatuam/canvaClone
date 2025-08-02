import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { auth } from "@/auth";
import { connectToDb } from "@/dbConfig/db.connect";
import { Design } from "@/models/Design.model";
import { User } from "@/models/User.model";

export async function POST(req) {
  try {
    await connectToDb();
    const session = await getServerSession(auth);
    if (!session?.user?.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    console.log("Request body:", body);
    const user = await User.findOne({ email: session.user.email });
    if (!user) {
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
    await newDesign.save();

    return NextResponse.json({ design: newDesign }, { status: 201 });
  } catch (error) {
    console.error("Error creating design:", error);
    return NextResponse.json(
      { error: "Internal Server Error", message: error.message },
      { status: 500 }
    );
  }
}
