import { motion } from "motion/react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
});

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-20 text-center overflow-hidden">
      {/* grid */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:48px_48px]" />

      {/* glow orbs */}
      <div className="pointer-events-none absolute top-1/4 left-1/4 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-indigo-600/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-1/4 right-1/4 h-[400px] w-[400px] translate-x-1/2 rounded-full bg-violet-600/10 blur-[120px]" />

      <div className="relative z-10 max-w-4xl">
        {/* availability badge */}
        <motion.div {...fadeUp(0)} className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-gray-400 backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
          </span>
          Available for freelance projects
        </motion.div>

        {/* headline */}
        <motion.h1 {...fadeUp(0.1)} className="mb-6 text-5xl font-bold leading-[1.1] tracking-tight text-white md:text-6xl lg:text-7xl">
          I build web apps that
          <br />
          <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent">
            grow your business
          </span>
        </motion.h1>

        {/* subtext */}
        <motion.p {...fadeUp(0.2)} className="mb-5 text-lg text-gray-400 md:text-xl max-w-2xl mx-auto">
          Full Stack Engineer with 4+ years shipping production apps — React,
          Node.js, TypeScript, AWS, and iOS. I take ideas from concept to
          deployed product.
        </motion.p>

        {/* trust signals */}
        <motion.div {...fadeUp(0.3)} className="mb-10 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-500">
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
            AWS Certified Solutions Architect
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
            4+ Years Experience
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
            Ships Fast
          </span>
        </motion.div>

        {/* CTAs */}
        <motion.div {...fadeUp(0.4)} className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.04, boxShadow: "0 0 24px rgba(99,102,241,0.45)" }}
            whileTap={{ scale: 0.97 }}
            className="w-full rounded-xl bg-indigo-600 px-8 py-3.5 text-base font-medium text-white sm:w-auto"
          >
            View My Work
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.04, backgroundColor: "rgba(255,255,255,0.08)" }}
            whileTap={{ scale: 0.97 }}
            className="w-full rounded-xl border border-white/10 bg-white/5 px-8 py-3.5 text-base font-medium text-white sm:w-auto"
          >
            Let's Talk
          </motion.a>
        </motion.div>

        {/* social links */}
        <motion.div {...fadeUp(0.5)} className="mt-12 flex justify-center gap-8 text-sm text-gray-500">
          {[
            { label: "GitHub", href: "https://github.com/Alseals1" },
            { label: "LinkedIn", href: "https://linkedin.com/in/alandisseals" },
            { label: "Resume", href: "/resume.pdf" },
          ].map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2, color: "#fff" }}
              className="transition-colors"
            >
              {link.label}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
