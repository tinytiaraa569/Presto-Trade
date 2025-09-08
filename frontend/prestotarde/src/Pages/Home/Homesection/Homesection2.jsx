// import React from 'react'
// "use client"

// import { motion } from "framer-motion"
// import { Crown, Gem, Boxes, Sparkles } from "lucide-react"
// import { cn } from "@/lib/utils"
// import homesec2img from './homesec2img/homesec2img.png'



// const defaultCopy = {
//   tagline: "Established 1991 • Trusted Worldwide",
//   title: "Precision Diamonds, Delivered with Integrity",
//   subtitle:
//     "Presto Trade is a leading supplier of Princess, Emerald, Asscher, Brilliant Cushions, Baguettes, Tapers, Round Brilliant, Marquise, and Pear diamonds. Our vertically integrated system—from rough to polished—ensures calibrated sizes, consistent quality, and on‑time delivery.",
//   ctaLabelPrimary: "Explore Collections",
//   ctaLabelSecondary: "Our Promise",
// }

// // Color system used (max 5):
// // - Primary: amber-600 (gold)
// // - Neutrals: white, zinc-900, zinc-600
// // - Accent: emerald-500

// const viewportOnce = { once: true, amount: 0.2 }

// const fadeUp = {
//   hidden: { opacity: 0, y: 24 },
//   show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
// }

// const fade = {
//   hidden: { opacity: 0 },
//   show: { opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
// }

// const stagger = {
//   hidden: {},
//   show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
// }

// const badge = (text) => (
//   <span className="inline-flex items-center rounded-full border border-slate-600/20 bg-slate-600/10 px-3 py-1 text-xs font-medium text-slate-800">
//     <Crown className="mr-1.5 h-3.5 w-3.5" aria-hidden />
//     {text}
//   </span>
// )

// const copyPoints = [
//   "Calibrated sizes and specific assortments",
//   "Consistent quality across parcels, pairs, and layouts",
//   "On‑time delivery with dependable programs",
//   "Precision planning with leading‑edge technology",
// ]

// const stats = [
//   { label: "Years of Trust", value: "34+" },
//   { label: "Shapes Offered", value: "10+" },
//   { label: "On‑Time Delivery", value: "99%" },
//   { label: "Global Clients", value: "500+" },
// ]

// const shapes = [
//   "Princess",
//   "Emerald",
//   "Asscher",
//   "Brilliant Cushion",
//   "Baguette",
//   "Taper",
//   "Round Brilliant",
//   "Marquise",
//   "Pear",
// ]

// export default function Homesection2({
//   className,
//   tagline = defaultCopy.tagline,
//   title = defaultCopy.title,
//   subtitle = defaultCopy.subtitle,
//   ctaLabelPrimary = defaultCopy.ctaLabelPrimary,
//   ctaLabelSecondary = defaultCopy.ctaLabelSecondary,
// }) {
//   return (
//     <section aria-labelledby="prestotrade-section-title" className={cn("w-full bg-white", className)}>
    
//         <FeaturesSplit
//           tagline={tagline}
//           title={title}
//           subtitle={subtitle}
//           ctaLabelPrimary={ctaLabelPrimary}
//           ctaLabelSecondary={ctaLabelSecondary}
//         />

//     </section>
//   )
// }

// /* Variant 3: Feature split (image + bullets) */
// function FeaturesSplit({
//   tagline,
//   title,
//   subtitle,
//   ctaLabelPrimary,
//   ctaLabelSecondary,
// }) {
//   return (
//     <div className="mx-auto !max-w-7xl px-4 py-12 md:py-24">
//       <motion.div
//         initial="hidden"
//         whileInView="show"
//         viewport={viewportOnce}
//         variants={stagger}
//         className="grid grid-cols-1 items-center gap-16 md:grid-cols-2"
//       >
//         <motion.div variants={fade} className="order-2 md:order-1">
//              <motion.div className="relative">

