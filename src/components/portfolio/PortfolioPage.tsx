"use client";

import { motion, type Variants } from "motion/react";
import { builds, contact, hero, identity, labs, stack, timeline } from "@/data";
import { SideNav, TopNav } from "./Navigation";
import { Symbol } from "./Symbol";

const sectionReveal: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.2, 0.8, 0.2, 1] },
  },
};

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        hidden: sectionReveal.hidden,
        visible: {
          ...sectionReveal.visible,
          transition: { duration: 0.7, delay, ease: [0.2, 0.8, 0.2, 1] },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

function HeroTitle() {
  let charIndex = 0;

  return (
    <h1 className="mb-12 font-headline text-7xl font-bold leading-[0.8] md:text-[10rem]">
      {hero.titleLines.map((line) => (
        <span className="block overflow-hidden" key={line}>
          {line.split("").map((char) => {
            charIndex += 1;
            return (
              <span
                className="char-reveal"
                key={`${line}-${charIndex}`}
                style={{ animationDelay: `${0.05 + charIndex * 0.05}s` }}
              >
                {char}
              </span>
            );
          })}
        </span>
      ))}
    </h1>
  );
}

function HeroSection() {
  return (
    <section
      className="relative flex min-h-230.25 items-center overflow-hidden px-10 md:px-20"
      id="hero"
    >
      <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 select-none opacity-10">
        <div className="vertical-text font-headline text-8xl font-black leading-none text-primary md:text-[10rem] xl:text-[12rem]">
          {hero.sideLabel}
        </div>
      </div>

      <div className="relative z-10 max-w-5xl">
        <div className="mb-6 flex items-center gap-3">
          <span className="inline-block h-3 w-3 animate-pulse bg-primary" />
          <span className="font-headline text-xs font-bold uppercase text-primary">
            {hero.status}
          </span>
        </div>

        <HeroTitle />

        <div className="flex flex-wrap items-end gap-6">
          <div className="w-full max-w-md border-l-4 border-primary bg-surface-container p-6 shadow-[0_0_20px_rgba(153,247,255,0.05)]">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex gap-2">
                <div className="h-2 w-2 bg-error" />
                <div className="h-2 w-2 bg-primary" />
                <div className="h-2 w-2 bg-secondary-container" />
              </div>
              <span className="font-headline text-[10px] opacity-40">
                {hero.terminalName}
              </span>
            </div>
            <code className="block font-body text-sm leading-relaxed text-secondary">
              {hero.terminalLines.map((line) => (
                <span key={line}>
                  <span className="text-primary">&gt;</span> {line}
                  <br />
                </span>
              ))}
            </code>
          </div>

          <motion.button
            className="bg-primary-container px-10 py-5 font-headline text-sm font-bold uppercase text-on-primary transition-all duration-300 hover:bg-primary hover:brightness-110 hover:shadow-[0_0_20px_rgba(0,242,255,0.4)]"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
          >
            {hero.cta}
          </motion.button>
        </div>
      </div>

      <motion.div
        className="hero-orb absolute right-20 top-20 hidden h-96 w-96 xl:block"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="glitch-img-container glitch-overlay">
          <img
            className="h-full w-full object-contain opacity-40 mix-blend-screen"
            src={hero.visual.src}
            alt={hero.visual.alt}
          />
          <div
            className="glitch-effect"
            style={{ backgroundImage: `url("${hero.visual.src}")` }}
          />
        </div>
      </motion.div>
    </section>
  );
}

function AboutSection() {
  return (
    <section
      className="relative bg-surface-container px-10 py-32 md:px-20"
      id="about"
    >
      <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
        <Reveal className="md:col-span-4">
          <h2 className="mb-8 flex items-center gap-4 font-headline text-4xl font-bold">
            <span className="text-primary">{identity.index}</span>
            {identity.heading}
          </h2>
          <div className="bg-surface p-8">
            <div className="mb-6 font-headline text-[10px] uppercase text-primary">
              {identity.fileName}
            </div>
            <ul className="space-y-4 font-body text-sm">
              {identity.facts.map(([label, value]) => (
                <li
                  className="flex justify-between border-b border-outline-variant pb-2"
                  key={label}
                >
                  <span className="opacity-50">{label}</span>
                  <span>{value}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal
          className="flex flex-col justify-center md:col-span-8"
          delay={0.12}
        >
          <p className="font-body text-2xl font-light leading-tight text-secondary md:text-4xl">
            {identity.statementBefore}{" "}
            <span className="font-bold text-on-background underline decoration-primary decoration-4 underline-offset-8">
              {identity.statementHighlight}
            </span>{" "}
            {identity.statementAfter}
          </p>
          <div className="mt-12 flex items-start gap-12">
            {identity.stats.map((stat) => (
              <div className="flex flex-col" key={stat.label}>
                <span className="font-headline text-5xl font-bold text-primary">
                  {stat.value}
                </span>
                <span className="mt-2 font-headline text-[10px] uppercase opacity-40">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function BuildCard({
  build,
  index,
}: {
  build: (typeof builds)[number];
  index: number;
}) {
  return (
    <motion.article
      className={`group relative flex aspect-square cursor-pointer flex-col overflow-hidden border border-outline-variant/10 ${
        build.offset
          ? "bg-surface-container-high md:translate-y-12"
          : "bg-surface-container"
      } transition-all duration-500 hover:bg-surface-variant/50 hover:shadow-[0_0_30px_rgba(153,247,255,0.1)] hover:backdrop-blur-sm`}
      initial={{ opacity: 0, y: 42 }}
      whileInView={{ opacity: 1, y: build.offset ? 48 : 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, delay: index * 0.08 }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="relative z-10 flex h-full flex-col p-8">
        <div className="mb-6 flex items-start justify-between">
          <div className="flex flex-col">
            <span className="font-headline text-3xl font-bold text-primary opacity-20 transition-opacity group-hover:opacity-100">
              {build.id}
            </span>
            <div className="mt-2 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-status-pulse" />
              <span className="font-headline text-[8px] font-bold text-green-500">
                {build.status}
              </span>
            </div>
          </div>
          <Symbol className="text-outline transition-colors group-hover:text-primary">
            {build.icon}
          </Symbol>
        </div>

        <h3 className="mb-4 font-headline text-2xl font-bold transition-transform group-hover:translate-x-1">
          {build.title}
        </h3>
        <p className="mb-8 font-body text-sm text-secondary opacity-60">
          {build.description}
        </p>

        <div className="mt-auto flex translate-y-4 flex-col gap-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <button className="w-full bg-primary py-3 font-headline text-[10px] font-bold uppercase text-on-primary transition-all hover:brightness-110 active:scale-95">
            VIEW_BUILD
          </button>
          <button className="w-full border border-outline-variant py-3 font-headline text-[10px] font-bold uppercase transition-all hover:bg-white/5 active:scale-95">
            INSPECT_STACK
          </button>
        </div>
      </div>

      <div className="glitch-img-container glitch-overlay absolute inset-0 opacity-10 grayscale transition-all duration-1000 group-hover:scale-110 group-hover:opacity-20">
        <img
          className="h-full w-full object-cover"
          src={build.image}
          alt={build.imageAlt}
        />
        <div
          className="glitch-effect"
          style={{ backgroundImage: `url("${build.image}")` }}
        />
      </div>
    </motion.article>
  );
}

function BuildsSection() {
  return (
    <section className="px-10 py-32 md:px-20" id="builds">
      <div className="mb-16 flex items-end justify-between">
        <div>
          <span className="mb-4 block font-headline text-xs uppercase text-primary">
            output_stream
          </span>
          <h2 className="font-headline text-6xl font-bold">SHIPPED_BUILDS</h2>
        </div>
        <div className="hidden text-right font-headline text-[10px] opacity-30 md:block">
          SCANNING REPOSITORIES...
          <br />
          FILTER: [PRODUCTION_ONLY]
        </div>
      </div>

      <div className="grid grid-cols-1 gap-0 md:grid-cols-3">
        {builds.map((build, index) => (
          <BuildCard build={build} index={index} key={build.id} />
        ))}
      </div>
    </section>
  );
}

function StackSection() {
  return (
    <section
      className="bg-surface-container-lowest px-10 py-32 md:px-20"
      id="stack"
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-start gap-12 md:flex-row">
          <Reveal className="md:w-1/3">
            <h2 className="mb-6 font-headline text-5xl font-bold">
              {stack.title}
            </h2>
            <p className="max-w-sm font-body text-secondary opacity-60">
              {stack.description}
            </p>
            <div className="mt-10 border-l-2 border-primary bg-surface-container p-6">
              <span className="mb-2 block font-headline text-[10px] text-primary">
                {stack.label}
              </span>
              <span className="font-headline text-lg font-bold">
                {stack.focus}
              </span>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 gap-4 md:w-2/3 md:grid-cols-4">
            {stack.tools.map((tool, index) => (
              <motion.div
                className="group flex cursor-pointer flex-col items-center border-b border-outline-variant bg-surface-container p-6 text-center transition-all duration-300 ease-out hover:-translate-y-2 hover:bg-surface-variant hover:shadow-[0_10px_30px_-10px_rgba(0,242,255,0.2)]"
                key={tool.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.04 }}
                whileHover={{ scale: 1.05 }}
              >
                <Symbol className="mb-4 text-4xl text-primary opacity-50 transition-all duration-300 group-hover:text-[#00f2ff] group-hover:opacity-100 group-hover:drop-shadow-[0_0_8px_rgba(0,242,255,0.8)]">
                  {tool.icon}
                </Symbol>
                <span className="font-headline text-sm font-bold uppercase">
                  {tool.name}
                </span>
                <span className="mt-1 font-headline text-[8px] opacity-30 transition-opacity duration-300 group-hover:opacity-100">
                  {tool.tag}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineSection() {
  return (
    <section
      className="relative overflow-hidden px-10 py-32 md:px-20"
      id="logs"
    >
      <motion.div
        className="timeline-line-grow absolute bottom-0 left-1/2 top-0 hidden w-px bg-primary opacity-20 md:block"
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1] }}
      />
      <h2 className="mb-24 text-center font-headline text-5xl font-bold">
        SYSTEM_TIMELINE
      </h2>

      <div className="relative z-10 mx-auto max-w-4xl space-y-24">
        {timeline.map((entry, index) => (
          <motion.div
            className={`group flex flex-col items-start gap-8 md:items-center ${
              entry.reverse ? "md:flex-row-reverse" : "md:flex-row"
            }`}
            key={entry.log}
            initial={{ opacity: 0, x: entry.reverse ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.8,
              delay: index * 0.08,
              ease: [0.2, 0.8, 0.2, 1],
            }}
          >
            <div
              className={`md:w-1/2 ${entry.reverse ? "md:text-left" : "md:text-right"}`}
            >
              <span className="font-headline text-xs font-bold text-primary">
                {entry.log}
              </span>
              <h3 className="mt-2 font-headline text-2xl font-bold">
                {entry.title}
              </h3>
              <p className="mt-4 font-body text-sm text-secondary opacity-60">
                {entry.description}
              </p>
            </div>

            <div
              className={`icon-glow z-10 hidden h-10 w-10 shrink-0 items-center justify-center transition-all duration-500 md:flex ${
                entry.active ? "icon-active bg-primary" : "bg-outline-variant"
              }`}
            >
              <Symbol
                className={entry.active ? "text-on-primary" : "text-surface"}
              >
                {entry.icon}
              </Symbol>
            </div>

            <div
              className={`flex gap-4 md:w-1/2 ${entry.reverse ? "justify-end" : ""}`}
            >
              {entry.tags.map((tag) => (
                <div
                  className="bg-surface-container-highest px-3 py-1 font-headline text-[10px] text-primary"
                  key={tag}
                >
                  {tag}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function LabSection() {
  return (
    <section className="relative px-10 py-32 md:px-20" id="lab">
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -left-20 -top-20 h-150 w-150 bg-primary/5 blur-[120px]" />
      </div>

      <div className="relative z-10">
        <div className="mb-16 flex items-center gap-6">
          <h2 className="font-headline text-5xl font-bold">NOW_COMPILING</h2>
          <div className="h-0.5 flex-1 bg-outline-variant opacity-20" />
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {labs.map((lab, index) => (
            <motion.article
              className="glass-panel group relative cursor-crosshair border border-white/5 p-10"
              key={lab.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
            >
              <div className="mb-10 flex items-center justify-between">
                <span className="bg-primary px-3 py-1 font-headline text-[10px] font-bold uppercase text-on-primary">
                  {lab.kind}
                </span>
                <Symbol className="opacity-30">{lab.icon}</Symbol>
              </div>
              <h3 className="mb-4 font-headline text-3xl font-bold">
                {lab.title}
              </h3>
              <p className="mb-8 font-body text-secondary opacity-70">
                {lab.description}
              </p>
              <div className="flex items-center gap-4">
                <div
                  className={`h-2 w-2 rounded-full ${
                    lab.pulse ? "animate-ping bg-primary" : "bg-green-500"
                  }`}
                />
                <span className="font-headline text-[10px] uppercase opacity-40">
                  {lab.status}
                </span>
              </div>
              <div className="absolute right-0 top-0 p-4 opacity-0 transition-opacity group-hover:opacity-100">
                <Symbol className="text-primary">arrow_outward</Symbol>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <section
      className="relative overflow-hidden border-t border-outline-variant/10 px-10 py-32 md:px-20"
      id="contact"
    >
      <div className="corner-accent pointer-events-none absolute left-10 top-10 z-0 h-40 w-40 border border-primary/10 opacity-50" />
      <div className="corner-accent-br pointer-events-none absolute bottom-10 right-10 z-0 h-40 w-40 border border-primary/10 opacity-50" />

      <Reveal className="relative z-10 mx-auto max-w-6xl">
        <div className="mb-24 text-center">
          <span className="mb-8 block font-headline text-xs font-bold uppercase text-primary">
            {contact.eyebrow}
          </span>
          <h2 className="font-headline text-6xl font-bold md:text-8xl">
            {contact.title}
          </h2>
        </div>

        <div className="relative grid grid-cols-1 gap-12 overflow-hidden border border-outline-variant/20 bg-surface-container p-8 md:p-12 lg:grid-cols-12">
          <div className="hidden border-r border-outline-variant/20 pr-8 lg:col-span-4 lg:block">
            <div className="space-y-6">
              <div className="flex flex-col gap-1">
                <span className="font-headline text-[10px] uppercase text-primary opacity-50">
                  {contact.connectionTitle}
                </span>
                <div className="h-px w-full bg-primary/20" />
              </div>

              <ul className="space-y-4 font-body text-[11px] text-secondary/70">
                {contact.connectionParameters.map((parameter) => (
                  <li
                    className="flex items-center justify-between"
                    key={parameter.label}
                  >
                    <span className="font-bold">{parameter.label}</span>
                    <span
                      className={
                        parameter.status
                          ? "flex items-center gap-1 text-green-500"
                          : "text-primary"
                      }
                    >
                      {parameter.value}
                      {parameter.status ? (
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-500" />
                      ) : null}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-12 border border-white/5 bg-black/40 p-4">
                <code className="block text-[9px] leading-tight text-primary/40">
                  {contact.terminalStatus.map((line) => (
                    <span key={line}>
                      &gt; {line}
                      <br />
                    </span>
                  ))}
                </code>
              </div>
            </div>
          </div>

          <form className="space-y-12 lg:col-span-8" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {contact.fields.map((field) => (
                <div className="group" key={field.id}>
                  <label
                    className="mb-4 flex items-center gap-2 font-headline text-[10px] uppercase text-primary"
                    htmlFor={field.id}
                  >
                    <Symbol className="text-xs">{field.icon}</Symbol>
                    {field.label}
                  </label>
                  <div className="relative flex items-center">
                    <span className="absolute left-0 font-headline text-2xl text-primary group-focus-within:animate-pulse">
                      &gt;
                    </span>
                    <input
                      className="w-full border-0 border-b-2 border-outline-variant/40 bg-transparent py-4 pl-8 font-headline text-2xl text-white transition-all placeholder:opacity-10 focus:border-primary focus:outline-none focus:ring-0"
                      id={field.id}
                      placeholder={field.placeholder}
                      type={field.type}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="group">
              <label
                className="mb-4 flex items-center gap-2 font-headline text-[10px] uppercase text-primary"
                htmlFor={contact.message.id}
              >
                <Symbol className="text-xs">{contact.message.icon}</Symbol>
                {contact.message.label}
              </label>
              <div className="relative flex items-start">
                <span className="absolute left-0 top-4 font-headline text-2xl text-primary group-focus-within:animate-pulse">
                  &gt;
                </span>
                <textarea
                  className="w-full resize-none border-0 border-b-2 border-outline-variant/40 bg-transparent py-4 pl-8 font-headline text-2xl text-white transition-all placeholder:opacity-10 focus:border-primary focus:outline-none focus:ring-0"
                  id={contact.message.id}
                  placeholder={contact.message.placeholder}
                  rows={3}
                />
              </div>
            </div>

            <div className="flex justify-end pt-8">
              <motion.button
                className="group relative overflow-hidden border-2 border-primary bg-transparent px-12 py-6 transition-all duration-300 hover:border-primary hover:bg-primary/10 hover:shadow-[0_0_30px_rgba(0,242,255,0.3)]"
                type="submit"
                whileTap={{ scale: 0.95 }}
              >
                <div className="animate-scan pointer-events-none absolute inset-0 h-1 w-full bg-primary/20" />
                <div className="absolute inset-0 h-full w-full bg-primary/5 opacity-0 transition-opacity group-hover:opacity-100" />
                <span className="relative z-10 flex items-center gap-4 font-headline text-lg font-bold uppercase text-primary transition-colors group-hover:text-white">
                  {contact.submitLabel}
                  <Symbol className="text-xl">send</Symbol>
                </span>
                <div className="absolute -right-1 -top-1 h-2 w-2 bg-primary opacity-0 transition-all group-hover:opacity-100" />
                <div className="absolute -bottom-1 -left-1 h-2 w-2 bg-primary opacity-0 transition-all group-hover:opacity-100" />
              </motion.button>
            </div>
          </form>
        </div>
      </Reveal>
    </section>
  );
}

function Footer() {
  return (
    <footer className="flex flex-col items-center justify-between gap-8 border-t border-outline-variant/10 px-10 py-12 md:flex-row md:px-20">
      <div className="flex flex-col gap-2">
        <div className="font-headline text-sm font-bold text-primary">
          {contact.footer.copyright}
        </div>
        <div className="font-headline text-[8px] uppercase opacity-30">
          {contact.footer.build}
        </div>
      </div>

      <div className="flex gap-12">
        {contact.footer.links.map((link) => (
          <a
            className="font-headline text-[10px] font-bold uppercase transition-colors hover:text-primary"
            href="#"
            key={link}
          >
            {link}
          </a>
        ))}
      </div>

      <div className="flex items-center gap-4 bg-surface-container px-4 py-2">
        <Symbol className="text-sm text-primary">schedule</Symbol>
        <span className="font-headline text-[10px] font-bold">
          {contact.footer.timezone}
        </span>
        <div className="mx-2 h-3 w-px bg-outline-variant opacity-30" />
        <Symbol className="text-sm text-green-500">check_circle</Symbol>
        <span className="font-headline text-[10px] font-bold">
          {contact.footer.status}
        </span>
      </div>
    </footer>
  );
}

function FloatingScrollHint() {
  return (
    <div className="vertical-text pointer-events-none fixed bottom-32 right-6 z-50 hidden md:block">
      <span className="font-headline text-[10px] uppercase text-outline">
        {contact.scrollHint}
      </span>
    </div>
  );
}

export function PortfolioPage() {
  return (
    <>
      <TopNav />
      <SideNav />
      <main className="relative min-h-screen overflow-x-hidden pt-14 lg:ml-64">
        <HeroSection />
        <AboutSection />
        <BuildsSection />
        <StackSection />
        <TimelineSection />
        <LabSection />
        <ContactSection />
        <Footer />
      </main>
      <FloatingScrollHint />
    </>
  );
}
