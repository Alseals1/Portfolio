import { motion } from "motion/react";

const FORMSPREE_ID = "mjgjzwdk";

const inputClass =
  "w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-gray-600 outline-none transition focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500";

const selectClass =
  "w-full rounded-lg border border-white/10 bg-[#0d1117] px-4 py-3 text-sm text-white outline-none transition focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500";

export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6 border-t border-white/5">
      <div className="mx-auto max-w-2xl">
        {/* heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 text-center"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-indigo-400">
            Work together
          </p>
          <h2 className="text-4xl font-bold text-white">Let's Talk</h2>
          <p className="mt-4 text-gray-400">
            Tell me about your project and I'll get back to you within 24 hours.
          </p>
        </motion.div>

        {/* form */}
        <motion.form
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          action={`https://formspree.io/f/${FORMSPREE_ID}`}
          method="POST"
          className="space-y-5"
        >
          {/* name + email */}
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-400">
                Name
              </label>
              <input id="name" type="text" name="name" required placeholder="Jane Smith" className={inputClass} />
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-400">
                Email
              </label>
              <input id="email" type="email" name="email" required placeholder="jane@company.com" className={inputClass} />
            </div>
          </div>

          {/* project type */}
          <div>
            <label htmlFor="project_type" className="mb-2 block text-sm font-medium text-gray-400">
              What do you need?
            </label>
            <select id="project_type" name="project_type" required className={selectClass}>
              <option value="" disabled>Select a service...</option>
              <option value="web_app">Web App Development</option>
              <option value="api_backend">API & Backend Systems</option>
              <option value="cloud_infra">Cloud Infrastructure</option>
              <option value="mobile_app">Mobile App (iOS)</option>
              <option value="other">Something else</option>
            </select>
          </div>

          {/* budget */}
          <div>
            <label htmlFor="budget" className="mb-2 block text-sm font-medium text-gray-400">
              Budget range
            </label>
            <select id="budget" name="budget" className={selectClass}>
              <option value="" disabled>Select a range...</option>
              <option value="under_1k">Under $1,000</option>
              <option value="1k_5k">$1,000 – $5,000</option>
              <option value="5k_10k">$5,000 – $10,000</option>
              <option value="10k_plus">$10,000+</option>
              <option value="not_sure">Not sure yet</option>
            </select>
          </div>

          {/* timeline */}
          <div>
            <label htmlFor="timeline" className="mb-2 block text-sm font-medium text-gray-400">
              Timeline
            </label>
            <select id="timeline" name="timeline" className={selectClass}>
              <option value="" disabled>When do you need this?</option>
              <option value="asap">ASAP (under 1 month)</option>
              <option value="1_3mo">1 – 3 months</option>
              <option value="3_6mo">3 – 6 months</option>
              <option value="exploring">Just exploring for now</option>
            </select>
          </div>

          {/* message */}
          <div>
            <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-400">
              Tell me about your project
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              placeholder="What are you building? What's the goal? Any specific requirements?"
              className={`${inputClass} resize-none`}
            />
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02, boxShadow: "0 0 28px rgba(99,102,241,0.45)" }}
            whileTap={{ scale: 0.97 }}
            className="w-full rounded-xl bg-indigo-600 px-6 py-3.5 text-sm font-medium text-white"
          >
            Send message →
          </motion.button>
        </motion.form>

        {/* alternate */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-8 text-center text-sm text-gray-500"
        >
          Prefer email?{" "}
          <a
            href="mailto:1seals.alandis@gmail.com"
            className="text-indigo-400 transition-colors hover:text-indigo-300"
          >
            1seals.alandis@gmail.com
          </a>
        </motion.p>
      </div>
    </section>
  );
}
