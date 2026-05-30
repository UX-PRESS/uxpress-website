import { readFile, writeFile } from "fs/promises";
import path from "path";

export type LeadPayload = {
  fullName: string;
  email: string;
  businessName: string;
  businessType: string;
  websiteGoal: string;
  whatsapp?: string;
  instagram?: string;
  selectedTemplate?: string;
};

export type Lead = LeadPayload & {
  id: string;
  submittedAt: string;
};

export type LeadMetrics = {
  totalLeads: number;
  leadsByTemplate: Array<{
    template: string;
    count: number;
  }>;
  mostRequestedTemplate: string;
};

export const leadsFilePath = path.join(process.cwd(), "data", "leads.json");

export async function readLeads() {
  try {
    const file = await readFile(leadsFilePath, "utf8");
    return JSON.parse(file) as Lead[];
  } catch {
    return [];
  }
}

export async function writeLeads(leads: Lead[]) {
  await writeFile(leadsFilePath, `${JSON.stringify(leads, null, 2)}\n`, "utf8");
}

export function getSortedLeads(leads: Lead[]) {
  return [...leads].sort((a, b) => {
    return new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime();
  });
}

export function getLeadMetrics(leads: Lead[]): LeadMetrics {
  const counts = leads.reduce<Record<string, number>>((acc, lead) => {
    const template = lead.selectedTemplate?.trim() || "No template selected";
    acc[template] = (acc[template] ?? 0) + 1;
    return acc;
  }, {});

  const leadsByTemplate = Object.entries(counts)
    .map(([template, count]) => ({ template, count }))
    .sort((a, b) => b.count - a.count);

  return {
    totalLeads: leads.length,
    leadsByTemplate,
    mostRequestedTemplate: leadsByTemplate[0]?.template ?? "No leads yet"
  };
}

