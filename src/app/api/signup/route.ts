import { NextResponse } from "next/server";
import {connectMongoDB} from "@/../lib/mongodb";
import User from "@/../models/user";
import bcyrpt from "bcyrptjs";

export async function POST(req: any) {
    try {
        const { firstName, lastName, email, password } = await req.json();
        const hashedPassword = await bcyrpt.hash(password, 10)
        await connectMongoDB();
        await User.create({firstName, lastName, email, password: hashedPassword});
        return NextResponse.json({ message: "User registered." }, { status: 201 });
    } catch (error) {
        console.error("Error during user registration:", error);
        return NextResponse.json({ message: "An error occurred while registering the user." }, { status: 500 });
    }
}