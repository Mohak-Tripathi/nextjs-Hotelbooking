import { NextRequest, NextResponse } from "next/server";
console.log( "heloo1")

export const allRooms = async (req: NextRequest) => {
  return NextResponse.json({
    data: "hello",
  });
};