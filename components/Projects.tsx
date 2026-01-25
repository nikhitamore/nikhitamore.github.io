'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

interface Project {
  title: string
  description: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
  image?: string
}

const projects: Project[] = [
  {
    title: 'Audit Access Manager (Compliance Hub)',
    description: 'Developed Audit Access Manager to automate quarterly and yearly internal audits. Integrated multiple data sources (LDAP, GitLab, GitHub) and implemented automated Jira ticket creation, parent audit epic, updating comments, and live activity stream tracking. Streamlined internal review workflows and enabled automated generation of PDF audit summaries.',
    technologies: ['React', 'Next.js', 'LDAP', 'GitLab', 'GitHub', 'Jira Automation'],
    githubUrl: '#',
    liveUrl: '#',
  },
  {
    title: 'SPAship Web Manager',
    description: 'Built the SPAship Web Manager platform to manage SPA deployments, supporting both static and containerized applications. Implemented key features: deployment creation/configuration, log viewing, symlink and virtual path management, uptime monitoring, access management and visual dashboards. Enabled over 15,000 deployments with 70% load time reduction.',
    technologies: ['Next.js', 'TypeScript', 'MongoDB', 'HTML5', 'CSS3', 'Websso', 'OpenShift', 'Docker'],
    githubUrl: '#',
    liveUrl: '#',
  },
  {
    title: 'DocsBot - AI Documentation System',
    description: 'Built DocsBot, an AI-powered internal documentation chatbot for streamlining access to technical guides, FAQs, and troubleshooting. Deployed as a standalone tool and as a Backstage plugin, integrated with MCP server and multiple data sources (PDFs, Confluence, Backstage docs, Slack). Enhanced accessibility and ease of use for internal teams.',
    technologies: ['GenAI', 'Python', 'FastAPI', 'React', 'TypeScript', 'Qdrant', 'Websso', 'OpenShift', 'Docker'],
    githubUrl: '#',
    liveUrl: '#',
  },
  {
    title: 'XE Compass Homepage & Dashboards',
    description: 'Led development of the XE Compass homepage and dashboards, improving navigation, accessibility, and performance for internal users. Focused on modern UI/UX practices and performance optimization.',
    technologies: ['React', 'TypeScript', 'CSS3', 'Lighthouse'],
    githubUrl: '#',
    liveUrl: '#',
  },
  {
    title: 'Red Hat Customer Portal Notifications',
    description: 'Implemented a Notifications UI and service for the Red Hat Customer Portal, delivering real-time alerts to 25M+ users. Focused on code quality, accessibility, performance, and monitoring through automated testing and analytics.',
    technologies: ['React', 'TypeScript', 'CSS3', 'Performance Optimization'],
    githubUrl: '#',
    liveUrl: '#',
  },
  {
    title: 'DIGIHUDDLE - IT Support Tool',
    description: 'Developed a tool for IT Support Teams to manage daily huddles with features such as Assign, Return, Add/Remove items, Custom Emails, Acknowledgements, Team Workload View, and Management Summaries.',
    technologies: ['React', 'JavaScript', 'MySQL', 'HTML5', 'CSS3', 'Websso', 'Python', 'Flask', 'Docker'],
    githubUrl: '#',
    liveUrl: '#',
  },
  {
    title: 'DIGIFEED - Incident Visualization',
    description: 'Developed a tool for business and mission control to visualize active incidents and trading volumes with dashboards, summary views, news ticker, and calendar features.',
    technologies: ['React', 'JavaScript', 'MySQL', 'HTML5', 'CSS3', 'Python Flask', 'REST API', 'Oracle DB'],
    githubUrl: '#',
    liveUrl: '#',
  },
]

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="projects" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-black" />
      
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
          <p className="text-gray-400 max-w-2xl mx-auto">
            A collection of projects I've worked on, showcasing my skills and experience
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Glow effect on hover */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl opacity-0 group-hover:opacity-20 blur transition duration-300" />
              
              <div className="relative bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-purple-500/50 transition-all duration-300 h-full flex flex-col">
                {/* Project image placeholder */}
                <div className="relative h-48 bg-gradient-to-br from-purple-900/50 to-pink-900/50 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl opacity-20">🚀</div>
                  </div>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={false}
                  />
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-3">
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
                        className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
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
                        className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
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
      </div>
    </section>
  )
}
