import { motion } from "framer-motion";

const projects = [
  {
    name: "Language Learning App",
    description: "A full stack application for practicing languages with progressive difficulty levels.",
    tech: ["React","Tailwind","Node.js","AWS S3", "AWS Lambda", "AWS API Gateway", "AWS DynamoDB"],
    demo: "http://language-app-front-end.s3-website.eu-west-2.amazonaws.com/",
    github: "https://github.com/maromaUA/language-learn-app-front",
  },
  {
    name: "Classic snake game",
    description: "Classic snake game with user authentication and record tracking.",
    tech: ["React", "Redux", "Node.js", "Express", "REST API","MongoDB"],
    demo: "https://maromaua.github.io/snake-game/",
    github: "https://github.com/maromaUA/snake-game",
  },
  // добавляй остальные проекты
];

export const Projects = () => {
  return (
    <section id="projects" className="min-h-screen px-8 md:px-16 py-16 bg-[#0a0a0a] text-slate-100">
      <motion.h2
        className="text-4xl font-bold mb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Projects
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={project.name}
            className="bg-[#1a1a1a] rounded-lg shadow-md p-6 flex flex-col justify-between hover:scale-105 transition-transform"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <h3 className="text-2xl font-semibold mb-2">{project.name}</h3>
            <p className="text-slate-400 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="bg-[#0f0f0f] px-3 py-1 rounded text-sm text-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  className="bg-emerald-500 text-black px-3 py-1 rounded hover:bg-emerald-400 transition-colors"
                >
                  Demo
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  className="bg-slate-700 px-3 py-1 rounded hover:bg-slate-600 transition-colors"
                >
                  GitHub
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}




// const projects = [
//   {
//     name: "Language Learning App",
//     description: "Full stack app for practicing languages with spaced repetition and user progress tracking.",
//     tech: ["React", "Node.js", "MongoDB", "Tailwind"],
//     demo: "http://language-app-demo.com",
//     github: "https://github.com/username/language-app",
//     image: "https://via.placeholder.com/600x400?text=Language+App",
//   },
//   {
//     name: "Poker Analyzer",
//     description: "Interactive poker hand analysis tool with data visualization and EV calculations.",
//     tech: ["React", "TypeScript", "Chart.js"],
//     demo: "http://poker-analyzer-demo.com",
//     github: "https://github.com/username/poker-analyzer",
//     image: "https://via.placeholder.com/600x400?text=Poker+Analyzer",
//   },
//   {
//     name: "Portfolio Website",
//     description: "Responsive personal portfolio built with React and Tailwind CSS.",
//     tech: ["React", "Tailwind", "Framer Motion"],
//     demo: "#",
//     github: "https://github.com/username/portfolio",
//     image: "https://via.placeholder.com/600x400?text=Portfolio+Site",
//   },
// ];

// export const Projects = () => {
//   return (
//     <section
//       id="projects"
//       className="min-h-screen px-6 md:px-16 py-20 bg-[#0a0a0a] text-slate-100"
//     >
//       <motion.h2
//         className="text-4xl font-bold mb-12 text-center text-emerald-500"
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         My Projects
//       </motion.h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
//         {projects.map((project, index) => (
//           <motion.div
//             key={project.name}
//             className="relative group rounded-xl overflow-hidden shadow-lg bg-[#111]"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: index * 0.1 }}
//           >
//             {/* Project Image */}
//             <img
//               src={project.image}
//               alt={project.name}
//               className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
//             />

//             {/* Overlay */}
//             <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center text-center px-4">
//               <h3 className="text-2xl font-semibold mb-2 text-emerald-400">{project.name}</h3>
//               <p className="text-sm text-slate-300 mb-4">{project.description}</p>
//               <div className="flex flex-wrap gap-2 justify-center mb-4">
//                 {project.tech.map((tech) => (
//                   <span
//                     key={tech}
//                     className="bg-emerald-500/20 text-emerald-300 px-2 py-1 rounded text-xs"
//                   >
//                     {tech}
//                   </span>
//                 ))}
//               </div>
//               <div className="flex gap-4">
//                 {project.demo && (
//                   <a
//                     href={project.demo}
//                     target="_blank"
//                     className="bg-emerald-500 text-black px-3 py-1 rounded hover:bg-emerald-400 transition-colors"
//                   >
//                     Demo
//                   </a>
//                 )}
//                 {project.github && (
//                   <a
//                     href={project.github}
//                     target="_blank"
//                     className="bg-slate-700 px-3 py-1 rounded hover:bg-slate-600 transition-colors"
//                   >
//                     GitHub
//                   </a>
//                 )}
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }
