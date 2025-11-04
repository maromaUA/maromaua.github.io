import { motion } from "framer-motion";

export const Hero = () => {
     return (
    <section className="min-h-screen flex flex-col justify-center items-start px-8 bg-[#070707] text-slate-100">
      
      {/* Заголовок
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold "
      >
        Roman Marchuk
      </motion.h1> */}
      {/* <motion.h1
  className="text-5xl font-bold mb-4"
  animate={{ color: ["#4f46e5", "#ec4899", "#f50bc6", "#4f46e5"] }}
  transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
>
  Roman Marchuk
</motion.h1> */}
<motion.h1
  className="text-5xl font-bold mb-4"
  animate={{ color: ["#94A3B8", "#10B981", "#10B981", "#94A3B8"] }}
  transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
>
  Roman Marchuk
</motion.h1>
{/* <h1 className="text-5xl font-bold mb-4">
        <motion.span
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear",
          }}
          className="bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-500 bg-[length:200%_200%] bg-clip-text text-transparent"
        >
          Roman Marchuk
        </motion.span>
      </h1> */}
      {/* <motion.h1
  className="text-5xl font-bold mb-4 text-indigo-500 drop-shadow-lg"
  animate={{
    textShadow: [
      "0 0 10px #6366f1",
      "0 0 20px #ec4899",
      "0 0 10px #f59e0b",
      "0 0 10px #6366f1",
    ],
  }}
  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
>
  Roman Marchuk
</motion.h1> */}
 
      {/* Подзаголовок / tagline */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-4 text-lg text-slate-400 max-w-xl"
      >
        Full Stack Developer with a solid foundation in Cloud Engineering.
        <br/>I build scalable, secure, and high-performance web applications using React, Node.js, and AWS.
      </motion.p>

      {/* CTA кнопки */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-6 flex gap-4"
      >
        <a
          href="#projects"
          className="bg-emerald-500 text-black font-medium px-6 py-3 rounded-md hover:bg-emerald-600 transition-colors"
        >
          View Projects
        </a>
        <a
          href="#about"
          className="border border-slate-400 text-slate-400 font-medium px-6 py-3 rounded-md hover:border-emerald-500 hover:text-emerald-500 transition-colors"
        >
          About Me
        </a>
      </motion.div>
      
    </section>
  );
}
