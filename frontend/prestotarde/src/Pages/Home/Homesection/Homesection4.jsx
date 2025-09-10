"use client"
import { useState, useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Star, ArrowRight, Play, Pause, Gem } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const jewelryCategories = [
  {
    id: 1,
    name: "Diamond Rings",
    image: "https://i.pinimg.com/736x/b4/65/75/b465756099edfd7b6cc463307fc88efa.jpg",
    price: "From $2,999",
    items: "156 items",
    rating: 4.9,
    featured: true,
  },
  {
    id: 2,
    name: "Gold Necklaces",
    image: "https://i.pinimg.com/736x/63/77/8c/63778ca6c6f38b4f733f06a14c3435ec.jpg",
    price: "From $899",
    items: "89 items",
    rating: 4.8,
    new: true,
  },
  {
    id: 3,
    name: "Pearl Earrings",
    image: "https://i.pinimg.com/736x/44/82/75/448275e871894b22f360056f3a486b15.jpg",
    price: "From $599",
    items: "124 items",
    rating: 4.7,
    sale: true,
  },
  {
    id: 4,
    name: "Bracelets",
    image: "https://i.pinimg.com/736x/41/9c/4a/419c4a5445f137ff56d085e010f47f53.jpg",
    price: "From $1,299",
    items: "67 items",
    rating: 4.9,
    popular: true,
  },
  {
    id: 5,
    name: "Bridal Jewelry",
    image: "https://i.pinimg.com/736x/62/0c/4d/620c4d70dda83e57d4dd09c865a1b02d.jpg",
    price: "From $3,999",
    items: "45 items",
    rating: 5.0,
    featured: true,
  },
  {
    id: 6,
    name: "Men's Jewelry",
    image: "https://i.pinimg.com/736x/22/8f/75/228f7519509126a5a4c43bac7938f854.jpg",
    price: "From $799",
    items: "78 items",
    rating: 4.6,
    new: true,
  },
  // ---- new categories start here ----
  {
    id: 7,
    name: "Hoop Earrings",
    image: "https://i.pinimg.com/736x/bf/2d/40/bf2d4084532107022be211c8511720f1.jpg",
    price: "From $499",
    items: "84 items",
    rating: 4.7,
    popular: true,
  },
  {
    id: 8,
    name: "Diamond Nazaria",
    image: "https://i.pinimg.com/736x/9e/e4/70/9ee470af999c72021fe619f278d48ae6.jpg",
    price: "From $1,999",
    items: "142 items",
    rating: 4.9,
    featured: true,
  },
  {
    id: 9,
    name: "Gemstone Jewelry",
    image: "https://i.pinimg.com/736x/c3/0e/2e/c30e2ef9a7d9452e3b91ac9e46335609.jpg",
    price: "From $1,299",
    items: "93 items",
    rating: 4.8,
    new: true,
  },
  {
    id: 10,
    name: "Stud Earrings",
    image: "https://i.pinimg.com/736x/a3/bc/73/a3bc73774cf4842f6ecc2a8d8fcf4267.jpg",
    price: "From $399",
    items: "118 items",
    rating: 4.6,
    sale: true,
  },
  {
    id: 11,
    name: "Solitaire Necklace",
    image: "https://i.pinimg.com/736x/6c/a9/1b/6ca91b684498f7a6d059bd9f1b24bd6e.jpg",
    price: "From $699",
    items: "74 items",
    rating: 4.7,
    popular: true,
  },
  {
    id: 12,
    name: "Diamond Bangles",
    image: "https://i.pinimg.com/736x/91/63/9f/91639f0636dba77c747321f368d74246.jpg",
    price: "From $1,499",
    items: "59 items",
    rating: 4.9,
    featured: true,
  },
]



