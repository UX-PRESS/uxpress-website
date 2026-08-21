import type { Metadata } from "next";
import { StartContent } from "@/components/start/StartContent";
import { getTemplate } from "@/lib/templates";

type StartPageProps = {
  searchParams: Promise<{
    template?: string;
  }>;
};

export const metadata: Metadata = {
  title: "Start Your Website - Uxpress",
  description: "Start your Uxpress website launch with a selected template and a few business details.",
  alternates: {
    canonical: "/start"
  }
};

export default async function StartPage({ searchParams }: StartPageProps) {
  const { template: templateSlug } = await searchParams;
  const template = templateSlug ? getTemplate(templateSlug) : undefined;
  const selectedTemplate = template?.name ?? templateSlug ?? "No template selected";

  return <StartContent selectedTemplate={selectedTemplate} />;
}

