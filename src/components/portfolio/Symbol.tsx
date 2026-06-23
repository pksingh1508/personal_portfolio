type SymbolProps = {
  children: string;
  className?: string;
};

const iconFallbacks: Record<string, string> = {
  account_tree: "[]",
  cloud: "CL",
  cloud_done: "OK",
  cloud_sync: "CS",
  code: "</>",
  code_blocks: "{}",
  data_object: "{}",
  database: "DB",
  deployed_code: "PKG",
  devices: "DV",
  dns: "DNS",
  folder: "DIR",
  folder_open: "DIR",
  fingerprint: "ID",
  history: "LOG",
  home: "H",
  hub: "NET",
  javascript: "JS",
  launch: "UP",
  mail: "@",
  menu: "==",
  my_location: "GPS",
  person: "ID",
  phone_iphone: "MB",
  php: "PHP",
  precision_manufacturing: "AI",
  public: "WWW",
  radar: "RAD",
  rocket_launch: "GO",
  router: "RT",
  search: "SR",
  send: ">",
  smartphone: "MB",
  storage: "DSK",
  table: "SQL",
  terminal: ">_",
};

export function Symbol({ children, className = "" }: SymbolProps) {
  return (
    <span
      aria-hidden="true"
      className={`inline-flex min-w-[1.5em] items-center justify-center font-code text-[0.8em] font-bold leading-none ${className}`}
      title={children}
    >
      {iconFallbacks[children] ?? children.slice(0, 3).toUpperCase()}
    </span>
  );
}
