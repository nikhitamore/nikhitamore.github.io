'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiGithub, FiExternalLink, FiShield, FiPackage, FiBook, FiBell, FiUsers, FiBarChart } from 'react-icons/fi'

interface Project {
  title: string
  description: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
  image?: string
  icon?: React.ComponentType<{ size?: number; className?: string }>
}

const personalProjects: Project[] = [
  {
    title: 'AI-Powered Brochure Generator',
    description: 'Make AI-powered brochure generator that scrapes and navigates company websites intelligently.',
    technologies: ['AI', 'Web Scraping', 'Python', 'LLM'],
    githubUrl: 'https://github.com/nikhitamore',
    image: '/projects/brochure-generator.png',
  },
  {
    title: 'Multi-modal Customer Support Agent',
    description: 'Build Multi-modal customer support agent for an airline with UI and function-calling.',
    technologies: ['AI', 'Multi-modal', 'Function Calling', 'Python', 'React'],
    githubUrl: 'https://github.com/nikhitamore',
    image: '/projects/customer-suppor.jpg',
  },
  {
    title: 'Meeting Minutes & Action Items Generator',
    description: 'Develop Tool that creates meeting minutes and action items from audio using both open- and closed-source models.',
    technologies: ['AI', 'Audio Processing', 'LLM', 'Python', 'Speech-to-Text'],
    githubUrl: 'https://github.com/nikhitamore',
    image: '/projects/meeting-minutes.png',
  },
  {
    title: 'Python to C++ Code Optimizer',
    description: 'Make AI that converts Python code to optimized C++, boosting performance by 60,000x!',
    technologies: ['AI', 'Code Generation', 'Python', 'C++', 'LLM'],
    githubUrl: 'https://github.com/nikhitamore',
    image: '/projects/code-optimizer.png',
  },
  {
    title: 'AI Knowledge Worker with RAG',
    description: 'Build AI knowledge-worker using RAG to become an expert on all company-related matters.',
    technologies: ['RAG', 'AI', 'LLM', 'Python', 'Vector Database'],
    githubUrl: 'https://github.com/nikhitamore',
    image: '/projects/rag-knowledg.png',
  },
  {
    title: 'AI-Powered Price Prediction & Deal Spotter (Capstone Project)',
    description: 'A comprehensive capstone project spanning three phases: Part A - Predict product prices from short descriptions using Frontier models; Part B - Fine-tuned open-source model to compete with Frontier models in price prediction; Part C - Autonomous multi-agent system collaborating to spot deals and notify users of special bargains.',
    technologies: ['Machine Learning', 'LLM', 'Frontier Models', 'Fine-tuning', 'Multi-Agent Systems', 'AI', 'Python', 'Automation'],
    githubUrl: 'https://github.com/nikhitamore',
    image: '/projects/price-prediction.png',
  },
]

