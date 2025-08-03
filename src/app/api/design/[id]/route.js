export const runtime = 'nodejs'

import { auth } from "@/auth";
import { connectToDb } from "@/dbConfig/db.connect";
import { Design } from "@/models/Design.model";
import { User } from "@/models/User.model";
import { NextResponse } from "next/server";

export async function GET( req, { params } ) {
    try {
        await connectToDb();
        const session = auth();
        if(!session || !session?.username){
            return NextResponse.json({
                error : 'unauthorized',
                status: 401
            });
        }
        const user = await User.findOne({
            email : session?.user?.email
        });
        if(!user){
            return NextResponse.json({
                 error: "User not found"
            },{
                status: 400,
            });
        }
        const id = params;
        const design = await Design.findOne({
            _id: id,
            userId : user._id
        });
        if(!design){
             return NextResponse.json({ error: "Design not found" }, { status: 404 });
        }
        return NextResponse({
            design
        },{
            status: 200
        })
    } catch (error) {
        console.error("Error fetching design:", error);
    return NextResponse.json(
      { error: "Internal Server Error", message: error.message },
      { status: 500 })
    }
}