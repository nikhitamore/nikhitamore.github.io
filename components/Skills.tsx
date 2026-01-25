'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  SiTypescript, SiJavascript, SiPython, SiHtml5, SiCss3, SiMicrosoftsqlserver,
  SiReact, SiNextdotjs, SiDocker, SiGitlab, SiMongodb, SiMysql, SiOracle,
  SiOpenai, SiFigma, SiGithub, SiGitlab as SiGitlabIcon, SiLinux, SiBootstrap,
  SiServicenow, SiKubernetes
} from 'react-icons/si'
import { FaBrain, FaDatabase, FaRobot, FaCloud } from 'react-icons/fa'

// Skill logo mapping
const skillLogos: { [key: string]: React.ComponentType<any> } = {
  'TypeScript': SiTypescript,
  'JavaScript (ES6)': SiJavascript,
  'Python': SiPython,
  'HTML5/CSS3': SiHtml5,
  'SQL': SiMicrosoftsqlserver,
  'PowerShell': SiMicrosoftsqlserver,
  'Linux': SiLinux,
  'Data Structures': SiPython,
  'Algorithms': SiPython,
  'Object-Oriented Programming': SiPython,
  'React.js': SiReact,
  'Next.js': SiNextdotjs,
  'FastAPI': SiPython,
  'Flask': SiPython,
  'Pandas': SiPython,
  'Docker': SiDocker,
  'GitLab CI/CD': SiGitlab,
  'OpenShift': SiKubernetes,
  'ServiceNow': SiServicenow,
  'Backstage': SiReact,
  'Figma': SiFigma,
  'Websso': FaCloud,
  'Agile Project Management': FaCloud,
  'Bootstrap': SiBootstrap,
  'MongoDB': SiMongodb,
  'MySQL': SiMysql,
  'Qdrant DB': FaDatabase,
  'Oracle DB': SiOracle,
  'GenAI': SiOpenai,
  'LLaMA': FaBrain,
  'RAG Solutions': FaBrain,
  'MCP Server': FaRobot,
  'Python ML Libraries': SiPython,
  'GitHub': SiGithub,
  'GitLab': SiGitlabIcon,
}

const skillCategories = [
  {
    category: 'Programming Languages',
    icon: '💻',
    skills: [
      'TypeScript', 'JavaScript (ES6)', 'Python', 'HTML5/CSS3', 'SQL', 'PowerShell', 'Linux',
      'Data Structures', 'Algorithms', 'Object-Oriented Programming'
    ],
  },
  {
    category: 'Frameworks & Tools',
    icon: '⚡',
    skills: [
      'Next.js', 'React.js', 'Flask', 'FastAPI', 'Pandas', 'Docker', 'GitLab CI/CD', 
      'OpenShift', 'ServiceNow', 'Backstage', 'Figma', 'Websso', 'Agile Project Management', 'Bootstrap'
    ],
  },
  {
    category: 'Databases',
    icon: '🗄️',
    skills: [
      'MySQL', 'MongoDB', 'Qdrant DB', 'Oracle DB'
    ],
  },
  {
    category: 'AI & Machine Learning',
    icon: '🤖',
    skills: [
      'GenAI', 'LLaMA', 'MCP Server', 'RAG Solutions', 'Python ML Libraries'
    ],
  },
  {
    category: 'Cloud & DevOps',
    icon: '☁️',
    skills: [
      'OpenShift', 'Docker', 'GitLab CI/CD'
    ],
  },
]

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="skills" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-white dark:bg-black transition-colors duration-300">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white dark:from-black via-blue-900/10 dark:via-blue-900/10 via-blue-100/10 to-white dark:to-black" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-cyan-700 bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-700 to-cyan-600 mx-auto" />
        </motion.div>

        {/* First Row: Programming & Frameworks */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {skillCategories.slice(0, 2).map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              className="relative group"
            >
              {/* Subtle glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-700/10 to-cyan-600/10 rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-300" />
              
              <div className="relative bg-gray-50/50 dark:bg-gray-900/50 rounded-2xl p-6 border border-gray-200/50 dark:border-gray-800/50 hover:border-blue-700/30 dark:hover:border-blue-700/30 transition-all duration-300 h-full backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-2xl opacity-70">{category.icon}</span>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                    {category.category}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => {
                    const IconComponent = skillLogos[skill]
                    return (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.3, delay: categoryIndex * 0.2 + skillIndex * 0.05 }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="px-3 py-1.5 bg-white/60 dark:bg-gray-800/60 rounded-lg border border-gray-200/50 dark:border-gray-700/50 hover:border-blue-600/40 dark:hover:border-blue-700/40 transition-all cursor-default backdrop-blur-sm flex items-center gap-2"
                      >
                        {IconComponent && (
                          <span className="text-gray-600 dark:text-gray-400">
                            <IconComponent className="w-4 h-4" />
                          </span>
                        )}
                        <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">
                          {skill}
                        </span>
                      </motion.div>
                    )
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Second Row: Databases, AI & Cloud */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {skillCategories.slice(2).map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: (categoryIndex + 2) * 0.2 }}
              className="relative group"
            >
              {/* Subtle glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-700/10 to-cyan-600/10 rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-300" />
              
              <div className="relative bg-gray-50/50 dark:bg-gray-900/50 rounded-2xl p-6 border border-gray-200/50 dark:border-gray-800/50 hover:border-blue-700/30 dark:hover:border-blue-700/30 transition-all duration-300 h-full backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-2xl opacity-70">{category.icon}</span>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                    {category.category}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => {
                    const IconComponent = skillLogos[skill]
                    return (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.3, delay: (categoryIndex + 2) * 0.2 + skillIndex * 0.05 }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="px-3 py-1.5 bg-white/60 dark:bg-gray-800/60 rounded-lg border border-gray-200/50 dark:border-gray-700/50 hover:border-blue-600/40 dark:hover:border-blue-700/40 transition-all cursor-default backdrop-blur-sm flex items-center gap-2"
                      >
                        {IconComponent && (
                          <span className="text-gray-600 dark:text-gray-400">
                            <IconComponent className="w-4 h-4" />
                          </span>
                        )}
                        <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">
                          {skill}
                        </span>
                      </motion.div>
                    )
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mt-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-gray-300">Additional Tools & Technologies</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">Tools and technologies I work with</p>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              'Jira Automation', 'LDAP', 'GitHub', 'GitLab', 'Accessibility'
            ].map((skill, index) => {
              const IconComponent = skillLogos[skill]
              return (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 1.0 + index * 0.03 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-3 py-1.5 bg-white/60 dark:bg-gray-800/60 rounded-lg border border-gray-200/50 dark:border-gray-700/50 hover:border-purple-400/40 dark:hover:border-purple-500/40 transition-all cursor-default backdrop-blur-sm flex items-center gap-2"
                >
                  {IconComponent && (
                    <span className="text-gray-600 dark:text-gray-400">
                      <IconComponent className="w-4 h-4" />
                    </span>
                  )}
                  <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">{skill}</span>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
