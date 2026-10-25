
"use client";

import { useState } from "react";

const capabilities = [
  {
    icon: "🔎",
    title: "Scientific Discovery",
    description:
      "Explore scientific literature, identify relevant publications, and uncover research that matters to your question.",
    tag: "Literature intelligence",
  },
  {
    icon: "🧠",
    title: "Multi-Agent Analysis",
    description:
      "Coordinate specialized AI agents to evaluate study designs, compare findings, and identify methodological limitations.",
    tag: "Coordinated intelligence",
  },
  {
    icon: "✓",
    title: "Citation Verification",
    description:
      "Connect research claims to their sources and flag citations or statements that need further verification.",
    tag: "Traceable evidence",
  },
  {
    icon: "📊",
    title: "Evidence Synthesis",
    description:
      "Bring findings together across studies while distinguishing consistent results, conflicting evidence, and uncertainty.",
    tag: "Structured synthesis",
  },
  {
    icon: "⚕",
    title: "Pharma Research Support",
    description:
      "Organize scientific evidence for pharmaceutical research, drug development, and evidence review workflows.",
    tag: "Pharmaceutical research",
  },
  {
    icon: "◎",
    title: "Research Gap Detection",
    description:
      "Surface unanswered questions, underexplored areas, and opportunities for further investigation.",
    tag: "Research opportunities",
  },
];

const agents = [
  {
    number: "01",
    icon: "⌕",
    name: "Discovery Agent",
    subtitle: "Find relevant literature",
    color: "text-sky-300",
  },
  {
    number: "02",
    icon: "◈",
    name: "Analysis Agent",
    subtitle: "Evaluate study quality",
    color: "text-violet-300",
  },
  {
    number: "03",
    icon: "✓",
    name: "Verification Agent",
    subtitle: "Check claims and citations",
    color: "text-cyan-300",
  },
  {
    number: "04",
    icon: "▤",
    name: "Synthesis Agent",
    subtitle: "Build the research brief",
    color: "text-blue-300",
  },
];

const sampleStudies = [
  {
    label: "STUDY 01",
    title: "Randomized controlled trial",
    detail: "Intervention outcomes and study endpoints",
    status: "Primary study",
    color: "bg-sky-400",
  },
  {
    label: "STUDY 02",
    title: "Systematic literature review",
    detail: "Consistency of findings across publications",
    status: "Evidence synthesis",
    color: "bg-violet-400",
  },
  {
    label: "STUDY 03",
    title: "Observational cohort study",
    detail: "Associations, confounding and limitations",
    status: "Supporting evidence",
    color: "bg-cyan-400",
  },
];

const researchBrief = [
  {
    icon: "↗",
    title: "Key findings",
    text: "Summarize reported outcomes and compare results across included studies.",
  },
  {
    icon: "⌁",
    title: "Evidence limitations",
    text: "Highlight study-design constraints, potential bias and inconsistent findings.",
  },
  {
    icon: "◎",
    title: "Evidence gaps",
    text: "Identify unresolved questions and areas requiring additional research.",
  },
  {
    icon: "↗",
    title: "Source references",
    text: "Provide publication details and links for independent review.",
  },
];

