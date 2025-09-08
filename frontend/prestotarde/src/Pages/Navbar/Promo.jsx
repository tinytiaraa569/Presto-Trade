import { cn } from '@/lib/utils'
import React, { useRef } from 'react'
 import { motion, AnimatePresence, useReducedMotion } from "framer-motion"
const Promo = () => {
      const headerRef = useRef(null)
      const promoVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
}
    
  return (
     <div ref={headerRef} className={cn("relative")}>
      {/* Promo strip */}
      <motion.div
        className="w-full bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 text-white"
        initial={promoVariants.initial}
        animate={promoVariants.animate}
        role="region"
        aria-label="Promotional message"
      >
        <div className="mx-auto flex max-w-6xl items-center justify-center px-4 py-2">
          <motion.span
            className="text-xs tracking-wide"
            initial={promoVariants.initial}
            animate={promoVariants.animate}
          >
            FREE SHIPPING ABOVE 95$
          </motion.span>
        </div>
      </motion.div>
        </div>
  )
}

export default Promo