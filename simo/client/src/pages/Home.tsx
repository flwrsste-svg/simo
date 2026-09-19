import { useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  Clapperboard,
  Copy,
  Mail,
  Menu,
  Play,
  Send,
  Smartphone,
  Sparkles,
  X,
} from "lucide-react";
import { toast } from "sonner";

const services = [
  {
    number: "01",
    title: "UGC Video Creation",
    description:
      "Short-form, natural-feeling product videos designed to earn attention and make a clear message memorable.",
    icon: Clapperboard,
  },
  {
    number: "02",
    title: "Product Storytelling",
    description:
      "Content concepts that introduce the product, its use case and the feeling it creates—simply and credibly.",
    icon: Sparkles,
  },
  {
    number: "03",
    title: "Social-First Edits",
    description:
      "Fast, focused vertical edits prepared for the way audiences discover content on social platforms.",
    icon: Smartphone,
  },
];

const process = [
  ["01", "Brief", "Your product, audience and objective."],
  ["02", "Concept", "A simple angle built for the platform."],
  ["03", "Create", "Natural, polished content with intent."],
  ["04", "Deliver", "Ready-to-use social-first files."],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const copyPlaceholder = async () => {
    await navigator.clipboard.writeText("mhamedmoubassat@gmail.com");
    toast("Email copied to clipboard.");
  };

  return (
    <main className="overflow-hidden bg-[#f6f1e8] text-[#102946]">
      <section className="relative min-h-[780px] overflow-hidden bg-[#102946] text-[#f6f1e8] md:min-h-[820px]">
        <div className="hero-grain absolute inset-0 opacity-30" />
        <div className="absolute -left-24 top-28 h-72 w-72 rounded-full bg-[#e96d37]/20 blur-3xl" />
        <div className="absolute right-[34%] top-1/3 h-56 w-56 rounded-full bg-[#3c77be]/25 blur-3xl" />

        <nav className="relative z-20 mx-auto flex max-w-7xl items-center justify-between px-5 py-6 md:px-8 lg:px-10">
          <button
            className="group flex items-center gap-3 text-left"
            onClick={() => scrollTo("top")}
            aria-label="Back to top"
          >
            <span className="grid h-11 w-11 place-items-center rounded-full border border-[#f6f1e8]/50 font-display text-lg font-semibold transition-transform duration-200 group-hover:rotate-6">
              MM
            </span>
            <span className="hidden text-xs font-semibold uppercase tracking-[0.22em] sm:block">
              Mohamed Moubassat
            </span>
          </button>

          <div className="hidden items-center gap-7 text-sm font-medium text-[#f6f1e8]/80 md:flex">
            <button onClick={() => scrollTo("about")} className="nav-link">About</button>
            <button onClick={() => scrollTo("services")} className="nav-link">Services</button>
            <button onClick={() => scrollTo("process")} className="nav-link">Process</button>
            <button
              onClick={() => scrollTo("contact")}
              className="rounded-full bg-[#f6f1e8] px-5 py-2.5 font-semibold text-[#102946] transition hover:-translate-y-0.5 hover:bg-white active:scale-[0.97]"
            >
              Let&apos;s work
            </button>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="grid h-11 w-11 place-items-center rounded-full border border-[#f6f1e8]/30 transition hover:bg-white/10 md:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {menuOpen && (
          <div className="absolute inset-x-5 top-20 z-30 rounded-3xl border border-white/10 bg-[#173656] p-5 shadow-2xl md:hidden">
            {[
              ["About", "about"],
              ["Services", "services"],
              ["Process", "process"],
              ["Contact", "contact"],
            ].map(([label, target]) => (
              <button
                key={target}
                onClick={() => scrollTo(target)}
                className="flex w-full items-center justify-between border-b border-white/10 py-4 text-left font-semibold last:border-0"
              >
                {label} <ArrowDownRight size={17} />
              </button>
            ))}
          </div>
        )}

        <div id="top" className="relative z-10 mx-auto grid max-w-7xl gap-12 px-5 pb-20 pt-14 md:px-8 md:pb-24 md:pt-20 lg:grid-cols-[1.12fr_.88fr] lg:items-end lg:px-10 lg:pt-28">
          <div className="max-w-3xl">
            <div className="mb-7 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#f6f1e8]/60">
              <span className="h-px w-9 bg-[#e96d37]" />
              UGC CONTENT CREATOR
            </div>
            <h1 className="font-display text-[clamp(3.8rem,8.7vw,7.6rem)] font-semibold leading-[0.86] tracking-[-0.065em]">
              Content that feels
              <span className="block font-serif font-normal italic text-[#f7b86e]">worth watching.</span>
            </h1>
            <p className="mt-8 max-w-md text-base leading-7 text-[#f6f1e8]/70 md:text-lg">
              I create concise, audience-first UGC videos that help brands show up with clarity, personality and purpose.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <button
                onClick={() => scrollTo("contact")}
                className="group inline-flex items-center gap-2 rounded-full bg-[#e96d37] px-6 py-3.5 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-[#f17d49] active:scale-[0.97]"
              >
                Start a project <ArrowUpRight size={17} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
              <button
                onClick={() => scrollTo("services")}
                className="inline-flex items-center gap-2 rounded-full border border-[#f6f1e8]/30 px-5 py-3.5 text-sm font-semibold transition hover:bg-white/10 active:scale-[0.97]"
              >
                Explore services <ArrowDownRight size={17} />
              </button>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:ml-auto lg:mr-0">
            <div className="absolute -inset-4 rotate-6 rounded-[2.5rem] border border-[#f6f1e8]/20" />
            <div className="relative overflow-hidden rounded-[2.25rem] bg-[#2e5f95] shadow-[0_35px_80px_-28px_rgba(0,0,0,.8)]">
              <img
                src="/manus-storage/mohamed-moubassat-hero_a165f0cd.jpg"
                alt="A creative desk setup for producing short-form content"
                className="h-[440px] w-full object-cover object-center sm:h-[500px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#102946]/75 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/65">Show. Don&apos;t sell.</p>
                  <p className="mt-1 font-serif text-2xl italic text-white">Make it real.</p>
                </div>
                <span className="grid h-11 w-11 place-items-center rounded-full bg-[#f6f1e8] text-[#102946] shadow-lg"><Play size={16} fill="currentColor" /></span>
              </div>
            </div>
            <div className="absolute -bottom-7 -left-5 flex max-w-[205px] items-center gap-3 rounded-2xl bg-[#f6f1e8] p-3.5 text-[#102946] shadow-xl sm:-left-10">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#f7b86e]/30"><Sparkles size={17} /></span>
              <p className="text-xs font-semibold leading-4">Built for the way people actually scroll.</p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f6f1e8]/40 to-transparent" />
      </section>

      <section id="about" className="relative bg-[#f6f1e8] px-5 py-24 md:px-8 md:py-32 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.78fr_1.22fr] lg:gap-20">
          <div>
            <p className="eyebrow">About me</p>
            <div className="mt-5 h-px w-full bg-[#102946]/15" />
          </div>
          <div>
            <p className="font-serif text-[clamp(2.15rem,4.2vw,4rem)] leading-[1.04] tracking-[-0.045em] text-[#102946]">
              I&apos;m <span className="font-display font-semibold">Mohamed Moubassat</span>—an independent creator focused on content with a human point of view.
            </p>
            <div className="mt-10 grid gap-6 border-t border-[#102946]/15 pt-6 sm:grid-cols-2">
              <p className="text-sm leading-6 text-[#102946]/70">I approach every brief with curiosity, then translate the strongest idea into clear, social-first video content.</p>
              <p className="text-sm leading-6 text-[#102946]/70">The aim is simple: make the product easy to understand and the brand easy to remember.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="relative overflow-hidden bg-[#dce6ef] px-5 py-24 md:px-8 md:py-32 lg:px-10">
        <div className="absolute inset-0 opacity-[.18]" style={{ backgroundImage: "url('/manus-storage/mohamed-moubassat-pattern_3e65a5b6.jpg')", backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="relative mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-8 border-b border-[#102946]/20 pb-9 md:flex-row md:items-end">
            <div>
              <p className="eyebrow">What I create</p>
              <h2 className="mt-5 max-w-2xl font-display text-[clamp(2.8rem,5.5vw,5.4rem)] font-semibold leading-[.91] tracking-[-0.06em]">Content that gets to the point.</h2>
            </div>
            <p className="max-w-xs text-sm leading-6 text-[#102946]/70">Every format is made with the product, message and viewing behavior in mind.</p>
          </div>

          <div className="grid divide-y divide-[#102946]/20 md:grid-cols-3 md:divide-x md:divide-y-0">
            {services.map(({ number, title, description, icon: Icon }) => (
              <article key={number} className="group relative py-10 md:px-8 md:py-14 first:md:pl-0 last:md:pr-0">
                <div className="flex items-start justify-between">
                  <span className="font-mono text-xs text-[#102946]/55">{number}</span>
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-[#102946] text-[#f6f1e8] transition duration-200 group-hover:-translate-y-1 group-hover:rotate-6"><Icon size={19} /></span>
                </div>
                <h3 className="mt-14 font-display text-2xl font-semibold tracking-[-0.04em]">{title}</h3>
                <p className="mt-4 max-w-xs text-sm leading-6 text-[#102946]/70">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="bg-[#102946] px-5 py-24 text-[#f6f1e8] md:px-8 md:py-32 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[.72fr_1.28fr]">
            <div>
              <p className="eyebrow !text-[#f7b86e]">The workflow</p>
              <h2 className="mt-5 max-w-sm font-serif text-5xl leading-[.94] tracking-[-0.05em] md:text-6xl">Simple from brief to final file.</h2>
            </div>
            <div className="grid sm:grid-cols-2">
              {process.map(([number, title, description], index) => (
                <div key={number} className={`border-[#f6f1e8]/20 p-6 sm:p-8 ${index < 2 ? "border-b" : ""} ${index % 2 === 0 ? "sm:border-r" : ""}`}>
                  <p className="font-mono text-xs text-[#f7b86e]">{number}</p>
                  <h3 className="mt-9 font-display text-2xl font-semibold tracking-[-0.04em]">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#f6f1e8]/60">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="relative bg-[#e96d37] px-5 py-24 text-white md:px-8 md:py-32 lg:px-10">
        <div className="orange-grain absolute inset-0 opacity-25" />
        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_.95fr] lg:items-end">
            <div>
              <p className="eyebrow !text-white/70">Let&apos;s create</p>
              <h2 className="mt-5 max-w-3xl font-display text-[clamp(3.2rem,7vw,7rem)] font-semibold leading-[.86] tracking-[-0.07em]">Have a product worth showing?</h2>
              <p className="mt-8 max-w-md text-base leading-7 text-white/80">Tell me what you&apos;re launching, and we can shape a piece of content people will want to watch.</p>
            </div>

            <div className="rounded-[1.7rem] bg-[#f6f1e8] p-6 text-[#102946] shadow-[0_24px_70px_-28px_rgba(67,20,4,.65)] md:p-8">
              <div className="flex items-start gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#102946] text-[#f6f1e8]"><Mail size={18} /></span>
                <div>
                  <p className="text-sm font-semibold">Business email</p>
                  <p className="mt-1 text-xs leading-5 text-[#102946]/60">For project inquiries, you can reach Mohamed at this email address.</p>
                </div>
              </div>
              <button onClick={copyPlaceholder} className="mt-7 flex w-full items-center justify-between border-b border-[#102946]/25 pb-3 text-left font-display text-lg font-semibold tracking-[-0.03em] transition hover:border-[#102946]">
                <span>mhamedmoubassat@gmail.com</span>
                <Copy size={17} />
              </button>
              <button
                onClick={copyPlaceholder}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#102946] px-5 py-3.5 text-sm font-bold text-[#f6f1e8] transition hover:-translate-y-0.5 hover:bg-[#173b60] active:scale-[0.97]"
              >
                <Send size={16} /> Contact Mohamed
              </button>
              <p className="mt-4 flex items-start gap-2 text-[11px] leading-4 text-[#102946]/55"><Check size={13} className="mt-0.5 shrink-0" />Make sure your business details stay accurate and consistent across your public profiles.</p>
            </div>
          </div>

          <footer className="mt-20 flex flex-col gap-3 border-t border-white/25 pt-6 text-xs text-white/70 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} Mohamed Moubassat. UGC Content Creator.</p>
            <p>Independent creator portfolio</p>
          </footer>
        </div>
      </section>
    </main>
  );
}
