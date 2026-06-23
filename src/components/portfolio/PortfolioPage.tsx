import {
  contact,
  hero,
  logs,
  manifest,
  profile,
  projects,
  siteMeta,
  stack,
} from "@/constant/data";
import { MobileCommandRail, StatusFooter, TopNav } from "./Navigation";
import { Symbol } from "./Symbol";
import ThreeSystem from "./ThreeSystem";

type Action = (typeof hero.actions)[number];
type Project = (typeof projects)[number];
type LogEntry = (typeof logs.entries)[number];

function SectionShell({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id: string;
}) {
  return (
    <section
      className={`scroll-mt-24 px-margin-mobile py-20 md:px-margin-desktop md:py-28 ${className}`}
      id={id}
    >
      <div className="relative z-10 mx-auto w-full max-w-[1440px]">
        {children}
      </div>
    </section>
  );
}

function SectionHeader({
  icon,
  label,
  title,
  subtitle,
}: {
  icon?: string;
  label?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <header className="mb-12">
      {label ? (
        <div className="mb-4 inline-flex items-center gap-2 border border-primary/30 bg-surface-container-high px-4 py-2 font-code text-sm text-primary">
          <span className="h-2 w-2 rounded-full bg-secondary shadow-[0_0_8px_var(--secondary)]" />
          {label}
        </div>
      ) : null}
      <div className="flex items-center gap-4">
        {icon ? <Symbol className="text-3xl text-primary">{icon}</Symbol> : null}
        <h2 className="font-headline text-4xl font-bold text-on-surface md:text-6xl">
          {title}
        </h2>
      </div>
      {subtitle ? (
        <p className="mt-4 max-w-3xl font-code text-sm text-on-surface-variant md:text-base">
          {subtitle}
        </p>
      ) : null}
    </header>
  );
}

function HudPanel({
  children,
  className = "",
  corners = false,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  corners?: boolean;
  id?: string;
}) {
  return (
    <div
      className={`panel-glass ${corners ? "hud-corners" : ""} ${className}`}
      id={id}
    >
      {children}
    </div>
  );
}

function ActionButton({ action }: { action: Action }) {
  return (
    <a
      className={`inline-flex min-h-12 items-center justify-center rounded-[4px] px-8 py-3 font-code text-xs font-bold ${
        action.variant === "primary" ? "btn-primary" : "btn-outline"
      }`}
      href={action.href}
    >
      {action.label}
    </a>
  );
}

function HeroTerminal() {
  return (
    <div className="hero-terminal-card relative overflow-hidden p-6 font-code text-sm sm:p-8">
      <div className="relative mb-5 text-on-surface-variant">
        {hero.terminalTitle}
      </div>
      <pre className="relative whitespace-pre-wrap leading-7">
        {hero.codeLines.map((line, lineIndex) => (
          <span className="block" key={`hero-code-${lineIndex}`}>
            {line.map((segment, segmentIndex) => (
              <span
                className={
                  "tone" in segment && segment.tone
                    ? `code-token-${segment.tone}`
                    : "code-token"
                }
                key={`${lineIndex}-${segmentIndex}`}
              >
                {segment.text}
              </span>
            ))}
            {lineIndex === hero.codeLines.length - 1 ? (
              <span className="blinking-cursor text-primary" />
            ) : null}
          </span>
        ))}
      </pre>
    </div>
  );
}

function HeroSection() {
  return (
    <SectionShell
      className="hero-section relative overflow-hidden pt-28 md:pt-32"
      id="home"
    >
      <div className="grid min-h-[640px] grid-cols-1 items-start gap-gutter lg:grid-cols-2">
        <div className="relative z-10 space-y-8">
          <div className="hero-status-badge inline-flex items-center gap-2 rounded-[5px] border border-primary/30 bg-surface-container-high px-3 py-1 font-code text-xs font-bold text-primary">
            <span className="h-2 w-2 rounded-full bg-success shadow-[0_0_8px_var(--success)] animate-pulse" />
            {hero.badge}
          </div>

          <h1 className="max-w-3xl font-headline text-5xl font-bold leading-tight text-on-background md:text-6xl xl:text-7xl">
            {hero.title} <span className="text-primary">{hero.highlight}</span>
          </h1>

          <p className="max-w-xl font-body text-lg leading-relaxed text-on-surface-variant md:text-xl">
            {hero.description}
          </p>

          <HeroTerminal />

          <div className="flex flex-wrap gap-4 pt-2">
            {hero.actions.map((action) => (
              <ActionButton action={action} key={action.label} />
            ))}
          </div>
        </div>

        <HudPanel className="hero-visual-card relative mt-6 flex h-[420px] items-center justify-center overflow-hidden lg:mt-16 lg:h-[700px] xl:h-[725px]">
          <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-tr from-surface/70 via-transparent to-transparent" />
          <ThreeSystem />
          <div className="absolute bottom-4 right-4 z-20 font-code text-xs text-primary/50">
            {hero.renderStatus}
          </div>
        </HudPanel>
      </div>
      <div className="hud-divider mt-12" />
    </SectionShell>
  );
}

