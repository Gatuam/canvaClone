import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { connectDB } from "@/lib/mongodb";
import { Design } from "@/models/design";
import { User } from "@/models/user";

export async function POST(req) {
    try {
        await connectDB();

        const session = await getServerSession(authOptions);
        if (!session?.user?.email) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const body = await req.json();

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

        return NextResponse.json({ design: newDesign }, { status: 201 });
    } catch (error) {
        console.error("Error creating design:", error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}
