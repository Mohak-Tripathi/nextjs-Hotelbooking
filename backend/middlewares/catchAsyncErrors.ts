import { NextRequest, NextResponse } from "next/server";

type HandlerFunction = (req: NextRequest, params: any) => Promise<NextResponse>; //self explanatory

interface IValidationError {
  message: string;
}

export const catchAsyncErrors =
  (handler: HandlerFunction) => async (req: NextRequest, params: any) => {
    try {
      return await handler(req, params);   // if no problem returning the whole thing.
    } catch (error: any) {
        console.log(error, "error")
      if (error?.name === "CastError") {
        error.message = `Resource not found. Invalid ${error?.path}`;
        error.statusCode = 400;
      }

      if (error?.name === "ValidationError") {
        error.message = Object.values<IValidationError>(error.errors).map(
          (value) => value.message
        );
        error.statusCode = 400;
      }

      // console.log(error, "error")
          // Handling mongoose duplicate key error
          if (error.code === 11000) {
            error.message = `Duplicate ${Object.keys(error.keyValue)} entered`;
          }

      return NextResponse.json(
        {
          errMessage: error.message,
        },
        { status: error.statusCode || 500 }
      );
    }
  };