function ManifestSection() {
  return (
    <SectionShell id="manifest">
      <SectionHeader icon="fingerprint" title={manifest.title} />
      <div className="grid grid-cols-1 gap-gutter lg:grid-cols-3">
        <HudPanel className="p-panel lg:col-span-2">
          <div className="grid grid-cols-1 gap-4 font-code text-sm sm:grid-cols-2">
            {manifest.facts.map((fact) => (
              <div
                className={`flex border-b border-outline-variant/30 pb-3 ${
                  fact.wide ? "sm:col-span-2" : ""
                }`}
                key={fact.label}
              >
                <span className="w-36 shrink-0 text-on-surface-variant">
                  {fact.label}
                </span>
                <span className="font-bold text-primary">{fact.value}</span>
              </div>
            ))}
          </div>
          <p className="mt-10 border-l-2 border-primary/50 pl-5 font-body text-lg leading-relaxed text-on-surface-variant">
            {manifest.statement}
          </p>
        </HudPanel>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1">
          {manifest.stats.map((stat) => (
            <HudPanel
              className="flex min-h-28 flex-col items-center justify-center p-6 text-center transition-colors hover:bg-surface-container-high"
              key={stat.label}
            >
              {stat.value ? (
                <div className="font-headline text-3xl font-bold text-primary">
                  {stat.value}
                </div>
              ) : (
                <Symbol className="mb-3 text-3xl text-secondary">
                  {stat.icon ?? "terminal"}
                </Symbol>
              )}
              <div className="mt-2 font-code text-xs font-bold text-on-surface-variant">
                {stat.label}
              </div>
            </HudPanel>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

function ProjectExplorer({ activeProject }: { activeProject: Project }) {
  return (
    <HudPanel className="flex min-h-[520px] flex-col overflow-hidden lg:min-h-full">
      <div className="flex items-center justify-between border-b border-primary/25 p-4">
        <span className="font-code text-sm font-bold text-secondary">
          EXPLORER // ROOT
        </span>
        <Symbol className="text-secondary">account_tree</Symbol>
      </div>
      <div className="flex-1 p-4">
        <div className="mb-4 pl-2 font-code text-sm text-on-surface-variant">
          ~/projects/shipped
        </div>
        <nav className="flex flex-col gap-1">
          {projects.map((project) => {
            const active = project.name === activeProject.name;
            return (
              <a
                className={`flex items-center gap-3 border-l-2 px-3 py-3 text-left font-code text-sm transition-all ${
                  active
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-transparent text-on-surface-variant hover:bg-white/5 hover:text-primary"
                }`}
                href={`#project-${project.name.toLowerCase()}`}
                key={project.name}
              >
                <Symbol className="text-lg">
                  {active ? "folder_open" : "folder"}
                </Symbol>
                <span className="truncate">{project.name}</span>
              </a>
            );
          })}
        </nav>
      </div>
      <div className="flex items-center gap-2 border-t border-primary/25 bg-surface-container-lowest/50 p-4 font-code text-sm text-on-surface-variant">
        <span className="text-primary">&gt;</span>
        <span>
          cd {activeProject.name}
          <span className="ml-1 inline-block h-4 w-2 animate-pulse bg-primary align-middle" />
        </span>
      </div>
    </HudPanel>
  );
}

function ArchitectureGrid({ project }: { project: Project }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {project.architecture.map((item) => (
        <div
          className="border border-primary/25 bg-surface-container/30 p-4 transition-colors hover:border-primary/80"
          key={item.label}
        >
          <div className="mb-2 font-code text-xs font-bold text-secondary">
            {item.label}
          </div>
          <div className="font-headline text-xl font-semibold text-on-surface">
            {item.value}
          </div>
        </div>
      ))}
    </div>
  );
}

function DeploymentLog({ lines }: { lines: string[] }) {
  return (
    <div className="relative overflow-hidden border border-outline-variant bg-surface-container-lowest p-4 font-code text-sm leading-7 text-success">
      <div className="scanlines absolute inset-0 opacity-20" />
      <div className="relative">
        {lines.map((line) => (
          <div className={line.startsWith(">") ? "mt-2 text-primary" : ""} key={line}>
            {line}
          </div>
        ))}
      </div>
    </div>
  );
}

function ProjectDetail({ project }: { project: Project }) {
  return (
    <HudPanel className="glow-cyan hud-corners overflow-hidden" id={`project-${project.name.toLowerCase()}`}>
      <div className="border-b border-primary/25 p-panel">
        <div className="flex flex-col gap-8 xl:flex-row xl:items-start xl:justify-between">
          <div>
            <div className="mb-3 flex items-center gap-3">
              <span className="border border-primary/30 bg-primary/10 px-2 py-1 font-code text-[10px] text-primary">
                [{project.status}]
              </span>
              <span className="border border-secondary/30 bg-secondary/10 px-2 py-1 font-code text-[10px] text-secondary">
                UUID: {project.uuid}
              </span>
            </div>
            <h3 className="font-headline text-4xl font-bold text-primary md:text-6xl">
              {project.name}
            </h3>
          </div>
          <div className="flex flex-wrap gap-4">
            <a
              className="btn-outline inline-flex min-h-12 items-center gap-2 px-6 py-3 font-code text-xs font-bold"
              href="#message"
            >
              <Symbol className="text-base">code</Symbol>
              {project.repoLabel ?? "VIEW REPO"}
            </a>
            <a
              className="btn-primary inline-flex min-h-12 items-center gap-2 px-6 py-3 font-code text-xs font-bold"
              href="#message"
            >
              <Symbol className="text-base">launch</Symbol>
              {project.deployLabel ?? "DEPLOYMENT"}
            </a>
          </div>
        </div>
        <div className="mt-8 h-[2px] bg-primary/20">
          <div className="h-full w-1/3 bg-primary" />
        </div>
      </div>

      <div className="space-y-10 p-panel">
        <p className="max-w-5xl font-body text-lg leading-relaxed text-on-surface-variant">
          {project.summary}
        </p>

        <div>
          <h4 className="mb-5 border-b border-primary/25 pb-3 font-headline text-2xl font-bold">
            // SYSTEM_ARCHITECTURE
          </h4>
          <ArchitectureGrid project={project} />
        </div>

        <div>
          <h4 className="mb-5 border-b border-primary/25 pb-3 font-headline text-2xl font-bold">
            // CORE_FEATURES
          </h4>
          <ul className="space-y-3 font-body text-on-surface-variant">
            {project.features.map((feature) => (
              <li className="flex gap-3" key={feature}>
                <span className="font-code font-bold text-primary">&gt;</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-5 border-b border-primary/25 pb-3 font-headline text-2xl font-bold">
            // DEPLOYMENT_LOGS
          </h4>
          <DeploymentLog lines={project.deploymentLogs} />
        </div>
      </div>
    </HudPanel>
  );
}

function ProjectCards() {
  return (
    <div className="mt-gutter grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
      {projects.slice(1).map((project) => (
        <HudPanel
          className="group p-5 transition-all hover:-translate-y-1"
          key={project.name}
        >
          <div className="mb-3 flex items-center justify-between">
            <span className="font-code text-[10px] text-primary">
              UUID: {project.uuid}
            </span>
            <span className="border border-primary/25 bg-primary/10 px-2 py-1 font-code text-[10px] text-primary">
              [{project.status}]
            </span>
          </div>
          <h4 className="font-headline text-2xl font-bold text-on-surface transition-colors group-hover:text-primary">
            {project.name}
          </h4>
          <p className="mt-3 line-clamp-3 font-body text-sm leading-6 text-on-surface-variant">
            {project.summary}
          </p>
        </HudPanel>
      ))}
    </div>
  );
}

function BuildsSection() {
  const activeProject = projects[0];

  return (
    <SectionShell id="builds">
      <SectionHeader
        icon="account_tree"
        title="SHIPPED_BUILDS"
        subtitle="Repository directory view for production modules and active project systems."
      />
      <div className="grid grid-cols-1 gap-gutter lg:grid-cols-[320px_1fr]">
        <ProjectExplorer activeProject={activeProject} />
        <ProjectDetail project={activeProject} />
      </div>
      <ProjectCards />
    </SectionShell>
  );
}

function StackNode({
  layer,
}: {
  layer: (typeof stack.layers)[number];
}) {
  return (
    <div className={`relative z-10 ${layer.placement}`}>
      <div className="mb-4 flex items-center justify-center gap-2 font-code text-sm text-secondary">
        <Symbol className="text-lg">{layer.icon}</Symbol>
        {layer.label}
      </div>
      <div
        className={`clipped-panel border bg-surface-container-low/80 p-6 backdrop-blur-md transition-all duration-300 hover:shadow-[0_0_25px_rgba(34,211,238,0.25)] ${
          layer.emphasized
            ? "border-primary/40 shadow-[0_0_20px_rgba(34,211,238,0.25)]"
            : "border-primary/20"
        }`}
      >
        <div className="flex flex-wrap justify-center gap-4">
          {layer.tools.map((tool) => (
            <div
              className="flex min-h-28 w-28 flex-col items-center justify-center gap-3 border border-outline-variant/50 bg-surface p-3 text-center transition-colors hover:border-primary/70"
              key={tool.name}
            >
              <Symbol className="text-4xl text-primary">{tool.icon}</Symbol>
              <span className="font-code text-sm font-bold">{tool.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function StackSection() {
  return (
    <SectionShell id="stack">
      <SectionHeader
        label={stack.eyebrow}
        title={stack.title}
        subtitle={stack.description}
      />
      <div className="relative grid grid-cols-1 gap-14 pb-10 md:grid-cols-12 md:gap-y-24">
        <svg
          aria-hidden="true"
          className="absolute inset-0 hidden h-full w-full md:block"
        >
          <line
            stroke="rgba(34, 211, 238, 0.18)"
            strokeDasharray="4 4"
            strokeWidth="2"
            x1="50%"
            x2="50%"
            y1="8%"
            y2="92%"
          />
          <line
            stroke="rgba(34, 211, 238, 0.16)"
            strokeDasharray="4 4"
            strokeWidth="2"
            x1="28%"
            x2="50%"
            y1="28%"
            y2="52%"
          />
          <line
            stroke="rgba(34, 211, 238, 0.16)"
            strokeDasharray="4 4"
            strokeWidth="2"
            x1="72%"
            x2="50%"
            y1="30%"
            y2="52%"
          />
          <line
            stroke="rgba(34, 211, 238, 0.16)"
            strokeDasharray="4 4"
            strokeWidth="2"
            x1="50%"
            x2="34%"
            y1="52%"
            y2="80%"
          />
          <line
            stroke="rgba(34, 211, 238, 0.16)"
            strokeDasharray="4 4"
            strokeWidth="2"
            x1="50%"
            x2="66%"
            y1="52%"
            y2="80%"
          />
        </svg>
        {stack.layers.map((layer) => (
          <StackNode key={layer.label} layer={layer} />
        ))}
      </div>
    </SectionShell>
  );
}

function StatusBadge({ entry }: { entry: LogEntry }) {
  const className =
    entry.statusTone === "success"
      ? "bg-[#003300] text-[#00ff00]"
      : "bg-[#332200] text-warning";

  return (
    <span className={`px-2 py-0.5 text-xs ${className}`}>[{entry.status}]</span>
  );
}

function LogRow({ entry }: { entry: LogEntry }) {
  return (
    <div className={`group/entry flex flex-col gap-3 ${entry.muted ? "opacity-70" : ""}`}>
      <div className="flex flex-wrap items-center gap-4 border-b border-outline-variant/30 pb-2 text-on-surface-variant">
        <span className="text-secondary">[{entry.time}]</span>
        <StatusBadge entry={entry} />
        <span className="text-primary">{entry.period}</span>
        <span className="opacity-50">||</span>
        <span className="font-bold text-on-surface">{entry.title}</span>
      </div>
      <div className="border-l border-primary/20 pl-6 leading-relaxed text-on-surface/80 transition-colors group-hover/entry:border-primary/60 md:ml-10 md:pl-12">
        {entry.lines.map((line) => {
          const [prefix, metric] = line.split(": ");
          const isMetric = line.startsWith("Metric Delta:");
          return (
            <div key={line}>
              &gt;{" "}
              {isMetric ? (
                <>
                  {prefix}: <span className="text-secondary">{metric}</span>
                </>
              ) : (
                line
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function LogsSection() {
  return (
    <SectionShell id="logs">
      <SectionHeader title={logs.title} subtitle={logs.subtitle} />

      <HudPanel className="mb-8 flex items-center gap-4 p-4">
        <Symbol className="text-primary/70">search</Symbol>
        <div className="flex-1 font-code text-sm text-primary">
          {logs.command}
          <span className="ml-2 inline-block h-4 w-2 animate-pulse bg-primary align-middle" />
        </div>
        <div className="hidden border border-outline-variant bg-surface-container px-3 py-2 font-code text-xs text-on-surface-variant sm:block">
          [RET] TO EXECUTE
        </div>
      </HudPanel>

      <div className="terminal-panel overflow-hidden">
        <div className="flex items-center justify-between border-b border-primary/25 bg-surface-container-high px-4 py-2 font-code text-xs font-bold text-on-surface-variant">
          <span>{logs.file}</span>
          <span className="text-primary">READ_ONLY</span>
        </div>
        <div className="space-y-8 p-panel font-code text-sm md:text-base">
          {logs.entries.map((entry) => (
            <LogRow entry={entry} key={`${entry.time}-${entry.title}`} />
          ))}
          <div className="flex items-center gap-4 pt-4 text-on-surface-variant/50">
            <span className="h-px flex-1 bg-outline-variant/30" />
            <span className="font-code text-[10px]">EOF</span>
            <span className="h-px flex-1 bg-outline-variant/30" />
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

function ProfileSection() {
  return (
    <SectionShell id="profile">
      <header className="mb-12 flex items-center gap-4">
        <div className="h-[2px] w-12 bg-primary" />
        <h2 className="font-code text-sm uppercase text-secondary md:text-base">
          {profile.header}
        </h2>
        <div className="h-[2px] flex-1 bg-gradient-to-r from-primary/30 to-transparent" />
      </header>

      <div className="grid grid-cols-1 gap-gutter lg:grid-cols-12">
        <HudPanel className="hud-corners overflow-hidden p-1 lg:col-span-4">
          <div className="mb-4 flex h-1 bg-surface-variant">
            <div className="h-full w-1/3 bg-primary flicker" />
          </div>
          <div className="relative aspect-[4/5] overflow-hidden border border-primary/10 bg-surface-container-lowest">
            <div className="scan-sweep absolute inset-x-0 top-0 z-20 h-10 bg-gradient-to-b from-primary/0 via-primary/10 to-primary/0" />
            <img
              alt={profile.avatar.alt}
              className="h-full w-full object-cover opacity-80 mix-blend-luminosity transition-all duration-700 hover:mix-blend-normal"
              src={profile.avatar.src}
            />
            <div className="absolute left-4 top-4 z-20 h-4 w-4 border-l border-t border-secondary/60" />
            <div className="absolute right-4 top-4 z-20 h-4 w-4 border-r border-t border-secondary/60" />
            <div className="absolute bottom-4 left-4 z-20 h-4 w-4 border-b border-l border-secondary/60" />
            <div className="absolute bottom-4 right-4 z-20 h-4 w-4 border-b border-r border-secondary/60" />
          </div>
          <div className="mt-1 flex items-center justify-between border-t border-primary/20 bg-surface-container-highest p-4">
            <div className="flex items-center gap-2 text-primary">
              <Symbol className="slow-spin text-base">radar</Symbol>
              <span className="font-code text-sm flicker">Scanning...</span>
            </div>
            <span className="font-code text-sm text-secondary/60">
              MATCH: 99.9%
            </span>
          </div>
        </HudPanel>

        <div className="flex flex-col gap-gutter lg:col-span-8">
          <HudPanel className="relative p-panel">
            <div className="absolute right-0 top-0 border-b border-l border-primary/20 bg-primary/10 px-3 py-1 font-code text-xs text-primary">
              [ STATUS: ACTIVE ]
            </div>
            <h3 className="mb-8 flex items-center gap-2 font-headline text-3xl font-bold">
              <Symbol className="text-secondary">terminal</Symbol>
              USER_DATA_MATRIX
            </h3>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {profile.fields.map((field) => (
                <div
                  className="border-l-2 border-surface-variant pl-4 transition-colors hover:border-primary"
                  key={field.label}
                >
                  <div className="font-code text-sm text-on-surface-variant/70">
                    &gt;&gt; FIELD: {field.label}
                  </div>
                  <div className="mt-2 font-code text-base text-on-surface">
                    {field.value}
                  </div>
                </div>
              ))}
            </div>
          </HudPanel>

          <HudPanel className="flex-1 bg-surface-container-highest/40 p-panel">
            <div className="mb-5 flex items-center gap-2 border-b border-secondary/20 pb-3 text-secondary">
              <Symbol className="text-lg">data_object</Symbol>
              <span className="font-code text-xs font-bold">EXEC // BIO.txt</span>
            </div>
            <p className="font-code text-sm leading-8 text-on-surface md:text-base">
              <span className="mr-2 text-primary">&gt;</span>
              {profile.bio}
              <span className="ml-2 inline-block h-4 w-2 bg-primary align-middle flicker" />
            </p>
          </HudPanel>
        </div>
      </div>

      <HudPanel className="relative mt-gutter overflow-hidden p-panel">
        <div className="absolute -top-px left-10 h-[2px] w-28 bg-secondary" />
        <div className="absolute -bottom-px right-10 h-[2px] w-20 bg-primary" />
        <h3 className="mb-10 flex items-center gap-3 font-headline text-2xl font-semibold">
          <Symbol className="text-primary-container">hub</Symbol>
          NEURAL_NETWORK_NODES // Interests
        </h3>
        <div className="relative flex flex-wrap items-center justify-center gap-8 py-8">
          <div className="absolute left-10 right-10 top-1/2 hidden h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent md:block" />
          {profile.interests.map((interest) => (
            <div
              className={`relative z-10 flex flex-col items-center gap-3 ${
                interest.featured ? "md:-translate-y-8" : ""
              }`}
              key={interest.label}
            >
              <div
                className={`flex items-center justify-center transition-all duration-300 ${
                  interest.featured
                    ? "h-20 w-20 rotate-45 border border-primary/50 bg-primary/5 hover:rotate-0"
                    : "h-16 w-16 rounded-full border-2 border-secondary/40 bg-surface-container hover:border-primary"
                }`}
              >
                <Symbol
                  className={`text-3xl text-primary ${
                    interest.featured ? "-rotate-45" : ""
                  }`}
                >
                  {interest.icon}
                </Symbol>
              </div>
              <div className="border border-outline-variant bg-surface-container-highest px-3 py-1 font-code text-xs text-on-surface-variant">
                [ {interest.label} ]
              </div>
            </div>
          ))}
        </div>
      </HudPanel>
    </SectionShell>
  );
}

function ConnectionStatus({
  node,
}: {
  node: (typeof contact.nodes)[number];
}) {
  const tone =
    node.tone === "success"
      ? "border-success/30 bg-success/10 text-success"
      : node.tone === "secondary"
        ? "border-secondary/30 bg-secondary/10 text-secondary"
        : "border-outline-variant/30 bg-surface-variant text-on-surface-variant";

  return (
    <div className="flex items-center justify-between border-b border-outline-variant/30 pb-3">
      <span className="font-code text-sm text-on-surface-variant">
        {node.label}
      </span>
      <span className={`border px-2 py-0.5 font-code text-xs ${tone}`}>
        {node.value}
      </span>
    </div>
  );
}

function ContactSection() {
  return (
    <SectionShell className="relative overflow-hidden pb-32" id="message">
      <img
        alt="Futuristic cybernetic map centered on India"
        className="pointer-events-none absolute inset-0 -z-10 h-full w-full object-cover opacity-10"
        src={contact.mapImage}
      />
      <div className="grid grid-cols-1 gap-gutter lg:grid-cols-[1fr_2fr]">
        <div className="flex flex-col gap-6">
          <HudPanel className="relative overflow-hidden p-panel">
            <div className="absolute left-0 top-0 h-1 w-full bg-primary/20">
              <div className="h-full w-1/3 bg-primary animate-pulse" />
            </div>
            <h3 className="mb-8 flex items-center gap-2 font-code text-xs font-bold text-primary">
              <Symbol className="text-base">radar</Symbol>
              HANDSHAKE PROTOCOL
            </h3>
            <div className="space-y-4">
              {contact.nodes.map((node) => (
                <ConnectionStatus key={node.label} node={node} />
              ))}
            </div>
          </HudPanel>

          <HudPanel className="p-panel">
            <h3 className="mb-5 flex items-center gap-2 font-code text-xs font-bold text-primary">
              <Symbol className="text-base">my_location</Symbol>
              ORIGIN_TRACE
            </h3>
            <div className="space-y-3 font-code text-sm text-on-surface-variant">
              {contact.origin.map((line, index) => (
                <p className={index === 2 ? "text-primary" : ""} key={line}>
                  {line}
                </p>
              ))}
            </div>
          </HudPanel>
        </div>

        <HudPanel className="glow-cyan p-panel">
          <div className="mb-8 flex flex-col gap-4 border-b border-primary/30 pb-6 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="flex items-center gap-3 font-headline text-4xl font-bold uppercase md:text-6xl">
              <Symbol className="text-primary">terminal</Symbol>
              {contact.title}
            </h2>
            <div className="font-code text-sm text-primary/70">
              SESSION_ID: <span className="text-primary">{contact.session}</span>
            </div>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {contact.fields.map((field) => (
                <label className="space-y-2" key={field.label}>
                  <span className="block font-code text-xs font-bold text-primary">
                    {field.label}
                  </span>
                  <span className="input-command relative block">
                    <input
                      className="w-full border border-outline-variant bg-surface py-3 pl-8 pr-4 font-code text-sm text-on-surface outline-none transition-colors placeholder:text-on-surface-variant/50 focus:border-primary focus:ring-1 focus:ring-primary"
                      placeholder={field.placeholder}
                      type={field.type}
                    />
                  </span>
                </label>
              ))}
            </div>

            <label className="space-y-2">
              <span className="block font-code text-xs font-bold text-primary">
                {contact.message.label}
              </span>
              <span className="input-command input-command-textarea relative block">
                <textarea
                  className="min-h-48 w-full resize-none border border-outline-variant bg-surface py-3 pl-8 pr-4 font-code text-sm text-on-surface outline-none transition-colors placeholder:text-on-surface-variant/50 focus:border-primary focus:ring-1 focus:ring-primary"
                  placeholder={contact.message.placeholder}
                />
              </span>
            </label>

            <div className="flex flex-col gap-4 pt-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="hidden font-code text-sm text-on-surface-variant animate-pulse sm:block">
                AWAITING_INPUT...
              </div>
              <button
                className="btn-primary glow-cyan-hover inline-flex min-h-14 items-center justify-center gap-2 px-8 py-4 font-code text-xs font-bold"
                type="button"
              >
                <Symbol className="text-lg">send</Symbol>
                {contact.submit}
              </button>
            </div>
          </form>
        </HudPanel>
      </div>
    </SectionShell>
  );
}

export function PortfolioPage() {
  return (
    <>
      <div className="fixed inset-0 -z-20 bg-background" />
      <div className="cyber-grid fixed inset-0 -z-10" />
      <div className="scanlines fixed inset-0 z-[60] opacity-20" />
      <TopNav />
      <main className="relative z-10 pb-16">
        <HeroSection />
        <ManifestSection />
        <BuildsSection />
        <StackSection />
        <LogsSection />
        <ProfileSection />
        <ContactSection />
      </main>
      <StatusFooter />
      <MobileCommandRail />
      <div className="sr-only">{siteMeta.description}</div>
    </>
  );
}
