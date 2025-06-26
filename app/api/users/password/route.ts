import { User } from "@/models/User";
import connect from "@/utils/mongodb";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export const POST = async (request: any) => {
  try {
    const { email, currentPassword, newPassword } = await request.json();

    await connect();
    console.log("Connected with database");

    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    // If the user already has a password, verify the current password
    if (user.password) {
      const isMatch = await bcrypt.compare(currentPassword, user.password);
      if (!isMatch) {
        return NextResponse.json({ message: "Current password is incorrect" }, { status: 400 });
      }
    }

    // Hash the new password
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // Update the user's password
    user.password = hashedPassword;
    await user.save();

    return NextResponse.json({ message: "Password updated successfully" }, { status: 200 });
  } catch (err: any) {
    console.error("Password update error:", err);
    return NextResponse.json(
      { message: err.message || "An error occurred while updating the password" },
      { status: 500 }
    );
  }
};