export const siteMeta = {
  title: "Pawan Kumar | PORTFOLIO",
  description:
    "A cybernetic personal portfolio for a full-stack architect focused on scalable systems and high-performance digital products.",
  productName: "Pawan Kumar",
  logName: "ARCHITECT_LOG",
  status: "STATUS: COMPILING...",
};

export const topNavItems = [
  { label: "REPOS", href: "#builds", active: true },
  { label: "BUILDS", href: "#builds" },
  { label: "LOGS", href: "#logs" },
  { label: "STATUS", href: "#contact" },
];

export const headerIcons = [
  "terminal",
  "settings_input_component",
  "sensors",
];

export const sidebarItems = [
  { label: "MANIFEST", icon: "folder_open", href: "#about", active: true },
  { label: "CORE_OS", icon: "memory", href: "#stack" },
  { label: "NETWORK", icon: "router", href: "#builds" },
  { label: "STORAGE", icon: "database", href: "#logs" },
  { label: "TERMINATE", icon: "power_settings_new", href: "#contact" },
];

export const hero = {
  sideLabel: "BUILD_CORE_01",
  status: "status: shipping ideas",
  titleLines: ["CONCEPT", "TO", "COMMIT"],
  terminalName: "terminal_v4.0.1",
  terminalLines: [
    "system.init();",
    "loading portfolio_assets... [OK]",
    'deploy.mode = "AGGRESSIVE";',
    'architecture.focus = "SCALABILITY";',
  ],
  cta: "EXECUTE_BUILD",
  visual: {
    alt: "3D abstract geometric wireframe structure glowing in electric cyan against a dark void digital art style",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCgbcI938eSfnHVlN2XW3S-vQU79deYvB6SJBqs2QFdvszgx15I06zbghYRyyrO0Gov4qRdfWfqsoy-lFi3EG2nZurUsa_WP3x3nsyhcXR7fzMfEzbY848hAl_XAhCbNJ4xUARVys73Dt2Oy6be81HsHpG5SICz7D5oE68iWh0Jd-0oQig2gFvWcdWdHEg04r2HoOz-MMzonk5_62xwaRvJj3n6eV5qmt0N3gqlkaJWO9UymbIs1pJuvFONCN7CsYnhtKj2rUjMiFAO",
  },
};

export const identity = {
  heading: "IDENTITY",
  index: "01.",
  fileName: "system_manifest.json",
  facts: [
    ["CLASS:", "FULL_STACK_ARCHITECT"],
    ["ORIGIN:", "NET_01_LONDON"],
    ["RUNTIME:", "8+ YEARS_EXP"],
    ["STRENGTH:", "SYSTEM_DESIGN"],
  ],
  statementBefore: "I build",
  statementHighlight: "high-performance",
  statementAfter:
    "digital instruments. My code isn't just a set of instructions; it's a foundation for scalable, resilient, and human-centric ecosystems.",
  stats: [
    { value: "42", label: "Projects Shipped" },
    { value: "12k+", label: "Commits this year" },
  ],
};

export const builds = [
  {
    id: "01",
    title: "NEURAL_NET_V2",
    status: "LIVE",
    icon: "data_object",
    description: "Decentralized AI inference engine with zero-latency overhead.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCyWBT2x9I8Ks9pzKaFETOkkRvWCi321UNutCpwDbKpSkUHzB5pOyE4k5YZ4ZraLycQ6i_f1zO2tqNYUIq5LjiHsSTiZIIsio195kOa0z5DT9V8NoZmE7d6toUQkrnJai3awyzp-L2qgiaC24N6xM1PECK8q-nAmy1G2UMrhwDUGmDpiTL6FmtDVnDgm8ucT7t9RWHBBbeNlyTB0toowbW8MF7dTFpisuij1k2TE1JOy-5RQQi06EiDUdh3MSqjleMJrO3moPRWkpZH",
    imageAlt: "Intricate circuit board detail with glowing blue light paths",
    offset: false,
  },
  {
    id: "02",
    title: "SKY_BRIDGE",
    status: "LIVE",
    icon: "cloud_done",
    description: "Multi-cloud orchestration tool for enterprise container fleets.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCCsjuy_u2dnuR5Sg3oOuvTA_kdVYeVZ-yiAjn4oGHTjJmVnhWTyzu3RyCwoZGZRUdFJ58h4NPbnM5tHRonoAQTIfbCq4UBFkhE5q27g7HCKr3DKDsN7o3FeRaG3d0C_LFG4w1RPIo4dWfxr_EYNs-uloKOvhRFqTF1OWCRB5kzz8oZgguI6Se3Z35AtwBKhGkmhA_PEB9fCtF49U9se6Xy-nX7ZFIwp3ihgSa2kHCFfWgmap-i37mPdkpI9JxR4aAHfr0RJzj-T_Fm",
    imageAlt: "Digital representation of earth with network connections",
    offset: true,
  },
  {
    id: "03",
    title: "VAULT_LOCK",
    status: "LIVE",
    icon: "shield",
    description: "Hardware-isolated encryption layer for cold-storage assets.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAkYmZ0emsF1zA5aGwILdEj7hz7SUduYChClsa8axd7m2FkmPYvPdk6z_IcMkRI_8tMLOB8507o4fq-GjrWP3L-2I9ZVb3ZZLZ_R35rbx8DObk5qddJWKRjQva7cF0ioq7XtDRddlKpAdKLprelXXcVT2-EbusXG9ieWAEJJCdbm4IdgaYwSUWdovVgoxoy3-0bUWMRhJUj_baXl2kH_ZZ7nkpxzFUHFcZuij_F93Ee7gz0JcRW21Qvh2KesS4QswUsZJEam6hTULvd",
    imageAlt: "Macro photo of server racks",
    offset: false,
  },
];

