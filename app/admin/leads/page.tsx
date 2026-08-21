import type { Metadata } from "next";
import { AdminLeadsContent } from "@/components/admin/AdminLeadsContent";
import { getLeadMetrics, getSortedLeads, readLeads } from "@/lib/leads";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Lead Management - Uxpress",
  description: "View Uxpress template inquiries and local MVP lead metrics."
};

export default async function AdminLeadsPage() {
  const leads = getSortedLeads(await readLeads());
  const metrics = getLeadMetrics(leads);

  return <AdminLeadsContent leads={leads} metrics={metrics} />;
}

