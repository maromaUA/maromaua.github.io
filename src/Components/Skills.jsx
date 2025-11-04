import { motion } from "framer-motion";

const skills = {
  Frontend: ["React","Redux", "TypeScript", "JavaScript", "Tailwind", "HTML/CSS", ],
  Backend: ["Node.js", "Express", "REST API", "Postman", "MongoDB"],
  DevOps: ["AWS", "Docker", "CI/CD", "Linux", "Networking"],
  AI: ["Python","Voice Recognition", "Image Recognition"]
};

export const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen px-8 md:px-16 py-16 bg-[#0f0f0f] text-slate-100"
    >
      <motion.h2
        className="text-4xl font-bold mb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Skills
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {Object.entries(skills).map(([category, list], index) => (
          <motion.div
            key={category}
            className="bg-[#1a1a1a] p-6 rounded-lg shadow-md flex flex-col text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <h3 className="text-3xl font-semibold mb-4 text-emerald-500">{category}</h3>
            <div className="flex flex-col justify-center items-center gap-2">
              {list.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-2xl rounded text-center text-slate-200 hover:bg-emerald-500 hover:text-black transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
