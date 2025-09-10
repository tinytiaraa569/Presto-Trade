// "use client"
// import { useState, useEffect, useRef } from "react"
// import { motion, useInView } from "framer-motion"
// import { Button } from "@/components/ui/button"
// import { Badge } from "@/components/ui/badge"

// import img1 from './homesec5img/01.jpg'
// import img2 from './homesec5img/02.jpg'
// import img3 from './homesec5img/03.jpg'
// import img4 from './homesec5img/04.jpg'


// const jewelrypromo = [
//   {
//     id: 1,
//     name: "Elegant Diamond Rings",
//     tagline: "Crafted to shine with timeless brilliance.",
//     image: img3,
//     items: "156 items",
//     buttontext: "Shop Now",
//     discount: "20% off",
//   },
//   {
//     id: 2,
//     name: "Luxury Gold Necklaces",
//     tagline: "Bold statements of elegance and prestige.",
//     image: img2,
//     items: "89 items",
//     buttontext: "Diwali Sale",
//     discount: "50% off",
//   },
//   {
//     id: 3,
//     name: "Classic Pearl Earrings",
//     tagline: "Pure sophistication for timeless everyday beauty.",
//     image: img4,
//     items: "124 items",
//     buttontext: "Holi Sale",
//     discount: "10% off",
//   },
//   {
//     id: 4,
//     name: "Timeless Bracelets",
//     tagline: "Adorn your wrist with endless elegance.",
//     image: img1,
//     items: "67 items",
//     buttontext: "Dussehra Sale",
//     discount: "₹500 off",
//   },
// ]


// const Homesec5ection = () => {
//   const [currentIndex, setCurrentIndex] = useState(0)
//   const [isAutoPlaying, setIsAutoPlaying] = useState(true)
//   const [isPaused, setIsPaused] = useState(false)
//   const [isVisible, setIsVisible] = useState(false)
//   const ref = useRef(null)
//   const isInView = useInView(ref, { once: true, amount: 0.2 })

//   useEffect(() => {
//     if (isInView) {
//       const timer = setTimeout(() => {
//         setIsVisible(true)
//         setIsAutoPlaying(true)
//         setCurrentIndex(0)
//       }, 300)
//       return () => clearTimeout(timer)
//     }
//   }, [isInView])

//   useEffect(() => {
//     if (!isAutoPlaying || isPaused) return

//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => {
//         const nextIndex = prevIndex + 1
//         return nextIndex >= jewelrypromo.length ? 0 : nextIndex
//       })
//     }, 3000)

//     return () => clearInterval(interval)
//   }, [isAutoPlaying, isPaused])

//   const handleDragEnd = (event, info) => {
//     const threshold = 50
//     if (info.offset.x > threshold && currentIndex > 0) {
//       setCurrentIndex(currentIndex - 1)
//       setIsPaused(true)
//       setTimeout(() => setIsPaused(false), 5000)
//     } else if (info.offset.x < -threshold) {
//       const nextIndex = currentIndex + 1
//       setCurrentIndex(nextIndex >= jewelrypromo.length ? 0 : nextIndex)
//       setIsPaused(true)
//       setTimeout(() => setIsPaused(false), 5000)
//     }
//   }

//   const handleCardClick = (index) => {
//     setCurrentIndex(index)
//     setIsPaused(true)
//     setTimeout(() => setIsPaused(false), 5000)
//   }

//   const visibleCards = 3
//   const isMobile = typeof window !== "undefined" && window.innerWidth < 768
//   const cardWidth = isMobile ? 120 : 160
//   const scrollOffset = currentIndex > 1 ? -(currentIndex - 1) * cardWidth : 0

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         duration: 0.6,
//         staggerChildren: 0.1,
//         delayChildren: 0.2,
//       },
//     },
//   }

//   const headerVariants = {
//     hidden: { opacity: 0, y: -30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.8,
//         ease: [0.25, 0.46, 0.45, 0.94],
//       },
//     },
//   }

