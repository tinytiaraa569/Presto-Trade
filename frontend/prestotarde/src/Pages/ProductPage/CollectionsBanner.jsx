"use client"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import bgimg from './Images/bgimg.jpg'
const CollectionsBanner = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.3 })

  return (
    <div ref={ref} className="relative max-w-full h-[180px] md:h-[200px] lg:h-[260px] overflow-hidden bg-black">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-black"
        style={{
          backgroundImage: `url('${bgimg}')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 to-gray-900/70" />
      </motion.div>

      {/* Spotlight effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-radial from-white/20 via-transparent to-transparent"
        initial={{ scale: 0, opacity: 0 }}
        animate={isInView ? { scale: 2, opacity: 1 } : {}}
        transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
        style={{
          background: "radial-gradient(circle at center, rgba(255,255,255,0.2) 0%, transparent 50%)",
        }}
      />

      <div className="relative z-10 flex flex-col justify-center items-center h-full px-4 text-center text-white">
        <motion.h1
          initial={{ opacity: 0, letterSpacing: "1em" }}
          animate={isInView ? { opacity: 1, letterSpacing: "0.05em" } : {}}
          transition={{ duration: 1.5, delay: 1, ease: "easeOut" }}
          className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-4 text-balance"
          style={{
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.9)",
          }}
        >
          Luxury Showcase
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={isInView ? { opacity: 1, filter: "blur(0px)" } : {}}
          transition={{ duration: 1, delay: 1.5, ease: "easeOut" }}
          className="text-sm md:text-base lg:text-lg max-w-2xl text-pretty opacity-90"
          style={{
            textShadow: "1px 1px 3px rgba(0, 0, 0, 0.9)",
          }}
        >
          Premium jewelry collections curated for the most discerning tastes and occasions
        </motion.p>
      </div>
    </div>
  )
}

export default CollectionsBanner