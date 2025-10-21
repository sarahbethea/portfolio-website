import Badge from "@/components/Badge";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { MdEmail } from "react-icons/md";

export default function Page() {
  return (
    <div className="space-y-24">
      {/* ABOUT */}
      <section id="about" className="scroll-mt-24 space-y-6 leading-7">
        <h2 className="text-xl font-semibold">About</h2>
        <p className="text-sub">
      I’m a computer science student at the <span className="text-ink">University of Montana</span>, where I’m building a strong foundation in software engineering and AI systems. Before beginning my degree, I completed a full-stack development bootcamp that introduced me to the fundamentals of creating APIs and designing front-end interfaces. 
        </p>
        <p className="text-sub">
      Since then, I’ve gained experience working with <span className="text-ink">Python, Java, and JavaScript</span> and I enjoy applying these languages to projects involving open-source AI models, data analysis, and automation. My recent work explores how to develop and implement AI-powered backends to create useful, innovative, and practical tools. I’m currently expanding my skills through a <span className="text-ink">machine learning and computer vision course</span> with OpenCV.
        </p>
        <p className="text-sub">
      I am also deeply interested in <span className="text-ink">cloud architecture and DevOps</span>. I use <span className="text-ink">Docker</span> to containerize applications - such as my TalkTrack demo - and am actively learning <span className="text-ink">Kubernetes, AWS, and cloud infrastructure design</span> through self-study. My next goal is to earn the <span className="text-ink">AWS Certified Solutions Architect</span> credential and continue developing a skill set that bridges AI development with scalable, production-ready systems.
        </p>
      </section>



      <div className="hr" />

      {/* BACKGROUND */}
      <section id="background" className="scroll-mt-24">
        <h2 className="text-xl font-semibold">Background</h2>

        <p className="mt-4 text-sub leading-7">
          I’m currently completing a <span className="text-ink">Post-Baccalaureate in Computer Science</span> at the
          University of Montana, maintaining a 4.0 GPA while studying algorithms, data structures, software engineering,
          and systems design. My coursework has deepened my understanding of computational problem-solving and clean,
          maintainable code architecture.
        </p>

        <p className="mt-4 text-sub leading-7">
          Prior to the program, I attended <span className="text-ink">Montana Code School’s</span> full-stack bootcamp,
          where I learned modern web development with JavaScript, React, Node.js, and RESTful APIs. Since then, I’ve
          continued expanding into <span className="text-ink">Python, AI/ML, and cloud technologies</span> through
          self-directed study and hands-on projects.
        </p>

        <p className="mt-4 text-sub leading-7">
          Professionally, I’ve worked as a <span className="text-ink">Freelance Developer</span> since 2024 — building
          production-ready applications and collaborating with creative agencies on client projects. Highlights include
          a Poker Trainer App with real-time hand analysis in React, and a CustomTkinter GUI controlling Arduino-based
          water-sampling hardware.
        </p>
      </section>

      <div className="hr" />

      {/* PROJECTS */}
      <section id="projects" className="scroll-mt-24">
        <h2 className="text-xl font-semibold">Projects</h2>

        <div className="mt-6 space-y-10">
          <article>
            <div className="flex items-center gap-3">
              <h3 className="text-lg font-medium">TalkTrack API — AI Interview Analysis</h3>
              <a className="text-sub text-sm" href="https://github.com/sarahbethea/talktrack_api" target="_blank">GitHub →</a>
              <a className="text-sub text-sm" href="https://your-demo-url" target="_blank">Live Demo →</a>
            </div>
            <p className="mt-2 text-sub leading-7">
              FastAPI backend that transcribes audio, performs speaker diarization, extracts key themes, and returns structured segment data for the TalkTrack plugin. Built with FastAPI, PyAnnote, Whisper, and Hugging Face Transformers. 
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              <Badge color="python">Python</Badge>
              <Badge color="fastapi">FastAPI</Badge>
              <Badge color="huggingface">Hugging Face Transformers</Badge>
              <Badge color="pytorch">Pytorch</Badge>
              <Badge color="docker">Docker</Badge>
            </div>
          </article>

          <div className="mt-6 space-y-10">
          <article>
            <div className="flex items-center gap-3">
              <h3 className="text-lg font-medium">TalkTrack - Premiere Pro UXP Plugin</h3>
              <a className="text-sub text-sm" href="https://github.com/sarahbethea/talktrack_plugin" target="_blank">GitHub →</a>
            </div>
            <p className="mt-2 text-sub leading-7">
              AI-powered Adobe Premiere Pro plugin that automatically cuts, labels, and annotates interview footage using speaker diarization and topic analysis. Built with React (UXP) and integrated with a FastAPI backend.  
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              <Badge color="react">React</Badge>
              <Badge color="uxp">Adobe UXP</Badge>
              <Badge color="js">JavaScript</Badge>
            </div>
          </article>

          <article>
            <div className="flex items-center gap-3">
              <h3 className="text-lg font-medium">Rubik’s Cube</h3>
              <a className="text-sub text-sm" href="https://github.com/sarahbethea/cube" target="_blank">GitHub →</a>
            </div>
            <p className="mt-2 text-sub leading-7">
              Minimal Java CLI for 3x3 cube moves with colorized printing, history simplification, and solve-by-inversion. Demonstrates object-oriented programming and manipulating multidimensional arrays.
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              <Badge color="java">Java</Badge>
              <Badge color="default">OOP</Badge>
            </div>
          </article>

          <article>
            <div className="flex items-center gap-3">
              <h3 className="text-lg font-medium">NCAA Basketball Predictor</h3>
              <a className="text-sub text-sm" href="https://github.com/sarahbethea/ncaa-basketball-predictor" target="_blank">GitHub →</a>
            </div>
            <p className="mt-2 text-sub leading-7">
              Collection of scrapers and visualizations to predict game outcomes based on statistical data from Sports Reference.
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              <Badge color="python">Python</Badge>
              <Badge color="pandas">Pandas</Badge>
              <Badge color="plotly">Plotly</Badge>
            </div>
          </article>
          </div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-24">
        <h2 className="text-xl font-semibold text-ink">Contact</h2>

        <ul className="mt-6 space-y-3">
          {/* Email */}
          <li className="flex items-center gap-4">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full 
                             border border-[--color-pill-border] bg-[--color-pill]/60">
              <MdEmail className="h-5 w-5 text-ink" />
            </span>
            <div className="flex items-center gap-3">
              <a href="mailto:sarahcbethea@gmail.com" className="text-ink underline decoration-transparent underline-offset-4 hover:decoration-ink/50">
                sarahcbethea@gmail.com
              </a>
            </div>
          </li>

          {/* LinkedIn */}
          <li className="flex items-center gap-4">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full 
                             border border-[--color-pill-border] bg-[--color-pill]/60">
              <SiLinkedin className="h-5 w-5 text-ink" />
            </span>
            <a
              href="https://www.linkedin.com/in/sarah-bethea"
              target="_blank"
              rel="noreferrer"
              className="text-ink underline decoration-transparent underline-offset-4 hover:decoration-ink/50"
            >
              linkedin.com/in/sarah-bethea
            </a>
          </li>

          {/* GitHub */}
          <li className="flex items-center gap-4">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full 
                             border border-[--color-pill-border] bg-[--color-pill]/60">
              <SiGithub className="h-5 w-5 text-ink" />
            </span>
            <a
              href="https://github.com/sarahbethea"
              target="_blank"
              rel="noreferrer"
              className="text-ink underline decoration-transparent underline-offset-4 hover:decoration-ink/50"
            >
              github.com/sarahbethea
            </a>
          </li>
        </ul>
      </section>
    </div>

  );
}
