export type Lang = "en" | "ar";

// Data that doesn't change between languages: contact details, links,
// tech/brand names (kept in Latin script per convention), dates.
export const shared = {
  email: "syedgufran1997@gmail.com",
  phone: "+91 96630 64798",
  github: "https://github.com/syedgufran1997",
  linkedin: "https://www.linkedin.com/in/syedgufran/",
  siteLive: "https://syedgufran.netlify.app/",
  resumeHref: "/Syed_Gufran_Resume.pdf",
  stack: [
    "React.js",
    "Next.js",
    "TypeScript",
    "GraphQL",
    "Redux Toolkit",
    "Tailwind CSS",
    "TanStack Query",
    "Jest",
  ],
  experienceDates: [
    { start: "Apr 2025", end: "" }, // "end" filled per-language (Present / الآن)
    { start: "Aug 2022", end: "Mar 2025" },
    { start: "Feb 2021", end: "Jul 2022" },
  ],
  educationDates: { start: "Jul 2015", end: "Jul 2019" },
  projectStacks: [
    [
      "Next.js",
      "TypeScript",
      "GraphQL",
      "TanStack Query",
      "Jest",
      "Tailwind CSS",
    ],
    ["Next.js", "TypeScript", "GraphQL", "Tailwind CSS"],
    ["React.js", "TypeScript", "REST API", "SyncFusion", "SCSS"],
    ["React.js", "JavaScript", "Bootstrap", "Axios"],
    ["Next.js", "JavaScript", "Redux", "Tailwind CSS", "REST API"],
  ],
  projectHrefs: [
    "https://www.premierinn.com/gb/en/home.html",
    undefined,
    undefined,
    undefined,
    undefined,
  ],
};

interface Content {
  meta: { title: string; description: string };
  nav: {
    work: string;
    experience: string;
    skills: string;
    contact: string;
    resume: string;
  };
  hero: {
    kicker: string;
    headline: string;
    ctaWork: string;
    ctaContact: string;
    statusLabel: string;
    statusValue: string;
    projectLabel: string;
    projectValue: string;
    basedLabel: string;
    basedValue: string;
    reachLabel: string;
  };
  work: {
    heading: string;
    tag: string;
    items: {
      name: string;
      client: string;
      description: string;
      points: string[];
    }[];
  };
  experience: {
    heading: string;
    tag: string;
    present: string;
    atWord: string;
    items: {
      role: string;
      company: string;
      location: string;
      points: string[];
    }[];
  };
  skills: {
    heading: string;
    tag: string;
    groups: { label: string; items: string[] }[];
  };
  education: {
    degree: string;
    school: string;
    location: string;
    detail: string;
  };
  contact: {
    heading: string;
    body: string;
    downloadResume: string;
    footer: string;
  };
}

