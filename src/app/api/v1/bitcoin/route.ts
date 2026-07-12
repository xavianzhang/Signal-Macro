import { jsonSuccess } from "@/lib/api";
import { jsonError } from "@/lib/http";
import { getBitcoinApiSnapshot } from "@/services/bitcoin.service";

export const revalidate = 60;

export async function GET() {
  try {
    return jsonSuccess(await getBitcoinApiSnapshot());
  } catch {
    return jsonError("Internal Error", 500);
  }
}