export default function EvidencePilotAI() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [question, setQuestion] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState("Overview");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#070b17] text-slate-100 selection:bg-cyan-400/30 selection:text-white">
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
          scroll-padding-top: 90px;
        }
        body {
          margin: 0;
          background: #070b17;
        }
        * {
          box-sizing: border-box;
        }
        ::-webkit-scrollbar {
          width: 7px;
        }
        ::-webkit-scrollbar-track {
          background: #070b17;
        }
        ::-webkit-scrollbar-thumb {
          background: #23334f;
          border-radius: 10px;
        }
        .grid-pattern {
          background-image: linear-gradient(
              rgba(112, 153, 213, 0.045) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(112, 153, 213, 0.045) 1px,
              transparent 1px
            );
          background-size: 46px 46px;
          mask-image: linear-gradient(to bottom, black, transparent 90%);
        }
        .glass {
          background: linear-gradient(
            145deg,
            rgba(22, 34, 59, 0.84),
            rgba(10, 17, 34, 0.82)
          );
          border: 1px solid rgba(142, 177, 232, 0.13);
          backdrop-filter: blur(20px);
        }
        .glow {
          box-shadow: 0 0 70px rgba(34, 123, 255, 0.13);
        }
        .blue-glow {
          box-shadow: 0 0 30px rgba(38, 137, 255, 0.23);
        }
        .text-gradient {
          background: linear-gradient(100deg, #f0f7ff 8%, #91d8ff 52%, #638bff 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .orb {
          animation: float 7s ease-in-out infinite;
        }
        .orb-delay {
          animation: float 8s ease-in-out 1.5s infinite;
        }
        .pulse-dot {
          animation: pulseDot 2s ease-in-out infinite;
        }
        .flow-line {
          background: linear-gradient(
            90deg,
            rgba(56, 189, 248, 0.1),
            rgba(56, 189, 248, 0.9),
            rgba(99, 102, 241, 0.15)
          );
          background-size: 200% 100%;
          animation: flow 4s linear infinite;
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        @keyframes pulseDot {
          0%,
          100% {
            box-shadow: 0 0 0 3px rgba(52, 211, 153, 0.09);
          }
          50% {
            box-shadow: 0 0 0 7px rgba(52, 211, 153, 0.02);
          }
        }
        @keyframes flow {
          to {
            background-position: -200% 0;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
          }
        }
      `}</style>

      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-white/[0.07] bg-[#070b17]/85 backdrop-blur-2xl">
        <nav className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
          <a href="#home" className="flex items-center gap-3">
            <div className="blue-glow flex h-10 w-10 items-center justify-center rounded-xl border border-blue-400/30 bg-gradient-to-br from-blue-500/25 to-cyan-400/10">
              <svg
                viewBox="0 0 40 40"
                className="h-7 w-7"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M9 9h13a9 9 0 0 1 0 18h-4"
                  stroke="#65d7ff"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />
                <path
                  d="M9 9v22h13"
                  stroke="#8b9eff"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />
                <circle cx="27" cy="10" r="3" fill="#55d6ff" />
                <circle cx="28" cy="28" r="3" fill="#8296ff" />
                <circle cx="17" cy="20" r="2.5" fill="#e4f7ff" />
                <path
                  d="M19 19 26 12M19 21l7 6"
                  stroke="#8fcfff"
                  strokeWidth="1.4"
                />
              </svg>
            </div>
            <div>
              <div className="text-[17px] font-semibold tracking-tight text-white">
                EvidencePilot<span className="text-blue-400"> AI</span>
              </div>
              <div className="text-[9px] font-medium uppercase tracking-[0.2em] text-slate-500">
                Research intelligence
              </div>
            </div>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            <a
              href="#platform"
              className="text-sm text-slate-400 transition hover:text-white"
            >
              Platform
            </a>
            <a
              href="#workflow"
              className="text-sm text-slate-400 transition hover:text-white"
            >
              How it works
            </a>
            <a
              href="#capabilities"
              className="text-sm text-slate-400 transition hover:text-white"
            >
              Capabilities
            </a>
            <a
              href="#brief"
              className="text-sm text-slate-400 transition hover:text-white"
            >
              Sample brief
            </a>
          </div>

          <a
            href="#contact"
            className="hidden items-center gap-2 rounded-lg border border-blue-400/30 bg-blue-500/10 px-4 py-2.5 text-sm font-medium text-blue-200 transition hover:border-blue-300/60 hover:bg-blue-500/20 sm:flex"
          >
            Explore the platform <span aria-hidden="true">↗</span>
          </a>

          <button
            type="button"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-xl text-slate-200 md:hidden"
          >
            {menuOpen ? "×" : "☰"}
          </button>
        </nav>
        {menuOpen && (
          <div className="border-t border-white/[0.07] bg-[#0a1020] px-5 py-4 md:hidden">
            {[
              ["Platform", "#platform"],
              ["How it works", "#workflow"],
              ["Capabilities", "#capabilities"],
              ["Sample brief", "#brief"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="block border-b border-white/[0.05] py-3 text-sm text-slate-300 last:border-0"
              >
                {label}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* Hero */}
      <section
        id="home"
        className="relative isolate overflow-hidden px-5 pb-24 pt-20 sm:px-8 sm:pb-32 sm:pt-28 lg:px-12 lg:pt-32"
      >
        <div className="grid-pattern absolute inset-0 -z-20" />
        <div className="absolute left-[10%] top-20 -z-10 h-80 w-80 rounded-full bg-blue-600/[0.10] blur-[120px]" />
        <div className="absolute right-[5%] top-36 -z-10 h-72 w-72 rounded-full bg-cyan-500/[0.08] blur-[110px]" />
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.02fr_0.98fr] lg:gap-12">
          <div className="relative z-10">
            <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-blue-400/20 bg-blue-400/[0.07] px-4 py-2">
              <span className="pulse-dot h-2 w-2 rounded-full bg-emerald-400" />
              <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-blue-200 sm:text-xs">
                A new way to navigate scientific evidence
              </span>
            </div>

            <h1 className="max-w-3xl text-[43px] font-semibold leading-[1.08] tracking-[-0.045em] text-white sm:text-6xl lg:text-[68px] xl:text-[76px]">
              Research smarter.
              <br />
              <span className="text-gradient">Evidence first.</span>
              <br />
              Move forward.
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
              Meet EvidencePilot AI — research intelligence that brings
              scientific literature, coordinated AI agents, and transparent
              evidence synthesis into one focused workflow.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#workflow"
                className="blue-glow inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-4 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:from-blue-500 hover:to-cyan-500"
              >
                Discover the workflow <span>→</span>
              </a>
              <a
                href="#brief"
                className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-6 py-4 text-sm font-medium text-slate-200 transition hover:border-blue-300/30 hover:bg-white/[0.06]"
              >
                View sample brief <span className="text-blue-300">↗</span>
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-slate-500">
              <span className="flex items-center gap-2">
                <span className="text-emerald-400">✓</span> Source-linked insights
              </span>
              <span className="flex items-center gap-2">
                <span className="text-emerald-400">✓</span> Transparent limitations
              </span>
              <span className="flex items-center gap-2">
                <span className="text-emerald-400">✓</span> Researcher-focused
              </span>
            </div>
          </div>

          {/* Hero research intelligence dashboard */}
          <div className="relative mx-auto w-full max-w-[570px] lg:ml-auto">
            <div className="absolute -inset-8 -z-10 rounded-[40px] bg-blue-500/[0.08] blur-3xl" />

            <div className="glass glow relative overflow-hidden rounded-2xl sm:rounded-3xl">
              <div className="flex items-center justify-between border-b border-white/[0.08] px-5 py-4 sm:px-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-500/15 text-lg text-blue-300">
                    ◈
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-100">
                      Research workspace
                    </div>
                    <div className="mt-0.5 text-[10px] text-slate-500">
                      Evidence intelligence overview
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 rounded-full border border-emerald-400/15 bg-emerald-400/[0.06] px-2.5 py-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span className="text-[10px] text-emerald-300">Illustrative</span>
                </div>
              </div>

              <div className="p-5 sm:p-6">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-[10px] font-medium uppercase tracking-[0.17em] text-slate-500">
                    Research question
                  </span>
                  <span className="text-xs text-blue-300">EP / 001</span>
                </div>

                <div className="rounded-xl border border-blue-400/15 bg-[#080f20]/80 p-4">
                  <p className="text-sm leading-6 text-slate-200">
                    How strong is the current evidence for the effectiveness
                    and safety of a selected therapeutic intervention?
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="rounded-md border border-blue-400/15 bg-blue-400/[0.08] px-2.5 py-1 text-[10px] text-blue-200">
                      Clinical evidence
                    </span>
                    <span className="rounded-md border border-violet-400/15 bg-violet-400/[0.07] px-2.5 py-1 text-[10px] text-violet-200">
                      Study comparison
                    </span>
                  </div>
                </div>

                <div className="relative py-5">
                  <div className="absolute bottom-0 left-1/2 top-0 w-px -translate-x-1/2 bg-gradient-to-b from-blue-400/5 via-blue-400/50 to-cyan-400/5" />
                  <div className="relative mx-auto flex w-fit items-center gap-2.5 rounded-full border border-blue-400/25 bg-[#111f3b] px-4 py-2.5">
                    <span className="text-sm text-blue-300">✳</span>
                    <span className="text-xs font-medium text-slate-100">
                      Coordinated agent workflow
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {agents.map((agent) => (
                    <div
                      key={agent.number}
                      className="group rounded-xl border border-white/[0.07] bg-white/[0.025] p-3.5 transition hover:border-blue-400/25 hover:bg-blue-400/[0.04] sm:p-4"
                    >
                      <div className="flex items-center justify-between">
                        <span className={`text-lg ${agent.color}`}>
                          {agent.icon}
                        </span>
                        <span className="text-[9px] tracking-widest text-slate-600">
                          {agent.number}
                        </span>
                      </div>
                      <div className="mt-3 text-xs font-semibold text-slate-200">
                        {agent.name}
                      </div>
                      <div className="mt-1 text-[10px] leading-4 text-slate-500">
                        {agent.subtitle}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 flex items-center justify-between rounded-xl border border-cyan-400/15 bg-gradient-to-r from-blue-500/[0.09] to-cyan-500/[0.04] p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-cyan-300/20 bg-cyan-300/[0.07] text-lg text-cyan-300">
                      ▤
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white">
                        Structured research brief
                      </div>
                      <div className="mt-1 text-[10px] text-slate-500">
                        Findings · Sources · Evidence gaps
                      </div>
                    </div>
                  </div>
                  <span className="text-xl text-cyan-300">↗</span>
                </div>
              </div>

              <div className="flex items-center justify-between border-t border-white/[0.07] bg-black/10 px-5 py-3 sm:px-6">
                <span className="text-[10px] text-slate-500">
                  Designed for traceable research
                </span>
                <span className="text-[10px] text-slate-500">
                  Concept interface · Illustrative data
                </span>
              </div>
            </div>

            <div className="orb glass absolute -left-5 top-[21%] hidden rounded-xl px-4 py-3 shadow-2xl sm:block lg:-left-12">
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-300">
                  ✓
                </div>
                <div>
                  <div className="text-xs font-medium text-white">
                    Citation trail
                  </div>
                  <div className="mt-1 text-[10px] text-slate-500">
                    Source-linked claims
                  </div>
                </div>
              </div>
            </div>

            <div className="orb-delay glass absolute -right-3 bottom-[16%] hidden rounded-xl px-4 py-3 shadow-2xl sm:block lg:-right-9">
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-400/10 text-violet-300">
                  ◎
                </div>
                <div>
                  <div className="text-xs font-medium text-white">
                    Evidence gaps
                  </div>
                  <div className="mt-1 text-[10px] text-slate-500">
                    Unanswered questions
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-24 max-w-7xl border-t border-white/[0.07] pt-8 sm:mt-32">
          <p className="mb-6 text-center text-[10px] font-medium uppercase tracking-[0.24em] text-slate-600">
            Built around the essential stages of scientific research
          </p>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {[
              ["01", "Discover", "Find relevant publications"],
              ["02", "Evaluate", "Assess study findings"],
              ["03", "Verify", "Trace claims to sources"],
              ["04", "Synthesize", "Build structured briefs"],
            ].map(([number, title, description]) => (
              <div key={number} className="flex items-start gap-3">
                <span className="mt-0.5 text-xs text-blue-400/80">
                  {number}
                </span>
                <div>
                  <div className="text-sm font-medium text-slate-200">
                    {title}
                  </div>
                  <div className="mt-1 text-xs leading-5 text-slate-500">
                    {description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="platform"
        className="relative border-t border-white/[0.06] px-5 py-24 sm:px-8 sm:py-28 lg:px-12"
      >
        <div className="absolute right-0 top-0 -z-10 h-72 w-72 rounded-full bg-indigo-500/[0.06] blur-[100px]" />
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-24">
          <div>
            <div className="mb-5 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.19em] text-cyan-300">
              <span className="h-px w-7 bg-cyan-400" />
              About EvidencePilot
            </div>
            <h2 className="max-w-lg text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-[45px]">
              From scattered publications to{" "}
              <span className="text-gradient">connected evidence.</span>
            </h2>
            <p className="mt-6 text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
              Research is more than finding papers. It means understanding
              what each study contributes, where findings agree, what remains
              uncertain, and how every conclusion connects to its source.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
              EvidencePilot AI is designed to bring those steps together
              through a coordinated research workflow that supports deeper
              analysis without losing sight of scientific transparency.
            </p>
            <a
              href="#capabilities"
              className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-blue-300 transition hover:text-cyan-200"
            >
              Explore research capabilities <span>→</span>
            </a>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="glass rounded-2xl p-6 transition hover:-translate-y-1 hover:border-blue-400/25 sm:mt-8">
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-400/10 text-xl text-blue-300">
                ◈
              </div>
              <h3 className="text-base font-semibold text-white">
                Intelligence that collaborates
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                Specialized AI agents handle complementary research tasks
                instead of treating evidence review as one undifferentiated
                step.
              </p>
            </div>
            <div className="glass rounded-2xl p-6 transition hover:-translate-y-1 hover:border-cyan-400/25">
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-xl text-cyan-300">
                ⌕
              </div>
              <h3 className="text-base font-semibold text-white">
                Clarity without overclaiming
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                Separate reported findings from interpretation, and make
                limitations and uncertainty part of the research narrative.
              </p>
            </div>
            <div className="glass rounded-2xl p-6 transition hover:-translate-y-1 hover:border-violet-400/25">
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-violet-400/20 bg-violet-400/10 text-xl text-violet-300">
                ↗
              </div>
              <h3 className="text-base font-semibold text-white">
                Evidence you can inspect
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                Keep publication references, supporting claims, and
                verification needs visible for independent review.
              </p>
            </div>
            <div className="glass rounded-2xl p-6 transition hover:-translate-y-1 hover:border-emerald-400/25 sm:mt-[-32px]">
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-400/20 bg-emerald-400/10 text-xl text-emerald-300">
                ⚕
              </div>
              <h3 className="text-base font-semibold text-white">
                Made for complex questions
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                Support research and pharmaceutical professionals working
                across clinical findings, scientific publications, and
                emerging evidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section
        id="workflow"
        className="relative overflow-hidden border-y border-white/[0.06] bg-[#0a1020] px-5 py-24 sm:px-8 sm:py-28 lg:px-12"
      >
        <div className="absolute left-1/2 top-1/4 -z-0 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-600/[0.07] blur-[120px]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-5 flex items-center justify-center gap-2 text-xs font-medium uppercase tracking-[0.19em] text-blue-300">
              <span className="h-px w-7 bg-blue-400" />
              The research workflow
              <span className="h-px w-7 bg-blue-400" />
            </div>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-[46px]">
              Four stages. One connected{" "}
              <span className="text-gradient">research journey.</span>
            </h2>
            <p className="mt-5 text-sm leading-7 text-slate-400 sm:text-base">
              Each stage contributes a distinct layer of analysis, helping
              transform a research question into a structured, source-aware
              evidence brief.
            </p>
          </div>

          <div className="relative mt-16">
            <div className="flow-line absolute left-[12%] right-[12%] top-10 hidden h-px lg:block" />
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  n: "01",
                  icon: "⌕",
                  title: "Frame the question",
                  tag: "DISCOVER",
                  text: "Define the research question, clarify its scope, and identify relevant literature and study types.",
                  accent: "border-sky-400/20 text-sky-300 bg-sky-400/10",
                },
                {
                  n: "02",
                  icon: "◈",
                  title: "Analyze the evidence",
                  tag: "EVALUATE",
                  text: "Examine reported outcomes, study design, population characteristics, and methodological limitations.",
                  accent: "border-violet-400/20 text-violet-300 bg-violet-400/10",
                },
                {
                  n: "03",
                  icon: "✓",
                  title: "Verify the sources",
                  tag: "VALIDATE",
                  text: "Check references, trace claims to publications, and flag unsupported or uncertain statements.",
                  accent: "border-cyan-400/20 text-cyan-300 bg-cyan-400/10",
                },
                {
                  n: "04",
                  icon: "▤",
                  title: "Synthesize the findings",
                  tag: "DELIVER",
                  text: "Organize findings, conflicting results, evidence gaps, and linked references into a concise brief.",
                  accent: "border-blue-400/20 text-blue-300 bg-blue-400/10",
                },
              ].map((step) => (
                <div key={step.n} className="relative">
                  <div className="glass h-full rounded-2xl p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-400/30">
                    <div className="relative mb-7 flex items-center justify-between">
                      <div
                        className={`flex h-[58px] w-[58px] items-center justify-center rounded-2xl border text-2xl ${step.accent}`}
                      >
                        {step.icon}
                      </div>
                      <span className="text-xs tracking-[0.2em] text-slate-600">
                        {step.n}
                      </span>
                    </div>
                    <div className="mb-3 text-[10px] font-semibold tracking-[0.2em] text-slate-500">
                      {step.tag}
                    </div>
                    <h3 className="text-lg font-semibold text-white">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-slate-400">
                      {step.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-2xl border border-blue-400/15 bg-gradient-to-r from-blue-500/[0.09] via-indigo-500/[0.06] to-cyan-500/[0.05] p-6 sm:flex-row sm:px-8">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-blue-300/20 bg-blue-300/10 text-blue-200">
                ✳
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white">
                  Designed as a coordinated intelligence system
                </h3>
                <p className="mt-1 text-sm leading-6 text-slate-400">
                  Specialized agents contribute to a shared research workflow,
                  with the final output organized for human review.
                </p>
              </div>
            </div>
            <a
              href="#brief"
              className="shrink-0 rounded-lg border border-blue-400/25 px-4 py-2.5 text-sm text-blue-200 transition hover:bg-blue-400/10"
            >
              See the output <span className="ml-1">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section
        id="capabilities"
        className="px-5 py-24 sm:px-8 sm:py-28 lg:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <div className="mb-5 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.19em] text-cyan-300">
                <span className="h-px w-7 bg-cyan-400" />
                Research capabilities
              </div>
              <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-[45px]">
                Everything your evidence workflow{" "}
                <span className="text-gradient">needs to connect.</span>
              </h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-slate-400">
              From the first literature search to the final research brief,
              each capability supports a clearer and more auditable research
              process.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((item, i) => (
              <article
                key={item.title}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-[#0b1222] p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-[#0d172b] sm:p-7"
              >
                <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-blue-500/[0.04] blur-2xl transition group-hover:bg-blue-500/[0.11]" />
                <div className="relative">
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.035] text-xl">
                      {item.icon}
                    </div>
                    <span className="text-xs text-slate-700">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="mt-6 text-lg font-semibold text-slate-100">
                    {item.title}
                  </h3>
                  <p className="mt-3 min-h-[72px] text-sm leading-6 text-slate-400">
                    {item.description}
                  </p>
                  <div className="mt-6 flex items-center gap-2 border-t border-white/[0.06] pt-4">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                    <span className="text-xs text-slate-500">{item.tag}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 border-y border-white/[0.06] py-7">
            {[
              "Scientific literature",
              "Study limitations",
              "Citation traceability",
              "Evidence gaps",
              "Human review",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 text-xs text-slate-400"
              >
                <span className="text-cyan-400">✳</span> {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample research brief */}
      <section
        id="brief"
        className="relative overflow-hidden border-y border-white/[0.06] bg-[#0a1020] px-5 py-24 sm:px-8 sm:py-28 lg:px-12"
      >
        <div className="absolute bottom-0 left-1/4 -z-0 h-80 w-80 rounded-full bg-blue-500/[0.07] blur-[120px]" />
        <div className="relative mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div className="lg:sticky lg:top-28">
            <div className="mb-5 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.19em] text-blue-300">
              <span className="h-px w-7 bg-blue-400" />
              Inside a research brief
            </div>
            <h2 className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-[45px]">
              Research outputs built for{" "}
              <span className="text-gradient">closer inspection.</span>
            </h2>
            <p className="mt-6 text-sm leading-7 text-slate-400 sm:text-base">
              A useful research brief does more than summarize. It organizes
              findings, shows where the evidence comes from, and makes the
              remaining uncertainties visible.
            </p>
            <div className="mt-8 space-y-4">
              {[
                "Clear, question-focused summaries",
                "Study-level findings and limitations",
                "References for independent verification",
                "Explicit uncertainty and research gaps",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-emerald-400/20 bg-emerald-400/[0.08] text-[10px] text-emerald-300">
                    ✓
                  </span>
                  <span className="text-sm leading-6 text-slate-300">
                    {item}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-xl border border-amber-400/15 bg-amber-400/[0.04] p-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-amber-200">
                <span>ⓘ</span> Research integrity by design
              </div>
              <p className="mt-2 text-xs leading-5 text-slate-400">
                AI-generated summaries require source verification and expert
                review. The interface illustrates a proposed workflow, not
                independently validated clinical conclusions.
              </p>
            </div>
          </div>

          <div className="glass overflow-hidden rounded-2xl sm:rounded-3xl">
            <div className="flex flex-col gap-4 border-b border-white/[0.08] p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-400/10 text-xl text-blue-300">
                  ▤
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">
                    Research evidence brief
                  </div>
                  <div className="mt-1 text-xs text-slate-500">
                    Illustrative preview · Clinical research
                  </div>
                </div>
              </div>
              <span className="w-fit rounded-full border border-violet-400/20 bg-violet-400/[0.07] px-3 py-1.5 text-[10px] text-violet-200">
                SAMPLE OUTPUT
              </span>
            </div>

            <div className="border-b border-white/[0.06] p-5 sm:p-6">
              <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                Research question
              </div>
              <h3 className="mt-3 text-base font-medium leading-7 text-slate-100 sm:text-lg">
                What does the published evidence indicate about the
                effectiveness and safety of a hypothetical therapeutic
                intervention?
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-md bg-blue-400/10 px-2.5 py-1 text-[10px] text-blue-200">
                  Clinical studies
                </span>
                <span className="rounded-md bg-violet-400/10 px-2.5 py-1 text-[10px] text-violet-200">
                  Evidence synthesis
                </span>
                <span className="rounded-md bg-cyan-400/10 px-2.5 py-1 text-[10px] text-cyan-200">
                  Source review
                </span>
              </div>
            </div>

            <div className="grid gap-3 p-5 sm:grid-cols-2 sm:p-6">
              {researchBrief.map((item, i) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-white/[0.07] bg-[#080f1e]/70 p-4"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-400/[0.09] text-sm text-blue-300">
                      {item.icon}
                    </span>
                    <h4 className="text-sm font-semibold text-slate-200">
                      {item.title}
                    </h4>
                  </div>
                  <p className="mt-3 text-xs leading-6 text-slate-400">
                    {item.text}
                  </p>
                  {i === 2 && (
                    <div className="mt-3 inline-flex rounded-md border border-amber-400/15 bg-amber-400/[0.05] px-2 py-1 text-[10px] text-amber-200">
                      Requires further investigation
                    </div>
                  )}
                  {i === 3 && (
                    <div className="mt-3 inline-flex rounded-md border border-cyan-400/15 bg-cyan-400/[0.05] px-2 py-1 text-[10px] text-cyan-200">
                      Publication links
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="border-t border-white/[0.07] p-5 sm:p-6">
              <div className="mb-4 flex items-center justify-between">
                <h4 className="text-sm font-semibold text-white">
                  Included literature
                </h4>
                <span className="text-[10px] text-slate-500">
                  Example study records
                </span>
              </div>
              <div className="space-y-3">
                {sampleStudies.map((study) => (
                  <div
                    key={study.label}
                    className="flex items-start gap-3 rounded-xl border border-white/[0.05] bg-white/[0.015] p-3.5"
                  >
                    <span
                      className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${study.color}`}
                    />
                    <div className="min-w-0 flex-1">
                      <div className="text-sm font-medium text-slate-200">
                        {study.title}
                      </div>
                      <p className="mt-1 text-xs leading-5 text-slate-500">
                        {study.detail}
                      </p>
                    </div>
                    <span className="hidden shrink-0 rounded-md border border-white/[0.07] px-2 py-1 text-[9px] text-slate-500 sm:block">
                      {study.status}
                    </span>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-[10px] leading-5 text-slate-600">
                Example categories only. No real publications, study results,
                or verified citations are represented in this preview.
              </p>
            </div>

            <div className="flex flex-col gap-3 border-t border-white/[0.07] bg-blue-400/[0.025] p-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <span className="text-emerald-400">✓</span>
                Structured for independent review
              </div>
              <a
                href="#contact"
                className="text-xs font-medium text-blue-300 transition hover:text-cyan-200"
              >
                Discuss research workflows →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Project cards */}
      <section className="px-5 py-24 sm:px-8 sm:py-28 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-5 flex items-center justify-center gap-2 text-xs font-medium uppercase tracking-[0.19em] text-cyan-300">
              <span className="h-px w-7 bg-cyan-400" />
              The EvidencePilot ecosystem
              <span className="h-px w-7 bg-cyan-400" />
            </div>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              One mission. Three connected{" "}
              <span className="text-gradient">research experiences.</span>
            </h2>
            <p className="mt-5 text-sm leading-7 text-slate-400 sm:text-base">
              Explore complementary ways to discover, assess, and organize
              scientific evidence.
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {[
              {
                n: "01",
                title: "Evidence Discovery",
                eyebrow: "LITERATURE INTELLIGENCE",
                symbol: "⌕",
                description:
                  "A focused starting point for exploring scientific publications, refining research questions, and organizing relevant literature.",
                tags: ["Literature search", "Topic mapping"],
                color: "from-blue-500/20 via-sky-500/5 to-transparent",
                accent: "text-sky-300",
                href: "#workflow",
              },
              {
                n: "02",
                title: "Study Insight",
                eyebrow: "CRITICAL APPRAISAL",
                symbol: "◈",
                description:
                  "A structured study-review experience for comparing research designs, interpreting reported outcomes, and identifying limitations.",
                tags: ["Study comparison", "Limitations"],
                color: "from-violet-500/20 via-indigo-500/5 to-transparent",
                accent: "text-violet-300",
                href: "#capabilities",
              },
              {
                n: "03",
                title: "Evidence Brief",
                eyebrow: "RESEARCH SYNTHESIS",
                symbol: "▤",
                description:
                  "A source-aware research output that organizes findings, conflicting evidence, verification needs, and open research questions.",
                tags: ["Source-linked claims", "Evidence gaps"],
                color: "from-cyan-500/20 via-blue-500/5 to-transparent",
                accent: "text-cyan-300",
                href: "#brief",
              },
            ].map((project) => (
              <article
                key={project.n}
                className="group overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0b1222] transition duration-300 hover:-translate-y-1 hover:border-blue-400/25"
              >
                <div
                  className={`relative h-44 overflow-hidden border-b border-white/[0.06] bg-gradient-to-br ${project.color} p-5`}
                >
                  <div className="absolute right-0 top-0 h-36 w-36 rounded-full border border-white/[0.05]" />
                  <div className="absolute right-5 top-5 h-24 w-24 rounded-full border border-white/[0.06]" />
                  <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-[#0a1020]/80 text-3xl text-white shadow-xl">
                      {project.symbol}
                    </div>
                    <span className="text-xs tracking-[0.2em] text-slate-500">
                      EP / {project.n}
                    </span>
                  </div>
                  <div className="absolute left-24 top-7 h-px w-24 bg-gradient-to-r from-blue-300/50 to-transparent" />
                  <div className="absolute left-24 top-7 h-2 w-2 -translate-y-1/2 rounded-full bg-cyan-300" />
                </div>
                <div className="p-6">
                  <div className={`text-[10px] font-semibold tracking-[0.18em] ${project.accent}`}>
                    {project.eyebrow}
                  </div>
                  <h3 className="mt-3 text-xl font-semibold text-white">
                    {project.title}
                  </h3>
                  <p className="mt-3 min-h-[96px] text-sm leading-6 text-slate-400">
                    {project.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-white/[0.07] bg-white/[0.025] px-2.5 py-1.5 text-[10px] text-slate-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.href}
                    className="mt-6 flex items-center justify-between border-t border-white/[0.06] pt-4 text-sm text-slate-300 transition group-hover:text-blue-300"
                  >
                    Explore experience <span>↗</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="border-y border-white/[0.06] bg-[#0a1020] px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-center lg:gap-20">
            <div>
              <div className="mb-5 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.19em] text-cyan-300">
                <span className="h-px w-7 bg-cyan-400" />
                Our principles
              </div>
              <h2 className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
                Powerful AI.
                <br />
                <span className="text-gradient">Visible evidence.</span>
              </h2>
              <p className="mt-5 text-sm leading-7 text-slate-400">
                Trustworthy research intelligence starts with a process that
                makes it easier to inspect not only what a system says, but
                also where its conclusions come from.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                {
                  symbol: "↗",
                  title: "Traceability",
                  text: "Make source references and supporting evidence visible.",
                },
                {
                  symbol: "⌁",
                  title: "Transparency",
                  text: "Expose limitations, contradictions, and uncertainty.",
                },
                {
                  symbol: "◎",
                  title: "Human oversight",
                  text: "Keep researchers responsible for interpretation and decisions.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5"
                >
                  <span className="text-2xl text-cyan-300">{item.symbol}</span>
                  <h3 className="mt-5 text-base font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="relative overflow-hidden px-5 py-24 sm:px-8 sm:py-28 lg:px-12"
      >
        <div className="absolute left-1/2 top-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/[0.09] blur-[140px]" />
        <div className="mx-auto max-w-5xl">
          <div className="glass relative overflow-hidden rounded-3xl p-6 sm:p-10 lg:p-14">
            <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-cyan-500/[0.07] blur-[90px]" />
            <div className="relative grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:gap-14">
              <div>
                <div className="mb-5 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.19em] text-cyan-300">
                  <span className="h-px w-7 bg-cyan-400" />
                  Start a conversation
                </div>
                <h2 className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-[45px]">
                  Better research begins with a{" "}
                  <span className="text-gradient">better question.</span>
                </h2>
                <p className="mt-5 max-w-md text-sm leading-7 text-slate-400 sm:text-base">
                  Interested in evidence synthesis, pharmaceutical research,
                  or AI-powered scientific workflows? Share your research
                  challenge and explore what EvidencePilot AI could help
                  accomplish.
                </p>
                <div className="mt-8 space-y-4">
                  {[
                    "Discuss a research use case",
                    "Explore evidence-review workflows",
                    "Connect on scientific AI innovation",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-400/[0.06] text-xs text-cyan-300">
                        ✓
                      </span>
                      <span className="text-sm text-slate-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <form
                onSubmit={handleSubmit}
                className="relative rounded-2xl border border-white/[0.08] bg-[#080f1e]/75 p-5 sm:p-6"
              >
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-white">
                    Let&apos;s connect
                  </h3>
                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    Tell us what you&apos;re exploring.
                  </p>
                </div>

                <label
                  htmlFor="research-question"
                  className="mb-2 block text-xs font-medium text-slate-300"
                >
                  Research interest
                </label>
                <select
                  id="research-question"
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  required
                  className="mb-5 w-full rounded-xl border border-white/10 bg-[#0b1427] px-4 py-3.5 text-sm text-slate-200 outline-none transition focus:border-blue-400/50 focus:ring-2 focus:ring-blue-400/10"
                >
                  <option value="" disabled>
                    Select an area of interest
                  </option>
                  <option value="Literature discovery">
                    Scientific literature discovery
                  </option>
                  <option value="Evidence synthesis">
                    Evidence synthesis and research briefs
                  </option>
                  <option value="Pharmaceutical research">
                    Pharmaceutical research
                  </option>
                  <option value="Citation verification">
                    Citation verification
                  </option>
                  <option value="AI research collaboration">
                    AI research collaboration
                  </option>
                  <option value="Other">Other research challenge</option>
                </select>

                <label
                  htmlFor="contact-email"
                  className="mb-2 block text-xs font-medium text-slate-300"
                >
                  Email address
                </label>
                <input
                  id="contact-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="you@organization.com"
                  className="mb-5 w-full rounded-xl border border-white/10 bg-[#0b1427] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-blue-400/50 focus:ring-2 focus:ring-blue-400/10"
                />

                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 px-5 py-3.5 text-sm font-semibold text-white transition hover:from-blue-500 hover:to-cyan-500"
                >
                  Send your interest <span>→</span>
                </button>

                {submitted && (
                  <div
                    role="status"
                    className="mt-4 rounded-xl border border-emerald-400/20 bg-emerald-400/[0.06] p-4"
                  >
                    <p className="text-sm font-medium text-emerald-300">
                      Your details are ready.
                    </p>
                    <p className="mt-1 text-xs leading-5 text-slate-400">
                      This demo form does not send or store your information.
                      Connect a backend or form service to receive submissions.
                    </p>
                  </div>
                )}

                <p className="mt-4 text-center text-[10px] leading-5 text-slate-600">
                  Demo interface · No information is transmitted or stored.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/[0.07] bg-[#060a14] px-5 py-9 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-7 sm:flex-row sm:items-center sm:justify-between">
          <a href="#home" className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-blue-400/20 bg-blue-400/[0.07] text-lg text-blue-300">
              ◈
            </div>
            <div>
              <div className="text-sm font-semibold text-white">
                EvidencePilot<span className="text-blue-400"> AI</span>
              </div>
              <div className="mt-1 text-[10px] text-slate-500">
                Navigate evidence with confidence.
              </div>
            </div>
          </a>

          <div className="flex flex-wrap gap-x-6 gap-y-3 text-xs text-slate-500">
            <a href="#platform" className="transition hover:text-white">
              About
            </a>
            <a href="#workflow" className="transition hover:text-white">
              Workflow
            </a>
            <a href="#capabilities" className="transition hover:text-white">
              Capabilities
            </a>
            <a href="#brief" className="transition hover:text-white">
              Sample brief
            </a>
            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </div>

          <div className="text-xs text-slate-600">
            © {new Date().getFullYear()} EvidencePilot AI
          </div>
        </div>
        <div className="mx-auto mt-7 max-w-7xl border-t border-white/[0.05] pt-5">
          <p className="text-[10px] leading-5 text-slate-600">
            EvidencePilot AI is presented as a research intelligence concept.
            AI-generated content may contain errors and requires independent
            source verification. It is not a substitute for professional
            scientific judgment or clinical decision-making.
          </p>
        </div>
      </footer>
    </main>
  );
}
