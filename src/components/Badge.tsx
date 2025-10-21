import type { CSSProperties, ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
  color?: keyof typeof PALETTE | `#${string}`; // accepts palette key or a hex
};

const PALETTE = {
  python: "#3776AB",
  fastapi: "#009688",
  pytorch: "#EE4C2C",
  docker: "#0DB7ED",
  aws: "#FF9900",
  react: "#61DAFB",
  uxp: "#FF61F6",
  java: "#E76F00",
  js: "#F7DF1E",
  typescript: "#3178C6",
  plotly: "#3F4F75",
  huggingface: "#FFCD00",
  pandas: "#5C3EE8",
  default: "#64FFDA",
} as const;

// Type for style prop that includes our CSS var
type CSSVarStyle = CSSProperties & { ["--badge-color"]?: string };

export default function Badge({ children, color = "default" }: BadgeProps) {
  const hex =
    (PALETTE as Record<string, string>)[String(color)] ?? (color as string);

  const style: CSSVarStyle = { ["--badge-color"]: hex };

  return (
    <span
      style={style}
      className="badge inline-flex items-center rounded-full px-3 py-1 text-xs font-medium select-none"
    >
      {children}
    </span>
  );
}
