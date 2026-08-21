import type { Metadata } from "next";
import { LeadDetailContent } from "@/components/admin/LeadDetailContent";
import { readLeads } from "@/lib/leads";

export const dynamic = "force-dynamic";

type LeadDetailPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export async function generateMetadata({ params }: LeadDetailPageProps): Promise<Metadata> {
  const { id } = await params;
  const lead = (await readLeads()).find((item) => item.id === id);

  return {
    title: lead ? `${lead.fullName} - Lead Detail` : "Lead Not Found",
    description: lead ? `Lead detail for ${lead.fullName}.` : "The requested Uxpress lead could not be found."
  };
}

export default async function LeadDetailPage({ params }: LeadDetailPageProps) {
  const { id } = await params;
  const lead = (await readLeads()).find((item) => item.id === id);

  return <LeadDetailContent lead={lead ?? null} />;
}

