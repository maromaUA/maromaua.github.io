import { motion } from "framer-motion";

export const AboutMe = () => {
  return (
    <section id="about" className="min-h-screen flex flex-col md:flex-row gap-15 md:gap-12 items-center px-8 md:px-16 py-16 bg-[#0a0a0a] text-slate-100">
      
      <motion.div
        className="max-w-xl"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold mb-4">About Me</h2>
        <p className="mb-4 text-slate-400">
          I am a developer passionate about building full stack high-quality products that solve real-world problems and provide meaningful experiences for users. I enjoy working across the entire stack, from designing clean and responsive frontends to implementing robust backend systems.
        </p>
        <p className="mb-4 text-slate-400">
          I also completed the AWS Cloud Practitioner program, which enhanced my backend development skills and gave me DevOps knowledge. This experience taught me how to design and deploy scalable applications in the cloud, automate workflows, and optimize system performance.
        </p>
        <p className="mb-4 text-slate-400">I see myself as an engineer, constantly learning, improving, and applying best practices to create efficient, reliable, and maintainable products. I enjoy tackling challenging problems, breaking them into manageable solutions, and delivering results that I can be proud of.</p>
        <p className="mb-4 text-slate-400">I love traveling and have lived in several countries, which has strengthened my adaptability, cultural awareness, and ability to work with diverse teams. I enjoy learning new languages, exploring different cultures, and continuously expanding my horizons to become the best version of myself.</p>
        <div className="flex gap-4 mt-6">
          <a href="#projects" className="bg-emerald-500 text-black px-6 py-3 rounded-md font-medium hover:bg-emerald-600 transition-colors">
            View Projects
          </a>
          <a href="#contact" className="border border-slate-400 text-slate-400 px-6 py-3 rounded-md font-medium hover:border-emerald-500 hover:text-emerald-500 transition-colors">
            Contact Me
          </a>
        </div>
      </motion.div>
      <motion.div
        className="w-64 h-64 md:w-78 md:h-78 mb-8 md:mb-0 md:mr-12 shrink-0 rounded-full overflow-hidden border-4 border-emerald-500"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img src="/src/profile.jpg" alt="Roman Marchuk" className="w-full h-full object-cover" />
      </motion.div>
    </section>
  );
}




