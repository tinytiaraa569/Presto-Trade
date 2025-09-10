// "use client"

// import React, { useEffect, useRef, useState } from "react"
// import { motion, AnimatePresence, useReducedMotion, useMotionValue, animate } from "framer-motion"
// import { Facebook, Twitter, Instagram, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"
// import homesec1img from './images/homesecimg1.png'
// import homesec2img from './images/homesecimg2.png'
// import homesec3img from './images/homesecimg3.png'
// import homesec4img from './images/homesecimg4.png'
// import homesec5img from './images/homesecimg5.png'





// const slides = [
//   {
//     id: 0,
//     title: "Bracelet Collection",
//     subtitle: "Handcrafted designs that blend tradition with modern elegance.",
//     ctaPrimary: "Shop Bracelets",
//     ctaSecondary: "View Details",
//     img: homesec2img, // replace with your bracelet image import
//     imgAlt: "Close-up of a gold bracelet with gemstones",
//   },
//   {
//     id: 1,
//     title: "Ring Designs",
//     subtitle: "From solitaires to statement pieces, find the ring that defines you.",
//     ctaPrimary: "Discover Rings",
//     ctaSecondary: "Explore More",
//     img: homesec4img, // replace with your ring image import
//     imgAlt: "Diamond ring on a velvet cushion",
//   },
//   {
//     id: 2,
//     title: "Necklaces Collection",
//     subtitle: "Delicate chains and bold pendants for every occasion.",
//     ctaPrimary: "Shop Necklaces",
//     ctaSecondary: "Browse Collection",
//     img: homesec3img, // replace with your necklace image import
//     imgAlt: "Woman wearing layered gold necklaces",
//   },
//   {
//     id: 3,
//     title: " Earrings Collection",
//     subtitle: "Studs, hoops, and drops that light up your look.",
//     ctaPrimary: "Explore Earrings",
//     ctaSecondary: "See More",
//     img: homesec1img, // replace with your earrings image import
//     imgAlt: "Pair of diamond earrings on display stand",
//   },
//   {
//     id: 4,
//     title: " Pendant Collection",
//     subtitle: "Elegant designs that add a touch of sophistication.",
//     ctaPrimary: "Explore Pendants",
//     ctaSecondary: "See More",
//     img: homesec5img, // replace with your pendant image import
//     imgAlt: "Pair of diamond pendants on display stand",
//   },
// ]


// const ACCENT = "rgb(163, 230, 53)" // lime-400

// const easing= [0.22, 1, 0.36, 1]

// const AUTOPLAY_MS = 6000

// const KEN_BURNS_START = 1.12
// const KEN_BURNS_END = 1.0

// const PAN_PX = 80 // total pan distance over a slide
// const PAN_Y_FRACTION = 0.45 // vertical pan is gentler than horizontal

// const titleContainer = {
//   hidden: {},
//   show: {
//     transition: {
//       // tight, premium stagger for title words
//       staggerChildren: 0.035,
//       delayChildren: 0.18,
//     },
//   },
// }

// const titleWord = {
//   hidden: { y: 24, opacity: 0, filter: "blur(6px)" },
//   show: {
//     y: 0,
//     opacity: 1,
//     filter: "blur(0px)",
//     transition: { type: "spring", stiffness: 460, damping: 38, mass: 0.55 },
//   },
// }

// const paragraphContainer = {
//   hidden: {},
//   show: {
//     transition: {
//       // slightly tighter stagger for readability
//       staggerChildren: 0.018,
//       delayChildren: 0.28,
//     },
//   },
// }

// const paragraphWord = {
//   hidden: { y: 12, opacity: 0, filter: "blur(3px)" },
//   show: {
//     y: 0,
//     opacity: 1,
//     filter: "blur(0px)",
//     transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
//   },
// }

// function AnimatedTitle({
//   text,
//   className,
// }) {
//   const prefersReducedMotion = useReducedMotion()
//   if (prefersReducedMotion) {
//     return <h1 className={className}>{text}</h1>
//   }
//   const words = text.split(" ")
//   return (
//     <motion.h1 variants={titleContainer} initial="hidden" animate="show" className={className}>
//       {words.map((w, i) => (
//         <motion.span key={i} variants={titleWord} className="inline-block">
//           {w}&nbsp;
//         </motion.span>
//       ))}
//     </motion.h1>
//   )
// }

