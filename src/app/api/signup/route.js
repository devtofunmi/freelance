import { NextResponse } from "next/server";

export async function POST(req){
    try {
        const [firstName, lastName, email, password] = await req.json();
        console.log(firstName,lastName,email, password);
        return NextResponse.json({message:"User registered."}, {status: 201})
    } catch (error) {
        return NextResponse.json({message:"An error occured while registering the user."}, {status: 500})
    }
}