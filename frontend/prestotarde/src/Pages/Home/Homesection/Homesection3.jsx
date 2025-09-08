"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

import img1 from './homesec3img/1img.webp'
import img2 from './homesec3img/2img.webp'
import img3 from './homesec3img/3img.webp'
import img4 from './homesec3img/4img.webp'





// Motion presets
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { 
      staggerChildren: 0.15,  // 0.15s delay between each tile
      delayChildren: 0.2      // Initial delay before first tile
    },
  },
}
const itemUp = {
  hidden: { opacity: 0, y: 20 },  // Start invisible and 20px down
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
}
const itemFade = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
}

// Add these new variants after the existing ones
const textContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { 
      staggerChildren: 0.2,
      delayChildren: 0.1
    },
  },
}

const textUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

const buttonContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { 
      staggerChildren: 0.15,
      delayChildren: 0.8
    },
  },
}

// Slate buttons
function SlatePrimaryButton({ children, className }) {
  return (
    <motion.button
      whileHover={{ y: -1 }}
      whileTap={{ y: 0 }}
      variants={textUp}
      className={cn(
        "cursor-pointer inline-flex items-center justify-center rounded-md bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 px-4 py-2 text-sm font-medium text-white shadow-sm ring-1 ring-slate-900/10 hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400",
        className,
        
      )}
    >
      {children}
    </motion.button>
  )
}

function SlateGhostButton({ children, className }) {
  return (
    <motion.button
      whileHover={{ y: -1 }}
      whileTap={{ y: 0 }}
      variants={textUp}
      className={cn(
        "inline-flex items-center justify-center rounded-md border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-300",
        className,
      )}
    >
      {children}
    </motion.button>
  )
}

// Diamond image tile (rotated square)
function DiamondTile({
  src,
  alt,
  className,
}) {
  return (
    <motion.div
      variants={itemUp}
      className={cn(
        "relative aspect-square w-full h-full max-w-[220px] rotate-45 overflow-hidden rounded-md border border-slate-200 bg-black/95  shadow-sm",
        "transition hover:shadow-md hover:ring-1 hover:ring-slate-200",
        className,
      )}
    >
      <img
        src={src || "/placeholder.svg?height=600&width=600&query=diamond%20macro"}
        alt={alt}
        className={cn(
          "pointer-events-none absolute inset-0 h-full w-full -rotate-45 ",
          "grayscale contrast-110 transition duration-300 ease-out hover:grayscale-0 hover:scale-[1.03]",
        )}
      />
    </motion.div>
  )
}

// Shared section header
function SectionHeader({
  tagline,
  title,
  subtitle,
  align = "left",
}) {
  return (
    <motion.div variants={textContainer} className={cn("space-y-3", align === "center" ? "text-center" : "text-left")}>
      {tagline ? (
        <motion.span variants={textUp} className="inline-block rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600">
          {tagline}
        </motion.span>
      ) : null}
      {title ? (
        <motion.h2
        variants={textUp}
          className={cn(
            "text-pretty font-bold text-slate-900",
            align === "center" ? "text-3xl md:text-4xl" : "text-3xl md:text-4xl",
          )}
        >
          {title}
        </motion.h2>
      ) : null}
      {subtitle ? (
        <motion.p
        variants={textUp}
          className={cn(
            "text-pretty text-md leading-relaxed text-slate-600",
            align === "center" ? "mx-auto max-w-2xl" : "max-w-xl",
          )}
        >
          {subtitle}
        </motion.p>
      ) : null}
    </motion.div>
  )
}

const defaultCopy = {
  tagline: "Established 1991 • Trusted Worldwide",
  title: "Precision Diamonds, Delivered with Integrity",
  subtitle:
    "Presto Trade is a leading supplier of Princess, Emerald, Asscher, Brilliant Cushions, Baguettes, Tapers, Round Brilliant, Marquise, and Pear diamonds. Our vertically integrated system—from rough to polished—ensures calibrated sizes, consistent quality, and on‑time delivery.",
  ctaLabelPrimary: "Explore Collections",
  ctaLabelSecondary: "Our Promise",
}
// Default images using placeholders (hard-coded URLs per guidelines)
const defaultImages = [
  { src: img1, alt: "Emerald cut diamond close-up" },
  { src: img2, alt: "Princess cut diamond macro" },
  { src: img3, alt: "Round brilliant diamond macro" },
  { src: img4, alt: "Pear shape diamond macro" },

]


export function DiamondGridWhiteClassic({
  tagline = defaultCopy.tagline,
  title = defaultCopy.title,
  subtitle = defaultCopy.subtitle,
  ctaLabelPrimary = defaultCopy.ctaLabelPrimary,
  ctaLabelSecondary = defaultCopy.ctaLabelSecondary,
  images = defaultImages,
  className,
}) {
  return (
    <section className={cn("bg-white py-8 overflow-hidden", className)}>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={container}
        className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 py-14 md:grid-cols-2 md:gap-12 md:px-6"
      >
        <div className="space-y-6 order-2 md:order-1">
          <SectionHeader tagline={tagline} title={title} subtitle={subtitle} />
          <motion.div variants={buttonContainer} className="flex gap-3">
            <SlatePrimaryButton>{ctaLabelPrimary}</SlatePrimaryButton>
            <SlateGhostButton>{ctaLabelSecondary}</SlateGhostButton>
          </motion.div>
        </div>
        <motion.div variants={container} className="grid grid-cols-2 place-items-center gap-5 order-1 md:order-2">
          {images.slice(0, 4).map((img, i) => (
            <DiamondTile key={i} variants={itemUp} src={img.src} alt={img.alt} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}






// Optional convenience wrapper
export function DiamondGridWhite({
  variant = "classic",
  ...props
}) {
  switch (variant) {
    // case "split":
    //   return <DiamondGridWhiteSplit {...props} />
   
    case "classic":
    default:
      return <DiamondGridWhiteClassic {...props} />
  }
}


export default DiamondGridWhite
