import { motion } from "motion/react";
import { projects } from "../data/projects";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.13 } },
};

const card = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export default function Projects() {
  const featured = projects.filter((p) => p.featured);

  return (
    <section id="projects" className="py-28 px-6 border-t border-white/5">
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
            Proof of work
          </p>
          <h2 className="text-4xl font-bold text-white">Featured Projects</h2>
          <p className="mt-4 text-gray-400">Real products, shipped to real users.</p>
        </motion.div>

        {/* cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-5 md:grid-cols-2 lg:grid-cols-2"
        >
          {featured.map((project) => (
            <motion.article
              key={project.title}
              variants={card}
              whileHover={{ y: -6, borderColor: "rgba(99,102,241,0.35)", boxShadow: "0 0 36px rgba(99,102,241,0.10)" }}
              className="flex flex-col rounded-2xl border border-white/5 bg-white/[0.03] p-8 transition-colors"
            >
              <h3 className="mb-3 text-xl font-semibold text-white">{project.title}</h3>
              <p className="mb-5 text-sm leading-relaxed text-gray-400">{project.description}</p>

              {/* result callout */}
              <div className="mb-6 rounded-xl border border-green-500/20 bg-green-500/5 px-4 py-3">
                <p className="text-xs font-semibold uppercase tracking-wide text-green-400">Result</p>
                <p className="mt-1 text-sm text-gray-300">{project.outcome}</p>
              </div>

              {/* stack badges */}
              <div className="mt-auto flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-white/5 bg-white/5 px-2.5 py-1 text-xs text-gray-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* links */}
              <div className="mt-6 flex flex-wrap gap-4 border-t border-white/5 pt-5 text-sm">
                {project.github && (
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 3 }}
                    className="text-gray-400 transition-colors hover:text-white"
                  >
                    GitHub →
                  </motion.a>
                )}
                {project.live && (
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 3 }}
                    className="text-indigo-400 transition-colors hover:text-indigo-300"
                  >
                    Live site →
                  </motion.a>
                )}
                {project.appStore && (
                  <motion.a
                    href={project.appStore}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 3 }}
                    className="text-indigo-400 transition-colors hover:text-indigo-300"
                  >
                    App Store →
                  </motion.a>
                )}
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* view all */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-10 text-center"
        >
          <motion.a
            href="https://github.com/Alseals1"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ x: 4 }}
            className="inline-flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-white"
          >
            View all on GitHub →
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