// function AnimatedParagraph({
//   text,
//   className,
//   underlineKey,
// }) {
//   const prefersReducedMotion = useReducedMotion()
//   if (prefersReducedMotion) {
//     return <p className={className}>{text}</p>
//   }
//   const words = text.split(" ")
//   return (
//     <div className="relative">
//       <motion.p variants={paragraphContainer} initial="hidden" animate="show" className={className}>
//         {words.map((w, i) => (
//           <motion.span key={i} variants={paragraphWord} className="inline-block">
//             {w}&nbsp;
//           </motion.span>
//         ))}
//       </motion.p>
//       {/* subtle professional shine sweep across paragraph */}
      
//     </div>
//   )
// }

// const Homesection = () => {
//   const [index, setIndex] = useState(0)
//   const [direction, setDirection] = useState(1)
//   const length = slides.length

//   const prefersReducedMotion = useReducedMotion()
//   const [isPaused, setIsPaused] = useState(false)

//   const kbScale = useMotionValue(prefersReducedMotion ? KEN_BURNS_END : KEN_BURNS_START)

//   const kbX = useMotionValue(0)
//   const kbY = useMotionValue(0)
//   const kbAnimRef =useRef(null)
//   const kbXAnimRef =useRef(null)
//   const kbYAnimRef =useRef(null)

//   const paginate = (dir) => {
//     setDirection(dir)
//     setIndex((i) => (i + dir + length) % length)
//   }

//   useEffect(() => {
//     const onKey = (e) => {
//       if (e.key === "ArrowRight") paginate(1)
//       if (e.key === "ArrowLeft") paginate(-1)
//     }
//     window.addEventListener("keydown", onKey)
//     return () => window.removeEventListener("keydown", onKey)
//   }, [])

//   useEffect(() => {
//     if (prefersReducedMotion || isPaused) return
//     const id = setInterval(() => paginate(1), AUTOPLAY_MS)
//     return () => clearInterval(id)
//   }, [index, isPaused, prefersReducedMotion])

//   useEffect(() => {
//     const onVis = () => setIsPaused(document.hidden)
//     document.addEventListener("visibilitychange", onVis)
//     return () => document.removeEventListener("visibilitychange", onVis)
//   }, [])

//   useEffect(() => {
//     const next = new window.Image()
//     next.src = slides[(index + 1) % length].img
//   }, [index])

//   useEffect(() => {
//     if (prefersReducedMotion) {
//       kbScale.set(KEN_BURNS_END)
//       kbAnimRef.current?.stop()
//       kbAnimRef.current = null
//     } else {
//       kbAnimRef.current?.stop()
//       kbScale.set(KEN_BURNS_START)
//       kbAnimRef.current = animate(kbScale, KEN_BURNS_END, {
//         duration: Math.max(0.4, AUTOPLAY_MS / 1000 - 0.6),
//         ease: "linear",
//       })
//     }

//     // pan: choose deterministic start direction based on slide id
//     // even ids pan from right-top -> center, odd ids from left-bottom -> center
//     const startX = slides[index].id % 2 === 0 ? PAN_PX : -PAN_PX
//     const startY = slides[index].id % 3 === 0 ? PAN_PX * PAN_Y_FRACTION : -PAN_PX * PAN_Y_FRACTION

//     kbXAnimRef.current?.stop()
//     kbYAnimRef.current?.stop()

//     if (prefersReducedMotion) {
//       kbX.set(0)
//       kbY.set(0)
//     } else {
//       kbX.set(startX)
//       kbY.set(startY)
//       const duration = Math.max(0.4, AUTOPLAY_MS / 1000 - 0.6)
//       kbXAnimRef.current = animate(kbX, 0, { duration, ease: "linear" })
//       kbYAnimRef.current = animate(kbY, 0, { duration, ease: "linear" })
//     }

//     return () => {
//       kbAnimRef.current?.stop()
//       kbAnimRef.current = null
//       kbXAnimRef.current?.stop()
//       kbXAnimRef.current = null
//       kbYAnimRef.current?.stop()
//       kbYAnimRef.current = null
//     }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [index, prefersReducedMotion])

//   useEffect(() => {
//     if (prefersReducedMotion) return

//     const resume = () => {
//       const remainingScale = Math.max(0, kbScale.get() - KEN_BURNS_END)
//       const scaleFrac = remainingScale / (KEN_BURNS_START - KEN_BURNS_END)
//       const duration = Math.max(0.2, (AUTOPLAY_MS / 1000 - 0.6) * scaleFrac)

//       kbAnimRef.current?.stop()
//       kbXAnimRef.current?.stop()
//       kbYAnimRef.current?.stop()

//       kbAnimRef.current = animate(kbScale, KEN_BURNS_END, { duration, ease: "linear" })
//       kbXAnimRef.current = animate(kbX, 0, { duration, ease: "linear" })
//       kbYAnimRef.current = animate(kbY, 0, { duration, ease: "linear" })
//     }

//     if (isPaused) {
//       kbAnimRef.current?.stop()
//       kbAnimRef.current = null
//       kbXAnimRef.current?.stop()
//       kbXAnimRef.current = null
//       kbYAnimRef.current?.stop()
//       kbYAnimRef.current = null
//     } else {
//       // resume smoothly from current values
//       resume()
//     }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [isPaused, prefersReducedMotion])

//   return (
//     <section
//       aria-label="Hero"
//       className="relative mx-auto w-full overflow-hidden"
//       onMouseEnter={() => setIsPaused(true)}
//       onMouseLeave={() => setIsPaused(false)}
//       onFocusCapture={() => setIsPaused(true)}
//       onBlurCapture={() => setIsPaused(false)}
//     >
//       {/* aria-live for the current slide */}
//       <div aria-live="polite" className="sr-only">
//         {slides[index].title}
//       </div>

//       <div className="relative h-[78vh] w-full min-h-[520px] md:h-[88vh]">
//         <div className="absolute inset-0">
//           <AnimatePresence initial={false} custom={direction} mode="wait">
//             <motion.div
//               key={slides[index].id}
//               custom={direction}
//               initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, x: direction > 0 ? 40 : -40 }}
//               animate={
//                 prefersReducedMotion
//                   ? { opacity: 1 }
//                   : { opacity: 1, x: 0, transition: { duration: 0.9, ease: easing } }
//               }
//               exit={
//                 prefersReducedMotion
//                   ? { opacity: 0 }
//                   : { opacity: 0, x: direction > 0 ? -40 : 40, transition: { duration: 0.6, ease: easing } }
//               }
//               transition={{ duration: 0.7, ease: easing }}
//               className="absolute inset-0"
//             >
//               <motion.img
//                 src={slides[index].img}
//                 alt={slides[index].imgAlt}
//                 loading="eager"
//                 decoding="async"
//                 style={{ scale: kbScale, x: kbX, y: kbY }}
//                 // initial/animate handled by wrapper; keep image transform values only
//                 className="h-full w-full object-cover"
//               />
//             </motion.div>
//           </AnimatePresence>

//           <div
//             className="pointer-events-none absolute inset-0"
//             aria-hidden="true"
//             style={{
//               background: "radial-gradient(80rem 40rem at 50% 60%, rgba(0,0,0,0.0) 0%, rgba(0,0,0,0.45) 85%)",
//             }}
//           />
//           <div
//             className="pointer-events-none absolute inset-0"
//             aria-hidden="true"
//             style={{
//               background:
//                 "linear-gradient(90deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.25) 25%, rgba(0,0,0,0.10) 45%, rgba(0,0,0,0) 65%)",
//             }}
//           />
//         </div>

//         <div className="relative z-20 mx-auto flex h-full max-w-7xl items-center px-6 md:px-10">
//           <div className="flex max-w-3xl flex-col text-left px-6 md:px-10">
//             <motion.div
//               initial={{ opacity: 0, y: 18 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, ease: easing, delay: 0.1 }}
//               className="inline-flex w-fit items-center rounded-full border border-white/30 bg-white/5 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm"
//             >
//               We need to save
//             </motion.div>

//             <div className="mt-3 overflow-hidden">
//               <AnimatedTitle
//                 key={index}
//                 text={slides[index].title}
//                 className="text-pretty text-4xl font-extrabold leading-tight text-white drop-shadow-sm md:text-6xl lg:text-7xl"
//               />
//               <motion.span
//                 key={`underline-${index}`}
//                 className="mt-3 block h-0.5 w-24 origin-left bg-white/80 md:w-32"
//                 initial={{ scaleX: 0, opacity: 0 }}
//                 animate={{ scaleX: 1, opacity: 1 }}
//                 transition={{ duration: 0.6, ease: easing, delay: 0.2 }}
//               />
//             </div>

