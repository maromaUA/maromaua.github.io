import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

export const ContactSection = () => {
  return (
    <section
      id="contact"
      className="py-20 bg-[#070707] text-white border-t border-gray-800"
    >
      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contact Me
        </motion.h2>

        <motion.p
          className="text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          I’m always open to new opportunities — full-time, remote, or in-office.
Feel free to reach out or connect via social platforms.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row justify-center items-center gap-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <a
            href="mailto:roman.marchuk.dev@gmail.com"
            className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white font-medium px-6 py-3 rounded-xl shadow-md transition"
          >
            <FaEnvelope size={18} /> Email
          </a>

          <a
            href="https://www.linkedin.com/in/romanmarchuk/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white font-medium px-6 py-3 rounded-xl shadow-md transition"
          >
            <FaLinkedin size={18} /> LinkedIn
          </a>

          <a
            href="https://github.com/maromaUA"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white font-medium px-6 py-3 rounded-xl shadow-md transition"
          >
            <FaGithub size={18} /> GitHub
          </a>
        </motion.div>

        <motion.form
          action="https://formspree.io/f/mblpvazg"
          method="POST"
          className="max-w-md mx-auto mt-12 flex flex-col gap-4"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>
          <button
            type="submit"
            className=" bg-emerald-500 hover:bg-gray-700 text-black font-medium px-6 py-3 rounded-xl shadow-md transition"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}
