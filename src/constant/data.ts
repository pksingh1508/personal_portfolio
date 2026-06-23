export const siteMeta = {
  title: "Pawan Kumar - Full Stack Developer",
  description:
    "Personal portfolio for Pawan Kumar, a full stack web and mobile developer building scalable products with React, Next.js, React Native, Laravel, Node.js, Supabase, and PostgreSQL.",
  name: "PAWAN_KUMAR",
  footerLeft: "SYSTEM_STABLE // KERNEL: 5.15.0-HYPER // LATENCY: 24MS",
  footerRight: ["STATUS: ACTIVE", "Uptime: 99.9%"],
};

export const navItems = [
  { label: "HOME", href: "#home", icon: "home" },
  { label: "BUILDS", href: "#builds", icon: "code" },
  { label: "STACK", href: "#stack", icon: "hub" },
  { label: "LOGS", href: "#logs", icon: "history" },
  { label: "PROFILE", href: "#profile", icon: "person" },
  { label: "MESSAGE", href: "#message", icon: "mail" },
];

export const hero = {
  badge: "SYSTEM_STATUS: AVAILABLE_FOR_WORK",
  title: "Building scalable web & mobile",
  highlight: "experiences.",
  description:
    "I'm Pawan Kumar, a Full Stack Web & Mobile Developer focused on React, Next.js, React Native, Laravel, Node.js, Supabase, PostgreSQL, and modern product engineering.",
  terminalTitle: "// INIT_SEQUENCE",
  codeLines: [
    [
      { text: "const ", tone: "keyword" },
      { text: "system", tone: "identifier" },
      { text: " = new " },
      { text: "Developer", tone: "function" },
      { text: "({" },
    ],
    [
      { text: "  name", tone: "property" },
      { text: ": " },
      { text: "'Pawan Kumar'", tone: "string" },
      { text: "," },
    ],
    [
      { text: "  role", tone: "property" },
      { text: ": " },
      { text: "'Full Stack Engineer'", tone: "string" },
      { text: "," },
    ],
    [
      { text: "  status", tone: "property" },
      { text: ": " },
      { text: "'Ready to build'", tone: "string" },
    ],
    [{ text: "});", tone: "keyword" }],
    [],
    [
      { text: "system", tone: "identifier" },
      { text: "." },
      { text: "init", tone: "function" },
      { text: "();" },
    ],
  ],
  actions: [
    { label: "VIEW PROJECTS", href: "#builds", variant: "primary" },
    { label: "CONTACT ME", href: "#message", variant: "outline" },
  ],
  renderStatus: "[RENDER_NODE_01_ACTIVE]",
};

export const manifest = {
  title: "SYSTEM_MANIFEST",
  facts: [
    { label: "CLASS:", value: "FULL_STACK_DEVELOPER" },
    { label: "LOCATION:", value: "INDIA" },
    { label: "EXPERIENCE:", value: "1+ YEARS" },
    { label: "FOCUS:", value: "WEB_APPS / MOBILE_APPS" },
    { label: "CORE_STRENGTH:", value: "SHIPPING REAL PRODUCTS.", wide: true },
  ],
  statement:
    "I build modern web and mobile applications that are fast, scalable, and easy to use. Merging robust backend architectures with fluid frontend experiences, I engineer solutions designed for real-world impact.",
  stats: [
    { value: "10+", label: "Projects Built", icon: null },
    { value: null, label: "Web + Mobile", icon: "devices" },
    { value: null, label: "Production Deployed", icon: "cloud_done" },
    { value: null, label: "Remote Ready", icon: "public" },
  ],
};

