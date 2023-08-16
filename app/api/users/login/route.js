import User from "@/server/model/userModel";
import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

const { connection } = require("@/server/db/connection");

connection();

export async function POST(req) {
  try {
    const reqBody = await req.json();
    const { email } = reqBody;

    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ error: "User does not exist" });
    }
    const validPassword = await bcryptjs.compare(
      reqBody.password,
      user.password
    );
    if (!validPassword) {
      return NextResponse.json({ error: "Invalid password" });
    }

    const { password, ...otherDetail } = user._doc;

    return NextResponse.json({
      mesaaage: "User detail",
      data: otherDetail,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
