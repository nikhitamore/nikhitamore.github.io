'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi'

interface ExperienceItem {
  title: string
  company: string
  location: string
  period: string
  description: string[]
  technologies: string[]
}

const experiences: ExperienceItem[] = [
  {
    title: 'Senior Software Engineer',
    company: 'Red Hat India Private Limited',
    location: 'Pune, India',
    period: 'Jan 2023 - Present',
    description: [
      'Engineered the entire SPAship Web Manager platform, enabling over 15,000 deployments of static and SSR applications. Optimized performance, reduced load times by ~70%, and improved accessibility across internal teams',
      'Built DocsBot, an AI-powered internal documentation system, managing full project lifecycle from proof of concept to production deployment using GenAI, Python, and Qdrant-DB',
      'Implemented Backstage plugins for DocsBot, AI Registry, and Audit & Compliance Hub, including MCP server functionalities and data integration actions (LDAP, GitLab, GitHub)',
      'Led development of the XE Compass homepage and dashboards, improving navigation, accessibility, and performance for internal users',
      'Architected and delivered the Audit Access Manager (Compliance Hub) in React and Next.js to automate quarterly and yearly internal audits, adopted by 25+ teams managing 600+ users',
      'Implemented a Notifications UI and service for the Red Hat Customer Portal, delivering real-time alerts to 25M+ users with focus on code quality, accessibility, and performance',
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Python', 'FastAPI', 'GenAI', 'Qdrant DB', 'Docker', 'OpenShift', 'GitLab CI/CD'],
  },
  {
    title: 'Software Engineer II',
    company: 'UBS Business Solutions',
    location: 'Pune, India',
    period: 'July 2019 - Dec 2022',
    description: [
      'Led a team of 3, managing application support and agile delivery, ensuring timely feature releases and system stability',
      'Developed web UIs across 6 projects (React, HTML5, CSS3) and web APIs (Python, Flask), implementing modern web standards and best practices',
      'Built CI/CD pipelines (GitLab), designed databases (MySQL), and automated deployments, improving development efficiency and release reliability',
      'Migrated 4000+ servers from legacy systems to AppDynamics, deployed agents, and created 20+ monitoring dashboards for operational insights',
      'Mentored 4+ junior developers and recent graduates, improving technical skills and fostering team growth',
    ],
    technologies: ['React', 'JavaScript', 'Python', 'Flask', 'MySQL', 'GitLab CI/CD', 'HTML5', 'CSS3'],
  },
]

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="experience" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-white dark:bg-black transition-colors duration-300">
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
              Experience
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-pink-500 to-purple-500 transform md:-translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`relative flex items-center ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-purple-500 rounded-full border-4 border-black transform md:-translate-x-1/2 z-10" />

                  {/* Content card */}
                  <div
                    className={`w-full md:w-5/12 ${
                      isEven ? 'md:pr-8 ml-16 md:ml-0' : 'md:pl-8 ml-16 md:ml-auto'
                    }`}
                  >
                    <motion.div
                      whileHover={{ scale: 1.02, y: -5 }}
                      className="relative group"
                    >
                      {/* Glow effect */}
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl opacity-0 group-hover:opacity-20 blur transition duration-300" />
                      
                      <div className="relative bg-gray-100 dark:bg-gray-900 rounded-xl p-6 border border-gray-300 dark:border-gray-800 hover:border-purple-500/50 transition-all duration-300">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{exp.title}</h3>
                            <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-2">
                              <span className="flex items-center gap-1">
                                <FiBriefcase className="text-purple-400" />
                                {exp.company}
                              </span>
                            </div>
                            <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-500">
                              <span className="flex items-center gap-1">
                                <FiMapPin />
                                {exp.location}
                              </span>
                              <span className="flex items-center gap-1">
                                <FiCalendar />
                                {exp.period}
                              </span>
                            </div>
                          </div>
                        </div>

                        <ul className="space-y-2 mb-4">
                          {exp.description.map((item, i) => (
                            <li key={i} className="text-gray-700 dark:text-gray-400 text-sm flex items-start gap-2">
                              <span className="text-purple-400 mt-1">▹</span>
                              {item}
                            </li>
                          ))}
                        </ul>

                        <div className="flex flex-wrap gap-2 mt-4">
                          {exp.technologies.map((tech, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 text-xs bg-purple-500/10 text-purple-400 rounded-full border border-purple-500/20"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
