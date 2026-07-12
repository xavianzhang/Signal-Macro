export interface ApiSuccessResponse<TData> {
  success: true;
  data: TData;
  timestamp: string;
}

export interface ApiErrorResponse {
  success: false;
  message: string;
  code: number;
}

export type ApiResponse<TData> = ApiSuccessResponse<TData> | ApiErrorResponse;