//             <AnimatedParagraph
//               underlineKey={index}
//               text={slides[index].subtitle}
//               className="mt-4 max-w-xl text-base leading-relaxed text-white/85 md:max-w-2xl md:text-lg"
//             />

//             {/* CTA: professional pill with accent arrow ring */}
//             <motion.div
//               initial={{ opacity: 0, y: 16 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, ease: easing, delay: 0.35 }}
//               className="mt-7 flex flex-wrap items-center gap-3"
//             >
//               <motion.a
//                 href="#"
//                 whileHover={{ y: -2 }}
//                 whileTap={{ scale: 0.98 }}
//                 className="group inline-flex items-center gap-3 rounded-full border border-white/40 px-5 py-3 text-sm font-medium text-white transition-colors hover:border-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
//                 aria-label={slides[index].ctaPrimary}
//               >
//                 <span>{slides[index].ctaPrimary}</span>
//                 <span
//                   className="grid aspect-square h-8 w-8 place-items-center rounded-full"
//                   style={{ border: `2px solid ${ACCENT}` }}
//                 >
//                   <ArrowRight size={16} style={{ color: ACCENT }} />
//                 </span>
//               </motion.a>
//               <motion.a
//                 href="#"
//                 whileHover={{ y: -2 }}
//                 whileTap={{ scale: 0.98 }}
//                 className="rounded-full border border-white/45 bg-white/5 px-5 py-3 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
//                 aria-label={slides[index].ctaSecondary}
//               >
//                 {slides[index].ctaSecondary}
//               </motion.a>
//             </motion.div>
//           </div>

//           <div className="pointer-events-auto absolute left-0 top-1/2 hidden -translate-y-1/2 flex-col gap-3 md:flex">
//             <SocialIcon label="Facebook" icon={<Facebook size={18} />} />
//             <SocialIcon label="Twitter" icon={<Twitter size={18} />} />
//             <SocialIcon label="Instagram" icon={<Instagram size={18} />} />
//           </div>

//           <div
//             className="pointer-events-none absolute right-6 top-1/2 hidden -translate-y-1/2 md:block"
//             aria-hidden="true"
//           >
//             <div className="flex -rotate-90 items-center gap-2 text-white/80">
//               <span className="text-xs">Scroll Down</span>
//               <div className="h-8 w-px bg-white/60" />
//             </div>
//           </div>
//         </div>

//         <div className="pointer-events-none absolute bottom-6 left-6 right-6 z-30 flex items-center justify-between">
//           {/* Dots - bottom-left */}
//           <div className="pointer-events-auto flex items-center gap-3">
//             {slides.map((s, i) => (
//               <button
//                 key={s.id}
//                 aria-label={`Go to slide ${i + 1}`}
//                 aria-current={i === index}
//                 onClick={() => {
//                   setDirection(i > index ? 1 : -1)
//                   setIndex(i)
//                 }}
//                 className="relative h-3 w-3 rounded-full"
//                 style={{
//                   background: i === index ? ACCENT : "rgba(255,255,255,0.4)",
//                   boxShadow: i === index ? "0 0 0 2px rgba(255,255,255,0.7) inset" : "none",
//                 }}
//               />
//             ))}
//           </div>

//           {/* Circle nav - bottom-right, replaces mid-screen arrows */}
//           <div className="pointer-events-auto ml-auto flex items-center gap-3">
//             <CircleButton label="Previous slide" onClick={() => paginate(-1)} className="cursor-pointer">
//               <ChevronLeft className="text-white cursor-pointer" size={20} />
//             </CircleButton>
//             <CircleButton label="Next slide" onClick={() => paginate(1)} className="cursor-pointer">
//               <ChevronRight className="text-white cursor-pointer" size={20} />
//             </CircleButton>
//           </div>
//         </div>

//         {/* Progress bar (subtle) */}
//         <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-1 bg-white/10">
//           {!isPaused && !prefersReducedMotion && (
//             <motion.div
//               key={index}
//               className="h-full"
//               style={{ backgroundColor: ACCENT }}
//               initial={{ width: "0%" }}
//               animate={{ width: "100%" }}
//               transition={{ duration: AUTOPLAY_MS / 1000, ease: "linear" }}
//             />
//           )}
//         </div>
//       </div>
//     </section>
//   )
// }

