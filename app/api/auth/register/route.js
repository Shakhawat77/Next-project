import { NextResponse } from "next/server";
import  clientPromise  from "@/lib/dbConnect";

export async function POST(req) {
  const { name, email, password } = await req.json();

  if (!name || !email || !password) {
    return NextResponse.json({ message: "Missing fields" }, { status: 400 });
  }

  const client = await clientPromise;
  const users = client.db().collection("users");

  const existingUser = await users.findOne({ email });
  if (existingUser) {
    return NextResponse.json({ message: "User already exists" }, { status: 409 });
  }


  await users.insertOne({
    name,
    email,
    password,
    createdAt: new Date(),
  });

  return NextResponse.json({ message: "User created successfully" });
}
