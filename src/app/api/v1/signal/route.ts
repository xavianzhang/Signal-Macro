import { jsonSuccess } from "@/lib/api";
import { jsonError } from "@/lib/http";
import { getSignalSnapshot } from "@/services/signal.service";

export const revalidate = 600;

export async function GET() {
  try {
    const signal = await getSignalSnapshot();

    return jsonSuccess({
      bias: signal.bias,
      confidence: signal.confidence,
      score: signal.score,
      summary: signal.summary,
    });
  } catch {
    return jsonError("Internal Error", 500);
  }
}
