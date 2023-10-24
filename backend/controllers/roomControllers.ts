import { NextRequest, NextResponse } from "next/server";
import Room, { IRoom } from "../models/room";
import { catchAsyncErrors } from "../middlewares/catchAsyncErrors";
import ErrorHandler from "../utils/errorHandler";
import APIFilters from "../utils/apiFilters";



// Get all rooms  =>  /api/rooms
export const allRooms = catchAsyncErrors(async (req: NextRequest) => {
  const resPerPage: number = 4;

  const { searchParams } = new URL(req.url);  // to get query string pair.

  const queryStr: any = {};
// console.log(searchParams, "searchParams")

  searchParams.forEach((value, key) => {
    queryStr[key] = value;
  });

  // console.log(queryStr, "queryStr")

  const roomsCount: number = await Room.countDocuments();

  const apiFilters = new APIFilters(Room, queryStr).search().filter();

  //console.log(apiFilters, "apiFilters")

  let rooms: IRoom = await apiFilters.query;

  // console.log(rooms, "rooms")
  const filteredRoomsCount: number = rooms.length;

  apiFilters.pagination(resPerPage);
  rooms = await apiFilters.query.clone();

  return NextResponse.json({
    success: true,
    roomsCount,
    filteredRoomsCount,
    resPerPage,
    rooms,
  });
});




// Create new room  =>  /api/admin/rooms

export const newRoom  = catchAsyncErrors( async(req: NextRequest) =>{


  const body = await req.json()


  const room = await Room.create(body)

  return NextResponse.json({
    success: true, 
    room

  })


})



// Get room details  =>  /api/rooms/:id
export const getRoomDetails =  catchAsyncErrors( async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {

  const room = await Room.findById(params.id);

  if (!room) {
    // return NextResponse.json(
    //   {
    //     message: "Room not found",
    //   },
    //   { status: 404 }
    // );

    throw new ErrorHandler("Room not found", 404)
  }

  return NextResponse.json({
    success: true,
    room,
  });
});





// Update room details  =>  /api/admin/rooms/:id  - only admin can update
export const updateRoom = catchAsyncErrors( async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  let room = await Room.findById(params.id);
  const body = await req.json();

  if (!room) {
    // return NextResponse.json(
    //   {
    //     message: "Room not found",
    //   },
    //   { status: 404 }
    // );
    
    throw new ErrorHandler("Room not found", 404)
  }

  room = await Room.findByIdAndUpdate(params.id, body, {
    new: true,
  });

  return NextResponse.json({
    success: true,
    room,
  });
});

// Delete room details  =>  /api/admin/rooms/:id
export const deleteRoom = catchAsyncErrors( async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  const room = await Room.findById(params.id);

  if (!room) {
    // return NextResponse.json(
    //   {
    //     message: "Room not found",
    //   },
    //   { status: 404 }
    // );
    
    throw new ErrorHandler("Room not found", 404)
  }

  // TODO - Delete images associated with the room

  await room.deleteOne();

  return NextResponse.json({
    success: true,
  });
});