//           <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
//             <img
//               src={homesec2img}
//               alt="Advanced diamond planning and manufacturing"
//               fill
//               className="object-cover h-full"
//             />
//           </div>

//             <motion.div
//             className="pointer-events-none absolute -bottom-4 -left-4 hidden rounded-md bg-white px-3 py-2 shadow-sm md:inline-flex"
//             initial={{ opacity: 0, y: 12 }}
//             whileInView={{ opacity: 1, y: 0, transition: { delay: 0.35 } }}
//             viewport={viewportOnce}
//           >
//             <span className="inline-flex items-center gap-1 text-xs font-medium text-zinc-900">
//               <Gem className="h-4 w-4 text-slate-700" aria-hidden />
//               Calibrated Sizes
//             </span>
//           </motion.div>
//              </motion.div>

//         </motion.div>

//         <motion.div variants={fadeUp} className="order-1 space-y-5 md:order-2">
//             <div className='space-y-3'>

//           {badge(tagline)}
//           <h2 className="text-pretty text-2xl font-semibold text-zinc-900 md:text-3xl">{title}</h2>
//           <p className="max-w-prose text-sm leading-relaxed text-zinc-600 md:text-base">{subtitle}</p>
//             </div>
//           <dl className="grid grid-cols-1 gap-3 sm:grid-cols-2">
//             {[
//               { k: "Vertically Integrated", v: "Rough → Polished" },
//               { k: "Facilities", v: "Thailand" },
//               { k: "Programs", v: "Parcels • Pairs • Layouts" },
//               { k: "Core Values", v: "Reliability • CSR" },
//             ].map((row) => (
//               <div key={row.k} className="rounded-md bg-slate-500/5 p-3">
//                 <dt className="text-xs text-zinc-600">{row.k}</dt>
//                 <dd className="text-sm font-medium text-zinc-900">{row.v}</dd>
//               </div>
//             ))}
//           </dl>

//           <div className="flex flex-wrap gap-3 pt-1">
//             <a
//               href="#collections"
//               className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800  px-6 py-2 text-sm font-medium text-white"
//             >
//               {ctaLabelPrimary}
//             </a>
//             <a
//               href="#promise"
//               className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-zinc-900"
//             >
//               {ctaLabelSecondary}
//             </a>
//           </div>
//         </motion.div>
//       </motion.div>
//     </div>
//   )
// }

;("use client")

import { motion } from "framer-motion"
import { Crown, Gem } from "lucide-react"
import { cn } from "@/lib/utils"
import homesec2img from "./homesec2img/homesec2img.webp"

const defaultCopy = {
  tagline: "Luxury & Precision",
  title: "Precision Diamonds, Crafted for Perfection",
  subtitle:
    "Each diamond from Presto Trade reflects the highest standards of artistry and precision. Whether Princess, Emerald, or Pear, our stones are cut to maximize beauty and brilliance, making them the preferred choice of jewelers worldwide.",
  ctaLabelPrimary: "Explore Collections",
  ctaLabelSecondary: "Our Promise",
}

// Color system used (max 5):
// - Primary: amber-600 (gold)
// - Neutrals: white, zinc-900, zinc-600
// - Accent: emerald-500

const viewportOnce = { once: true, amount: 0.2 }

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

const fade = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
}

const textContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const textUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
}

const statsContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.6,
    },
  },
}

const buttonContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.8,
    },
  },
}

const badge = (text) => (
  <span className="inline-flex items-center rounded-full border border-slate-600/20 bg-slate-600/10 px-3 py-1 text-xs font-medium text-slate-800">
    <Crown className="mr-1.5 h-3.5 w-3.5" aria-hidden />
    {text}
  </span>
)

const copyPoints = [
  "Calibrated sizes and specific assortments",
  "Consistent quality across parcels, pairs, and layouts",
  "On‑time delivery with dependable programs",
  "Precision planning with leading‑edge technology",
]

