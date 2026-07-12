import { jsonSuccess } from "@/lib/api";
import { jsonError } from "@/lib/http";
import { getBitcoinEtfFlows } from "@/services/bitcoin.service";

export const revalidate = 3600;

export async function GET() {
  try {
    return jsonSuccess(await getBitcoinEtfFlows());
  } catch {
    return jsonError("Internal Error", 500);
  }
}
