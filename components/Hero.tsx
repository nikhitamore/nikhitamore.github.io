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
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 dark:from-purple-900/20 from-purple-100/20 via-white dark:via-black to-pink-900/20 dark:to-pink-900/20 to-pink-100/20" />
      
      {/* Multiple animated orbs */}
      <motion.div
        className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"
        animate={{
          x: mousePosition.x - 192,
          y: mousePosition.y - 192,
        }}
        transition={{ type: 'spring', stiffness: 50, damping: 20 }}
      />
      <motion.div
        className="absolute w-96 h-96 bg-pink-500/10 rounded-full blur-3xl pointer-events-none"
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
          <span className="text-purple-400 dark:text-purple-400 text-purple-600 text-sm md:text-base font-mono">
            Hi, my name is
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4"
        >
          <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
            Nikhita More
          </span>
        </motion.h1>

        <motion.h2
          variants={itemVariants}
          className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 text-gray-300"
        >
          I'm a{' '}
          <span className="relative inline-block min-w-[200px] md:min-w-[300px] lg:min-w-[400px] h-[1.2em]">
            {words.map((word, index) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: currentWord === index ? 1 : 0,
                  y: currentWord === index ? 0 : -20,
                }}
                transition={{ duration: 0.5 }}
                className="absolute left-0 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent whitespace-nowrap"
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
          Senior Software Engineer & Full Stack Developer based in Pune, India.
          <br />
          Building scalable applications and innovative solutions with modern technologies.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-semibold text-white shadow-lg shadow-purple-500/50 hover:shadow-purple-500/75 transition-shadow overflow-hidden group"
          >
            <span className="relative z-10">Get In Touch</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"
              initial={false}
            />
          </motion.a>
          <motion.a
            href="#about"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border-2 border-purple-500 rounded-lg font-semibold text-purple-400 hover:bg-purple-500/10 transition-colors relative group overflow-hidden"
          >
            <span className="relative z-10">Learn More</span>
            <motion.div
              className="absolute inset-0 bg-purple-500/10 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"
              initial={false}
            />
          </motion.a>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
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
