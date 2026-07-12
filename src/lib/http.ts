import { NextResponse } from "next/server";

import type { ApiErrorResponse } from "@/types/api.type";

export class ApiRouteError extends Error {
  code: number;

  constructor(message: string, code: number) {
    super(message);
    this.code = code;
  }
}

export function createErrorResponse(message: string, code: number): ApiErrorResponse {
  return {
    code,
    message,
    success: false,
  };
}

export function jsonError(message: string, code: number) {
  return NextResponse.json(createErrorResponse(message, code), { status: code });
}