const ElegantAccordionOriginal = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isPaused, setIsPaused] = useState(false)
   const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

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
        return nextIndex >= jewelryCategories.length ? 0 : nextIndex
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
      setCurrentIndex(nextIndex >= jewelryCategories.length ? 0 : nextIndex)
      setIsPaused(true)
      setTimeout(() => setIsPaused(false), 5000)
    }
  }

  const handleCardClick = (index) => {
    setCurrentIndex(index)
    setIsPaused(true)
    setTimeout(() => setIsPaused(false), 5000)
  }

  const visibleCards = 4
  const scrollOffset = currentIndex > 1 ? -(currentIndex - 1) * 160 : 0

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
    <motion.div className="py-4 md:py-10  bg-gradient-to-br from-slate-100 via-white to-slate-100" 
       ref={ref}
      variants={containerVariants} 
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
       transition={{ duration: 0.6, ease: "easeOut" }}
      >

       <motion.div className="text-center mb-4" variants={headerVariants}>
          <motion.h1 className="text-2xl md:text-3xl font-bold" variants={headerVariants}>
          Jewelry Categories
        </motion.h1>
        <motion.p variants={headerVariants} transition={{ delay: 0.1 }} className="text-sm md:text-base">
           Browse our curated collections of rings, necklaces, earrings, and more.
        </motion.p>

            <motion.div
          className="flex items-center justify-center gap-3 my-2"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />
          <Gem className="w-4 h-4 text-yellow-400" />
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />
        </motion.div>
        </motion.div>
    
    <motion.div className="relative w-full h-96  overflow-hidden p-6" variants={cardContainerVariants}>
     
      <motion.div className="absolute top-4 left-6 z-10" variants={controlsVariants}>
        <Button
          size="sm"
          variant="outline"
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className="bg-white/80 backdrop-blur-sm border-gray-200 hover:bg-white"
        >
          {isAutoPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
        </Button>
      </motion.div>

      <div className="flex items-center justify-center h-full">
        <div className="w-full max-w-6xl overflow-hidden">
          <motion.div
            className="flex gap-3"
            animate={{
              x: scrollOffset,
            }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 40,
              mass: 0.8,
            }}
            drag="x"
            dragConstraints={{ left: -(jewelryCategories.length - visibleCards) * 160, right: 0 }}
            onDragEnd={handleDragEnd}
          >
            {jewelryCategories.map((category, index) => {
              const isActive = index === currentIndex
              const isVisible = Math.abs(index - currentIndex) <= 2

              return (
                <motion.div
                  key={category.id}
                  className="relative h-80 rounded-2xl overflow-hidden cursor-grab active:cursor-grabbing flex-shrink-0 shadow-lg hover:shadow-2xl transition-shadow duration-300"
                  variants={cardVariants}
                  custom={index}
                  animate={{
                      width: isActive ? 340 : 160,
                      opacity: (isVisible ? 1 : 0.7),
                      scale: isActive ? 1 : 0.96,
                      // y: isActive ? -8 : 0,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 35,
                      mass: 0.6,
                    }}
                    whileHover={{
                      width: isActive ? 360 : 180,
                      opacity: 1,
                      scale: isActive ? 1.02 : 0.98,
                      // y: isActive ? -12 : -4,
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
                      className="absolute bottom-6 left-6 right-6 text-white"
                      initial={{ opacity: 0, y: 30, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{
                        delay: 0.2,
                        duration: 0.5,
                        type: "spring",
                        stiffness: 300,
                      }}
                    >
                      <motion.div
                        className="flex items-center gap-2 mb-1"
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        {category.featured && <Badge className="bg-amber-500 text-black font-medium">Featured</Badge>}
                        {category.new && <Badge className="bg-emerald-500 font-medium">New</Badge>}
                        {category.sale && <Badge className="bg-red-500 font-medium">Sale</Badge>}
                        {category.popular && <Badge className="bg-blue-500 font-medium">Popular</Badge>}
                      </motion.div>

                      <motion.h3
                        className="text-xl font-bold text-balance"
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                      >
                        {category.name}
                      </motion.h3>

                      <motion.p
                        className="text-amber-300 text-lg font-semibold "
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5 }}
                      >
                        {category.price}
                      </motion.p>

                      <motion.div
                        className="flex items-center justify-between"
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.6 }}
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-sm opacity-90">{category.items}</span>
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            <span className="text-sm">{category.rating}</span>
                          </div>
                        </div>
                        <Button size="sm" className="bg-white text-black hover:bg-gray-100 font-medium cursor-pointer">
                          Explore
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </Button>
                      </motion.div>
                    </motion.div>
                  )}

                  {!isActive && (
                    <motion.div
                      className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white text-center"
                      whileHover={{ scale: 1.05 }}
                    >
                      <motion.h4
                        className="text-sm font-semibold mb-2 text-balance"
                        animate={{ opacity: isVisible ? 1 : 0.7 }}
                      >
                        {category.name}
                      </motion.h4>
                      <motion.p className="text-xs opacity-80" animate={{ opacity: isVisible ? 0.8 : 0.5 }}>
                        {category.price}
                      </motion.p>
                      <motion.div
                        className="w-8 h-0.5 bg-white/60 mx-auto mt-2 rounded-full"
                        animate={{
                          width: isVisible ? 32 : 16,
                          opacity: isVisible ? 0.6 : 0.3,
                        }}
                      />
                    </motion.div>
                  )}
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>

      <motion.div className=" absolute bottom-2.5 left-1/2 transform -translate-x-1/2 flex gap-2" variants={controlsVariants}>
        {jewelryCategories.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => handleCardClick(index)}
            className={` h-2 rounded-full transition-all duration-300 relative overflow-hidden ${
              index === currentIndex ? "bg-gray-800 w-8" : "bg-gray-400 w-2"
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

      <motion.div className="absolute top-4 right-6 text-gray-600 text-sm font-medium"  variants={controlsVariants}>
        {currentIndex + 1} / {jewelryCategories.length}
      </motion.div>
    </motion.div>
    </motion.div>

  )
}

export default ElegantAccordionOriginal