// function SocialIcon({ label, icon }) {
//   return (
//     <a
//       href="#"
//       aria-label={label}
//       className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/40 text-white transition-colors hover:border-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
//       title={label}
//     >
//       {icon}
//     </a>
//   )
// }

// function CircleButton({
//   label,
//   onClick,
//   children,
// }) {
//   return (
//     <button
//       aria-label={label}
//       onClick={onClick}
//       className="grid h-12 w-12 place-items-center rounded-full border border-white/60 bg-white/5 text-white backdrop-blur-sm transition-colors hover:border-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
//       title={label}
//     >
//       {children}
//     </button>
//   )
// }

// export default Homesection

"use client"

import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence, useReducedMotion, useMotionValue, animate } from "framer-motion"
import { Facebook, Twitter, Instagram, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"

import homesec1img from './images/homesecimg1.png'
import homesec2img from './images/homesecimg2.png'
import homesec3img from './images/homesecimg3.png'
import homesec4img from './images/homesecimg4.png'
import homesec5img from './images/homesecimg5.png'
const ACCENT = "rgb(163, 230, 53)" // lime-400
const easing = [0.22, 1, 0.36, 1] // declared the variable here
const AUTOPLAY_MS = 6000


const defaultSlides = [
  {
    id: 0,
    title: "Bracelet Collection",
    subtitle: "Handcrafted designs that blend tradition with modern elegance.",
    ctaPrimary: "Shop Bracelets",
    ctaSecondary: "View Details",
    img: homesec2img, // replace with your bracelet image import
    imgAlt: "Close-up of a gold bracelet with gemstones",
  },
  {
    id: 1,
    title: "Ring Designs",
    subtitle: "From solitaires to statement pieces, find the ring that defines you.",
    ctaPrimary: "Discover Rings",
    ctaSecondary: "Explore More",
    img: homesec4img, // replace with your ring image import
    imgAlt: "Diamond ring on a velvet cushion",
  },
  {
    id: 2,
    title: "Necklaces Collection",
    subtitle: "Delicate chains and bold pendants for every occasion.",
    ctaPrimary: "Shop Necklaces",
    ctaSecondary: "Browse Collection",
    img: homesec3img, // replace with your necklace image import
    imgAlt: "Woman wearing layered gold necklaces",
  },
  {
    id: 3,
    title: " Earrings Collection",
    subtitle: "Studs, hoops, and drops that light up your look.",
    ctaPrimary: "Explore Earrings",
    ctaSecondary: "See More",
    img: homesec1img, // replace with your earrings image import
    imgAlt: "Pair of diamond earrings on display stand",
  },
  {
    id: 4,
    title: " Pendant Collection",
    subtitle: "Elegant designs that add a touch of sophistication.",
    ctaPrimary: "Explore Pendants",
    ctaSecondary: "See More",
    img: homesec5img, // replace with your pendant image import
    imgAlt: "Pair of diamond pendants on display stand",
  },
]

const titleContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.035, delayChildren: 0.18 },
  },
}
const titleWord = {
  hidden: { y: 24, opacity: 0, filter: "blur(6px)" },
  show: {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 460, damping: 38, mass: 0.55 },
  },
}
const paragraphContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.018, delayChildren: 0.28 },
  },
}
const paragraphWord = {
  hidden: { y: 12, opacity: 0, filter: "blur(3px)" },
  show: { y: 0, opacity: 1, filter: "blur(0px)", transition: { duration: 0.35, ease: easing } }, // used the declared variable here
}

function AnimatedTitle({ text, className }) {
  const prefersReducedMotion = useReducedMotion()
  if (prefersReducedMotion) return <h1 className={className}>{text}</h1>
  const words = text.split(" ")
  return (
    <motion.h1 variants={titleContainer} initial="hidden" animate="show" className={className}>
      {words.map((w, i) => (
        <motion.span key={i} variants={titleWord} className="inline-block">
          {w}&nbsp;
        </motion.span>
      ))}
    </motion.h1>
  )
}

