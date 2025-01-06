import { connectDB } from "@/app/helper/users";
import { NextResponse } from "next/server"

export async function GET(){

    connectDB()
    
    const users = [
        { id: 1, name: "John Doe", email: "john.doe@example.com" },
        { id: 2, name: "Jane Smith", email: "jane.smith@example.com" },
        { id: 3, name: "Alice Johnson", email: "alice.johnson@example.com" },
        { id: 4, name: "Bob Brown", email: "bob.brown@example.com" },
        { id: 5, name: "Charlie Davis", email: "charlie.davis@example.com" },
        { id: 6, name: "Diana Evans", email: "diana.evans@example.com" },
        { id: 7, name: "Frank Green", email: "frank.green@example.com" },
        { id: 8, name: "Grace Harris", email: "grace.harris@example.com" },
        { id: 9, name: "Henry Lee", email: "henry.lee@example.com" },
        { id: 10, name: "Ivy Martin", email: "ivy.martin@example.com" }
    ];
    return NextResponse.json({ results: users, status: 200, code: 'success' });
}