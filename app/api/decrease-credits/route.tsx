import connect from "@/utils/db";
import User from "@/models/User";
import { NextResponse } from "next/server";

export const POST = async (request: any) => {
  const { userId } = await request.json();
  console.log(userId);
  await connect();

  try {
    const user = await User.findOne({ email: userId });
console.log("api"+user);
    if (!user) {
      return new NextResponse("User not found", { status: 404 });
    }

    if (user.credits < 2 ) {
      return new NextResponse("Insufficient credits", { status: 400 });
    }

    // Decrease the credits by 2
    user.credits -= 2;

    // Save the updated user
    await user.save();

    return new NextResponse("Credits decreased successfully", { status: 200 });
  } catch (err: any) {
    return new NextResponse(err, {
      status: 500,
    });
  }
};