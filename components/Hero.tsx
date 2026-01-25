'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { FiArrowDown } from 'react-icons/fi'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

const words = ['Engineer', 'Developer', 'Architect', 'Innovator']

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [currentWord, setCurrentWord] = useState(0)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white dark:bg-black transition-colors duration-300">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 dark:from-blue-900/20 from-blue-100/20 via-white dark:via-black to-cyan-900/20 dark:to-cyan-900/20 to-cyan-100/20" />
      
      {/* Multiple animated orbs */}
      <motion.div
        className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"
        animate={{
          x: mousePosition.x - 192,
          y: mousePosition.y - 192,
        }}
        transition={{ type: 'spring', stiffness: 50, damping: 20 }}
      />
      <motion.div
        className="absolute w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"
        animate={{
          x: mousePosition.x - 192 + 100,
          y: mousePosition.y - 192 + 100,
        }}
        transition={{ type: 'spring', stiffness: 50, damping: 20, delay: 0.1 }}
      />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-4"
      >
        <motion.div
          variants={itemVariants}
          className="mb-4"
        >
          <span className="text-blue-600 dark:text-blue-500 text-blue-700 text-sm md:text-base font-mono">
            Hi, my name is
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4"
        >
          <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent">
            Nikhita More
          </span>
        </motion.h1>

        <motion.h2
          variants={itemVariants}
          className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 text-gray-400"
        >
          I'm a{' '}
          <span className="relative inline-block min-w-[200px] md:min-w-[300px] lg:min-w-[400px] h-[1.2em]" style={{ paddingTop: '20px' }}>
            {words.map((word, index) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: currentWord === index ? 1 : 0,
                  y: currentWord === index ? 0 : -20,
                }}
                transition={{ duration: 0.5 }}
                className="absolute left-0 bg-gradient-to-r from-blue-600 to-cyan-700 bg-clip-text text-transparent whitespace-nowrap"
              >
                {word}
              </motion.span>
            ))}
          </span>
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12"
        >
          Senior Software Engineer & Full Stack Developer.
          <br />
          Crafting scalable applications and innovative solutions with cutting-edge technologies.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative px-8 py-4 bg-gradient-to-r from-blue-700 to-cyan-600 rounded-lg font-semibold text-white shadow-lg shadow-blue-700/50 hover:shadow-blue-700/75 transition-shadow overflow-hidden group"
          >
            <span className="relative z-10">Get In Touch</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity"
              initial={false}
            />
          </motion.a>
          <motion.a
            href="#about"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border-2 border-blue-700 rounded-lg font-semibold text-blue-600 hover:bg-blue-700/10 transition-colors relative group overflow-hidden"
          >
            <span className="relative z-10">Learn More</span>
            <motion.div
              className="absolute inset-0 bg-blue-700/10 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"
              initial={false}
            />
          </motion.a>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <FiArrowDown size={24} />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
}
