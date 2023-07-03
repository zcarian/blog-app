import prisma from "@/prisma";
import { NextResponse } from "next/server";

async function main() {
  try {
    await prisma.$connect();
    console.log("Database Connected");
  } catch (e) {
    Error("Database Connection Error");
  }
}

export const GET = async (req: Request, res: NextResponse) => {
  console.log("GET");
  try {
    await main();
    const posts = await prisma.post.findMany();
    return NextResponse.json({ message: "Success", posts }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
};

export const POST = async (req: Request, res: NextResponse) => {
  console.log("POST");
};