export const projects = [
  {
    name: "EU_CAREER_SERWIS",
    status: "STABLE",
    uuid: "882-X",
    repoLabel: "VIEW REPO",
    deployLabel: "DEPLOYMENT",
    summary:
      "A high-performance career portal designed specifically for the European market. Engineered to handle large volumes of applicant data with robust filtering and real-time status tracking. The system utilizes a headless CMS architecture to ensure content delivery speeds remain sub-100ms globally.",
    architecture: [
      { label: "FRONTEND", value: "Next.js" },
      { label: "BACKEND/CMS", value: "Strapi" },
      { label: "DATABASE", value: "PostgreSQL" },
      { label: "INFRASTRUCTURE", value: "Vercel & AWS" },
    ],
    features: [
      "Dynamic routing and Server-Side Rendering (SSR) for optimal SEO.",
      "Custom Strapi controllers for complex relational data querying.",
      "Automated CV parsing pipeline using external ML API endpoints.",
      "JWT-based authentication with role-based access control (RBAC).",
    ],
    deploymentLogs: [
      "[08:42:12] INITIALIZING BUILD SEQUENCE...",
      "[08:42:15] FETCHING LATEST COMMIT: a7f892c",
      "[08:42:18] RESOLVING DEPENDENCIES... OK",
      "[08:43:02] COMPILING NEXT.JS PAGES... OK",
      "[08:43:20] OPTIMIZING ASSETS... OK",
      "> DEPLOYMENT SUCCESSFUL. URL LIVE.",
    ],
  },
  {
    name: "EU_WORK_SUPPORT",
    status: "LIVE",
    uuid: "913-A",
    summary:
      "A mobile-first support workflow for workers navigating European employment processes, focused on guided tasks and clear document states.",
    architecture: [
      { label: "MOBILE", value: "React Native" },
      { label: "RUNTIME", value: "Expo" },
      { label: "DATA", value: "Supabase" },
      { label: "BUILD", value: "EAS" },
    ],
    features: [
      "Role-oriented task flows for applicants and internal operators.",
      "Document status tracking with clear handoff states.",
      "Expo build profiles for preview APK and production store output.",
    ],
    deploymentLogs: [
      "[10:11:02] SYNCING MOBILE RUNTIME...",
      "[10:11:28] VALIDATING APP CONFIG... OK",
      "> CHANNEL READY FOR FIELD TESTING.",
    ],
  },
  {
    name: "HACKATHON_WALLAH",
    status: "ARCHIVED",
    uuid: "442-H",
    summary:
      "A rapid-build hackathon platform prototype for event discovery, team formation, and project submission flows.",
    architecture: [
      { label: "FRONTEND", value: "React" },
      { label: "API", value: "Node.js" },
      { label: "DATABASE", value: "PostgreSQL" },
      { label: "AUTH", value: "JWT" },
    ],
    features: [
      "Event listing and participant onboarding.",
      "Team joining workflow with submission tracking.",
      "Admin-friendly moderation states.",
    ],
    deploymentLogs: ["[12:20:00] PROTOTYPE BUILD COMPLETE.", "> MODULE ARCHIVED."],
  },
  {
    name: "INVOICE_GENERATOR",
    status: "STABLE",
    uuid: "735-I",
    summary:
      "A practical invoice creation tool for fast client billing, reusable line items, export-ready documents, and clean business records.",
    architecture: [
      { label: "UI", value: "Next.js" },
      { label: "STATE", value: "TypeScript" },
      { label: "OUTPUT", value: "PDF" },
      { label: "DEPLOY", value: "Vercel" },
    ],
    features: [
      "Reusable customer and item data entry.",
      "Clean invoice preview with export workflow.",
      "Responsive layout for desktop and mobile usage.",
    ],
    deploymentLogs: ["[16:00:13] GENERATING DOCUMENT ENGINE... OK", "> READY."],
  },
  {
    name: "TRIMFIT_APP",
    status: "BETA",
    uuid: "618-T",
    summary:
      "A wellness and fitness mobile app concept focused on daily progress loops, lightweight tracking, and habit consistency.",
    architecture: [
      { label: "MOBILE", value: "React Native" },
      { label: "RUNTIME", value: "Expo" },
      { label: "DATA", value: "Supabase" },
      { label: "UI", value: "NativeWind" },
    ],
    features: [
      "Progress tracking for recurring fitness habits.",
      "Mobile-first flows built for quick daily check-ins.",
      "Portable data model for future coaching features.",
    ],
    deploymentLogs: ["[07:30:09] MOBILE MODULE ONLINE.", "> BETA CHANNEL OPEN."],
  },
  {
    name: "CALL_OPS_DASHBOARD",
    status: "ACTIVE",
    uuid: "204-C",
    summary:
      "An operations dashboard concept for tracking call activity, queue state, and team performance signals in one focused interface.",
    architecture: [
      { label: "FRONTEND", value: "React" },
      { label: "API", value: "Laravel" },
      { label: "DATABASE", value: "MySQL" },
      { label: "CHARTS", value: "Realtime" },
    ],
    features: [
      "Queue and activity monitoring panels.",
      "Operator-friendly metrics and status cards.",
      "Structured filters for repeated daily review.",
    ],
    deploymentLogs: ["[13:44:51] OPS DASHBOARD COMPILED.", "> ACTIVE REVIEW."],
  },
];

export const stack = {
  eyebrow: "SYSTEM_ARCHITECTURE / BUILD_STACK",
  title: "> core_dependencies.init()",
  description:
    "Dependency Graph Mapping. Analyzing current tech stack runtime environments and core infrastructure layers.",
  layers: [
    {
      label: "[FRONTEND_LAYER]",
      icon: "terminal",
      placement: "md:col-start-2 md:col-span-4",
      tools: [
        { name: "React", icon: "javascript" },
        { name: "Next.js", icon: "code_blocks" },
        { name: "TS", icon: "data_object" },
      ],
    },
    {
      label: "[MOBILE_RUNTIME]",
      icon: "smartphone",
      placement: "md:col-start-7 md:col-span-4 md:translate-y-16",
      tools: [
        { name: "React Native", icon: "phone_iphone" },
        { name: "Expo", icon: "rocket_launch" },
      ],
    },
    {
      label: "[BACKEND_CORE]",
      icon: "dns",
      placement: "md:col-start-4 md:col-span-6",
      emphasized: true,
      tools: [
        { name: "Node.js", icon: "hub" },
        { name: "Laravel", icon: "php" },
      ],
    },
    {
      label: "[DATA_STORAGE]",
      icon: "storage",
      placement: "md:col-start-2 md:col-span-4",
      tools: [
        { name: "Supabase", icon: "database" },
        { name: "PostgreSQL", icon: "table" },
      ],
    },
    {
      label: "[DEPLOYMENT_PIPELINE]",
      icon: "deployed_code",
      placement: "md:col-start-7 md:col-span-4 md:translate-y-12",
      tools: [
        { name: "VPS", icon: "cloud" },
        { name: "Nginx", icon: "router" },
      ],
    },
  ],
};

