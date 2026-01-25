'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiAward, FiMic, FiUsers } from 'react-icons/fi'

const achievements = [
  {
    year: '2024',
    title: 'Speaker & Workshop Conductor',
    description: 'Delivered a talk and conducted a workshop on Backstage at DEVCONF.CZ',
    location: 'Brno, Czech Republic',
    icon: FiMic,
  },
  {
    year: '2024',
    title: 'Booth Host',
    description: 'Hosted an Accessibility booth at DEVCONF India, promoting inclusive UI practices',
    location: 'India',
    icon: FiUsers,
  },
  {
    year: '2022',
    title: 'Gold Certified Engineer',
    description: 'Ranked 1st in the entire Business Unit at UBS',
    location: 'Pune, India',
    icon: FiAward,
  },
  {
    year: '2021',
    title: 'Award Winner',
    description: 'Received TOC Excellence Award and SPOT Award at UBS for outstanding contributions',
    location: 'Pune, India',
    icon: FiAward,
  },
  {
    year: '2016',
    title: 'Scholarship Recipient',
    description: 'Awarded Cummins India Scholarship for academic excellence',
    location: 'Pune, India',
    icon: FiAward,
  },
  {
    year: '2010',
    title: 'National-Level Athlete',
    description: 'Badminton',
    location: 'Mumbai, India',
    icon: FiAward,
  },
]

export default function Achievements() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="achievements" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-white dark:bg-black transition-colors duration-300">
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
              Achievements & Recognition
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-700 to-cyan-600 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative group"
            >
              {/* Glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-700 to-cyan-600 rounded-xl opacity-0 group-hover:opacity-20 blur transition duration-300" />
              
              <div className="relative bg-gray-100 dark:bg-gray-900 rounded-xl p-6 border border-gray-300 dark:border-gray-800 hover:border-blue-700/50 transition-all duration-300 h-full">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-blue-700/10 rounded-lg border border-blue-700/20">
                    <achievement.icon className="text-blue-600" size={24} />
                  </div>
                  <span className="text-sm text-blue-600 font-semibold">{achievement.year}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{achievement.title}</h3>
                <p className="text-gray-700 dark:text-gray-400 text-sm mb-3">{achievement.description}</p>
                <p className="text-gray-600 dark:text-gray-500 text-xs flex items-center gap-1">
                  <span>📍</span>
                  {achievement.location}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