export const stack = {
  title: "BUILD_SYSTEM",
  description:
    "My stack is selected for stability, speed, and cross-platform compatibility. Always evolving, never redundant.",
  label: "> current_focus",
  focus: "RUST_LANG // WEBASSEMBLY",
  tools: [
    { name: "Typescript", tag: "CORE_ENGINE", icon: "terminal" },
    { name: "React_OS", tag: "FRONTEND_LAYER", icon: "memory" },
    { name: "PostgreSQL", tag: "STORAGE_STK", icon: "database" },
    { name: "GraphQL", tag: "DATA_PIPELINE", icon: "api" },
    { name: "Docker", tag: "CONTAINER_OPS", icon: "hub" },
    { name: "AWS_S3", tag: "CLOUD_INFRA", icon: "cloud_sync" },
    { name: "Node.js", tag: "RUNTIME_ENV", icon: "developer_mode" },
    { name: "Solidity", tag: "WEB3_AUTH", icon: "token" },
  ],
};

export const timeline = [
  {
    log: "LOG_01 // 2021-PRESENT",
    title: "SR. SYSTEM ARCHITECT",
    description:
      "Leading the core engineering team at TechFlow Inc. Overhauled legacy microservices into a unified service mesh.",
    icon: "check_circle",
    tags: ["KUBERNETES", "GOLANG"],
    active: true,
  },
  {
    log: "LOG_02 // 2018-2021",
    title: "FULL STACK ENGINEER",
    description:
      "Designed and implemented high-traffic consumer portals at ScaleGraph. Reduced API latency by 45%.",
    icon: "history",
    tags: ["REACT", "NODE"],
    reverse: true,
  },
  {
    log: "LOG_03 // 2016-2018",
    title: "FRONTEND DEVELOPER",
    description:
      "Built interactive visualization dashboards for data analytics startups. Focused on SVG performance and UX.",
    icon: "commit",
    tags: ["D3.JS", "TYPESCRIPT"],
  },
];

export const labs = [
  {
    kind: "Experimental",
    icon: "science",
    title: "CYBER_PHYSICS_LIB",
    description:
      "A lightweight WebAssembly library for simulating particle physics in 2D canvases with zero JS overhead.",
    status: "active_development",
    pulse: true,
  },
  {
    kind: "Side Project",
    icon: "bolt",
    title: "ZEN_TERMINAL",
    description:
      "An ultra-minimalist code editor environment focused on deep-work states and distraction elimination.",
    status: "v0.8.2_alpha",
  },
];

export const contact = {
  eyebrow: "Ready for deployment?",
  title: "DEPLOY_A_MESSAGE",
  connectionTitle: "Connection_Parameters",
  connectionParameters: [
    { label: "SERVER_STATUS:", value: "READY", status: true },
    { label: "ENCRYPTION:", value: "AES-256_GCM" },
    { label: "HANDSHAKE:", value: "SUCCESSFUL" },
    { label: "PROTOCOL:", value: "SECURE_TRANS_V2" },
    { label: "IP_ORIGIN:", value: "***.***.11.02" },
  ],
  terminalStatus: [
    "init message_buffer...",
    "checking packet integrity...",
    "waiting for user input_",
  ],
  fields: [
    {
      id: "identity",
      label: "Input: USER_IDENTITY",
      icon: "account_circle",
      placeholder: "NAME_HERE",
      type: "text",
    },
    {
      id: "callback",
      label: "Input: CALLBACK_ADDR",
      icon: "mail",
      placeholder: "EMAIL_OR_HANDLE",
      type: "email",
    },
  ],
  message: {
    id: "payload",
    label: "Input: PAYLOAD_BODY",
    icon: "description",
    placeholder: "SYSTEM_REQUEST_DETAILS...",
  },
  submitLabel: "BROADCAST_TRANSMISSION",
  footer: {
    copyright: "© 2024 Pawan Kumar",
    build: "Build: 0x9f2a71 | Runtime: 99.9% Uptime",
    links: ["Github", "LinkedIn", "Terminal_Log"],
    timezone: "TIMEZONE_UTC_0",
    status: "BUILD_STABLE",
  },
  scrollHint: "Scroll to explore.sys",
};
