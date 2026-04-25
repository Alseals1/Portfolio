import { motion } from "motion/react";

const services = [
  {
    emoji: "🌐",
    title: "Web App Development",
    description:
      "Full-stack web applications built with React, TypeScript, and Node.js. From marketing sites to complex platforms with auth, dashboards, and APIs.",
    bullets: ["React & TypeScript frontends", "REST & GraphQL APIs", "Database design & integration"],
  },
  {
    emoji: "⚙️",
    title: "API & Backend Systems",
    description:
      "Scalable backend services that connect your frontend to your data. Authentication, third-party integrations, and business logic built to last.",
    bullets: ["Node.js / Express APIs", "Supabase & PostgreSQL", "Third-party integrations"],
  },
  {
    emoji: "☁️",
    title: "Cloud Infrastructure",
    description:
      "AWS-powered infrastructure that scales automatically and doesn't break. No servers to babysit — reliable, cost-effective cloud that works.",
    bullets: ["AWS (Lambda, S3, CloudFront)", "Terraform infrastructure as code", "CI/CD with GitHub Actions"],
  },
  {
    emoji: "📱",
    title: "Mobile App Development",
    description:
      "Native iOS apps built with Swift and SwiftUI — published to the App Store and designed to Apple's Human Interface Guidelines.",
    bullets: ["Swift & SwiftUI", "App Store publishing", "API & CMS integration"],
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const card = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export default function Services() {
  return (
    <section id="services" className="py-28 px-6">
      <div className="mx-auto max-w-6xl">
        {/* heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-indigo-400">
            What I do
          </p>
          <h2 className="text-4xl font-bold text-white">Services</h2>
          <p className="mt-4 text-gray-400">End-to-end engineering — from design to deployed.</p>
        </motion.div>

        {/* cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-5 md:grid-cols-2"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={card}
              whileHover={{ y: -6, borderColor: "rgba(99,102,241,0.4)", boxShadow: "0 0 32px rgba(99,102,241,0.12)" }}
              className="group rounded-2xl border border-white/5 bg-white/[0.03] p-8 transition-colors"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600/15 text-2xl ring-1 ring-indigo-500/20">
                {service.emoji}
              </div>
              <h3 className="mb-3 text-xl font-semibold text-white">{service.title}</h3>
              <p className="mb-5 text-sm leading-relaxed text-gray-400">{service.description}</p>
              <ul className="space-y-2">
                {service.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-sm text-gray-500">
                    <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
                    {b}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-12 text-center"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.04, boxShadow: "0 0 24px rgba(99,102,241,0.4)" }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-sm font-medium text-white"
          >
            Start a project →
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
