import { Button } from '@/components/ui/button'
import { useInView , motion } from 'framer-motion'
import React, { useRef } from 'react'

const Homesection6 = () => {
   const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.1 })
  const Collections = [
    { name: "Eternal Wedding Bliss", image: "https://i.pinimg.com/736x/3e/26/cd/3e26cd2ac665a7203bcbbaf1b1270050.jpg" },
    { name: "Timeless Heritage Collection", image: "https://i.pinimg.com/736x/00/6a/af/006aaf0870f12a92fc9e54eea20e9401.jpg" },
    { name: "Modern Glam Essentials", image: "https://i.pinimg.com/736x/77/39/07/7739073323c6d5de5834100decb7a128.jpg" },
    { name: "Celestial Diamond Dreams", image: "https://i.pinimg.com/736x/5e/b7/27/5eb7273d9e9daea3a382c4391247c1ba.jpg" },
    { name: "Golden Radiance Collection", image: "https://i.pinimg.com/736x/20/51/2e/20512e52a0fd5180c2ff0164754f8805.jpg" },
    { name: "Pearls of Elegance", image: "https://i.pinimg.com/736x/1f/8c/70/1f8c704c877628b6623e714d4c52a3c6.jpg" },
    { name: "Royal Bridal Treasures", image: "https://i.pinimg.com/474x/21/32/7b/21327b1442d95e65ad1660d884edb958.jpg" },
    { name: "Everyday Luxe Styles", image: "https://i.pinimg.com/736x/0f/9c/23/0f9c23cb9df3a0733ab92737269f59f2.jpg" },
  ]

  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.8,
      },
    },
  }

  return (
    <div ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}> 
          <h1 className='text-2xl md:text-3xl font-bold'>Explore Collections</h1>
          <p className="text-sm md:text-base text-gray-600 ">
            Discover timeless designs and modern elegance crafted to celebrate life’s most precious moments.  
            From everyday essentials to statement masterpieces, our collections are made to shine with you.
          </p>
        </motion.div>

        {/* Circle Layout with staggered effect */}
        < motion.div
          className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-10 lg:gap-16 justify-items-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {Collections.slice(0, 4).map((item, index) => (
            <motion.div
              key={index}
              className={`text-center transition-all duration-500 py-5
              ${index % 2 === 0 ? "mt-0 sm:mt-10" : "mt-0 sm:-mt-6"}`}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <motion.div
                className="w-40 h-60 sm:w-56 sm:h-72 lg:w-64 lg:h-80 rounded-xl overflow-hidden shadow-md mx-auto cursor-pointer"
                whileHover="hover"
              >
                <motion.img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                  whileHover={{
                    scale: 1.08,
                    transition: {
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                    },
                  }}
                />
              </motion.div>
               <motion.h3
                className="mt-4 text-sm sm:text-md font-semibold text-gray-600 px-2"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                {item.name}
              </motion.h3>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="flex justify-center mt-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Button className="cursor-pointer px-5 py-2 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 text-sm sm:text-base">View All Collections</Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Homesection6


