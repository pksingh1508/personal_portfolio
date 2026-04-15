import {
  headerIcons,
  sidebarItems,
  siteMeta,
  topNavItems,
} from "@/data";
import { Symbol } from "./Symbol";

export function TopNav() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 flex h-14 w-full items-center justify-between bg-surface px-6 py-3 font-headline text-xs uppercase text-primary">
      <a
        href="#hero"
        className="text-lg font-bold text-primary transition-colors hover:text-primary-container"
      >
        {siteMeta.productName}
      </a>

      <nav className="hidden items-center gap-8 md:flex">
        {topNavItems.map((item) => (
          <a
            key={item.label}
            className={
              item.active
                ? "border-b-2 border-primary pb-1 text-primary transition-colors duration-150 hover:bg-surface-variant hover:text-primary"
                : "text-secondary opacity-60 transition-colors duration-150 hover:bg-surface-variant hover:text-primary"
            }
            href={item.href}
          >
            {item.label}
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-4">
        {headerIcons.map((icon) => (
          <Symbol
            key={icon}
            className="cursor-pointer transition-colors hover:text-primary"
          >
            {icon}
          </Symbol>
        ))}
      </div>
    </header>
  );
}

export function SideNav() {
  return (
    <aside className="fixed left-0 top-0 z-40 hidden h-screen w-64 flex-col bg-surface pt-20 lg:flex">
      <div className="mb-10 px-6">
        <div className="font-headline text-xl font-black text-primary">
          {siteMeta.logName}
        </div>
        <div className="mt-1 font-headline text-[10px] font-bold uppercase text-secondary opacity-50">
          {siteMeta.status}
        </div>
      </div>

      <nav className="flex-1">
        <div className="flex flex-col">
          {sidebarItems.map((item) => (
            <a
              key={item.label}
              className={
                item.active
                  ? "flex items-center gap-4 bg-primary-container p-4 font-headline text-[10px] font-bold uppercase text-on-primary"
                  : "flex items-center gap-4 p-4 font-headline text-[10px] uppercase text-secondary opacity-50 transition-all hover:bg-surface-variant hover:text-primary"
              }
              href={item.href}
            >
              <Symbol>{item.icon}</Symbol>
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </aside>
  );
}
