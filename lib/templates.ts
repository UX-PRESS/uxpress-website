import { checkoutLinks } from "@/lib/site";

export type Template = {
  slug: string;
  name: string;
  shortName: string;
  category: string;
  audience: string;
  useCase: "Coaches" | "Consultants" | "Personal Brands";
  price: string;
  installationPrice: string;
  badge: string;
  description: string;
  longDescription: string;
  checkoutUrl: string;
  accent: string;
  image: string;
  includes: string[];
  sections: string[];
  bestFor: string[];
  features: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
};

export const templates: Template[] = [
  {
    slug: "business-coach-website-kit",
    name: "Business Coach Website Kit",
    shortName: "Business Coach",
    category: "Coaching",
    audience: "Coaches, growth advisors, and offer-based service businesses",
    useCase: "Coaches",
    price: "€79",
    installationPrice: "€149",
    badge: "Best for coaches",
    description:
      "A persuasive website kit for presenting your coaching offer, building credibility, and converting visitors into qualified inquiries.",
    longDescription:
      "A premium website kit for coaches who need a clear, credible, conversion-focused site without waiting weeks for a custom build.",
    checkoutUrl: checkoutLinks.businessCoach,
    accent: "from-[#f5ead5] to-[#fffaf0]",
    image: "/template-previews/business-coach.jpg",
    includes: [
      "Homepage structure",
      "Coaching offer section",
      "Authority and story section",
      "Testimonials and proof blocks",
      "FAQ and contact CTA",
      "Mobile responsive layout"
    ],
    sections: [
      "Hero",
      "About",
      "Coaching offer",
      "Process",
      "Testimonials",
      "FAQ",
      "Contact CTA"
    ],
    bestFor: [
      "Business coaches",
      "Executive coaches",
      "Growth mentors",
      "Offer strategists",
      "Independent advisors"
    ],
    features: [
      {
        title: "Clear positioning",
        description: "Lead with who you help, what changes, and why your offer matters."
      },
      {
        title: "Offer-ready sections",
        description: "Dedicated blocks for your method, outcomes, process, and call to action."
      },
      {
        title: "Trust-first layout",
        description: "Use proof, story, and expertise signals without overwhelming the page."
      }
    ],
    faqs: [
      {
        question: "Can I edit the coaching offer section?",
        answer: "Yes. The kit is built so you can replace the offer copy, outcomes, CTAs, and proof."
      },
      {
        question: "Is installation included?",
        answer: "Installation is available as a separate add-on for €149."
      }
    ]
  },
  {
    slug: "executive-consultant-website-kit",
    name: "Executive Consultant Website Kit",
    shortName: "Executive Consultant",
    category: "Consulting",
    audience: "Consultants, advisors, strategists, and boutique firms",
    useCase: "Consultants",
    price: "€99",
    installationPrice: "€149",
    badge: "Premium pick",
    description:
      "A refined website kit for selling expertise, authority, and strategic outcomes to serious buyers.",
    longDescription:
      "A premium website kit for consultants who need to position expertise, clarify services, and create high-trust business conversations.",
    checkoutUrl: checkoutLinks.executiveConsultant,
    accent: "from-[#eee5d5] to-[#fffdf8]",
    image: "/template-previews/executive-consultant.jpg",
    includes: [
      "Homepage structure",
      "Expertise positioning blocks",
      "Services section",
      "Case study prompts",
      "Lead capture CTA",
      "Mobile responsive layout"
    ],
    sections: [
      "Hero",
      "Expertise",
      "Services",
      "Case studies",
      "Process",
      "Lead capture",
      "FAQ"
    ],
    bestFor: [
      "Executive consultants",
      "Strategy advisors",
      "Operations consultants",
      "Boutique firms",
      "Fractional leaders"
    ],
    features: [
      {
        title: "Authority-led messaging",
        description: "Frame expertise with sharp copy blocks for credibility and buyer confidence."
      },
      {
        title: "Consulting service flow",
        description: "Present engagements, outcomes, process, and next steps in a natural sequence."
      },
      {
        title: "Serious buyer aesthetic",
        description: "Minimal, polished sections made for premium professional services."
      }
    ],
    faqs: [
      {
        question: "Can this work for a small consulting firm?",
        answer: "Yes. The layout works for solo consultants and compact advisory teams."
      },
      {
        question: "Is installation included?",
        answer: "Installation is available as a separate add-on for €149."
      }
    ]
  },
  {
    slug: "personal-brand-website-kit",
    name: "Personal Brand Website Kit",
    shortName: "Personal Brand",
    category: "Personal Brand",
    audience: "Mentors, creators, speakers, and independent experts",
    useCase: "Personal Brands",
    price: "€129",
    installationPrice: "€199",
    badge: "Authority builder",
    description:
      "A modern site kit for building trust around your name, story, content, and offers.",
    longDescription:
      "A flexible website kit for turning your expertise, story, content, and offers into a premium personal brand presence.",
    checkoutUrl: checkoutLinks.personalBrand,
    accent: "from-[#f7edd9] to-[#ffffff]",
    image: "/template-previews/personal-brand.jpg",
    includes: [
      "Homepage structure",
      "Founder story section",
      "Featured content blocks",
      "Offers section",
      "Newsletter or lead magnet CTA",
      "Mobile responsive layout"
    ],
    sections: [
      "Hero",
      "Story",
      "Featured content",
      "Offers",
      "Newsletter CTA",
      "Social proof",
      "Contact"
    ],
    bestFor: [
      "Mentors",
      "Speakers",
      "Creators",
      "Independent experts",
      "Thought leaders"
    ],
    features: [
      {
        title: "Name-led credibility",
        description: "Make your story, ideas, and authority feel intentional from the first screen."
      },
      {
        title: "Content-friendly structure",
        description: "Highlight writing, talks, podcasts, resources, or lead magnets."
      },
      {
        title: "Offer clarity",
        description: "Connect your brand presence to services, programs, and inquiries."
      }
    ],
    faqs: [
      {
        question: "Can I use this without a big audience?",
        answer: "Yes. It is designed to help you create a credible foundation before you scale."
      },
      {
        question: "Is installation included?",
        answer: "Installation is available as a separate add-on for €199."
      }
    ]
  }
];

export function getTemplate(slug: string) {
  return templates.find((template) => template.slug === slug);
}

export const globalFaqs = [
  {
    question: "What is Uxpress?",
    answer:
      "Uxpress is a marketplace for ready-to-launch website templates and website kits for coaches, consultants, mentors, and service professionals."
  },
  {
    question: "Are the templates ready to launch?",
    answer:
      "They are built as launch-ready starting points. You still need to add your brand details, copy, images, links, and checkout or booking tools."
  },
  {
    question: "Do the checkout buttons work?",
    answer:
      "The site is prepared for Lemon Squeezy links. Add the payment URLs to your environment variables before publishing."
  },
  {
    question: "Can Uxpress install the template for me?",
    answer:
      "Yes. The installation service helps with setup, basic styling, content placement, links, and a launch checklist."
  },
  {
    question: "What platform is this site built on?",
    answer:
      "The MVP website is built with Next.js, TypeScript, and Tailwind CSS, with Framer-oriented product positioning."
  }
];