const professionalWork: Project[] = [
  {
    title: 'Audit Access Manager (Compliance Hub)',
    description: 'Developed Audit Access Manager to automate quarterly and yearly internal audits. Integrated multiple data sources (LDAP, GitLab, GitHub) and implemented automated Jira ticket creation, parent audit epic, updating comments, and live activity stream tracking. Streamlined internal review workflows and enabled automated generation of PDF audit summaries.',
    technologies: ['React', 'Next.js', 'LDAP', 'GitLab', 'GitHub', 'Jira Automation'],
    icon: FiShield,
  },
  {
    title: 'SPAship Web Manager',
    description: 'Built the SPAship Web Manager platform to manage SPA deployments, supporting both static and containerized applications. Implemented key features: deployment creation/configuration, log viewing, symlink and virtual path management, uptime monitoring, access management and visual dashboards. Enabled over 15,000 deployments with 70% load time reduction.',
    technologies: ['Next.js', 'TypeScript', 'MongoDB', 'HTML5', 'CSS3', 'Websso', 'OpenShift', 'Docker'],
    icon: FiPackage,
  },
  {
    title: 'DocsBot - AI Documentation System',
    description: 'Built DocsBot, an AI-powered internal documentation chatbot for streamlining access to technical guides, FAQs, and troubleshooting. Deployed as a standalone tool and as a Backstage plugin, integrated with MCP server and multiple data sources (PDFs, Confluence, Backstage docs, Slack). Enhanced accessibility and ease of use for internal teams.',
    technologies: ['GenAI', 'Python', 'FastAPI', 'React', 'TypeScript', 'Qdrant', 'Websso', 'OpenShift', 'Docker'],
    icon: FiBook,
  },
  {
    title: 'Red Hat Customer Portal Notifications',
    description: 'Implemented a Notifications UI and service for the Red Hat Customer Portal, delivering real-time alerts to 25M+ users. Focused on code quality, accessibility, performance, and monitoring through automated testing and analytics.',
    technologies: ['React', 'TypeScript', 'CSS3', 'Performance Optimization'],
    icon: FiBell,
  },
  {
    title: 'DIGIHUDDLE - IT Support Tool',
    description: 'Developed a tool for IT Support Teams to manage daily huddles with features such as Assign, Return, Add/Remove items, Custom Emails, Acknowledgements, Team Workload View, and Management Summaries.',
    technologies: ['React', 'JavaScript', 'MySQL', 'HTML5', 'CSS3', 'Websso', 'Python', 'Flask', 'Docker'],
    icon: FiUsers,
  },
  {
    title: 'DIGIFEED - Incident Visualization',
    description: 'Developed a tool for business and mission control to visualize active incidents and trading volumes with dashboards, summary views, news ticker, and calendar features.',
    technologies: ['React', 'JavaScript', 'MySQL', 'HTML5', 'CSS3', 'Python Flask', 'REST API', 'Oracle DB'],
    icon: FiBarChart,
  },
]

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="projects" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-white dark:bg-black transition-colors duration-300">
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
              Featured Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-4" />
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A collection of personal projects I've worked on, showcasing my skills and experience
          </p>
        </motion.div>

        {/* Personal Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {personalProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Glow effect on hover */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl opacity-0 group-hover:opacity-20 blur transition duration-300" />
              
              <div className="relative bg-gray-100 dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-300 dark:border-gray-800 hover:border-purple-500/50 transition-all duration-300 h-full flex flex-col">
                {/* Project image */}
                <div className="relative h-48 bg-gradient-to-br from-purple-100/50 dark:from-purple-900/50 to-pink-100/50 dark:to-pink-900/50 overflow-hidden">
                  {project.image ? (
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-6xl opacity-20">🚀</div>
                    </div>
                  )}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-white/80 dark:from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={false}
                  />
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-purple-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-400 text-sm mb-4 line-clamp-4">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 text-xs bg-purple-500/10 text-purple-400 rounded border border-purple-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    {project.githubUrl && (
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-white transition-colors"
                      >
                        <FiGithub size={20} />
                        <span className="text-sm">Code</span>
                      </motion.a>
                    )}
                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-white transition-colors"
                      >
                        <FiExternalLink size={20} />
                        <span className="text-sm">Live</span>
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Professional Work Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                Professional Work
              </span>
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-4" />
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Key projects and platforms I've built during my professional career
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {professionalWork.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: (personalProjects.length + index) * 0.1 }}
                className="group relative"
              >
                {/* Glow effect on hover */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl opacity-0 group-hover:opacity-20 blur transition duration-300" />
                
                <div className="relative bg-gray-100 dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-300 dark:border-gray-800 hover:border-purple-500/50 transition-all duration-300 h-full flex flex-col">
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-start gap-4 mb-4">
                      {project.icon && (
                        <div className="p-3 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-lg border border-purple-500/20 group-hover:border-purple-500/50 transition-colors flex-shrink-0">
                          <project.icon className="text-purple-500 dark:text-purple-400" size={28} />
                        </div>
                      )}
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-purple-400 transition-colors">
                          {project.title}
                        </h3>
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-700 dark:text-gray-400 text-sm mb-4 line-clamp-4">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 text-xs bg-purple-500/10 text-purple-400 rounded border border-purple-500/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