//   const cardContainerVariants = {
//     hidden: { opacity: 0, scale: 0.8 },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       transition: {
//         duration: 0.8,
//         ease: [0.25, 0.46, 0.45, 0.94],
//         staggerChildren: 0.1,
//       },
//     },
//   }

//   const cardVariants = {
//     hidden: { opacity: 0, y: 60, scale: 0.8 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       scale: 1,
//       transition: {
//         duration: 0.6,
//         ease: [0.25, 0.46, 0.45, 0.94],
//       },
//     },
//   }

//   const controlsVariants = {
//     hidden: { opacity: 0, scale: 0.8 },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       transition: {
//         duration: 0.5,
//         delay: 1.2,
//         ease: [0.25, 0.46, 0.45, 0.94],
//       },
//     },
//   }

//   return (
//     <motion.div
//       className="py-4 md:py-10 bg-gradient-to-br from-slate-50 via-white to-slate-50"
//       ref={ref}
//       variants={containerVariants}
//       initial="hidden"
//       animate={isVisible ? "visible" : "hidden"}
//       transition={{ duration: 0.6, ease: "easeOut" }}
//     >
//       <motion.div
//         className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] overflow-hidden p-3 sm:p-6"
//         variants={cardContainerVariants}
//       >
//         <div className="flex items-center justify-center h-full">
//           <div className="w-full overflow-hidden">
//             <motion.div
//               className="flex gap-2 sm:gap-3"
//               animate={{
//                 x: scrollOffset,
//               }}
//               transition={{
//                 type: "spring",
//                 stiffness: 400,
//                 damping: 40,
//                 mass: 0.8,
//               }}
//               drag="x"
//               dragConstraints={{ left: -(jewelrypromo.length - visibleCards) * cardWidth, right: 0 }}
//               onDragEnd={handleDragEnd}
//             >
//               {jewelrypromo.map((category, index) => {
//                 const isActive = index === currentIndex
//                 const isVisible = Math.abs(index - currentIndex) <= 2

//                 return (
//                   <motion.div
//                     key={category.id}
//                     className="relative w-full h-[55vh] sm:h-[65vh] md:h-[70vh] rounded-xl sm:rounded-2xl overflow-hidden cursor-grab active:cursor-grabbing flex-shrink-0 shadow-lg hover:shadow-2xl transition-shadow duration-300"
//                     variants={cardVariants}
//                     custom={index}
//                     animate={{
//                       width: isActive
//                         ? typeof window !== "undefined" && window.innerWidth < 640
//                           ? "85vw"
//                           : typeof window !== "undefined" && window.innerWidth < 1024
//                             ? "70vw"
//                             : 1140
//                         : typeof window !== "undefined" && window.innerWidth < 768
//                           ? 120
//                           : 160,
//                       opacity: isVisible ? 1 : 0.7,
//                       scale: isActive ? 1 : 0.96,
//                     }}
//                     transition={{
//                       type: "spring",
//                       stiffness: 400,
//                       damping: 35,
//                       mass: 0.6,
//                     }}
//                     whileHover={{
//                       width: isActive
//                         ? typeof window !== "undefined" && window.innerWidth < 640
//                           ? "87vw"
//                           : typeof window !== "undefined" && window.innerWidth < 1024
//                             ? "72vw"
//                             : 1140
//                         : typeof window !== "undefined" && window.innerWidth < 768
//                           ? 140
//                           : 180,
//                       opacity: 1,
//                       scale: isActive ? 1.02 : 0.98,
//                     }}
//                     whileTap={{ scale: 0.98 }}
//                     onClick={() => handleCardClick(index)}
//                   >
//                     <motion.img
//                       src={category.image || "/placeholder.svg"}
//                       alt={category.name}
//                       className="w-full h-full object-cover"
//                       animate={{
//                         scale: isActive ? 1.05 : 1,
//                       }}
//                       transition={{ duration: 0.6, ease: "easeOut" }}
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

