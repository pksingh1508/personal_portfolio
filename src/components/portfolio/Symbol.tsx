type SymbolProps = {
  children: string;
  className?: string;
};

export function Symbol({ children, className = "" }: SymbolProps) {
  return (
    <span className={`material-symbols-outlined ${className}`}>{children}</span>
  );
}