function AnimatedParagraph({ text, className }) {
  const prefersReducedMotion = useReducedMotion()
  if (prefersReducedMotion) return <p className={className}>{text}</p>
  const words = text.split(" ")
  return (
    <motion.p variants={paragraphContainer} initial="hidden" animate="show" className={className}>
      {words.map((w, i) => (
        <motion.span key={i} variants={paragraphWord} className="inline-block">
          {w}&nbsp;
        </motion.span>
      ))}
    </motion.p>
  )
}
function SocialIcon({ label, icon }) {
  return (
    <a
      href="#"
      aria-label={label}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/40 text-white transition-colors hover:border-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
      title={label}
    >
      {icon}
    </a>
  )
}
export default function HomesectionVariants({ variant = 2, slides = defaultSlides, loop = true }) {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(1)
  const [isPaused, setIsPaused] = useState(false)
  const prefersReducedMotion = useReducedMotion()
  const length = slides.length

  const dragX = useMotionValue(0)
  const isDraggingRef = useRef(false)

  const canGoPrev = loop || index > 0
  const canGoNext = loop || index < length - 1

  const paginate = (dir) => {
    if (dir < 0 && !canGoPrev) return
    if (dir > 0 && !canGoNext) return
    setDirection(dir)
    setIndex((i) => {
      if (!loop) return Math.min(Math.max(i + dir, 0), length - 1)
      return (i + dir + length) % length
    })
  }

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") paginate(1)
      if (e.key === "ArrowLeft") paginate(-1)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, canGoNext, canGoPrev, loop])

  useEffect(() => {
    if (prefersReducedMotion || isPaused) return
    const id = setInterval(() => paginate(1), AUTOPLAY_MS)
    return () => clearInterval(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, isPaused, prefersReducedMotion])

  useEffect(() => {
    if (typeof window === "undefined") return
    const next = new window.Image()
    next.crossOrigin = "anonymous"
    next.src = slides[Math.min(index + 1, length - 1)].img
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index])

  const onDragStart = () => {
    isDraggingRef.current = true
    setIsPaused(true)
  }

  const onDragEnd = (_, info) => {
    const { offset, velocity } = info
    const threshold = 120
    const vx = velocity.x
    const dx = offset.x
    if (dx < -threshold || vx < -600) {
      paginate(1)
    } else if (dx > threshold || vx > 600) {
      paginate(-1)
    }
    animate(dragX, 0, { type: "spring", stiffness: 340, damping: 32 })
    isDraggingRef.current = false
    setIsPaused(false)
  }

  const renderVariant = (s) => {
    if (variant === 3) {
      return <SlicesImage key={s.id} slide={s} direction={direction} />
    }
    return <SwipeRgbImage key={s.id} slide={s} direction={direction} />
  }

  return (
    <section
      aria-label="Hero"
      className="relative mx-auto w-full overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => !isDraggingRef.current && setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={() => !isDraggingRef.current && setIsPaused(false)}
    >
      {/* aria-live current slide */}
      <div aria-live="polite" className="sr-only">
        {slides[index]?.title}
      </div>

      <div className="relative h-[78vh] w-full min-h-[520px] md:h-[88vh]">
        {/* Drag layer */}
        <motion.div
          className="absolute inset-0 cursor-grab active:cursor-grabbing"
          // className="absolute inset-0 "

          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          style={{ x: dragX }}
          onDragStart={onDragStart}
          onDragEnd={onDragEnd}
        >
          {/* Image stage */}
          <div className="absolute inset-0">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={slides[index]?.id}
                custom={direction}
                className="absolute inset-0"
                initial={
                  prefersReducedMotion
                    ? { opacity: 0 }
                    : { opacity: 0, x: direction > 0 ? 60 : -60, filter: "blur(8px)" }
                }
                animate={
                  prefersReducedMotion
                    ? { opacity: 1 }
                    : { opacity: 1, x: 0, filter: "blur(0px)", transition: { duration: 0.9, ease: easing } } // used the declared variable here
                }
                exit={
                  prefersReducedMotion
                    ? { opacity: 0 }
                    : {
                        opacity: 0,
                        x: direction > 0 ? -60 : 60,
                        filter: "blur(6px)",
                        transition: { duration: 0.55, ease: easing },
                      } // used the declared variable here
                }
                transition={{ duration: 0.7, ease: easing }} // used the declared variable here
              >
                {renderVariant(slides[index])}
              </motion.div>
            </AnimatePresence>

            {/* Pro vignette and side gradient wash */}
            <div
              className="pointer-events-none absolute inset-0"
              aria-hidden="true"
              style={{
                background: "radial-gradient(80rem 40rem at 50% 60%, rgba(0,0,0,0.0) 0%, rgba(0,0,0,0.45) 85%)",
              }}
            />
            <div
              className="pointer-events-none absolute inset-0"
              aria-hidden="true"
              style={{
                background:
                  "linear-gradient(90deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.25) 25%, rgba(0,0,0,0.10) 45%, rgba(0,0,0,0) 65%)",
              }}
            />
            {/* subtle accent color wash for depth */}
            <div
              className="pointer-events-none absolute inset-0 mix-blend-soft-light"
              aria-hidden="true"
              style={{
                background:
                  "radial-gradient(60rem 40rem at 75% 55%, rgba(163,230,53,0.10) 0%, rgba(163,230,53,0.0) 60%)",
              }}
            />
          </div>

          {/* Copy + CTAs */}
          <div className="relative z-20 mx-auto flex h-full max-w-7xl items-center px-2 md:px-10">
            <div className="flex max-w-3xl flex-col text-left px-2 md:px-10">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: easing, delay: 0.1 }} // used the declared variable here
                className="inline-flex w-fit items-center rounded-full border border-white/30 bg-white/5 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm"
              >
                We need to save
              </motion.div>

              <div className="mt-3 overflow-hidden">
                <AnimatedTitle
                  key={index}
                  text={slides[index]?.title || ""}
                  className="text-pretty text-3xl font-extrabold leading-tight text-white drop-shadow-sm md:text-6xl lg:text-7xl"
                />
                <motion.span
                  key={`underline-${index}`}
                  className="mt-3 block h-0.5 w-24 origin-left bg-white/80 md:w-32"
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{ scaleX: 1, opacity: 1 }}
                  transition={{ duration: 0.6, ease: easing, delay: 0.2 }} // used the declared variable here
                />
              </div>

              <AnimatedParagraph
                text={slides[index]?.subtitle || ""}
                className="mt-4 max-w-xl text-base leading-relaxed text-white/85 md:max-w-2xl md:text-lg"
              />

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: easing, delay: 0.35 }} // used the declared variable here
                className="mt-7 flex flex-wrap items-center gap-3"
              >
                <motion.a
                  href="#"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="group inline-flex items-center gap-3 rounded-full border border-white/40 px-4 py-1 sm:px-5 sm:py-3 text-sm font-medium text-white transition-colors hover:border-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                  aria-label={slides[index]?.ctaPrimary || "Primary action"}
                >
                  <span>{slides[index]?.ctaPrimary || "Shop Now"}</span>
                  <span
                    className="grid aspect-square h-8 w-8 place-items-center rounded-full"
                    style={{ border: `2px solid ${ACCENT}` }}
                  >
                    <ArrowRight size={16} style={{ color: ACCENT }} />
                  </span>
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="rounded-full border border-white/45 bg-white/5 px-4 py-1 sm:px-5 sm:py-3 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                  aria-label={slides[index]?.ctaSecondary || "Secondary action"}
                >
                  {slides[index]?.ctaSecondary || "View Details"}
                </motion.a>
              </motion.div>
            </div>
            <div className="pointer-events-auto absolute left-0 top-1/2 hidden -translate-y-1/2 flex-col gap-3 md:flex">
                        <SocialIcon label="Facebook" icon={<Facebook size={18} />} />
                        <SocialIcon label="Twitter" icon={<Twitter size={18} />} />
                        <SocialIcon label="Instagram" icon={<Instagram size={18} />} />
                      </div>

            {/* Side scroll hint */}
            <div className="pointer-events-none absolute right-6 top-1/2 hidden -translate-y-1/2 md:block">
              <div className="flex -rotate-90 items-center gap-2 text-white/80">
                <span className="text-xs">Scroll Down</span>
                <div className="h-8 w-px bg-white/60" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Dots + arrows */}
        <div className="pointer-events-none absolute bottom-6 left-6 right-6 z-30 flex items-center justify-between">
          <div className="pointer-events-auto flex items-center gap-3">
            {slides.map((s, i) => (
              <button
                key={s.id}
                aria-label={`Go to slide ${i + 1}`}
                aria-current={i === index}
                onClick={() => {
                  setDirection(i > index ? 1 : -1)
                  setIndex(i)
                }}
                className="relative h-3 w-3 rounded-full"
                style={{
                  background: i === index ? ACCENT : "rgba(255,255,255,0.4)",
                  boxShadow: i === index ? "0 0 0 2px rgba(255,255,255,0.7) inset" : "none",
                }}
              />
            ))}
          </div>

          <div className="pointer-events-auto ml-auto flex items-center gap-3">
            <CircleButton label="Previous slide" onClick={() => paginate(-1)} disabled={!canGoPrev}>
              <ChevronLeft className="text-white" size={20} />
            </CircleButton>
            <CircleButton label="Next slide" onClick={() => paginate(1)} disabled={!canGoNext}>
              <ChevronRight className="text-white" size={20} />
            </CircleButton>
          </div>
        </div>

        {/* Progress bar */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-1 bg-white/10">
          {!isPaused && !prefersReducedMotion && (
            <motion.div
              key={index}
              className="h-full"
              style={{ backgroundColor: ACCENT }}
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: AUTOPLAY_MS / 1000, ease: "linear" }}
            />
          )}
        </div>
      </div>
    </section>
  )
}

