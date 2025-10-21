import type { Metadata } from "next";
import "./globals.css";
import { Socials } from "@/components/Socials";

export const metadata: Metadata = {
  title: "Sarah Bethea — Front End / AI Engineer",
  description: "I build accessible, performant interfaces and ML-backed tools.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/* Use system fonts or add your own. If you prefer Geist:
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
      */}
      <body className="font-sans">
        <div className="mx-auto max-w-6xl px-6 md:px-10 lg:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 min-h-screen">
            {/* Left rail */}
            <aside className="lg:col-span-4 lg:sticky lg:top-0 lg:h-screen flex flex-col justify-between py-16">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">Sarah Bethea</h1>

                {/* Headshot */}
                <div className="flex justify-center">
                  <img
                    src="/me.png"
                    alt="Sarah Bethea headshot"
                    className="mt-6 w-48 h-48 rounded-full object-cover"
                  />
                </div>
                
                <p className="mt-6 text-sub max-w-md">
                  CS Post-Baccalaureate Student specializing in Python, AI systems, and cloud-based architecture for scalable solutions.
                </p>

                <nav className="mt-10 space-y-4 text-sub">
                  <a href="#about" className="block group">
                    <span className="mr-3 inline-block w-8 border-t border-line align-middle" />
                    <span className="tracking-widest text-xs group-hover:text-ink">ABOUT</span>
                  </a>
                  <a href="#background" className="block group">
                    <span className="mr-3 inline-block w-8 border-t border-line align-middle" />
                    <span className="tracking-widest text-xs group-hover:text-ink">BACKGROUND</span>
                  </a>
                  <a href="#projects" className="block group">
                    <span className="mr-3 inline-block w-8 border-t border-line align-middle" />
                    <span className="tracking-widest text-xs group-hover:text-ink">PROJECTS</span>
                  </a>
                  <a href="#contact" className="block group">
                    <span className="mr-3 inline-block w-8 border-t border-line align-middle" />
                    <span className="tracking-widest text-xs group-hover:text-ink">CONTACT</span>
                  </a>
                </nav>
              </div>

              {/* Socials */}
              <div className="mt-10">
                <Socials />
              </div>
            </aside>

            {/* Content column */}
            <main className="lg:col-span-8 py-16">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
