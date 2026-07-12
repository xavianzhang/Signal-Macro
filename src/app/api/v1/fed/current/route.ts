import { jsonSuccess } from "@/lib/api";
import { jsonError } from "@/lib/http";
import { getFedCurrent } from "@/services/fed.service";

export const revalidate = 3600;

export async function GET() {
  try {
    const fedCurrent = await getFedCurrent();

    return jsonSuccess(fedCurrent);
  } catch {
    return jsonError("Internal Error", 500);
  }
}