function CircleButton({
  label,
  onClick,
  disabled,
  children,
}) {
  return (
    <button
      aria-label={label}
      onClick={onClick}
      disabled={disabled}
      className="grid h-12 w-12 place-items-center rounded-full border border-white/60 bg-white/5 text-white backdrop-blur-sm transition-colors hover:border-white hover:bg-white/10 disabled:opacity-40 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
      title={label}
    >
      {children}
    </button>
  )
}

function SwipeRgbImage({ slide, direction }) {
  return (
    <div className="absolute inset-0">
      {/* Base image */}
      <img
        src={slide.img || "/placeholder.svg"}
        alt={slide.imgAlt}
        loading="eager"
        decoding="async"
        className="h-full w-full object-cover"
        style={{ filter: "contrast(1.04) saturate(1.05)" }}
      />

      {/* Chromatic aberration overlays */}
      <motion.img
        key={`r-${slide.id}`}
        src={slide.img}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover mix-blend-screen"
        style={{ opacity: 0.18, filter: "hue-rotate(-20deg) saturate(1.4)" }}
        initial={{ x: direction > 0 ? 16 : -16, blur: 8 }}
        animate={{ x: 0, blur: 0 }}
        exit={{ x: direction > 0 ? -12 : 12, blur: 6 }}
        transition={{ duration: 0.7, ease: easing }} // used the declared variable here
      />
      <motion.img
        key={`b-${slide.id}`}
        src={slide.img}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover mix-blend-screen"
        style={{ opacity: 0.14, filter: "hue-rotate(150deg) saturate(1.4)" }}
        initial={{ x: direction > 0 ? 10 : -10, blur: 6 }}
        animate={{ x: 0, blur: 0 }}
        exit={{ x: direction > 0 ? -8 : 8, blur: 5 }}
        transition={{ duration: 0.65, ease: easing }} // used the declared variable here
      />
    </div>
  )
}

