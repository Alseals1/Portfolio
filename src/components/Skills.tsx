import { motion } from "motion/react";

const skillGroups = [
  {
    category: "Frontend",
    skills: ["React", "TypeScript", "Astro", "Tailwind CSS", "TanStack", "Zod", "SwiftUI"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express", "GraphQL", "REST APIs", "Supabase", "Payload CMS", "Strapi"],
  },
  {
    category: "Cloud & DevOps",
    skills: ["AWS Lambda", "S3 / CloudFront", "API Gateway", "DynamoDB", "Terraform", "Docker", "GitHub Actions", "Cloudflare"],
  },
  {
    category: "Mobile",
    skills: ["Swift", "SwiftUI", "UIKit", "Xcode", "App Store Publishing"],
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "MongoDB", "DynamoDB", "Supabase"],
  },
  {
    category: "Tools",
    skills: ["Git", "VS Code", "Xcode", "Agile / Scrum", "MVVM / MVC", "CI/CD Pipelines"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6 border-t border-white/5">
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
            Tech stack
          </p>
          <h2 className="text-4xl font-bold text-white">Skills</h2>
          <p className="mt-4 text-gray-400">Tools I use to build and ship production software.</p>
        </motion.div>

        {/* groups */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ borderColor: "rgba(99,102,241,0.3)", boxShadow: "0 0 24px rgba(99,102,241,0.07)" }}
              className="rounded-2xl border border-white/5 bg-white/[0.03] p-6"
            >
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-indigo-400">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, j) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 + j * 0.04, duration: 0.3 }}
                    className="rounded-md border border-white/5 bg-white/5 px-3 py-1 text-sm text-gray-300"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
