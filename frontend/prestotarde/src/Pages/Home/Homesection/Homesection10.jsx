

// "use client"

// import { motion } from "framer-motion"
// import { cn } from "@/lib/utils"
//  import video1 from './homesec10img/1.mp4'



// const VideoHero = ({ videoSrc, variant, className }) => {
//   const variants = {

//       container: {
//         initial: { opacity: 0 },
//         animate: { opacity: 1 },
//         transition: { duration: 1.2, ease: "easeOut" },
//       },
//       overlay: {
//         initial: { y: -50, opacity: 0 },
//         animate: { y: 0, opacity: 1 },
//         transition: { delay: 0.5, duration: 0.8, ease: "easeOut" },
//       },
//       title: {
//         initial: { y: -30, opacity: 0 },
//         animate: { y: 0, opacity: 1 },
//         transition: { delay: 0.8, duration: 0.6, ease: "easeOut" },
//       },
//       text: {
//         initial: { y: 20, opacity: 0 },
//         animate: { y: 0, opacity: 1 },
//         transition: { delay: 1.1, duration: 0.6, ease: "easeOut" },
//       },
    

   
//   }

//   const currentVariant = variants

//   return (
//     <motion.div
//       className={cn("relative w-full h-[70vh] overflow-hidden", className)}
//       initial={currentVariant.container.initial}
//       animate={currentVariant.container.animate}
//       transition={currentVariant.container.transition}
//     >
//       {/* Video Background */}
//       <video src={video1} autoPlay loop muted className="absolute inset-0 w-full h-full object-cover" />

//       {/* Blackish Overlay Effects */}
//       <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/70" />
//       <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/60" />
//       <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/50" />

//       {/* Content Overlay */}
//       <motion.div
//         className="absolute inset-0 flex items-center justify-center"
//         initial={currentVariant.overlay.initial}
//         animate={currentVariant.overlay.animate}
//         transition={currentVariant.overlay.transition}
//       >
//         <div className="text-center text-white px-6 max-w-4xl">
//           <motion.h1
//             className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance"
//             initial={currentVariant.title.initial}
//             animate={currentVariant.title.animate}
//             transition={currentVariant.title.transition}
//             style={variant === 5 ? { overflow: "hidden", whiteSpace: "nowrap" } : {}}
//           >
//             Handmade with Love
//           </motion.h1>

//           <motion.div
//             initial={currentVariant.text.initial}
//             animate={currentVariant.text.animate}
//             transition={currentVariant.text.transition}
//           >
//             <p className="text-lg md:text-xl lg:text-2xl mb-4 text-white/90 text-pretty">
//               Every piece crafted with passion, dedication, and the finest attention to detail. Our artisans pour their
//               heart into creating something truly special for you.
//             </p>
//             <p className="text-base md:text-lg text-white/80 text-pretty">
//               From farm to table, from heart to home - experience the difference that genuine care and traditional
//               craftsmanship makes in every product we create.
//             </p>
//           </motion.div>
//         </div>
//       </motion.div>
//     </motion.div>
//   )
// }

// export default VideoHero

import video1 from './homesec10img/1.mp4'

"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Button } from '@/components/ui/button'

const VideoHero = ({ videoSrc, variant, className }) => {
  const variants = {
    container: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: 1.2, ease: "easeOut" },
    },
    overlay: {
      initial: { y: -50, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      transition: { delay: 0.5, duration: 0.8, ease: "easeOut" },
    },
    title: {
      initial: { y: -30, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      transition: { delay: 0.8, duration: 0.6, ease: "easeOut" },
    },
    text: {
      initial: { y: 20, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      transition: { delay: 1.1, duration: 0.6, ease: "easeOut" },
    },
     button: {
      initial: { y: 30, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      transition: { delay: 1.4, duration: 0.6, ease: "easeOut" },
    },
  }

  const currentVariant = variants

  return (
    <motion.div
      className={cn("relative w-full h-[70vh] overflow-hidden", className)}
      initial={currentVariant.container.initial}
      whileInView={currentVariant.container.animate}
      transition={currentVariant.container.transition}
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Video Background - replaced local video with placeholder */}
      <video
        src={video1}
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Blackish Overlay Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/70" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/60" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/50" />

      {/* Content Overlay */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={currentVariant.overlay.initial}
        whileInView={currentVariant.overlay.animate}
        transition={currentVariant.overlay.transition}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="text-center text-white px-6 max-w-4xl">
          <motion.h1
            className="text-2xl md:text-3xl lg:text-5xl font-bold mb-1 sm:mb-3 text-balance"
            initial={currentVariant.title.initial}
            whileInView={currentVariant.title.animate}
            transition={currentVariant.title.transition}
            viewport={{ once: true, amount: 0.3 }}
          >
            Presto Trade Diamonds
          </motion.h1>

          <motion.div
            initial={currentVariant.text.initial}
            whileInView={currentVariant.text.animate}
            transition={currentVariant.text.transition}
            viewport={{ once: true, amount: 0.3 }}
          >
            <p className="text-sm sm:text-md md:text-lg lg:text-xl mb-4 text-white/90 text-pretty">
              Leading supplier of all shapes of diamonds through our vertically integrated system from sourcing rough to
              polished diamonds.
            </p>
          </motion.div>

         <motion.div
            className="flex justify-center"
            initial={currentVariant.button.initial}
            whileInView={currentVariant.button.animate}
            transition={currentVariant.button.transition}
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}>
              <Button 
              className="cursor-pointer px-5 py-2 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 text-sm sm:text-base border border-white/10 
                         shadow-lg 
                        hover:border-white/40 hover:shadow-white/10 ">
                View All Products
              </Button>
            </motion.div>
          </motion.div>
          
        </div>
      </motion.div>
    </motion.div>
  )
}

export default VideoHero
