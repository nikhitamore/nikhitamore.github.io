'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface Skill {
  name: string
  level: number
  icon?: string
}

const skillCategories = [
  {
    category: 'Programming Languages',
    skills: [
      { name: 'TypeScript', level: 95 },
      { name: 'JavaScript (ES6)', level: 95 },
      { name: 'Python', level: 90 },
      { name: 'HTML5/CSS3', level: 95 },
      { name: 'SQL', level: 85 },
      { name: 'PowerShell', level: 75 },
    ],
  },
  {
    category: 'Frameworks & Tools',
    skills: [
      { name: 'React.js', level: 95 },
      { name: 'Next.js', level: 95 },
      { name: 'FastAPI', level: 90 },
      { name: 'Flask', level: 85 },
      { name: 'Docker', level: 90 },
      { name: 'GitLab CI/CD', level: 90 },
      { name: 'OpenShift', level: 85 },
      { name: 'Backstage', level: 85 },
    ],
  },
  {
    category: 'Databases & AI',
    skills: [
      { name: 'MongoDB', level: 90 },
      { name: 'MySQL', level: 85 },
      { name: 'Qdrant DB', level: 85 },
      { name: 'Oracle DB', level: 80 },
      { name: 'GenAI / LLaMA', level: 85 },
      { name: 'RAG Solutions', level: 85 },
      { name: 'MCP Server', level: 85 },
    ],
  },
]

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="skills" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-pink-900/10 to-black" />
      
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
              Skills & Technologies
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              className="relative group"
            >
              {/* Glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-20 blur transition duration-300" />
              
              <div className="relative bg-gray-900 rounded-2xl p-6 border border-gray-800 hover:border-purple-500/50 transition-all duration-300 h-full">
                <h3 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                  {category.category}
                </h3>
                
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-white font-medium">{skill.name}</span>
                        <span className="text-gray-400 text-sm">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : {}}
                          transition={{ duration: 1, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                          className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full relative"
                        >
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={inView ? { opacity: 1 } : {}}
                            transition={{ duration: 0.5, delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.5 }}
                            className="absolute inset-0 bg-white/20 animate-pulse"
                          />
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional skills grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold mb-8 text-center text-gray-300">Additional Skills</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'ServiceNow', 'Figma', 'Websso', 'Agile', 'Jira Automation',
              'LDAP', 'GitHub', 'GitLab', 'Data Structures', 'Algorithms',
              'OOP', 'Linux', 'Bootstrap', 'Accessibility'
            ].map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.8 + index * 0.05 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="px-4 py-2 bg-gray-900 rounded-lg border border-gray-800 hover:border-purple-500/50 transition-all cursor-default"
              >
                <span className="text-gray-300 text-sm">{skill}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
