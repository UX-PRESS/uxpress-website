import { randomUUID } from "crypto";
import { NextResponse } from "next/server";
import { type Lead, type LeadPayload, readLeads, writeLeads } from "@/lib/leads";

const requiredFields: Array<keyof Pick<LeadPayload, "fullName" | "email" | "businessName" | "businessType" | "websiteGoal">> = [
  "fullName",
  "email",
  "businessName",
  "businessType",
  "websiteGoal"
];

function hasRequiredFields(payload: Partial<LeadPayload>) {
  return requiredFields.every((field) => {
    const value = payload[field];
    return typeof value === "string" && value.trim().length > 0;
  });
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as Partial<LeadPayload>;

    if (!hasRequiredFields(payload)) {
      return NextResponse.json({ success: false, error: "Missing required fields" }, { status: 400 });
    }

    const lead: Lead = {
      id: randomUUID(),
      submittedAt: new Date().toISOString(),
      fullName: payload.fullName!.trim(),
      email: payload.email!.trim(),
      businessName: payload.businessName!.trim(),
      businessType: payload.businessType!.trim(),
      websiteGoal: payload.websiteGoal!.trim(),
      whatsapp: payload.whatsapp?.trim() ?? "",
      instagram: payload.instagram?.trim() ?? "",
      selectedTemplate: payload.selectedTemplate?.trim() ?? ""
    };

    const leads = await readLeads();
    leads.push(lead);

    await writeLeads(leads);

    return NextResponse.json({ success: true, leadId: lead.id });
  } catch (error) {
    console.error("Could not save Uxpress lead:", error);

    return NextResponse.json({ success: false, error: "Could not save lead" }, { status: 500 });
  }
}
