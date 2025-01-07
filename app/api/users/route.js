import connectDB from "@/app/helper/db";
import Users from "@/app/models/userSchema";
import { NextResponse } from "next/server";

export async function POST(req) {
  // user try catch to handle errors in better way.
  // Always use try catch
  try {
    // Connect to the database
    await connectDB();

    // Parse JSON data from the request body
    const userData = await req.json();

    // Log received data
    console.log(userData);
    console.log(userData.name);
    console.log(userData.email);
    console.log(userData.age);

    // Create user in the database
    const user = await Users.create(userData);

    // Return success response
    return NextResponse.json({
      data: user,
      statusCode: 200,
      message: "User created successfully!",
    });
  } catch (error) {
    // Handle errors
    console.error("Error:", error);
    return NextResponse.json({
      statusCode: 500,
      message: "Server error occurred!",
    });
  }
}