export const content: Record<Lang, Content> = {
  en: {
    meta: {
      title: "Syed Gufran — Senior Frontend Engineer",
      description:
        "Syed Gufran, Senior Frontend Engineer specializing in React.js, Next.js, and TypeScript.",
    },
    nav: {
      work: "Work",
      experience: "Experience",
      skills: "Skills",
      contact: "Contact",
      resume: "Resume",
    },
    hero: {
      kicker: "Senior Frontend Engineer — 6+ years",
      headline:
        "I build interfaces that ship fast, scale cleanly, and hold up in production.",
      ctaWork: "View my work",
      ctaContact: "Get in touch",
      statusLabel: "Currently",
      statusValue: "Building at ITC Infotech",
      projectLabel: "Project",
      projectValue: "Premier Inn",
      basedLabel: "Based in",
      basedValue: "Bengaluru, India",
      reachLabel: "Email",
    },
    work: {
      heading: "Selected work",
      tag: "5 shipped products",
      items: [
        {
          name: "Premier Inn",
          client: "UK / UAE / Germany hotel chain",
          description:
            "The customer-facing booking platform for one of Europe's largest hotel chains. I work on the booking journey end to end, from component architecture to API integration.",
          points: [
            "Built reusable UI components and scalable features in Next.js and TypeScript.",
            "Integrated APIs and added performance and unit-testing coverage.",
            "Used AI-assisted workflows — Copilot, Claude, Gemini — for code generation and refactoring.",
          ],
        },
        {
          name: "Alignment Healthcare",
          client: "US healthcare company",
          description:
            "Patient- and provider-facing tooling built around reusable components and dynamic forms.",
          points: [
            "Developed reusable React.js components and dynamic forms.",
            "Refactored for performance, improving load times and maintainability.",
            "Worked directly with backend teams and clients to scope enhancements.",
          ],
        },
        {
          name: "Design Cafe — Designer Dashboard",
          client: "Home-interior design platform, Bengaluru",
          description:
            "A centralized dashboard for designers to manage projects, clients, and workflows.",
          points: [
            "Built reusable Next.js components and layouts for a consistent interface.",
            "Implemented secure route authentication with Next.js, GraphQL, and Apollo.",
            "Integrated server-side APIs via Next.js and Node.js.",
          ],
        },
        {
          name: "Metro Customer Referral",
          client: "Progressive Web App for metro wholesalers",
          description:
            "A PWA that lets metro wholesalers track product sales, built for reliability on unstable connections.",
          points: [
            "Built offline access and fast load times with an app-like experience.",
            "Configured service workers and caching for offline use.",
            "Validated PWA compliance with Lighthouse and Chrome DevTools.",
          ],
        },
        {
          name: "William Penn",
          client: "Luxury stationery e-commerce",
          description:
            "An e-commerce platform for luxury stationery and writing products, from authentication through checkout.",
          points: [
            "Set up authentication using next-session cookies from the project's start.",
            "Built the Dashboard, Wishlist, Cart, PLP, and PDP modules.",
            "Built a custom Axios instance with JWT and interceptors.",
          ],
        },
      ],
    },
    experience: {
      heading: "Experience",
      tag: "2021 — present",
      present: "Present",
      atWord: "at",
      items: [
        {
          role: "Senior Software Engineer",
          company: "ITC Infotech",
          location: "Bengaluru, India",
          points: [
            "Building scalable web applications on the Premier Inn project using Next.js, TypeScript, Tailwind CSS, and TanStack Query.",
            "Integrating GraphQL APIs with Apollo Client and writing unit/integration tests in Jest.",
            "Using agentic AI platforms for code generation, refactoring, and documentation, coordinating delivery through Jira and Agile/Scrum.",
          ],
        },
        {
          role: "Software Engineer",
          company: "Cognizant Technology Solutions",
          location: "Bengaluru, India",
          points: [
            "Built and maintained scalable frontend architecture in React.js with reusable, component-based UI.",
            "Applied micro-frontend principles to ship modular, independently deployable features.",
            "Improved performance through code splitting, lazy loading, and continuous refactoring.",
          ],
        },
        {
          role: "Software Engineer",
          company: "Retail Insights Pvt Ltd",
          location: "Bengaluru, India",
          points: [
            "Led development of responsive web apps and PWAs with React.js, Next.js, and TypeScript.",
            "Integrated REST and GraphQL APIs with Redux and Context API for state management.",
            "Led a team of four developers on sprint planning and code review.",
          ],
        },
      ],
    },
    skills: {
      heading: "What I work with",
      tag: "6 years, one stack deep",
      groups: [
        {
          label: "Languages",
          items: ["HTML5 / CSS3", "JavaScript", "TypeScript"],
        },
        {
          label: "Frameworks",
          items: [
            "React.js",
            "Next.js",
            "Redux Toolkit",
            "GraphQL / REST",
            "Tailwind CSS",
            "TanStack Query",
            "Jest",
          ],
        },
        {
          label: "Tooling",
          items: [
            "Git / GitHub / GitLab",
            "Postman",
            "Jira",
            "Figma",
            "Balsamiq",
            "Netlify",
          ],
        },
        {
          label: "Practices",
          items: [
            "Micro-frontends",
            "Frontend system design",
            "Monolithic architecture",
            "AI-assisted development",
          ],
        },
      ],
    },
    education: {
      degree: "B.E., Mechanical Engineering",
      school: "Jnana Vikas Institute of Technology",
      location: "Bengaluru, India",
      detail: "CGPA 7.1",
    },
    contact: {
      heading: "Hiring, or just want to talk frontend architecture?",
      body: "I'm open to senior frontend roles and interesting freelance work. Email is the fastest way to reach me.",
      downloadResume: "Download resume",
      footer: "Bengaluru, India.",
    },
  },

  ar: {
    meta: {
      title: "سيد غفران — مهندس واجهات أمامية أول",
      description:
        "سيد غفران، مهندس واجهات أمامية أول متخصص في React.js وNext.js وTypeScript.",
    },
    nav: {
      work: "الأعمال",
      experience: "الخبرة",
      skills: "المهارات",
      contact: "تواصل",
      resume: "السيرة الذاتية",
    },
    hero: {
      kicker: "مهندس واجهات أمامية أول — أكثر من 6 سنوات",
      headline: "أبني واجهات تُطلق بسرعة، وتنمو بسلاسة، وتصمد في بيئة الإنتاج.",
      ctaWork: "شاهد أعمالي",
      ctaContact: "تواصل معي",
      statusLabel: "حاليًا",
      statusValue: "أعمل في ITC Infotech",
      projectLabel: "المشروع",
      projectValue: "Premier Inn",
      basedLabel: "المقيم في",
      basedValue: "بنغالورو، الهند",
      reachLabel: "البريد الإلكتروني",
    },
    work: {
      heading: "أعمال مختارة",
      tag: "5 منتجات تم إطلاقها",
      items: [
        {
          name: "Premier Inn",
          client: "سلسلة فنادق في بريطانيا والإمارات وألمانيا",
          description:
            "منصة الحجز الموجهة للعملاء لإحدى أكبر سلاسل الفنادق في أوروبا. أعمل على رحلة الحجز بالكامل، من بنية المكوّنات إلى دمج واجهات البرمجة.",
          points: [
            "بناء مكوّنات واجهة قابلة لإعادة الاستخدام وميزات قابلة للتوسّع باستخدام Next.js وTypeScript.",
            "دمج واجهات برمجية وإضافة اختبارات أداء ووحدات لتحسين الموثوقية.",
            "استخدام أدوات الذكاء الاصطناعي المساعدة — Copilot وClaude وGemini — في توليد الأكواد وإعادة الهيكلة.",
          ],
        },
        {
          name: "Alignment Healthcare",
          client: "شركة رعاية صحية أمريكية",
          description:
            "أدوات موجهة للمرضى ومقدّمي الرعاية مبنية حول مكوّنات قابلة لإعادة الاستخدام ونماذج ديناميكية.",
          points: [
            "تطوير مكوّنات React.js ونماذج ديناميكية قابلة لإعادة الاستخدام.",
            "إعادة الهيكلة لتحسين الأداء وسرعة التحميل وقابلية الصيانة.",
            "العمل المباشر مع فرق الخلفية والعملاء لتحديد نطاق التحسينات.",
          ],
        },
        {
          name: "Design Cafe — لوحة تحكم المصممين",
          client: "منصة تصميم داخلي، بنغالورو",
          description:
            "لوحة تحكم مركزية للمصممين لإدارة المشاريع والعملاء وسير العمل.",
          points: [
            "بناء مكوّنات وتخطيطات Next.js قابلة لإعادة الاستخدام لواجهة متّسقة.",
            "تنفيذ مصادقة آمنة للمسارات باستخدام Next.js وGraphQL وApollo.",
            "دمج واجهات برمجية من جانب الخادم عبر Next.js وNode.js.",
          ],
        },
        {
          name: "Metro Customer Referral",
          client: "تطبيق ويب تقدّمي لتجّار الجملة في مترو",
          description:
            "تطبيق ويب تقدّمي يتيح لتجّار الجملة تتبّع مبيعات المنتجات، مصمَّم للعمل بثبات على اتصالات غير مستقرة.",
          points: [
            "بناء وصول دون اتصال وأوقات تحميل سريعة بتجربة شبيهة بالتطبيقات الأصلية.",
            "إعداد عمّال الخدمة والتخزين المؤقت للاستخدام دون اتصال.",
            "التحقق من التوافق مع معايير PWA باستخدام Lighthouse وChrome DevTools.",
          ],
        },
        {
          name: "William Penn",
          client: "متجر إلكتروني للقرطاسية الفاخرة",
          description:
            "منصة تجارة إلكترونية للقرطاسية وأدوات الكتابة الفاخرة، من المصادقة وحتى إتمام الشراء.",
          points: [
            "إعداد المصادقة باستخدام ملفات تعريف الارتباط الخاصة بالجلسة منذ بداية المشروع.",
            "بناء وحدات لوحة التحكم وقائمة الرغبات والسلة وصفحات المنتجات.",
            "بناء نسخة مخصّصة من Axios مع دعم JWT واعتراضات تلقائية.",
          ],
        },
      ],
    },
    experience: {
      heading: "الخبرة العملية",
      tag: "2021 — حتى الآن",
      present: "حتى الآن",
      atWord: "في",
      items: [
        {
          role: "مهندس برمجيات أول",
          company: "ITC Infotech",
          location: "بنغالورو، الهند",
          points: [
            "بناء تطبيقات ويب قابلة للتوسّع ضمن مشروع Premier Inn باستخدام Next.js وTypeScript وTailwind CSS وTanStack Query.",
            "دمج واجهات GraphQL باستخدام Apollo Client وكتابة اختبارات الوحدة والتكامل باستخدام Jest.",
            "استخدام منصات الذكاء الاصطناعي الوكيلية لتوليد الأكواد وإعادة الهيكلة والتوثيق، وتنسيق التسليم عبر Jira وAgile/Scrum.",
          ],
        },
        {
          role: "مهندس برمجيات",
          company: "Cognizant Technology Solutions",
          location: "بنغالورو، الهند",
          points: [
            "بناء وصيانة بنية واجهة أمامية قابلة للتوسّع باستخدام React.js مع مكوّنات قابلة لإعادة الاستخدام.",
            "تطبيق مبادئ الواجهات الأمامية المصغّرة لإطلاق ميزات معيارية قابلة للنشر بشكل مستقل.",
            "تحسين الأداء عبر تقسيم الكود والتحميل الكسول وإعادة الهيكلة المستمرة.",
          ],
        },
        {
          role: "مهندس برمجيات",
          company: "Retail Insights Pvt Ltd",
          location: "بنغالورو، الهند",
          points: [
            "قيادة تطوير تطبيقات ويب متجاوبة وتطبيقات ويب تقدّمية باستخدام React.js وNext.js وTypeScript.",
            "دمج واجهات REST وGraphQL مع Redux وContext API لإدارة الحالة.",
            "قيادة فريق من أربعة مطورين في تخطيط السبرنتات ومراجعة الأكواد.",
          ],
        },
      ],
    },
    skills: {
      heading: "أدوات ومهارات",
      tag: "6 سنوات من التعمّق في تقنية واحدة",
      groups: [
        {
          label: "لغات البرمجة",
          items: ["HTML5 / CSS3", "JavaScript", "TypeScript"],
        },
        {
          label: "أطر العمل",
          items: [
            "React.js",
            "Next.js",
            "Redux Toolkit",
            "GraphQL / REST",
            "Tailwind CSS",
            "TanStack Query",
            "Jest",
          ],
        },
        {
          label: "الأدوات",
          items: [
            "Git / GitHub / GitLab",
            "Postman",
            "Jira",
            "Figma",
            "Balsamiq",
            "Netlify",
          ],
        },
        {
          label: "الممارسات",
          items: [
            "الواجهات الأمامية المصغّرة",
            "تصميم أنظمة الواجهة الأمامية",
            "البنية الأحادية",
            "التطوير بمساعدة الذكاء الاصطناعي",
          ],
        },
      ],
    },
    education: {
      degree: "بكالوريوس الهندسة، تخصص الهندسة الميكانيكية",
      school: "معهد جنانا فيكاس للتكنولوجيا",
      location: "بنغالورو، الهند",
      detail: "المعدل التراكمي 7.1",
    },
    contact: {
      heading: "هل ترغب بالتوظيف أم تودّ الحديث عن هندسة الواجهات الأمامية؟",
      body: "أنا منفتح على وظائف هندسة واجهات أمامية أول وفرص عمل حر مميزة. البريد الإلكتروني هو أسرع وسيلة للتواصل معي.",
      downloadResume: "تحميل السيرة الذاتية",
      footer: "بنغالورو، الهند.",
    },
  },
};