//                     {isActive && (
//                       <motion.div
//                         className="absolute bottom-3 sm:bottom-6 left-3 sm:left-6 right-3 sm:right-6 text-white pl-2 sm:pl-5 sm:pb-1 pb-3"
//                         initial={{ opacity: 0, y: 30, scale: 0.9 }}
//                         animate={{ opacity: 1, y: 0, scale: 1 }}
//                         transition={{
//                           delay: 0.2,
//                           duration: 0.5,
//                           type: "spring",
//                           stiffness: 300,
//                         }}
//                       >
//                         <motion.div
//                           className="mt-4 sm:mt-6"
//                           initial={{ y: 10, opacity: 0 }}
//                           animate={{ y: 0, opacity: 1 }}
//                           transition={{ delay: 0.6 }}
//                         >
//                           <Button
//                             size="lg"
//                             className="cursor-pointer bg-white text-black hover:bg-amber-50 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 rounded-full px-6 py-3 sm:px-8 sm:py-4"
//                             asChild
//                           >
//                             <motion.button whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
//                               {category.buttontext}
//                             </motion.button>
//                           </Button>
//                         </motion.div>
//                          <motion.p
//                           className="text-amber-300 text-sm sm:text-base md:text-md font-semibold mt-2 sm:mt-3"
//                           initial={{ y: 10, opacity: 0 }}
//                           animate={{ y: 0, opacity: 1 }}
//                           transition={{ delay: 0.5 }}
//                         >
//                           {category.name}
//                         </motion.p>
//                         <motion.h1
//                           className="text-xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-balance mt-1 sm:mt-2"
//                           initial={{ y: 10, opacity: 0 }}
//                           animate={{ y: 0, opacity: 1 }}
//                           transition={{ delay: 0.4 }}
//                         >
//                           {category.tagline}
//                         </motion.h1>
 
                        

                       
//                       </motion.div>
//                     )}

//                     {isActive && (
//                       <motion.div
//                         className="absolute top-3 sm:top-6 right-3 sm:right-6"
//                         initial={{ opacity: 0, scale: 0.8, y: -10 }}
//                         animate={{ opacity: 1, scale: 1, y: 0 }}
//                         transition={{ delay: 0.3, duration: 0.4 }}
//                       >
//                         <Badge
//                           variant="secondary"
//                           className="cursor-pointer bg-gradient-to-r  from-slate-800 via-slate-700 to-slate-800 text-white hover:from-slate-700 hover:to-slate-600 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-bold shadow-lg border-0"
//                         >
//                           {category.discount}
//                         </Badge>
//                       </motion.div>
//                     )}

                   
//                   </motion.div>
//                 )
//               })}
//             </motion.div>
//           </div>
//         </div>

//         <motion.div
//           className="absolute bottom-2 sm:bottom-2.5 left-1/2 transform -translate-x-1/2 flex gap-1.5 sm:gap-2"
//           variants={controlsVariants}
//         >
//           {jewelrypromo.map((_, index) => (
//             <motion.button
//               key={index}
//               onClick={() => handleCardClick(index)}
//               className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 relative overflow-hidden ${
//                 index === currentIndex ? "bg-gray-800 w-6 sm:w-8" : "bg-gray-400 w-1.5 sm:w-2"
//               }`}
//               whileHover={{ scale: 1.2, backgroundColor: "#374151" }}
//               whileTap={{ scale: 0.9 }}
//               animate={{
//                 opacity: Math.abs(index - currentIndex) <= 7 ? 1 : 0.3,
//               }}
//             >
//               {index === currentIndex && isAutoPlaying && !isPaused && (
//                 <motion.div
//                   className="absolute inset-0 bg-gray-600 origin-left"
//                   initial={{ scaleX: 0 }}
//                   animate={{ scaleX: 1 }}
//                   transition={{ duration: 3, ease: "linear" }}
//                 />
//               )}
//             </motion.button>
//           ))}
//         </motion.div>

       
//       </motion.div>
//     </motion.div>
//   )
// }

// export default Homesec5ection



