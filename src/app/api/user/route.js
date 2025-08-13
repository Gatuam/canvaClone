import { NextResponse } from "next/server";
import { User } from "@/models/User.model";
import { auth } from "@/auth";
import connectToDb from "@/dbConfig/db.connect";

export const runtime = "nodejs";

export async function POST(req) {
  try {
    await connectToDb();
    const session = await auth();

    if (!session || !session.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { email, name, image, provider } = await req.json();

    const existUser = await User.findOne({ email });
    
    if (!existUser) {
      const newUser = await User.create({
        name,
        email,
        image,
        provider,
      });
      console.log("New user created with ID:", newUser._id);
      return NextResponse.json({ user: newUser, created: true }, { status: 201 });
    } else {
      console.log("User already exists:", existUser._id);
      return NextResponse.json({ user: existUser, created: false }, { status: 200 });
    }
  } catch (error) {
    console.error("Error in /api/user:", error);
    return NextResponse.json(
      { error: "Internal Server Error", message: error.message },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectToDb();
    const session = await auth();

    if (!session || !session.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const user = await User.findOne({ email: session.user.email });
    
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json({ user }, { status: 200 });
  } catch (error) {
    console.error("Error fetching user:", error);
    return NextResponse.json(
      { error: "Internal Server Error", message: error.message },
      { status: 500 }
    );
  }
}