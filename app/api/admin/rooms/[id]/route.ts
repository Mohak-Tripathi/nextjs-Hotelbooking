import dbConnect from "@/backend/config/dbConnect";
import { newRoom, updateRoom, deleteRoom  } from "@/backend/controllers/roomControllers";
import { createEdgeRouter } from "next-connect";
import { NextRequest } from "next/server";

interface RequestContext {
    params: {
      id: string;
    };
  }  

const router = createEdgeRouter<NextRequest, RequestContext>();

dbConnect();

router.post(newRoom);
router.put(updateRoom);
router.delete(deleteRoom);

export async function POST(request: NextRequest, ctx: RequestContext) {
  return router.run(request, ctx);
}

export async function PUT(request: NextRequest, ctx: RequestContext) {
    return router.run(request, ctx);
  }

  export async function DELETE(request: NextRequest, ctx: RequestContext) {
    return router.run(request, ctx);
  }