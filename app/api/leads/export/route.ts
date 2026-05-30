import { NextResponse } from "next/server";
import { getSortedLeads, readLeads } from "@/lib/leads";

export async function GET() {
  const leads = getSortedLeads(await readLeads());

  return new NextResponse(JSON.stringify(leads, null, 2), {
    headers: {
      "Content-Type": "application/json",
      "Content-Disposition": `attachment; filename="uxpress-leads.json"`
    }
  });
}

