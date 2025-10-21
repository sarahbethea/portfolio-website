import { SiGithub, SiLinkedin } from "react-icons/si";
import { MdEmail } from "react-icons/md"; // filled email icon

type Item = {
  href: string;
  label: string;
  Icon: React.ComponentType<{ className?: string }>;
};

const items: Item[] = [
  { href: "https://github.com/sarahbethea", label: "GitHub", Icon: SiGithub },
  { href: "https://www.linkedin.com/in/sarah-bethea", label: "LinkedIn", Icon: SiLinkedin },
  { href: "mailto:sarahcbethea@gmail.com", label: "Email", Icon: MdEmail },
];

export function Socials() {
  return (
    <div className="flex items-center gap-3">
      {items.map(({ href, label, Icon }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noreferrer" : undefined}
          aria-label={label}
          title={label}
          className="inline-flex h-9 w-9 items-center justify-center rounded-full
           border border-[--color-pill-border]
           bg-[--color-pill]/60 hover:border-[--color-ink]/40 hover:bg-[--color-pill]/80
           outline-none focus:outline-none focus-visible:outline-none focus-visible:ring-0 transition"

        >
          {/* filled brand icons */}
          <Icon className="h-5 w-5 text-ink" />
          <span className="sr-only">{label}</span>
        </a>
      ))}
    </div>
  );
}
