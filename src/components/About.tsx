import { motion } from "motion/react";

const certs = [
  { label: "AWS Solutions Architect", sublabel: "Associate", dot: "bg-orange-400" },
  { label: "AWS Cloud Practitioner", sublabel: "Certified", dot: "bg-orange-400" },
  { label: "CompTIA A+", sublabel: "Certified", dot: "bg-red-400" },
];

const stats = [
  { value: "4+", label: "Years shipping" },
  { value: "300+", label: "Learners taught" },
  { value: "40%", label: "User growth supported" },
  { value: "25%", label: "Faster dev cycles" },
];

export default function About() {
  return (
    <section id="about" className="py-28 px-6 border-t border-white/5">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

          {/* left: text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-indigo-400">
              About me
            </p>
            <h2 className="mb-6 text-4xl font-bold text-white">
              Engineer who ships —{" "}
              <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                not just codes
              </span>
            </h2>
            <div className="space-y-4 text-gray-400 leading-relaxed text-sm">
              <p>
                I'm Alandis Seals, a Full Stack Engineer based in Birmingham, AL. I've spent 4+ years
                building production apps — starting in iOS with Swift, expanding into full-stack web
                with React, Node.js, TypeScript, and AWS.
              </p>
              <p>
                I currently lead development at Ed Farm, building platforms used by hundreds of learners
                and community members. I've architected everything from AI-powered learning tools to
                serverless cloud infrastructure — and taught 300+ adults to build software along the way.
              </p>
              <p>
                For freelance clients, that means you get someone who can take your idea from zero to
                deployed — and explain every decision in plain English.
              </p>
            </div>

            {/* certs */}
            <div className="mt-8 flex flex-wrap gap-3">
              {certs.map((cert, i) => (
                <motion.div
                  key={cert.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.4 }}
                  whileHover={{ scale: 1.04, borderColor: "rgba(99,102,241,0.4)" }}
                  className="flex items-center gap-2 rounded-lg border border-white/5 bg-white/[0.03] px-4 py-2.5"
                >
                  <span className={`h-2 w-2 rounded-full ${cert.dot}`} />
                  <div>
                    <p className="text-xs font-medium text-white">{cert.label}</p>
                    <p className="text-xs text-gray-500">{cert.sublabel}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="/resume.pdf"
              target="_blank"
              whileHover={{ x: 4 }}
              className="mt-8 inline-flex items-center gap-2 text-sm text-indigo-400 transition-colors hover:text-indigo-300"
            >
              Download resume →
            </motion.a>
          </motion.div>

          {/* right: stats */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ scale: 1.04, borderColor: "rgba(99,102,241,0.35)", boxShadow: "0 0 24px rgba(99,102,241,0.08)" }}
                className="rounded-2xl border border-white/5 bg-white/[0.03] p-8 text-center"
              >
                <p className="text-4xl font-bold bg-gradient-to-br from-white to-gray-400 bg-clip-text text-transparent">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
