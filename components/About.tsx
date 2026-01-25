'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiDownload } from 'react-icons/fi'

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-white dark:bg-black transition-colors duration-300">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white dark:from-black via-purple-900/10 dark:via-purple-900/10 via-purple-100/10 to-white dark:to-black" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Photo Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative group flex justify-center"
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20 blur-xl group-hover:opacity-30 transition duration-300" />
              
              {/* Photo container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-purple-500/30 group-hover:border-purple-500/50 transition-all duration-300">
                <motion.img
                  src="/dev_profile.jpg"
                  alt="Nikhita More"
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-full border-2 border-purple-500/20 animate-pulse" />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative group"
          >
            {/* Glow effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-20 blur transition duration-300" />
            
            <div className="relative bg-gray-100 dark:bg-gray-900 rounded-2xl p-8 border border-gray-300 dark:border-gray-800 hover:border-purple-500/50 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                Senior Software Engineer
              </h3>
              <p className="text-gray-700 dark:text-gray-400 mb-4 leading-relaxed">
                Senior Software Engineer with 5+ years of experience building scalable web applications and innovative solutions. 
                Currently working at Red Hat India, where I've engineered platforms enabling 15,000+ deployments and built AI-powered 
                documentation systems. Passionate about full-stack development, performance optimization, and creating impactful solutions.
              </p>
              <p className="text-gray-700 dark:text-gray-400 mb-6 leading-relaxed">
                I specialize in React, Next.js, TypeScript, Python, and cloud technologies. I enjoy solving complex problems, 
                mentoring teams, and delivering high-quality software that makes a difference.
              </p>
              <motion.a
                href="/Nikhita_More.pdf"
                download="Nikhita_More.pdf"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-semibold text-white shadow-lg shadow-purple-500/50 hover:shadow-purple-500/75 transition-shadow relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <FiDownload />
                  Download CV
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={false}
                />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { title: 'Full Stack Development', desc: 'React, Next.js, TypeScript, Python, FastAPI', icon: '⚡' },
              { title: 'Cloud & DevOps', desc: 'OpenShift, Docker, CI/CD pipelines, GitLab', icon: '☁️' },
              { title: 'AI & Machine Learning', desc: 'GenAI, LLaMA, RAG Solutions, MCP Server', icon: '🤖' },
              { title: 'Performance Optimization', desc: '70% load time reduction, accessibility focus', icon: '🚀' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative group bg-gray-100 dark:bg-gray-900 rounded-xl p-6 border border-gray-300 dark:border-gray-800 hover:border-purple-500/50 transition-all cursor-default"
              >
                {/* Glow effect on hover */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl opacity-0 group-hover:opacity-10 blur transition duration-300" />
                <div className="relative">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h4 className="text-lg font-semibold mb-2 text-purple-400">{item.title}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
