type BadgeProps = {
  children: React.ReactNode;
  color?: keyof typeof PALETTE | `#${string}`; // accepts hex too
};

const PALETTE = {
  python:   "#3776AB",
  fastapi:  "#009688",
  pytorch:  "#EE4C2C",
  docker:   "#0DB7ED",
  aws:      "#FF9900",
  react:    "#61DAFB",
  uxp:      "#FF61F6",
  java:     "#E76F00",
  js:       "#F7DF1E",
  typescript: "#3178C6",
  plotly:   "#3F4F75",
  huggingface: "#FFCD00",
  pandas:   "#5C3EE8",
  default:  "#64FFDA", // your accent
} as const;

export default function Badge({ children, color = "default" }: BadgeProps) {
  const hex = (PALETTE as Record<string, string>)[color] ?? color; // name → hex OR use given hex

  return (
    <span
      style={{ ["--badge-color" as any]: hex } as React.CSSProperties}
      className="badge inline-flex items-center rounded-full px-3 py-1 text-xs font-medium select-none"
    >
      {children}
    </span>
  );
}