"use client"
import { useState, useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

import img1 from "./homesec5img/01.jpg"
import img2 from "./homesec5img/02.jpg"
import img3 from "./homesec5img/03.jpg"
import img4 from "./homesec5img/04.jpg"

const jewelrypromo = [
  {
    id: 1,
    name: "Elegant Diamond Rings",
    tagline: "Crafted to shine with timeless brilliance.",
    image: img3,
    items: "156 items",
    buttontext: "Shop Now",
    discount: "20% off",
  },
  {
    id: 2,
    name: "Luxury Gold Necklaces",
    tagline: "Bold statements of elegance and prestige.",
    image: img2,
    items: "89 items",
    buttontext: "Diwali Sale",
    discount: "50% off",
  },
  {
    id: 3,
    name: "Classic Pearl Earrings",
    tagline: "Pure sophistication for timeless everyday beauty.",
    image: img4,
    items: "124 items",
    buttontext: "Holi Sale",
    discount: "10% off",
  },
  {
    id: 4,
    name: "Timeless Bracelets",
    tagline: "Adorn your wrist with endless elegance.",
    image: img1,
    items: "67 items",
    buttontext: "Dussehra Sale",
    discount: "₹500 off",
  },
]

const Homesec5ection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isPaused, setIsPaused] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [windowWidth, setWindowWidth] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    handleResize()

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setIsVisible(true)
        setIsAutoPlaying(true)
        setCurrentIndex(0)
      }, 300)
      return () => clearTimeout(timer)
    }
  }, [isInView])

  useEffect(() => {
    if (!isAutoPlaying || isPaused) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex + 1
        return nextIndex >= jewelrypromo.length ? 0 : nextIndex
      })
    }, 3000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, isPaused])

  const handleDragEnd = (event, info) => {
    const threshold = 50
    if (info.offset.x > threshold && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
      setIsPaused(true)
      setTimeout(() => setIsPaused(false), 5000)
    } else if (info.offset.x < -threshold) {
      const nextIndex = currentIndex + 1
      setCurrentIndex(nextIndex >= jewelrypromo.length ? 0 : nextIndex)
      setIsPaused(true)
      setTimeout(() => setIsPaused(false), 5000)
    }
  }

  const handleCardClick = (index) => {
    setCurrentIndex(index)
    setIsPaused(true)
    setTimeout(() => setIsPaused(false), 5000)
  }

  const isMobile = windowWidth < 768
  const isTablet = windowWidth >= 768 && windowWidth < 1024

  const getScrollOffset = () => {
    if (isMobile) {
      const containerWidth = windowWidth - 48 // Account for padding
      return -currentIndex * containerWidth
    } else {
      const cardWidth = 160
      return currentIndex > 1 ? -(currentIndex - 1) * cardWidth : 0
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const headerVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  const cardContainerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
        staggerChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  const controlsVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  return (
    <motion.div
      className="py-4 md:py-10 bg-gradient-to-br from-slate-50 via-white to-slate-50"
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.div
        className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] overflow-hidden p-3 sm:p-6"
        variants={cardContainerVariants}
      >
        <div className="flex items-center justify-center h-full">
          <div className={`w-full ${isMobile ? "overflow-hidden" : "overflow-hidden"}`}>
            <motion.div
              className="flex gap-2 sm:gap-3"
              animate={{
                x: getScrollOffset(),
              }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 40,
                mass: 0.8,
              }}
              drag="x"
              dragConstraints={{
                left: isMobile ? -(jewelrypromo.length - 1) * (windowWidth * 0.85) : -(jewelrypromo.length - 3) * 160,
                right: 0,
              }}
              onDragEnd={handleDragEnd}
            >
              {jewelrypromo.map((category, index) => {
                const isActive = index === currentIndex
                const isVisible = isMobile ? index === currentIndex : Math.abs(index - currentIndex) <= 2

                return (
                  <motion.div
                    key={category.id}
                    className="relative w-full h-[55vh] sm:h-[65vh] md:h-[70vh] rounded-xl sm:rounded-2xl overflow-hidden cursor-grab active:cursor-grabbing flex-shrink-0 shadow-lg hover:shadow-2xl transition-shadow duration-300"
                    variants={cardVariants}
                    custom={index}
                    animate={{
                      width: isActive
                        ? isMobile
                          ? windowWidth - 48
                          : isTablet
                            ? "70vw"
                            : 1140
                        : isMobile
                          ? windowWidth - 48
                          : 160,
                      opacity: isVisible ? 1 : isMobile ? 0 : 1,
                      scale: isActive ? 1 : 0.96,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 35,
                      mass: 0.6,
                    }}
                    whileHover={{
                      width: isActive
                        ? isMobile
                          ? windowWidth - 40
                          : isTablet
                            ? "72vw"
                            : 1140
                        : isMobile
                          ? windowWidth - 48
                          : 180,
                      opacity: isMobile ? (isActive ? 1 : 0) : 1,
                      scale: isActive ? 1.02 : 0.98,
                    }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleCardClick(index)}
                  >
                    <motion.img
                      src={category.image || "/placeholder.svg"}
                      alt={category.name}
                      className="w-full h-full object-cover"
                      animate={{
                        scale: isActive ? 1.05 : 1,
                      }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    {isActive && (
                      <motion.div
                        className="absolute bottom-3 sm:bottom-6 left-3 sm:left-6 right-3 sm:right-6 text-white pl-2 sm:pl-5 sm:pb-1 pb-3"
                        initial={{ opacity: 0, y: 30, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.5, type: "spring", stiffness: 300 }}
                      >
                        <motion.div
                          className="mt-4 sm:mt-6"
                          initial={{ y: 10, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.6 }}
                        >
                          <Button
                            size="lg"
                            className="cursor-pointer bg-white text-black hover:bg-amber-50 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 rounded-full px-6 py-3 sm:px-8 sm:py-4"
                            asChild
                          >
                            <motion.button whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                              {category.buttontext}
                            </motion.button>
                          </Button>
                        </motion.div>
                        <motion.p
                          className="text-amber-300 text-sm sm:text-base md:text-md font-semibold mt-2 sm:mt-3"
                          initial={{ y: 10, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.5 }}
                        >
                          {category.name}
                        </motion.p>
                        <motion.h1
                          className="text-xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-balance mt-1 sm:mt-2"
                          initial={{ y: 10, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.4 }}
                        >
                          {category.tagline}
                        </motion.h1>
                      </motion.div>
                    )}

                    {isActive && (
                      <motion.div
                        className="absolute top-3 sm:top-6 right-3 sm:right-6"
                        initial={{ opacity: 0, scale: 0.8, y: -10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.4 }}
                      >
                        <Badge
                          variant="secondary"
                          className="cursor-pointer bg-gradient-to-r  from-slate-800 via-slate-700 to-slate-800 text-white hover:from-slate-700 hover:to-slate-600 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-bold shadow-lg border-0"
                        >
                          {category.discount}
                        </Badge>
                      </motion.div>
                    )}
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </div>

        <motion.div
          className="absolute bottom-2 sm:bottom-2.5 left-1/2 transform -translate-x-1/2 flex gap-1.5 sm:gap-2"
          variants={controlsVariants}
        >
          {jewelrypromo.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => handleCardClick(index)}
              className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 relative overflow-hidden ${
                index === currentIndex ? "bg-gray-800 w-6 sm:w-8" : "bg-gray-400 w-1.5 sm:w-2"
              }`}
              whileHover={{ scale: 1.2, backgroundColor: "#374151" }}
              whileTap={{ scale: 0.9 }}
              animate={{
                opacity: Math.abs(index - currentIndex) <= 7 ? 1 : 0.3,
              }}
            >
              {index === currentIndex && isAutoPlaying && !isPaused && (
                <motion.div
                  className="absolute inset-0 bg-gray-600 origin-left"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 3, ease: "linear" }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Homesec5ection
