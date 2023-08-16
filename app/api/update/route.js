import User from "@/server/model/userModel";
import { NextResponse } from "next/server";

const { connection } = require("@/server/db/connection");

connection();

export async function PUT(req) {
  try {
    const reqBody = await req.json();
    // console.log(reqBody)
    const { _id, idName, value } = reqBody;

    // Construct the update object dynamically
    const updateObject = { [idName]: value };

    const updatedUser = await User.findByIdAndUpdate(_id, updateObject, {
      new: true,
    });

    // Return the updated user data as a response
    return NextResponse.json({ user: updatedUser }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
