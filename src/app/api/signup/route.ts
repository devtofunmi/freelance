import { NextResponse } from "next/server";

export async function POST(req: any) {
    try {
        const { firstName, lastName, email, password } = await req.json();
        console.log(firstName, lastName, email, password);
        return NextResponse.json({ message: "User registered." }, { status: 201 });
    } catch (error) {
        console.error("Error during user registration:", error);
        return NextResponse.json({ message: "An error occurred while registering the user." }, { status: 500 });
    }
}