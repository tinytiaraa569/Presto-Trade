


"use client"

import { useEffect, useRef, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import { motion, useInView } from "framer-motion"
import { ChevronLeft, ChevronRight, Gem } from "lucide-react"
import { Button } from "@/components/ui/button"
 import ProductCard from "@/Pages/ProductCard/Productcard"
// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { productsdata } from "@/data"


const BestSellerSlider = () => {
    const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const swiperRef = useRef(null)

  const products = productsdata

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  const sliderVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

   

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setIsVisible(true)
        
      }, 300)
      return () => clearTimeout(timer)
    }
  }, [isInView])

  return (
    <motion.div
      className="py-4 sm:py-8 px-4 bg-gradient-to-br from-slate-50 to-white"
       ref={ref}

      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
       <motion.div className="text-center mb-5" variants={titleVariants}>
          <motion.h1
            className="text-3xl font-bold  text-balance"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            Best Seller
          </motion.h1>
          <motion.p
            className=" text-slate-600 max-w-2xl mx-auto text-pretty"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Discover our best-selling products that our customers love!
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

        {/* Slider Section */}
        <motion.div className="relative" variants={sliderVariants}>
          {/* Custom Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-4 z-10">
            <Button
              variant="outline"
              size="icon"
              className="cursor-pointer h-9 w-9 rounded-full bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 backdrop-blur-sm border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
              onClick={() => swiperRef.current?.swiper?.slidePrev()}
            >
              <ChevronLeft className="h-7 w-7 text-white" />
            </Button>
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 -right-4 z-10">
            <Button
              variant="outline"
              size="icon"
              className="cursor-pointer h-9 w-9 rounded-full bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 backdrop-blur-sm text-white border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
              onClick={() => swiperRef.current?.swiper?.slideNext()}
            >
              <ChevronRight className="h-7 w-7 text-white" />
            </Button>
          </div>

          {/* Swiper Component */}
          <Swiper
            ref={swiperRef}
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              bulletClass: "swiper-pagination-bullet !bg-slate-400 !opacity-50",
              bulletActiveClass: "swiper-pagination-bullet-active !bg-slate-900 !opacity-100",
            }}
            breakpoints={{
                340: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 24,
              },
            }}
            className="!pb-12"
          >
            {products.slice(0, 8).map((product, index) => (
              <SwiperSlide key={product.id}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  whileHover={{
                    y: -8,
                    transition: { duration: 0.3, ease: "easeOut" },
                  }}
                  className="h-full"
                >
                  <ProductCard product={product} />
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
        

        {/* Decorative Elements */}
        <motion.div
          className="absolute z- top-20 left-10 w-20 h-20 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full blur-xl opacity-30"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />

        <motion.div
          className="absolute z- bottom-20 right-10 w-16 h-16 bg-gradient-to-br from-pink-100 to-orange-100 rounded-full blur-xl opacity-30"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      </div>
      <motion.div
                className="flex justify-center "
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: 1.2, duration: 0.6 }}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                  <Button className="cursor-pointer px-5 py-2 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 text-sm sm:text-base">View All Products</Button>
                </motion.div>
              </motion.div>
    </motion.div>
  )
}

export default BestSellerSlider
