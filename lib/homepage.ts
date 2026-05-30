export type Stat = {
  value: string;
  label: string;
};

export type Benefit = {
  title: string;
  description: string;
  icon: string;
};

export type Step = {
  number: string;
  title: string;
  description: string;
};

export type LandingTemplate = {
  name: string;
  category: string;
  description: string;
  tone: string;
};

export type Audience = {
  title: string;
  description: string;
  useCase: string;
  icon: string;
};

export type Testimonial = {
  name: string;
  profession: string;
  review: string;
  initials: string;
};

export type ComparisonRow = {
  factor: string;
  uxpress: string;
  agency: string;
  diy: string;
};

export type Faq = {
  question: string;
  answer: string;
};

export const stats: Stat[] = [
  { value: "24+", label: "Templates available" },
  { value: "96%", label: "Customer satisfaction" },
  { value: "180+", label: "Websites launched" },
  { value: "12", label: "Industries served" }
];

export const benefits: Benefit[] = [
  {
    title: "Professional Design",
    description: "Premium layouts built to establish credibility from the first scroll.",
    icon: "01"
  },
  {
    title: "Fast Launch",
    description: "Get online in a fraction of the time without managing a full agency project.",
    icon: "02"
  },
  {
    title: "Conversion Focused",
    description: "Sections are structured to generate leads, bookings, and serious inquiries.",
    icon: "03"
  },
  {
    title: "Easy Customization",
    description: "Replace content, adjust the visual system, connect tools, and publish quickly.",
    icon: "04"
  }
];

export const steps: Step[] = [
  {
    number: "1",
    title: "Choose a Template",
    description: "Pick a premium kit built around your business model, audience, and offer."
  },
  {
    number: "2",
    title: "Customize Your Content",
    description: "Add your copy, images, testimonials, services, booking links, and brand details."
  },
  {
    number: "3",
    title: "Launch Your Website",
    description: "Connect your domain, publish, and start sending traffic to a site that feels ready."
  }
];

export const landingTemplates: LandingTemplate[] = [
  {
    name: "Business Coach Pro",
    category: "Coaching",
    description: "A conversion-first kit for selling coaching programs and discovery calls.",
    tone: "Warm authority"
  },
  {
    name: "Executive Consultant",
    category: "Consulting",
    description: "A refined site for advisors, strategists, and premium professional services.",
    tone: "Boardroom clean"
  },
  {
    name: "Personal Brand Studio",
    category: "Mentors",
    description: "A polished presence for experts building authority around their name.",
    tone: "Editorial minimal"
  },
  {
    name: "Freelancer Portfolio",
    category: "Freelancers",
    description: "A sharp portfolio and service page system for independent operators.",
    tone: "Crisp utility"
  },
  {
    name: "Agency Starter",
    category: "Agencies",
    description: "A lightweight agency site for showcasing offers, proof, and client outcomes.",
    tone: "Modern studio"
  },
  {
    name: "Service Business Launch",
    category: "Services",
    description: "A complete kit for local and remote service businesses that need trust fast.",
    tone: "Premium practical"
  }
];

export const audiences: Audience[] = [
  {
    title: "Coaches",
    description: "Sell programs, calls, and transformation with a credible offer page.",
    useCase: "Discovery calls and coaching programs",
    icon: "C"
  },
  {
    title: "Consultants",
    description: "Package strategic expertise into a site that attracts serious buyers.",
    useCase: "Advisory services and retainers",
    icon: "K"
  },
  {
    title: "Mentors",
    description: "Turn your story, method, and outcomes into a trustworthy online presence.",
    useCase: "Mentorship and expert positioning",
    icon: "M"
  },
  {
    title: "Freelancers",
    description: "Showcase services, proof, and availability without a complicated build.",
    useCase: "Portfolio and lead generation",
    icon: "F"
  },
  {
    title: "Agencies",
    description: "Launch client-ready foundations faster with reusable premium structures.",
    useCase: "Starter sites and client MVPs",
    icon: "A"
  },
  {
    title: "Service Businesses",
    description: "Build confidence quickly with clear pages for offers, proof, and contact.",
    useCase: "Bookings, quotes, and inquiries",
    icon: "S"
  }
];

export const testimonials: Testimonial[] = [
  {
    name: "Maya Chen",
    profession: "Leadership Coach",
    review:
      "Uxpress gave me the structure I needed to launch without second-guessing every section. The site felt premium immediately.",
    initials: "MC"
  },
  {
    name: "Jonas Weber",
    profession: "Strategy Consultant",
    review:
      "I had a credible consulting website live in a weekend. The copy flow made it much easier to explain my offer clearly.",
    initials: "JW"
  },
  {
    name: "Amara Silva",
    profession: "Brand Mentor",
    review:
      "The templates are clean, focused, and easy to adapt. It finally felt like a website made for service professionals.",
    initials: "AS"
  }
];

export const comparison: ComparisonRow[] = [
  {
    factor: "Time",
    uxpress: "Launch in days with a complete kit",
    agency: "Often 4-12 weeks of scope and revisions",
    diy: "Fast start, slow polish"
  },
  {
    factor: "Cost",
    uxpress: "Predictable template pricing",
    agency: "Premium project fees",
    diy: "Low tool cost, high time cost"
  },
  {
    factor: "Simplicity",
    uxpress: "Built around service-business selling",
    agency: "Requires briefs, feedback, and management",
    diy: "Blank-canvas decisions everywhere"
  },
  {
    factor: "Launch Speed",
    uxpress: "Designed for quick publishing",
    agency: "Dependent on availability and rounds",
    diy: "Depends on your design confidence"
  }
];

export const landingFaqs: Faq[] = [
  {
    question: "Do I need coding experience?",
    answer:
      "No. Uxpress templates are designed so service professionals can customize content, sections, links, and visuals without writing code."
  },
  {
    question: "Can I customize the templates?",
    answer:
      "Yes. You can edit copy, colors, imagery, sections, calls to action, and page structure to match your brand and offer."
  },
  {
    question: "Can I connect my own domain?",
    answer:
      "Yes. After customizing your template, you can connect your own domain through the publishing platform you use."
  },
  {
    question: "How quickly can I launch?",
    answer:
      "Many customers can prepare a strong first version in a few days if their core copy, images, and offer details are ready."
  },
  {
    question: "Are the templates mobile-friendly?",
    answer:
      "Yes. The templates are planned mobile-first and designed to work across phones, tablets, and desktop screens."
  }
];

