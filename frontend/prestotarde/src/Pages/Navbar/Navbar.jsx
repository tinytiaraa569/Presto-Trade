// // // // // "use client"


// // // // // import { useRef, useState } from "react"
// // // // // import { motion, AnimatePresence, useReducedMotion } from "framer-motion"
// // // // // import { cn } from "@/lib/utils"
// // // // // import { ChevronDown, Globe, Heart, Search, ShoppingBag, User, X } from "lucide-react"
// // // // // import { Button } from "@/components/ui/button"
// // // // // import {
// // // // //   DropdownMenu,
// // // // //   DropdownMenuContent,
// // // // //   DropdownMenuItem,
// // // // //   DropdownMenuLabel,
// // // // //   DropdownMenuSeparator,
// // // // //   DropdownMenuTrigger,
// // // // // } from "@/components/ui/dropdown-menu"
// // // // // import logo from './logo.webp'

// // // // // // Declare missing variables
// // // // // const staggerContainer = {
// // // // //   open: {
// // // // //     transition: { staggerChildren: 0.075, delayChildren: 0.1 },
// // // // //   },
// // // // //   closed: {
// // // // //     transition: { staggerChildren: 0.05, staggerDirection: -1 },
// // // // //   },
// // // // // }

// // // // // const staggerItem = {
// // // // //   open: {
// // // // //     y: 0,
// // // // //     opacity: 1,
// // // // //     transition: {
// // // // //       y: { stiffness: 1000, velocity: -100 },
// // // // //     },
// // // // //   },
// // // // //   closed: {
// // // // //     y: 50,
// // // // //     opacity: 0,
// // // // //     transition: {
// // // // //       y: { stiffness: 1000 },
// // // // //     },
// // // // //   },
// // // // // }

// // // // // const promoVariants = {
// // // // //   initial: { opacity: 0 },
// // // // //   animate: { opacity: 1 },
// // // // // }

// // // // // const initialLogo = { opacity: 0 }
// // // // // const animateLogo = { opacity: 1 }

// // // // // const shimmerVariants = {
// // // // //   rest: { x: "-100%" },
// // // // //   sweep: { x: "100%" },
// // // // // }

// // // // // const panelVariants = {
// // // // //   open: {
// // // // //     y: 0,
// // // // //     opacity: 1,
// // // // //     transition: {
// // // // //       y: { stiffness: 1000, velocity: -100 },
// // // // //     },
// // // // //   },
// // // // //   closed: {
// // // // //     y: "100%",
// // // // //     opacity: 0,
// // // // //     transition: {
// // // // //       y: { stiffness: 1000 },
// // // // //     },
// // // // //   },
// // // // // }



// // // // // function IconButton({ children, label, onClick, className }) {
// // // // //   const prefersReducedMotion = useReducedMotion()

// // // // //   return (
// // // // //     <motion.button
// // // // //       type="button"
// // // // //       onClick={onClick}
// // // // //       aria-label={label}
// // // // //       className={cn(
// // // // //         "inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-background to-accent/20 border border-border/60 hover:border-border hover:bg-accent/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 transition-all duration-200 shadow-sm",
// // // // //         className,
// // // // //       )}
// // // // //       whileHover={prefersReducedMotion ? undefined : { scale: 1.05, y: -1 }}
// // // // //       whileTap={prefersReducedMotion ? undefined : { scale: 0.95 }}
// // // // //     >
// // // // //       {children}
// // // // //     </motion.button>
// // // // //   )
// // // // // }



// // // // // const Navbar = ({ className }) => {
// // // // //   const prefersReducedMotion = useReducedMotion()
// // // // //   const [panelOpen, setPanelOpen] = useState(false)
// // // // //   const [activeMenu, setActiveMenu] = useState("all")
// // // // //   const [mobileOpen, setMobileOpen] = useState(false)

// // // // //   const headerRef = useRef(null)

// // // // //   const DiamondShapeSVGs = {
// // // // //     Round: () => (
// // // // //       <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
// // // // //         <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5" fill="none" />
// // // // //       </svg>
// // // // //     ),
// // // // //     Princess: () => (
// // // // //       <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
// // // // //         <rect x="6" y="6" width="12" height="12" stroke="currentColor" strokeWidth="1.5" fill="none" />
// // // // //       </svg>
// // // // //     ),
// // // // //     Cushion: () => (
// // // // //       <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
// // // // //         <rect x="6" y="6" width="12" height="12" rx="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
// // // // //       </svg>
// // // // //     ),
// // // // //     Emerald: () => (
// // // // //       <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
// // // // //         <path d="M7 6h10l2 2v8l-2 2H7l-2-2V8l2-2z" stroke="currentColor" strokeWidth="1.5" fill="none" />
// // // // //       </svg>
// // // // //     ),
// // // // //     Oval: () => (
// // // // //       <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
// // // // //         <ellipse cx="12" cy="12" rx="6" ry="8" stroke="currentColor" strokeWidth="1.5" fill="none" />
// // // // //       </svg>
// // // // //     ),
// // // // //     Pear: () => (
// // // // //       <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
// // // // //         <path
// // // // //           d="M12 4c-3 0-6 2-6 6 0 4 3 8 6 8s6-4 6-8c0-4-3-6-6-6z"
// // // // //           stroke="currentColor"
// // // // //           strokeWidth="1.5"
// // // // //           fill="none"
// // // // //         />
// // // // //         <path d="M12 4l2-2" stroke="currentColor" strokeWidth="1.5" />
// // // // //       </svg>
// // // // //     ),
// // // // //     Marquise: () => (
// // // // //       <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
// // // // //         <path d="M12 4c4 0 8 2 8 8s-4 8-8 8-8-2-8-8z" stroke="currentColor" strokeWidth="1.5" fill="none" />
// // // // //       </svg>
// // // // //     ),
// // // // //     Radiant: () => (
// // // // //       <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
// // // // //         <path d="M7 6h10l2 2v8l-2 2H7l-2-2V8l2-2z" stroke="currentColor" strokeWidth="1.5" fill="none" />
// // // // //         <path d="M9 9l6 6M15 9l-6 6" stroke="currentColor" strokeWidth="1" />
// // // // //       </svg>
// // // // //     ),
// // // // //     Asscher: () => (
// // // // //       <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
// // // // //         <path d="M8 6h8l2 2v8l-2 2H8l-2-2V8l2-2z" stroke="currentColor" strokeWidth="1.5" fill="none" />
// // // // //         <path d="M8 8l8 8M16 8l-8 8" stroke="currentColor" strokeWidth="0.5" />
// // // // //       </svg>
// // // // //     ),
// // // // //     Heart: () => (
// // // // //       <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
// // // // //         <path
// // // // //           d="M12 21c-1-1-8-5-8-11a5 5 0 0 1 8-4 5 5 0 0 1 8 4c0 6-7 10-8 11z"
// // // // //           stroke="currentColor"
// // // // //           strokeWidth="1.5"
// // // // //           fill="none"
// // // // //         />
// // // // //       </svg>
// // // // //     ),
// // // // //   }

// // // // //   const DIAMOND_SHAPES = [
// // // // //     "Round",
// // // // //     "Princess",
// // // // //     "Cushion",
// // // // //     "Emerald",
// // // // //     "Oval",
// // // // //     "Pear",
// // // // //     "Marquise",
// // // // //     "Radiant",
// // // // //     "Asscher",
// // // // //     "Heart",
// // // // //   ] 

// // // // //   function openPanel(key) {
// // // // //     setActiveMenu(key)
// // // // //     setPanelOpen(true)
// // // // //   }

// // // // //   function closePanel() {
// // // // //     setPanelOpen(false)
// // // // //   }

// // // // //   // Desktop top-level menu items
// // // // //   const MENU = [
// // // // //     { key: "all", label: "All" , rightimgurl:"https://images.pexels.com/photos/33154633/pexels-photo-33154633.jpeg" },
// // // // //     { key: "jewelry", label: "Jewelry" ,rightimgurl:"https://images.pexels.com/photos/32039109/pexels-photo-32039109.jpeg" },
// // // // //     { key: "diamond", label: "Diamond",rightimgurl:"https://images.pexels.com/photos/30328042/pexels-photo-30328042.jpeg" },
// // // // //     { key: "collections", label: "Collections" ,rightimgurl:"https://images.pexels.com/photos/9256822/pexels-photo-9256822.jpeg"},
// // // // //     { key: "gifts", label: "Gifts",rightimgurl:"https://images.pexels.com/photos/11139357/pexels-photo-11139357.jpeg" },
// // // // //     { key: "store", label: "Store Locator",rightimgurl:"https://images.pexels.com/photos/32841967/pexels-photo-32841967.jpeg" },
// // // // //     { key: "about", label: "About Us" ,rightimgurl:"https://images.pexels.com/photos/1927266/pexels-photo-1927266.jpeg"},
// // // // //   ]

// // // // //   function PanelContent() {
// // // // //     if (activeMenu === "diamond") {
// // // // //       return (
// // // // //         <motion.div
// // // // //           className="grid gap-8 p-8 md:grid-cols-3"
// // // // //           variants={staggerContainer}
// // // // //           initial="closed"
// // // // //           animate="open"
// // // // //         >
// // // // //           <motion.div className="md:col-span-2" variants={staggerItem}>
// // // // //             <div>
// // // // //               <motion.h3 className="text-sm font-medium tracking-wide text-foreground/80" variants={staggerItem}>
// // // // //                 Diamond Shapes
// // // // //               </motion.h3>
// // // // //               <motion.ul
// // // // //                 className="mt-4 grid grid-cols-2 gap-3 text-sm leading-relaxed md:grid-cols-3"
// // // // //                 variants={staggerContainer}
// // // // //               >
// // // // //                 {DIAMOND_SHAPES.map((shape, index) => {
// // // // //                   const ShapeIcon = DiamondShapeSVGs[shape]
// // // // //                   return (
// // // // //                     <motion.li key={shape} variants={staggerItem}>
// // // // //                       <motion.a
// // // // //                         className="inline-flex w-full items-center gap-3 rounded-md px-3 py-2 hover:bg-accent/60 transition-colors"
// // // // //                         whileHover={prefersReducedMotion ? undefined : { x: 4, scale: 1.02 }}
// // // // //                         whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
// // // // //                       >
// // // // //                         <ShapeIcon />
// // // // //                         <span>{shape}</span>
// // // // //                       </motion.a>
// // // // //                     </motion.li>
// // // // //                   )
// // // // //                 })}
// // // // //               </motion.ul>
// // // // //             </div>
// // // // //           </motion.div>
// // // // //           <motion.div variants={staggerItem}>
// // // // //             <RightImage />
// // // // //           </motion.div>
// // // // //         </motion.div>
// // // // //       )
// // // // //     }

// // // // //     if (activeMenu === "jewelry") {
// // // // //       return (
// // // // //         <motion.div
// // // // //           className="grid gap-8 p-8 md:grid-cols-3"
// // // // //           variants={staggerContainer}
// // // // //           initial="closed"
// // // // //           animate="open"
// // // // //         >
// // // // //           <motion.div className="md:col-span-2 grid gap-8 sm:grid-cols-2" variants={staggerItem}>
// // // // //             <motion.div variants={staggerItem}>
// // // // //               <h3 className="text-sm font-medium tracking-wide text-foreground/80">Categories</h3>
// // // // //               <motion.ul className="mt-4 space-y-2 text-sm leading-relaxed" variants={staggerContainer}>
// // // // //                 {["Necklaces", "Bracelets", "Earrings", "Rings"].map((item) => (
// // // // //                   <motion.li key={item} variants={staggerItem}>
// // // // //                     <motion.a
// // // // //                       className="inline-flex items-center rounded-md px-3 py-2 hover:bg-accent/60 transition-colors"
// // // // //                       whileHover={prefersReducedMotion ? undefined : { x: 4, scale: 1.02 }}
// // // // //                     >
// // // // //                       {item}
// // // // //                     </motion.a>
// // // // //                   </motion.li>
// // // // //                 ))}
// // // // //               </motion.ul>
// // // // //             </motion.div>
// // // // //             <motion.div variants={staggerItem}>
// // // // //               <h3 className="text-sm font-medium tracking-wide text-foreground/80">Metals</h3>
// // // // //               <motion.ul className="mt-4 space-y-2 text-sm leading-relaxed" variants={staggerContainer}>
// // // // //                 {["18K Yellow Gold", "18K White Gold", "Platinum", "Rose Gold"].map((item) => (
// // // // //                   <motion.li key={item} variants={staggerItem}>
// // // // //                     <motion.a
// // // // //                       className="inline-flex items-center rounded-md px-3 py-2 hover:bg-accent/60 transition-colors"
// // // // //                       whileHover={prefersReducedMotion ? undefined : { x: 4, scale: 1.02 }}
// // // // //                     >
// // // // //                       {item}
// // // // //                     </motion.a>
// // // // //                   </motion.li>
// // // // //                 ))}
// // // // //               </motion.ul>
// // // // //             </motion.div>
// // // // //           </motion.div>
// // // // //           <motion.div variants={staggerItem}>
// // // // //             <RightImage />
// // // // //           </motion.div>
// // // // //         </motion.div>
// // // // //       )
// // // // //     }

// // // // //     // default / "all" / others
// // // // //     return (
// // // // //       <motion.div className="grid gap-8 p-8 md:grid-cols-3" variants={staggerContainer} initial="closed" animate="open">
// // // // //         <motion.div className="md:col-span-2 grid gap-8 sm:grid-cols-2" variants={staggerItem}>
// // // // //           <motion.div variants={staggerItem}>
// // // // //             <h3 className="text-sm font-medium tracking-wide text-foreground/80">Highlights</h3>
// // // // //             <motion.ul className="mt-4 space-y-2 text-sm leading-relaxed" variants={staggerContainer}>
// // // // //               <motion.li variants={staggerItem}>
// // // // //                 <motion.a
// // // // //                   className="inline-flex items-center justify-between rounded-md px-3 py-2 hover:bg-accent/60 transition-colors"
// // // // //                   whileHover={prefersReducedMotion ? undefined : { x: 4, scale: 1.02 }}
// // // // //                 >
// // // // //                   <span>Gold Ornaments</span>
// // // // //                   <span className="text-[11px] text-[#C9A646]">New</span>
// // // // //                 </motion.a>
// // // // //               </motion.li>
// // // // //               {["Bridal & Heritage", "Daily Wear Elegance", "Limited Editions"].map((item) => (
// // // // //                 <motion.li key={item} variants={staggerItem}>
// // // // //                   <motion.a
// // // // //                     className="inline-flex items-center rounded-md px-3 py-2 hover:bg-accent/60 transition-colors"
// // // // //                     whileHover={prefersReducedMotion ? undefined : { x: 4, scale: 1.02 }}
// // // // //                   >
// // // // //                     {item}
// // // // //                   </motion.a>
// // // // //                 </motion.li>
// // // // //               ))}
// // // // //             </motion.ul>
// // // // //           </motion.div>
// // // // //           <motion.div variants={staggerItem}>
// // // // //             <h3 className="text-sm font-medium tracking-wide text-foreground/80">Services</h3>
// // // // //             <motion.ul className="mt-4 space-y-2 text-sm leading-relaxed" variants={staggerContainer}>
// // // // //               {[
// // // // //                 "Custom Design Consults",
// // // // //                 "Authentication & Appraisals",
// // // // //                 "Care & Restoration",
// // // // //                 "Concierge Sourcing",
// // // // //               ].map((item) => (
// // // // //                 <motion.li key={item} variants={staggerItem}>
// // // // //                   <motion.a
// // // // //                     className="inline-flex items-center rounded-md px-3 py-2 hover:bg-accent/60 transition-colors"
// // // // //                     whileHover={prefersReducedMotion ? undefined : { x: 4, scale: 1.02 }}
// // // // //                   >
// // // // //                     {item}
// // // // //                   </motion.a>
// // // // //                 </motion.li>
// // // // //               ))}
// // // // //             </motion.ul>
// // // // //           </motion.div>
// // // // //         </motion.div>
// // // // //         <motion.div variants={staggerItem}>
// // // // //           <RightImage />
// // // // //         </motion.div>
// // // // //       </motion.div>
// // // // //     )
// // // // //   }

// // // // //   function RightImage() {
// // // // //     const prefersReducedMotion = useReducedMotion()
// // // // //     return (
// // // // //       <motion.div
// // // // //         className="relative overflow-hidden bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-zinc-800"
// // // // //         whileHover={prefersReducedMotion ? undefined : { scale: 1.02 }}
// // // // //         transition={{ duration: 0.3, ease: [0.2, 0, 0.2, 1] }}
// // // // //       >
// // // // //         <motion.img
// // // // //           src="https://images.pexels.com/photos/33154633/pexels-photo-33154633.jpeg"
// // // // //           alt="Feature visual"
// // // // //           className="h-full w-full object-cover"
// // // // //           initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, scale: 1.05, y: 10 }}
// // // // //           animate={
// // // // //             prefersReducedMotion
// // // // //               ? { opacity: 1 }
// // // // //               : {
// // // // //                   opacity: 1,
// // // // //                   scale: [1, 1.02, 1],
// // // // //                   y: 0,
// // // // //                   transition: {
// // // // //                     opacity: { duration: 0.4 },
// // // // //                     scale: { duration: 8, ease: "easeInOut", repeat: Number.POSITIVE_INFINITY },
// // // // //                     y: { duration: 0.4 },
// // // // //                   },
// // // // //                 }
// // // // //           }
// // // // //           whileHover={prefersReducedMotion ? undefined : { scale: 1.08, rotate: 0.5 }}
// // // // //         />
// // // // //         {/* Enhanced top gold line with gradient */}
// // // // //         <motion.span
// // // // //           className="pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#C9A646] via-[#F4E4A6] to-[#C9A646]"
// // // // //           aria-hidden="true"
// // // // //           initial={prefersReducedMotion ? undefined : { scaleX: 0 }}
// // // // //           animate={prefersReducedMotion ? undefined : { scaleX: 1, transition: { duration: 0.6, delay: 0.2 } }}
// // // // //         />
// // // // //         {/* Enhanced glint sweep with multiple layers */}
// // // // //         {!prefersReducedMotion && (
// // // // //           <>
// // // // //             <motion.span
// // // // //               aria-hidden="true"
// // // // //               className="pointer-events-none absolute inset-0 -skew-x-12"
// // // // //               initial={{ x: "-130%", opacity: 0 }}
// // // // //               animate={{ x: "130%", opacity: 1 }}
// // // // //               transition={{ duration: 1.2, ease: [0.2, 0, 0, 1], repeat: Number.POSITIVE_INFINITY, repeatDelay: 5 }}
// // // // //               style={{
// // // // //                 background:
// // // // //                   "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0) 100%)",
// // // // //                 mixBlendMode: "screen",
// // // // //               }}
// // // // //             />
// // // // //             <motion.span
// // // // //               aria-hidden="true"
// // // // //               className="pointer-events-none absolute inset-0 -skew-x-12"
// // // // //               initial={{ x: "-130%", opacity: 0 }}
// // // // //               animate={{ x: "130%", opacity: 1 }}
// // // // //               transition={{
// // // // //                 duration: 0.8,
// // // // //                 ease: [0.2, 0, 0, 1],
// // // // //                 repeat: Number.POSITIVE_INFINITY,
// // // // //                 repeatDelay: 5,
// // // // //                 delay: 0.3,
// // // // //               }}
// // // // //               style={{
// // // // //                 background:
// // // // //                   "linear-gradient(90deg, rgba(201,166,70,0) 0%, rgba(201,166,70,0.3) 50%, rgba(201,166,70,0) 100%)",
// // // // //                 mixBlendMode: "overlay",
// // // // //               }}
// // // // //             />
// // // // //           </>
// // // // //         )}
// // // // //       </motion.div>
// // // // //     )
// // // // //   }

// // // // //   function CurrencySelector() {
// // // // //     const [currency, setCurrency] = useState("EUR")
// // // // //     const symbols = {
// // // // //       EUR: "€",
// // // // //       USD: "$",
// // // // //       GBP: "£",
// // // // //       AED: "د.إ",
// // // // //       INR: "₹",
// // // // //     }
// // // // //     return (
// // // // //       <DropdownMenu>
// // // // //         <DropdownMenuTrigger asChild>
// // // // //           <Button
// // // // //             variant="ghost"
// // // // //             className="h-9 gap-2 rounded-md border border-border px-3 text-sm font-normal hover:bg-accent/60"
// // // // //             aria-label="Select currency"
// // // // //           >
// // // // //             <Globe className="size-4" aria-hidden="true" />
// // // // //             <span className="tracking-wide">
// // // // //               {currency} {symbols[currency]}
// // // // //             </span>
// // // // //             <ChevronDown className="size-4 opacity-70" aria-hidden="true" />
// // // // //           </Button>
// // // // //         </DropdownMenuTrigger>
// // // // //         <DropdownMenuContent align="start" className="w-44">
// // // // //           <DropdownMenuLabel>Currency</DropdownMenuLabel>
// // // // //           <DropdownMenuSeparator />
// // // // //           {["EUR", "USD", "GBP", "AED", "INR"].map((c) => (
// // // // //             <DropdownMenuItem key={c} onClick={() => setCurrency(c)}>
// // // // //               <span className="mr-2 w-10 text-foreground/70">{c}</span>
// // // // //               <span className="ml-auto text-foreground/70">
// // // // //                 {c === "EUR" ? "€" : c === "USD" ? "$" : c === "GBP" ? "£" : c === "AED" ? "د.إ" : "₹"}
// // // // //               </span>
// // // // //             </DropdownMenuItem>
// // // // //           ))}
// // // // //         </DropdownMenuContent>
// // // // //       </DropdownMenu>
// // // // //     )
// // // // //   }

// // // // //   return (
// // // // //     <div ref={headerRef} className={cn("relative", className)}>
// // // // //       {/* Promo strip */}
// // // // //       <motion.div
// // // // //         className="w-full bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 text-white"
// // // // //         initial={promoVariants.initial}
// // // // //         animate={promoVariants.animate}
// // // // //         role="region"
// // // // //         aria-label="Promotional message"
// // // // //       >
// // // // //         <div className="mx-auto flex max-w-6xl items-center justify-center px-4 py-2">
// // // // //           <motion.span
// // // // //             className="text-xs tracking-wide"
// // // // //             initial={prefersReducedMotion ? undefined : { letterSpacing: "0.05em" }}
// // // // //             animate={prefersReducedMotion ? undefined : { letterSpacing: "0.12em", transition: { duration: 0.6 } }}
// // // // //           >
// // // // //             FREE SHIPPING ABOVE 95€
// // // // //           </motion.span>
// // // // //         </div>
// // // // //       </motion.div>

// // // // //       <header className="  z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
// // // // //         {/* Logo row */}
// // // // //         <div className="mx-auto grid max-w-full  grid-cols-3 items-center px-4 lg:px-20 py-3">
// // // // //           {/* Left: mobile hamburger + desktop currency */}
// // // // //           <div className="flex items-center">
// // // // //             <div className="md:hidden">
// // // // //               <motion.button
// // // // //                 type="button"
// // // // //                 aria-label="Toggle menu"
// // // // //                 aria-expanded={mobileOpen}
// // // // //                 onClick={() => setMobileOpen((s) => !s)}
// // // // //                 className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-background to-accent/20 border border-border/60 hover:border-border hover:bg-accent/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 transition-all duration-200 shadow-sm"
// // // // //                 whileHover={prefersReducedMotion ? undefined : { scale: 1.05, rotate: 2 }}
// // // // //                 whileTap={prefersReducedMotion ? undefined : { scale: 0.95 }}
// // // // //               >
// // // // //                 <motion.span
// // // // //                   className="relative block h-5 w-6"
// // // // //                   initial={false}
// // // // //                   animate={mobileOpen ? "open" : "closed"}
// // // // //                 >
// // // // //                   <motion.span
// // // // //                     className="absolute left-0 top-0 block h-0.5 w-6 bg-foreground rounded-full shadow-sm"
// // // // //                     variants={{
// // // // //                       closed: { rotate: 0, y: 0, width: "100%", opacity: 1 },
// // // // //                       open: { rotate: 45, y: 9, width: "100%", opacity: 1 },
// // // // //                     }}
// // // // //                     transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
// // // // //                   />
// // // // //                   <motion.span
// // // // //                     className="absolute left-0 top-2 block h-0.5 bg-foreground rounded-full shadow-sm"
// // // // //                     variants={{
// // // // //                       closed: { opacity: 1, width: "75%", x: 0 },
// // // // //                       open: { opacity: 0, width: "0%", x: 10 },
// // // // //                     }}
// // // // //                     transition={{ duration: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
// // // // //                   />
// // // // //                   <motion.span
// // // // //                     className="absolute left-0 bottom-0 block h-0.5 w-6 bg-foreground rounded-full shadow-sm"
// // // // //                     variants={{
// // // // //                       closed: { rotate: 0, y: 0, width: "85%", opacity: 1 },
// // // // //                       open: { rotate: -45, y: -9, width: "100%", opacity: 1 },
// // // // //                     }}
// // // // //                     transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
// // // // //                   />
// // // // //                 </motion.span>
// // // // //               </motion.button>
// // // // //             </div>
// // // // //             <div className="hidden md:block">
// // // // //               <CurrencySelector />
// // // // //             </div>
// // // // //           </div>

// // // // //           {/* Centered logo */}
// // // // //           <div className="flex items-center justify-center">
// // // // //             <motion.div
// // // // //               className="relative inline-block overflow-hidden will-change-transform"
// // // // //               style={{ perspective: 800 }}
// // // // //               initial={prefersReducedMotion ? undefined : { clipPath: "inset(0 100% 0 0)" }}
// // // // //               animate={
// // // // //                 prefersReducedMotion
// // // // //                   ? undefined
// // // // //                   : {
// // // // //                       clipPath: "inset(0 0% 0 0)",
// // // // //                       transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.05 },
// // // // //                     }
// // // // //               }
// // // // //               whileHover={
// // // // //                 prefersReducedMotion
// // // // //                   ? undefined
// // // // //                   : { rotateX: -1.5, rotateY: 2, scale: 1.01, transition: { duration: 0.5, ease: [0.2, 0, 0.2, 1] } }
// // // // //               }
// // // // //             >
// // // // //               <motion.img
// // // // //                 src={logo}
// // // // //                 alt="Festo Trade logo"
// // // // //                 width={250}
// // // // //                 height={80}
// // // // //                 loading="eager"
// // // // //                 fetchPriority="high"
// // // // //                 className="h-[80px] w-[250px] select-none object-contain"
// // // // //                 initial={initialLogo}
// // // // //                 animate={animateLogo}
// // // // //                 whileHover={
// // // // //                   prefersReducedMotion
// // // // //                     ? undefined
// // // // //                     : { y: -2, scale: 1.015, transition: { duration: 0.3, ease: [0.2, 0, 0.2, 1] } }
// // // // //                 }
// // // // //                 whileTap={prefersReducedMotion ? undefined : { scale: 0.99 }}
// // // // //               />
// // // // //               {!prefersReducedMotion && (
// // // // //                 <motion.span
// // // // //                   aria-hidden="true"
// // // // //                   className="pointer-events-none absolute inset-0 -skew-x-12"
// // // // //                   variants={shimmerVariants}
// // // // //                   initial="rest"
// // // // //                   animate="sweep"
// // // // //                   whileHover="sweep"
// // // // //                   style={{
// // // // //                     background:
// // // // //                       "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.65) 50%, rgba(255,255,255,0) 100%)",
// // // // //                     mixBlendMode: "screen",
// // // // //                   }}
// // // // //                 />
// // // // //               )}
// // // // //             </motion.div>
// // // // //           </div>

// // // // //           {/* Right: lucide icons */}
// // // // //           <div className="flex items-center justify-end gap-3">
// // // // //             <div className="flex items-center gap-2 md:hidden">
// // // // //               <IconButton label="Search">
// // // // //                 <Search className="size-5" aria-hidden="true" />
// // // // //               </IconButton>
// // // // //               <IconButton label="Cart">
// // // // //                 <ShoppingBag className="size-5" aria-hidden="true" />
// // // // //               </IconButton>
// // // // //             </div>
// // // // //             <div className="hidden md:flex md:items-center md:gap-3">
// // // // //               <IconButton label="Account">
// // // // //                 <User className="size-5" aria-hidden="true" />
// // // // //               </IconButton>
// // // // //               <IconButton label="Search">
// // // // //                 <Search className="size-5" aria-hidden="true" />
// // // // //               </IconButton>
// // // // //               <IconButton label="Wishlist">
// // // // //                 <Heart className="size-5" aria-hidden="true" />
// // // // //               </IconButton>
// // // // //               <IconButton label="Bag">
// // // // //                 <ShoppingBag className="size-5" aria-hidden="true" />
// // // // //               </IconButton>
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>

// // // // //         {/* Nav row (desktop) */}
// // // // //         <div
// // // // //           className="!sticky top-0 left-0 right-0 mx-auto hidden !max-w-full  items-center justify-center gap-6 px-4 lg:px-20 pb-3 pt-1 text-sm tracking-wide md:flex"
// // // // //           onMouseLeave={closePanel}
// // // // //         >
// // // // //           {MENU.map((item) => (
// // // // //             <motion.button
// // // // //               key={item.key}
// // // // //               type="button"
// // // // //               onMouseEnter={() => openPanel(item.key)}
// // // // //               onFocus={() => openPanel(item.key)}
// // // // //               className={cn("relative px-2 py-1 uppercase text-foreground/90 hover:text-foreground")}
// // // // //               aria-expanded={panelOpen && activeMenu === item.key}
// // // // //               aria-controls="mega-panel"
// // // // //               whileHover={prefersReducedMotion ? undefined : { y: -1, scale: 1.05 }}
// // // // //               whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
// // // // //             >
// // // // //               {item.label}
// // // // //               {panelOpen && activeMenu === item.key && (
// // // // //                 <motion.span
// // // // //                   layoutId="nav-underline"
// // // // //                   className="absolute inset-x-2 -bottom-1 h-[2px] rounded bg-[#C9A646]"
// // // // //                   initial={prefersReducedMotion ? undefined : { scaleX: 0 }}
// // // // //                   animate={prefersReducedMotion ? undefined : { scaleX: 1 }}
// // // // //                   transition={{ duration: 0.3, ease: [0.2, 0, 0.2, 1] }}
// // // // //                 />
// // // // //               )}
// // // // //             </motion.button>
// // // // //           ))}
// // // // //         </div>

// // // // //         <motion.div
// // // // //           id="mega-panel"
// // // // //           role="region"
// // // // //           aria-label="Navigation panel"
// // // // //           className="fixed inset-x-0 top-full z-50 hidden h-screen bg-background/98 backdrop-blur-sm md:block"
// // // // //           variants={panelVariants}
// // // // //           initial="closed"
// // // // //           animate={panelOpen ? "open" : "closed"}
// // // // //           style={{ transformOrigin: "top center" }}
// // // // //         >
// // // // //           <div className="mx-auto h-full max-w-7xl">
// // // // //             <div className="h-full border-l border-r border-border bg-background shadow-2xl">
// // // // //               <PanelContent />
// // // // //             </div>
// // // // //           </div>
// // // // //         </motion.div>

// // // // //         <AnimatePresence>
// // // // //           {mobileOpen && (
// // // // //             <motion.aside
// // // // //               className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm md:hidden"
// // // // //               initial={{ opacity: 0 }}
// // // // //               animate={{ opacity: 1 }}
// // // // //               exit={{ opacity: 0 }}
// // // // //               onClick={() => setMobileOpen(false)}
// // // // //             >
// // // // //               <motion.div
// // // // //                 className="absolute inset-y-0 left-0 w-full max-w-sm border-r border-border bg-background/98 backdrop-blur-sm shadow-2xl sm:w-80"
// // // // //                 initial={prefersReducedMotion ? { x: 0 } : { x: "-100%", opacity: 0 }}
// // // // //                 animate={prefersReducedMotion ? { x: 0 } : { x: 0, opacity: 1 }}
// // // // //                 exit={prefersReducedMotion ? { x: 0 } : { x: "-100%", opacity: 0 }}
// // // // //                 transition={{ duration: 0.3, ease: [0.2, 0, 0, 1] }}
// // // // //                 onClick={(e) => e.stopPropagation()}
// // // // //                 role="dialog"
// // // // //                 aria-modal="true"
// // // // //                 aria-label="Mobile menu"
// // // // //               >
// // // // //                 {/* Improved mobile drawer header with better spacing */}
// // // // //                 <div className="border-b border-border/50 bg-gradient-to-r from-background to-accent/10 px-6 py-4">
// // // // //                   <motion.div
// // // // //                     className="flex items-center justify-between"
// // // // //                     initial={prefersReducedMotion ? undefined : { opacity: 0, y: -10 }}
// // // // //                     animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
// // // // //                     transition={{ delay: 0.1 }}
// // // // //                   >
// // // // //                     <span className="text-sm font-semibold text-foreground tracking-wide">MENU</span>
// // // // //                     <motion.button
// // // // //                       className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-background to-accent/20 border border-border/60 hover:bg-accent/60 transition-all duration-200 shadow-sm"
// // // // //                       onClick={() => setMobileOpen(false)}
// // // // //                       aria-label="Close menu"
// // // // //                       whileHover={prefersReducedMotion ? undefined : { scale: 1.05, rotate: 90 }}
// // // // //                       whileTap={prefersReducedMotion ? undefined : { scale: 0.95 }}
// // // // //                     >
// // // // //                       <X className="size-5" aria-hidden="true" />
// // // // //                     </motion.button>
// // // // //                   </motion.div>
// // // // //                 </div>

// // // // //                 {/* Improved mobile navigation with better spacing and alignment */}
// // // // //                 <div className="flex-1 overflow-y-auto px-6 py-6">
// // // // //                   <motion.nav className="space-y-3" variants={staggerContainer} initial="closed" animate="open">
// // // // //                     {MENU.map((item, index) => (
// // // // //                       <motion.details key={item.key} className="group" variants={staggerItem}>
// // // // //                         <summary className="flex cursor-pointer list-none items-center justify-between rounded-xl px-4 py-4 hover:bg-accent/60 transition-all duration-200 border border-transparent hover:border-border/30">
// // // // //                           <span className="uppercase font-semibold text-sm tracking-wider">{item.label}</span>
// // // // //                           <motion.span
// // // // //                             className="text-lg text-foreground/60 group-open:rotate-180 transition-transform duration-300"
// // // // //                             whileHover={prefersReducedMotion ? undefined : { scale: 1.2 }}
// // // // //                           >
// // // // //                             ⌄
// // // // //                           </motion.span>
// // // // //                         </summary>
// // // // //                         <motion.div
// // // // //                           className="pl-4 pt-3 pb-2"
// // // // //                           initial={prefersReducedMotion ? undefined : { opacity: 0, height: 0 }}
// // // // //                           animate={prefersReducedMotion ? undefined : { opacity: 1, height: "auto" }}
// // // // //                           transition={{ duration: 0.2 }}
// // // // //                         >
// // // // //                           {item.key === "diamond" ? (
// // // // //                             <ul className="grid grid-cols-1 gap-2 text-sm leading-relaxed">
// // // // //                               {DIAMOND_SHAPES.map((s) => {
// // // // //                                 const ShapeIcon = DiamondShapeSVGs[s]
// // // // //                                 return (
// // // // //                                   <li key={s}>
// // // // //                                     <motion.a
// // // // //                                       className="flex items-center gap-3 rounded-lg px-3 py-2.5 hover:bg-accent/60 transition-colors font-medium"
// // // // //                                       whileHover={prefersReducedMotion ? undefined : { x: 2 }}
// // // // //                                     >
// // // // //                                       <ShapeIcon />
// // // // //                                       <span>{s}</span>
// // // // //                                     </motion.a>
// // // // //                                   </li>
// // // // //                                 )
// // // // //                               })}
// // // // //                             </ul>
// // // // //                           ) : item.key === "jewelry" ? (
// // // // //                             <ul className="space-y-1 text-sm leading-relaxed">
// // // // //                               {["Necklaces", "Bracelets", "Earrings", "Rings"].map((subItem) => (
// // // // //                                 <li key={subItem}>
// // // // //                                   <motion.a
// // // // //                                     className="block rounded-lg px-3 py-2.5 hover:bg-accent/60 transition-colors font-medium"
// // // // //                                     whileHover={prefersReducedMotion ? undefined : { x: 2 }}
// // // // //                                   >
// // // // //                                     {subItem}
// // // // //                                   </motion.a>
// // // // //                                 </li>
// // // // //                               ))}
// // // // //                             </ul>
// // // // //                           ) : (
// // // // //                             <ul className="space-y-1 text-sm leading-relaxed">
// // // // //                               {["Featured", "New Arrivals", "Bestsellers"].map((subItem) => (
// // // // //                                 <li key={subItem}>
// // // // //                                   <motion.a
// // // // //                                     className="block rounded-lg px-3 py-2.5 hover:bg-accent/60 transition-colors font-medium"
// // // // //                                     whileHover={prefersReducedMotion ? undefined : { x: 2 }}
// // // // //                                   >
// // // // //                                     {subItem}
// // // // //                                   </motion.a>
// // // // //                                 </li>
// // // // //                               ))}
// // // // //                             </ul>
// // // // //                           )}
// // // // //                         </motion.div>
// // // // //                       </motion.details>
// // // // //                     ))}
// // // // //                   </motion.nav>

// // // // //                   <motion.div
// // // // //                     className="mt-8 overflow-hidden rounded-xl border border-border shadow-lg"
// // // // //                     initial={prefersReducedMotion ? undefined : { opacity: 0, scale: 0.95 }}
// // // // //                     animate={prefersReducedMotion ? undefined : { opacity: 1, scale: 1 }}
// // // // //                     transition={{ delay: 0.3 }}
// // // // //                   >
// // // // //                     <motion.img
// // // // //                       src={logo}
// // // // //                       alt="Featured"
// // // // //                       className="h-40 w-full object-cover"
// // // // //                       whileHover={prefersReducedMotion ? undefined : { scale: 1.05 }}
// // // // //                     />
// // // // //                   </motion.div>
// // // // //                 </div>
// // // // //               </motion.div>
// // // // //             </motion.aside>
// // // // //           )}
// // // // //         </AnimatePresence>
// // // // //       </header>
// // // // //     </div>
// // // // //   )
// // // // // }

// // // // // export default Navbar

// // // // "use client"

// // // // import { useRef, useState } from "react"
// // // // import { motion, AnimatePresence, useReducedMotion } from "framer-motion"
// // // // import { cn } from "@/lib/utils"
// // // // import { ChevronDown, Globe, Heart, Search, ShoppingBag, User, X, Menu } from "lucide-react"
// // // // import { Button } from "@/components/ui/button"
// // // // import logo from './logo.webp'
// // // // import {
// // // //   DropdownMenu,
// // // //   DropdownMenuContent,
// // // //   DropdownMenuItem,
// // // //   DropdownMenuLabel,
// // // //   DropdownMenuSeparator,
// // // //   DropdownMenuTrigger,
// // // // } from "@/components/ui/dropdown-menu"

// // // // // Declare missing variables
// // // // const staggerContainer = {
// // // //   open: {
// // // //     transition: { staggerChildren: 0.075, delayChildren: 0.1 },
// // // //   },
// // // //   closed: {
// // // //     transition: { staggerChildren: 0.05, staggerDirection: -1 },
// // // //   },
// // // // }

// // // // const staggerItem = {
// // // //   open: {
// // // //     y: 0,
// // // //     opacity: 1,
// // // //     transition: {
// // // //       y: { stiffness: 1000, velocity: -100 },
// // // //     },
// // // //   },
// // // //   closed: {
// // // //     y: 50,
// // // //     opacity: 0,
// // // //     transition: {
// // // //       y: { stiffness: 1000 },
// // // //     },
// // // //   },
// // // // }

// // // // const promoVariants = {
// // // //   initial: { opacity: 0 },
// // // //   animate: { opacity: 1 },
// // // // }

// // // // const initialLogo = { opacity: 0 }
// // // // const animateLogo = { opacity: 1 }

// // // // const shimmerVariants = {
// // // //   rest: { x: "-100%" },
// // // //   sweep: { x: "100%" },
// // // // }

// // // // const panelVariants = {
// // // //   open: {
// // // //     y: 0,
// // // //     opacity: 1,
// // // //     transition: {
// // // //       y: { stiffness: 1000, velocity: -100 },
// // // //     },
// // // //   },
// // // //   closed: {
// // // //     y: "100%",
// // // //     opacity: 0,
// // // //     transition: {
// // // //       y: { stiffness: 1000 },
// // // //     },
// // // //   },
// // // // }

// // // // function IconButton({ children, label, onClick, className }) {
// // // //   const prefersReducedMotion = useReducedMotion()

// // // //   return (
// // // //     <motion.button
// // // //       type="button"
// // // //       onClick={onClick}
// // // //       aria-label={label}
// // // //       className={cn(
// // // //         "inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-background to-accent/20 border border-border/60 hover:border-border hover:bg-accent/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 transition-all duration-200 shadow-sm",
// // // //         className,
// // // //       )}
// // // //       whileHover={prefersReducedMotion ? undefined : { scale: 1.05, y: -1 }}
// // // //       whileTap={prefersReducedMotion ? undefined : { scale: 0.95 }}
// // // //     >
// // // //       {children}
// // // //     </motion.button>
// // // //   )
// // // // }

// // // // const Navbar = ({ className, logoSrc }) => {
// // // //   const prefersReducedMotion = useReducedMotion()
// // // //   const [panelOpen, setPanelOpen] = useState(false)
// // // //   const [activeMenu, setActiveMenu] = useState("all")
// // // //   const [mobileOpen, setMobileOpen] = useState(false)

// // // //   const headerRef = useRef(null)

// // // //   const DiamondShapeSVGs = {
// // // //     Round: () => (
// // // //       <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
// // // //         <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5" fill="none" />
// // // //       </svg>
// // // //     ),
// // // //     Princess: () => (
// // // //       <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
// // // //         <rect x="6" y="6" width="12" height="12" stroke="currentColor" strokeWidth="1.5" fill="none" />
// // // //       </svg>
// // // //     ),
// // // //     Cushion: () => (
// // // //       <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
// // // //         <rect x="6" y="6" width="12" height="12" rx="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
// // // //       </svg>
// // // //     ),
// // // //     Emerald: () => (
// // // //       <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
// // // //         <path d="M7 6h10l2 2v8l-2 2H7l-2-2V8l2-2z" stroke="currentColor" strokeWidth="1.5" fill="none" />
// // // //       </svg>
// // // //     ),
// // // //     Oval: () => (
// // // //       <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
// // // //         <ellipse cx="12" cy="12" rx="6" ry="8" stroke="currentColor" strokeWidth="1.5" fill="none" />
// // // //       </svg>
// // // //     ),
// // // //     Pear: () => (
// // // //       <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
// // // //         <path
// // // //           d="M12 4c-3 0-6 2-6 6 0 4 3 8 6 8s6-4 6-8c0-4-3-6-6-6z"
// // // //           stroke="currentColor"
// // // //           strokeWidth="1.5"
// // // //           fill="none"
// // // //         />
// // // //         <path d="M12 4l2-2" stroke="currentColor" strokeWidth="1.5" />
// // // //       </svg>
// // // //     ),
// // // //     Marquise: () => (
// // // //       <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
// // // //         <path d="M12 4c4 0 8 2 8 8s-4 8-8 8-8-2-8-8z" stroke="currentColor" strokeWidth="1.5" fill="none" />
// // // //       </svg>
// // // //     ),
// // // //     Radiant: () => (
// // // //       <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
// // // //         <path d="M7 6h10l2 2v8l-2 2H7l-2-2V8l2-2z" stroke="currentColor" strokeWidth="1.5" fill="none" />
// // // //         <path d="M9 9l6 6M15 9l-6 6" stroke="currentColor" strokeWidth="1" />
// // // //       </svg>
// // // //     ),
// // // //     Asscher: () => (
// // // //       <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
// // // //         <path d="M8 6h8l2 2v8l-2 2H8l-2-2V8l2-2z" stroke="currentColor" strokeWidth="1.5" fill="none" />
// // // //         <path d="M8 8l8 8M16 8l-8 8" stroke="currentColor" strokeWidth="0.5" />
// // // //       </svg>
// // // //     ),
// // // //     Heart: () => (
// // // //       <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
// // // //         <path
// // // //           d="M12 21c-1-1-8-5-8-11a5 5 0 0 1 8-4 5 5 0 0 1 8 4c0 6-7 10-8 11z"
// // // //           stroke="currentColor"
// // // //           strokeWidth="1.5"
// // // //           fill="none"
// // // //         />
// // // //       </svg>
// // // //     ),
// // // //   }

// // // //   const DIAMOND_SHAPES = [
// // // //     "Round",
// // // //     "Princess",
// // // //     "Cushion",
// // // //     "Emerald",
// // // //     "Oval",
// // // //     "Pear",
// // // //     "Marquise",
// // // //     "Radiant",
// // // //     "Asscher",
// // // //     "Heart",
// // // //   ]

// // // //   function openPanel(key) {
// // // //     setActiveMenu(key)
// // // //     setPanelOpen(true)
// // // //   }

// // // //   function closePanel() {
// // // //     setPanelOpen(false)
// // // //   }

// // // //   // Desktop top-level menu items
// // // //   const MENU = [
// // // //     { key: "all", label: "All" , rightimgurl:"https://images.pexels.com/photos/33154633/pexels-photo-33154633.jpeg" },
// // // //     { key: "jewelry", label: "Jewelry" ,rightimgurl:"https://images.pexels.com/photos/32039109/pexels-photo-32039109.jpeg" },
// // // //     { key: "diamond", label: "Diamond",rightimgurl:"https://images.pexels.com/photos/30328042/pexels-photo-30328042.jpeg" },
// // // //     { key: "collections", label: "Collections" ,rightimgurl:"https://images.pexels.com/photos/9256822/pexels-photo-9256822.jpeg"},
// // // //     { key: "gifts", label: "Gifts",rightimgurl:"https://images.pexels.com/photos/11139357/pexels-photo-11139357.jpeg" },
// // // //     { key: "store", label: "Store Locator",rightimgurl:"https://images.pexels.com/photos/32841967/pexels-photo-32841967.jpeg" },
// // // //     { key: "about", label: "About Us" ,rightimgurl:"https://images.pexels.com/photos/1927266/pexels-photo-1927266.jpeg"},
// // // //   ]
// // // //   const currentRightImg = MENU.find((m) => m.key === activeMenu)?.rightimgurl

// // // //   function PanelContent({ imgUrl }) {
// // // //     if (activeMenu === "diamond") {
// // // //       return (
// // // //         <motion.div
// // // //           className="grid gap-8 p-8 md:grid-cols-3"
// // // //           variants={staggerContainer}
// // // //           initial="closed"
// // // //           animate="open"
// // // //         >
// // // //           <motion.div className="md:col-span-2" variants={staggerItem}>
// // // //             <div>
// // // //               <motion.h3 className="text-sm font-medium tracking-wide text-foreground/80" variants={staggerItem}>
// // // //                 Diamond Shapes
// // // //               </motion.h3>
// // // //               <motion.ul
// // // //                 className="mt-4 grid grid-cols-2 gap-3 text-sm leading-relaxed md:grid-cols-3"
// // // //                 variants={staggerContainer}
// // // //               >
// // // //                 {DIAMOND_SHAPES.map((shape, index) => {
// // // //                   const ShapeIcon = DiamondShapeSVGs[shape]
// // // //                   return (
// // // //                     <motion.li key={shape} variants={staggerItem}>
// // // //                       <motion.a
// // // //                         className="inline-flex w-full items-center gap-3 rounded-md px-3 py-2 hover:bg-accent/60 transition-colors"
// // // //                         whileHover={prefersReducedMotion ? undefined : { x: 4, scale: 1.02 }}
// // // //                         whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
// // // //                       >
// // // //                         <ShapeIcon />
// // // //                         <span>{shape}</span>
// // // //                       </motion.a>
// // // //                     </motion.li>
// // // //                   )
// // // //                 })}
// // // //               </motion.ul>
// // // //             </div>
// // // //           </motion.div>
// // // //           <motion.div variants={staggerItem}>
// // // //             <RightImage imgUrl={imgUrl} />
// // // //           </motion.div>
// // // //         </motion.div>
// // // //       )
// // // //     }

// // // //     if (activeMenu === "jewelry") {
// // // //       return (
// // // //         <motion.div
// // // //           className="grid gap-8 p-8 md:grid-cols-3"
// // // //           variants={staggerContainer}
// // // //           initial="closed"
// // // //           animate="open"
// // // //         >
// // // //           <motion.div className="md:col-span-2 grid gap-8 sm:grid-cols-2" variants={staggerItem}>
// // // //             <motion.div variants={staggerItem}>
// // // //               <h3 className="text-sm font-medium tracking-wide text-foreground/80">Categories</h3>
// // // //               <motion.ul className="mt-4 space-y-2 text-sm leading-relaxed" variants={staggerContainer}>
// // // //                 {["Necklaces", "Bracelets", "Earrings", "Rings"].map((item) => (
// // // //                   <motion.li key={item} variants={staggerItem}>
// // // //                     <motion.a
// // // //                       className="inline-flex items-center rounded-md px-3 py-2 hover:bg-accent/60 transition-colors"
// // // //                       whileHover={prefersReducedMotion ? undefined : { x: 4, scale: 1.02 }}
// // // //                     >
// // // //                       {item}
// // // //                     </motion.a>
// // // //                   </motion.li>
// // // //                 ))}
// // // //               </motion.ul>
// // // //             </motion.div>
// // // //             <motion.div variants={staggerItem}>
// // // //               <h3 className="text-sm font-medium tracking-wide text-foreground/80">Metals</h3>
// // // //               <motion.ul className="mt-4 space-y-2 text-sm leading-relaxed" variants={staggerContainer}>
// // // //                 {["18K Yellow Gold", "18K White Gold", "Platinum", "Rose Gold"].map((item) => (
// // // //                   <motion.li key={item} variants={staggerItem}>
// // // //                     <motion.a
// // // //                       className="inline-flex items-center rounded-md px-3 py-2 hover:bg-accent/60 transition-colors"
// // // //                       whileHover={prefersReducedMotion ? undefined : { x: 4, scale: 1.02 }}
// // // //                     >
// // // //                       {item}
// // // //                     </motion.a>
// // // //                   </motion.li>
// // // //                 ))}
// // // //               </motion.ul>
// // // //             </motion.div>
// // // //           </motion.div>
// // // //           <motion.div variants={staggerItem}>
// // // //             <RightImage imgUrl={imgUrl} />
// // // //           </motion.div>
// // // //         </motion.div>
// // // //       )
// // // //     }

// // // //     // default / "all" / others
// // // //     return (
// // // //       <motion.div className="grid gap-8 p-8 md:grid-cols-3" variants={staggerContainer} initial="closed" animate="open">
// // // //         <motion.div className="md:col-span-2 grid gap-8 sm:grid-cols-2" variants={staggerItem}>
// // // //           <motion.div variants={staggerItem}>
// // // //             <h3 className="text-sm font-medium tracking-wide text-foreground/80">Highlights</h3>
// // // //             <motion.ul className="mt-4 space-y-2 text-sm leading-relaxed" variants={staggerContainer}>
// // // //               <motion.li variants={staggerItem}>
// // // //                 <motion.a
// // // //                   className="inline-flex items-center justify-between rounded-md px-3 py-2 hover:bg-accent/60 transition-colors"
// // // //                   whileHover={prefersReducedMotion ? undefined : { x: 4, scale: 1.02 }}
// // // //                 >
// // // //                   <span>Gold Ornaments</span>
// // // //                   <span className="text-[11px] text-[#C9A646]">New</span>
// // // //                 </motion.a>
// // // //               </motion.li>
// // // //               {["Bridal & Heritage", "Daily Wear Elegance", "Limited Editions"].map((item) => (
// // // //                 <motion.li key={item} variants={staggerItem}>
// // // //                   <motion.a
// // // //                     className="inline-flex items-center rounded-md px-3 py-2 hover:bg-accent/60 transition-colors"
// // // //                     whileHover={prefersReducedMotion ? undefined : { x: 4, scale: 1.02 }}
// // // //                   >
// // // //                     {item}
// // // //                   </motion.a>
// // // //                 </motion.li>
// // // //               ))}
// // // //             </motion.ul>
// // // //           </motion.div>
// // // //           <motion.div variants={staggerItem}>
// // // //             <h3 className="text-sm font-medium tracking-wide text-foreground/80">Services</h3>
// // // //             <motion.ul className="mt-4 space-y-2 text-sm leading-relaxed" variants={staggerContainer}>
// // // //               {[
// // // //                 "Custom Design Consults",
// // // //                 "Authentication & Appraisals",
// // // //                 "Care & Restoration",
// // // //                 "Concierge Sourcing",
// // // //               ].map((item) => (
// // // //                 <motion.li key={item} variants={staggerItem}>
// // // //                   <motion.a
// // // //                     className="inline-flex items-center rounded-md px-3 py-2 hover:bg-accent/60 transition-colors"
// // // //                     whileHover={prefersReducedMotion ? undefined : { x: 4, scale: 1.02 }}
// // // //                   >
// // // //                     {item}
// // // //                   </motion.a>
// // // //                 </motion.li>
// // // //               ))}
// // // //             </motion.ul>
// // // //           </motion.div>
// // // //         </motion.div>
// // // //         <motion.div variants={staggerItem}>
// // // //           <RightImage imgUrl={imgUrl} />
// // // //         </motion.div>
// // // //       </motion.div>
// // // //     )
// // // //   }

// // // //   function RightImage({ imgUrl }) {
// // // //     const prefersReducedMotion = useReducedMotion()
// // // //     return (
// // // //       <motion.div
// // // //         className="relative h-60 md:h-80 overflow-hidden bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-zinc-800"
// // // //         whileHover={prefersReducedMotion ? undefined : { scale: 1.02 }}
// // // //         transition={{ duration: 0.3, ease: [0.2, 0, 0.2, 1] }}
// // // //       >
// // // //         <motion.img
// // // //           src={imgUrl || "/placeholder.svg?height=320&width=480&query=menu%20panel%20right%20image"}
// // // //           alt="Feature visual"
// // // //           className="h-full w-full object-cover shadow-2xl  "
// // // //           initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, scale: 1.05, y: 10 }}
// // // //           animate={
// // // //             prefersReducedMotion
// // // //               ? { opacity: 1 }
// // // //               : {
// // // //                   opacity: 1,
// // // //                   scale: [1, 1.02, 1],
// // // //                   y: 0,
// // // //                   transition: {
// // // //                     opacity: { duration: 0.4 },
// // // //                     scale: { duration: 8, ease: "easeInOut", repeat: Number.POSITIVE_INFINITY },
// // // //                     y: { duration: 0.4 },
// // // //                   },
// // // //                 }
// // // //           }
// // // //           whileHover={prefersReducedMotion ? undefined : { scale: 1.08, rotate: 0.5 }}
// // // //         />
// // // //         {/* Enhanced top gold line with gradient */}
// // // //         <motion.span
// // // //           className="pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#C9A646] via-[#F4E4A6] to-[#C9A646]"
// // // //           aria-hidden="true"
// // // //           initial={prefersReducedMotion ? undefined : { scaleX: 0 }}
// // // //           animate={prefersReducedMotion ? undefined : { scaleX: 1, transition: { duration: 0.6, delay: 0.2 } }}
// // // //         />
// // // //         {/* Glint sweep */}
// // // //         {!prefersReducedMotion && (
// // // //           <>
// // // //             <motion.span
// // // //               aria-hidden="true"
// // // //               className="pointer-events-none absolute inset-0 -skew-x-12"
// // // //               initial={{ x: "-130%", opacity: 0 }}
// // // //               animate={{ x: "130%", opacity: 1 }}
// // // //               transition={{ duration: 1.2, ease: [0.2, 0, 0, 1], repeat: Number.POSITIVE_INFINITY, repeatDelay: 5 }}
// // // //               style={{
// // // //                 background:
// // // //                   "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0) 100%)",
// // // //                 mixBlendMode: "screen",
// // // //               }}
// // // //             />
// // // //             <motion.span
// // // //               aria-hidden="true"
// // // //               className="pointer-events-none absolute inset-0 -skew-x-12"
// // // //               initial={{ x: "-130%", opacity: 0 }}
// // // //               animate={{ x: "130%", opacity: 1 }}
// // // //               transition={{
// // // //                 duration: 0.8,
// // // //                 ease: [0.2, 0, 0, 1],
// // // //                 repeat: Number.POSITIVE_INFINITY,
// // // //                 repeatDelay: 5,
// // // //                 delay: 0.3,
// // // //               }}
// // // //               style={{
// // // //                 background:
// // // //                   "linear-gradient(90deg, rgba(201,166,70,0) 0%, rgba(201,166,70,0.3) 50%, rgba(201,166,70,0) 100%)",
// // // //                 mixBlendMode: "overlay",
// // // //               }}
// // // //             />
// // // //           </>
// // // //         )}
// // // //       </motion.div>
// // // //     )
// // // //   }

// // // //   function CurrencySelector() {
// // // //     const [currency, setCurrency] = useState("EUR")
// // // //     const symbols = {
// // // //       EUR: "€",
// // // //       USD: "$",
// // // //       GBP: "£",
// // // //       AED: "د.إ",
// // // //       INR: "₹",
// // // //     }
// // // //     return (
// // // //       <DropdownMenu>
// // // //         <DropdownMenuTrigger asChild>
// // // //           <Button
// // // //             variant="ghost"
// // // //             className="h-9 gap-2 rounded-md border border-border px-3 text-sm font-normal hover:bg-accent/60"
// // // //             aria-label="Select currency"
// // // //           >
// // // //             <Globe className="size-4" aria-hidden="true" />
// // // //             <span className="tracking-wide">
// // // //               {currency} {symbols[currency]}
// // // //             </span>
// // // //             <ChevronDown className="size-4 opacity-70" aria-hidden="true" />
// // // //           </Button>
// // // //         </DropdownMenuTrigger>
// // // //         <DropdownMenuContent align="start" className="w-44">
// // // //           <DropdownMenuLabel>Currency</DropdownMenuLabel>
// // // //           <DropdownMenuSeparator />
// // // //           {["EUR", "USD", "GBP", "AED", "INR"].map((c) => (
// // // //             <DropdownMenuItem key={c} onClick={() => setCurrency(c)}>
// // // //               <span className="mr-2 w-10 text-foreground/70">{c}</span>
// // // //               <span className="ml-auto text-foreground/70">
// // // //                 {c === "EUR" ? "€" : c === "USD" ? "$" : c === "GBP" ? "£" : c === "AED" ? "د.إ" : "₹"}
// // // //               </span>
// // // //             </DropdownMenuItem>
// // // //           ))}
// // // //         </DropdownMenuContent>
// // // //       </DropdownMenu>
// // // //     )
// // // //   }

// // // //   return (
// // // //     <div ref={headerRef} className={cn("relative", className)}>
// // // //       {/* Promo strip */}
// // // //       <motion.div
// // // //         className="w-full bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 text-white"
// // // //         initial={promoVariants.initial}
// // // //         animate={promoVariants.animate}
// // // //         role="region"
// // // //         aria-label="Promotional message"
// // // //       >
// // // //         <div className="mx-auto flex max-w-6xl items-center justify-center px-4 py-2">
// // // //           <motion.span
// // // //             className="text-xs tracking-wide"
// // // //             initial={prefersReducedMotion ? undefined : { letterSpacing: "0.05em" }}
// // // //             animate={prefersReducedMotion ? undefined : { letterSpacing: "0.12em", transition: { duration: 0.6 } }}
// // // //           >
// // // //             FREE SHIPPING ABOVE 95€
// // // //           </motion.span>
// // // //         </div>
// // // //       </motion.div>

// // // //       <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
// // // //         {/* Logo row */}
// // // //         <div className="mx-auto grid max-w-full grid-cols-3 items-center px-4 lg:px-20 py-3">
// // // //           {/* Left: mobile hamburger + desktop currency */}
// // // //           <div className="flex items-center h-11">
// // // //             <div className="md:hidden">
// // // //               <motion.button
// // // //                 type="button"
// // // //                 aria-label="Toggle menu"
// // // //                 aria-expanded={mobileOpen}
// // // //                 onClick={() => setMobileOpen((s) => !s)}
// // // //                 className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-background to-accent/20 border border-border/60 hover:border-border hover:bg-accent/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 transition-all duration-200 shadow-sm"
// // // //                 whileHover={prefersReducedMotion ? undefined : { scale: 1.05, rotate: 2 }}
// // // //                 whileTap={prefersReducedMotion ? undefined : { scale: 0.95 }}
// // // //               >
// // // //                 <AnimatePresence initial={false} mode="wait">
// // // //                   {!mobileOpen ? (
// // // //                     <motion.div
// // // //                       key="menu"
// // // //                       initial={{ rotate: -90, opacity: 0 }}
// // // //                       animate={{ rotate: 0, opacity: 1 }}
// // // //                       exit={{ rotate: 90, opacity: 0 }}
// // // //                       transition={{ duration: 0.18 }}
// // // //                     >
// // // //                       <Menu className="size-5" aria-hidden="true" />
// // // //                     </motion.div>
// // // //                   ) : (
// // // //                     <motion.div
// // // //                       key="close"
// // // //                       initial={{ rotate: -90, opacity: 0 }}
// // // //                       animate={{ rotate: 0, opacity: 1 }}
// // // //                       exit={{ rotate: 90, opacity: 0 }}
// // // //                       transition={{ duration: 0.18 }}
// // // //                     >
// // // //                       <X className="size-5" aria-hidden="true" />
// // // //                     </motion.div>
// // // //                   )}
// // // //                 </AnimatePresence>
// // // //               </motion.button>
// // // //             </div>
// // // //             <div className="hidden md:block">
// // // //               <CurrencySelector />
// // // //             </div>
// // // //           </div>

// // // //           {/* Centered logo */}
// // // //           <div className="flex items-center justify-center">
// // // //             <motion.div
// // // //               className="relative inline-block overflow-hidden will-change-transform"
// // // //               style={{ perspective: 800 }}
// // // //               initial={prefersReducedMotion ? undefined : { clipPath: "inset(0 100% 0 0)" }}
// // // //               animate={
// // // //                 prefersReducedMotion
// // // //                   ? undefined
// // // //                   : {
// // // //                       clipPath: "inset(0 0% 0 0)",
// // // //                       transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.05 },
// // // //                     }
// // // //               }
// // // //               whileHover={
// // // //                 prefersReducedMotion
// // // //                   ? undefined
// // // //                   : { rotateX: -1.5, rotateY: 2, scale: 1.01, transition: { duration: 0.5, ease: [0.2, 0, 0.2, 1] } }
// // // //               }
// // // //             >
// // // //               <motion.img
// // // //                 src={logo}
// // // //                 alt="Festo Trade logo"
// // // //                 width={250}
// // // //                 height={80}
// // // //                 loading="eager"
// // // //                 fetchPriority="high"
// // // //                 className="h-12 w-40 md:h-[80px] md:w-[250px] select-none object-contain"
// // // //                 initial={initialLogo}
// // // //                 animate={animateLogo}
// // // //                 whileHover={
// // // //                   prefersReducedMotion
// // // //                     ? undefined
// // // //                     : { y: -2, scale: 1.015, transition: { duration: 0.3, ease: [0.2, 0, 0.2, 1] } }
// // // //                 }
// // // //                 whileTap={prefersReducedMotion ? undefined : { scale: 0.99 }}
// // // //               />
// // // //               {!prefersReducedMotion && (
// // // //                 <motion.span
// // // //                   aria-hidden="true"
// // // //                   className="pointer-events-none absolute inset-0 -skew-x-12"
// // // //                   variants={shimmerVariants}
// // // //                   initial="rest"
// // // //                   animate="sweep"
// // // //                   whileHover="sweep"
// // // //                   style={{
// // // //                     background:
// // // //                       "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.65) 50%, rgba(255,255,255,0) 100%)",
// // // //                     mixBlendMode: "screen",
// // // //                   }}
// // // //                 />
// // // //               )}
// // // //             </motion.div>
// // // //           </div>

// // // //           {/* Right: lucide icons */}
// // // //           <div className="flex items-center justify-end gap-3 h-11">
// // // //             <div className="flex items-center gap-2 md:hidden">
// // // //               <IconButton label="Search">
// // // //                 <Search className="size-5" aria-hidden="true" />
// // // //               </IconButton>
// // // //               <IconButton label="Cart">
// // // //                 <ShoppingBag className="size-5" aria-hidden="true" />
// // // //               </IconButton>
// // // //             </div>
// // // //             <div className="hidden md:flex md:items-center md:gap-3">
// // // //               <IconButton label="Account">
// // // //                 <User className="size-5" aria-hidden="true" />
// // // //               </IconButton>
// // // //               <IconButton label="Search">
// // // //                 <Search className="size-5" aria-hidden="true" />
// // // //               </IconButton>
// // // //               <IconButton label="Wishlist">
// // // //                 <Heart className="size-5" aria-hidden="true" />
// // // //               </IconButton>
// // // //               <IconButton label="Bag">
// // // //                 <ShoppingBag className="size-5" aria-hidden="true" />
// // // //               </IconButton>
// // // //             </div>
// // // //           </div>
// // // //         </div>

// // // //         {/* Nav row (desktop) */}
// // // //         <div
// // // //           className="mx-auto hidden !max-w-full items-center justify-center gap-6 px-4 lg:px-20 pb-3 pt-1 text-sm tracking-wide md:flex"
// // // //           onMouseLeave={closePanel}
// // // //         >
// // // //           {MENU.map((item) => (
// // // //             <motion.button
// // // //               key={item.key}
// // // //               type="button"
// // // //               onMouseEnter={() => openPanel(item.key)}
// // // //               onFocus={() => openPanel(item.key)}
// // // //               className={cn("relative px-2 py-1 uppercase text-foreground/90 hover:text-foreground cursor-pointer")}
// // // //               aria-expanded={panelOpen && activeMenu === item.key}
// // // //               aria-controls="mega-panel"
// // // //               whileHover={prefersReducedMotion ? undefined : { y: -1, scale: 1.05 }}
// // // //               whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
// // // //             >
// // // //               {item.label}
// // // //               {panelOpen && activeMenu === item.key && (
// // // //                 <motion.span
// // // //                   layoutId="nav-underline"
// // // //                   className="absolute inset-x-2 -bottom-1 h-[2px] rounded bg-[#C9A646]"
// // // //                   initial={prefersReducedMotion ? undefined : { scaleX: 0 }}
// // // //                   animate={prefersReducedMotion ? undefined : { scaleX: 1 }}
// // // //                   transition={{ duration: 0.3, ease: [0.2, 0, 0, 1] }}
// // // //                 />
// // // //               )}
// // // //             </motion.button>
// // // //           ))}
// // // //         </div>

// // // //         {/* Mega panel under sticky header */}
// // // //         <motion.div
// // // //           id="mega-panel"
// // // //           role="region"
// // // //           aria-label="Navigation panel"
// // // //           className="absolute inset-x-0 top-full z-50 hidden max-h-[80vh] overflow-auto bg-background/98 backdrop-blur-sm md:block"
// // // //           variants={panelVariants}
// // // //           initial="closed"
// // // //           animate={panelOpen ? "open" : "closed"}
// // // //           style={{ transformOrigin: "top center" }}
// // // //         >
// // // //           <div className="mx-auto h-full max-w-full  ">
// // // //             <div className="h-full border-b border-l border-r border-border bg-background shadow-2xl px-4 lg:px-14">
// // // //               <PanelContent imgUrl={currentRightImg}/>
// // // //             </div>
// // // //           </div>
// // // //         </motion.div>

// // // //         <AnimatePresence>
// // // //           {mobileOpen && (
// // // //             <motion.aside
// // // //               className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm md:hidden"
// // // //               initial={{ opacity: 0 }}
// // // //               animate={{ opacity: 1 }}
// // // //               exit={{ opacity: 0 }}
// // // //               onClick={() => setMobileOpen(false)}
// // // //             >
// // // //               <motion.div
// // // //                 className="absolute inset-y-0 left-0 w-full max-w-sm border-r border-border bg-background/98 backdrop-blur-sm shadow-2xl sm:w-80"
// // // //                 initial={prefersReducedMotion ? { x: 0 } : { x: "-100%", opacity: 0 }}
// // // //                 animate={prefersReducedMotion ? { x: 0 } : { x: 0, opacity: 1 }}
// // // //                 exit={prefersReducedMotion ? { x: 0 } : { x: "-100%", opacity: 0 }}
// // // //                 transition={{ duration: 0.3, ease: [0.2, 0, 0, 1] }}
// // // //                 onClick={(e) => e.stopPropagation()}
// // // //                 role="dialog"
// // // //                 aria-modal="true"
// // // //                 aria-label="Mobile menu"
// // // //               >
// // // //                 {/* Improved mobile drawer header with better spacing */}
// // // //                 <div className="border-b border-border/50 bg-gradient-to-r from-background to-accent/10 px-6 py-4">
// // // //                   <motion.div
// // // //                     className="flex items-center justify-between"
// // // //                     initial={prefersReducedMotion ? undefined : { opacity: 0, y: -10 }}
// // // //                     animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
// // // //                     transition={{ delay: 0.1 }}
// // // //                   >
// // // //                     <span className="text-sm font-semibold text-foreground tracking-wide">MENU</span>
// // // //                     <motion.button
// // // //                       className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-background to-accent/20 border border-border/60 hover:bg-accent/60 transition-all duration-200 shadow-sm"
// // // //                       onClick={() => setMobileOpen(false)}
// // // //                       aria-label="Close menu"
// // // //                       whileHover={prefersReducedMotion ? undefined : { scale: 1.05, rotate: 90 }}
// // // //                       whileTap={prefersReducedMotion ? undefined : { scale: 0.95 }}
// // // //                     >
// // // //                       <X className="size-5" aria-hidden="true" />
// // // //                     </motion.button>
// // // //                   </motion.div>
// // // //                 </div>

// // // //                 {/* Improved mobile navigation with better spacing and alignment */}
// // // //                 <div className="flex-1 overflow-y-auto px-6 py-6">
// // // //                   <motion.nav className="space-y-3" variants={staggerContainer} initial="closed" animate="open">
// // // //                     {MENU.map((item, index) => (
// // // //                       <motion.details key={item.key} className="group" variants={staggerItem}>
// // // //                         <summary className="flex cursor-pointer list-none items-center justify-between rounded-xl px-4 py-4 hover:bg-accent/60 transition-all duration-200 border border-transparent hover:border-border/30">
// // // //                           <span className="uppercase font-semibold text-sm tracking-wider">{item.label}</span>
// // // //                           <motion.span whileHover={prefersReducedMotion ? undefined : { scale: 1.1 }}>
// // // //                             <ChevronDown
// // // //                               className="size-4 text-foreground/60 transition-transform duration-300 group-open:rotate-180"
// // // //                               aria-hidden="true"
// // // //                             />
// // // //                           </motion.span>
// // // //                         </summary>
// // // //                         <motion.div
// // // //                           className="pl-4 pt-3 pb-2"
// // // //                           initial={prefersReducedMotion ? undefined : { opacity: 0, height: 0 }}
// // // //                           animate={prefersReducedMotion ? undefined : { opacity: 1, height: "auto" }}
// // // //                           transition={{ duration: 0.2 }}
// // // //                         >
// // // //                           {item.key === "diamond" ? (
// // // //                             <ul className="grid grid-cols-1 gap-2 text-sm leading-relaxed">
// // // //                               {DIAMOND_SHAPES.map((s) => {
// // // //                                 const ShapeIcon = DiamondShapeSVGs[s]
// // // //                                 return (
// // // //                                   <li key={s}>
// // // //                                     <motion.a
// // // //                                       className="flex items-center gap-3 rounded-lg px-3 py-2.5 hover:bg-accent/60 transition-colors font-medium"
// // // //                                       whileHover={prefersReducedMotion ? undefined : { x: 2 }}
// // // //                                     >
// // // //                                       <ShapeIcon />
// // // //                                       <span>{s}</span>
// // // //                                     </motion.a>
// // // //                                   </li>
// // // //                                 )
// // // //                               })}
// // // //                             </ul>
// // // //                           ) : item.key === "jewelry" ? (
// // // //                             <ul className="space-y-1 text-sm leading-relaxed">
// // // //                               {["Necklaces", "Bracelets", "Earrings", "Rings"].map((subItem) => (
// // // //                                 <li key={subItem}>
// // // //                                   <motion.a
// // // //                                     className="block rounded-lg px-3 py-2.5 hover:bg-accent/60 transition-colors font-medium"
// // // //                                     whileHover={prefersReducedMotion ? undefined : { x: 2 }}
// // // //                                   >
// // // //                                     {subItem}
// // // //                                   </motion.a>
// // // //                                 </li>
// // // //                               ))}
// // // //                             </ul>
// // // //                           ) : (
// // // //                             <ul className="space-y-1 text-sm leading-relaxed">
// // // //                               {["Featured", "New Arrivals", "Bestsellers"].map((subItem) => (
// // // //                                 <li key={subItem}>
// // // //                                   <motion.a
// // // //                                     className="block rounded-lg px-3 py-2.5 hover:bg-accent/60 transition-colors font-medium"
// // // //                                     whileHover={prefersReducedMotion ? undefined : { x: 2 }}
// // // //                                   >
// // // //                                     {subItem}
// // // //                                   </motion.a>
// // // //                                 </li>
// // // //                               ))}
// // // //                             </ul>
// // // //                           )}
// // // //                         </motion.div>
// // // //                       </motion.details>
// // // //                     ))}
// // // //                   </motion.nav>

// // // //                   <motion.div
// // // //                     className="mt-8 overflow-hidden rounded-xl border border-border shadow-lg"
// // // //                     initial={prefersReducedMotion ? undefined : { opacity: 0, scale: 0.95 }}
// // // //                     animate={prefersReducedMotion ? undefined : { opacity: 1, scale: 1 }}
// // // //                     transition={{ delay: 0.3 }}
// // // //                   >
// // // //                     <motion.img
// // // //                       src={logo}
// // // //                       alt="Featured"
// // // //                       className="h-40 w-full object-cover"
// // // //                       whileHover={prefersReducedMotion ? undefined : { scale: 1.05 }}
// // // //                     />
// // // //                   </motion.div>
// // // //                 </div>
// // // //               </motion.div>
// // // //             </motion.aside>
// // // //           )}
// // // //         </AnimatePresence>
// // // //       </header>
// // // //     </div>
// // // //   )
// // // // }

// // // // export default Navbar


// // // "use client"

// // // import { useRef, useState } from "react"
// // // import { motion, AnimatePresence, useReducedMotion } from "framer-motion"
// // // import { cn } from "@/lib/utils"
// // // import { ChevronDown, Globe, Heart, Search, ShoppingBag, User, X, Menu } from "lucide-react"
// // // import { Button } from "@/components/ui/button"
// // // import logo from "./logo.webp"
// // // import {
// // //   DropdownMenu,
// // //   DropdownMenuContent,
// // //   DropdownMenuItem,
// // //   DropdownMenuLabel,
// // //   DropdownMenuSeparator,
// // //   DropdownMenuTrigger,
// // // } from "@/components/ui/dropdown-menu"

// // // // Declare missing variables
// // // const staggerContainer = {
// // //   open: {
// // //     transition: { staggerChildren: 0.075, delayChildren: 0.1 },
// // //   },
// // //   closed: {
// // //     transition: { staggerChildren: 0.05, staggerDirection: -1 },
// // //   },
// // // }

// // // const staggerItem = {
// // //   open: {
// // //     y: 0,
// // //     opacity: 1,
// // //     transition: {
// // //       y: { stiffness: 1000, velocity: -100 },
// // //     },
// // //   },
// // //   closed: {
// // //     y: 50,
// // //     opacity: 0,
// // //     transition: {
// // //       y: { stiffness: 1000 },
// // //     },
// // //   },
// // // }

// // // const promoVariants = {
// // //   initial: { opacity: 0 },
// // //   animate: { opacity: 1 },
// // // }

// // // const initialLogo = { opacity: 0 }
// // // const animateLogo = { opacity: 1 }

// // // const shimmerVariants = {
// // //   rest: { x: "-100%" },
// // //   sweep: { x: "100%" },
// // // }

// // // const panelVariants = {
// // //   open: {
// // //     y: 0,
// // //     opacity: 1,
// // //     transition: {
// // //       y: { stiffness: 1000, velocity: -100 },
// // //     },
// // //   },
// // //   closed: {
// // //     y: "100%",
// // //     opacity: 0,
// // //     transition: {
// // //       y: { stiffness: 1000 },
// // //     },
// // //   },
// // // }

// // // function IconButton({ children, label, onClick, className }) {
// // //   const prefersReducedMotion = useReducedMotion()

// // //   return (
// // //     <motion.button
// // //       type="button"
// // //       onClick={onClick}
// // //       aria-label={label}
// // //       className={cn(
// // //         "inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-background to-accent/20 border border-border/60 hover:border-border hover:bg-accent/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 transition-all duration-200 shadow-sm",
// // //         className,
// // //       )}
// // //       whileHover={prefersReducedMotion ? undefined : { scale: 1.05, y: -1 }}
// // //       whileTap={prefersReducedMotion ? undefined : { scale: 0.95 }}
// // //     >
// // //       {children}
// // //     </motion.button>
// // //   )
// // // }

// // // const Navbar = ({ className, logoSrc }) => {
// // //   const prefersReducedMotion = useReducedMotion()
// // //   const [panelOpen, setPanelOpen] = useState(false)
// // //   const [activeMenu, setActiveMenu] = useState("all")
// // //   const [mobileOpen, setMobileOpen] = useState(false)

// // //   const headerRef = useRef(null)

// // //   const DiamondShapeSVGs = {
// // //     Round: () => (
// // //       <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
// // //         <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5" fill="none" />
// // //       </svg>
// // //     ),
// // //     Princess: () => (
// // //       <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
// // //         <rect x="6" y="6" width="12" height="12" stroke="currentColor" strokeWidth="1.5" fill="none" />
// // //       </svg>
// // //     ),
// // //     Cushion: () => (
// // //       <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
// // //         <rect x="6" y="6" width="12" height="12" rx="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
// // //       </svg>
// // //     ),
// // //     Emerald: () => (
// // //       <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
// // //         <path d="M7 6h10l2 2v8l-2 2H7l-2-2V8l2-2z" stroke="currentColor" strokeWidth="1.5" fill="none" />
// // //       </svg>
// // //     ),
// // //     Oval: () => (
// // //       <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
// // //         <ellipse cx="12" cy="12" rx="6" ry="8" stroke="currentColor" strokeWidth="1.5" fill="none" />
// // //       </svg>
// // //     ),
// // //     Pear: () => (
// // //       <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
// // //         <path
// // //           d="M12 4c-3 0-6 2-6 6 0 4 3 8 6 8s6-4 6-8c0-4-3-6-6-6z"
// // //           stroke="currentColor"
// // //           strokeWidth="1.5"
// // //           fill="none"
// // //         />
// // //         <path d="M12 4l2-2" stroke="currentColor" strokeWidth="1.5" />
// // //       </svg>
// // //     ),
// // //     Marquise: () => (
// // //       <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
// // //         <path d="M12 4c4 0 8 2 8 8s-4 8-8 8-8-2-8-8z" stroke="currentColor" strokeWidth="1.5" fill="none" />
// // //       </svg>
// // //     ),
// // //     Radiant: () => (
// // //       <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
// // //         <path d="M7 6h10l2 2v8l-2 2H7l-2-2V8l2-2z" stroke="currentColor" strokeWidth="1.5" fill="none" />
// // //         <path d="M9 9l6 6M15 9l-6 6" stroke="currentColor" strokeWidth="1" />
// // //       </svg>
// // //     ),
// // //     Asscher: () => (
// // //       <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
// // //         <path d="M8 6h8l2 2v8l-2 2H8l-2-2V8l2-2z" stroke="currentColor" strokeWidth="1.5" fill="none" />
// // //         <path d="M8 8l8 8M16 8l-8 8" stroke="currentColor" strokeWidth="0.5" />
// // //       </svg>
// // //     ),
// // //     Heart: () => (
// // //       <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
// // //         <path
// // //           d="M12 21c-1-1-8-5-8-11a5 5 0 0 1 8-4 5 5 0 0 1 8 4c0 6-7 10-8 11z"
// // //           stroke="currentColor"
// // //           strokeWidth="1.5"
// // //           fill="none"
// // //         />
// // //       </svg>
// // //     ),
// // //   }

// // //   const DIAMOND_SHAPES = [
// // //     "Round",
// // //     "Princess",
// // //     "Cushion",
// // //     "Emerald",
// // //     "Oval",
// // //     "Pear",
// // //     "Marquise",
// // //     "Radiant",
// // //     "Asscher",
// // //     "Heart",
// // //   ]

// // //   function openPanel(key) {
// // //     setActiveMenu(key)
// // //     setPanelOpen(true)
// // //   }

// // //   function closePanel() {
// // //     setPanelOpen(false)
// // //   }

// // //   // Desktop top-level menu items
// // //   const MENU = [
// // //     { key: "all", label: "All", rightimgurl: "https://images.pexels.com/photos/33154633/pexels-photo-33154633.jpeg" },
// // //     {
// // //       key: "jewelry",
// // //       label: "Jewelry",
// // //       rightimgurl: "https://images.pexels.com/photos/32039109/pexels-photo-32039109.jpeg",
// // //     },
// // //     {
// // //       key: "diamond",
// // //       label: "Diamond",
// // //       rightimgurl: "https://images.pexels.com/photos/30328042/pexels-photo-30328042.jpeg",
// // //     },
// // //     {
// // //       key: "collections",
// // //       label: "Collections",
// // //       rightimgurl: "https://images.pexels.com/photos/9256822/pexels-photo-9256822.jpeg",
// // //     },
// // //     {
// // //       key: "gifts",
// // //       label: "Gifts",
// // //       rightimgurl: "https://images.pexels.com/photos/11139357/pexels-photo-11139357.jpeg",
// // //     },
// // //     {
// // //       key: "store",
// // //       label: "Store Locator",
// // //       rightimgurl: "https://images.pexels.com/photos/32841967/pexels-photo-32841967.jpeg",
// // //     },
// // //     {
// // //       key: "about",
// // //       label: "About Us",
// // //       rightimgurl: "https://images.pexels.com/photos/1927266/pexels-photo-1927266.jpeg",
// // //     },
// // //   ]
// // //   const currentRightImg = MENU.find((m) => m.key === activeMenu)?.rightimgurl

// // //   function PanelContent({ imgUrl }) {
// // //     if (activeMenu === "diamond") {
// // //       return (
// // //         <motion.div
// // //           className="grid gap-8 p-8 md:grid-cols-3"
// // //           variants={staggerContainer}
// // //           initial="closed"
// // //           animate="open"
// // //         >
// // //           <motion.div className="md:col-span-2" variants={staggerItem}>
// // //             <div>
// // //               <motion.h3 className="text-sm font-medium tracking-wide text-foreground/80" variants={staggerItem}>
// // //                 Diamond Shapes
// // //               </motion.h3>
// // //               <motion.ul
// // //                 className="mt-4 grid grid-cols-2 gap-3 text-sm leading-relaxed md:grid-cols-3"
// // //                 variants={staggerContainer}
// // //               >
// // //                 {DIAMOND_SHAPES.map((shape, index) => {
// // //                   const ShapeIcon = DiamondShapeSVGs[shape]
// // //                   return (
// // //                     <motion.li key={shape} variants={staggerItem}>
// // //                       <motion.a
// // //                         className="inline-flex w-full items-center gap-3 rounded-md px-3 py-2 hover:bg-accent/60 transition-colors"
// // //                         whileHover={prefersReducedMotion ? undefined : { x: 4, scale: 1.02 }}
// // //                         whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
// // //                       >
// // //                         <ShapeIcon />
// // //                         <span>{shape}</span>
// // //                       </motion.a>
// // //                     </motion.li>
// // //                   )
// // //                 })}
// // //               </motion.ul>
// // //             </div>
// // //           </motion.div>
// // //           <motion.div variants={staggerItem}>
// // //             <RightImage imgUrl={imgUrl} />
// // //           </motion.div>
// // //         </motion.div>
// // //       )
// // //     }

// // //     if (activeMenu === "jewelry") {
// // //       return (
// // //         <motion.div
// // //           className="grid gap-8 p-8 md:grid-cols-3"
// // //           variants={staggerContainer}
// // //           initial="closed"
// // //           animate="open"
// // //         >
// // //           <motion.div className="md:col-span-2 grid gap-8 sm:grid-cols-2" variants={staggerItem}>
// // //             <motion.div variants={staggerItem}>
// // //               <h3 className="text-sm font-medium tracking-wide text-foreground/80">Categories</h3>
// // //               <motion.ul className="mt-4 space-y-2 text-sm leading-relaxed" variants={staggerContainer}>
// // //                 {["Necklaces", "Bracelets", "Earrings", "Rings"].map((item) => (
// // //                   <motion.li key={item} variants={staggerItem}>
// // //                     <motion.a
// // //                       className="inline-flex items-center rounded-md px-3 py-2 hover:bg-accent/60 transition-colors"
// // //                       whileHover={prefersReducedMotion ? undefined : { x: 4, scale: 1.02 }}
// // //                     >
// // //                       {item}
// // //                     </motion.a>
// // //                   </motion.li>
// // //                 ))}
// // //               </motion.ul>
// // //             </motion.div>
// // //             <motion.div variants={staggerItem}>
// // //               <h3 className="text-sm font-medium tracking-wide text-foreground/80">Metals</h3>
// // //               <motion.ul className="mt-4 space-y-2 text-sm leading-relaxed" variants={staggerContainer}>
// // //                 {["18K Yellow Gold", "18K White Gold", "Platinum", "Rose Gold"].map((item) => (
// // //                   <motion.li key={item} variants={staggerItem}>
// // //                     <motion.a
// // //                       className="inline-flex items-center rounded-md px-3 py-2 hover:bg-accent/60 transition-colors"
// // //                       whileHover={prefersReducedMotion ? undefined : { x: 4, scale: 1.02 }}
// // //                     >
// // //                       {item}
// // //                     </motion.a>
// // //                   </motion.li>
// // //                 ))}
// // //               </motion.ul>
// // //             </motion.div>
// // //           </motion.div>
// // //           <motion.div variants={staggerItem}>
// // //             <RightImage imgUrl={imgUrl} />
// // //           </motion.div>
// // //         </motion.div>
// // //       )
// // //     }

// // //     // default / "all" / others
// // //     return (
// // //       <motion.div className="grid gap-8 p-8 md:grid-cols-3" variants={staggerContainer} initial="closed" animate="open">
// // //         <motion.div className="md:col-span-2 grid gap-8 sm:grid-cols-2" variants={staggerItem}>
// // //           <motion.div variants={staggerItem}>
// // //             <h3 className="text-sm font-medium tracking-wide text-foreground/80">Highlights</h3>
// // //             <motion.ul className="mt-4 space-y-2 text-sm leading-relaxed" variants={staggerContainer}>
// // //               <motion.li variants={staggerItem}>
// // //                 <motion.a
// // //                   className="inline-flex items-center justify-between rounded-md px-3 py-2 hover:bg-accent/60 transition-colors"
// // //                   whileHover={prefersReducedMotion ? undefined : { x: 4, scale: 1.02 }}
// // //                 >
// // //                   <span>Gold Ornaments</span>
// // //                   <span className="text-[11px] text-[#C9A646]">New</span>
// // //                 </motion.a>
// // //               </motion.li>
// // //               {["Bridal & Heritage", "Daily Wear Elegance", "Limited Editions"].map((item) => (
// // //                 <motion.li key={item} variants={staggerItem}>
// // //                   <motion.a
// // //                     className="inline-flex items-center rounded-md px-3 py-2 hover:bg-accent/60 transition-colors"
// // //                     whileHover={prefersReducedMotion ? undefined : { x: 4, scale: 1.02 }}
// // //                   >
// // //                     {item}
// // //                   </motion.a>
// // //                 </motion.li>
// // //               ))}
// // //             </motion.ul>
// // //           </motion.div>
// // //           <motion.div variants={staggerItem}>
// // //             <h3 className="text-sm font-medium tracking-wide text-foreground/80">Services</h3>
// // //             <motion.ul className="mt-4 space-y-2 text-sm leading-relaxed" variants={staggerContainer}>
// // //               {[
// // //                 "Custom Design Consults",
// // //                 "Authentication & Appraisals",
// // //                 "Care & Restoration",
// // //                 "Concierge Sourcing",
// // //               ].map((item) => (
// // //                 <motion.li key={item} variants={staggerItem}>
// // //                   <motion.a
// // //                     className="inline-flex items-center rounded-md px-3 py-2 hover:bg-accent/60 transition-colors"
// // //                     whileHover={prefersReducedMotion ? undefined : { x: 4, scale: 1.02 }}
// // //                   >
// // //                     {item}
// // //                   </motion.a>
// // //                 </motion.li>
// // //               ))}
// // //             </motion.ul>
// // //           </motion.div>
// // //         </motion.div>
// // //         <motion.div variants={staggerItem}>
// // //           <RightImage imgUrl={imgUrl} />
// // //         </motion.div>
// // //       </motion.div>
// // //     )
// // //   }

// // //   function RightImage({ imgUrl }) {
// // //     const prefersReducedMotion = useReducedMotion()
// // //     return (
// // //       <motion.div
// // //         className="relative h-60 md:h-80 overflow-hidden bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-zinc-800"
// // //         whileHover={prefersReducedMotion ? undefined : { scale: 1.02 }}
// // //         transition={{ duration: 0.3, ease: [0.2, 0, 0.2, 1] }}
// // //       >
// // //         <motion.img
// // //           src={imgUrl || "/placeholder.svg?height=320&width=480&query=menu%20panel%20right%20image"}
// // //           alt="Feature visual"
// // //           className="h-full w-full object-cover shadow-2xl  "
// // //           initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, scale: 1.05, y: 10 }}
// // //           animate={
// // //             prefersReducedMotion
// // //               ? { opacity: 1 }
// // //               : {
// // //                   opacity: 1,
// // //                   scale: [1, 1.02, 1],
// // //                   y: 0,
// // //                   transition: {
// // //                     opacity: { duration: 0.4 },
// // //                     scale: { duration: 8, ease: "easeInOut", repeat: Number.POSITIVE_INFINITY },
// // //                     y: { duration: 0.4 },
// // //                   },
// // //                 }
// // //           }
// // //           whileHover={prefersReducedMotion ? undefined : { scale: 1.08, rotate: 0.5 }}
// // //         />
// // //         {/* Enhanced top gold line with gradient */}
// // //         <motion.span
// // //           className="pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#C9A646] via-[#F4E4A6] to-[#C9A646]"
// // //           aria-hidden="true"
// // //           initial={prefersReducedMotion ? undefined : { scaleX: 0 }}
// // //           animate={prefersReducedMotion ? undefined : { scaleX: 1, transition: { duration: 0.6, delay: 0.2 } }}
// // //         />
// // //         {/* Glint sweep */}
// // //         {!prefersReducedMotion && (
// // //           <>
// // //             <motion.span
// // //               aria-hidden="true"
// // //               className="pointer-events-none absolute inset-0 -skew-x-12"
// // //               initial={{ x: "-130%", opacity: 0 }}
// // //               animate={{ x: "130%", opacity: 1 }}
// // //               transition={{ duration: 1.2, ease: [0.2, 0, 0, 1], repeat: Number.POSITIVE_INFINITY, repeatDelay: 5 }}
// // //               style={{
// // //                 background:
// // //                   "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0) 100%)",
// // //                 mixBlendMode: "screen",
// // //               }}
// // //             />
// // //             <motion.span
// // //               aria-hidden="true"
// // //               className="pointer-events-none absolute inset-0 -skew-x-12"
// // //               initial={{ x: "-130%", opacity: 0 }}
// // //               animate={{ x: "130%", opacity: 1 }}
// // //               transition={{
// // //                 duration: 0.8,
// // //                 ease: [0.2, 0, 0, 1],
// // //                 repeat: Number.POSITIVE_INFINITY,
// // //                 repeatDelay: 5,
// // //                 delay: 0.3,
// // //               }}
// // //               style={{
// // //                 background:
// // //                   "linear-gradient(90deg, rgba(201,166,70,0) 0%, rgba(201,166,70,0.3) 50%, rgba(201,166,70,0) 100%)",
// // //                 mixBlendMode: "overlay",
// // //               }}
// // //             />
// // //           </>
// // //         )}
// // //       </motion.div>
// // //     )
// // //   }

// // //   function CurrencySelector() {
// // //     const [currency, setCurrency] = useState("EUR")
// // //     const symbols = {
// // //       EUR: "€",
// // //       USD: "$",
// // //       GBP: "£",
// // //       AED: "د.إ",
// // //       INR: "₹",
// // //     }
// // //     return (
// // //       <DropdownMenu>
// // //         <DropdownMenuTrigger asChild>
// // //           <Button
// // //             variant="ghost"
// // //             className="h-9 gap-2 rounded-md border border-border px-3 text-sm font-normal hover:bg-accent/60"
// // //             aria-label="Select currency"
// // //           >
// // //             <Globe className="size-4" aria-hidden="true" />
// // //             <span className="tracking-wide">
// // //               {currency} {symbols[currency]}
// // //             </span>
// // //             <ChevronDown className="size-4 opacity-70" aria-hidden="true" />
// // //           </Button>
// // //         </DropdownMenuTrigger>
// // //         <DropdownMenuContent align="start" className="w-44">
// // //           <DropdownMenuLabel>Currency</DropdownMenuLabel>
// // //           <DropdownMenuSeparator />
// // //           {["EUR", "USD", "GBP", "AED", "INR"].map((c) => (
// // //             <DropdownMenuItem key={c} onClick={() => setCurrency(c)}>
// // //               <span className="mr-2 w-10 text-foreground/70">{c}</span>
// // //               <span className="ml-auto text-foreground/70">
// // //                 {c === "EUR" ? "€" : c === "USD" ? "$" : c === "GBP" ? "£" : c === "AED" ? "د.إ" : "₹"}
// // //               </span>
// // //             </DropdownMenuItem>
// // //           ))}
// // //         </DropdownMenuContent>
// // //       </DropdownMenu>
// // //     )
// // //   }

// // //   return (
// // //     <div ref={headerRef} className={cn("relative", className)}>
// // //       {/* Promo strip */}
// // //       <motion.div
// // //         className="w-full bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 text-white"
// // //         initial={promoVariants.initial}
// // //         animate={promoVariants.animate}
// // //         role="region"
// // //         aria-label="Promotional message"
// // //       >
// // //         <div className="mx-auto flex max-w-6xl items-center justify-center px-4 py-2">
// // //           <motion.span
// // //             className="text-xs tracking-wide"
// // //             initial={prefersReducedMotion ? undefined : { letterSpacing: "0.05em" }}
// // //             animate={prefersReducedMotion ? undefined : { letterSpacing: "0.12em", transition: { duration: 0.6 } }}
// // //           >
// // //             FREE SHIPPING ABOVE 95€
// // //           </motion.span>
// // //         </div>
// // //       </motion.div>

// // //       <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
// // //         {/* Logo row */}
// // //         <div className="mx-auto grid max-w-full grid-cols-3 items-center px-4 lg:px-20 py-3">
// // //           {/* Left: mobile hamburger + desktop currency */}
// // //           <div className="flex items-center h-11">
// // //             <div className="md:hidden">
// // //               <motion.button
// // //                 type="button"
// // //                 aria-label="Toggle menu"
// // //                 aria-expanded={mobileOpen}
// // //                 onClick={() => setMobileOpen((s) => !s)}
// // //                 className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-background to-accent/20 border border-border/60 hover:border-border hover:bg-accent/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 transition-all duration-200 shadow-sm"
// // //                 whileHover={prefersReducedMotion ? undefined : { scale: 1.05, rotate: 2 }}
// // //                 whileTap={prefersReducedMotion ? undefined : { scale: 0.95 }}
// // //               >
// // //                 <AnimatePresence initial={false} mode="wait">
// // //                   {!mobileOpen ? (
// // //                     <motion.div
// // //                       key="menu"
// // //                       initial={{ rotate: -90, opacity: 0 }}
// // //                       animate={{ rotate: 0, opacity: 1 }}
// // //                       exit={{ rotate: 90, opacity: 0 }}
// // //                       transition={{ duration: 0.18 }}
// // //                     >
// // //                       <Menu className="size-5" aria-hidden="true" />
// // //                     </motion.div>
// // //                   ) : (
// // //                     <motion.div
// // //                       key="close"
// // //                       initial={{ rotate: -90, opacity: 0 }}
// // //                       animate={{ rotate: 0, opacity: 1 }}
// // //                       exit={{ rotate: 90, opacity: 0 }}
// // //                       transition={{ duration: 0.18 }}
// // //                     >
// // //                       <X className="size-5" aria-hidden="true" />
// // //                     </motion.div>
// // //                   )}
// // //                 </AnimatePresence>
// // //               </motion.button>
// // //             </div>
// // //             <div className="hidden md:block">
// // //               <CurrencySelector />
// // //             </div>
// // //           </div>

// // //           {/* Centered logo */}
// // //           <div className="flex items-center justify-center">
// // //             <motion.div
// // //               className="relative inline-block overflow-hidden will-change-transform"
// // //               style={{ perspective: 800 }}
// // //               initial={prefersReducedMotion ? undefined : { clipPath: "inset(0 100% 0 0)" }}
// // //               animate={
// // //                 prefersReducedMotion
// // //                   ? undefined
// // //                   : {
// // //                       clipPath: "inset(0 0% 0 0)",
// // //                       transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.05 },
// // //                     }
// // //               }
// // //               whileHover={
// // //                 prefersReducedMotion
// // //                   ? undefined
// // //                   : { rotateX: -1.5, rotateY: 2, scale: 1.01, transition: { duration: 0.5, ease: [0.2, 0, 0.2, 1] } }
// // //               }
// // //             >
// // //               <motion.img
// // //                 src={logo}
// // //                 alt="Festo Trade logo"
// // //                 width={250}
// // //                 height={80}
// // //                 loading="eager"
// // //                 fetchPriority="high"
// // //                 className="h-12 w-40 md:h-[80px] md:w-[250px] select-none object-contain cursor-pointer"
// // //                 initial={initialLogo}
// // //                 animate={animateLogo}
// // //                 whileHover={
// // //                   prefersReducedMotion
// // //                     ? undefined
// // //                     : { y: -2, scale: 1.015, transition: { duration: 0.3, ease: [0.2, 0, 0.2, 1] } }
// // //                 }
// // //                 whileTap={prefersReducedMotion ? undefined : { scale: 0.99 }}
// // //               />
// // //               {!prefersReducedMotion && (
// // //                 <motion.span
// // //                   aria-hidden="true"
// // //                   className="pointer-events-none absolute inset-0 -skew-x-12"
// // //                   variants={shimmerVariants}
// // //                   initial="rest"
// // //                   animate="sweep"
// // //                   whileHover="sweep"
// // //                   style={{
// // //                     background:
// // //                       "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.65) 50%, rgba(255,255,255,0) 100%)",
// // //                     mixBlendMode: "screen",
// // //                   }}
// // //                 />
// // //               )}
// // //             </motion.div>
// // //           </div>

// // //           {/* Right: lucide icons */}
// // //           <div className="flex items-center justify-end gap-3 h-11">
// // //             <div className="flex items-center gap-2 md:hidden">
// // //               <IconButton label="Search">
// // //                 <Search className="size-5" aria-hidden="true" />
// // //               </IconButton>
// // //               <IconButton label="Cart">
// // //                 <ShoppingBag className="size-5" aria-hidden="true" />
// // //               </IconButton>
// // //             </div>
// // //             <div className="hidden md:flex md:items-center md:gap-3">
// // //               <IconButton label="Account">
// // //                 <User className="size-5" aria-hidden="true" />
// // //               </IconButton>
// // //               <IconButton label="Search">
// // //                 <Search className="size-5" aria-hidden="true" />
// // //               </IconButton>
// // //               <IconButton label="Wishlist">
// // //                 <Heart className="size-5" aria-hidden="true" />
// // //               </IconButton>
// // //               <IconButton label="Bag">
// // //                 <ShoppingBag className="size-5" aria-hidden="true" />
// // //               </IconButton>
// // //             </div>
// // //           </div>
// // //         </div>

// // //         {/* Nav row (desktop) */}
// // //         <motion.nav
// // //           className="mx-auto hidden !max-w-full items-center justify-center gap-6 px-4 lg:px-20 pb-3 pt-1 text-sm tracking-wide md:flex"
// // //           onMouseLeave={closePanel}
// // //           variants={staggerContainer}
// // //           initial="closed"
// // //           animate="open"
// // //         >
// // //           {MENU.map((item) => (
// // //             <motion.button
// // //               key={item.key}
// // //               type="button"
// // //               onMouseEnter={() => openPanel(item.key)}
// // //               onFocus={() => openPanel(item.key)}
// // //               className={cn("relative px-2 py-1 uppercase text-foreground/90 hover:text-foreground cursor-pointer")}
// // //               aria-expanded={panelOpen && activeMenu === item.key}
// // //               aria-controls="mega-panel"
// // //               variants={staggerItem}
// // //               whileHover={prefersReducedMotion ? undefined : { y: -1, scale: 1.05 }}
// // //               whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
// // //               transition={{ type: "spring", stiffness: 500, damping: 30, mass: 0.4 }}
// // //             >
// // //               {item.label}
// // //               <AnimatePresence mode="wait">
// // //                 {panelOpen && activeMenu === item.key && (
// // //                   <motion.span
// // //                     layoutId="nav-underline"
// // //                     className="absolute inset-x-2 -bottom-1 h-[2px] rounded bg-[#C9A646]"
// // //                     initial={prefersReducedMotion ? undefined : { scaleX: 0 }}
// // //                     animate={prefersReducedMotion ? undefined : { scaleX: 1 }}
// // //                     exit={prefersReducedMotion ? undefined : { scaleX: 0 }}
// // //                     transition={{ duration: 0.25, ease: [0.2, 0, 0, 1] }}
// // //                   />
// // //                 )}
// // //               </AnimatePresence>
// // //             </motion.button>
// // //           ))}
// // //         </motion.nav>

// // //         {/* Mega panel under sticky header */}
// // //         <motion.div
// // //           id="mega-panel"
// // //           role="region"
// // //           aria-label="Navigation panel"
// // //           className="absolute inset-x-0 top-full z-50 hidden max-h-[80vh] overflow-auto bg-background/98 backdrop-blur-sm md:block"
// // //           variants={panelVariants}
// // //           initial="closed"
// // //           animate={panelOpen ? "open" : "closed"}
// // //           style={{ transformOrigin: "top center" }}
// // //         >
// // //           <div className="mx-auto h-full max-w-full  ">
// // //             <div className="h-full border-b border-l border-r border-border bg-background shadow-2xl px-4 lg:px-14">
// // //               <PanelContent imgUrl={currentRightImg} />
// // //             </div>
// // //           </div>
// // //         </motion.div>

// // //         <AnimatePresence>
// // //           {mobileOpen && (
// // //             <motion.aside
// // //               className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm md:hidden"
// // //               initial={{ opacity: 0 }}
// // //               animate={{ opacity: 1 }}
// // //               exit={{ opacity: 0 }}
// // //               onClick={() => setMobileOpen(false)}
// // //             >
// // //               <motion.div
// // //                 className="absolute inset-y-0 left-0 w-full max-w-sm border-r border-border bg-background/98 backdrop-blur-sm shadow-2xl sm:w-80"
// // //                 initial={prefersReducedMotion ? { x: 0 } : { x: "-100%", opacity: 0 }}
// // //                 animate={prefersReducedMotion ? { x: 0 } : { x: 0, opacity: 1 }}
// // //                 exit={prefersReducedMotion ? { x: 0 } : { x: "-100%", opacity: 0 }}
// // //                 transition={{ duration: 0.3, ease: [0.2, 0, 0, 1] }}
// // //                 onClick={(e) => e.stopPropagation()}
// // //                 role="dialog"
// // //                 aria-modal="true"
// // //                 aria-label="Mobile menu"
// // //               >
// // //                 {/* Improved mobile drawer header with better spacing */}
// // //                 <div className="border-b border-border/50 bg-gradient-to-r from-background to-accent/10 px-6 py-4">
// // //                   <motion.div
// // //                     className="flex items-center justify-between"
// // //                     initial={prefersReducedMotion ? undefined : { opacity: 0, y: -10 }}
// // //                     animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
// // //                     transition={{ delay: 0.1 }}
// // //                   >
// // //                     <span className="text-sm font-semibold text-foreground tracking-wide">MENU</span>
// // //                     <motion.button
// // //                       className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-background to-accent/20 border border-border/60 hover:bg-accent/60 transition-all duration-200 shadow-sm"
// // //                       onClick={() => setMobileOpen(false)}
// // //                       aria-label="Close menu"
// // //                       whileHover={prefersReducedMotion ? undefined : { scale: 1.05, rotate: 90 }}
// // //                       whileTap={prefersReducedMotion ? undefined : { scale: 0.95 }}
// // //                     >
// // //                       <X className="size-5" aria-hidden="true" />
// // //                     </motion.button>
// // //                   </motion.div>
// // //                 </div>

// // //                 {/* Improved mobile navigation with better spacing and alignment */}
// // //                 <div className="flex-1 overflow-y-auto px-6 py-6 overflow-hidden">
// // //                   <motion.nav className="space-y-3" variants={staggerContainer} initial="closed" animate="open">
// // //                     {MENU.map((item, index) => (
// // //                       <motion.details key={item.key} className="group" variants={staggerItem}>
// // //                         <summary className="flex w-full cursor-pointer list-none items-center justify-between rounded-xl px-4 py-4 hover:bg-accent/60 transition-all duration-200 border border-transparent hover:border-border/30">
// // //                           <span className="uppercase font-semibold text-sm tracking-wider">{item.label}</span>
// // //                           <motion.span whileHover={prefersReducedMotion ? undefined : { scale: 1.1 }}>
// // //                             <ChevronDown
// // //                               className="size-4 text-foreground/60 transition-transform duration-300 group-open:rotate-180"
// // //                               aria-hidden="true"
// // //                             />
// // //                           </motion.span>
// // //                         </summary>
// // //                         <motion.div
// // //                           className="pl-4 pt-3 pb-2"
// // //                           initial={prefersReducedMotion ? undefined : { opacity: 0, height: 0 }}
// // //                           animate={prefersReducedMotion ? undefined : { opacity: 1, height: "auto" }}
// // //                           transition={{ duration: 0.2 }}
// // //                         >
// // //                           {item.key === "diamond" ? (
// // //                             <ul className="grid grid-cols-1 gap-2 text-sm leading-relaxed">
// // //                               {DIAMOND_SHAPES.map((s) => {
// // //                                 const ShapeIcon = DiamondShapeSVGs[s]
// // //                                 return (
// // //                                   <li key={s}>
// // //                                     <motion.a
// // //                                       className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 hover:bg-accent/60 transition-colors font-medium"
// // //                                       whileHover={prefersReducedMotion ? undefined : { x: 2 }}
// // //                                     >
// // //                                       <ShapeIcon />
// // //                                       <span>{s}</span>
// // //                                     </motion.a>
// // //                                   </li>
// // //                                 )
// // //                               })}
// // //                             </ul>
// // //                           ) : item.key === "jewelry" ? (
// // //                             <ul className="space-y-1 text-sm leading-relaxed">
// // //                               {["Necklaces", "Bracelets", "Earrings", "Rings"].map((subItem) => (
// // //                                 <li key={subItem}>
// // //                                   <motion.a
// // //                                     className="block w-full rounded-lg px-3 py-2.5 hover:bg-accent/60 transition-colors font-medium"
// // //                                     whileHover={prefersReducedMotion ? undefined : { x: 2 }}
// // //                                   >
// // //                                     {subItem}
// // //                                   </motion.a>
// // //                                 </li>
// // //                               ))}
// // //                             </ul>
// // //                           ) : (
// // //                             <ul className="space-y-1 text-sm leading-relaxed">
// // //                               {["Featured", "New Arrivals", "Bestsellers"].map((subItem) => (
// // //                                 <li key={subItem}>
// // //                                   <motion.a
// // //                                     className="block w-full rounded-lg px-3 py-2.5 hover:bg-accent/60 transition-colors font-medium"
// // //                                     whileHover={prefersReducedMotion ? undefined : { x: 2 }}
// // //                                   >
// // //                                     {subItem}
// // //                                   </motion.a>
// // //                                 </li>
// // //                               ))}
// // //                             </ul>
// // //                           )}
// // //                         </motion.div>
// // //                       </motion.details>
// // //                     ))}
// // //                   </motion.nav>

// // //                   <motion.div
// // //                     className="mt-8 overflow-hidden rounded-xl border border-border shadow-lg"
// // //                     initial={prefersReducedMotion ? undefined : { opacity: 0, scale: 0.95 }}
// // //                     animate={prefersReducedMotion ? undefined : { opacity: 1, scale: 1 }}
// // //                     transition={{ delay: 0.3 }}
// // //                   >
// // //                     <motion.img
// // //                       src={logo}
// // //                       alt="Featured"
// // //                       className="h-40 w-full object-cover"
// // //                       whileHover={prefersReducedMotion ? undefined : { scale: 1.05 }}
// // //                     />
// // //                   </motion.div>
// // //                 </div>
// // //               </motion.div>
// // //             </motion.aside>
// // //           )}
// // //         </AnimatePresence>
// // //       </header>
// // //     </div>
// // //   )
// // // }

// // // export default Navbar


// // "use client"

// // import { useRef, useState } from "react"
// // import { motion, AnimatePresence, useReducedMotion } from "framer-motion"
// // import { cn } from "@/lib/utils"
// // import { ChevronDown, Globe, Heart, Search, ShoppingBag, User, X, Menu } from "lucide-react"
// // import { Button } from "@/components/ui/button"
// // import {
// //   DropdownMenu,
// //   DropdownMenuContent,
// //   DropdownMenuItem,
// //   DropdownMenuLabel,
// //   DropdownMenuSeparator,
// //   DropdownMenuTrigger,
// // } from "@/components/ui/dropdown-menu"
// // import logo from './logo.webp'

// // import roundimg from './images/ht-round.webp'
// // import pearimg from './images/ht-pear.webp'
// // import ovalimg from './images/ht-oval.webp'
// // import asscherimg from './images/ht-asscher.webp'
// // import marquiseimg from './images/ht-marquise.webp'
// // import princessimg from './images/ht-princess.png'
// // import cushionimg from './images/ht-cushion.webp'
// // import emeraldimg from './images/ht-emerald.webp'
// // import heartimg from './images/ht-heart.webp'
// // import radientimg from './images/ht-radient.webp'





// // // Declare missing variables
// // const staggerContainer = {
// //   open: {
// //     transition: { staggerChildren: 0.075, delayChildren: 0.1 },
// //   },
// //   closed: {
// //     transition: { staggerChildren: 0.05, staggerDirection: -1 },
// //   },
// // }

// // const staggerItem = {
// //   open: {
// //     y: 0,
// //     opacity: 1,
// //     transition: {
// //       y: { stiffness: 1000, velocity: -100 },
// //     },
// //   },
// //   closed: {
// //     y: 50,
// //     opacity: 0,
// //     transition: {
// //       y: { stiffness: 1000 },
// //     },
// //   },
// // }

// // const promoVariants = {
// //   initial: { opacity: 0 },
// //   animate: { opacity: 1 },
// // }

// // const initialLogo = { opacity: 0 }
// // const animateLogo = { opacity: 1 }

// // const shimmerVariants = {
// //   rest: { x: "-100%" },
// //   sweep: { x: "100%" },
// // }

// // const panelVariants = {
// //   open: {
// //     y: 0,
// //     opacity: 1,
// //     transition: {
// //       y: { stiffness: 1000, velocity: -100 },
// //     },
// //   },
// //   closed: {
// //     y: "100%",
// //     opacity: 0,
// //     transition: {
// //       y: { stiffness: 1000 },
// //     },
// //   },
// // }

// // function IconButton({ children, label, onClick, className }) {
// //   const prefersReducedMotion = useReducedMotion()

// //   return (
// //     <motion.button
// //       type="button"
// //       onClick={onClick}
// //       aria-label={label}
// //       className={cn(
// //         "inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-background to-accent/20 border border-border/60 hover:border-border hover:bg-accent/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 transition-all duration-200 shadow-sm",
// //         className,
// //       )}
// //       whileHover={prefersReducedMotion ? undefined : { scale: 1.05, y: -1 }}
// //       whileTap={prefersReducedMotion ? undefined : { scale: 0.95 }}
// //     >
// //       {children}
// //     </motion.button>
// //   )
// // }

// // const Navbar = ({ className }) => {
// //   const prefersReducedMotion = useReducedMotion()
// //   const [panelOpen, setPanelOpen] = useState(false)
// //   const [activeMenu, setActiveMenu] = useState("all")
// //   const [mobileOpen, setMobileOpen] = useState(false)

// //   const headerRef = useRef(null)

// //   const DiamondShapeSVGs = {
// //     Round: () => (
// //       <img src={roundimg} alt="" className="h-6 w-6 object-cover"/>
// //     ),
// //     Princess: () => (
// //       <img src={princessimg} alt="" className="h-6 w-6 object-cover"/>
// //     ),
// //     Cushion: () => (
// //       <img src={cushionimg} alt="" className="h-6 w-6 object-cover"/>
// //     ),
// //     Emerald: () => (
// //       <img src={emeraldimg} alt="" className="h-6 w-6 object-cover"/>
// //     ),
// //     Oval: () => (
// //       <img src={ovalimg} alt="" className="h-6 w-6 object-cover"/>
// //     ),
// //     Pear: () => (
// //      <img src={pearimg} alt="" className="h-6 w-6 object-cover"/>
// //     ),
// //     Marquise: () => (
// //       <img src={marquiseimg} alt="" className="h-6 w-6 object-cover"/>
// //     ),
// //     Radiant: () => (
// //       <img src={radientimg} alt="" className="h-6 w-6 object-cover"/>
// //     ),
// //     Asscher: () => (
// //       <img src={asscherimg} alt="" className="h-6 w-6 object-cover"/>
// //     ),
// //     Heart: () => (
// //       <img src={heartimg} alt="" className="h-6 w-6 object-cover"/>
// //     ),
// //   }

// //   const DIAMOND_SHAPES = [
// //     "Round",
// //     "Princess",
// //     "Cushion",
// //     "Emerald",
// //     "Oval",
// //     "Pear",
// //     "Marquise",
// //     "Radiant",
// //     "Asscher",
// //     "Heart",
// //   ]

// //   function openPanel(key) {
// //     setActiveMenu(key)
// //     setPanelOpen(true)
// //   }

// //   function closePanel() {
// //     setPanelOpen(false)
// //   }

// //   // Desktop top-level menu items
// //   const MENU = [
// //     { key: "all", label: "All", rightimgurl: "https://images.pexels.com/photos/33154633/pexels-photo-33154633.jpeg" },
// //     {
// //       key: "jewelry",
// //       label: "Jewelry",
// //       rightimgurl: "https://images.pexels.com/photos/32039109/pexels-photo-32039109.jpeg",
// //     },
// //     {
// //       key: "diamond",
// //       label: "Diamond",
// //       rightimgurl: "https://images.pexels.com/photos/30328042/pexels-photo-30328042.jpeg",
// //     },
// //     {
// //       key: "collections",
// //       label: "Collections",
// //       rightimgurl: "https://images.pexels.com/photos/9256822/pexels-photo-9256822.jpeg",
// //     },
// //     {
// //       key: "gifts",
// //       label: "Gifts",
// //       rightimgurl: "https://images.pexels.com/photos/11139357/pexels-photo-11139357.jpeg",
// //     },
// //     {
// //       key: "store",
// //       label: "Store Locator",
// //       rightimgurl: "https://images.pexels.com/photos/32841967/pexels-photo-32841967.jpeg",
// //     },
// //     {
// //       key: "about",
// //       label: "About Us",
// //       rightimgurl: "https://images.pexels.com/photos/1927266/pexels-photo-1927266.jpeg",
// //     },
// //   ]
// //   const currentRightImg = MENU.find((m) => m.key === activeMenu)?.rightimgurl

// //   function PanelContent({ imgUrl }) {
// //     if (activeMenu === "diamond") {
// //       return (
// //         <motion.div
// //           className="grid gap-8 p-8 md:grid-cols-3"
// //           variants={staggerContainer}
// //           initial="closed"
// //           animate="open"
// //         >
// //           <motion.div className="md:col-span-2" variants={staggerItem}>
// //             <div>
// //               <motion.h3 className="text-sm font-medium tracking-wide text-foreground/80" variants={staggerItem}>
// //                 Diamond Shapes
// //               </motion.h3>
// //               <motion.ul
// //                 className="mt-4 grid grid-cols-2 gap-3 text-sm leading-relaxed md:grid-cols-3"
// //                 variants={staggerContainer}
// //               >
// //                 {DIAMOND_SHAPES.map((shape, index) => {
// //                   const ShapeIcon = DiamondShapeSVGs[shape]
// //                   return (
// //                     <motion.li key={shape} variants={staggerItem}>
// //                       <motion.a
// //                         className="inline-flex w-full items-center gap-3 rounded-md px-3 py-2 hover:bg-accent/60 transition-colors"
// //                         whileHover={prefersReducedMotion ? undefined : { x: 4, scale: 1.02 }}
// //                         whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
// //                       >
// //                         <ShapeIcon />
// //                         <span>{shape}</span>
// //                       </motion.a>
// //                     </motion.li>
// //                   )
// //                 })}
// //               </motion.ul>
// //             </div>
// //           </motion.div>
// //           <motion.div variants={staggerItem}>
// //             <RightImage imgUrl={imgUrl} />
// //           </motion.div>
// //         </motion.div>
// //       )
// //     }

// //     if (activeMenu === "jewelry") {
// //       return (
// //         <motion.div
// //           className="grid gap-8 p-8 md:grid-cols-3"
// //           variants={staggerContainer}
// //           initial="closed"
// //           animate="open"
// //         >
// //           <motion.div className="md:col-span-2 grid gap-8 sm:grid-cols-2" variants={staggerItem}>
// //             <motion.div variants={staggerItem}>
// //               <h3 className="text-sm font-medium tracking-wide text-foreground/80">Categories</h3>
// //               <motion.ul className="mt-4 space-y-2 text-sm leading-relaxed" variants={staggerContainer}>
// //                 {["Necklaces", "Bracelets", "Earrings", "Rings"].map((item) => (
// //                   <motion.li key={item} variants={staggerItem}>
// //                     <motion.a
// //                       className="inline-flex items-center rounded-md px-3 py-2 hover:bg-accent/60 transition-colors"
// //                       whileHover={prefersReducedMotion ? undefined : { x: 4, scale: 1.02 }}
// //                     >
// //                       <span>
// //                         <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
// //                           <path d="M15.0684 3.20105L14.2057 2.06573C14.1944 2.05013 14.18 2.03745 14.1644 2.0277C14.14 2.00995 14.1099 2 14.0789 2H10.8142C10.7834 2 10.7535 2.00975 10.7288 2.0277C10.7131 2.03745 10.6985 2.05071 10.6874 2.06573L9.82552 3.20105C9.78476 3.2541 9.78554 3.32783 9.82689 3.38049L12.332 6.5762C12.3597 6.6117 12.4024 6.63218 12.447 6.63218C12.4917 6.63218 12.5342 6.61189 12.5621 6.5762L15.0672 3.38049C15.1087 3.32705 15.1087 3.25352 15.0686 3.20105H15.0684Z" stroke="black" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round"/>
// //                           <path d="M9.79541 3.28787H15.0671" stroke="black" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round"/>
// //                           <path d="M11.5234 3.28787L12.4364 6.63221" stroke="black" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round"/>
// //                           <path d="M13.3708 3.2879L12.458 6.63224" stroke="black" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round"/>
// //                           <path d="M10.729 2.02771L11.5236 3.28786" stroke="black" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round"/>
// //                           <path d="M12.5493 2L11.5234 3.28784" stroke="black" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round"/>
// //                           <path d="M13.3709 3.28784L12.5498 2" stroke="black" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round"/>
// //                           <path d="M14.1651 2.02771L13.3711 3.28786" stroke="black" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round"/>
// //                           <circle cx="12.5" cy="15.1364" r="8.3" stroke="black" stroke-width="0.4"/>
// //                           <circle cx="12.5" cy="15.1364" r="6.75455" stroke="black" stroke-width="0.4"/>
// //                           </svg>

// //                       </span>
// //                       {item}
// //                     </motion.a>
// //                   </motion.li>
// //                 ))}
// //               </motion.ul>
// //             </motion.div>
// //             <motion.div variants={staggerItem}>
// //               <h3 className="text-sm font-medium tracking-wide text-foreground/80">Metals</h3>
// //               <motion.ul className="mt-4 space-y-2 text-sm leading-relaxed" variants={staggerContainer}>
// //                 {["18K Yellow Gold", "18K White Gold", "Platinum", "Rose Gold"].map((item) => (
// //                   <motion.li key={item} variants={staggerItem}>
// //                     <motion.a
// //                       className="inline-flex items-center rounded-md px-3 py-2 hover:bg-accent/60 transition-colors"
// //                       whileHover={prefersReducedMotion ? undefined : { x: 4, scale: 1.02 }}
// //                     >
// //                       {item}
// //                     </motion.a>
// //                   </motion.li>
// //                 ))}
// //               </motion.ul>
// //             </motion.div>
// //           </motion.div>
// //           <motion.div variants={staggerItem}>
// //             <RightImage imgUrl={imgUrl} />
// //           </motion.div>
// //         </motion.div>
// //       )
// //     }

// //     // default / "all" / others
// //     return (
// //       <motion.div className="grid gap-8 p-8 md:grid-cols-3" variants={staggerContainer} initial="closed" animate="open">
// //         <motion.div className="md:col-span-2 grid gap-8 sm:grid-cols-2" variants={staggerItem}>
// //           <motion.div variants={staggerItem}>
// //             <h3 className="text-sm font-medium tracking-wide text-foreground/80">Highlights</h3>
// //             <motion.ul className="mt-4 space-y-2 text-sm leading-relaxed" variants={staggerContainer}>
// //               <motion.li variants={staggerItem}>
// //                 <motion.a
// //                   className="inline-flex items-center justify-between rounded-md px-3 py-2 hover:bg-accent/60 transition-colors"
// //                   whileHover={prefersReducedMotion ? undefined : { x: 4, scale: 1.02 }}
// //                 >
// //                   <span>Gold Ornaments</span>
// //                   <span className="text-[11px] text-[#C9A646]">New</span>
// //                 </motion.a>
// //               </motion.li>
// //               {["Bridal & Heritage", "Daily Wear Elegance", "Limited Editions"].map((item) => (
// //                 <motion.li key={item} variants={staggerItem}>
// //                   <motion.a
// //                     className="inline-flex items-center rounded-md px-3 py-2 hover:bg-accent/60 transition-colors"
// //                     whileHover={prefersReducedMotion ? undefined : { x: 4, scale: 1.02 }}
// //                   >
// //                     {item}
// //                   </motion.a>
// //                 </motion.li>
// //               ))}
// //             </motion.ul>
// //           </motion.div>
// //           <motion.div variants={staggerItem}>
// //             <h3 className="text-sm font-medium tracking-wide text-foreground/80">Services</h3>
// //             <motion.ul className="mt-4 space-y-2 text-sm leading-relaxed" variants={staggerContainer}>
// //               {[
// //                 "Custom Design Consults",
// //                 "Authentication & Appraisals",
// //                 "Care & Restoration",
// //                 "Concierge Sourcing",
// //               ].map((item) => (
// //                 <motion.li key={item} variants={staggerItem}>
// //                   <motion.a
// //                     className="inline-flex items-center rounded-md px-3 py-2 hover:bg-accent/60 transition-colors"
// //                     whileHover={prefersReducedMotion ? undefined : { x: 4, scale: 1.02 }}
// //                   >
// //                     {item}
// //                   </motion.a>
// //                 </motion.li>
// //               ))}
// //             </motion.ul>
// //           </motion.div>
// //         </motion.div>
// //         <motion.div variants={staggerItem}>
// //           <RightImage imgUrl={imgUrl} />
// //         </motion.div>
// //       </motion.div>
// //     )
// //   }

// //   function RightImage({ imgUrl }) {
// //     const prefersReducedMotion = useReducedMotion()
// //     return (
// //       <motion.div
// //         className="relative h-60 md:h-80 overflow-hidden bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-zinc-800"
// //         whileHover={prefersReducedMotion ? undefined : { scale: 1.02 }}
// //         transition={{ duration: 0.3, ease: [0.2, 0, 0.2, 1] }}
// //       >
// //         <motion.img
// //           src={imgUrl || "/placeholder.svg?height=320&width=480&query=menu%20panel%20right%20image"}
// //           alt="Feature visual"
// //           className="h-full w-full object-cover shadow-2xl  "
// //           initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, scale: 1.05, y: 10 }}
// //           animate={
// //             prefersReducedMotion
// //               ? { opacity: 1 }
// //               : {
// //                   opacity: 1,
// //                   scale: [1, 1.02, 1],
// //                   y: 0,
// //                   transition: {
// //                     opacity: { duration: 0.4 },
// //                     scale: { duration: 8, ease: "easeInOut", repeat: Number.POSITIVE_INFINITY },
// //                     y: { duration: 0.4 },
// //                   },
// //                 }
// //           }
// //           whileHover={prefersReducedMotion ? undefined : { scale: 1.08, rotate: 0.5 }}
// //         />
// //         {/* Enhanced top gold line with gradient */}
// //         <motion.span
// //           className="pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#C9A646] via-[#F4E4A6] to-[#C9A646]"
// //           aria-hidden="true"
// //           initial={prefersReducedMotion ? undefined : { scaleX: 0 }}
// //           animate={prefersReducedMotion ? undefined : { scaleX: 1, transition: { duration: 0.6, delay: 0.2 } }}
// //         />
// //         {/* Glint sweep */}
// //         {!prefersReducedMotion && (
// //           <>
// //             <motion.span
// //               aria-hidden="true"
// //               className="pointer-events-none absolute inset-0 -skew-x-12"
// //               initial={{ x: "-130%", opacity: 0 }}
// //               animate={{ x: "130%", opacity: 1 }}
// //               transition={{ duration: 1.2, ease: [0.2, 0, 0, 1], repeat: Number.POSITIVE_INFINITY, repeatDelay: 5 }}
// //               style={{
// //                 background:
// //                   "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0) 100%)",
// //                 mixBlendMode: "screen",
// //               }}
// //             />
// //             <motion.span
// //               aria-hidden="true"
// //               className="pointer-events-none absolute inset-0 -skew-x-12"
// //               initial={{ x: "-130%", opacity: 0 }}
// //               animate={{ x: "130%", opacity: 1 }}
// //               transition={{
// //                 duration: 0.8,
// //                 ease: [0.2, 0, 0, 1],
// //                 repeat: Number.POSITIVE_INFINITY,
// //                 repeatDelay: 5,
// //                 delay: 0.3,
// //               }}
// //               style={{
// //                 background:
// //                   "linear-gradient(90deg, rgba(201,166,70,0) 0%, rgba(201,166,70,0.3) 50%, rgba(201,166,70,0) 100%)",
// //                 mixBlendMode: "overlay",
// //               }}
// //             />
// //           </>
// //         )}
// //       </motion.div>
// //     )
// //   }

// //   function CurrencySelector() {
// //     const [currency, setCurrency] = useState("EUR")
// //     const symbols = {
// //       EUR: "€",
// //       USD: "$",
// //       GBP: "£",
// //       AED: "د.إ",
// //       INR: "₹",
// //     }
// //     return (
// //       <DropdownMenu>
// //         <DropdownMenuTrigger asChild>
// //           <Button
// //             variant="ghost"
// //             className="h-9 gap-2 rounded-md border border-border px-3 text-sm font-normal hover:bg-accent/60"
// //             aria-label="Select currency"
// //           >
// //             <Globe className="size-4" aria-hidden="true" />
// //             <span className="tracking-wide">
// //               {currency} {symbols[currency]}
// //             </span>
// //             <ChevronDown className="size-4 opacity-70" aria-hidden="true" />
// //           </Button>
// //         </DropdownMenuTrigger>
// //         <DropdownMenuContent align="start" className="w-44">
// //           <DropdownMenuLabel>Currency</DropdownMenuLabel>
// //           <DropdownMenuSeparator />
// //           {["EUR", "USD", "GBP", "AED", "INR"].map((c) => (
// //             <DropdownMenuItem key={c} onClick={() => setCurrency(c)}>
// //               <span className="mr-2 w-10 text-foreground/70">{c}</span>
// //               <span className="ml-auto text-foreground/70">
// //                 {c === "EUR" ? "€" : c === "USD" ? "$" : c === "GBP" ? "£" : c === "AED" ? "د.إ" : "₹"}
// //               </span>
// //             </DropdownMenuItem>
// //           ))}
// //         </DropdownMenuContent>
// //       </DropdownMenu>
// //     )
// //   }

// //   return (
// //     <div ref={headerRef} className={cn("relative", className)}>
// //       {/* Promo strip */}
// //       <motion.div
// //         className="w-full bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 text-white"
// //         initial={promoVariants.initial}
// //         animate={promoVariants.animate}
// //         role="region"
// //         aria-label="Promotional message"
// //       >
// //         <div className="mx-auto flex max-w-6xl items-center justify-center px-4 py-2">
// //           <motion.span
// //             className="text-xs tracking-wide"
// //             initial={prefersReducedMotion ? undefined : { letterSpacing: "0.05em" }}
// //             animate={prefersReducedMotion ? undefined : { letterSpacing: "0.12em", transition: { duration: 0.6 } }}
// //           >
// //             FREE SHIPPING ABOVE 95€
// //           </motion.span>
// //         </div>
// //       </motion.div>

// //       <header
// //         className="sticky top-0 z-50 max-w-full border-b border-border bg-background/95  supports-[backdrop-filter]:bg-background/80"
// //         onMouseLeave={closePanel}
// //       >
// //         {/* Logo row */}
// //         <div className="mx-auto grid max-w-full grid-cols-3 items-center px-4 lg:px-20 py-3">
// //           {/* Left: mobile hamburger + desktop currency */}
// //           <div className="flex items-center h-11">
// //             <div className="md:hidden">
// //               <motion.button
// //                 type="button"
// //                 aria-label="Toggle menu"
// //                 aria-expanded={mobileOpen}
// //                 onClick={() => setMobileOpen((s) => !s)}
// //                 className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-background to-accent/20 border border-border/60 hover:border-border hover:bg-accent/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 transition-all duration-200 shadow-sm"
// //                 whileHover={prefersReducedMotion ? undefined : { scale: 1.05, rotate: 2 }}
// //                 whileTap={prefersReducedMotion ? undefined : { scale: 0.95 }}
// //               >
// //                 <AnimatePresence initial={false} mode="wait">
// //                   {!mobileOpen ? (
// //                     <motion.div
// //                       key="menu"
// //                       initial={{ rotate: -90, opacity: 0 }}
// //                       animate={{ rotate: 0, opacity: 1 }}
// //                       exit={{ rotate: 90, opacity: 0 }}
// //                       transition={{ duration: 0.18 }}
// //                     >
// //                       <Menu className="size-5" aria-hidden="true" />
// //                     </motion.div>
// //                   ) : (
// //                     <motion.div
// //                       key="close"
// //                       initial={{ rotate: -90, opacity: 0 }}
// //                       animate={{ rotate: 0, opacity: 1 }}
// //                       exit={{ rotate: 90, opacity: 0 }}
// //                       transition={{ duration: 0.18 }}
// //                     >
// //                       <X className="size-5" aria-hidden="true" />
// //                     </motion.div>
// //                   )}
// //                 </AnimatePresence>
// //               </motion.button>
// //             </div>
// //             <div className="hidden md:block">
// //               <CurrencySelector />
// //             </div>
// //           </div>

// //           {/* Centered logo */}
// //           <div className="flex items-center justify-center">
// //             <motion.div
// //               className="relative inline-block overflow-hidden will-change-transform"
// //               style={{ perspective: 800 }}
// //               initial={prefersReducedMotion ? undefined : { clipPath: "inset(0 100% 0 0)" }}
// //               animate={
// //                 prefersReducedMotion
// //                   ? undefined
// //                   : {
// //                       clipPath: "inset(0 0% 0 0)",
// //                       transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.05 },
// //                     }
// //               }
// //               whileHover={
// //                 prefersReducedMotion
// //                   ? undefined
// //                   : { rotateX: -1.5, rotateY: 2, scale: 1.01, transition: { duration: 0.5, ease: [0.2, 0, 0.2, 1] } }
// //               }
// //             >
// //               <motion.img
// //                 src={logo}
// //                 alt="Festo Trade logo"
// //                 width={250}
// //                 height={80}
// //                 loading="eager"
// //                 fetchPriority="high"
// //                 className="h-12 w-40 md:h-[80px] md:w-[250px] select-none object-contain cursor-pointer"
// //                 initial={initialLogo}
// //                 animate={animateLogo}
// //                 whileHover={
// //                   prefersReducedMotion
// //                     ? undefined
// //                     : { y: -2, scale: 1.015, transition: { duration: 0.3, ease: [0.2, 0, 0.2, 1] } }
// //                 }
// //                 whileTap={prefersReducedMotion ? undefined : { scale: 0.99 }}
// //               />
// //               {!prefersReducedMotion && (
// //                 <motion.span
// //                   aria-hidden="true"
// //                   className="pointer-events-none absolute inset-0 -skew-x-12"
// //                   variants={shimmerVariants}
// //                   initial="rest"
// //                   animate="sweep"
// //                   whileHover="sweep"
// //                   style={{
// //                     background:
// //                       "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.65) 50%, rgba(255,255,255,0) 100%)",
// //                     mixBlendMode: "screen",
// //                   }}
// //                 />
// //               )}
// //             </motion.div>
// //           </div>

// //           {/* Right: lucide icons */}
// //           <div className="flex items-center justify-end gap-3 h-11">
// //             <div className="flex items-center gap-2 md:hidden">
// //               <IconButton label="Search">
// //                 <Search className="size-5" aria-hidden="true" />
// //               </IconButton>
// //               <IconButton label="Cart">
// //                 <ShoppingBag className="size-5" aria-hidden="true" />
// //               </IconButton>
// //             </div>
// //             <div className="hidden md:flex md:items-center md:gap-3">
// //               <IconButton label="Account">
// //                 <User className="size-5" aria-hidden="true" />
// //               </IconButton>
// //               <IconButton label="Search">
// //                 <Search className="size-5" aria-hidden="true" />
// //               </IconButton>
// //               <IconButton label="Wishlist">
// //                 <Heart className="size-5" aria-hidden="true" />
// //               </IconButton>
// //               <IconButton label="Bag">
// //                 <ShoppingBag className="size-5" aria-hidden="true" />
// //               </IconButton>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Nav row (desktop) */}
// //         <motion.nav
// //           className="mx-auto hidden !max-w-full items-center justify-center gap-6 px-4 lg:px-20 pb-3 pt-1 text-sm tracking-wide md:flex"
// //           variants={staggerContainer}
// //           initial="closed"
// //           animate="open"
// //         >
// //           {MENU.map((item) => (
// //             <motion.button
// //               key={item.key}
// //               type="button"
// //               onMouseEnter={() => openPanel(item.key)}
// //               onFocus={() => openPanel(item.key)}
// //               className={cn("relative px-2 py-1 uppercase text-foreground/90 hover:text-foreground cursor-pointer")}
// //               aria-expanded={panelOpen && activeMenu === item.key}
// //               aria-controls="mega-panel"
// //               variants={staggerItem}
// //               whileHover={prefersReducedMotion ? undefined : { y: -1, scale: 1.05 }}
// //               whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
// //               transition={{ type: "spring", stiffness: 500, damping: 30, mass: 0.4 }}
// //             >
// //               {item.label}
// //               <AnimatePresence mode="wait">
// //                 {panelOpen && activeMenu === item.key && (
// //                   <motion.span
// //                     layoutId="nav-underline"
// //                     className="absolute inset-x-2 -bottom-1 h-[2px] rounded bg-[#C9A646]"
// //                     initial={prefersReducedMotion ? undefined : { scaleX: 0 }}
// //                     animate={prefersReducedMotion ? undefined : { scaleX: 1 }}
// //                     exit={prefersReducedMotion ? undefined : { scaleX: 0 }}
// //                     transition={{ duration: 0.25, ease: [0.2, 0, 0, 1] }}
// //                   />
// //                 )}
// //               </AnimatePresence>
// //             </motion.button>
// //           ))}
// //         </motion.nav>

// //         {/* Mega panel under sticky header */}
// //         <motion.div
// //           id="mega-panel"
// //           role="region"
// //           aria-label="Navigation panel"
// //           className="absolute inset-x-0 top-full z-50 hidden max-h-[80vh] overflow-auto bg-background/98 backdrop-blur-sm md:block"
// //           variants={panelVariants}
// //           initial="closed"
// //           animate={panelOpen ? "open" : "closed"}
// //           style={{ transformOrigin: "top center" }}
// //           onMouseEnter={() => setPanelOpen(true)}
// //           onMouseLeave={closePanel}
// //         >
// //           <div className="mx-auto h-full max-w-full  ">
// //             <div className="h-full border-b border-l border-r border-border bg-background shadow-2xl px-4 lg:px-14">
// //               <PanelContent imgUrl={currentRightImg} />
// //             </div>
// //           </div>
// //         </motion.div>

// //         <AnimatePresence>
// //           {mobileOpen && (
// //             <motion.aside
// //               className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm md:hidden"
// //               initial={{ opacity: 0 }}
// //               animate={{ opacity: 1 }}
// //               exit={{ opacity: 0 }}
// //               onClick={() => setMobileOpen(false)}
// //             >
// //               <motion.div
// //                 className="absolute inset-y-0 left-0 w-full max-w-sm border-r border-border bg-background/98 backdrop-blur-sm shadow-2xl sm:w-80"
// //                 initial={prefersReducedMotion ? { x: 0 } : { x: "-100%", opacity: 0 }}
// //                 animate={prefersReducedMotion ? { x: 0 } : { x: 0, opacity: 1 }}
// //                 exit={prefersReducedMotion ? { x: 0 } : { x: "-100%", opacity: 0 }}
// //                 transition={{ duration: 0.3, ease: [0.2, 0, 0, 1] }}
// //                 onClick={(e) => e.stopPropagation()}
// //                 role="dialog"
// //                 aria-modal="true"
// //                 aria-label="Mobile menu"
// //               >
// //                 {/* Improved mobile drawer header with better spacing */}
// //                 <div className="border-b border-border/50 bg-gradient-to-r from-background to-accent/10 px-6 py-4">
// //                   <motion.div
// //                     className="flex items-center justify-between"
// //                     initial={prefersReducedMotion ? undefined : { opacity: 0, y: -10 }}
// //                     animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
// //                     transition={{ delay: 0.1 }}
// //                   >
// //                     <span className="text-sm font-semibold text-foreground tracking-wide">MENU</span>
// //                     <motion.button
// //                       className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-background to-accent/20 border border-border/60 hover:bg-accent/60 transition-all duration-200 shadow-sm"
// //                       onClick={() => setMobileOpen(false)}
// //                       aria-label="Close menu"
// //                       whileHover={prefersReducedMotion ? undefined : { scale: 1.05, rotate: 90 }}
// //                       whileTap={prefersReducedMotion ? undefined : { scale: 0.95 }}
// //                     >
// //                       <X className="size-5" aria-hidden="true" />
// //                     </motion.button>
// //                   </motion.div>
// //                 </div>

// //                 {/* Improved mobile navigation with better spacing and alignment */}
// //                 <div className="flex-1 overflow-y-auto px-6 py-6">
// //                   <motion.nav className="space-y-3" variants={staggerContainer} initial="closed" animate="open">
// //                     {MENU.map((item, index) => (
// //                       <motion.details key={item.key} className="group" variants={staggerItem}>
// //                         <summary className="flex w-full cursor-pointer list-none items-center justify-between rounded-xl px-4 py-4 bg-transparent hover:bg-accent/60 transition-all duration-200 border border-transparent hover:border-border/30">
// //                           <span className="uppercase font-semibold text-sm tracking-wider">{item.label}</span>
// //                           <motion.span whileHover={prefersReducedMotion ? undefined : { scale: 1.1 }}>
// //                             <ChevronDown
// //                               className="size-4 text-foreground/60 transition-transform duration-300 group-open:rotate-180"
// //                               aria-hidden="true"
// //                             />
// //                           </motion.span>
// //                         </summary>
// //                         <motion.div
// //                           className="pl-4 pt-3 pb-2"
// //                           initial={prefersReducedMotion ? undefined : { opacity: 0, height: 0 }}
// //                           animate={prefersReducedMotion ? undefined : { opacity: 1, height: "auto" }}
// //                           transition={{ duration: 0.2 }}
// //                         >
// //                           {item.key === "diamond" ? (
// //                             <ul className="grid grid-cols-1 gap-2 text-sm leading-relaxed">
// //                               {DIAMOND_SHAPES.map((s) => {
// //                                 const ShapeIcon = DiamondShapeSVGs[s]
// //                                 return (
// //                                   <li key={s}>
// //                                     <motion.a
// //                                       className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 hover:bg-accent/60 transition-colors font-medium"
// //                                       whileHover={prefersReducedMotion ? undefined : { x: 2 }}
// //                                     >
// //                                       <ShapeIcon />
// //                                       <span>{s}</span>
// //                                     </motion.a>
// //                                   </li>
// //                                 )
// //                               })}
// //                             </ul>
// //                           ) : item.key === "jewelry" ? (
// //                             <ul className="space-y-1 text-sm leading-relaxed">
// //                               {["Necklaces", "Bracelets", "Earrings", "Rings"].map((subItem) => (
// //                                 <li key={subItem}>
// //                                   <motion.a
// //                                     className="block w-full rounded-lg px-3 py-2.5 hover:bg-accent/60 transition-colors font-medium"
// //                                     whileHover={prefersReducedMotion ? undefined : { x: 2 }}
// //                                   >
// //                                     {subItem}
// //                                   </motion.a>
// //                                 </li>
// //                               ))}
// //                             </ul>
// //                           ) : (
// //                             <ul className="space-y-1 text-sm leading-relaxed">
// //                               {["Featured", "New Arrivals", "Bestsellers"].map((subItem) => (
// //                                 <li key={subItem}>
// //                                   <motion.a
// //                                     className="block w-full rounded-lg px-3 py-2.5 hover:bg-accent/60 transition-colors font-medium"
// //                                     whileHover={prefersReducedMotion ? undefined : { x: 2 }}
// //                                   >
// //                                     {subItem}
// //                                   </motion.a>
// //                                 </li>
// //                               ))}
// //                             </ul>
// //                           )}
// //                         </motion.div>
// //                       </motion.details>
// //                     ))}
// //                   </motion.nav>

// //                   <motion.div
// //                     className="mt-8 overflow-hidden rounded-xl border border-border shadow-lg"
// //                     initial={prefersReducedMotion ? undefined : { opacity: 0, scale: 0.95 }}
// //                     animate={prefersReducedMotion ? undefined : { opacity: 1, scale: 1 }}
// //                     transition={{ delay: 0.3 }}
// //                   >
// //                     <motion.img
// //                       src={logo}
// //                       alt="Featured"
// //                       className="h-40 w-full object-cover"
// //                       whileHover={prefersReducedMotion ? undefined : { scale: 1.05 }}
// //                     />
// //                   </motion.div>
// //                 </div>
// //               </motion.div>
// //             </motion.aside>
// //           )}
// //         </AnimatePresence>
// //       </header>
// //     </div>
// //   )
// // }

// // export default Navbar
// "use client"

// import { useRef, useState, useEffect } from "react"
// import { motion, AnimatePresence, useReducedMotion } from "framer-motion"
// import { cn } from "@/lib/utils"
// import { ChevronDown, Globe, Heart, Search, ShoppingBag, User, X, Menu } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"
// import logo from "./logo.webp"

// import roundimg from "./images/ht-round.webp"
// import pearimg from "./images/ht-pear.webp"
// import ovalimg from "./images/ht-oval.webp"
// import asscherimg from "./images/ht-asscher.webp"
// import marquiseimg from "./images/ht-marquise.webp"
// import princessimg from "./images/ht-princess.png"
// import cushionimg from "./images/ht-cushion.webp"
// import emeraldimg from "./images/ht-emerald.webp"
// import heartimg from "./images/ht-heart.webp"
// import radientimg from "./images/ht-radient.webp"


// import goldmetalimg from './images/ht-18k-yellow-gold.webp'
// import rosemetalimg from './images/ht-18k-rose-gold.webp'
// import platinummetalimg from './images/ht-platinum.webp'
// import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
// import { useNavigate } from "react-router-dom"



// // Declare missing variables
// const staggerContainer = {
//   open: {
//     transition: { staggerChildren: 0.075, delayChildren: 0.1 },
//   },
//   closed: {
//     transition: { staggerChildren: 0.05, staggerDirection: -1 },
//   },
// }

// const staggerItem = {
//   open: {
//     y: 0,
//     opacity: 1,
//     transition: {
//       y: { stiffness: 1000, velocity: -100 },
//     },
//   },
//   closed: {
//     y: 50,
//     opacity: 0,
//     transition: {
//       y: { stiffness: 1000 },
//     },
//   },
// }

// const promoVariants = {
//   initial: { opacity: 0 },
//   animate: { opacity: 1 },
// }

// const initialLogo = { opacity: 0 }
// const animateLogo = { opacity: 1 }

// const shimmerVariants = {
//   rest: { x: "-100%" },
//   sweep: { x: "100%" },
// }

// // <CHANGE> make panel open from top via clipPath instead of sliding from bottom
// const panelVariants = {
//   open: {
//     opacity: 1,
//     clipPath: "inset(0% 0% 0% 0%)",
//     transition: { duration: 0.22, ease: [0.2, 0, 0, 1] },
//   },
//   closed: {
//     opacity: 0,
//     clipPath: "inset(0% 0% 100% 0%)",
//     transition: { duration: 0.16, ease: [0.4, 0, 1, 1] },
//   },
// }

// function IconButton({ children, label, onClick, className }) {
//   const prefersReducedMotion = useReducedMotion()

//   return (
//     <motion.button
//       type="button"
//       onClick={onClick}
//       aria-label={label}
//       className={cn(
//         "cursor-pointer inline-flex h-10 w-10 items-center justify-center  bg-gradient-to-br from-background to-accent/20 hover:rounded-md  hover:border hover:border-gray-200 hover:shadow-xs hover:bg-accent/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring/90 transition-all duration-200 ",
//         className,
//       )}
//       whileHover={prefersReducedMotion ? undefined : { scale: 1.0, y: 1 }}
//       whileTap={prefersReducedMotion ? undefined : { scale: 0.95 }}
//     >
//       {children}
//     </motion.button>
//   )
// }

// const Navbar = ({ className }) => {
//   const prefersReducedMotion = useReducedMotion()
//   const [panelOpen, setPanelOpen] = useState(false)
//   const [activeMenu, setActiveMenu] = useState("all")
//   const [mobileOpen, setMobileOpen] = useState(false)

//   const headerRef = useRef(null)

//   // close-intent timer to prevent flicker when moving between button and panel
//   const closeTimer = useRef(null)
//   const cancelClose = () => {
//     if (closeTimer.current) {
//       window.clearTimeout(closeTimer.current)
//       closeTimer.current = null
//     }
//   }
//   const scheduleClose = (delay = 100) => {
//     cancelClose()
//     closeTimer.current = window.setTimeout(() => setPanelOpen(false), delay)
//   }

//   function openPanel(key) {
//     cancelClose()
//     setActiveMenu(key)
//     setPanelOpen(true)
//   }

//   function closePanel() {
//     cancelClose()
//     setPanelOpen(false)
//   }

//   // Close the mega menu on scroll and Escape to avoid odd animations while moving the page
//   useEffect(() => {
//     const onScroll = () => {
//       if (panelOpen) setPanelOpen(false)
//     }
//     const onKeyDown = (e) => {
//       if (e.key === "Escape") setPanelOpen(false)
//     }
//     window.addEventListener("scroll", onScroll, { passive: true })
//     window.addEventListener("keydown", onKeyDown)
//     return () => {
//       window.removeEventListener("scroll", onScroll)
//       window.removeEventListener("keydown", onKeyDown)
//     }
//   }, [panelOpen])

//   const DiamondShapeSVGs = {
//     Round: () => <img src={roundimg || "/placeholder.svg"} alt="" className="h-6 w-6 object-cover" />,
//     Princess: () => <img src={princessimg || "/placeholder.svg"} alt="" className="h-6 w-6 object-cover" />,
//     Cushion: () => <img src={cushionimg || "/placeholder.svg"} alt="" className="h-6 w-6 object-cover" />,
//     Emerald: () => <img src={emeraldimg || "/placeholder.svg"} alt="" className="h-6 w-6 object-cover" />,
//     Oval: () => <img src={ovalimg || "/placeholder.svg"} alt="" className="h-6 w-6 object-cover" />,
//     Pear: () => <img src={pearimg || "/placeholder.svg"} alt="" className="h-6 w-6 object-cover" />,
//     Marquise: () => <img src={marquiseimg || "/placeholder.svg"} alt="" className="h-6 w-6 object-cover" />,
//     Radiant: () => <img src={radientimg || "/placeholder.svg"} alt="" className="h-6 w-6 object-cover" />,
//     Asscher: () => <img src={asscherimg || "/placeholder.svg"} alt="" className="h-6 w-6 object-cover" />,
//     Heart: () => <img src={heartimg || "/placeholder.svg"} alt="" className="h-6 w-6 object-cover" />,
//   }

//   const Category = [

    
//    { name : 'Ring' , Icon: () => 
//     <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
//     <path d="M15.0684 3.20105L14.2057 2.06573C14.1944 2.05013 14.18 2.03745 14.1644 2.0277C14.14 2.00995 14.1099 2 14.0789 2H10.8142C10.7834 2 10.7535 2.00975 10.7288 2.0277C10.7131 2.03745 10.6985 2.05071 10.6874 2.06573L9.82552 3.20105C9.78476 3.2541 9.78554 3.32783 9.82689 3.38049L12.332 6.5762C12.3597 6.6117 12.4024 6.63218 12.447 6.63218C12.4917 6.63218 12.5342 6.61189 12.5621 6.5762L15.0672 3.38049C15.1087 3.32705 15.1087 3.25352 15.0686 3.20105H15.0684Z" stroke="black" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round"/>
//     <path d="M9.79541 3.28787H15.0671" stroke="black" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round"/>
//     <path d="M11.5234 3.28787L12.4364 6.63221" stroke="black" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round"/>
//     <path d="M13.3708 3.2879L12.458 6.63224" stroke="black" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round"/>
//     <path d="M10.729 2.02771L11.5236 3.28786" stroke="black" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round"/>
//     <path d="M12.5493 2L11.5234 3.28784" stroke="black" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round"/>
//     <path d="M13.3709 3.28784L12.5498 2" stroke="black" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round"/>
//     <path d="M14.1651 2.02771L13.3711 3.28786" stroke="black" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round"/>
//     <circle cx="12.5" cy="15.1364" r="8.3" stroke="black" stroke-width="0.4"/>
//     <circle cx="12.5" cy="15.1364" r="6.75455" stroke="black" stroke-width="0.4"/>
//     </svg>},
//   { name : 'Earrings' ,  Icon : ()=> 
//       <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
// <path d="M8.25587 10.1093L6.66517 8.43489C6.49773 8.22559 6.39307 7.9535 6.39307 7.6814C6.39307 7.40931 6.49773 7.13722 6.6861 6.94884C6.87447 6.76047 7.12563 6.63489 7.3768 6.63489C7.64889 6.63489 7.87912 6.73954 8.06749 6.94884L8.25587 7.15815L8.44424 6.94884C8.63261 6.76047 8.88377 6.63489 9.13493 6.63489C9.40703 6.63489 9.63726 6.73954 9.82563 6.94884C10.014 7.13722 10.1187 7.40931 10.1187 7.6814C10.1187 7.9535 10.014 8.22559 9.82563 8.41396L8.25587 10.1093ZM9.99307 6.76047C9.76284 6.50931 9.46982 6.38373 9.13493 6.38373C8.80005 6.38373 8.50703 6.50931 8.2768 6.76047L8.25587 6.80233L8.214 6.76047C8.0047 6.53024 7.69075 6.38373 7.3768 6.38373C7.06284 6.38373 6.74889 6.50931 6.51866 6.76047C6.28842 7.01163 6.16284 7.32559 6.16284 7.6814C6.16284 8.01629 6.28842 8.35117 6.51866 8.5814L8.25587 10.4233L9.99307 8.5814C10.2233 8.35117 10.3489 8.01629 10.3489 7.6814C10.3489 7.32559 10.2233 7.01163 9.99307 6.76047Z" fill="#1B2230"/>
// <mask id="path-2-inside-1_350_321" fill="white">
// <path d="M8.25643 23.593C7.71667 23.5512 7.19767 23.4675 6.69942 23.2164C5.99358 22.8607 5.57838 22.2329 5.37078 21.4169C5.14242 20.5589 5.22546 19.6801 5.4123 18.8431C5.53686 18.2363 5.70294 17.6713 5.88978 17.0855C6.15967 16.2694 6.53334 15.4743 6.99006 14.7628C7.32222 14.2188 7.71667 13.7166 8.09035 13.2144C8.17339 13.0888 8.23567 13.1098 8.33947 13.2144C9.23215 14.1351 9.89647 15.2232 10.3947 16.4577C10.8514 17.5667 11.1836 18.7176 11.2666 19.9312C11.3289 20.8937 11.1628 21.8144 10.5816 22.5886C10.2494 23.049 9.79267 23.321 9.27367 23.4465C8.92075 23.5093 8.58859 23.5512 8.25643 23.593ZM9.66811 19.1151C9.64735 19.0733 9.64735 19.0314 9.64735 18.9896C9.54355 18.5293 9.43975 18.0689 9.31519 17.5876C9.29443 17.483 9.25291 17.3575 9.19063 17.2738C8.89999 16.8762 8.58859 16.4786 8.27719 16.0811C8.21491 15.9974 8.17338 15.9974 8.1111 16.0811C7.7997 16.4996 7.46755 16.939 7.15615 17.3575C7.09387 17.4412 7.05235 17.5249 7.03159 17.6295C6.90703 18.1317 6.78246 18.6548 6.6579 19.157C6.63714 19.2198 6.63714 19.3035 6.6579 19.3453C6.8655 19.8057 7.05235 20.266 7.25995 20.7263C7.28071 20.7891 7.34298 20.831 7.3845 20.8728C7.5921 21.0402 7.82047 21.1867 8.02807 21.3332C8.11111 21.3959 8.17339 21.3959 8.25643 21.3332C8.46403 21.1448 8.69239 20.9774 8.89999 20.7891C8.94151 20.7473 9.00379 20.6845 9.02455 20.6217C9.19063 20.2451 9.33595 19.8475 9.48127 19.4709C9.56431 19.3662 9.62659 19.2198 9.66811 19.1151ZM6.32575 18.2572C6.38803 18.2154 6.40879 18.1945 6.42955 18.1526C6.59563 17.9224 6.76171 17.6923 6.92779 17.4621C6.96931 17.4202 6.99006 17.3575 6.99006 17.2947C7.09386 16.8553 7.19766 16.4159 7.30146 15.9974C7.34298 15.83 7.38451 15.6417 7.42603 15.4324C7.36375 15.4533 7.34299 15.4533 7.32223 15.4743C7.01082 15.7463 6.69942 15.9974 6.38802 16.2903C6.3465 16.3322 6.32575 16.3949 6.32575 16.4577C6.30499 16.9808 6.30499 17.5249 6.30499 18.0689C6.30499 18.1317 6.30499 18.1735 6.32575 18.2572ZM10.3532 22.0446C10.3947 22.0446 10.4155 22.0446 10.4362 22.0655C10.54 22.0864 10.5608 22.0237 10.5193 21.919C10.3739 21.5424 10.2286 21.1658 10.0833 20.7891C10.0625 20.7473 9.97951 20.6845 9.93799 20.7054C9.70963 20.7473 9.48127 20.7682 9.25291 20.831C9.19063 20.8519 9.12835 20.9147 9.10759 20.9774C9.06607 21.2285 9.06607 21.5005 9.02455 21.7726C9.00379 21.8772 9.04531 21.919 9.12835 21.919C9.54355 21.9609 9.95875 22.0027 10.3532 22.0446ZM10.0003 18.0271C10.0003 17.9852 10.021 17.9224 10.021 17.8597C10.0418 17.3784 10.0625 16.8971 10.0833 16.4159C10.0833 16.3531 10.0418 16.2694 10.0003 16.2275C9.68887 15.9764 9.39823 15.7463 9.08683 15.4952C9.06607 15.4743 9.02455 15.4533 8.96227 15.4324C8.98303 15.5161 8.98303 15.5579 8.98303 15.5998C9.08683 16.0392 9.21139 16.4996 9.29443 16.939C9.37747 17.3993 9.70963 17.6713 9.95875 18.0061C9.95875 18.048 9.97951 18.0271 10.0003 18.0271ZM5.95206 22.0446C6.40878 22.0027 6.82399 21.9609 7.23919 21.919C7.32223 21.919 7.36375 21.8772 7.34299 21.7726C7.30147 21.5424 7.28071 21.3122 7.25995 21.0821C7.23919 20.9774 7.19767 20.9147 7.11463 20.8937C6.88626 20.831 6.67866 20.7682 6.47106 20.7263C6.38802 20.7054 6.32575 20.7263 6.30499 20.831C6.18043 21.1867 6.05586 21.5424 5.9313 21.8981C5.84826 22.0237 5.86902 22.0655 5.95206 22.0446ZM8.2149 13.4446C8.17338 13.5073 8.15263 13.5283 8.15263 13.5492C7.98655 14.0514 7.84122 14.5536 7.6959 15.0558C7.67514 15.0976 7.69591 15.1813 7.73743 15.2232C7.86199 15.3696 8.00731 15.5161 8.15263 15.6626C8.21491 15.7253 8.27719 15.7253 8.33947 15.6626C8.46403 15.5161 8.58859 15.3906 8.71315 15.2441C8.75467 15.2022 8.77543 15.0976 8.75467 15.0558C8.63011 14.6582 8.52631 14.2815 8.40175 13.9049C8.31871 13.7794 8.25642 13.6329 8.2149 13.4446ZM11.059 19.701C11.0383 19.701 11.0175 19.701 11.0175 19.722C10.7476 19.994 10.4985 20.266 10.2286 20.538C10.2079 20.5799 10.1871 20.6636 10.2079 20.7054C10.3324 21.0402 10.457 21.375 10.5816 21.6889C10.6231 21.7935 10.6646 21.8772 10.7061 21.9818C11.0383 21.6261 11.2251 20.1614 11.059 19.701ZM10.1248 20.4125C10.1664 20.3915 10.1871 20.3915 10.1871 20.3915C10.4362 20.1404 10.6853 19.8684 10.9345 19.6173C10.9552 19.5964 10.9345 19.4918 10.9137 19.4499C10.6646 19.1361 10.4155 18.8431 10.1871 18.5292C10.1248 18.4456 10.0833 18.4665 10.0418 18.5711C10.0003 18.6966 9.95875 18.8222 9.89647 18.9268C9.81343 19.0733 9.81343 19.2198 9.87571 19.3662C9.89647 19.4081 9.89647 19.4499 9.89647 19.4918C9.95875 19.7847 10.0418 20.0986 10.1248 20.4125ZM8.2149 23.321C8.25642 23.2791 8.27719 23.2582 8.27719 23.2373C8.46403 22.8607 8.65087 22.4631 8.81695 22.0864C8.83771 22.0446 8.79619 21.9609 8.75467 21.94C8.58859 21.8353 8.40175 21.7516 8.23567 21.6679C8.19415 21.647 8.15262 21.647 8.1111 21.6679C7.94502 21.7516 7.77894 21.8563 7.5921 21.9609C7.50906 22.0027 7.50907 22.0446 7.55059 22.1283C7.65439 22.3166 7.75819 22.5049 7.84123 22.6933C7.98655 22.8816 8.09034 23.0908 8.2149 23.321ZM10.976 19.3035C10.9968 19.3035 11.0175 19.2825 11.0383 19.2825C10.893 18.32 10.6231 17.4202 10.2494 16.4996C10.2286 16.5623 10.2079 16.5833 10.2079 16.6251C10.1871 17.1482 10.1664 17.6713 10.1456 18.1735C10.1456 18.2363 10.1871 18.32 10.2286 18.3828C10.3947 18.6129 10.5816 18.8222 10.7684 19.0524C10.8307 19.1361 10.9137 19.2198 10.976 19.3035ZM10.0003 16.0601C10.021 16.0392 10.021 16.0392 10.021 16.0183C9.58507 15.0976 9.06607 14.2606 8.38099 13.5283C8.36023 13.5701 8.36023 13.612 8.38099 13.6329C8.50555 14.0514 8.65087 14.4489 8.77543 14.8674C8.83771 15.0767 8.94151 15.2232 9.10759 15.3487C9.37747 15.537 9.62659 15.7672 9.89647 15.9555C9.93799 16.0183 9.97951 16.0183 10.0003 16.0601ZM5.7237 22.0027C5.86902 21.5842 6.01434 21.1658 6.15966 20.7682C6.20118 20.6636 6.18043 20.6008 6.11815 20.538C5.91055 20.3078 5.70295 20.0986 5.49535 19.8894C5.47459 19.8684 5.43307 19.8475 5.39155 19.8057C5.26698 20.3915 5.43306 21.647 5.7237 22.0027ZM6.2427 20.4543C6.26346 20.4125 6.28422 20.4125 6.28422 20.3915C6.36726 20.0568 6.42955 19.7429 6.51259 19.4081C6.51259 19.3662 6.53335 19.3244 6.51259 19.2825C6.42955 19.0733 6.3465 18.885 6.2427 18.6757C6.20118 18.6966 6.18042 18.6966 6.15966 18.7176C5.95206 18.9896 5.7237 19.2616 5.53686 19.5546C5.5161 19.5755 5.53686 19.6801 5.55762 19.722C5.7237 19.9312 5.91054 20.1195 6.09739 20.3288C6.13891 20.3706 6.18042 20.4125 6.2427 20.4543ZM5.49535 19.429C5.51611 19.3872 5.53686 19.3244 5.57838 19.2825C5.74446 19.0524 5.91054 18.8431 6.07662 18.6339C6.15966 18.5292 6.20119 18.4037 6.20119 18.2572C6.20119 17.9015 6.22195 17.5249 6.22195 17.1691C6.22195 17.0227 6.22195 16.8971 6.22195 16.7297C5.95207 17.0018 5.39155 19.0942 5.49535 19.429ZM10.6231 22.2748C10.6023 22.2538 10.6023 22.2329 10.6023 22.2329C10.1248 22.1701 9.62659 22.1074 9.14911 22.0446C9.14911 22.0655 9.12835 22.0864 9.12835 22.0864C9.29443 22.4003 9.46051 22.7351 9.62659 23.049C9.66811 23.1327 9.73039 23.1118 9.79267 23.0908C9.95875 22.9653 10.1456 22.8397 10.3117 22.6933C10.4155 22.5677 10.4985 22.4003 10.6231 22.2748ZM7.98655 13.612C7.96579 13.612 7.96579 13.591 7.94503 13.591C7.38451 14.3234 6.88627 15.1185 6.51259 15.9974C6.55411 15.9974 6.57486 15.9974 6.57486 15.9764C6.8655 15.7253 7.17691 15.4743 7.46755 15.2022C7.50907 15.1604 7.52983 15.1185 7.55059 15.0558C7.65439 14.7419 7.75819 14.428 7.84123 14.1142C7.88275 13.9468 7.92427 13.7794 7.98655 13.612ZM7.42603 22.1283C7.38451 22.1911 7.36375 22.2329 7.32223 22.2748C7.17691 22.5259 7.05234 22.777 6.88626 23.0071C6.82398 23.1117 6.82399 23.1745 6.94855 23.2164C7.28071 23.3001 7.63363 23.3628 7.96579 23.4256C8.04883 23.4465 8.09035 23.3838 8.02807 23.3001C7.96579 23.1745 7.90351 23.0699 7.84123 22.9444C7.71667 22.6723 7.59211 22.4003 7.42603 22.1283ZM7.2807 22.1074C7.2807 22.0864 7.25995 22.0655 7.25995 22.0655C6.78247 22.1074 6.30498 22.1701 5.84826 22.212C5.84826 22.2538 5.84826 22.2538 5.84826 22.2538C6.05586 22.5886 6.32574 22.8397 6.6579 23.028C6.67866 23.049 6.7617 23.0071 6.78246 22.9862C6.8655 22.8607 6.94854 22.7142 7.01083 22.5886C7.09387 22.4212 7.1769 22.2748 7.2807 22.1074ZM8.54707 23.4465C8.81695 23.3838 9.10759 23.321 9.39823 23.2373C9.48127 23.2164 9.50203 23.1745 9.46051 23.0699C9.31519 22.7979 9.16987 22.5049 9.02455 22.2329C8.96227 22.1074 8.94151 22.1074 8.87923 22.2329C8.71315 22.5677 8.56783 22.8816 8.4225 23.2164C8.40174 23.2582 8.38099 23.321 8.38099 23.3628C8.40175 23.4047 8.48479 23.4256 8.54707 23.4465ZM7.5921 15.3487C7.44678 15.9555 7.32222 16.4996 7.1769 17.0645C7.21842 17.0645 7.21843 17.0645 7.21843 17.0645C7.48831 16.7088 7.77895 16.3322 8.04883 15.9764C8.06959 15.9555 8.06959 15.8927 8.04883 15.8509C7.92427 15.6835 7.77894 15.537 7.5921 15.3487ZM9.14911 17.0018C9.14911 16.939 9.16987 16.9181 9.16987 16.8971C9.06607 16.4368 8.96227 15.9764 8.83771 15.5161C8.81695 15.4324 8.77543 15.4324 8.71315 15.4743C8.65087 15.537 8.58859 15.5998 8.50555 15.6835C8.29795 15.9137 8.29795 15.9137 8.48479 16.1648C8.71315 16.4159 8.92075 16.6879 9.14911 17.0018ZM9.75115 19.4081C9.73039 19.4081 9.70963 19.4081 9.70963 19.4081C9.54355 19.8266 9.37747 20.2241 9.21139 20.6426C9.23215 20.6636 9.23215 20.6636 9.25291 20.6845C9.48127 20.6426 9.70963 20.6008 9.93799 20.538C9.95875 20.538 10.0003 20.4543 9.97951 20.4125C9.95875 20.266 9.91723 20.1404 9.89647 19.994C9.83419 19.8057 9.79267 19.6173 9.75115 19.4081ZM6.63715 19.5964C6.61639 19.5964 6.61638 19.5964 6.59562 19.5964C6.57486 19.6592 6.55411 19.722 6.53335 19.7847C6.49183 19.9312 6.47107 20.0777 6.42955 20.2241C6.32575 20.5799 6.32575 20.5799 6.63715 20.6426C6.78247 20.6845 6.92778 20.7054 7.0731 20.7473C7.0731 20.7263 7.09386 20.7263 7.09386 20.7054C6.9693 20.3497 6.80323 19.9731 6.63715 19.5964ZM8.98303 21.0193C8.96227 21.0193 8.94151 20.9984 8.92075 20.9984C8.73391 21.1658 8.52631 21.3332 8.29795 21.5215C8.50555 21.6261 8.67163 21.7307 8.89999 21.8353C8.94151 21.5424 8.96227 21.2913 8.98303 21.0193ZM6.8655 17.8597C6.82398 17.8806 6.80322 17.8806 6.80322 17.9015C6.6579 18.0898 6.51258 18.2991 6.36726 18.4874C6.3465 18.5083 6.32574 18.5502 6.3465 18.5711C6.40878 18.7385 6.49182 18.9059 6.5541 19.0733C6.57486 19.0733 6.59562 19.0524 6.59562 19.0524C6.67866 18.6548 6.78246 18.2572 6.8655 17.8597ZM7.40526 21.0821C7.3845 21.103 7.38451 21.103 7.36375 21.1239C7.38451 21.3541 7.42603 21.5633 7.44679 21.7935C7.44679 21.8144 7.52983 21.8353 7.57135 21.8144C7.67515 21.7726 7.77895 21.7098 7.86199 21.647C7.90351 21.6261 7.94503 21.5843 8.02807 21.5424C7.82047 21.3541 7.61286 21.2076 7.40526 21.0821ZM9.52279 17.6923C9.50203 17.755 9.50203 17.7969 9.50203 17.8178C9.56431 18.1317 9.64735 18.4246 9.70963 18.7176C9.70963 18.7385 9.75115 18.7594 9.77191 18.7803C9.79267 18.7594 9.81343 18.7385 9.83419 18.7176C10.0003 18.32 10.0003 18.32 9.75115 17.9852C9.66811 17.9015 9.60583 17.8178 9.52279 17.6923Z"/>
// </mask>
// <path d="M8.25643 23.593C7.71667 23.5512 7.19767 23.4675 6.69942 23.2164C5.99358 22.8607 5.57838 22.2329 5.37078 21.4169C5.14242 20.5589 5.22546 19.6801 5.4123 18.8431C5.53686 18.2363 5.70294 17.6713 5.88978 17.0855C6.15967 16.2694 6.53334 15.4743 6.99006 14.7628C7.32222 14.2188 7.71667 13.7166 8.09035 13.2144C8.17339 13.0888 8.23567 13.1098 8.33947 13.2144C9.23215 14.1351 9.89647 15.2232 10.3947 16.4577C10.8514 17.5667 11.1836 18.7176 11.2666 19.9312C11.3289 20.8937 11.1628 21.8144 10.5816 22.5886C10.2494 23.049 9.79267 23.321 9.27367 23.4465C8.92075 23.5093 8.58859 23.5512 8.25643 23.593ZM9.66811 19.1151C9.64735 19.0733 9.64735 19.0314 9.64735 18.9896C9.54355 18.5293 9.43975 18.0689 9.31519 17.5876C9.29443 17.483 9.25291 17.3575 9.19063 17.2738C8.89999 16.8762 8.58859 16.4786 8.27719 16.0811C8.21491 15.9974 8.17338 15.9974 8.1111 16.0811C7.7997 16.4996 7.46755 16.939 7.15615 17.3575C7.09387 17.4412 7.05235 17.5249 7.03159 17.6295C6.90703 18.1317 6.78246 18.6548 6.6579 19.157C6.63714 19.2198 6.63714 19.3035 6.6579 19.3453C6.8655 19.8057 7.05235 20.266 7.25995 20.7263C7.28071 20.7891 7.34298 20.831 7.3845 20.8728C7.5921 21.0402 7.82047 21.1867 8.02807 21.3332C8.11111 21.3959 8.17339 21.3959 8.25643 21.3332C8.46403 21.1448 8.69239 20.9774 8.89999 20.7891C8.94151 20.7473 9.00379 20.6845 9.02455 20.6217C9.19063 20.2451 9.33595 19.8475 9.48127 19.4709C9.56431 19.3662 9.62659 19.2198 9.66811 19.1151ZM6.32575 18.2572C6.38803 18.2154 6.40879 18.1945 6.42955 18.1526C6.59563 17.9224 6.76171 17.6923 6.92779 17.4621C6.96931 17.4202 6.99006 17.3575 6.99006 17.2947C7.09386 16.8553 7.19766 16.4159 7.30146 15.9974C7.34298 15.83 7.38451 15.6417 7.42603 15.4324C7.36375 15.4533 7.34299 15.4533 7.32223 15.4743C7.01082 15.7463 6.69942 15.9974 6.38802 16.2903C6.3465 16.3322 6.32575 16.3949 6.32575 16.4577C6.30499 16.9808 6.30499 17.5249 6.30499 18.0689C6.30499 18.1317 6.30499 18.1735 6.32575 18.2572ZM10.3532 22.0446C10.3947 22.0446 10.4155 22.0446 10.4362 22.0655C10.54 22.0864 10.5608 22.0237 10.5193 21.919C10.3739 21.5424 10.2286 21.1658 10.0833 20.7891C10.0625 20.7473 9.97951 20.6845 9.93799 20.7054C9.70963 20.7473 9.48127 20.7682 9.25291 20.831C9.19063 20.8519 9.12835 20.9147 9.10759 20.9774C9.06607 21.2285 9.06607 21.5005 9.02455 21.7726C9.00379 21.8772 9.04531 21.919 9.12835 21.919C9.54355 21.9609 9.95875 22.0027 10.3532 22.0446ZM10.0003 18.0271C10.0003 17.9852 10.021 17.9224 10.021 17.8597C10.0418 17.3784 10.0625 16.8971 10.0833 16.4159C10.0833 16.3531 10.0418 16.2694 10.0003 16.2275C9.68887 15.9764 9.39823 15.7463 9.08683 15.4952C9.06607 15.4743 9.02455 15.4533 8.96227 15.4324C8.98303 15.5161 8.98303 15.5579 8.98303 15.5998C9.08683 16.0392 9.21139 16.4996 9.29443 16.939C9.37747 17.3993 9.70963 17.6713 9.95875 18.0061C9.95875 18.048 9.97951 18.0271 10.0003 18.0271ZM5.95206 22.0446C6.40878 22.0027 6.82399 21.9609 7.23919 21.919C7.32223 21.919 7.36375 21.8772 7.34299 21.7726C7.30147 21.5424 7.28071 21.3122 7.25995 21.0821C7.23919 20.9774 7.19767 20.9147 7.11463 20.8937C6.88626 20.831 6.67866 20.7682 6.47106 20.7263C6.38802 20.7054 6.32575 20.7263 6.30499 20.831C6.18043 21.1867 6.05586 21.5424 5.9313 21.8981C5.84826 22.0237 5.86902 22.0655 5.95206 22.0446ZM8.2149 13.4446C8.17338 13.5073 8.15263 13.5283 8.15263 13.5492C7.98655 14.0514 7.84122 14.5536 7.6959 15.0558C7.67514 15.0976 7.69591 15.1813 7.73743 15.2232C7.86199 15.3696 8.00731 15.5161 8.15263 15.6626C8.21491 15.7253 8.27719 15.7253 8.33947 15.6626C8.46403 15.5161 8.58859 15.3906 8.71315 15.2441C8.75467 15.2022 8.77543 15.0976 8.75467 15.0558C8.63011 14.6582 8.52631 14.2815 8.40175 13.9049C8.31871 13.7794 8.25642 13.6329 8.2149 13.4446ZM11.059 19.701C11.0383 19.701 11.0175 19.701 11.0175 19.722C10.7476 19.994 10.4985 20.266 10.2286 20.538C10.2079 20.5799 10.1871 20.6636 10.2079 20.7054C10.3324 21.0402 10.457 21.375 10.5816 21.6889C10.6231 21.7935 10.6646 21.8772 10.7061 21.9818C11.0383 21.6261 11.2251 20.1614 11.059 19.701ZM10.1248 20.4125C10.1664 20.3915 10.1871 20.3915 10.1871 20.3915C10.4362 20.1404 10.6853 19.8684 10.9345 19.6173C10.9552 19.5964 10.9345 19.4918 10.9137 19.4499C10.6646 19.1361 10.4155 18.8431 10.1871 18.5292C10.1248 18.4456 10.0833 18.4665 10.0418 18.5711C10.0003 18.6966 9.95875 18.8222 9.89647 18.9268C9.81343 19.0733 9.81343 19.2198 9.87571 19.3662C9.89647 19.4081 9.89647 19.4499 9.89647 19.4918C9.95875 19.7847 10.0418 20.0986 10.1248 20.4125ZM8.2149 23.321C8.25642 23.2791 8.27719 23.2582 8.27719 23.2373C8.46403 22.8607 8.65087 22.4631 8.81695 22.0864C8.83771 22.0446 8.79619 21.9609 8.75467 21.94C8.58859 21.8353 8.40175 21.7516 8.23567 21.6679C8.19415 21.647 8.15262 21.647 8.1111 21.6679C7.94502 21.7516 7.77894 21.8563 7.5921 21.9609C7.50906 22.0027 7.50907 22.0446 7.55059 22.1283C7.65439 22.3166 7.75819 22.5049 7.84123 22.6933C7.98655 22.8816 8.09034 23.0908 8.2149 23.321ZM10.976 19.3035C10.9968 19.3035 11.0175 19.2825 11.0383 19.2825C10.893 18.32 10.6231 17.4202 10.2494 16.4996C10.2286 16.5623 10.2079 16.5833 10.2079 16.6251C10.1871 17.1482 10.1664 17.6713 10.1456 18.1735C10.1456 18.2363 10.1871 18.32 10.2286 18.3828C10.3947 18.6129 10.5816 18.8222 10.7684 19.0524C10.8307 19.1361 10.9137 19.2198 10.976 19.3035ZM10.0003 16.0601C10.021 16.0392 10.021 16.0392 10.021 16.0183C9.58507 15.0976 9.06607 14.2606 8.38099 13.5283C8.36023 13.5701 8.36023 13.612 8.38099 13.6329C8.50555 14.0514 8.65087 14.4489 8.77543 14.8674C8.83771 15.0767 8.94151 15.2232 9.10759 15.3487C9.37747 15.537 9.62659 15.7672 9.89647 15.9555C9.93799 16.0183 9.97951 16.0183 10.0003 16.0601ZM5.7237 22.0027C5.86902 21.5842 6.01434 21.1658 6.15966 20.7682C6.20118 20.6636 6.18043 20.6008 6.11815 20.538C5.91055 20.3078 5.70295 20.0986 5.49535 19.8894C5.47459 19.8684 5.43307 19.8475 5.39155 19.8057C5.26698 20.3915 5.43306 21.647 5.7237 22.0027ZM6.2427 20.4543C6.26346 20.4125 6.28422 20.4125 6.28422 20.3915C6.36726 20.0568 6.42955 19.7429 6.51259 19.4081C6.51259 19.3662 6.53335 19.3244 6.51259 19.2825C6.42955 19.0733 6.3465 18.885 6.2427 18.6757C6.20118 18.6966 6.18042 18.6966 6.15966 18.7176C5.95206 18.9896 5.7237 19.2616 5.53686 19.5546C5.5161 19.5755 5.53686 19.6801 5.55762 19.722C5.7237 19.9312 5.91054 20.1195 6.09739 20.3288C6.13891 20.3706 6.18042 20.4125 6.2427 20.4543ZM5.49535 19.429C5.51611 19.3872 5.53686 19.3244 5.57838 19.2825C5.74446 19.0524 5.91054 18.8431 6.07662 18.6339C6.15966 18.5292 6.20119 18.4037 6.20119 18.2572C6.20119 17.9015 6.22195 17.5249 6.22195 17.1691C6.22195 17.0227 6.22195 16.8971 6.22195 16.7297C5.95207 17.0018 5.39155 19.0942 5.49535 19.429ZM10.6231 22.2748C10.6023 22.2538 10.6023 22.2329 10.6023 22.2329C10.1248 22.1701 9.62659 22.1074 9.14911 22.0446C9.14911 22.0655 9.12835 22.0864 9.12835 22.0864C9.29443 22.4003 9.46051 22.7351 9.62659 23.049C9.66811 23.1327 9.73039 23.1118 9.79267 23.0908C9.95875 22.9653 10.1456 22.8397 10.3117 22.6933C10.4155 22.5677 10.4985 22.4003 10.6231 22.2748ZM7.98655 13.612C7.96579 13.612 7.96579 13.591 7.94503 13.591C7.38451 14.3234 6.88627 15.1185 6.51259 15.9974C6.55411 15.9974 6.57486 15.9974 6.57486 15.9764C6.8655 15.7253 7.17691 15.4743 7.46755 15.2022C7.50907 15.1604 7.52983 15.1185 7.55059 15.0558C7.65439 14.7419 7.75819 14.428 7.84123 14.1142C7.88275 13.9468 7.92427 13.7794 7.98655 13.612ZM7.42603 22.1283C7.38451 22.1911 7.36375 22.2329 7.32223 22.2748C7.17691 22.5259 7.05234 22.777 6.88626 23.0071C6.82398 23.1117 6.82399 23.1745 6.94855 23.2164C7.28071 23.3001 7.63363 23.3628 7.96579 23.4256C8.04883 23.4465 8.09035 23.3838 8.02807 23.3001C7.96579 23.1745 7.90351 23.0699 7.84123 22.9444C7.71667 22.6723 7.59211 22.4003 7.42603 22.1283ZM7.2807 22.1074C7.2807 22.0864 7.25995 22.0655 7.25995 22.0655C6.78247 22.1074 6.30498 22.1701 5.84826 22.212C5.84826 22.2538 5.84826 22.2538 5.84826 22.2538C6.05586 22.5886 6.32574 22.8397 6.6579 23.028C6.67866 23.049 6.7617 23.0071 6.78246 22.9862C6.8655 22.8607 6.94854 22.7142 7.01083 22.5886C7.09387 22.4212 7.1769 22.2748 7.2807 22.1074ZM8.54707 23.4465C8.81695 23.3838 9.10759 23.321 9.39823 23.2373C9.48127 23.2164 9.50203 23.1745 9.46051 23.0699C9.31519 22.7979 9.16987 22.5049 9.02455 22.2329C8.96227 22.1074 8.94151 22.1074 8.87923 22.2329C8.71315 22.5677 8.56783 22.8816 8.4225 23.2164C8.40174 23.2582 8.38099 23.321 8.38099 23.3628C8.40175 23.4047 8.48479 23.4256 8.54707 23.4465ZM7.5921 15.3487C7.44678 15.9555 7.32222 16.4996 7.1769 17.0645C7.21842 17.0645 7.21843 17.0645 7.21843 17.0645C7.48831 16.7088 7.77895 16.3322 8.04883 15.9764C8.06959 15.9555 8.06959 15.8927 8.04883 15.8509C7.92427 15.6835 7.77894 15.537 7.5921 15.3487ZM9.14911 17.0018C9.14911 16.939 9.16987 16.9181 9.16987 16.8971C9.06607 16.4368 8.96227 15.9764 8.83771 15.5161C8.81695 15.4324 8.77543 15.4324 8.71315 15.4743C8.65087 15.537 8.58859 15.5998 8.50555 15.6835C8.29795 15.9137 8.29795 15.9137 8.48479 16.1648C8.71315 16.4159 8.92075 16.6879 9.14911 17.0018ZM9.75115 19.4081C9.73039 19.4081 9.70963 19.4081 9.70963 19.4081C9.54355 19.8266 9.37747 20.2241 9.21139 20.6426C9.23215 20.6636 9.23215 20.6636 9.25291 20.6845C9.48127 20.6426 9.70963 20.6008 9.93799 20.538C9.95875 20.538 10.0003 20.4543 9.97951 20.4125C9.95875 20.266 9.91723 20.1404 9.89647 19.994C9.83419 19.8057 9.79267 19.6173 9.75115 19.4081ZM6.63715 19.5964C6.61639 19.5964 6.61638 19.5964 6.59562 19.5964C6.57486 19.6592 6.55411 19.722 6.53335 19.7847C6.49183 19.9312 6.47107 20.0777 6.42955 20.2241C6.32575 20.5799 6.32575 20.5799 6.63715 20.6426C6.78247 20.6845 6.92778 20.7054 7.0731 20.7473C7.0731 20.7263 7.09386 20.7263 7.09386 20.7054C6.9693 20.3497 6.80323 19.9731 6.63715 19.5964ZM8.98303 21.0193C8.96227 21.0193 8.94151 20.9984 8.92075 20.9984C8.73391 21.1658 8.52631 21.3332 8.29795 21.5215C8.50555 21.6261 8.67163 21.7307 8.89999 21.8353C8.94151 21.5424 8.96227 21.2913 8.98303 21.0193ZM6.8655 17.8597C6.82398 17.8806 6.80322 17.8806 6.80322 17.9015C6.6579 18.0898 6.51258 18.2991 6.36726 18.4874C6.3465 18.5083 6.32574 18.5502 6.3465 18.5711C6.40878 18.7385 6.49182 18.9059 6.5541 19.0733C6.57486 19.0733 6.59562 19.0524 6.59562 19.0524C6.67866 18.6548 6.78246 18.2572 6.8655 17.8597ZM7.40526 21.0821C7.3845 21.103 7.38451 21.103 7.36375 21.1239C7.38451 21.3541 7.42603 21.5633 7.44679 21.7935C7.44679 21.8144 7.52983 21.8353 7.57135 21.8144C7.67515 21.7726 7.77895 21.7098 7.86199 21.647C7.90351 21.6261 7.94503 21.5843 8.02807 21.5424C7.82047 21.3541 7.61286 21.2076 7.40526 21.0821ZM9.52279 17.6923C9.50203 17.755 9.50203 17.7969 9.50203 17.8178C9.56431 18.1317 9.64735 18.4246 9.70963 18.7176C9.70963 18.7385 9.75115 18.7594 9.77191 18.7803C9.79267 18.7594 9.81343 18.7385 9.83419 18.7176C10.0003 18.32 10.0003 18.32 9.75115 17.9852C9.66811 17.9015 9.60583 17.8178 9.52279 17.6923Z" fill="#2B2B2B" stroke="#2B2B2B" stroke-width="4" mask="url(#path-2-inside-1_350_321)"/>
// <path d="M8.25581 6.83095L8.21353 2.81485C8.21353 2.08438 7.62156 1.5 6.88161 1.5C6.14165 1.5 5.54968 2.08438 5.54968 2.81485C5.54968 2.81485 5.80338 4.50537 5 4.75581" stroke="#1B2230" stroke-width="0.5"/>
// <circle cx="8.13956" cy="11.6163" r="1.01163" stroke="#1B2230"/>
// <path d="M16.9768 10.1093L15.3861 8.43489C15.2187 8.22559 15.114 7.9535 15.114 7.6814C15.114 7.40931 15.2187 7.13722 15.407 6.94884C15.5954 6.76047 15.8466 6.63489 16.0977 6.63489C16.3698 6.63489 16.6001 6.73954 16.7884 6.94884L16.9768 7.15815L17.1652 6.94884C17.3536 6.76047 17.6047 6.63489 17.8559 6.63489C18.128 6.63489 18.3582 6.73954 18.5466 6.94884C18.735 7.13722 18.8396 7.40931 18.8396 7.6814C18.8396 7.9535 18.735 8.22559 18.5466 8.41396L16.9768 10.1093ZM18.714 6.76047C18.4838 6.50931 18.1908 6.38373 17.8559 6.38373C17.521 6.38373 17.228 6.50931 16.9977 6.76047L16.9768 6.80233L16.935 6.76047C16.7256 6.53024 16.4117 6.38373 16.0977 6.38373C15.7838 6.38373 15.4698 6.50931 15.2396 6.76047C15.0094 7.01163 14.8838 7.32559 14.8838 7.6814C14.8838 8.01629 15.0094 8.35117 15.2396 8.5814L16.9768 10.4233L18.714 8.5814C18.9443 8.35117 19.0698 8.01629 19.0698 7.6814C19.0698 7.32559 18.9443 7.01163 18.714 6.76047Z" fill="#1B2230"/>
// <mask id="path-6-inside-2_350_321" fill="white">
// <path d="M16.9774 23.593C16.4376 23.5512 15.9186 23.4675 15.4204 23.2164C14.7145 22.8607 14.2993 22.2329 14.0917 21.4169C13.8634 20.5589 13.9464 19.6801 14.1332 18.8431C14.2578 18.2363 14.4239 17.6713 14.6107 17.0855C14.8806 16.2694 15.2543 15.4743 15.711 14.7628C16.0432 14.2188 16.4376 13.7166 16.8113 13.2144C16.8943 13.0888 16.9566 13.1098 17.0604 13.2144C17.9531 14.1351 18.6174 15.2232 19.1157 16.4577C19.5724 17.5667 19.9045 18.7176 19.9876 19.9312C20.0499 20.8937 19.8838 21.8144 19.3025 22.5886C18.9703 23.049 18.5136 23.321 17.9946 23.4465C17.6417 23.5093 17.3095 23.5512 16.9774 23.593ZM18.3891 19.1151C18.3683 19.0733 18.3683 19.0314 18.3683 18.9896C18.2645 18.5293 18.1607 18.0689 18.0361 17.5876C18.0154 17.483 17.9739 17.3575 17.9116 17.2738C17.6209 16.8762 17.3095 16.4786 16.9981 16.0811C16.9359 15.9974 16.8943 15.9974 16.8321 16.0811C16.5207 16.4996 16.1885 16.939 15.8771 17.3575C15.8148 17.4412 15.7733 17.5249 15.7525 17.6295C15.628 18.1317 15.5034 18.6548 15.3788 19.157C15.3581 19.2198 15.3581 19.3035 15.3788 19.3453C15.5864 19.8057 15.7733 20.266 15.9809 20.7263C16.0017 20.7891 16.0639 20.831 16.1055 20.8728C16.3131 21.0402 16.5414 21.1867 16.749 21.3332C16.8321 21.3959 16.8943 21.3959 16.9774 21.3332C17.185 21.1448 17.4133 20.9774 17.6209 20.7891C17.6625 20.7473 17.7247 20.6845 17.7455 20.6217C17.9116 20.2451 18.0569 19.8475 18.2022 19.4709C18.2853 19.3662 18.3475 19.2198 18.3891 19.1151ZM15.0467 18.2572C15.109 18.2154 15.1297 18.1945 15.1505 18.1526C15.3166 17.9224 15.4827 17.6923 15.6487 17.4621C15.6903 17.4202 15.711 17.3575 15.711 17.2947C15.8148 16.8553 15.9186 16.4159 16.0224 15.9974C16.0639 15.83 16.1055 15.6417 16.147 15.4324C16.0847 15.4533 16.0639 15.4533 16.0432 15.4743C15.7318 15.7463 15.4204 15.9974 15.109 16.2903C15.0675 16.3322 15.0467 16.3949 15.0467 16.4577C15.0259 16.9808 15.0259 17.5249 15.0259 18.0689C15.0259 18.1317 15.0259 18.1735 15.0467 18.2572ZM19.0741 22.0446C19.1157 22.0446 19.1364 22.0446 19.1572 22.0655C19.261 22.0864 19.2817 22.0237 19.2402 21.919C19.0949 21.5424 18.9496 21.1658 18.8043 20.7891C18.7835 20.7473 18.7005 20.6845 18.6589 20.7054C18.4306 20.7473 18.2022 20.7682 17.9739 20.831C17.9116 20.8519 17.8493 20.9147 17.8285 20.9774C17.787 21.2285 17.787 21.5005 17.7455 21.7726C17.7247 21.8772 17.7663 21.919 17.8493 21.919C18.2645 21.9609 18.6797 22.0027 19.0741 22.0446ZM18.7212 18.0271C18.7212 17.9852 18.742 17.9224 18.742 17.8597C18.7627 17.3784 18.7835 16.8971 18.8043 16.4159C18.8043 16.3531 18.7627 16.2694 18.7212 16.2275C18.4098 15.9764 18.1192 15.7463 17.8078 15.4952C17.787 15.4743 17.7455 15.4533 17.6832 15.4324C17.704 15.5161 17.704 15.5579 17.704 15.5998C17.8078 16.0392 17.9323 16.4996 18.0154 16.939C18.0984 17.3993 18.4306 17.6713 18.6797 18.0061C18.6797 18.048 18.7005 18.0271 18.7212 18.0271ZM14.673 22.0446C15.1297 22.0027 15.5449 21.9609 15.9601 21.919C16.0432 21.919 16.0847 21.8772 16.0639 21.7726C16.0224 21.5424 16.0017 21.3122 15.9809 21.0821C15.9601 20.9774 15.9186 20.9147 15.8356 20.8937C15.6072 20.831 15.3996 20.7682 15.192 20.7263C15.109 20.7054 15.0467 20.7263 15.0259 20.831C14.9014 21.1867 14.7768 21.5424 14.6522 21.8981C14.5692 22.0237 14.59 22.0655 14.673 22.0446ZM16.9359 13.4446C16.8943 13.5073 16.8736 13.5283 16.8736 13.5492C16.7075 14.0514 16.5622 14.5536 16.4169 15.0558C16.3961 15.0976 16.4169 15.1813 16.4584 15.2232C16.5829 15.3696 16.7283 15.5161 16.8736 15.6626C16.9359 15.7253 16.9981 15.7253 17.0604 15.6626C17.185 15.5161 17.3095 15.3906 17.4341 15.2441C17.4756 15.2022 17.4964 15.0976 17.4756 15.0558C17.3511 14.6582 17.2473 14.2815 17.1227 13.9049C17.0397 13.7794 16.9774 13.6329 16.9359 13.4446ZM19.78 19.701C19.7592 19.701 19.7385 19.701 19.7385 19.722C19.4686 19.994 19.2195 20.266 18.9496 20.538C18.9288 20.5799 18.9081 20.6636 18.9288 20.7054C19.0534 21.0402 19.1779 21.375 19.3025 21.6889C19.344 21.7935 19.3855 21.8772 19.4271 21.9818C19.7592 21.6261 19.9461 20.1614 19.78 19.701ZM18.8458 20.4125C18.8873 20.3915 18.9081 20.3915 18.9081 20.3915C19.1572 20.1404 19.4063 19.8684 19.6554 19.6173C19.6762 19.5964 19.6554 19.4918 19.6347 19.4499C19.3855 19.1361 19.1364 18.8431 18.9081 18.5292C18.8458 18.4456 18.8043 18.4665 18.7627 18.5711C18.7212 18.6966 18.6797 18.8222 18.6174 18.9268C18.5344 19.0733 18.5344 19.2198 18.5967 19.3662C18.6174 19.4081 18.6174 19.4499 18.6174 19.4918C18.6797 19.7847 18.7627 20.0986 18.8458 20.4125ZM16.9359 23.321C16.9774 23.2791 16.9981 23.2582 16.9981 23.2373C17.185 22.8607 17.3718 22.4631 17.5379 22.0864C17.5587 22.0446 17.5171 21.9609 17.4756 21.94C17.3095 21.8353 17.1227 21.7516 16.9566 21.6679C16.9151 21.647 16.8736 21.647 16.8321 21.6679C16.666 21.7516 16.4999 21.8563 16.3131 21.9609C16.23 22.0027 16.23 22.0446 16.2715 22.1283C16.3753 22.3166 16.4791 22.5049 16.5622 22.6933C16.7075 22.8816 16.8113 23.0908 16.9359 23.321ZM19.6969 19.3035C19.7177 19.3035 19.7385 19.2825 19.7592 19.2825C19.6139 18.32 19.344 17.4202 18.9703 16.4996C18.9496 16.5623 18.9288 16.5833 18.9288 16.6251C18.9081 17.1482 18.8873 17.6713 18.8665 18.1735C18.8665 18.2363 18.9081 18.32 18.9496 18.3828C19.1157 18.6129 19.3025 18.8222 19.4893 19.0524C19.5516 19.1361 19.6347 19.2198 19.6969 19.3035ZM18.7212 16.0601C18.742 16.0392 18.742 16.0392 18.742 16.0183C18.306 15.0976 17.787 14.2606 17.1019 13.5283C17.0812 13.5701 17.0812 13.612 17.1019 13.6329C17.2265 14.0514 17.3718 14.4489 17.4964 14.8674C17.5587 15.0767 17.6625 15.2232 17.8285 15.3487C18.0984 15.537 18.3475 15.7672 18.6174 15.9555C18.6589 16.0183 18.7005 16.0183 18.7212 16.0601ZM14.4446 22.0027C14.59 21.5842 14.7353 21.1658 14.8806 20.7682C14.9221 20.6636 14.9014 20.6008 14.8391 20.538C14.6315 20.3078 14.4239 20.0986 14.2163 19.8894C14.1955 19.8684 14.154 19.8475 14.1125 19.8057C13.9879 20.3915 14.154 21.647 14.4446 22.0027ZM14.9636 20.4543C14.9844 20.4125 15.0052 20.4125 15.0052 20.3915C15.0882 20.0568 15.1505 19.7429 15.2335 19.4081C15.2335 19.3662 15.2543 19.3244 15.2335 19.2825C15.1505 19.0733 15.0674 18.885 14.9636 18.6757C14.9221 18.6966 14.9014 18.6966 14.8806 18.7176C14.673 18.9896 14.4446 19.2616 14.2578 19.5546C14.237 19.5755 14.2578 19.6801 14.2786 19.722C14.4447 19.9312 14.6315 20.1195 14.8183 20.3288C14.8599 20.3706 14.9014 20.4125 14.9636 20.4543ZM14.2163 19.429C14.2371 19.3872 14.2578 19.3244 14.2993 19.2825C14.4654 19.0524 14.6315 18.8431 14.7976 18.6339C14.8806 18.5292 14.9221 18.4037 14.9221 18.2572C14.9221 17.9015 14.9429 17.5249 14.9429 17.1691C14.9429 17.0227 14.9429 16.8971 14.9429 16.7297C14.673 17.0018 14.1125 19.0942 14.2163 19.429ZM19.344 22.2748C19.3233 22.2538 19.3233 22.2329 19.3233 22.2329C18.8458 22.1701 18.3475 22.1074 17.8701 22.0446C17.8701 22.0655 17.8493 22.0864 17.8493 22.0864C18.0154 22.4003 18.1815 22.7351 18.3475 23.049C18.3891 23.1327 18.4513 23.1118 18.5136 23.0908C18.6797 22.9653 18.8665 22.8397 19.0326 22.6933C19.1364 22.5677 19.2195 22.4003 19.344 22.2748ZM16.7075 13.612C16.6867 13.612 16.6867 13.591 16.666 13.591C16.1055 14.3234 15.6072 15.1185 15.2335 15.9974C15.2751 15.9974 15.2958 15.9974 15.2958 15.9764C15.5865 15.7253 15.8979 15.4743 16.1885 15.2022C16.23 15.1604 16.2508 15.1185 16.2715 15.0558C16.3753 14.7419 16.4791 14.428 16.5622 14.1142C16.6037 13.9468 16.6452 13.7794 16.7075 13.612ZM16.147 22.1283C16.1055 22.1911 16.0847 22.2329 16.0432 22.2748C15.8979 22.5259 15.7733 22.777 15.6072 23.0071C15.5449 23.1117 15.5449 23.1745 15.6695 23.2164C16.0017 23.3001 16.3546 23.3628 16.6867 23.4256C16.7698 23.4465 16.8113 23.3838 16.749 23.3001C16.6867 23.1745 16.6245 23.0699 16.5622 22.9444C16.4376 22.6723 16.3131 22.4003 16.147 22.1283ZM16.0017 22.1074C16.0017 22.0864 15.9809 22.0655 15.9809 22.0655C15.5034 22.1074 15.0259 22.1701 14.5692 22.212C14.5692 22.2538 14.5692 22.2538 14.5692 22.2538C14.7768 22.5886 15.0467 22.8397 15.3788 23.028C15.3996 23.049 15.4827 23.0071 15.5034 22.9862C15.5865 22.8607 15.6695 22.7142 15.7318 22.5886C15.8148 22.4212 15.8979 22.2748 16.0017 22.1074ZM17.268 23.4465C17.5379 23.3838 17.8285 23.321 18.1192 23.2373C18.2022 23.2164 18.223 23.1745 18.1815 23.0699C18.0361 22.7979 17.8908 22.5049 17.7455 22.2329C17.6832 22.1074 17.6625 22.1074 17.6002 22.2329C17.4341 22.5677 17.2888 22.8816 17.1435 23.2164C17.1227 23.2582 17.1019 23.321 17.1019 23.3628C17.1227 23.4047 17.2057 23.4256 17.268 23.4465ZM16.3131 15.3487C16.1677 15.9555 16.0432 16.4996 15.8979 17.0645C15.9394 17.0645 15.9394 17.0645 15.9394 17.0645C16.2093 16.7088 16.4999 16.3322 16.7698 15.9764C16.7905 15.9555 16.7905 15.8927 16.7698 15.8509C16.6452 15.6835 16.4999 15.537 16.3131 15.3487ZM17.8701 17.0018C17.8701 16.939 17.8908 16.9181 17.8908 16.8971C17.787 16.4368 17.6832 15.9764 17.5587 15.5161C17.5379 15.4324 17.4964 15.4324 17.4341 15.4743C17.3718 15.537 17.3095 15.5998 17.2265 15.6835C17.0189 15.9137 17.0189 15.9137 17.2057 16.1648C17.4341 16.4159 17.6417 16.6879 17.8701 17.0018ZM18.4721 19.4081C18.4513 19.4081 18.4306 19.4081 18.4306 19.4081C18.2645 19.8266 18.0984 20.2241 17.9323 20.6426C17.9531 20.6636 17.9531 20.6636 17.9739 20.6845C18.2022 20.6426 18.4306 20.6008 18.6589 20.538C18.6797 20.538 18.7212 20.4543 18.7005 20.4125C18.6797 20.266 18.6382 20.1404 18.6174 19.994C18.5551 19.8057 18.5136 19.6173 18.4721 19.4081ZM15.3581 19.5964C15.3373 19.5964 15.3373 19.5964 15.3166 19.5964C15.2958 19.6592 15.2751 19.722 15.2543 19.7847C15.2128 19.9312 15.192 20.0777 15.1505 20.2241C15.0467 20.5799 15.0467 20.5799 15.3581 20.6426C15.5034 20.6845 15.6487 20.7054 15.7941 20.7473C15.7941 20.7263 15.8148 20.7263 15.8148 20.7054C15.6903 20.3497 15.5242 19.9731 15.3581 19.5964ZM17.704 21.0193C17.6832 21.0193 17.6625 20.9984 17.6417 20.9984C17.4549 21.1658 17.2473 21.3332 17.0189 21.5215C17.2265 21.6261 17.3926 21.7307 17.6209 21.8353C17.6625 21.5424 17.6832 21.2913 17.704 21.0193ZM15.5864 17.8597C15.5449 17.8806 15.5242 17.8806 15.5242 17.9015C15.3789 18.0898 15.2335 18.2991 15.0882 18.4874C15.0675 18.5083 15.0467 18.5502 15.0674 18.5711C15.1297 18.7385 15.2128 18.9059 15.275 19.0733C15.2958 19.0733 15.3166 19.0524 15.3166 19.0524C15.3996 18.6548 15.5034 18.2572 15.5864 17.8597ZM16.1262 21.0821C16.1055 21.103 16.1055 21.103 16.0847 21.1239C16.1055 21.3541 16.147 21.5633 16.1677 21.7935C16.1677 21.8144 16.2508 21.8353 16.2923 21.8144C16.3961 21.7726 16.4999 21.7098 16.5829 21.647C16.6245 21.6261 16.666 21.5843 16.749 21.5424C16.5414 21.3541 16.3338 21.2076 16.1262 21.0821ZM18.2437 17.6923C18.223 17.755 18.223 17.7969 18.223 17.8178C18.2853 18.1317 18.3683 18.4246 18.4306 18.7176C18.4306 18.7385 18.4721 18.7594 18.4929 18.7803C18.5136 18.7594 18.5344 18.7385 18.5551 18.7176C18.7212 18.32 18.7212 18.32 18.4721 17.9852C18.3891 17.9015 18.3268 17.8178 18.2437 17.6923Z"/>
// </mask>
// <path d="M16.9774 23.593C16.4376 23.5512 15.9186 23.4675 15.4204 23.2164C14.7145 22.8607 14.2993 22.2329 14.0917 21.4169C13.8634 20.5589 13.9464 19.6801 14.1332 18.8431C14.2578 18.2363 14.4239 17.6713 14.6107 17.0855C14.8806 16.2694 15.2543 15.4743 15.711 14.7628C16.0432 14.2188 16.4376 13.7166 16.8113 13.2144C16.8943 13.0888 16.9566 13.1098 17.0604 13.2144C17.9531 14.1351 18.6174 15.2232 19.1157 16.4577C19.5724 17.5667 19.9045 18.7176 19.9876 19.9312C20.0499 20.8937 19.8838 21.8144 19.3025 22.5886C18.9703 23.049 18.5136 23.321 17.9946 23.4465C17.6417 23.5093 17.3095 23.5512 16.9774 23.593ZM18.3891 19.1151C18.3683 19.0733 18.3683 19.0314 18.3683 18.9896C18.2645 18.5293 18.1607 18.0689 18.0361 17.5876C18.0154 17.483 17.9739 17.3575 17.9116 17.2738C17.6209 16.8762 17.3095 16.4786 16.9981 16.0811C16.9359 15.9974 16.8943 15.9974 16.8321 16.0811C16.5207 16.4996 16.1885 16.939 15.8771 17.3575C15.8148 17.4412 15.7733 17.5249 15.7525 17.6295C15.628 18.1317 15.5034 18.6548 15.3788 19.157C15.3581 19.2198 15.3581 19.3035 15.3788 19.3453C15.5864 19.8057 15.7733 20.266 15.9809 20.7263C16.0017 20.7891 16.0639 20.831 16.1055 20.8728C16.3131 21.0402 16.5414 21.1867 16.749 21.3332C16.8321 21.3959 16.8943 21.3959 16.9774 21.3332C17.185 21.1448 17.4133 20.9774 17.6209 20.7891C17.6625 20.7473 17.7247 20.6845 17.7455 20.6217C17.9116 20.2451 18.0569 19.8475 18.2022 19.4709C18.2853 19.3662 18.3475 19.2198 18.3891 19.1151ZM15.0467 18.2572C15.109 18.2154 15.1297 18.1945 15.1505 18.1526C15.3166 17.9224 15.4827 17.6923 15.6487 17.4621C15.6903 17.4202 15.711 17.3575 15.711 17.2947C15.8148 16.8553 15.9186 16.4159 16.0224 15.9974C16.0639 15.83 16.1055 15.6417 16.147 15.4324C16.0847 15.4533 16.0639 15.4533 16.0432 15.4743C15.7318 15.7463 15.4204 15.9974 15.109 16.2903C15.0675 16.3322 15.0467 16.3949 15.0467 16.4577C15.0259 16.9808 15.0259 17.5249 15.0259 18.0689C15.0259 18.1317 15.0259 18.1735 15.0467 18.2572ZM19.0741 22.0446C19.1157 22.0446 19.1364 22.0446 19.1572 22.0655C19.261 22.0864 19.2817 22.0237 19.2402 21.919C19.0949 21.5424 18.9496 21.1658 18.8043 20.7891C18.7835 20.7473 18.7005 20.6845 18.6589 20.7054C18.4306 20.7473 18.2022 20.7682 17.9739 20.831C17.9116 20.8519 17.8493 20.9147 17.8285 20.9774C17.787 21.2285 17.787 21.5005 17.7455 21.7726C17.7247 21.8772 17.7663 21.919 17.8493 21.919C18.2645 21.9609 18.6797 22.0027 19.0741 22.0446ZM18.7212 18.0271C18.7212 17.9852 18.742 17.9224 18.742 17.8597C18.7627 17.3784 18.7835 16.8971 18.8043 16.4159C18.8043 16.3531 18.7627 16.2694 18.7212 16.2275C18.4098 15.9764 18.1192 15.7463 17.8078 15.4952C17.787 15.4743 17.7455 15.4533 17.6832 15.4324C17.704 15.5161 17.704 15.5579 17.704 15.5998C17.8078 16.0392 17.9323 16.4996 18.0154 16.939C18.0984 17.3993 18.4306 17.6713 18.6797 18.0061C18.6797 18.048 18.7005 18.0271 18.7212 18.0271ZM14.673 22.0446C15.1297 22.0027 15.5449 21.9609 15.9601 21.919C16.0432 21.919 16.0847 21.8772 16.0639 21.7726C16.0224 21.5424 16.0017 21.3122 15.9809 21.0821C15.9601 20.9774 15.9186 20.9147 15.8356 20.8937C15.6072 20.831 15.3996 20.7682 15.192 20.7263C15.109 20.7054 15.0467 20.7263 15.0259 20.831C14.9014 21.1867 14.7768 21.5424 14.6522 21.8981C14.5692 22.0237 14.59 22.0655 14.673 22.0446ZM16.9359 13.4446C16.8943 13.5073 16.8736 13.5283 16.8736 13.5492C16.7075 14.0514 16.5622 14.5536 16.4169 15.0558C16.3961 15.0976 16.4169 15.1813 16.4584 15.2232C16.5829 15.3696 16.7283 15.5161 16.8736 15.6626C16.9359 15.7253 16.9981 15.7253 17.0604 15.6626C17.185 15.5161 17.3095 15.3906 17.4341 15.2441C17.4756 15.2022 17.4964 15.0976 17.4756 15.0558C17.3511 14.6582 17.2473 14.2815 17.1227 13.9049C17.0397 13.7794 16.9774 13.6329 16.9359 13.4446ZM19.78 19.701C19.7592 19.701 19.7385 19.701 19.7385 19.722C19.4686 19.994 19.2195 20.266 18.9496 20.538C18.9288 20.5799 18.9081 20.6636 18.9288 20.7054C19.0534 21.0402 19.1779 21.375 19.3025 21.6889C19.344 21.7935 19.3855 21.8772 19.4271 21.9818C19.7592 21.6261 19.9461 20.1614 19.78 19.701ZM18.8458 20.4125C18.8873 20.3915 18.9081 20.3915 18.9081 20.3915C19.1572 20.1404 19.4063 19.8684 19.6554 19.6173C19.6762 19.5964 19.6554 19.4918 19.6347 19.4499C19.3855 19.1361 19.1364 18.8431 18.9081 18.5292C18.8458 18.4456 18.8043 18.4665 18.7627 18.5711C18.7212 18.6966 18.6797 18.8222 18.6174 18.9268C18.5344 19.0733 18.5344 19.2198 18.5967 19.3662C18.6174 19.4081 18.6174 19.4499 18.6174 19.4918C18.6797 19.7847 18.7627 20.0986 18.8458 20.4125ZM16.9359 23.321C16.9774 23.2791 16.9981 23.2582 16.9981 23.2373C17.185 22.8607 17.3718 22.4631 17.5379 22.0864C17.5587 22.0446 17.5171 21.9609 17.4756 21.94C17.3095 21.8353 17.1227 21.7516 16.9566 21.6679C16.9151 21.647 16.8736 21.647 16.8321 21.6679C16.666 21.7516 16.4999 21.8563 16.3131 21.9609C16.23 22.0027 16.23 22.0446 16.2715 22.1283C16.3753 22.3166 16.4791 22.5049 16.5622 22.6933C16.7075 22.8816 16.8113 23.0908 16.9359 23.321ZM19.6969 19.3035C19.7177 19.3035 19.7385 19.2825 19.7592 19.2825C19.6139 18.32 19.344 17.4202 18.9703 16.4996C18.9496 16.5623 18.9288 16.5833 18.9288 16.6251C18.9081 17.1482 18.8873 17.6713 18.8665 18.1735C18.8665 18.2363 18.9081 18.32 18.9496 18.3828C19.1157 18.6129 19.3025 18.8222 19.4893 19.0524C19.5516 19.1361 19.6347 19.2198 19.6969 19.3035ZM18.7212 16.0601C18.742 16.0392 18.742 16.0392 18.742 16.0183C18.306 15.0976 17.787 14.2606 17.1019 13.5283C17.0812 13.5701 17.0812 13.612 17.1019 13.6329C17.2265 14.0514 17.3718 14.4489 17.4964 14.8674C17.5587 15.0767 17.6625 15.2232 17.8285 15.3487C18.0984 15.537 18.3475 15.7672 18.6174 15.9555C18.6589 16.0183 18.7005 16.0183 18.7212 16.0601ZM14.4446 22.0027C14.59 21.5842 14.7353 21.1658 14.8806 20.7682C14.9221 20.6636 14.9014 20.6008 14.8391 20.538C14.6315 20.3078 14.4239 20.0986 14.2163 19.8894C14.1955 19.8684 14.154 19.8475 14.1125 19.8057C13.9879 20.3915 14.154 21.647 14.4446 22.0027ZM14.9636 20.4543C14.9844 20.4125 15.0052 20.4125 15.0052 20.3915C15.0882 20.0568 15.1505 19.7429 15.2335 19.4081C15.2335 19.3662 15.2543 19.3244 15.2335 19.2825C15.1505 19.0733 15.0674 18.885 14.9636 18.6757C14.9221 18.6966 14.9014 18.6966 14.8806 18.7176C14.673 18.9896 14.4446 19.2616 14.2578 19.5546C14.237 19.5755 14.2578 19.6801 14.2786 19.722C14.4447 19.9312 14.6315 20.1195 14.8183 20.3288C14.8599 20.3706 14.9014 20.4125 14.9636 20.4543ZM14.2163 19.429C14.2371 19.3872 14.2578 19.3244 14.2993 19.2825C14.4654 19.0524 14.6315 18.8431 14.7976 18.6339C14.8806 18.5292 14.9221 18.4037 14.9221 18.2572C14.9221 17.9015 14.9429 17.5249 14.9429 17.1691C14.9429 17.0227 14.9429 16.8971 14.9429 16.7297C14.673 17.0018 14.1125 19.0942 14.2163 19.429ZM19.344 22.2748C19.3233 22.2538 19.3233 22.2329 19.3233 22.2329C18.8458 22.1701 18.3475 22.1074 17.8701 22.0446C17.8701 22.0655 17.8493 22.0864 17.8493 22.0864C18.0154 22.4003 18.1815 22.7351 18.3475 23.049C18.3891 23.1327 18.4513 23.1118 18.5136 23.0908C18.6797 22.9653 18.8665 22.8397 19.0326 22.6933C19.1364 22.5677 19.2195 22.4003 19.344 22.2748ZM16.7075 13.612C16.6867 13.612 16.6867 13.591 16.666 13.591C16.1055 14.3234 15.6072 15.1185 15.2335 15.9974C15.2751 15.9974 15.2958 15.9974 15.2958 15.9764C15.5865 15.7253 15.8979 15.4743 16.1885 15.2022C16.23 15.1604 16.2508 15.1185 16.2715 15.0558C16.3753 14.7419 16.4791 14.428 16.5622 14.1142C16.6037 13.9468 16.6452 13.7794 16.7075 13.612ZM16.147 22.1283C16.1055 22.1911 16.0847 22.2329 16.0432 22.2748C15.8979 22.5259 15.7733 22.777 15.6072 23.0071C15.5449 23.1117 15.5449 23.1745 15.6695 23.2164C16.0017 23.3001 16.3546 23.3628 16.6867 23.4256C16.7698 23.4465 16.8113 23.3838 16.749 23.3001C16.6867 23.1745 16.6245 23.0699 16.5622 22.9444C16.4376 22.6723 16.3131 22.4003 16.147 22.1283ZM16.0017 22.1074C16.0017 22.0864 15.9809 22.0655 15.9809 22.0655C15.5034 22.1074 15.0259 22.1701 14.5692 22.212C14.5692 22.2538 14.5692 22.2538 14.5692 22.2538C14.7768 22.5886 15.0467 22.8397 15.3788 23.028C15.3996 23.049 15.4827 23.0071 15.5034 22.9862C15.5865 22.8607 15.6695 22.7142 15.7318 22.5886C15.8148 22.4212 15.8979 22.2748 16.0017 22.1074ZM17.268 23.4465C17.5379 23.3838 17.8285 23.321 18.1192 23.2373C18.2022 23.2164 18.223 23.1745 18.1815 23.0699C18.0361 22.7979 17.8908 22.5049 17.7455 22.2329C17.6832 22.1074 17.6625 22.1074 17.6002 22.2329C17.4341 22.5677 17.2888 22.8816 17.1435 23.2164C17.1227 23.2582 17.1019 23.321 17.1019 23.3628C17.1227 23.4047 17.2057 23.4256 17.268 23.4465ZM16.3131 15.3487C16.1677 15.9555 16.0432 16.4996 15.8979 17.0645C15.9394 17.0645 15.9394 17.0645 15.9394 17.0645C16.2093 16.7088 16.4999 16.3322 16.7698 15.9764C16.7905 15.9555 16.7905 15.8927 16.7698 15.8509C16.6452 15.6835 16.4999 15.537 16.3131 15.3487ZM17.8701 17.0018C17.8701 16.939 17.8908 16.9181 17.8908 16.8971C17.787 16.4368 17.6832 15.9764 17.5587 15.5161C17.5379 15.4324 17.4964 15.4324 17.4341 15.4743C17.3718 15.537 17.3095 15.5998 17.2265 15.6835C17.0189 15.9137 17.0189 15.9137 17.2057 16.1648C17.4341 16.4159 17.6417 16.6879 17.8701 17.0018ZM18.4721 19.4081C18.4513 19.4081 18.4306 19.4081 18.4306 19.4081C18.2645 19.8266 18.0984 20.2241 17.9323 20.6426C17.9531 20.6636 17.9531 20.6636 17.9739 20.6845C18.2022 20.6426 18.4306 20.6008 18.6589 20.538C18.6797 20.538 18.7212 20.4543 18.7005 20.4125C18.6797 20.266 18.6382 20.1404 18.6174 19.994C18.5551 19.8057 18.5136 19.6173 18.4721 19.4081ZM15.3581 19.5964C15.3373 19.5964 15.3373 19.5964 15.3166 19.5964C15.2958 19.6592 15.2751 19.722 15.2543 19.7847C15.2128 19.9312 15.192 20.0777 15.1505 20.2241C15.0467 20.5799 15.0467 20.5799 15.3581 20.6426C15.5034 20.6845 15.6487 20.7054 15.7941 20.7473C15.7941 20.7263 15.8148 20.7263 15.8148 20.7054C15.6903 20.3497 15.5242 19.9731 15.3581 19.5964ZM17.704 21.0193C17.6832 21.0193 17.6625 20.9984 17.6417 20.9984C17.4549 21.1658 17.2473 21.3332 17.0189 21.5215C17.2265 21.6261 17.3926 21.7307 17.6209 21.8353C17.6625 21.5424 17.6832 21.2913 17.704 21.0193ZM15.5864 17.8597C15.5449 17.8806 15.5242 17.8806 15.5242 17.9015C15.3789 18.0898 15.2335 18.2991 15.0882 18.4874C15.0675 18.5083 15.0467 18.5502 15.0674 18.5711C15.1297 18.7385 15.2128 18.9059 15.275 19.0733C15.2958 19.0733 15.3166 19.0524 15.3166 19.0524C15.3996 18.6548 15.5034 18.2572 15.5864 17.8597ZM16.1262 21.0821C16.1055 21.103 16.1055 21.103 16.0847 21.1239C16.1055 21.3541 16.147 21.5633 16.1677 21.7935C16.1677 21.8144 16.2508 21.8353 16.2923 21.8144C16.3961 21.7726 16.4999 21.7098 16.5829 21.647C16.6245 21.6261 16.666 21.5843 16.749 21.5424C16.5414 21.3541 16.3338 21.2076 16.1262 21.0821ZM18.2437 17.6923C18.223 17.755 18.223 17.7969 18.223 17.8178C18.2853 18.1317 18.3683 18.4246 18.4306 18.7176C18.4306 18.7385 18.4721 18.7594 18.4929 18.7803C18.5136 18.7594 18.5344 18.7385 18.5551 18.7176C18.7212 18.32 18.7212 18.32 18.4721 17.9852C18.3891 17.9015 18.3268 17.8178 18.2437 17.6923Z" fill="#1B2230" stroke="#1B2230" stroke-width="4" mask="url(#path-6-inside-2_350_321)"/>
// <path d="M16.9768 6.83095L16.9345 2.81485C16.9345 2.08438 16.3425 1.5 15.6026 1.5C14.8626 1.5 14.2706 2.08438 14.2706 2.81485C14.2706 2.81485 14.5243 4.50537 13.7209 4.75581" stroke="#1B2230" stroke-width="0.5"/>
// <circle cx="16.8605" cy="11.6163" r="1.01163" stroke="#1B2230"/>
//     </svg>},
//     {name : 'Bracelets' , Icon : () =>
//       <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
//       <path d="M17.1932 4.21697C17.4511 3.50837 17.0857 2.72486 16.3771 2.46697C15.6685 2.20907 14.885 2.57445 14.6271 3.28305C14.3692 3.99166 14.7346 4.77517 15.4432 5.03306C16.1518 5.29096 16.9353 4.92558 17.1932 4.21697Z" stroke="#1B2230" stroke-width="0.5" stroke-miterlimit="22.9256"/>
//       <path d="M19.571 6.15708C20.0557 5.57946 19.9804 4.71826 19.4028 4.23354C18.8251 3.74882 17.9639 3.82413 17.4792 4.40175C16.9945 4.97938 17.0698 5.84058 17.6474 6.3253C18.2251 6.81002 19.0863 6.73471 19.571 6.15708Z" stroke="#1B2230" stroke-width="0.5" stroke-miterlimit="22.9256"/>
//       <path d="M21.0927 8.70406C21.7458 8.32702 21.9695 7.49198 21.5924 6.83895C21.2154 6.18592 20.3804 5.96218 19.7273 6.33922C19.0743 6.71626 18.8506 7.5513 19.2276 8.20433C19.6047 8.85736 20.4397 9.0811 21.0927 8.70406Z" stroke="#1B2230" stroke-width="0.5" stroke-miterlimit="22.9256"/>
//       <path d="M21.6468 11.7224C22.3894 11.5915 22.8853 10.8833 22.7544 10.1407C22.6235 9.39809 21.9154 8.9022 21.1728 9.03311C20.4301 9.16402 19.9342 9.87215 20.0652 10.6148C20.1961 11.3574 20.9042 11.8533 21.6468 11.7224Z" stroke="#1B2230" stroke-width="0.5" stroke-miterlimit="22.9256"/>
//       <path d="M22.7627 13.5747C22.8936 12.8321 22.3977 12.124 21.6551 11.9931C20.9125 11.8622 20.2044 12.358 20.0735 13.1007C19.9425 13.8433 20.4384 14.5514 21.1811 14.6823C21.9237 14.8132 22.6318 14.3173 22.7627 13.5747Z" stroke="#1B2230" stroke-width="0.5" stroke-miterlimit="22.9256"/>
//       <path d="M21.5915 16.7841C21.9685 16.1311 21.7448 15.2961 21.0917 14.919C20.4387 14.542 19.6037 14.7657 19.2266 15.4187C18.8496 16.0718 19.0733 16.9068 19.7264 17.2839C20.3794 17.6609 21.2144 17.4372 21.5915 16.7841Z" stroke="#1B2230" stroke-width="0.5" stroke-miterlimit="22.9256"/>
//       <path d="M19.3852 19.4266C19.9628 18.9419 20.0381 18.0807 19.5534 17.503C19.0687 16.9254 18.2075 16.8501 17.6299 17.3348C17.0522 17.8195 16.9769 18.6808 17.4616 19.2584C17.9464 19.836 18.8076 19.9113 19.3852 19.4266Z" stroke="#1B2230" stroke-width="0.5" stroke-miterlimit="22.9256"/>
//       <path d="M16.4103 21.1495C17.1189 20.8916 17.4843 20.1081 17.2264 19.3995C16.9685 18.6908 16.185 18.3255 15.4764 18.5834C14.7678 18.8413 14.4024 19.6248 14.6603 20.3334C14.9182 21.042 15.7017 21.4074 16.4103 21.1495Z" stroke="#1B2230" stroke-width="0.5" stroke-miterlimit="22.9256"/>
//       <path d="M13.0526 22.4865C13.983 22.4865 14.7371 21.7323 14.7371 20.802C14.7371 19.8717 13.983 19.1175 13.0526 19.1175C12.1223 19.1175 11.3682 19.8717 11.3682 20.802C11.3682 21.7323 12.1223 22.4865 13.0526 22.4865Z" stroke="#1B2230" stroke-width="0.5" stroke-miterlimit="22.9256"/>
//       <path d="M11.3324 20.3564C11.5903 19.6478 11.2249 18.8643 10.5163 18.6064C9.80768 18.3485 9.02417 18.7139 8.76628 19.4225C8.50838 20.1311 8.87376 20.9146 9.58236 21.1725C10.291 21.4304 11.0745 21.065 11.3324 20.3564Z" stroke="#1B2230" stroke-width="0.5" stroke-miterlimit="22.9256"/>
//       <path d="M8.53241 19.2856C9.01714 18.708 8.94182 17.8468 8.3642 17.3621C7.78658 16.8774 6.92538 16.9527 6.44065 17.5303C5.95593 18.1079 6.03124 18.9691 6.60887 19.4538C7.18649 19.9386 8.04769 19.8632 8.53241 19.2856Z" stroke="#1B2230" stroke-width="0.5" stroke-miterlimit="22.9256"/>
//       <path d="M6.24457 17.2866C6.89761 16.9096 7.12134 16.0745 6.7443 15.4215C6.36726 14.7685 5.53223 14.5447 4.8792 14.9218C4.22616 15.2988 4.00243 16.1338 4.37947 16.7869C4.75651 17.4399 5.59154 17.6636 6.24457 17.2866Z" stroke="#1B2230" stroke-width="0.5" stroke-miterlimit="22.9256"/>
//       <path d="M4.81966 14.6624C5.56228 14.5315 6.05816 13.8233 5.92726 13.0807C5.79635 12.3381 5.08822 11.8422 4.3456 11.9731C3.60299 12.104 3.1071 12.8122 3.23801 13.5548C3.36891 14.2974 4.07705 14.7933 4.81966 14.6624Z" stroke="#1B2230" stroke-width="0.5" stroke-miterlimit="22.9256"/>
//       <path d="M5.92628 10.5548C6.05719 9.8122 5.5613 9.10407 4.81868 8.97316C4.07607 8.84226 3.36794 9.33814 3.23703 10.0808C3.10612 10.8234 3.60201 11.5315 4.34463 11.6624C5.08724 11.7933 5.79537 11.2974 5.92628 10.5548Z" stroke="#1B2230" stroke-width="0.5" stroke-miterlimit="22.9256"/>
//       <path d="M6.73844 8.22968C7.11548 7.57665 6.89175 6.74161 6.23871 6.36458C5.58568 5.98754 4.75065 6.21127 4.37361 6.8643C3.99657 7.51734 4.2203 8.35237 4.87334 8.72941C5.52637 9.10645 6.3614 8.88271 6.73844 8.22968Z" stroke="#1B2230" stroke-width="0.5" stroke-miterlimit="22.9256"/>
//       <path d="M8.36859 6.32878C8.94622 5.84406 9.02153 4.98286 8.53681 4.40523C8.05209 3.82761 7.19089 3.7523 6.61326 4.23702C6.03564 4.72174 5.96033 5.58294 6.44505 6.16057C6.92977 6.73819 7.79097 6.8135 8.36859 6.32878Z" stroke="#1B2230" stroke-width="0.5" stroke-miterlimit="22.9256"/>
//       </svg>},
//    { name : 'Necklace' , Icon : () => 
//       <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
//       <path d="M18.3228 18.2831V18.2826C18.324 18.2792 18.3237 18.2756 18.325 18.2722C18.3276 18.2612 18.3301 18.251 18.331 18.2396C18.332 18.2257 18.332 18.2116 18.3313 18.1979C18.3313 18.1967 18.3313 18.196 18.331 18.1948C18.3306 18.1921 18.3296 18.1894 18.3291 18.1867C18.3279 18.1748 18.3252 18.1629 18.3218 18.1514C18.3172 18.1359 18.3111 18.1217 18.3035 18.1086L16.6886 15.1042L16.6874 15.102L16.6869 15.1013C16.6862 15.0998 16.6848 15.0981 16.684 15.0967C16.6774 15.0855 16.6709 15.075 16.6628 15.0653C16.6558 15.0563 16.647 15.049 16.6387 15.0414C16.6366 15.039 16.6341 15.0363 16.6317 15.0344C16.6302 15.0334 16.6288 15.0322 16.6278 15.0314C16.6173 15.0234 16.6066 15.0159 16.5944 15.0098C16.5854 15.0052 16.5767 15.002 16.5672 14.9986C16.5628 14.9966 16.5584 14.9947 16.554 14.9935H16.5528L16.5516 14.9927L13.2836 14.0105H13.2831L13.2814 14.0098C13.2758 14.0081 13.2692 14.0074 13.2634 14.0061C13.2554 14.0044 13.2473 14.0025 13.2386 14.001C13.2249 13.9993 13.2113 14 13.1982 14.001C13.1969 14.001 13.1952 14.0008 13.1938 14.001C13.1901 14.001 13.1872 14.0027 13.184 14.003C13.1726 14.0044 13.1614 14.0066 13.1507 14.0095C13.1385 14.0132 13.1266 14.0183 13.1156 14.0241C13.1142 14.0249 13.1122 14.0256 13.1108 14.0263L13.11 14.0268L13.1078 14.028L10.103 15.6444L10.1023 15.6449L10.1015 15.6454C10.0972 15.6478 10.093 15.6515 10.0891 15.6539C10.0808 15.6588 10.0728 15.6636 10.0653 15.67C10.0548 15.6785 10.0451 15.6885 10.0363 15.6987L10.0336 15.7016C10.0336 15.7016 10.0326 15.7031 10.0317 15.704C10.0229 15.715 10.0151 15.7267 10.009 15.7388C10.0037 15.7488 10 15.7588 9.99613 15.7693C9.99516 15.7727 9.99297 15.7756 9.99199 15.779V15.7795L9.99126 15.7812L9.00953 19.0485L9.00904 19.0502V19.0507C9.00782 19.0541 9.00807 19.0577 9.00685 19.0611C9.00417 19.0721 9.00174 19.0823 9.00076 19.0937C8.99979 19.1076 8.99979 19.1217 9.00052 19.1354C9.00052 19.1366 9.00052 19.1373 9.00076 19.1385C9.00295 19.1582 9.00855 19.1777 9.01586 19.1965C9.01756 19.2013 9.01975 19.2062 9.02194 19.2106C9.02389 19.2142 9.02438 19.2186 9.02705 19.2225L10.6456 22.2315C10.6463 22.233 10.6478 22.2347 10.6485 22.2361C10.6551 22.2473 10.6617 22.2578 10.6697 22.2675C10.6768 22.2765 10.6855 22.2838 10.6938 22.2914C10.696 22.2938 10.6984 22.2965 10.7009 22.2984C10.7047 22.3014 10.7096 22.304 10.7138 22.3067C10.7218 22.3123 10.7293 22.3182 10.7379 22.3225C10.751 22.3296 10.7649 22.335 10.7787 22.3391H10.7792L14.0502 23.3223H14.0506C14.0648 23.3267 14.0794 23.3291 14.094 23.3313C14.1035 23.3323 14.113 23.3313 14.1227 23.3313C14.1278 23.3311 14.1329 23.332 14.138 23.3315C14.1417 23.3315 14.1446 23.3298 14.1478 23.3296C14.1592 23.3281 14.1704 23.3259 14.1811 23.323C14.1933 23.3194 14.2052 23.3143 14.2162 23.3084C14.2176 23.3077 14.2196 23.307 14.221 23.3062L14.2218 23.3057L14.224 23.3045L17.2303 21.6877C17.2339 21.6857 17.2371 21.6831 17.241 21.6804C17.2456 21.6775 17.2493 21.675 17.2539 21.6721C17.2702 21.6604 17.2858 21.6473 17.2984 21.6322C17.2994 21.6312 17.2994 21.6307 17.3004 21.6298C17.3091 21.6188 17.3169 21.6071 17.323 21.5949C17.3284 21.585 17.332 21.575 17.3359 21.5645C17.3369 21.5611 17.3391 21.5582 17.3401 21.5548V21.5543L17.3408 21.5526L18.322 18.2851L18.3225 18.2834L18.3228 18.2831Z" stroke="black" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>
//       <path d="M13.882 20.799L12.311 20.3268L11.5337 18.8818L12.0059 17.3107L13.4509 16.5337L15.0217 17.0057L15.799 18.4507L15.327 20.0217L13.882 20.799Z" stroke="black" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>
//       <path d="M15.0142 16.964L16.6704 15.1077" stroke="black" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>
//       <path d="M15.8208 18.4616L18.3833 18.2899" stroke="black" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>
//       <path d="M15.3438 20.0451L17.3873 21.6008" stroke="black" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>
//       <path d="M13.8462 20.8506L14.0609 23.2693" stroke="black" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>
//       <path d="M12.2641 20.3747L10.7515 22.2744" stroke="black" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>
//       <path d="M11.4582 18.8772L9.03955 19.0919" stroke="black" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>
//       <path d="M11.9335 17.2936L10.0771 15.6371" stroke="black" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>
//       <path d="M13.4315 16.4882L13.2168 14.0695" stroke="black" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>
//       <path d="M2.5 2C3 9 9.09882 15.1717 10 16" stroke="black" stroke-width="0.5" stroke-linecap="round"/>
//       <path d="M22 2C21 10 17.5741 14.2247 17 15" stroke="black" stroke-width="0.5"/>
//       </svg>}

//   ]

//   const Metalcolors = [
//     {name : "18K Yellow Gold"  ,imgurl: goldmetalimg},
//     {name : "18K Rose Gold"  ,imgurl: rosemetalimg},
//     {name : "Platinum"  ,imgurl: platinummetalimg}
//   ]
  

//   const DIAMOND_SHAPES = [
//     "Round",
//     "Princess",
//     "Cushion",
//     "Emerald",
//     "Oval",
//     "Pear",
//     "Marquise",
//     "Radiant",
//     "Asscher",
//     "Heart",
//   ]

//   const MENU = [
//     { key: "all", label: "All", rightimgurl: "https://images.pexels.com/photos/33154633/pexels-photo-33154633.jpeg" },
//     {
//       key: "jewelry",
//       label: "Jewelry",
//       rightimgurl: "https://images.pexels.com/photos/32039109/pexels-photo-32039109.jpeg",
//     },
//     {
//       key: "diamond",
//       label: "Diamond",
//       rightimgurl: "https://images.pexels.com/photos/30328042/pexels-photo-30328042.jpeg",
//     },
//     {
//       key: "collections",
//       label: "Collections",
//       rightimgurl: "https://images.pexels.com/photos/9256822/pexels-photo-9256822.jpeg",
//     },
//     {
//       key: "gifts",
//       label: "Gifts",
//       rightimgurl: "https://images.pexels.com/photos/11139357/pexels-photo-11139357.jpeg",
//     },
//     {
//       key: "store",
//       label: "Store Locator",
//       rightimgurl: "https://images.pexels.com/photos/32841967/pexels-photo-32841967.jpeg",
//     },
//     {
//       key: "about",
//       label: "About Us",
//       rightimgurl: "https://images.pexels.com/photos/1927266/pexels-photo-1927266.jpeg",
//     },
//   ]
//   const currentRightImg = MENU.find((m) => m.key === activeMenu)?.rightimgurl

//   function PanelContent({ imgUrl }) {
//     if (activeMenu === "diamond") {
//       return (
//         <motion.div
//           className="grid gap-8 p-8 md:grid-cols-3"
//           variants={staggerContainer}
//           initial="closed"
//           animate="open"
//         >
//           <motion.div className="md:col-span-2" variants={staggerItem}>
//             <div>
//               <motion.h3 className="text-sm font-medium tracking-wide text-foreground/80" variants={staggerItem}>
//                 Diamond Shapes
//               </motion.h3>
//               <motion.ul
//                 className="mt-4 grid grid-cols-2 gap-3 text-sm leading-relaxed md:grid-cols-3"
//                 variants={staggerContainer}
//               >
//                 {DIAMOND_SHAPES.map((shape, index) => {
//                   const ShapeIcon = DiamondShapeSVGs[shape]
//                   return (
//                     <motion.li key={shape} variants={staggerItem} className="cursor-pointer">
//                       <motion.a
//                         className="inline-flex w-full items-center gap-3 rounded-md px-3 py-2 hover:bg-accent/60 transition-colors"
//                         whileHover={prefersReducedMotion ? undefined : { x: 4, scale: 1.02 }}
//                         whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
//                       >
//                         <ShapeIcon />
//                         <span>{shape}</span>
//                       </motion.a>
//                     </motion.li>
//                   )
//                 })}
//               </motion.ul>
//             </div>
//           </motion.div>
//           <motion.div variants={staggerItem}>
//             <RightImage imgUrl={imgUrl} />
//           </motion.div>
//         </motion.div>
//       )
//     }

//     if (activeMenu === "jewelry") {
//       return (
//         <motion.div
//           className="grid gap-8 p-8 md:grid-cols-3"
//           variants={staggerContainer}
//           initial="closed"
//           animate="open"
//         >
//           <motion.div className="md:col-span-2 grid gap-8 sm:grid-cols-2" variants={staggerItem}>
//             <motion.div variants={staggerItem}>
//               <h3 className="text-sm font-medium tracking-wide text-foreground/80">Categories</h3>
//               <motion.ul className="mt-4 space-y-2 text-sm leading-relaxed" variants={staggerContainer}>
//                 {Category.map((item,i) => (
//                   <motion.li key={i} variants={staggerItem} className="cursor-pointer">
//                     <motion.a
//                       className="inline-flex items-center rounded-md pl-2 pr-4 py-2 gap-1.5 hover:bg-accent/60 transition-colors"
//                       whileHover={prefersReducedMotion ? undefined : { x: 4, scale: 1.02 }}
//                     >
//                       <item.Icon />
//                       {item.name}
//                     </motion.a>
//                   </motion.li>
//                 ))}
//               </motion.ul>
//             </motion.div>
//             <motion.div variants={staggerItem}>
//               <h3 className="text-sm font-medium tracking-wide text-foreground/80">Metals</h3>
//               <motion.ul className="mt-4 space-y-2 text-sm leading-relaxed" variants={staggerContainer}>
//                 {Metalcolors.map((item,i) => (
//                   <motion.li key={i} variants={staggerItem} className="cursor-pointer">
//                     <motion.a
//                       className="inline-flex items-center rounded-md pl-1.5 pr-3 py-1 gap-1.5 hover:bg-accent/60 transition-colors"
//                       whileHover={prefersReducedMotion ? undefined : { x: 4, scale: 1.02 }}
//                     >
//                       <img src={item.imgurl} alt="" className="h-10 w-10 object-contain"/>
//                       {item.name}
//                     </motion.a>
//                   </motion.li>
//                 ))}
//               </motion.ul>
//             </motion.div>
//           </motion.div>
//           <motion.div variants={staggerItem}>
//             <RightImage imgUrl={imgUrl} />
//           </motion.div>
//         </motion.div>
//       )
//     }

//     // default / "all" / others
//     return (
//       <motion.div className="grid gap-8 p-8 md:grid-cols-3" variants={staggerContainer} initial="closed" animate="open">
//         <motion.div className="md:col-span-2 grid gap-8 sm:grid-cols-2" variants={staggerItem}>
//           <motion.div variants={staggerItem}>
//             <h3 className="text-sm font-medium tracking-wide text-foreground/80">Highlights</h3>
//             <motion.ul className="mt-4 space-y-2 text-sm leading-relaxed" variants={staggerContainer}>
//               <motion.li variants={staggerItem} className="cursor-pointer">
//                 <motion.a
//                   className="inline-flex items-center justify-between rounded-md px-3 py-2 hover:bg-accent/60 transition-colors"
//                   whileHover={prefersReducedMotion ? undefined : { x: 4, scale: 1.02 }}
//                 >
//                   <span>Gold Ornaments</span>
//                   <span className="pl-0.5 text-[10px] text-[#C9A646]">New</span>
//                 </motion.a>
//               </motion.li>
//               {["Bridal & Heritage", "Daily Wear Elegance", "Limited Editions"].map((item) => (
//                 <motion.li key={item} variants={staggerItem} className="cursor-pointer">
//                   <motion.a
//                     className="inline-flex items-center rounded-md px-3 py-2 hover:bg-accent/60 transition-colors"
//                     whileHover={prefersReducedMotion ? undefined : { x: 4, scale: 1.02 }}
//                   >
//                     {item}
//                   </motion.a>
//                 </motion.li>
//               ))}
//             </motion.ul>
//           </motion.div>
//           <motion.div variants={staggerItem}>
//             <h3 className="text-sm font-medium tracking-wide text-foreground/80">Services</h3>
//             <motion.ul className="mt-4 space-y-2 text-sm leading-relaxed" variants={staggerContainer}>
//               {[
//                 "Custom Design Consults",
//                 "Authentication & Appraisals",
//                 "Care & Restoration",
//                 "Concierge Sourcing",
//               ].map((item) => (
//                 <motion.li key={item} variants={staggerItem} className="cursor-pointer">
//                   <motion.a
//                     className="inline-flex items-center rounded-md px-3 py-2 hover:bg-accent/60 transition-colors"
//                     whileHover={prefersReducedMotion ? undefined : { x: 4, scale: 1.02 }}
//                   >
//                     {item}
//                   </motion.a>
//                 </motion.li>
//               ))}
//             </motion.ul>
//           </motion.div>
//         </motion.div>
//         <motion.div variants={staggerItem}>
//           <RightImage imgUrl={imgUrl} />
//         </motion.div>
//       </motion.div>
//     )
//   }

//   function RightImage({ imgUrl }) {
//     const prefersReducedMotion = useReducedMotion()
//     return (
//       <motion.div
//         className="relative h-60 md:h-80 overflow-hidden bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-zinc-800"
//         whileHover={prefersReducedMotion ? undefined : { scale: 1.02 }}
//         transition={{ duration: 0.3, ease: [0.2, 0, 0.2, 1] }}
//       >
//         <motion.img
//           src={imgUrl || "/placeholder.svg?height=320&width=480&query=menu%20panel%20right%20image"}
//           alt="Feature visual"
//           className="h-full w-full object-cover shadow-2xl cursor-pointer "
//           loading="lazy"
//           initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, scale: 1.05, y: 10 }}
//           animate={
//             prefersReducedMotion
//               ? { opacity: 1 }
//               : {
//                   opacity: 1,
//                   scale: [1, 1.02, 1],
//                   y: 0,
//                   transition: {
//                     opacity: { duration: 0.4 },
//                     scale: { duration: 8, ease: "easeInOut", repeat: Number.POSITIVE_INFINITY },
//                     y: { duration: 0.4 },
//                   },
//                 }
//           }
//           whileHover={prefersReducedMotion ? undefined : { scale: 1.08 }}
//         />
//         {/* Enhanced top gold line with gradient */}
//         <motion.span
//           className="pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#C9A646] via-[#F4E4A6] to-[#C9A646]"
//           aria-hidden="true"
//           initial={prefersReducedMotion ? undefined : { scaleX: 0 }}
//           animate={prefersReducedMotion ? undefined : { scaleX: 1, transition: { duration: 0.6, delay: 0.2 } }}
//         />
//         {/* Glint sweep */}
//         {!prefersReducedMotion && (
//           <>
//             <motion.span
//               aria-hidden="true"
//               className="pointer-events-none absolute inset-0 -skew-x-12"
//               initial={{ x: "-130%", opacity: 0 }}
//               animate={{ x: "130%", opacity: 1 }}
//               transition={{ duration: 1.2, ease: [0.2, 0, 0, 1], repeat: Number.POSITIVE_INFINITY, repeatDelay: 5 }}
//               style={{
//                 background:
//                   "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0) 100%)",
//                 mixBlendMode: "screen",
//               }}
//             />
//             <motion.span
//               aria-hidden="true"
//               className="pointer-events-none absolute inset-0 -skew-x-12"
//               initial={{ x: "-130%", opacity: 0 }}
//               animate={{ x: "130%", opacity: 1 }}
//               transition={{
//                 duration: 0.8,
//                 ease: [0.2, 0, 0, 1],
//                 repeat: Number.POSITIVE_INFINITY,
//                 repeatDelay: 5,
//                 delay: 0.3,
//               }}
//               style={{
//                 background:
//                   "linear-gradient(90deg, rgba(201,166,70,0) 0%, rgba(201,166,70,0.3) 50%, rgba(201,166,70,0) 100%)",
//                 mixBlendMode: "overlay",
//               }}
//             />
//           </>
//         )}
//       </motion.div>
//     )
//   }

//   function CurrencySelector() {
//     const [currency, setCurrency] = useState("EUR")
//     const symbols = {
//       EUR: "€",
//       USD: "$",
//       GBP: "£",
//       AED: "د.إ",
//       INR: "₹",
//     }
//     return (
//       <DropdownMenu>
//         <DropdownMenuTrigger asChild>
//           <Button
//             variant="ghost"
//             className="h-9 gap-2 rounded-md border border-border px-3 text-sm font-normal hover:bg-accent/60 cursor-pointer"
//             aria-label="Select currency"
//           >
//             <Globe className="size-4" aria-hidden="true" />
//             <span className="tracking-wide">
//               {currency} {symbols[currency]}
//             </span>
//             <ChevronDown className="size-4 opacity-70" aria-hidden="true" />
//           </Button>
//         </DropdownMenuTrigger>
//         <DropdownMenuContent align="start" className="w-44 cursor-pointer" >
//           <DropdownMenuLabel>Currency</DropdownMenuLabel>
//           <DropdownMenuSeparator />
//           {["EUR", "USD", "GBP", "AED", "INR"].map((c) => (
//             <DropdownMenuItem key={c} onClick={() => setCurrency(c)} className="cursor-pointer">
//               <span className="mr-2 w-10 text-foreground/70">{c}</span>
//               <span className="ml-auto text-foreground/70">
//                 {c === "EUR" ? "€" : c === "USD" ? "$" : c === "GBP" ? "£" : c === "AED" ? "د.إ" : "₹"}
//               </span>
//             </DropdownMenuItem>
//           ))}
//         </DropdownMenuContent>
//       </DropdownMenu>
//     )
//   }
//   const navigate = useNavigate()
//    const [currency, setCurrency] = useState("EUR")
//      const handleLogin = () => {
//     // Replace with your auth flow or route
//    navigate("/")
//   }


//   return (
//     // <div ref={headerRef} className={cn("relative", className)}>
//     //   {/* Promo strip */}
//     //   <motion.div
//     //     className="w-full bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 text-white"
//     //     initial={promoVariants.initial}
//     //     animate={promoVariants.animate}
//     //     role="region"
//     //     aria-label="Promotional message"
//     //   >
//     //     <div className="mx-auto flex max-w-6xl items-center justify-center px-4 py-2">
//     //       <motion.span
//     //         className="text-xs tracking-wide"
//     //         initial={prefersReducedMotion ? undefined : { letterSpacing: "0.05em" }}
//     //         animate={prefersReducedMotion ? undefined : { letterSpacing: "0.12em", transition: { duration: 0.6 } }}
//     //       >
//     //         FREE SHIPPING ABOVE 95€
//     //       </motion.span>
//     //     </div>
//     //   </motion.div>

//       <header className="sticky top-0 z-50 w-full border-b border-border bg-background supports-[backdrop-filter]:bg-background overflow-hidden">
        
//         {/* Logo row */}
//         <div className="mx-auto grid max-w-full grid-cols-3 items-center px-4 lg:px-20 py-1">
//           {/* Left: mobile hamburger + desktop currency */}
//           <div className="flex items-center h-11">
//             <div className="md:hidden">
//               <motion.button
//                 type="button"
//                 aria-label="Toggle menu"
//                 aria-expanded={mobileOpen}
//                 onClick={() => setMobileOpen((s) => !s)}
//                 className="inline-flex h-11 w-11 items-center justify-center  bg-gradient-to-br from-background to-accent/20  hover:border-border hover:bg-accent/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 transition-all duration-200 cursor-pointer"
//                 whileHover={prefersReducedMotion ? undefined : { scale: 1.05}}
//                 whileTap={prefersReducedMotion ? undefined : { scale: 0.95 }}
//               >
//                 <AnimatePresence initial={false} mode="wait">
//                   {!mobileOpen ? (
//                     <motion.div
//                       key="menu"
//                       initial={{ rotate: -90, opacity: 0 }}
//                       animate={{ rotate: 0, opacity: 1 }}
//                       exit={{ rotate: 90, opacity: 0 }}
//                       transition={{ duration: 0.18 }}
//                     >
//                       <Menu className="size-6" aria-hidden="true" />
//                     </motion.div>
//                   ) : (
//                     <motion.div
//                       key="close"
//                       initial={{ rotate: -90, opacity: 0 }}
//                       animate={{ rotate: 0, opacity: 1 }}
//                       exit={{ rotate: 90, opacity: 0 }}
//                       transition={{ duration: 0.18 }}
//                     >
//                       <X className="size-5" aria-hidden="true" />
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </motion.button>
//             </div>
//             <div className="hidden md:block">
//               <CurrencySelector />
//             </div>
//           </div>

//           {/* Centered logo */}
//           <div className="flex items-center justify-center">
//             <motion.div
//               className="relative inline-block overflow-hidden will-change-transform"
//               style={{ perspective: 800 }}
//               initial={prefersReducedMotion ? undefined : { clipPath: "inset(0 100% 0 0)" }}
//               animate={
//                 prefersReducedMotion
//                   ? undefined
//                   : {
//                       clipPath: "inset(0 0% 0 0)",
//                       transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.05 },
//                     }
//               }
//               whileHover={
//                 prefersReducedMotion
//                   ? undefined
//                   : { rotateX: -1.5, rotateY: 2, scale: 1.01, transition: { duration: 0.5, ease: [0.2, 0, 0.2, 1] } }
//               }
//             >
//               <motion.img
//                 src={logo}
//                 alt="Festo Trade logo"
//                 width={250}
//                 height={75}
//                 loading="eager"
//                 fetchPriority="high"
//                 className="h-14 w-40 md:h-[75px] md:w-[250px] select-none object-contain cursor-pointer"
//                 initial={initialLogo}
//                 animate={animateLogo}
//                 whileHover={
//                   prefersReducedMotion
//                     ? undefined
//                     : { y: -2, scale: 1.015, transition: { duration: 0.3, ease: [0.2, 0, 0.2, 1] } }
//                 }
//                 whileTap={prefersReducedMotion ? undefined : { scale: 0.99 }}
//               />
//               {!prefersReducedMotion && (
//                 <motion.span
//                   aria-hidden="true"
//                   className="pointer-events-none absolute inset-0 -skew-x-12"
//                   variants={shimmerVariants}
//                   initial="rest"
//                   animate="sweep"
//                   whileHover="sweep"
//                   style={{
//                     background:
//                       "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.65) 50%, rgba(255,255,255,0) 100%)",
//                     mixBlendMode: "screen",
//                   }}
//                 />
//               )}
//             </motion.div>
//           </div>

//           {/* Right: lucide icons */}
//           <div className="flex items-center justify-end gap-3 h-11">
//             <div className="flex items-center gap-2 md:hidden">
//               <IconButton label="Search">
//                 <Search className="size-5" aria-hidden="true" />
//               </IconButton>
//               <IconButton label="Cart">
//                 <ShoppingBag className="size-5" aria-hidden="true" />
//               </IconButton>
//             </div>
//             <div className="hidden md:flex md:items-center md:gap-3">
//               <IconButton label="Account">
//                 <User className="size-5" aria-hidden="true" />
//               </IconButton>
//               <IconButton label="Search">
//                 <Search className="size-5" aria-hidden="true" />
//               </IconButton>
//               <IconButton label="Wishlist">
//                 <Heart className="size-5" aria-hidden="true" />
//               </IconButton>
//               <IconButton label="Bag">
//                 <ShoppingBag className="size-5" aria-hidden="true" />
//               </IconButton>
//             </div>
//           </div>
//         </div>

//         {/* Nav row (desktop) */}
//         <motion.nav
//   // <CHANGE> add intent handlers so leaving the nav doesn't close immediately
//   onMouseEnter={cancelClose}
//   onMouseLeave={() => scheduleClose(150)}
//   className="mx-auto hidden !max-w-full items-center justify-center gap-6 px-4 lg:px-20 pb-3 pt-1 text-sm tracking-wide md:flex"
//   variants={staggerContainer}
//   initial="closed"
//   animate="open"
// >
          
//           {MENU.map((item) => (
//             <motion.button
//               key={item.key}
//               type="button"
//               onMouseEnter={() => openPanel(item.key)}
//               onFocus={() => openPanel(item.key)}
//               className={cn("relative px-2 py-1 uppercase text-foreground/90 hover:text-foreground cursor-pointer text-xs")}
//               aria-expanded={panelOpen && activeMenu === item.key}
//               aria-controls="mega-panel"
//               variants={staggerItem}
//               whileHover={prefersReducedMotion ? undefined : { y: -1, scale: 1.05 }}
//               whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
//               transition={{ type: "spring", stiffness: 500, damping: 30, mass: 0.4 }}
//             >
//               {item.label}
//               <AnimatePresence mode="wait">
//                 {panelOpen && activeMenu === item.key && (
//                   <motion.span
//                     layoutId="nav-underline"
//                     className="absolute inset-x-2 -bottom-1 h-[2px] rounded bg-[#C9A646]"
//                     initial={prefersReducedMotion ? undefined : { scaleX: 0 }}
//                     animate={prefersReducedMotion ? undefined : { scaleX: 1 }}
//                     exit={prefersReducedMotion ? undefined : { scaleX: 0 }}
//                     transition={{ duration: 0.25, ease: [0.2, 0, 0, 1] }}
//                   />
//                 )}
//               </AnimatePresence>
//             </motion.button>
//           ))}
//         </motion.nav>

//         {/* Mega panel under sticky header */}
//         <motion.div
//           id="mega-panel"
//           role="region"
//           aria-label="Navigation panel"
//           aria-hidden={!panelOpen}
//          className={cn(
//           `absolute inset-x-0 top-full -mt-px z-50 max-h[80vh] overflow-auto bg-background/98 backdrop-blur-sm md:block ${panelOpen ? "pointer-events-auto" : "pointer-events-none"}`,
//           )}
//           variants={panelVariants}
//           initial="closed"
//           animate={panelOpen ? "open" : "closed"}
//           style={{ transformOrigin: "top center" }}
//           onMouseEnter={cancelClose}
//           onMouseLeave={() => scheduleClose(100)}
//         >
//           <div className="mx-auto h-full max-w-full">
//             <div className="h-full border-b border-l border-r border-border bg-background shadow-2xl px-4 lg:px-14">
//               <PanelContent imgUrl={currentRightImg} />
//             </div>
//           </div>
//         </motion.div>

//         <AnimatePresence>
//           {mobileOpen && (
//             <motion.aside
//               className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm md:hidden "
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               onClick={() => setMobileOpen(false)}
//             >
              

//                 <motion.div
//               className="absolute z-50 inset-y-0 left-0 w-full max-w-sm border-r border-border bg-white backdrop-blur-sm shadow-2xl sm:w-80 flex flex-col"
//               initial={prefersReducedMotion ? { x: 0 } : { x: "-100%", opacity: 0 }}
//               animate={prefersReducedMotion ? { x: 0 } : { x: 0, opacity: 1 }}
//               exit={prefersReducedMotion ? { x: 0 } : { x: "-100%", opacity: 0 }}
//               transition={{ duration: 0.3, ease: [0.2, 0, 0, 1] }}
//               onClick={(e) => e.stopPropagation()}
//               role="dialog"
//               aria-modal="true"
//               aria-label="Mobile menu"
//             >
//               {/* Header */}
//               <div className="border-b border-border/50 bg-gradient-to-r from-background to-accent/10 px-6 py-4">
//                 <motion.div
//                   className="flex items-center justify-between"
//                   initial={prefersReducedMotion ? undefined : { opacity: 0, y: -10 }}
//                   animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
//                   transition={{ delay: 0.1 }}
//                 >
//                   <motion.button
//                     className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-gradient-to-br from-background to-accent/20 hover:bg-accent/60 transition-all duration-200 cursor-pointer"
//                     whileHover={prefersReducedMotion ? undefined : { scale: 1.05 }}
//                     whileTap={prefersReducedMotion ? undefined : { scale: 0.95 }}
//                     aria-label="Wishlist"
//                   >
//                     <Heart className="size-6" aria-hidden="true" />
//                   </motion.button>

//                   <img src={logo} alt="Logo" className="h-[50px] object-contain cursor-pointer" />

//                   <motion.button
//                     className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-gradient-to-br from-background to-accent/20 border border-border/60 hover:bg-accent/60 transition-all duration-200 shadow-sm cursor-pointer"
//                     onClick={() => setMobileOpen(false)}
//                     aria-label="Close menu"
//                     whileHover={prefersReducedMotion ? undefined : { scale: 1.05 }}
//                     whileTap={prefersReducedMotion ? undefined : { scale: 0.95 }}
//                   >
//                     <X className="size-5" aria-hidden="true" />
//                   </motion.button>
//                 </motion.div>
//               </div>

//               {/* Scrollable middle content */}
//               <div className="flex-1 overflow-y-auto px-6 pt-6">
//                 <motion.nav className="space-y-1.5" variants={staggerContainer} initial="closed" animate="open">
//                                 {MENU.map((item, index) => (
//                                   <motion.details key={item.key} className="group" variants={staggerItem}>
//                                     <summary className="flex w-full cursor-pointer list-none items-center justify-between rounded-xl px-4 py-4 bg-transparent hover:bg-accent/60 transition-all duration-200 border border-transparent hover:border-border/30">
//                                       <span className="uppercase font-semibold text-sm tracking-wider">{item.label}</span>
//                                       <motion.span whileHover={prefersReducedMotion ? undefined : { scale: 1.1 }}>
//                                         <ChevronDown
//                                           className="size-4 text-foreground/60 transition-transform duration-300 group-open:rotate-180"
//                                           aria-hidden="true"
//                                         />
//                                       </motion.span>
//                                     </summary>
//                                     <motion.div
//                                       className="pl-4 pt-3 pb-2"
//                                       initial={prefersReducedMotion ? undefined : { opacity: 0, height: 0 }}
//                                       animate={prefersReducedMotion ? undefined : { opacity: 1, height: "auto" }}
//                                       transition={{ delay: 0.3 }}
//                                     >
//                                       {item.key === "diamond" ? (
//                                         <ul className="grid grid-cols-1 gap-2 text-sm leading-relaxed">
//                                           {DIAMOND_SHAPES.map((s) => {
//                                             const ShapeIcon = DiamondShapeSVGs[s]
//                                             return (
//                                               <li key={s} className="cursor-pointer">
//                                                 <motion.a
//                                                   className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 hover:bg-accent/60 transition-colors font-medium"
//                                                   whileHover={prefersReducedMotion ? undefined : { x: 2 }}
//                                                 >
//                                                   <ShapeIcon />
//                                                   <span>{s}</span>
//                                                 </motion.a>
//                                               </li>
//                                             )
//                                           })}
//                                         </ul>
//                                       ) : item.key === "jewelry" ? (
//                                         <ul className="space-y-1 text-sm leading-relaxed">
//                                           {Category.map((subItem) => (
//                                             <li key={subItem} className="cursor-pointer">
//                                               <motion.a
//                                                 className="inline-flex items-center gap-2 w-full rounded-lg px-3 py-2.5 hover:bg-accent/60 transition-colors font-medium"
//                                                 whileHover={prefersReducedMotion ? undefined : { x: 2 }}
//                                               >

//                                                 <subItem.Icon className="size-4 inline-block mr-2" />
//                                                 {subItem.name}
//                                               </motion.a>
//                                             </li>
//                                           ))}
//                                         </ul>
//                                       ) : (
//                                         <ul className="space-y-1 text-sm leading-relaxed">
//                                           {["Featured", "New Arrivals", "Bestsellers"].map((subItem) => (
//                                             <li key={subItem} className="cursor-pointer">
//                                               <motion.a
//                                                 className="block w-full rounded-lg px-3 py-2.5 hover:bg-accent/60 transition-colors font-medium"
//                                                 whileHover={prefersReducedMotion ? undefined : { x: 2 }}
//                                               >
//                                                 {subItem}
//                                               </motion.a>
//                                             </li>
//                                           ))}
//                                         </ul>
//                                       )}
//                                     </motion.div>
//                                   </motion.details>
//                                 ))}
//                               </motion.nav>
//               </div>

//               {/* Fixed bottom section */}
//               <div className="border-t border-border px-6 py-4 space-y-3">
//                 <Dialog>
//                   <DialogTrigger asChild>
//                     <Button variant="outline" className="w-full justify-between bg-transparent">
//                       <span className="flex items-center gap-2">
//                         <Globe className="size-4" />
//                         <span>Currency</span>
//                       </span>
//                       <span className="font-semibold">{currency}</span>
//                     </Button>
//                   </DialogTrigger>
//                   <DialogContent className="sm:max-w-sm">
//                     <DialogHeader>
//                       <DialogTitle>Select currency</DialogTitle>
//                     </DialogHeader>
//                     <div className="grid gap-2">
//                       {["EUR", "USD", "GBP", "AED", "INR"].map((c) => (
//                         <Button
//                           key={c}
//                           variant={currency === c ? "default" : "outline"}
//                           className="justify-between"
//                           onClick={() => setCurrency(c)}
//                         >
//                           <span>{c}</span>
//                           {currency === c && <span className="text-xs opacity-80">Selected</span>}
//                         </Button>
//                       ))}
//                     </div>
//                     <DialogFooter className="mt-2">
//                       <DialogClose asChild>
//                         <Button type="button">Done</Button>
//                       </DialogClose>
//                     </DialogFooter>
//                   </DialogContent>
//                 </Dialog>

//                 <Button className="w-full gap-2" onClick={handleLogin}>
//                   <User className="size-4" />
//                   <span>Login</span>
//                 </Button>
//               </div>
//             </motion.div>


//             </motion.aside>
//           )}
//         </AnimatePresence>
//       </header>
//     // </div>
//   )
// }

// export default Navbar
"use client"

import { useRef, useState, useEffect } from "react"
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"
import { cn } from "@/lib/utils"
import { ChevronDown, Globe, Heart, Search, ShoppingBag, User, X, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import logo from "./logo.webp"

import roundimg from "./images/ht-round.webp"
import pearimg from "./images/ht-pear.webp"
import ovalimg from "./images/ht-oval.webp"
import asscherimg from "./images/ht-asscher.webp"
import marquiseimg from "./images/ht-marquise.webp"
import princessimg from "./images/ht-princess.png"
import cushionimg from "./images/ht-cushion.webp"
import emeraldimg from "./images/ht-emerald.webp"
import heartimg from "./images/ht-heart.webp"
import radientimg from "./images/ht-radient.webp"

import goldmetalimg from "./images/ht-18k-yellow-gold.webp"
import rosemetalimg from "./images/ht-18k-rose-gold.webp"
import platinummetalimg from "./images/ht-platinum.webp"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useNavigate } from "react-router-dom"

// Declare missing variables
const staggerContainer = {
  open: {
    transition: { staggerChildren: 0.075, delayChildren: 0.1 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
}

const staggerItem = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
}

const promoVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
}

const initialLogo = { opacity: 0 }
const animateLogo = { opacity: 1 }

const shimmerVariants = {
  rest: { x: "-100%" },
  sweep: { x: "100%" },
}

const panelVariants = {
  open: {
    opacity: 1,
    clipPath: "inset(0% 0% 0% 0%)",
    transition: { duration: 0.22, ease: [0.2, 0, 0, 1] },
  },
  closed: {
    opacity: 0,
    clipPath: "inset(0% 0% 100% 0%)",
    transition: { duration: 0.16, ease: [0.4, 0, 1, 1] },
  },
}

function IconButton({ children, label, onClick, className }) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.button
      type="button"
      onClick={onClick}
      aria-label={label}
      className={cn(
        "cursor-pointer inline-flex h-10 w-10 items-center justify-center  bg-gradient-to-br from-background to-accent/20 hover:rounded-md  hover:border hover:border-gray-200 hover:shadow-xs hover:bg-accent/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring/90 transition-all duration-200 ",
        className,
      )}
      whileHover={prefersReducedMotion ? undefined : { scale: 1.0, y: 1 }}
      whileTap={prefersReducedMotion ? undefined : { scale: 0.95 }}
    >
      {children}
    </motion.button>
  )
}

const Navbar = ({ className }) => {
  const prefersReducedMotion = useReducedMotion()
  const [panelOpen, setPanelOpen] = useState(false)
  const [activeMenu, setActiveMenu] = useState("all")
  const [mobileOpen, setMobileOpen] = useState(false)

  const headerRef = useRef(null)

  useEffect(() => {
    window.dispatchEvent(new Event(mobileOpen ? "mobile-menu:open" : "mobile-menu:close"))
  }, [mobileOpen])

  // close-intent timer to prevent flicker when moving between button and panel
  const closeTimer = useRef(null)
  const cancelClose = () => {
    if (closeTimer.current) {
      window.clearTimeout(closeTimer.current)
      closeTimer.current = null
    }
  }
  const scheduleClose = (delay = 100) => {
    cancelClose()
    closeTimer.current = window.setTimeout(() => setPanelOpen(false), delay)
  }

  function openPanel(key) {
    cancelClose()
    setActiveMenu(key)
    setPanelOpen(true)
  }

  function closePanel() {
    cancelClose()
    setPanelOpen(false)
  }

  // Close the mega menu on scroll and Escape to avoid odd animations while moving the page
  useEffect(() => {
    const onScroll = () => {
      if (panelOpen) setPanelOpen(false)
    }
    const onKeyDown = (e) => {
      if (e.key === "Escape") setPanelOpen(false)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("keydown", onKeyDown)
    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("keydown", onKeyDown)
    }
  }, [panelOpen])

  const DiamondShapeSVGs = {
    Round: () => <img src={roundimg || "/placeholder.svg"} alt="" className="h-6 w-6 object-cover" />,
    Princess: () => <img src={princessimg || "/placeholder.svg"} alt="" className="h-6 w-6 object-cover" />,
    Cushion: () => <img src={cushionimg || "/placeholder.svg"} alt="" className="h-6 w-6 object-cover" />,
    Emerald: () => <img src={emeraldimg || "/placeholder.svg"} alt="" className="h-6 w-6 object-cover" />,
    Oval: () => <img src={ovalimg || "/placeholder.svg"} alt="" className="h-6 w-6 object-cover" />,
    Pear: () => <img src={pearimg || "/placeholder.svg"} alt="" className="h-6 w-6 object-cover" />,
    Marquise: () => <img src={marquiseimg || "/placeholder.svg"} alt="" className="h-6 w-6 object-cover" />,
    Radiant: () => <img src={radientimg || "/placeholder.svg"} alt="" className="h-6 w-6 object-cover" />,
    Asscher: () => <img src={asscherimg || "/placeholder.svg"} alt="" className="h-6 w-6 object-cover" />,
    Heart: () => <img src={heartimg || "/placeholder.svg"} alt="" className="h-6 w-6 object-cover" />,
  }

  const Category = [

    
   { name : 'Ring' , Icon: () => 
    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.0684 3.20105L14.2057 2.06573C14.1944 2.05013 14.18 2.03745 14.1644 2.0277C14.14 2.00995 14.1099 2 14.0789 2H10.8142C10.7834 2 10.7535 2.00975 10.7288 2.0277C10.7131 2.03745 10.6985 2.05071 10.6874 2.06573L9.82552 3.20105C9.78476 3.2541 9.78554 3.32783 9.82689 3.38049L12.332 6.5762C12.3597 6.6117 12.4024 6.63218 12.447 6.63218C12.4917 6.63218 12.5342 6.61189 12.5621 6.5762L15.0672 3.38049C15.1087 3.32705 15.1087 3.25352 15.0686 3.20105H15.0684Z" stroke="black" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M9.79541 3.28787H15.0671" stroke="black" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M11.5234 3.28787L12.4364 6.63221" stroke="black" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M13.3708 3.2879L12.458 6.63224" stroke="black" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M10.729 2.02771L11.5236 3.28786" stroke="black" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M12.5493 2L11.5234 3.28784" stroke="black" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M13.3709 3.28784L12.5498 2" stroke="black" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M14.1651 2.02771L13.3711 3.28786" stroke="black" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="12.5" cy="15.1364" r="8.3" stroke="black" stroke-width="0.4"/>
    <circle cx="12.5" cy="15.1364" r="6.75455" stroke="black" stroke-width="0.4"/>
    </svg>},
  { name : 'Earrings' ,  Icon : ()=> 
      <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.25587 10.1093L6.66517 8.43489C6.49773 8.22559 6.39307 7.9535 6.39307 7.6814C6.39307 7.40931 6.49773 7.13722 6.6861 6.94884C6.87447 6.76047 7.12563 6.63489 7.3768 6.63489C7.64889 6.63489 7.87912 6.73954 8.06749 6.94884L8.25587 7.15815L8.44424 6.94884C8.63261 6.76047 8.88377 6.63489 9.13493 6.63489C9.40703 6.63489 9.63726 6.73954 9.82563 6.94884C10.014 7.13722 10.1187 7.40931 10.1187 7.6814C10.1187 7.9535 10.014 8.22559 9.82563 8.41396L8.25587 10.1093ZM9.99307 6.76047C9.76284 6.50931 9.46982 6.38373 9.13493 6.38373C8.80005 6.38373 8.50703 6.50931 8.2768 6.76047L8.25587 6.80233L8.214 6.76047C8.0047 6.53024 7.69075 6.38373 7.3768 6.38373C7.06284 6.38373 6.74889 6.50931 6.51866 6.76047C6.28842 7.01163 6.16284 7.32559 6.16284 7.6814C6.16284 8.01629 6.28842 8.35117 6.51866 8.5814L8.25587 10.4233L9.99307 8.5814C10.2233 8.35117 10.3489 8.01629 10.3489 7.6814C10.3489 7.32559 10.2233 7.01163 9.99307 6.76047Z" fill="#1B2230"/>
<mask id="path-2-inside-1_350_321" fill="white">
<path d="M8.25643 23.593C7.71667 23.5512 7.19767 23.4675 6.69942 23.2164C5.99358 22.8607 5.57838 22.2329 5.37078 21.4169C5.14242 20.5589 5.22546 19.6801 5.4123 18.8431C5.53686 18.2363 5.70294 17.6713 5.88978 17.0855C6.15967 16.2694 6.53334 15.4743 6.99006 14.7628C7.32222 14.2188 7.71667 13.7166 8.09035 13.2144C8.17339 13.0888 8.23567 13.1098 8.33947 13.2144C9.23215 14.1351 9.89647 15.2232 10.3947 16.4577C10.8514 17.5667 11.1836 18.7176 11.2666 19.9312C11.3289 20.8937 11.1628 21.8144 10.5816 22.5886C10.2494 23.049 9.79267 23.321 9.27367 23.4465C8.92075 23.5093 8.58859 23.5512 8.25643 23.593ZM9.66811 19.1151C9.64735 19.0733 9.64735 19.0314 9.64735 18.9896C9.54355 18.5293 9.43975 18.0689 9.31519 17.5876C9.29443 17.483 9.25291 17.3575 9.19063 17.2738C8.89999 16.8762 8.58859 16.4786 8.27719 16.0811C8.21491 15.9974 8.17338 15.9974 8.1111 16.0811C7.7997 16.4996 7.46755 16.939 7.15615 17.3575C7.09387 17.4412 7.05235 17.5249 7.03159 17.6295C6.90703 18.1317 6.78246 18.6548 6.6579 19.157C6.63714 19.2198 6.63714 19.3035 6.6579 19.3453C6.8655 19.8057 7.05235 20.266 7.25995 20.7263C7.28071 20.7891 7.34298 20.831 7.3845 20.8728C7.5921 21.0402 7.82047 21.1867 8.02807 21.3332C8.11111 21.3959 8.17339 21.3959 8.25643 21.3332C8.46403 21.1448 8.69239 20.9774 8.89999 20.7891C8.94151 20.7473 9.00379 20.6845 9.02455 20.6217C9.19063 20.2451 9.33595 19.8475 9.48127 19.4709C9.56431 19.3662 9.62659 19.2198 9.66811 19.1151ZM6.32575 18.2572C6.38803 18.2154 6.40879 18.1945 6.42955 18.1526C6.59563 17.9224 6.76171 17.6923 6.92779 17.4621C6.96931 17.4202 6.99006 17.3575 6.99006 17.2947C7.09386 16.8553 7.19766 16.4159 7.30146 15.9974C7.34298 15.83 7.38451 15.6417 7.42603 15.4324C7.36375 15.4533 7.34299 15.4533 7.32223 15.4743C7.01082 15.7463 6.69942 15.9974 6.38802 16.2903C6.3465 16.3322 6.32575 16.3949 6.32575 16.4577C6.30499 16.9808 6.30499 17.5249 6.30499 18.0689C6.30499 18.1317 6.30499 18.1735 6.32575 18.2572ZM10.3532 22.0446C10.3947 22.0446 10.4155 22.0446 10.4362 22.0655C10.54 22.0864 10.5608 22.0237 10.5193 21.919C10.3739 21.5424 10.2286 21.1658 10.0833 20.7891C10.0625 20.7473 9.97951 20.6845 9.93799 20.7054C9.70963 20.7473 9.48127 20.7682 9.25291 20.831C9.19063 20.8519 9.12835 20.9147 9.10759 20.9774C9.06607 21.2285 9.06607 21.5005 9.02455 21.7726C9.00379 21.8772 9.04531 21.919 9.12835 21.919C9.54355 21.9609 9.95875 22.0027 10.3532 22.0446ZM10.0003 18.0271C10.0003 17.9852 10.021 17.9224 10.021 17.8597C10.0418 17.3784 10.0625 16.8971 10.0833 16.4159C10.0833 16.3531 10.0418 16.2694 10.0003 16.2275C9.68887 15.9764 9.39823 15.7463 9.08683 15.4952C9.06607 15.4743 9.02455 15.4533 8.96227 15.4324C8.98303 15.5161 8.98303 15.5579 8.98303 15.5998C9.08683 16.0392 9.21139 16.4996 9.29443 16.939C9.37747 17.3993 9.70963 17.6713 9.95875 18.0061C9.95875 18.048 9.97951 18.0271 10.0003 18.0271ZM5.95206 22.0446C6.40878 22.0027 6.82399 21.9609 7.23919 21.919C7.32223 21.919 7.36375 21.8772 7.34299 21.7726C7.30147 21.5424 7.28071 21.3122 7.25995 21.0821C7.23919 20.9774 7.19767 20.9147 7.11463 20.8937C6.88626 20.831 6.67866 20.7682 6.47106 20.7263C6.38802 20.7054 6.32575 20.7263 6.30499 20.831C6.18043 21.1867 6.05586 21.5424 5.9313 21.8981C5.84826 22.0237 5.86902 22.0655 5.95206 22.0446ZM8.2149 13.4446C8.17338 13.5073 8.15263 13.5283 8.15263 13.5492C7.98655 14.0514 7.84122 14.5536 7.6959 15.0558C7.67514 15.0976 7.69591 15.1813 7.73743 15.2232C7.86199 15.3696 8.00731 15.5161 8.15263 15.6626C8.21491 15.7253 8.27719 15.7253 8.33947 15.6626C8.46403 15.5161 8.58859 15.3906 8.71315 15.2441C8.75467 15.2022 8.77543 15.0976 8.75467 15.0558C8.63011 14.6582 8.52631 14.2815 8.40175 13.9049C8.31871 13.7794 8.25642 13.6329 8.2149 13.4446ZM11.059 19.701C11.0383 19.701 11.0175 19.701 11.0175 19.722C10.7476 19.994 10.4985 20.266 10.2286 20.538C10.2079 20.5799 10.1871 20.6636 10.2079 20.7054C10.3324 21.0402 10.457 21.375 10.5816 21.6889C10.6231 21.7935 10.6646 21.8772 10.7061 21.9818C11.0383 21.6261 11.2251 20.1614 11.059 19.701ZM10.1248 20.4125C10.1664 20.3915 10.1871 20.3915 10.1871 20.3915C10.4362 20.1404 10.6853 19.8684 10.9345 19.6173C10.9552 19.5964 10.9345 19.4918 10.9137 19.4499C10.6646 19.1361 10.4155 18.8431 10.1871 18.5292C10.1248 18.4456 10.0833 18.4665 10.0418 18.5711C10.0003 18.6966 9.95875 18.8222 9.89647 18.9268C9.81343 19.0733 9.81343 19.2198 9.87571 19.3662C9.89647 19.4081 9.89647 19.4499 9.89647 19.4918C9.95875 19.7847 10.0418 20.0986 10.1248 20.4125ZM8.2149 23.321C8.25642 23.2791 8.27719 23.2582 8.27719 23.2373C8.46403 22.8607 8.65087 22.4631 8.81695 22.0864C8.83771 22.0446 8.79619 21.9609 8.75467 21.94C8.58859 21.8353 8.40175 21.7516 8.23567 21.6679C8.19415 21.647 8.15262 21.647 8.1111 21.6679C7.94502 21.7516 7.77894 21.8563 7.5921 21.9609C7.50906 22.0027 7.50907 22.0446 7.55059 22.1283C7.65439 22.3166 7.75819 22.5049 7.84123 22.6933C7.98655 22.8816 8.09034 23.0908 8.2149 23.321ZM10.976 19.3035C10.9968 19.3035 11.0175 19.2825 11.0383 19.2825C10.893 18.32 10.6231 17.4202 10.2494 16.4996C10.2286 16.5623 10.2079 16.5833 10.2079 16.6251C10.1871 17.1482 10.1664 17.6713 10.1456 18.1735C10.1456 18.2363 10.1871 18.32 10.2286 18.3828C10.3947 18.6129 10.5816 18.8222 10.7684 19.0524C10.8307 19.1361 10.9137 19.2198 10.976 19.3035ZM10.0003 16.0601C10.021 16.0392 10.021 16.0392 10.021 16.0183C9.58507 15.0976 9.06607 14.2606 8.38099 13.5283C8.36023 13.5701 8.36023 13.612 8.38099 13.6329C8.50555 14.0514 8.65087 14.4489 8.77543 14.8674C8.83771 15.0767 8.94151 15.2232 9.10759 15.3487C9.37747 15.537 9.62659 15.7672 9.89647 15.9555C9.93799 16.0183 9.97951 16.0183 10.0003 16.0601ZM5.7237 22.0027C5.86902 21.5842 6.01434 21.1658 6.15966 20.7682C6.20118 20.6636 6.18043 20.6008 6.11815 20.538C5.91055 20.3078 5.70295 20.0986 5.49535 19.8894C5.47459 19.8684 5.43307 19.8475 5.39155 19.8057C5.26698 20.3915 5.43306 21.647 5.7237 22.0027ZM6.2427 20.4543C6.26346 20.4125 6.28422 20.4125 6.28422 20.3915C6.36726 20.0568 6.42955 19.7429 6.51259 19.4081C6.51259 19.3662 6.53335 19.3244 6.51259 19.2825C6.42955 19.0733 6.3465 18.885 6.2427 18.6757C6.20118 18.6966 6.18042 18.6966 6.15966 18.7176C5.95206 18.9896 5.7237 19.2616 5.53686 19.5546C5.5161 19.5755 5.53686 19.6801 5.55762 19.722C5.7237 19.9312 5.91054 20.1195 6.09739 20.3288C6.13891 20.3706 6.18042 20.4125 6.2427 20.4543ZM5.49535 19.429C5.51611 19.3872 5.53686 19.3244 5.57838 19.2825C5.74446 19.0524 5.91054 18.8431 6.07662 18.6339C6.15966 18.5292 6.20119 18.4037 6.20119 18.2572C6.20119 17.9015 6.22195 17.5249 6.22195 17.1691C6.22195 17.0227 6.22195 16.8971 6.22195 16.7297C5.95207 17.0018 5.39155 19.0942 5.49535 19.429ZM10.6231 22.2748C10.6023 22.2538 10.6023 22.2329 10.6023 22.2329C10.1248 22.1701 9.62659 22.1074 9.14911 22.0446C9.14911 22.0655 9.12835 22.0864 9.12835 22.0864C9.29443 22.4003 9.46051 22.7351 9.62659 23.049C9.66811 23.1327 9.73039 23.1118 9.79267 23.0908C9.95875 22.9653 10.1456 22.8397 10.3117 22.6933C10.4155 22.5677 10.4985 22.4003 10.6231 22.2748ZM7.98655 13.612C7.96579 13.612 7.96579 13.591 7.94503 13.591C7.38451 14.3234 6.88627 15.1185 6.51259 15.9974C6.55411 15.9974 6.57486 15.9974 6.57486 15.9764C6.8655 15.7253 7.17691 15.4743 7.46755 15.2022C7.50907 15.1604 7.52983 15.1185 7.55059 15.0558C7.65439 14.7419 7.75819 14.428 7.84123 14.1142C7.88275 13.9468 7.92427 13.7794 7.98655 13.612ZM7.42603 22.1283C7.38451 22.1911 7.36375 22.2329 7.32223 22.2748C7.17691 22.5259 7.05234 22.777 6.88626 23.0071C6.82398 23.1117 6.82399 23.1745 6.94855 23.2164C7.28071 23.3001 7.63363 23.3628 7.96579 23.4256C8.04883 23.4465 8.09035 23.3838 8.02807 23.3001C7.96579 23.1745 7.90351 23.0699 7.84123 22.9444C7.71667 22.6723 7.59211 22.4003 7.42603 22.1283ZM7.2807 22.1074C7.2807 22.0864 7.25995 22.0655 7.25995 22.0655C6.78247 22.1074 6.30498 22.1701 5.84826 22.212C5.84826 22.2538 5.84826 22.2538 5.84826 22.2538C6.05586 22.5886 6.32574 22.8397 6.6579 23.028C6.67866 23.049 6.7617 23.0071 6.78246 22.9862C6.8655 22.8607 6.94854 22.7142 7.01083 22.5886C7.09387 22.4212 7.1769 22.2748 7.2807 22.1074ZM8.54707 23.4465C8.81695 23.3838 9.10759 23.321 9.39823 23.2373C9.48127 23.2164 9.50203 23.1745 9.46051 23.0699C9.31519 22.7979 9.16987 22.5049 9.02455 22.2329C8.96227 22.1074 8.94151 22.1074 8.87923 22.2329C8.71315 22.5677 8.56783 22.8816 8.4225 23.2164C8.40174 23.2582 8.38099 23.321 8.38099 23.3628C8.40175 23.4047 8.48479 23.4256 8.54707 23.4465ZM7.5921 15.3487C7.44678 15.9555 7.32222 16.4996 7.1769 17.0645C7.21842 17.0645 7.21843 17.0645 7.21843 17.0645C7.48831 16.7088 7.77895 16.3322 8.04883 15.9764C8.06959 15.9555 8.06959 15.8927 8.04883 15.8509C7.92427 15.6835 7.77894 15.537 7.5921 15.3487ZM9.14911 17.0018C9.14911 16.939 9.16987 16.9181 9.16987 16.8971C9.06607 16.4368 8.96227 15.9764 8.83771 15.5161C8.81695 15.4324 8.77543 15.4324 8.71315 15.4743C8.65087 15.537 8.58859 15.5998 8.50555 15.6835C8.29795 15.9137 8.29795 15.9137 8.48479 16.1648C8.71315 16.4159 8.92075 16.6879 9.14911 17.0018ZM9.75115 19.4081C9.73039 19.4081 9.70963 19.4081 9.70963 19.4081C9.54355 19.8266 9.37747 20.2241 9.21139 20.6426C9.23215 20.6636 9.23215 20.6636 9.25291 20.6845C9.48127 20.6426 9.70963 20.6008 9.93799 20.538C9.95875 20.538 10.0003 20.4543 9.97951 20.4125C9.95875 20.266 9.91723 20.1404 9.89647 19.994C9.83419 19.8057 9.79267 19.6173 9.75115 19.4081ZM6.63715 19.5964C6.61639 19.5964 6.61638 19.5964 6.59562 19.5964C6.57486 19.6592 6.55411 19.722 6.53335 19.7847C6.49183 19.9312 6.47107 20.0777 6.42955 20.2241C6.32575 20.5799 6.32575 20.5799 6.63715 20.6426C6.78247 20.6845 6.92778 20.7054 7.0731 20.7473C7.0731 20.7263 7.09386 20.7263 7.09386 20.7054C6.9693 20.3497 6.80323 19.9731 6.63715 19.5964ZM8.98303 21.0193C8.96227 21.0193 8.94151 20.9984 8.92075 20.9984C8.73391 21.1658 8.52631 21.3332 8.29795 21.5215C8.50555 21.6261 8.67163 21.7307 8.89999 21.8353C8.94151 21.5424 8.96227 21.2913 8.98303 21.0193ZM6.8655 17.8597C6.82398 17.8806 6.80322 17.8806 6.80322 17.9015C6.6579 18.0898 6.51258 18.2991 6.36726 18.4874C6.3465 18.5083 6.32574 18.5502 6.3465 18.5711C6.40878 18.7385 6.49182 18.9059 6.5541 19.0733C6.57486 19.0733 6.59562 19.0524 6.59562 19.0524C6.67866 18.6548 6.78246 18.2572 6.8655 17.8597ZM7.40526 21.0821C7.3845 21.103 7.38451 21.103 7.36375 21.1239C7.38451 21.3541 7.42603 21.5633 7.44679 21.7935C7.44679 21.8144 7.52983 21.8353 7.57135 21.8144C7.67515 21.7726 7.77895 21.7098 7.86199 21.647C7.90351 21.6261 7.94503 21.5843 8.02807 21.5424C7.82047 21.3541 7.61286 21.2076 7.40526 21.0821ZM9.52279 17.6923C9.50203 17.755 9.50203 17.7969 9.50203 17.8178C9.56431 18.1317 9.64735 18.4246 9.70963 18.7176C9.70963 18.7385 9.75115 18.7594 9.77191 18.7803C9.79267 18.7594 9.81343 18.7385 9.83419 18.7176C10.0003 18.32 10.0003 18.32 9.75115 17.9852C9.66811 17.9015 9.60583 17.8178 9.52279 17.6923Z"/>
</mask>
<path d="M8.25643 23.593C7.71667 23.5512 7.19767 23.4675 6.69942 23.2164C5.99358 22.8607 5.57838 22.2329 5.37078 21.4169C5.14242 20.5589 5.22546 19.6801 5.4123 18.8431C5.53686 18.2363 5.70294 17.6713 5.88978 17.0855C6.15967 16.2694 6.53334 15.4743 6.99006 14.7628C7.32222 14.2188 7.71667 13.7166 8.09035 13.2144C8.17339 13.0888 8.23567 13.1098 8.33947 13.2144C9.23215 14.1351 9.89647 15.2232 10.3947 16.4577C10.8514 17.5667 11.1836 18.7176 11.2666 19.9312C11.3289 20.8937 11.1628 21.8144 10.5816 22.5886C10.2494 23.049 9.79267 23.321 9.27367 23.4465C8.92075 23.5093 8.58859 23.5512 8.25643 23.593ZM9.66811 19.1151C9.64735 19.0733 9.64735 19.0314 9.64735 18.9896C9.54355 18.5293 9.43975 18.0689 9.31519 17.5876C9.29443 17.483 9.25291 17.3575 9.19063 17.2738C8.89999 16.8762 8.58859 16.4786 8.27719 16.0811C8.21491 15.9974 8.17338 15.9974 8.1111 16.0811C7.7997 16.4996 7.46755 16.939 7.15615 17.3575C7.09387 17.4412 7.05235 17.5249 7.03159 17.6295C6.90703 18.1317 6.78246 18.6548 6.6579 19.157C6.63714 19.2198 6.63714 19.3035 6.6579 19.3453C6.8655 19.8057 7.05235 20.266 7.25995 20.7263C7.28071 20.7891 7.34298 20.831 7.3845 20.8728C7.5921 21.0402 7.82047 21.1867 8.02807 21.3332C8.11111 21.3959 8.17339 21.3959 8.25643 21.3332C8.46403 21.1448 8.69239 20.9774 8.89999 20.7891C8.94151 20.7473 9.00379 20.6845 9.02455 20.6217C9.19063 20.2451 9.33595 19.8475 9.48127 19.4709C9.56431 19.3662 9.62659 19.2198 9.66811 19.1151ZM6.32575 18.2572C6.38803 18.2154 6.40879 18.1945 6.42955 18.1526C6.59563 17.9224 6.76171 17.6923 6.92779 17.4621C6.96931 17.4202 6.99006 17.3575 6.99006 17.2947C7.09386 16.8553 7.19766 16.4159 7.30146 15.9974C7.34298 15.83 7.38451 15.6417 7.42603 15.4324C7.36375 15.4533 7.34299 15.4533 7.32223 15.4743C7.01082 15.7463 6.69942 15.9974 6.38802 16.2903C6.3465 16.3322 6.32575 16.3949 6.32575 16.4577C6.30499 16.9808 6.30499 17.5249 6.30499 18.0689C6.30499 18.1317 6.30499 18.1735 6.32575 18.2572ZM10.3532 22.0446C10.3947 22.0446 10.4155 22.0446 10.4362 22.0655C10.54 22.0864 10.5608 22.0237 10.5193 21.919C10.3739 21.5424 10.2286 21.1658 10.0833 20.7891C10.0625 20.7473 9.97951 20.6845 9.93799 20.7054C9.70963 20.7473 9.48127 20.7682 9.25291 20.831C9.19063 20.8519 9.12835 20.9147 9.10759 20.9774C9.06607 21.2285 9.06607 21.5005 9.02455 21.7726C9.00379 21.8772 9.04531 21.919 9.12835 21.919C9.54355 21.9609 9.95875 22.0027 10.3532 22.0446ZM10.0003 18.0271C10.0003 17.9852 10.021 17.9224 10.021 17.8597C10.0418 17.3784 10.0625 16.8971 10.0833 16.4159C10.0833 16.3531 10.0418 16.2694 10.0003 16.2275C9.68887 15.9764 9.39823 15.7463 9.08683 15.4952C9.06607 15.4743 9.02455 15.4533 8.96227 15.4324C8.98303 15.5161 8.98303 15.5579 8.98303 15.5998C9.08683 16.0392 9.21139 16.4996 9.29443 16.939C9.37747 17.3993 9.70963 17.6713 9.95875 18.0061C9.95875 18.048 9.97951 18.0271 10.0003 18.0271ZM5.95206 22.0446C6.40878 22.0027 6.82399 21.9609 7.23919 21.919C7.32223 21.919 7.36375 21.8772 7.34299 21.7726C7.30147 21.5424 7.28071 21.3122 7.25995 21.0821C7.23919 20.9774 7.19767 20.9147 7.11463 20.8937C6.88626 20.831 6.67866 20.7682 6.47106 20.7263C6.38802 20.7054 6.32575 20.7263 6.30499 20.831C6.18043 21.1867 6.05586 21.5424 5.9313 21.8981C5.84826 22.0237 5.86902 22.0655 5.95206 22.0446ZM8.2149 13.4446C8.17338 13.5073 8.15263 13.5283 8.15263 13.5492C7.98655 14.0514 7.84122 14.5536 7.6959 15.0558C7.67514 15.0976 7.69591 15.1813 7.73743 15.2232C7.86199 15.3696 8.00731 15.5161 8.15263 15.6626C8.21491 15.7253 8.27719 15.7253 8.33947 15.6626C8.46403 15.5161 8.58859 15.3906 8.71315 15.2441C8.75467 15.2022 8.77543 15.0976 8.75467 15.0558C8.63011 14.6582 8.52631 14.2815 8.40175 13.9049C8.31871 13.7794 8.25642 13.6329 8.2149 13.4446ZM11.059 19.701C11.0383 19.701 11.0175 19.701 11.0175 19.722C10.7476 19.994 10.4985 20.266 10.2286 20.538C10.2079 20.5799 10.1871 20.6636 10.2079 20.7054C10.3324 21.0402 10.457 21.375 10.5816 21.6889C10.6231 21.7935 10.6646 21.8772 10.7061 21.9818C11.0383 21.6261 11.2251 20.1614 11.059 19.701ZM10.1248 20.4125C10.1664 20.3915 10.1871 20.3915 10.1871 20.3915C10.4362 20.1404 10.6853 19.8684 10.9345 19.6173C10.9552 19.5964 10.9345 19.4918 10.9137 19.4499C10.6646 19.1361 10.4155 18.8431 10.1871 18.5292C10.1248 18.4456 10.0833 18.4665 10.0418 18.5711C10.0003 18.6966 9.95875 18.8222 9.89647 18.9268C9.81343 19.0733 9.81343 19.2198 9.87571 19.3662C9.89647 19.4081 9.89647 19.4499 9.89647 19.4918C9.95875 19.7847 10.0418 20.0986 10.1248 20.4125ZM8.2149 23.321C8.25642 23.2791 8.27719 23.2582 8.27719 23.2373C8.46403 22.8607 8.65087 22.4631 8.81695 22.0864C8.83771 22.0446 8.79619 21.9609 8.75467 21.94C8.58859 21.8353 8.40175 21.7516 8.23567 21.6679C8.19415 21.647 8.15262 21.647 8.1111 21.6679C7.94502 21.7516 7.77894 21.8563 7.5921 21.9609C7.50906 22.0027 7.50907 22.0446 7.55059 22.1283C7.65439 22.3166 7.75819 22.5049 7.84123 22.6933C7.98655 22.8816 8.09034 23.0908 8.2149 23.321ZM10.976 19.3035C10.9968 19.3035 11.0175 19.2825 11.0383 19.2825C10.893 18.32 10.6231 17.4202 10.2494 16.4996C10.2286 16.5623 10.2079 16.5833 10.2079 16.6251C10.1871 17.1482 10.1664 17.6713 10.1456 18.1735C10.1456 18.2363 10.1871 18.32 10.2286 18.3828C10.3947 18.6129 10.5816 18.8222 10.7684 19.0524C10.8307 19.1361 10.9137 19.2198 10.976 19.3035ZM10.0003 16.0601C10.021 16.0392 10.021 16.0392 10.021 16.0183C9.58507 15.0976 9.06607 14.2606 8.38099 13.5283C8.36023 13.5701 8.36023 13.612 8.38099 13.6329C8.50555 14.0514 8.65087 14.4489 8.77543 14.8674C8.83771 15.0767 8.94151 15.2232 9.10759 15.3487C9.37747 15.537 9.62659 15.7672 9.89647 15.9555C9.93799 16.0183 9.97951 16.0183 10.0003 16.0601ZM5.7237 22.0027C5.86902 21.5842 6.01434 21.1658 6.15966 20.7682C6.20118 20.6636 6.18043 20.6008 6.11815 20.538C5.91055 20.3078 5.70295 20.0986 5.49535 19.8894C5.47459 19.8684 5.43307 19.8475 5.39155 19.8057C5.26698 20.3915 5.43306 21.647 5.7237 22.0027ZM6.2427 20.4543C6.26346 20.4125 6.28422 20.4125 6.28422 20.3915C6.36726 20.0568 6.42955 19.7429 6.51259 19.4081C6.51259 19.3662 6.53335 19.3244 6.51259 19.2825C6.42955 19.0733 6.3465 18.885 6.2427 18.6757C6.20118 18.6966 6.18042 18.6966 6.15966 18.7176C5.95206 18.9896 5.7237 19.2616 5.53686 19.5546C5.5161 19.5755 5.53686 19.6801 5.55762 19.722C5.7237 19.9312 5.91054 20.1195 6.09739 20.3288C6.13891 20.3706 6.18042 20.4125 6.2427 20.4543ZM5.49535 19.429C5.51611 19.3872 5.53686 19.3244 5.57838 19.2825C5.74446 19.0524 5.91054 18.8431 6.07662 18.6339C6.15966 18.5292 6.20119 18.4037 6.20119 18.2572C6.20119 17.9015 6.22195 17.5249 6.22195 17.1691C6.22195 17.0227 6.22195 16.8971 6.22195 16.7297C5.95207 17.0018 5.39155 19.0942 5.49535 19.429ZM10.6231 22.2748C10.6023 22.2538 10.6023 22.2329 10.6023 22.2329C10.1248 22.1701 9.62659 22.1074 9.14911 22.0446C9.14911 22.0655 9.12835 22.0864 9.12835 22.0864C9.29443 22.4003 9.46051 22.7351 9.62659 23.049C9.66811 23.1327 9.73039 23.1118 9.79267 23.0908C9.95875 22.9653 10.1456 22.8397 10.3117 22.6933C10.4155 22.5677 10.4985 22.4003 10.6231 22.2748ZM7.98655 13.612C7.96579 13.612 7.96579 13.591 7.94503 13.591C7.38451 14.3234 6.88627 15.1185 6.51259 15.9974C6.55411 15.9974 6.57486 15.9974 6.57486 15.9764C6.8655 15.7253 7.17691 15.4743 7.46755 15.2022C7.50907 15.1604 7.52983 15.1185 7.55059 15.0558C7.65439 14.7419 7.75819 14.428 7.84123 14.1142C7.88275 13.9468 7.92427 13.7794 7.98655 13.612ZM7.42603 22.1283C7.38451 22.1911 7.36375 22.2329 7.32223 22.2748C7.17691 22.5259 7.05234 22.777 6.88626 23.0071C6.82398 23.1117 6.82399 23.1745 6.94855 23.2164C7.28071 23.3001 7.63363 23.3628 7.96579 23.4256C8.04883 23.4465 8.09035 23.3838 8.02807 23.3001C7.96579 23.1745 7.90351 23.0699 7.84123 22.9444C7.71667 22.6723 7.59211 22.4003 7.42603 22.1283ZM7.2807 22.1074C7.2807 22.0864 7.25995 22.0655 7.25995 22.0655C6.78247 22.1074 6.30498 22.1701 5.84826 22.212C5.84826 22.2538 5.84826 22.2538 5.84826 22.2538C6.05586 22.5886 6.32574 22.8397 6.6579 23.028C6.67866 23.049 6.7617 23.0071 6.78246 22.9862C6.8655 22.8607 6.94854 22.7142 7.01083 22.5886C7.09387 22.4212 7.1769 22.2748 7.2807 22.1074ZM8.54707 23.4465C8.81695 23.3838 9.10759 23.321 9.39823 23.2373C9.48127 23.2164 9.50203 23.1745 9.46051 23.0699C9.31519 22.7979 9.16987 22.5049 9.02455 22.2329C8.96227 22.1074 8.94151 22.1074 8.87923 22.2329C8.71315 22.5677 8.56783 22.8816 8.4225 23.2164C8.40174 23.2582 8.38099 23.321 8.38099 23.3628C8.40175 23.4047 8.48479 23.4256 8.54707 23.4465ZM7.5921 15.3487C7.44678 15.9555 7.32222 16.4996 7.1769 17.0645C7.21842 17.0645 7.21843 17.0645 7.21843 17.0645C7.48831 16.7088 7.77895 16.3322 8.04883 15.9764C8.06959 15.9555 8.06959 15.8927 8.04883 15.8509C7.92427 15.6835 7.77894 15.537 7.5921 15.3487ZM9.14911 17.0018C9.14911 16.939 9.16987 16.9181 9.16987 16.8971C9.06607 16.4368 8.96227 15.9764 8.83771 15.5161C8.81695 15.4324 8.77543 15.4324 8.71315 15.4743C8.65087 15.537 8.58859 15.5998 8.50555 15.6835C8.29795 15.9137 8.29795 15.9137 8.48479 16.1648C8.71315 16.4159 8.92075 16.6879 9.14911 17.0018ZM9.75115 19.4081C9.73039 19.4081 9.70963 19.4081 9.70963 19.4081C9.54355 19.8266 9.37747 20.2241 9.21139 20.6426C9.23215 20.6636 9.23215 20.6636 9.25291 20.6845C9.48127 20.6426 9.70963 20.6008 9.93799 20.538C9.95875 20.538 10.0003 20.4543 9.97951 20.4125C9.95875 20.266 9.91723 20.1404 9.89647 19.994C9.83419 19.8057 9.79267 19.6173 9.75115 19.4081ZM6.63715 19.5964C6.61639 19.5964 6.61638 19.5964 6.59562 19.5964C6.57486 19.6592 6.55411 19.722 6.53335 19.7847C6.49183 19.9312 6.47107 20.0777 6.42955 20.2241C6.32575 20.5799 6.32575 20.5799 6.63715 20.6426C6.78247 20.6845 6.92778 20.7054 7.0731 20.7473C7.0731 20.7263 7.09386 20.7263 7.09386 20.7054C6.9693 20.3497 6.80323 19.9731 6.63715 19.5964ZM8.98303 21.0193C8.96227 21.0193 8.94151 20.9984 8.92075 20.9984C8.73391 21.1658 8.52631 21.3332 8.29795 21.5215C8.50555 21.6261 8.67163 21.7307 8.89999 21.8353C8.94151 21.5424 8.96227 21.2913 8.98303 21.0193ZM6.8655 17.8597C6.82398 17.8806 6.80322 17.8806 6.80322 17.9015C6.6579 18.0898 6.51258 18.2991 6.36726 18.4874C6.3465 18.5083 6.32574 18.5502 6.3465 18.5711C6.40878 18.7385 6.49182 18.9059 6.5541 19.0733C6.57486 19.0733 6.59562 19.0524 6.59562 19.0524C6.67866 18.6548 6.78246 18.2572 6.8655 17.8597ZM7.40526 21.0821C7.3845 21.103 7.38451 21.103 7.36375 21.1239C7.38451 21.3541 7.42603 21.5633 7.44679 21.7935C7.44679 21.8144 7.52983 21.8353 7.57135 21.8144C7.67515 21.7726 7.77895 21.7098 7.86199 21.647C7.90351 21.6261 7.94503 21.5843 8.02807 21.5424C7.82047 21.3541 7.61286 21.2076 7.40526 21.0821ZM9.52279 17.6923C9.50203 17.755 9.50203 17.7969 9.50203 17.8178C9.56431 18.1317 9.64735 18.4246 9.70963 18.7176C9.70963 18.7385 9.75115 18.7594 9.77191 18.7803C9.79267 18.7594 9.81343 18.7385 9.83419 18.7176C10.0003 18.32 10.0003 18.32 9.75115 17.9852C9.66811 17.9015 9.60583 17.8178 9.52279 17.6923Z" fill="#2B2B2B" stroke="#2B2B2B" stroke-width="4" mask="url(#path-2-inside-1_350_321)"/>
<path d="M8.25581 6.83095L8.21353 2.81485C8.21353 2.08438 7.62156 1.5 6.88161 1.5C6.14165 1.5 5.54968 2.08438 5.54968 2.81485C5.54968 2.81485 5.80338 4.50537 5 4.75581" stroke="#1B2230" stroke-width="0.5"/>
<circle cx="8.13956" cy="11.6163" r="1.01163" stroke="#1B2230"/>
<path d="M16.9768 10.1093L15.3861 8.43489C15.2187 8.22559 15.114 7.9535 15.114 7.6814C15.114 7.40931 15.2187 7.13722 15.407 6.94884C15.5954 6.76047 15.8466 6.63489 16.0977 6.63489C16.3698 6.63489 16.6001 6.73954 16.7884 6.94884L16.9768 7.15815L17.1652 6.94884C17.3536 6.76047 17.6047 6.63489 17.8559 6.63489C18.128 6.63489 18.3582 6.73954 18.5466 6.94884C18.735 7.13722 18.8396 7.40931 18.8396 7.6814C18.8396 7.9535 18.735 8.22559 18.5466 8.41396L16.9768 10.1093ZM18.714 6.76047C18.4838 6.50931 18.1908 6.38373 17.8559 6.38373C17.521 6.38373 17.228 6.50931 16.9977 6.76047L16.9768 6.80233L16.935 6.76047C16.7256 6.53024 16.4117 6.38373 16.0977 6.38373C15.7838 6.38373 15.4698 6.50931 15.2396 6.76047C15.0094 7.01163 14.8838 7.32559 14.8838 7.6814C14.8838 8.01629 15.0094 8.35117 15.2396 8.5814L16.9768 10.4233L18.714 8.5814C18.9443 8.35117 19.0698 8.01629 19.0698 7.6814C19.0698 7.32559 18.9443 7.01163 18.714 6.76047Z" fill="#1B2230"/>
<mask id="path-6-inside-2_350_321" fill="white">
<path d="M16.9774 23.593C16.4376 23.5512 15.9186 23.4675 15.4204 23.2164C14.7145 22.8607 14.2993 22.2329 14.0917 21.4169C13.8634 20.5589 13.9464 19.6801 14.1332 18.8431C14.2578 18.2363 14.4239 17.6713 14.6107 17.0855C14.8806 16.2694 15.2543 15.4743 15.711 14.7628C16.0432 14.2188 16.4376 13.7166 16.8113 13.2144C16.8943 13.0888 16.9566 13.1098 17.0604 13.2144C17.9531 14.1351 18.6174 15.2232 19.1157 16.4577C19.5724 17.5667 19.9045 18.7176 19.9876 19.9312C20.0499 20.8937 19.8838 21.8144 19.3025 22.5886C18.9703 23.049 18.5136 23.321 17.9946 23.4465C17.6417 23.5093 17.3095 23.5512 16.9774 23.593ZM18.3891 19.1151C18.3683 19.0733 18.3683 19.0314 18.3683 18.9896C18.2645 18.5293 18.1607 18.0689 18.0361 17.5876C18.0154 17.483 17.9739 17.3575 17.9116 17.2738C17.6209 16.8762 17.3095 16.4786 16.9981 16.0811C16.9359 15.9974 16.8943 15.9974 16.8321 16.0811C16.5207 16.4996 16.1885 16.939 15.8771 17.3575C15.8148 17.4412 15.7733 17.5249 15.7525 17.6295C15.628 18.1317 15.5034 18.6548 15.3788 19.157C15.3581 19.2198 15.3581 19.3035 15.3788 19.3453C15.5864 19.8057 15.7733 20.266 15.9809 20.7263C16.0017 20.7891 16.0639 20.831 16.1055 20.8728C16.3131 21.0402 16.5414 21.1867 16.749 21.3332C16.8321 21.3959 16.8943 21.3959 16.9774 21.3332C17.185 21.1448 17.4133 20.9774 17.6209 20.7891C17.6625 20.7473 17.7247 20.6845 17.7455 20.6217C17.9116 20.2451 18.0569 19.8475 18.2022 19.4709C18.2853 19.3662 18.3475 19.2198 18.3891 19.1151ZM15.0467 18.2572C15.109 18.2154 15.1297 18.1945 15.1505 18.1526C15.3166 17.9224 15.4827 17.6923 15.6487 17.4621C15.6903 17.4202 15.711 17.3575 15.711 17.2947C15.8148 16.8553 15.9186 16.4159 16.0224 15.9974C16.0639 15.83 16.1055 15.6417 16.147 15.4324C16.0847 15.4533 16.0639 15.4533 16.0432 15.4743C15.7318 15.7463 15.4204 15.9974 15.109 16.2903C15.0675 16.3322 15.0467 16.3949 15.0467 16.4577C15.0259 16.9808 15.0259 17.5249 15.0259 18.0689C15.0259 18.1317 15.0259 18.1735 15.0467 18.2572ZM19.0741 22.0446C19.1157 22.0446 19.1364 22.0446 19.1572 22.0655C19.261 22.0864 19.2817 22.0237 19.2402 21.919C19.0949 21.5424 18.9496 21.1658 18.8043 20.7891C18.7835 20.7473 18.7005 20.6845 18.6589 20.7054C18.4306 20.7473 18.2022 20.7682 17.9739 20.831C17.9116 20.8519 17.8493 20.9147 17.8285 20.9774C17.787 21.2285 17.787 21.5005 17.7455 21.7726C17.7247 21.8772 17.7663 21.919 17.8493 21.919C18.2645 21.9609 18.6797 22.0027 19.0741 22.0446ZM18.7212 18.0271C18.7212 17.9852 18.742 17.9224 18.742 17.8597C18.7627 17.3784 18.7835 16.8971 18.8043 16.4159C18.8043 16.3531 18.7627 16.2694 18.7212 16.2275C18.4098 15.9764 18.1192 15.7463 17.8078 15.4952C17.787 15.4743 17.7455 15.4533 17.6832 15.4324C17.704 15.5161 17.704 15.5579 17.704 15.5998C17.8078 16.0392 17.9323 16.4996 18.0154 16.939C18.0984 17.3993 18.4306 17.6713 18.6797 18.0061C18.6797 18.048 18.7005 18.0271 18.7212 18.0271ZM14.673 22.0446C15.1297 22.0027 15.5449 21.9609 15.9601 21.919C16.0432 21.919 16.0847 21.8772 16.0639 21.7726C16.0224 21.5424 16.0017 21.3122 15.9809 21.0821C15.9601 20.9774 15.9186 20.9147 15.8356 20.8937C15.6072 20.831 15.3996 20.7682 15.192 20.7263C15.109 20.7054 15.0467 20.7263 15.0259 20.831C14.9014 21.1867 14.7768 21.5424 14.6522 21.8981C14.5692 22.0237 14.59 22.0655 14.673 22.0446ZM16.9359 13.4446C16.8943 13.5073 16.8736 13.5283 16.8736 13.5492C16.7075 14.0514 16.5622 14.5536 16.4169 15.0558C16.3961 15.0976 16.4169 15.1813 16.4584 15.2232C16.5829 15.3696 16.7283 15.5161 16.8736 15.6626C16.9359 15.7253 16.9981 15.7253 17.0604 15.6626C17.185 15.5161 17.3095 15.3906 17.4341 15.2441C17.4756 15.2022 17.4964 15.0976 17.4756 15.0558C17.3511 14.6582 17.2473 14.2815 17.1227 13.9049C17.0397 13.7794 16.9774 13.6329 16.9359 13.4446ZM19.78 19.701C19.7592 19.701 19.7385 19.701 19.7385 19.722C19.4686 19.994 19.2195 20.266 18.9496 20.538C18.9288 20.5799 18.9081 20.6636 18.9288 20.7054C19.0534 21.0402 19.1779 21.375 19.3025 21.6889C19.344 21.7935 19.3855 21.8772 19.4271 21.9818C19.7592 21.6261 19.9461 20.1614 19.78 19.701ZM18.8458 20.4125C18.8873 20.3915 18.9081 20.3915 18.9081 20.3915C19.1572 20.1404 19.4063 19.8684 19.6554 19.6173C19.6762 19.5964 19.6554 19.4918 19.6347 19.4499C19.3855 19.1361 19.1364 18.8431 18.9081 18.5292C18.8458 18.4456 18.8043 18.4665 18.7627 18.5711C18.7212 18.6966 18.6797 18.8222 18.6174 18.9268C18.5344 19.0733 18.5344 19.2198 18.5967 19.3662C18.6174 19.4081 18.6174 19.4499 18.6174 19.4918C18.6797 19.7847 18.7627 20.0986 18.8458 20.4125ZM16.9359 23.321C16.9774 23.2791 16.9981 23.2582 16.9981 23.2373C17.185 22.8607 17.3718 22.4631 17.5379 22.0864C17.5587 22.0446 17.5171 21.9609 17.4756 21.94C17.3095 21.8353 17.1227 21.7516 16.9566 21.6679C16.9151 21.647 16.8736 21.647 16.8321 21.6679C16.666 21.7516 16.4999 21.8563 16.3131 21.9609C16.23 22.0027 16.23 22.0446 16.2715 22.1283C16.3753 22.3166 16.4791 22.5049 16.5622 22.6933C16.7075 22.8816 16.8113 23.0908 16.9359 23.321ZM19.6969 19.3035C19.7177 19.3035 19.7385 19.2825 19.7592 19.2825C19.6139 18.32 19.344 17.4202 18.9703 16.4996C18.9496 16.5623 18.9288 16.5833 18.9288 16.6251C18.9081 17.1482 18.8873 17.6713 18.8665 18.1735C18.8665 18.2363 18.9081 18.32 18.9496 18.3828C19.1157 18.6129 19.3025 18.8222 19.4893 19.0524C19.5516 19.1361 19.6347 19.2198 19.6969 19.3035ZM18.7212 16.0601C18.742 16.0392 18.742 16.0392 18.742 16.0183C18.306 15.0976 17.787 14.2606 17.1019 13.5283C17.0812 13.5701 17.0812 13.612 17.1019 13.6329C17.2265 14.0514 17.3718 14.4489 17.4964 14.8674C17.5587 15.0767 17.6625 15.2232 17.8285 15.3487C18.0984 15.537 18.3475 15.7672 18.6174 15.9555C18.6589 16.0183 18.7005 16.0183 18.7212 16.0601ZM14.4446 22.0027C14.59 21.5842 14.7353 21.1658 14.8806 20.7682C14.9221 20.6636 14.9014 20.6008 14.8391 20.538C14.6315 20.3078 14.4239 20.0986 14.2163 19.8894C14.1955 19.8684 14.154 19.8475 14.1125 19.8057C13.9879 20.3915 14.154 21.647 14.4446 22.0027ZM14.9636 20.4543C14.9844 20.4125 15.0052 20.4125 15.0052 20.3915C15.0882 20.0568 15.1505 19.7429 15.2335 19.4081C15.2335 19.3662 15.2543 19.3244 15.2335 19.2825C15.1505 19.0733 15.0674 18.885 14.9636 18.6757C14.9221 18.6966 14.9014 18.6966 14.8806 18.7176C14.673 18.9896 14.4446 19.2616 14.2578 19.5546C14.237 19.5755 14.2578 19.6801 14.2786 19.722C14.4447 19.9312 14.6315 20.1195 14.8183 20.3288C14.8599 20.3706 14.9014 20.4125 14.9636 20.4543ZM14.2163 19.429C14.2371 19.3872 14.2578 19.3244 14.2993 19.2825C14.4654 19.0524 14.6315 18.8431 14.7976 18.6339C14.8806 18.5292 14.9221 18.4037 14.9221 18.2572C14.9221 17.9015 14.9429 17.5249 14.9429 17.1691C14.9429 17.0227 14.9429 16.8971 14.9429 16.7297C14.673 17.0018 14.1125 19.0942 14.2163 19.429ZM19.344 22.2748C19.3233 22.2538 19.3233 22.2329 19.3233 22.2329C18.8458 22.1701 18.3475 22.1074 17.8701 22.0446C17.8701 22.0655 17.8493 22.0864 17.8493 22.0864C18.0154 22.4003 18.1815 22.7351 18.3475 23.049C18.3891 23.1327 18.4513 23.1118 18.5136 23.0908C18.6797 22.9653 18.8665 22.8397 19.0326 22.6933C19.1364 22.5677 19.2195 22.4003 19.344 22.2748ZM16.7075 13.612C16.6867 13.612 16.6867 13.591 16.666 13.591C16.1055 14.3234 15.6072 15.1185 15.2335 15.9974C15.2751 15.9974 15.2958 15.9974 15.2958 15.9764C15.5865 15.7253 15.8979 15.4743 16.1885 15.2022C16.23 15.1604 16.2508 15.1185 16.2715 15.0558C16.3753 14.7419 16.4791 14.428 16.5622 14.1142C16.6037 13.9468 16.6452 13.7794 16.7075 13.612ZM16.147 22.1283C16.1055 22.1911 16.0847 22.2329 16.0432 22.2748C15.8979 22.5259 15.7733 22.777 15.6072 23.0071C15.5449 23.1117 15.5449 23.1745 15.6695 23.2164C16.0017 23.3001 16.3546 23.3628 16.6867 23.4256C16.7698 23.4465 16.8113 23.3838 16.749 23.3001C16.6867 23.1745 16.6245 23.0699 16.5622 22.9444C16.4376 22.6723 16.3131 22.4003 16.147 22.1283ZM16.0017 22.1074C16.0017 22.0864 15.9809 22.0655 15.9809 22.0655C15.5034 22.1074 15.0259 22.1701 14.5692 22.212C14.5692 22.2538 14.5692 22.2538 14.5692 22.2538C14.7768 22.5886 15.0467 22.8397 15.3788 23.028C15.3996 23.049 15.4827 23.0071 15.5034 22.9862C15.5865 22.8607 15.6695 22.7142 15.7318 22.5886C15.8148 22.4212 15.8979 22.2748 16.0017 22.1074ZM17.268 23.4465C17.5379 23.3838 17.8285 23.321 18.1192 23.2373C18.2022 23.2164 18.223 23.1745 18.1815 23.0699C18.0361 22.7979 17.8908 22.5049 17.7455 22.2329C17.6832 22.1074 17.6625 22.1074 17.6002 22.2329C17.4341 22.5677 17.2888 22.8816 17.1435 23.2164C17.1227 23.2582 17.1019 23.321 17.1019 23.3628C17.1227 23.4047 17.2057 23.4256 17.268 23.4465ZM16.3131 15.3487C16.1677 15.9555 16.0432 16.4996 15.8979 17.0645C15.9394 17.0645 15.9394 17.0645 15.9394 17.0645C16.2093 16.7088 16.4999 16.3322 16.7698 15.9764C16.7905 15.9555 16.7905 15.8927 16.7698 15.8509C16.6452 15.6835 16.4999 15.537 16.3131 15.3487ZM17.8701 17.0018C17.8701 16.939 17.8908 16.9181 17.8908 16.8971C17.787 16.4368 17.6832 15.9764 17.5587 15.5161C17.5379 15.4324 17.4964 15.4324 17.4341 15.4743C17.3718 15.537 17.3095 15.5998 17.2265 15.6835C17.0189 15.9137 17.0189 15.9137 17.2057 16.1648C17.4341 16.4159 17.6417 16.6879 17.8701 17.0018ZM18.4721 19.4081C18.4513 19.4081 18.4306 19.4081 18.4306 19.4081C18.2645 19.8266 18.0984 20.2241 17.9323 20.6426C17.9531 20.6636 17.9531 20.6636 17.9739 20.6845C18.2022 20.6426 18.4306 20.6008 18.6589 20.538C18.6797 20.538 18.7212 20.4543 18.7005 20.4125C18.6797 20.266 18.6382 20.1404 18.6174 19.994C18.5551 19.8057 18.5136 19.6173 18.4721 19.4081ZM15.3581 19.5964C15.3373 19.5964 15.3373 19.5964 15.3166 19.5964C15.2958 19.6592 15.2751 19.722 15.2543 19.7847C15.2128 19.9312 15.192 20.0777 15.1505 20.2241C15.0467 20.5799 15.0467 20.5799 15.3581 20.6426C15.5034 20.6845 15.6487 20.7054 15.7941 20.7473C15.7941 20.7263 15.8148 20.7263 15.8148 20.7054C15.6903 20.3497 15.5242 19.9731 15.3581 19.5964ZM17.704 21.0193C17.6832 21.0193 17.6625 20.9984 17.6417 20.9984C17.4549 21.1658 17.2473 21.3332 17.0189 21.5215C17.2265 21.6261 17.3926 21.7307 17.6209 21.8353C17.6625 21.5424 17.6832 21.2913 17.704 21.0193ZM15.5864 17.8597C15.5449 17.8806 15.5242 17.8806 15.5242 17.9015C15.3789 18.0898 15.2335 18.2991 15.0882 18.4874C15.0675 18.5083 15.0467 18.5502 15.0674 18.5711C15.1297 18.7385 15.2128 18.9059 15.275 19.0733C15.2958 19.0733 15.3166 19.0524 15.3166 19.0524C15.3996 18.6548 15.5034 18.2572 15.5864 17.8597ZM16.1262 21.0821C16.1055 21.103 16.1055 21.103 16.0847 21.1239C16.1055 21.3541 16.147 21.5633 16.1677 21.7935C16.1677 21.8144 16.2508 21.8353 16.2923 21.8144C16.3961 21.7726 16.4999 21.7098 16.5829 21.647C16.6245 21.6261 16.666 21.5843 16.749 21.5424C16.5414 21.3541 16.3338 21.2076 16.1262 21.0821ZM18.2437 17.6923C18.223 17.755 18.223 17.7969 18.223 17.8178C18.2853 18.1317 18.3683 18.4246 18.4306 18.7176C18.4306 18.7385 18.4721 18.7594 18.4929 18.7803C18.5136 18.7594 18.5344 18.7385 18.5551 18.7176C18.7212 18.32 18.7212 18.32 18.4721 17.9852C18.3891 17.9015 18.3268 17.8178 18.2437 17.6923Z"/>
</mask>
<path d="M16.9774 23.593C16.4376 23.5512 15.9186 23.4675 15.4204 23.2164C14.7145 22.8607 14.2993 22.2329 14.0917 21.4169C13.8634 20.5589 13.9464 19.6801 14.1332 18.8431C14.2578 18.2363 14.4239 17.6713 14.6107 17.0855C14.8806 16.2694 15.2543 15.4743 15.711 14.7628C16.0432 14.2188 16.4376 13.7166 16.8113 13.2144C16.8943 13.0888 16.9566 13.1098 17.0604 13.2144C17.9531 14.1351 18.6174 15.2232 19.1157 16.4577C19.5724 17.5667 19.9045 18.7176 19.9876 19.9312C20.0499 20.8937 19.8838 21.8144 19.3025 22.5886C18.9703 23.049 18.5136 23.321 17.9946 23.4465C17.6417 23.5093 17.3095 23.5512 16.9774 23.593ZM18.3891 19.1151C18.3683 19.0733 18.3683 19.0314 18.3683 18.9896C18.2645 18.5293 18.1607 18.0689 18.0361 17.5876C18.0154 17.483 17.9739 17.3575 17.9116 17.2738C17.6209 16.8762 17.3095 16.4786 16.9981 16.0811C16.9359 15.9974 16.8943 15.9974 16.8321 16.0811C16.5207 16.4996 16.1885 16.939 15.8771 17.3575C15.8148 17.4412 15.7733 17.5249 15.7525 17.6295C15.628 18.1317 15.5034 18.6548 15.3788 19.157C15.3581 19.2198 15.3581 19.3035 15.3788 19.3453C15.5864 19.8057 15.7733 20.266 15.9809 20.7263C16.0017 20.7891 16.0639 20.831 16.1055 20.8728C16.3131 21.0402 16.5414 21.1867 16.749 21.3332C16.8321 21.3959 16.8943 21.3959 16.9774 21.3332C17.185 21.1448 17.4133 20.9774 17.6209 20.7891C17.6625 20.7473 17.7247 20.6845 17.7455 20.6217C17.9116 20.2451 18.0569 19.8475 18.2022 19.4709C18.2853 19.3662 18.3475 19.2198 18.3891 19.1151ZM15.0467 18.2572C15.109 18.2154 15.1297 18.1945 15.1505 18.1526C15.3166 17.9224 15.4827 17.6923 15.6487 17.4621C15.6903 17.4202 15.711 17.3575 15.711 17.2947C15.8148 16.8553 15.9186 16.4159 16.0224 15.9974C16.0639 15.83 16.1055 15.6417 16.147 15.4324C16.0847 15.4533 16.0639 15.4533 16.0432 15.4743C15.7318 15.7463 15.4204 15.9974 15.109 16.2903C15.0675 16.3322 15.0467 16.3949 15.0467 16.4577C15.0259 16.9808 15.0259 17.5249 15.0259 18.0689C15.0259 18.1317 15.0259 18.1735 15.0467 18.2572ZM19.0741 22.0446C19.1157 22.0446 19.1364 22.0446 19.1572 22.0655C19.261 22.0864 19.2817 22.0237 19.2402 21.919C19.0949 21.5424 18.9496 21.1658 18.8043 20.7891C18.7835 20.7473 18.7005 20.6845 18.6589 20.7054C18.4306 20.7473 18.2022 20.7682 17.9739 20.831C17.9116 20.8519 17.8493 20.9147 17.8285 20.9774C17.787 21.2285 17.787 21.5005 17.7455 21.7726C17.7247 21.8772 17.7663 21.919 17.8493 21.919C18.2645 21.9609 18.6797 22.0027 19.0741 22.0446ZM18.7212 18.0271C18.7212 17.9852 18.742 17.9224 18.742 17.8597C18.7627 17.3784 18.7835 16.8971 18.8043 16.4159C18.8043 16.3531 18.7627 16.2694 18.7212 16.2275C18.4098 15.9764 18.1192 15.7463 17.8078 15.4952C17.787 15.4743 17.7455 15.4533 17.6832 15.4324C17.704 15.5161 17.704 15.5579 17.704 15.5998C17.8078 16.0392 17.9323 16.4996 18.0154 16.939C18.0984 17.3993 18.4306 17.6713 18.6797 18.0061C18.6797 18.048 18.7005 18.0271 18.7212 18.0271ZM14.673 22.0446C15.1297 22.0027 15.5449 21.9609 15.9601 21.919C16.0432 21.919 16.0847 21.8772 16.0639 21.7726C16.0224 21.5424 16.0017 21.3122 15.9809 21.0821C15.9601 20.9774 15.9186 20.9147 15.8356 20.8937C15.6072 20.831 15.3996 20.7682 15.192 20.7263C15.109 20.7054 15.0467 20.7263 15.0259 20.831C14.9014 21.1867 14.7768 21.5424 14.6522 21.8981C14.5692 22.0237 14.59 22.0655 14.673 22.0446ZM16.9359 13.4446C16.8943 13.5073 16.8736 13.5283 16.8736 13.5492C16.7075 14.0514 16.5622 14.5536 16.4169 15.0558C16.3961 15.0976 16.4169 15.1813 16.4584 15.2232C16.5829 15.3696 16.7283 15.5161 16.8736 15.6626C16.9359 15.7253 16.9981 15.7253 17.0604 15.6626C17.185 15.5161 17.3095 15.3906 17.4341 15.2441C17.4756 15.2022 17.4964 15.0976 17.4756 15.0558C17.3511 14.6582 17.2473 14.2815 17.1227 13.9049C17.0397 13.7794 16.9774 13.6329 16.9359 13.4446ZM19.78 19.701C19.7592 19.701 19.7385 19.701 19.7385 19.722C19.4686 19.994 19.2195 20.266 18.9496 20.538C18.9288 20.5799 18.9081 20.6636 18.9288 20.7054C19.0534 21.0402 19.1779 21.375 19.3025 21.6889C19.344 21.7935 19.3855 21.8772 19.4271 21.9818C19.7592 21.6261 19.9461 20.1614 19.78 19.701ZM18.8458 20.4125C18.8873 20.3915 18.9081 20.3915 18.9081 20.3915C19.1572 20.1404 19.4063 19.8684 19.6554 19.6173C19.6762 19.5964 19.6554 19.4918 19.6347 19.4499C19.3855 19.1361 19.1364 18.8431 18.9081 18.5292C18.8458 18.4456 18.8043 18.4665 18.7627 18.5711C18.7212 18.6966 18.6797 18.8222 18.6174 18.9268C18.5344 19.0733 18.5344 19.2198 18.5967 19.3662C18.6174 19.4081 18.6174 19.4499 18.6174 19.4918C18.6797 19.7847 18.7627 20.0986 18.8458 20.4125ZM16.9359 23.321C16.9774 23.2791 16.9981 23.2582 16.9981 23.2373C17.185 22.8607 17.3718 22.4631 17.5379 22.0864C17.5587 22.0446 17.5171 21.9609 17.4756 21.94C17.3095 21.8353 17.1227 21.7516 16.9566 21.6679C16.9151 21.647 16.8736 21.647 16.8321 21.6679C16.666 21.7516 16.4999 21.8563 16.3131 21.9609C16.23 22.0027 16.23 22.0446 16.2715 22.1283C16.3753 22.3166 16.4791 22.5049 16.5622 22.6933C16.7075 22.8816 16.8113 23.0908 16.9359 23.321ZM19.6969 19.3035C19.7177 19.3035 19.7385 19.2825 19.7592 19.2825C19.6139 18.32 19.344 17.4202 18.9703 16.4996C18.9496 16.5623 18.9288 16.5833 18.9288 16.6251C18.9081 17.1482 18.8873 17.6713 18.8665 18.1735C18.8665 18.2363 18.9081 18.32 18.9496 18.3828C19.1157 18.6129 19.3025 18.8222 19.4893 19.0524C19.5516 19.1361 19.6347 19.2198 19.6969 19.3035ZM18.7212 16.0601C18.742 16.0392 18.742 16.0392 18.742 16.0183C18.306 15.0976 17.787 14.2606 17.1019 13.5283C17.0812 13.5701 17.0812 13.612 17.1019 13.6329C17.2265 14.0514 17.3718 14.4489 17.4964 14.8674C17.5587 15.0767 17.6625 15.2232 17.8285 15.3487C18.0984 15.537 18.3475 15.7672 18.6174 15.9555C18.6589 16.0183 18.7005 16.0183 18.7212 16.0601ZM14.4446 22.0027C14.59 21.5842 14.7353 21.1658 14.8806 20.7682C14.9221 20.6636 14.9014 20.6008 14.8391 20.538C14.6315 20.3078 14.4239 20.0986 14.2163 19.8894C14.1955 19.8684 14.154 19.8475 14.1125 19.8057C13.9879 20.3915 14.154 21.647 14.4446 22.0027ZM14.9636 20.4543C14.9844 20.4125 15.0052 20.4125 15.0052 20.3915C15.0882 20.0568 15.1505 19.7429 15.2335 19.4081C15.2335 19.3662 15.2543 19.3244 15.2335 19.2825C15.1505 19.0733 15.0674 18.885 14.9636 18.6757C14.9221 18.6966 14.9014 18.6966 14.8806 18.7176C14.673 18.9896 14.4446 19.2616 14.2578 19.5546C14.237 19.5755 14.2578 19.6801 14.2786 19.722C14.4447 19.9312 14.6315 20.1195 14.8183 20.3288C14.8599 20.3706 14.9014 20.4125 14.9636 20.4543ZM14.2163 19.429C14.2371 19.3872 14.2578 19.3244 14.2993 19.2825C14.4654 19.0524 14.6315 18.8431 14.7976 18.6339C14.8806 18.5292 14.9221 18.4037 14.9221 18.2572C14.9221 17.9015 14.9429 17.5249 14.9429 17.1691C14.9429 17.0227 14.9429 16.8971 14.9429 16.7297C14.673 17.0018 14.1125 19.0942 14.2163 19.429ZM19.344 22.2748C19.3233 22.2538 19.3233 22.2329 19.3233 22.2329C18.8458 22.1701 18.3475 22.1074 17.8701 22.0446C17.8701 22.0655 17.8493 22.0864 17.8493 22.0864C18.0154 22.4003 18.1815 22.7351 18.3475 23.049C18.3891 23.1327 18.4513 23.1118 18.5136 23.0908C18.6797 22.9653 18.8665 22.8397 19.0326 22.6933C19.1364 22.5677 19.2195 22.4003 19.344 22.2748ZM16.7075 13.612C16.6867 13.612 16.6867 13.591 16.666 13.591C16.1055 14.3234 15.6072 15.1185 15.2335 15.9974C15.2751 15.9974 15.2958 15.9974 15.2958 15.9764C15.5865 15.7253 15.8979 15.4743 16.1885 15.2022C16.23 15.1604 16.2508 15.1185 16.2715 15.0558C16.3753 14.7419 16.4791 14.428 16.5622 14.1142C16.6037 13.9468 16.6452 13.7794 16.7075 13.612ZM16.147 22.1283C16.1055 22.1911 16.0847 22.2329 16.0432 22.2748C15.8979 22.5259 15.7733 22.777 15.6072 23.0071C15.5449 23.1117 15.5449 23.1745 15.6695 23.2164C16.0017 23.3001 16.3546 23.3628 16.6867 23.4256C16.7698 23.4465 16.8113 23.3838 16.749 23.3001C16.6867 23.1745 16.6245 23.0699 16.5622 22.9444C16.4376 22.6723 16.3131 22.4003 16.147 22.1283ZM16.0017 22.1074C16.0017 22.0864 15.9809 22.0655 15.9809 22.0655C15.5034 22.1074 15.0259 22.1701 14.5692 22.212C14.5692 22.2538 14.5692 22.2538 14.5692 22.2538C14.7768 22.5886 15.0467 22.8397 15.3788 23.028C15.3996 23.049 15.4827 23.0071 15.5034 22.9862C15.5865 22.8607 15.6695 22.7142 15.7318 22.5886C15.8148 22.4212 15.8979 22.2748 16.0017 22.1074ZM17.268 23.4465C17.5379 23.3838 17.8285 23.321 18.1192 23.2373C18.2022 23.2164 18.223 23.1745 18.1815 23.0699C18.0361 22.7979 17.8908 22.5049 17.7455 22.2329C17.6832 22.1074 17.6625 22.1074 17.6002 22.2329C17.4341 22.5677 17.2888 22.8816 17.1435 23.2164C17.1227 23.2582 17.1019 23.321 17.1019 23.3628C17.1227 23.4047 17.2057 23.4256 17.268 23.4465ZM16.3131 15.3487C16.1677 15.9555 16.0432 16.4996 15.8979 17.0645C15.9394 17.0645 15.9394 17.0645 15.9394 17.0645C16.2093 16.7088 16.4999 16.3322 16.7698 15.9764C16.7905 15.9555 16.7905 15.8927 16.7698 15.8509C16.6452 15.6835 16.4999 15.537 16.3131 15.3487ZM17.8701 17.0018C17.8701 16.939 17.8908 16.9181 17.8908 16.8971C17.787 16.4368 17.6832 15.9764 17.5587 15.5161C17.5379 15.4324 17.4964 15.4324 17.4341 15.4743C17.3718 15.537 17.3095 15.5998 17.2265 15.6835C17.0189 15.9137 17.0189 15.9137 17.2057 16.1648C17.4341 16.4159 17.6417 16.6879 17.8701 17.0018ZM18.4721 19.4081C18.4513 19.4081 18.4306 19.4081 18.4306 19.4081C18.2645 19.8266 18.0984 20.2241 17.9323 20.6426C17.9531 20.6636 17.9531 20.6636 17.9739 20.6845C18.2022 20.6426 18.4306 20.6008 18.6589 20.538C18.6797 20.538 18.7212 20.4543 18.7005 20.4125C18.6797 20.266 18.6382 20.1404 18.6174 19.994C18.5551 19.8057 18.5136 19.6173 18.4721 19.4081ZM15.3581 19.5964C15.3373 19.5964 15.3373 19.5964 15.3166 19.5964C15.2958 19.6592 15.2751 19.722 15.2543 19.7847C15.2128 19.9312 15.192 20.0777 15.1505 20.2241C15.0467 20.5799 15.0467 20.5799 15.3581 20.6426C15.5034 20.6845 15.6487 20.7054 15.7941 20.7473C15.7941 20.7263 15.8148 20.7263 15.8148 20.7054C15.6903 20.3497 15.5242 19.9731 15.3581 19.5964ZM17.704 21.0193C17.6832 21.0193 17.6625 20.9984 17.6417 20.9984C17.4549 21.1658 17.2473 21.3332 17.0189 21.5215C17.2265 21.6261 17.3926 21.7307 17.6209 21.8353C17.6625 21.5424 17.6832 21.2913 17.704 21.0193ZM15.5864 17.8597C15.5449 17.8806 15.5242 17.8806 15.5242 17.9015C15.3789 18.0898 15.2335 18.2991 15.0882 18.4874C15.0675 18.5083 15.0467 18.5502 15.0674 18.5711C15.1297 18.7385 15.2128 18.9059 15.275 19.0733C15.2958 19.0733 15.3166 19.0524 15.3166 19.0524C15.3996 18.6548 15.5034 18.2572 15.5864 17.8597ZM16.1262 21.0821C16.1055 21.103 16.1055 21.103 16.0847 21.1239C16.1055 21.3541 16.147 21.5633 16.1677 21.7935C16.1677 21.8144 16.2508 21.8353 16.2923 21.8144C16.3961 21.7726 16.4999 21.7098 16.5829 21.647C16.6245 21.6261 16.666 21.5843 16.749 21.5424C16.5414 21.3541 16.3338 21.2076 16.1262 21.0821ZM18.2437 17.6923C18.223 17.755 18.223 17.7969 18.223 17.8178C18.2853 18.1317 18.3683 18.4246 18.4306 18.7176C18.4306 18.7385 18.4721 18.7594 18.4929 18.7803C18.5136 18.7594 18.5344 18.7385 18.5551 18.7176C18.7212 18.32 18.7212 18.32 18.4721 17.9852C18.3891 17.9015 18.3268 17.8178 18.2437 17.6923Z" fill="#1B2230" stroke="#1B2230" stroke-width="4" mask="url(#path-6-inside-2_350_321)"/>
<path d="M16.9768 6.83095L16.9345 2.81485C16.9345 2.08438 16.3425 1.5 15.6026 1.5C14.8626 1.5 14.2706 2.08438 14.2706 2.81485C14.2706 2.81485 14.5243 4.50537 13.7209 4.75581" stroke="#1B2230" stroke-width="0.5"/>
<circle cx="16.8605" cy="11.6163" r="1.01163" stroke="#1B2230"/>
    </svg>},
    {name : 'Bracelets' , Icon : () =>
      <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.1932 4.21697C17.4511 3.50837 17.0857 2.72486 16.3771 2.46697C15.6685 2.20907 14.885 2.57445 14.6271 3.28305C14.3692 3.99166 14.7346 4.77517 15.4432 5.03306C16.1518 5.29096 16.9353 4.92558 17.1932 4.21697Z" stroke="#1B2230" stroke-width="0.5" stroke-miterlimit="22.9256"/>
      <path d="M19.571 6.15708C20.0557 5.57946 19.9804 4.71826 19.4028 4.23354C18.8251 3.74882 17.9639 3.82413 17.4792 4.40175C16.9945 4.97938 17.0698 5.84058 17.6474 6.3253C18.2251 6.81002 19.0863 6.73471 19.571 6.15708Z" stroke="#1B2230" stroke-width="0.5" stroke-miterlimit="22.9256"/>
      <path d="M21.0927 8.70406C21.7458 8.32702 21.9695 7.49198 21.5924 6.83895C21.2154 6.18592 20.3804 5.96218 19.7273 6.33922C19.0743 6.71626 18.8506 7.5513 19.2276 8.20433C19.6047 8.85736 20.4397 9.0811 21.0927 8.70406Z" stroke="#1B2230" stroke-width="0.5" stroke-miterlimit="22.9256"/>
      <path d="M21.6468 11.7224C22.3894 11.5915 22.8853 10.8833 22.7544 10.1407C22.6235 9.39809 21.9154 8.9022 21.1728 9.03311C20.4301 9.16402 19.9342 9.87215 20.0652 10.6148C20.1961 11.3574 20.9042 11.8533 21.6468 11.7224Z" stroke="#1B2230" stroke-width="0.5" stroke-miterlimit="22.9256"/>
      <path d="M22.7627 13.5747C22.8936 12.8321 22.3977 12.124 21.6551 11.9931C20.9125 11.8622 20.2044 12.358 20.0735 13.1007C19.9425 13.8433 20.4384 14.5514 21.1811 14.6823C21.9237 14.8132 22.6318 14.3173 22.7627 13.5747Z" stroke="#1B2230" stroke-width="0.5" stroke-miterlimit="22.9256"/>
      <path d="M21.5915 16.7841C21.9685 16.1311 21.7448 15.2961 21.0917 14.919C20.4387 14.542 19.6037 14.7657 19.2266 15.4187C18.8496 16.0718 19.0733 16.9068 19.7264 17.2839C20.3794 17.6609 21.2144 17.4372 21.5915 16.7841Z" stroke="#1B2230" stroke-width="0.5" stroke-miterlimit="22.9256"/>
      <path d="M19.3852 19.4266C19.9628 18.9419 20.0381 18.0807 19.5534 17.503C19.0687 16.9254 18.2075 16.8501 17.6299 17.3348C17.0522 17.8195 16.9769 18.6808 17.4616 19.2584C17.9464 19.836 18.8076 19.9113 19.3852 19.4266Z" stroke="#1B2230" stroke-width="0.5" stroke-miterlimit="22.9256"/>
      <path d="M16.4103 21.1495C17.1189 20.8916 17.4843 20.1081 17.2264 19.3995C16.9685 18.6908 16.185 18.3255 15.4764 18.5834C14.7678 18.8413 14.4024 19.6248 14.6603 20.3334C14.9182 21.042 15.7017 21.4074 16.4103 21.1495Z" stroke="#1B2230" stroke-width="0.5" stroke-miterlimit="22.9256"/>
      <path d="M13.0526 22.4865C13.983 22.4865 14.7371 21.7323 14.7371 20.802C14.7371 19.8717 13.983 19.1175 13.0526 19.1175C12.1223 19.1175 11.3682 19.8717 11.3682 20.802C11.3682 21.7323 12.1223 22.4865 13.0526 22.4865Z" stroke="#1B2230" stroke-width="0.5" stroke-miterlimit="22.9256"/>
      <path d="M11.3324 20.3564C11.5903 19.6478 11.2249 18.8643 10.5163 18.6064C9.80768 18.3485 9.02417 18.7139 8.76628 19.4225C8.50838 20.1311 8.87376 20.9146 9.58236 21.1725C10.291 21.4304 11.0745 21.065 11.3324 20.3564Z" stroke="#1B2230" stroke-width="0.5" stroke-miterlimit="22.9256"/>
      <path d="M8.53241 19.2856C9.01714 18.708 8.94182 17.8468 8.3642 17.3621C7.78658 16.8774 6.92538 16.9527 6.44065 17.5303C5.95593 18.1079 6.03124 18.9691 6.60887 19.4538C7.18649 19.9386 8.04769 19.8632 8.53241 19.2856Z" stroke="#1B2230" stroke-width="0.5" stroke-miterlimit="22.9256"/>
      <path d="M6.24457 17.2866C6.89761 16.9096 7.12134 16.0745 6.7443 15.4215C6.36726 14.7685 5.53223 14.5447 4.8792 14.9218C4.22616 15.2988 4.00243 16.1338 4.37947 16.7869C4.75651 17.4399 5.59154 17.6636 6.24457 17.2866Z" stroke="#1B2230" stroke-width="0.5" stroke-miterlimit="22.9256"/>
      <path d="M4.81966 14.6624C5.56228 14.5315 6.05816 13.8233 5.92726 13.0807C5.79635 12.3381 5.08822 11.8422 4.3456 11.9731C3.60299 12.104 3.1071 12.8122 3.23801 13.5548C3.36891 14.2974 4.07705 14.7933 4.81966 14.6624Z" stroke="#1B2230" stroke-width="0.5" stroke-miterlimit="22.9256"/>
      <path d="M5.92628 10.5548C6.05719 9.8122 5.5613 9.10407 4.81868 8.97316C4.07607 8.84226 3.36794 9.33814 3.23703 10.0808C3.10612 10.8234 3.60201 11.5315 4.34463 11.6624C5.08724 11.7933 5.79537 11.2974 5.92628 10.5548Z" stroke="#1B2230" stroke-width="0.5" stroke-miterlimit="22.9256"/>
      <path d="M6.73844 8.22968C7.11548 7.57665 6.89175 6.74161 6.23871 6.36458C5.58568 5.98754 4.75065 6.21127 4.37361 6.8643C3.99657 7.51734 4.2203 8.35237 4.87334 8.72941C5.52637 9.10645 6.3614 8.88271 6.73844 8.22968Z" stroke="#1B2230" stroke-width="0.5" stroke-miterlimit="22.9256"/>
      <path d="M8.36859 6.32878C8.94622 5.84406 9.02153 4.98286 8.53681 4.40523C8.05209 3.82761 7.19089 3.7523 6.61326 4.23702C6.03564 4.72174 5.96033 5.58294 6.44505 6.16057C6.92977 6.73819 7.79097 6.8135 8.36859 6.32878Z" stroke="#1B2230" stroke-width="0.5" stroke-miterlimit="22.9256"/>
      </svg>},
   { name : 'Necklace' , Icon : () => 
      <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.3228 18.2831V18.2826C18.324 18.2792 18.3237 18.2756 18.325 18.2722C18.3276 18.2612 18.3301 18.251 18.331 18.2396C18.332 18.2257 18.332 18.2116 18.3313 18.1979C18.3313 18.1967 18.3313 18.196 18.331 18.1948C18.3306 18.1921 18.3296 18.1894 18.3291 18.1867C18.3279 18.1748 18.3252 18.1629 18.3218 18.1514C18.3172 18.1359 18.3111 18.1217 18.3035 18.1086L16.6886 15.1042L16.6874 15.102L16.6869 15.1013C16.6862 15.0998 16.6848 15.0981 16.684 15.0967C16.6774 15.0855 16.6709 15.075 16.6628 15.0653C16.6558 15.0563 16.647 15.049 16.6387 15.0414C16.6366 15.039 16.6341 15.0363 16.6317 15.0344C16.6302 15.0334 16.6288 15.0322 16.6278 15.0314C16.6173 15.0234 16.6066 15.0159 16.5944 15.0098C16.5854 15.0052 16.5767 15.002 16.5672 14.9986C16.5628 14.9966 16.5584 14.9947 16.554 14.9935H16.5528L16.5516 14.9927L13.2836 14.0105H13.2831L13.2814 14.0098C13.2758 14.0081 13.2692 14.0074 13.2634 14.0061C13.2554 14.0044 13.2473 14.0025 13.2386 14.001C13.2249 13.9993 13.2113 14 13.1982 14.001C13.1969 14.001 13.1952 14.0008 13.1938 14.001C13.1901 14.001 13.1872 14.0027 13.184 14.003C13.1726 14.0044 13.1614 14.0066 13.1507 14.0095C13.1385 14.0132 13.1266 14.0183 13.1156 14.0241C13.1142 14.0249 13.1122 14.0256 13.1108 14.0263L13.11 14.0268L13.1078 14.028L10.103 15.6444L10.1023 15.6449L10.1015 15.6454C10.0972 15.6478 10.093 15.6515 10.0891 15.6539C10.0808 15.6588 10.0728 15.6636 10.0653 15.67C10.0548 15.6785 10.0451 15.6885 10.0363 15.6987L10.0336 15.7016C10.0336 15.7016 10.0326 15.7031 10.0317 15.704C10.0229 15.715 10.0151 15.7267 10.009 15.7388C10.0037 15.7488 10 15.7588 9.99613 15.7693C9.99516 15.7727 9.99297 15.7756 9.99199 15.779V15.7795L9.99126 15.7812L9.00953 19.0485L9.00904 19.0502V19.0507C9.00782 19.0541 9.00807 19.0577 9.00685 19.0611C9.00417 19.0721 9.00174 19.0823 9.00076 19.0937C8.99979 19.1076 8.99979 19.1217 9.00052 19.1354C9.00052 19.1366 9.00052 19.1373 9.00076 19.1385C9.00295 19.1582 9.00855 19.1777 9.01586 19.1965C9.01756 19.2013 9.01975 19.2062 9.02194 19.2106C9.02389 19.2142 9.02438 19.2186 9.02705 19.2225L10.6456 22.2315C10.6463 22.233 10.6478 22.2347 10.6485 22.2361C10.6551 22.2473 10.6617 22.2578 10.6697 22.2675C10.6768 22.2765 10.6855 22.2838 10.6938 22.2914C10.696 22.2938 10.6984 22.2965 10.7009 22.2984C10.7047 22.3014 10.7096 22.304 10.7138 22.3067C10.7218 22.3123 10.7293 22.3182 10.7379 22.3225C10.751 22.3296 10.7649 22.335 10.7787 22.3391H10.7792L14.0502 23.3223H14.0506C14.0648 23.3267 14.0794 23.3291 14.094 23.3313C14.1035 23.3323 14.113 23.3313 14.1227 23.3313C14.1278 23.3311 14.1329 23.332 14.138 23.3315C14.1417 23.3315 14.1446 23.3298 14.1478 23.3296C14.1592 23.3281 14.1704 23.3259 14.1811 23.323C14.1933 23.3194 14.2052 23.3143 14.2162 23.3084C14.2176 23.3077 14.2196 23.307 14.221 23.3062L14.2218 23.3057L14.224 23.3045L17.2303 21.6877C17.2339 21.6857 17.2371 21.6831 17.241 21.6804C17.2456 21.6775 17.2493 21.675 17.2539 21.6721C17.2702 21.6604 17.2858 21.6473 17.2984 21.6322C17.2994 21.6312 17.2994 21.6307 17.3004 21.6298C17.3091 21.6188 17.3169 21.6071 17.323 21.5949C17.3284 21.585 17.332 21.575 17.3359 21.5645C17.3369 21.5611 17.3391 21.5582 17.3401 21.5548V21.5543L17.3408 21.5526L18.322 18.2851L18.3225 18.2834L18.3228 18.2831Z" stroke="black" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M13.882 20.799L12.311 20.3268L11.5337 18.8818L12.0059 17.3107L13.4509 16.5337L15.0217 17.0057L15.799 18.4507L15.327 20.0217L13.882 20.799Z" stroke="black" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M15.0142 16.964L16.6704 15.1077" stroke="black" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M15.8208 18.4616L18.3833 18.2899" stroke="black" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M15.3438 20.0451L17.3873 21.6008" stroke="black" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M13.8462 20.8506L14.0609 23.2693" stroke="black" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M12.2641 20.3747L10.7515 22.2744" stroke="black" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M11.4582 18.8772L9.03955 19.0919" stroke="black" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M11.9335 17.2936L10.0771 15.6371" stroke="black" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M13.4315 16.4882L13.2168 14.0695" stroke="black" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M2.5 2C3 9 9.09882 15.1717 10 16" stroke="black" stroke-width="0.5" stroke-linecap="round"/>
      <path d="M22 2C21 10 17.5741 14.2247 17 15" stroke="black" stroke-width="0.5"/>
      </svg>}

  ]

  const Metalcolors = [
    { name: "18K Yellow Gold", imgurl: goldmetalimg },
    { name: "18K Rose Gold", imgurl: rosemetalimg },
    { name: "Platinum", imgurl: platinummetalimg },
  ]

  const DIAMOND_SHAPES = [
    "Round",
    "Princess",
    "Cushion",
    "Emerald",
    "Oval",
    "Pear",
    "Marquise",
    "Radiant",
    "Asscher",
    "Heart",
  ]

  const MENU = [
    { key: "Home", label: "Home", rightimgurl: "https://images.pexels.com/photos/33154633/pexels-photo-33154633.jpeg",url:"/" },

    {
      key: "jewelry",
      label: "Jewelry",
      rightimgurl: "https://images.pexels.com/photos/32039109/pexels-photo-32039109.jpeg",
      url:"/products"
    },
    {
      key: "diamond",
      label: "Diamond",
      rightimgurl: "https://images.pexels.com/photos/30328042/pexels-photo-30328042.jpeg",
      url:"/diamonds"
    },
    {
      key: "collections",
      label: "Collections",
      rightimgurl: "https://images.pexels.com/photos/9256822/pexels-photo-9256822.jpeg",
    },
    {
      key: "gifts",
      label: "Gifts",
      rightimgurl: "https://images.pexels.com/photos/11139357/pexels-photo-11139357.jpeg",
    },
    {
      key: "store",
      label: "Store Locator",
      rightimgurl: "https://images.pexels.com/photos/32841967/pexels-photo-32841967.jpeg",
    },
    {
      key: "about",
      label: "About Us",
      rightimgurl: "https://images.pexels.com/photos/1927266/pexels-photo-1927266.jpeg",
    },
  ]
  const currentRightImg = MENU.find((m) => m.key === activeMenu)?.rightimgurl

  function PanelContent({ imgUrl }) {
    if (activeMenu === "diamond") {
      return (
        <motion.div
          className="grid gap-8 p-8 md:grid-cols-3"
          variants={staggerContainer}
          initial="closed"
          animate="open"
        >
          <motion.div className="md:col-span-2" variants={staggerItem}>
            <div>
              <motion.h3 className="text-sm font-medium tracking-wide text-foreground/80" variants={staggerItem}>
                Diamond Shapes
              </motion.h3>
              <motion.ul
                className="mt-4 grid grid-cols-2 gap-3 text-sm leading-relaxed md:grid-cols-3"
                variants={staggerContainer}
              >
                {DIAMOND_SHAPES.map((shape, index) => {
                  const ShapeIcon = DiamondShapeSVGs[shape]
                  return (
                    <motion.li key={shape} variants={staggerItem} className="cursor-pointer">
                      <motion.a
                        className="inline-flex w-full items-center gap-3 rounded-md px-3 py-2 hover:bg-accent/60 transition-colors"
                        whileHover={prefersReducedMotion ? undefined : { x: 4, scale: 1.02 }}
                        whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
                      >
                        <ShapeIcon />
                        <span>{shape}</span>
                      </motion.a>
                    </motion.li>
                  )
                })}
              </motion.ul>
            </div>
          </motion.div>
          <motion.div variants={staggerItem}>
            <RightImage imgUrl={imgUrl} />
          </motion.div>
        </motion.div>
      )
    }

    if (activeMenu === "jewelry") {
      return (
        <motion.div
          className="grid gap-8 p-8 md:grid-cols-3"
          variants={staggerContainer}
          initial="closed"
          animate="open"
        >
          <motion.div className="md:col-span-2 grid gap-8 sm:grid-cols-2" variants={staggerItem}>
            <motion.div variants={staggerItem}>
              <h3 className="text-sm font-medium tracking-wide text-foreground/80">Categories</h3>
              <motion.ul className="mt-4 space-y-2 text-sm leading-relaxed" variants={staggerContainer}>
                {Category.map((item, i) => (
                  <motion.li key={i} variants={staggerItem} className="cursor-pointer">
                    <motion.a
                      className="inline-flex items-center rounded-md pl-2 pr-4 py-2 gap-1.5 hover:bg-accent/60 transition-colors"
                      whileHover={prefersReducedMotion ? undefined : { x: 4, scale: 1.02 }}
                    >
                      <item.Icon />
                      {item.name}
                    </motion.a>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
            <motion.div variants={staggerItem}>
              <h3 className="text-sm font-medium tracking-wide text-foreground/80">Metals</h3>
              <motion.ul className="mt-4 space-y-2 text-sm leading-relaxed" variants={staggerContainer}>
                {Metalcolors.map((item, i) => (
                  <motion.li key={i} variants={staggerItem} className="cursor-pointer">
                    <motion.a
                      className="inline-flex items-center rounded-md pl-1.5 pr-3 py-1 gap-1.5 hover:bg-accent/60 transition-colors"
                      whileHover={prefersReducedMotion ? undefined : { x: 4, scale: 1.02 }}
                    >
                      <img src={item.imgurl || "/placeholder.svg"} alt="" className="h-10 w-10 object-contain" />
                      {item.name}
                    </motion.a>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </motion.div>
          <motion.div variants={staggerItem}>
            <RightImage imgUrl={imgUrl} />
          </motion.div>
        </motion.div>
      )
    }

    // default / "all" / others
    return (
      <motion.div className="grid gap-8 p-8 md:grid-cols-3" variants={staggerContainer} initial="closed" animate="open">
        <motion.div className="md:col-span-2 grid gap-8 sm:grid-cols-2" variants={staggerItem}>
          <motion.div variants={staggerItem}>
            <h3 className="text-sm font-medium tracking-wide text-foreground/80">Highlights</h3>
            <motion.ul className="mt-4 space-y-2 text-sm leading-relaxed" variants={staggerContainer}>
              <motion.li variants={staggerItem} className="cursor-pointer">
                <motion.a
                  className="inline-flex items-center justify-between rounded-md px-3 py-2 hover:bg-accent/60 transition-colors"
                  whileHover={prefersReducedMotion ? undefined : { x: 4, scale: 1.02 }}
                >
                  <span>Gold Ornaments</span>
                  <span className="pl-0.5 text-[10px] text-[#C9A646]">New</span>
                </motion.a>
              </motion.li>
              {["Bridal & Heritage", "Daily Wear Elegance", "Limited Editions"].map((item) => (
                <motion.li key={item} variants={staggerItem} className="cursor-pointer">
                  <motion.a
                    className="inline-flex items-center rounded-md px-3 py-2 hover:bg-accent/60 transition-colors"
                    whileHover={prefersReducedMotion ? undefined : { x: 4, scale: 1.02 }}
                  >
                    {item}
                  </motion.a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
          <motion.div variants={staggerItem}>
            <h3 className="text-sm font-medium tracking-wide text-foreground/80">Services</h3>
            <motion.ul className="mt-4 space-y-2 text-sm leading-relaxed" variants={staggerContainer}>
              {[
                "Custom Design Consults",
                "Authentication & Appraisals",
                "Care & Restoration",
                "Concierge Sourcing",
              ].map((item) => (
                <motion.li key={item} variants={staggerItem} className="cursor-pointer">
                  <motion.a
                    className="inline-flex items-center rounded-md px-3 py-2 hover:bg-accent/60 transition-colors"
                    whileHover={prefersReducedMotion ? undefined : { x: 4, scale: 1.02 }}
                  >
                    {item}
                  </motion.a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </motion.div>
        <motion.div variants={staggerItem}>
          <RightImage imgUrl={imgUrl} />
        </motion.div>
      </motion.div>
    )
  }

  function RightImage({ imgUrl }) {
    const prefersReducedMotion = useReducedMotion()
    return (
      <motion.div
        className="relative h-60 md:h-80 overflow-hidden bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-zinc-800"
        whileHover={prefersReducedMotion ? undefined : { scale: 1.02 }}
        transition={{ duration: 0.3, ease: [0.2, 0, 0.2, 1] }}
      >
        <motion.img
          src={imgUrl || "/placeholder.svg?height=320&width=480&query=menu%20panel%20right%20image"}
          alt="Feature visual"
          className="h-full w-full object-cover shadow-2xl cursor-pointer "
          loading="lazy"
          initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, scale: 1.05, y: 10 }}
          animate={
            prefersReducedMotion
              ? { opacity: 1 }
              : {
                  opacity: 1,
                  scale: [1, 1.02, 1],
                  y: 0,
                  transition: {
                    opacity: { duration: 0.4 },
                    scale: { duration: 8, ease: "easeInOut", repeat: Number.POSITIVE_INFINITY },
                    y: { duration: 0.4 },
                  },
                }
          }
          whileHover={prefersReducedMotion ? undefined : { scale: 1.08 }}
          onClick={()=>navigate("/")}
        />
        {/* Enhanced top gold line with gradient */}
        <motion.span
          className="pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#C9A646] via-[#F4E4A6] to-[#C9A646]"
          aria-hidden="true"
          initial={prefersReducedMotion ? undefined : { scaleX: 0 }}
          animate={prefersReducedMotion ? undefined : { scaleX: 1, transition: { duration: 0.6, delay: 0.2 } }}
        />
        {/* Glint sweep */}
        {!prefersReducedMotion && (
          <>
            <motion.span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 -skew-x-12"
              initial={{ x: "-130%", opacity: 0 }}
              animate={{ x: "130%", opacity: 1 }}
              transition={{ duration: 1.2, ease: [0.2, 0, 0, 1], repeat: Number.POSITIVE_INFINITY, repeatDelay: 5 }}
              style={{
                background:
                  "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0) 100%)",
                mixBlendMode: "screen",
              }}
            />
            <motion.span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 -skew-x-12"
              initial={{ x: "-130%", opacity: 0 }}
              animate={{ x: "130%", opacity: 1 }}
              transition={{
                duration: 0.8,
                ease: [0.2, 0, 0, 1],
                repeat: Number.POSITIVE_INFINITY,
                repeatDelay: 5,
                delay: 0.3,
              }}
              style={{
                background:
                  "linear-gradient(90deg, rgba(201,166,70,0) 0%, rgba(201,166,70,0.3) 50%, rgba(201,166,70,0) 100%)",
                mixBlendMode: "overlay",
              }}
            />
          </>
        )}
      </motion.div>
    )
  }

  function CurrencySelector() {
    const [currency, setCurrency] = useState("EUR")
    const symbols = {
      EUR: "€",
      USD: "$",
      GBP: "£",
      AED: "د.إ",
      INR: "₹",
    }
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="h-9 gap-2 rounded-md border border-border px-3 text-sm font-normal hover:bg-accent/60 cursor-pointer"
            aria-label="Select currency"
          >
            <Globe className="size-4" aria-hidden="true" />
            <span className="tracking-wide">
              {currency} {symbols[currency]}
            </span>
            <ChevronDown className="size-4 opacity-70" aria-hidden="true" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="w-44 cursor-pointer">
          <DropdownMenuLabel>Currency</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {["EUR", "USD", "GBP", "AED", "INR"].map((c) => (
            <DropdownMenuItem key={c} onClick={() => setCurrency(c)}>
              <span className="mr-2 w-10 text-foreground/70">{c}</span>
              <span className="ml-auto text-foreground/70">
                {c === "EUR" ? "€" : c === "USD" ? "$" : c === "GBP" ? "£" : c === "AED" ? "د.إ" : "₹"}
              </span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    )
  }
  const navigate = useNavigate()
  const [currency, setCurrency] = useState("EUR")
  const handleLogin = () => {
    // Replace with your auth flow or route
    navigate("/")
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background supports-[backdrop-filter]:bg-background ">
      {/* Logo row */}
      <div className="mx-auto grid max-w-full grid-cols-3 items-center px-4 lg:px-20 py-1">
        {/* Left: mobile hamburger + desktop currency */}
        <div className="flex items-center h-11">
          <div className="md:hidden">
            <motion.button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((s) => !s)}
              className="inline-flex h-11 w-11 items-center justify-center  bg-gradient-to-br from-background to-accent/20  hover:border-border hover:bg-accent/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 transition-all duration-200 cursor-pointer"
              whileHover={prefersReducedMotion ? undefined : { scale: 1.05 }}
              whileTap={prefersReducedMotion ? undefined : { scale: 0.95 }}
            >
              <AnimatePresence initial={false} mode="wait">
                {!mobileOpen ? (
                  <motion.div
                    key="menu"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.18 }}
                  >
                    <Menu className="size-6" aria-hidden="true" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.18 }}
                  >
                    <X className="size-5" aria-hidden="true" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
          <div className="hidden md:block">
            <CurrencySelector />
          </div>
        </div>

        {/* Centered logo */}
        <div className="flex items-center justify-center">
          <motion.div
            className="relative inline-block overflow-hidden will-change-transform"
            style={{ perspective: 800 }}
            initial={prefersReducedMotion ? undefined : { clipPath: "inset(0 100% 0 0)" }}
            animate={
              prefersReducedMotion
                ? undefined
                : {
                    clipPath: "inset(0 0% 0 0)",
                    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.05 },
                  }
            }
            whileHover={
              prefersReducedMotion
                ? undefined
                : { rotateX: -1.5, rotateY: 2, scale: 1.01, transition: { duration: 0.5, ease: [0.2, 0, 0.2, 1] } }
            }
          >
            <motion.img
              src={logo}
              alt="Festo Trade logo"
              width={250}
              height={75}
              loading="eager"
              fetchPriority="high"
              className="h-14 w-40 md:h-[75px] md:w-[250px] select-none object-contain cursor-pointer"
              initial={initialLogo}
              animate={animateLogo}
              whileHover={
                prefersReducedMotion
                  ? undefined
                  : { y: -2, scale: 1.015, transition: { duration: 0.3, ease: [0.2, 0, 0.2, 1] } }
              }
              whileTap={prefersReducedMotion ? undefined : { scale: 0.99 }}
              onClick={()=>navigate("/")}
            />
            {!prefersReducedMotion && (
              <motion.span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -skew-x-12"
                variants={shimmerVariants}
                initial="rest"
                animate="sweep"
                whileHover="sweep"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.65) 50%, rgba(255,255,255,0) 100%)",
                  mixBlendMode: "screen",
                }}
              />
            )}
          </motion.div>
        </div>

        {/* Right: lucide icons */}
        <div className="flex items-center justify-end gap-3 h-11">
          <div className="flex items-center gap-2 md:hidden">
            <IconButton label="Search">
              <Search className="size-5" aria-hidden="true" />
            </IconButton>
            <IconButton label="Cart">
              <ShoppingBag className="size-5" aria-hidden="true" />
            </IconButton>
          </div>
          <div className="hidden md:flex md:items-center md:gap-3">
            <IconButton label="Account">
              <User className="size-5" aria-hidden="true" />
            </IconButton>
            <IconButton label="Search">
              <Search className="size-5" aria-hidden="true" />
            </IconButton>
            <IconButton label="Wishlist">
              <Heart className="size-5" aria-hidden="true" />
            </IconButton>
            <IconButton label="Bag">
              <ShoppingBag className="size-5" aria-hidden="true" />
            </IconButton>
          </div>
        </div>
      </div>

      {/* Nav row (desktop) */}
      <motion.nav
        onMouseEnter={cancelClose}
        onMouseLeave={() => scheduleClose(150)}
        className="mx-auto hidden !max-w-full items-center justify-center gap-6 px-4 lg:px-20 pb-3 pt-1 text-sm tracking-wide md:flex"
        variants={staggerContainer}
        initial="closed"
        animate="open"
      >
        {MENU.map((item) => (
          <motion.button
            key={item.key}
            type="button"
            onMouseEnter={() => openPanel(item.key)}
            onFocus={() => openPanel(item.key)}
            className={cn(
              "relative px-2 py-1 uppercase text-foreground/90 hover:text-foreground cursor-pointer text-xs",
            )}
            aria-expanded={panelOpen && activeMenu === item.key}
            aria-controls="mega-panel"
            variants={staggerItem}
            whileHover={prefersReducedMotion ? undefined : { y: -1, scale: 1.05 }}
            whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
            transition={{ type: "spring", stiffness: 500, damping: 30, mass: 0.4 }}
            onClick={() => {
              setPanelOpen(false);   // close panel
              setActiveMenu(null);   // optional: reset active menu 
              navigate(`${item?.url}`)
            }}
          >
            {item.label}
            <AnimatePresence mode="wait">
              {panelOpen && activeMenu === item.key && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute inset-x-2 -bottom-1 h-[2px] rounded bg-[#C9A646]"
                  initial={prefersReducedMotion ? undefined : { scaleX: 0 }}
                  animate={prefersReducedMotion ? undefined : { scaleX: 1 }}
                  exit={prefersReducedMotion ? undefined : { scaleX: 0 }}
                  transition={{ duration: 0.25, ease: [0.2, 0, 0, 1] }}
                />
              )}
            </AnimatePresence>
          </motion.button>
        ))}
      </motion.nav>

      {/* Mega panel under sticky header */}
      <motion.div
        id="mega-panel"
        role="region"
        aria-label="Navigation panel"
        aria-hidden={!panelOpen}
        className={cn(
          `absolute inset-x-0 top-full -mt-px z-50 max-h-[80vh] overflow-auto bg-background/98 backdrop-blur-sm md:block ${panelOpen ? "pointer-events-auto" : "pointer-events-none"}`,
        )}
        variants={panelVariants}
        initial="closed"
        animate={panelOpen ? "open" : "closed"}
        style={{ transformOrigin: "top center" }}
        onMouseEnter={cancelClose}
        onMouseLeave={() => scheduleClose(100)}
      >
        <div className="mx-auto h-full max-w-full">
          <div className="h-full border-b border-l border-r border-border bg-background shadow-2xl px-4 lg:px-14">
            <PanelContent imgUrl={currentRightImg} />
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.aside
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm md:hidden "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileOpen(false)}
          >
            <motion.div
              className="absolute z-50 inset-y-0 left-0 w-full max-w-sm border-r border-border bg-white backdrop-blur-sm shadow-2xl sm:w-80 flex flex-col"
              initial={prefersReducedMotion ? { x: 0 } : { x: "-100%", opacity: 0 }}
              animate={prefersReducedMotion ? { x: 0 } : { x: 0, opacity: 1 }}
              exit={prefersReducedMotion ? { x: 0 } : { x: "-100%", opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.2, 0, 0, 1] }}
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-label="Mobile menu"
            >
              {/* Header */}
              <div className="border-b border-border/50 bg-gradient-to-r from-background to-accent/10 px-6 py-4">
                <motion.div
                  className="flex items-center justify-between"
                  initial={prefersReducedMotion ? undefined : { opacity: 0, y: -10 }}
                  animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <motion.button
                    className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-gradient-to-br from-background to-accent/20 hover:bg-accent/60 transition-all duration-200 cursor-pointer"
                    whileHover={prefersReducedMotion ? undefined : { scale: 1.05 }}
                    whileTap={prefersReducedMotion ? undefined : { scale: 0.95 }}
                    aria-label="Wishlist"
                  >
                    <Heart className="size-6" aria-hidden="true" />
                  </motion.button>

                  <img src={logo || "/placeholder.svg"} alt="Logo" className="h-[50px] object-contain cursor-pointer" />

                  <motion.button
                    className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-gradient-to-br from-background to-accent/20 border border-border/60 hover:bg-accent/60 transition-all duration-200 shadow-sm cursor-pointer"
                    onClick={() => setMobileOpen(false)}
                    aria-label="Close menu"
                    whileHover={prefersReducedMotion ? undefined : { scale: 1.05 }}
                    whileTap={prefersReducedMotion ? undefined : { scale: 0.95 }}
                  >
                    <X className="size-5" aria-hidden="true" />
                  </motion.button>
                </motion.div>
              </div>

              {/* Scrollable middle content */}
              <div
                className="flex-1 overflow-y-auto overscroll-contain touch-auto px-6 pt-6"
                data-lenis-prevent
                onWheelCapture={(e) => e.stopPropagation()}
                onTouchMoveCapture={(e) => e.stopPropagation()}
              >
                <motion.nav className="space-y-1.5" variants={staggerContainer} initial="closed" animate="open">
                  {MENU.map((item, index) => (
                    <motion.details key={item.key} className="group" variants={staggerItem}>
                      <summary className="flex w-full cursor-pointer list-none items-center justify-between rounded-xl px-4 py-4 bg-transparent hover:bg-accent/60 transition-all duration-200 border border-transparent hover:border-border/30">
                        <span className="uppercase font-semibold text-sm tracking-wider">{item.label}</span>
                        <motion.span whileHover={prefersReducedMotion ? undefined : { scale: 1.1 }}>
                          <ChevronDown
                            className="size-4 text-foreground/60 transition-transform duration-300 group-open:rotate-180"
                            aria-hidden="true"
                          />
                        </motion.span>
                      </summary>
                      <motion.div
                        className="pl-4 pt-3 pb-2"
                        initial={prefersReducedMotion ? undefined : { opacity: 0, height: 0 }}
                        animate={prefersReducedMotion ? undefined : { opacity: 1, height: "auto" }}
                        transition={{ delay: 0.3 }}
                      >
                        {item.key === "diamond" ? (
                          <ul className="grid grid-cols-1 gap-2 text-sm leading-relaxed">
                            {DIAMOND_SHAPES.map((s) => {
                              const ShapeIcon = DiamondShapeSVGs[s]
                              return (
                                <li key={s} className="cursor-pointer">
                                  <motion.a
                                    className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 hover:bg-accent/60 transition-colors font-medium"
                                    whileHover={prefersReducedMotion ? undefined : { x: 2 }}
                                  >
                                    <ShapeIcon />
                                    <span>{s}</span>
                                  </motion.a>
                                </li>
                              )
                            })}
                          </ul>
                        ) : item.key === "jewelry" ? (
                          <ul className="space-y-1 text-sm leading-relaxed">
                            {Category.map((subItem) => (
                              <li key={subItem.name} className="cursor-pointer">
                                <motion.a
                                  className="inline-flex items-center gap-2 w-full rounded-lg px-3 py-2.5 hover:bg-accent/60 transition-colors font-medium"
                                  whileHover={prefersReducedMotion ? undefined : { x: 2 }}
                                >
                                  <subItem.Icon className="size-4 inline-block mr-2" />
                                  {subItem.name}
                                </motion.a>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <ul className="space-y-1 text-sm leading-relaxed">
                            {["Featured", "New Arrivals", "Bestsellers"].map((subItem) => (
                              <li key={subItem} className="cursor-pointer">
                                <motion.a
                                  className="block w-full rounded-lg px-3 py-2.5 hover:bg-accent/60 transition-colors font-medium"
                                  whileHover={prefersReducedMotion ? undefined : { x: 2 }}
                                >
                                  {subItem}
                                </motion.a>
                              </li>
                            ))}
                          </ul>
                        )}
                      </motion.div>
                    </motion.details>
                  ))}
                </motion.nav>
              </div>

              {/* Fixed bottom section */}
              <div className="border-t border-border px-6 py-4 space-y-3">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="w-full justify-between bg-transparent">
                      <span className="flex items-center gap-2">
                        <Globe className="size-4" />
                        <span>Currency</span>
                      </span>
                      <span className="font-semibold">{currency}</span>
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-sm">
                    <DialogHeader>
                      <DialogTitle>Select currency</DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-2">
                      {["EUR", "USD", "GBP", "AED", "INR"].map((c) => (
                        <Button
                          key={c}
                          variant={currency === c ? "default" : "outline"}
                          className="justify-between"
                          onClick={() => setCurrency(c)}
                        >
                          <span>{c}</span>
                          {currency === c && <span className="text-xs opacity-80">Selected</span>}
                        </Button>
                      ))}
                    </div>
                    <DialogFooter className="mt-2">
                      <DialogClose asChild>
                        <Button type="button">Done</Button>
                      </DialogClose>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>

                <Button className="w-full gap-2" onClick={handleLogin}>
                  <User className="size-4" />
                  <span>Login</span>
                </Button>
              </div>
            </motion.div>
          </motion.aside>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar
