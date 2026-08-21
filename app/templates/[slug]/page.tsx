import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TemplateDetailContent } from "@/components/TemplateDetailContent";
import { getTemplate, templates } from "@/lib/templates";

type TemplateDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return templates.map((template) => ({
    slug: template.slug
  }));
}

export async function generateMetadata({ params }: TemplateDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const template = getTemplate(slug);

  if (!template) {
    return {
      title: "Template Not Found"
    };
  }

  return {
    title: `${template.name} - Uxpress`,
    description: template.description,
    alternates: {
      canonical: `/templates/${template.slug}`
    }
  };
}

export default async function TemplateDetailPage({ params }: TemplateDetailPageProps) {
  const { slug } = await params;
  const template = getTemplate(slug);

  if (!template) {
    notFound();
  }

  return <TemplateDetailContent template={template} />;
}