const stats = [
  { label: "Years of Trust", value: "34+" },
  { label: "Shapes Offered", value: "10+" },
  { label: "On‑Time Delivery", value: "99%" },
  { label: "Global Clients", value: "500+" },
]

const shapes = [
  "Princess",
  "Emerald",
  "Asscher",
  "Brilliant Cushion",
  "Baguette",
  "Taper",
  "Round Brilliant",
  "Marquise",
  "Pear",
]

export default function Homesection2({
  className,
  tagline = defaultCopy.tagline,
  title = defaultCopy.title,
  subtitle = defaultCopy.subtitle,
  ctaLabelPrimary = defaultCopy.ctaLabelPrimary,
  ctaLabelSecondary = defaultCopy.ctaLabelSecondary,
}) {
  return (
    <section aria-labelledby="prestotrade-section-title" className={cn("w-full bg-white", className)}>
      <FeaturesSplit
        tagline={tagline}
        title={title}
        subtitle={subtitle}
        ctaLabelPrimary={ctaLabelPrimary}
        ctaLabelSecondary={ctaLabelSecondary}
      />
    </section>
  )
}

/* Variant 3: Feature split (image + bullets) */
function FeaturesSplit({ tagline, title, subtitle, ctaLabelPrimary, ctaLabelSecondary }) {
  return (
    <div className="mx-auto !max-w-7xl px-4 py-12 md:py-18">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={stagger}
        className="grid grid-cols-1 items-center gap-16 md:grid-cols-2"
      >
        <motion.div variants={fade} className="order-2 md:order-1">
          <motion.div className="relative">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
              <img
                src={homesec2img || "/placeholder.svg"}
                alt="Advanced diamond planning and manufacturing"
                fill
                className="object-cover h-full"
              />
            </div>
            <motion.div
              className="pointer-events-none absolute -bottom-4 -left-4 hidden rounded-md bg-white px-3 py-2 shadow-sm md:inline-flex"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0, transition: { delay: 0.35 } }}
              viewport={viewportOnce}
            >
              <span className="inline-flex items-center gap-1 text-xs font-medium text-zinc-900">
                <Gem className="h-4 w-4 text-slate-700" aria-hidden />
                Calibrated Sizes
              </span>
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div variants={fadeUp} className="order-1 space-y-5 md:order-2">
          <motion.div variants={textContainer} className="space-y-2">
            <motion.div variants={textUp}>{badge(tagline)}</motion.div>
            <motion.h2 variants={textUp} className="text-pretty text-2xl font-bold text-zinc-900 md:text-3xl">
              {title}
            </motion.h2>
            <motion.p variants={textUp} className="max-w-prose text-sm leading-relaxed text-zinc-600 md:text-base">
              {subtitle}
            </motion.p>
          </motion.div>
          <motion.dl variants={statsContainer} className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {[
              { k: "Vertically Integrated", v: "Rough → Polished" },
              { k: "Facilities", v: "Thailand" },
              { k: "Programs", v: "Parcels • Pairs • Layouts" },
              { k: "Core Values", v: "Reliability • CSR" },
            ].map((row) => (
              <motion.div key={row.k} variants={textUp} className="rounded-md bg-slate-500/5 p-3">
                <dt className="text-xs text-zinc-600">{row.k}</dt>
                <dd className="text-sm font-medium text-zinc-900">{row.v}</dd>
              </motion.div>
            ))}
          </motion.dl>
          <motion.div variants={buttonContainer} className="flex flex-wrap gap-3 pt-1">
            <motion.a
              variants={textUp}
              href="#collections"
              className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800  px-6 py-2 text-sm font-medium text-white"
            >
              {ctaLabelPrimary}
            </motion.a>
            <motion.a
              variants={textUp}
              href="#promise"
              className="inline-flex items-center justify-center rounded-md border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-300"
            >
              
              {ctaLabelSecondary}
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}
