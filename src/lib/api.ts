import { NextResponse } from "next/server";

import type { ApiSuccessResponse } from "@/types/api.type";

export function createSuccessResponse<TData>(data: TData): ApiSuccessResponse<TData> {
  return {
    success: true,
    data,
    timestamp: new Date().toISOString(),
  };
}

export function jsonSuccess<TData>(data: TData) {
  return NextResponse.json(createSuccessResponse(data));
}
