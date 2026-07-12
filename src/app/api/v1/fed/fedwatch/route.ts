import { jsonSuccess } from "@/lib/api";
import { jsonError } from "@/lib/http";
import { getFedwatchBreakdown } from "@/services/fed.service";

export const revalidate = 3600;

export async function GET() {
  try {
    const fedwatch = await getFedwatchBreakdown();

    return jsonSuccess(fedwatch);
  } catch {
    return jsonError("Internal Error", 500);
  }
}
