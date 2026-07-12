import { jsonSuccess } from "@/lib/api";

export async function GET() {
  return jsonSuccess({
    status: "ok",
  });
}
