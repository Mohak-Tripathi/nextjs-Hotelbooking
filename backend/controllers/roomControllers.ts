import { NextRequest, NextResponse } from "next/server";
import Room from "../models/room";


export const allRooms = async (req: NextRequest) => {
  const resPerPage: number = 8;
  const rooms = await Room.find()

  return NextResponse.json({

    success: true,
    resPerPage,
    length: rooms.length,
    rooms,
  });
};

// Create new room  =>  /api/admin/rooms

export const newRoom  = async(req: NextRequest) =>{


  const body = await req.json()


  const room = await Room.create(body)

  return NextResponse.json({
    success: true, 
    room

  })


}



// Get room details  =>  /api/rooms/:id
export const getRoomDetails = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {

  const room = await Room.findById(params.id);

  if (!room) {
    return NextResponse.json(
      {
        message: "Room not found",
      },
      { status: 404 }
    );
  }

  return NextResponse.json({
    success: true,
    room,
  });
};