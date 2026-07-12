import { jsonSuccess } from "@/lib/api";
import { jsonError } from "@/lib/http";
import { getSignalSummary } from "@/services/signal.service";

export const revalidate = 600;

export async function GET() {
  try {
    const summary = await getSignalSummary();

    return jsonSuccess(summary);
  } catch {
    return jsonError("Internal Error", 500);
  }
}
