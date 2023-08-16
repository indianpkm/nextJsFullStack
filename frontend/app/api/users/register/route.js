import User from "@/server/model/userModel";
import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import { connection } from "@/server/db/connection";

connection();

export async function POST(request) {
  try {
    const reqBody = await request.json();

    const { name, email, number, password, experience, about, skills } =
      reqBody;
    const user = await User.findOne({ email });

    if (user) {
      return NextResponse.json({
        error: "User with the same email or number already exists",
      });
    }
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const newUser = new User({
      name,
      email,
      number,
      password: hashedPassword,
      experience,
      about,
      skills,
    });

    const savedUser = await newUser.save();

    return NextResponse.json({
      message: "User Created",
      success: true,
      savedUser,
    });
  } catch (error) {
    console.error("Error while creating user:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