export const logs = {
  title: "ACTIVITY_LOGS",
  subtitle: "SYSTEM_TIMELINE // EXPERIENCE_RECORDS // STATUS: SYNCED",
  command: "> grep 'experience' ./logs",
  file: "/var/log/syslog/experience.log",
  entries: [
    {
      time: "14:32:05",
      status: "OK",
      statusTone: "success",
      period: "Jan 2026 - Present",
      title: "SDE @ Recovery Law Group",
      lines: [
        "Initiated backend optimization protocols.",
        "Deployed new microservices architecture reducing server load.",
        "Metric Delta: Efficiency +20%",
        "Status: Ongoing continuous integration.",
      ],
    },
    {
      time: "09:15:22",
      status: "OK",
      statusTone: "success",
      period: "Mar 2024 - Jun 2024",
      title: "Full Stack Intern @ RemoteIntern",
      lines: [
        "Executed full-stack feature development sprint.",
        "Integrated third-party APIs for data synchronization.",
        "Resolved 45+ UI/UX anomalies in legacy dashboard.",
        "Metric Delta: User Retention +15%",
        "Status: Completed successfully. Codebase merged to main.",
      ],
    },
    {
      time: "18:45:10",
      status: "WARN",
      statusTone: "warning",
      period: "Aug 2023 - Dec 2023",
      title: "Freelance Developer @ Self-Employed",
      lines: [
        "Managed multiple client deployment pipelines.",
        "Warning: High context switching detected during Q4.",
        "Delivered 3 custom e-commerce solutions.",
        "Metric Delta: Revenue stream established",
        "Status: Archived.",
      ],
      muted: true,
    },
  ],
};

export const profile = {
  header: "/ SYS_DIR / IDENTITY_MANIFEST",
  avatar: {
    src: "/myimage.png",
    alt: "Portrait of Pawan Kumar.",
  },
  fields: [
    { label: "NAME", value: "Pawan Kumar" },
    { label: "CLASS", value: "Full Stack Developer" },
    { label: "EDUCATION", value: "BCA / MCA" },
    { label: "LOCATION", value: "India" },
  ],
  bio:
    "I am driven by a passion for building practical, scalable products that solve real-world problems. Operating efficiently across the full stack, I translate complex architectures into seamless user experiences. Recognized as a highly adaptable fast learner, I continuously integrate bleeding-edge frameworks into my tech stack to maintain optimal deployment velocity and system robustness.",
  interests: [
    { label: "STARTUPS", icon: "rocket_launch" },
    { label: "SAAS", icon: "cloud_sync", featured: true },
    { label: "AUTOMATION", icon: "precision_manufacturing" },
  ],
};

export const contact = {
  title: "SECURE UPLINK",
  session: "882-X",
  mapImage:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuB1wee9gQyfLrIzhwk33wiHm1u-JoZF2EwNXcs4iDPNbuRkgrxeaE4YqhZjHJWTzK2KZaGI0w2eiMidMfBlAczOa9aKzvWjl_nbs410ucrWVZHspkMwyma3xyadpbBHBXq0kdJ6rdpo8FbpTfzxNysagNO45hSWtBl9yewwDR_f5jIo1ZG1Tdy0mdrd5uK9PW-gZIu6L7v2hGzpTowIwdtX6-dd4gM9zso-Hm5E2qgPxS4d7Q4guUxcd8eVsqspj2q0i7Qb12h6NJo",
  nodes: [
    { label: "LINKEDIN_NODE", value: "[ACTIVE]", tone: "secondary" },
    { label: "GITHUB_NODE", value: "[ACTIVE]", tone: "secondary" },
    { label: "X_TERMINAL", value: "[STANDBY]", tone: "muted" },
    { label: "CORE_SERVER", value: "[READY]", tone: "success" },
  ],
  origin: ["LAT: 20.5937 deg N", "LON: 78.9629 deg E", "REGION: INDIA_SEC_01"],
  fields: [
    { label: "INIT_NAME", placeholder: "Enter identifier...", type: "text" },
    { label: "INIT_EMAIL", placeholder: "Enter return address...", type: "email" },
  ],
  message: { label: "DATA_PAYLOAD", placeholder: "Construct message..." },
  submit: "EXECUTE_BROADCAST",
};