function SlicesImage({ slide, direction }) {
  const SLICES = 8
  const items = Array.from({ length: SLICES }, (_, i) => i)
  return (
    <div className="absolute inset-0">
      <div className="absolute inset-0 flex">
        {items.map((i) => {
          const widthPct = 100 / SLICES
          const posPct = (i / (SLICES - 1)) * 100
          return (
            <motion.div
              key={`${slide.id}-${i}`}
              className="relative h-full"
              style={{
                width: `${widthPct}%`,
                backgroundImage: `url(${slide.img})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: `${posPct}% center`,
                filter: "contrast(1.04) saturate(1.05)",
              }}
              initial={{
                x: direction > 0 ? 24 : -24,
                y: direction > 0 ? 14 : -14,
                opacity: 0,
                filter: "blur(6px) contrast(1.04) saturate(1.05)",
              }}
              animate={{
                x: 0,
                y: 0,
                opacity: 1,
                filter: "blur(0px) contrast(1.04) saturate(1.05)",
              }}
              exit={{
                x: direction > 0 ? -18 : 18,
                y: direction > 0 ? -10 : 10,
                opacity: 0,
                filter: "blur(5px) contrast(1.04) saturate(1.05)",
              }}
              transition={{
                duration: 0.7,
                ease: easing, // used the declared variable here
                delay: i * 0.035,
              }}
            />
          )
        })}
      </div>
    </div>
  )
}




