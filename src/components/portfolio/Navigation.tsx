import { navItems, siteMeta } from "@/constant/data";
import { Symbol } from "./Symbol";

export function TopNav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-primary/25 bg-surface/65 shadow-[0_0_15px_rgba(34,211,238,0.2)] backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-[1600px] items-center justify-between px-margin-mobile md:px-margin-desktop">
        <a
          className="font-headline text-2xl font-bold tracking-normal text-primary transition-colors hover:text-primary-container"
          href="#home"
        >
          {siteMeta.name}
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <a
              className="border-b-2 border-transparent px-2 py-2 font-code text-xs font-bold text-on-surface-variant transition-all duration-300 hover:border-primary hover:bg-primary/10 hover:text-primary"
              href={item.href}
              key={item.label}
            >
              {item.label}
            </a>
          ))}
          <a
            aria-label="Open terminal section"
            className="text-on-surface-variant transition-colors hover:text-primary"
            href="#message"
          >
            <Symbol>terminal</Symbol>
          </a>
        </nav>

        <a
          aria-label="Open mobile command menu"
          className="text-primary lg:hidden"
          href="#message"
        >
          <Symbol>menu</Symbol>
        </a>
      </div>
    </header>
  );
}

export function MobileCommandRail() {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-50 grid h-16 grid-cols-6 border-t border-secondary/30 bg-surface-container-lowest/90 backdrop-blur-md lg:hidden">
      {navItems.map((item) => (
        <a
          aria-label={item.label}
          className="flex items-center justify-center text-on-surface-variant transition-colors hover:bg-primary/10 hover:text-primary"
          href={item.href}
          key={item.label}
        >
          <Symbol
            className={
              item.label === "MESSAGE"
                ? "bg-primary/10 p-2 text-primary"
                : undefined
            }
          >
            {item.icon}
          </Symbol>
        </a>
      ))}
    </nav>
  );
}

export function StatusFooter() {
  return (
    <footer className="fixed inset-x-0 bottom-0 z-40 hidden h-8 items-center justify-between border-t border-secondary/30 bg-surface-container-lowest/80 px-margin-desktop font-code text-xs text-secondary backdrop-blur-md lg:flex">
      <div>{siteMeta.footerLeft}</div>
      <div className="flex gap-6 text-on-surface-variant">
        {siteMeta.footerRight.map((item, index) => (
          <span
            className={index === 0 ? "font-bold text-secondary" : undefined}
            key={item}
          >
            {item}
          </span>
        ))}
      </div>
    </footer>
  );
}
