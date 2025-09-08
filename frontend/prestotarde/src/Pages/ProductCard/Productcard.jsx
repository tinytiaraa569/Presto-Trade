// // "use client"

// // import { Card } from "@/components/ui/card"
// // import { Badge } from "@/components/ui/badge"
// // import { Button } from "@/components/ui/button"
// // import { Heart } from "lucide-react"
// // import { useState } from "react"
// // import { cn } from "@/lib/utils"

// // import gold from './images/gold.webp'
// // import rose from './images/rose.webp'
// // import white from './images/white.webp'


// // export default function ProductCard({ product }) {
// //   const [selectedColor, setSelectedColor] = useState(0)
// //   const [isLiked, setIsLiked] = useState(false)

// //   const discountAmount = product.originalPrice ? product.originalPrice - product.price : 0

// //   const currentImage = product.metalColors[selectedColor]?.images[0] || product.image

// //   return (
// //     <Card className="group relative overflow-hidden border-0 bg-white shadow-sm hover:shadow-lg transition-all duration-300 p-0 gap-1">
// //       {/* Discount Badge */}
// //       {product.discount && (
// //         <Badge
// //           variant="secondary"
// //           className="absolute top-3 left-3 z-10 bg-slate-600 text-white hover:bg-slate-700 rounded-sm px-2 py-1 text-xs font-medium"
// //         >
// //           {product.discount}% OFF
// //         </Badge>
// //       )}

// //       {/* Heart Icon */}
// //       <Button
// //         variant="ghost"
// //         size="icon"
// //         className="absolute top-3 right-3 z-10 h-8 w-8 rounded-full bg-white/80 hover:bg-white"
// //         onClick={() => setIsLiked(!isLiked)}
// //       >
// //         <Heart className={cn("h-4 w-4 transition-colors", isLiked ? "fill-red-500 text-red-500" : "text-slate-600")} />
// //       </Button>

// //       {/* Product Image */}
// //       <div className=" overflow-hidden bg-slate-50">
// //         <img
// //           src={currentImage || "/placeholder.svg"}
// //           alt={product.name}
// //           className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
// //         />
// //       </div>

// //       {/* Product Info */}
// //       <div className="p-4 space-y-3">
// //         <h3 className="font-medium text-slate-900 text-sm leading-tight line-clamp-1">{product.name}</h3>

// //         {/* Pricing */}
// //         <div className="flex items-center gap-2">
// //           {product.originalPrice && (
// //             <span className="text-slate-400 text-sm line-through">₹{product.originalPrice.toLocaleString()}</span>
// //           )}
// //           <span className="text-slate-900 font-semibold text-lg">₹{product.price.toLocaleString()}</span>
// //         </div>

// //         {/* Save Amount Badge */}
// //         {discountAmount > 0 && (
// //           <Badge variant="secondary" className="bg-slate-600 text-white hover:bg-slate-700 text-xs px-2 py-1">
// //             SAVE ₹{discountAmount.toLocaleString()}
// //           </Badge>
// //         )}

// //         {/* Color Variants */}
// //         <div className="flex gap-2 pt-2">
// //           {product.metalColors.map((color, index) => (
// //             <button
// //               key={index}
// //               onClick={() => setSelectedColor(index)}
// //               className={cn(
// //                 "w-6 h-6 rounded-full border-2 transition-all duration-200",
// //                 selectedColor === index ? "border-slate-900 scale-110" : "border-slate-200 hover:border-slate-400",
// //                 color.colorClass,
// //               )}
// //               title={color.name}
// //             >
// //                 <img src="" alt="" />
// //                 </button>
// //           ))}
// //         </div>
// //       </div>
// //     </Card>
// //   )
// // }




// "use client"

// import { Card } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import { Button } from "@/components/ui/button"
// import { Heart } from "lucide-react"
// import { useState } from "react"
// import { cn } from "@/lib/utils"
// import {  motion } from 'framer-motion'


// import gold from './images/gold.webp'
// import rose from './images/rose.webp'
// import white from './images/white.webp'

// export default function ProductCard({ product }) {
//   const [selectedColor, setSelectedColor] = useState(0)
//   const [isLiked, setIsLiked] = useState(false)
//   const [hoveredColor, setHoveredColor] = useState(null)
//   const [isShining, setIsShining] = useState(false)

//   const discountAmount = product.originalPrice ? product.originalPrice - product.price : 0

//   const getDisplayImage = () => {
//     if (hoveredColor !== null) {
//       const hoverColorData = product.metalColors[hoveredColor]
//       return hoverColorData?.images[1] || hoverColorData?.images[0] || product.image
//     }
//     return product.metalColors[selectedColor]?.images[0] || product.image
//   }

//   const getMetalColorImage = (colorName) => {
//     switch (colorName.toLowerCase()) {
//       case "yellow gold":
//       case "gold":
//         return gold
//       case "rose gold":
//         return rose
//       case "white gold":
//       case "white":
//         return white
//       default:
//         return gold
//     }
//   }

//   const handleColorChange = (index) => {
//     if (index !== selectedColor) {
//       setIsShining(true)
//       setTimeout(() => {
//         setSelectedColor(index)
//         setIsShining(false)
//       }, 300)
//     }
//   }

//   return (
//     <Card className="group relative overflow-hidden border-0 bg-white shadow-sm hover:shadow-lg transition-all duration-300 p-0 gap-1">
//       {/* Discount Badge */}
//       {product.discount && (
//         <Badge
//           variant="secondary"
//           className="absolute top-3 left-3 z-10 bg-slate-600 text-white hover:bg-slate-700 rounded-sm px-2 py-1 text-xs font-medium"
//         >
//           {product.discount}% OFF
//         </Badge>
//       )}

//       {/* Heart Icon */}
//       <Button
//         variant="ghost"
//         size="icon"
//         className="absolute top-3 right-3 z-10 h-8 w-8 rounded-full bg-white/80 hover:bg-white"
//         onClick={() => setIsLiked(!isLiked)}
//       >
//         <Heart className={cn("h-4 w-4 transition-colors", isLiked ? "fill-red-500 text-red-500" : "text-slate-600")} />
//       </Button>

//       {/* Product Image */}
//       <div className="overflow-hidden bg-slate-50 relative cursor-pointer">
//         <img
//           src={getDisplayImage() || "/placeholder.svg"}
//           alt={product.name}
//           className={cn(
//             "h-64 w-full object-cover transition-all duration-300 group-hover:scale-105",
            
//           )}
//         />
//         {isShining && (
             
//                     <>
//                       <motion.span
//                         aria-hidden="true"
//                         className="pointer-events-none absolute inset-0 -skew-x-12"
//                         initial={{ x: "-130%", opacity: 0 }}
//                         animate={{ x: "130%", opacity: 1 }}
//                         transition={{ duration: 1.2, ease: [0.2, 0, 0, 1], repeat: Number.POSITIVE_INFINITY, repeatDelay: 5 }}
//                         style={{
//                           background:
//                             "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0) 100%)",
//                           mixBlendMode: "screen",
//                         }}
//                       />
//                       <motion.span
//                         aria-hidden="true"
//                         className="pointer-events-none absolute inset-0 -skew-x-12"
//                         initial={{ x: "-130%", opacity: 0 }}
//                         animate={{ x: "130%", opacity: 1 }}
//                         transition={{
//                           duration: 0.8,
//                           ease: [0.2, 0, 0, 1],
//                           repeat: Number.POSITIVE_INFINITY,
//                           repeatDelay: 5,
//                           delay: 0.3,
//                         }}
//                         style={{
//                           background:
//                             "linear-gradient(90deg, rgba(201,166,70,0) 0%, rgba(201,166,70,0.3) 50%, rgba(201,166,70,0) 100%)",
//                           mixBlendMode: "overlay",
//                         }}
//                       />
//                     </>
            
//         )}
//       </div>

//       {/* Product Info */}
//       <div className="p-4 space-y-1">
//         <h3 className="font-medium text-slate-900 text-sm leading-tight line-clamp-1">{product.name}</h3>

//         {/* Pricing */}
//         <div className="flex items-center gap-2">
//           {product.originalPrice && (
//             <span className="text-slate-400 text-sm line-through">₹{product.originalPrice.toLocaleString()}</span>
//           )}
//           <span className="text-slate-900 font-semibold text-lg">₹{product.price.toLocaleString()}</span>
//         </div>

//         {/* Save Amount Badge */}
//         {discountAmount > 0 && (
//           <Badge variant="secondary" className="bg-slate-600 text-white hover:bg-slate-700 text-xs px-2 py-1">
//             SAVE ₹{discountAmount.toLocaleString()}
//           </Badge>
//         )}

//         {/* Color Variants */}
//         <div className="flex gap-2 pt-2">
//           {product.metalColors.map((color, index) => (
//             <button
//               key={index}
//               onClick={() => handleColorChange(index)}
//               onMouseEnter={() => setHoveredColor(index)}
//               onMouseLeave={() => setHoveredColor(null)}
//               className={cn(
//                 "w-6 h-6 rounded-full border-2 transition-all duration-200 overflow-hidden relative p-[1.5px] cursor-pointer",
//                 selectedColor === index ? "border-slate-900 scale-110" : "border-slate-200 hover:border-slate-400",
//               )}
//               title={color.name}
//             >
//               <img
//                 src={getMetalColorImage(color.name) || "/placeholder.svg"}
//                 alt={color.name}
//                 className="w-full h-full object-cover rounded-full "
//               />
//             </button>
//           ))}
//         </div>
//       </div>
//     </Card>
//   )
// }


"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Heart } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

import gold from "./images/gold.webp"
import rose from "./images/rose.webp"
import white from "./images/white.webp"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"

export default function ProductCard({ product }) {
  const [selectedColor, setSelectedColor] = useState(0)
  const [isLiked, setIsLiked] = useState(false)
  const [isShining, setIsShining] = useState(false)

  const discountAmount = product.originalPrice ? product.originalPrice - product.price : 0

  const getDisplayImage = () => {
    return product.metalColors[selectedColor]?.images[0] || product.image
  }

  const getMetalColorImage = (colorName) => {
    switch (colorName.toLowerCase()) {
      case "yellow gold":
      case "gold":
        return gold
      case "rose gold":
        return rose
      case "white gold":
      case "white":
        return white
      default:
        return gold
    }
  }

  const handleColorChange = (index) => {
    if (index !== selectedColor) {
      setIsShining(true)
      setTimeout(() => {
        setSelectedColor(index)
        setIsShining(false)
      }, 300)
    }
  }

  return (
    <Card className="group relative overflow-hidden border-0 bg-white shadow-sm hover:shadow-lg transition-all duration-300 p-0 gap-1">
      {/* Discount Badge */}
      {product.discount && (
        <Badge
          variant="secondary"
          className="absolute top-3 left-3 z-10 bg-slate-600 text-white hover:bg-slate-700 rounded-sm px-2 py-1 text-xs font-medium"
        >
          {product.discount}% OFF
        </Badge>
      )}

      {/* Heart Icon */}
       <Tooltip>
         <TooltipTrigger asChild>


       
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-3 right-3 z-10 h-8 w-8 rounded-full bg-white/80 hover:bg-white cursor-pointer"
        onClick={() => setIsLiked(!isLiked)}
      >
        <Heart className={cn("h-4 w-4 transition-colors", isLiked ? "fill-red-500 text-red-500" : "text-slate-600")} />
      </Button>
         </TooltipTrigger>
         <TooltipContent>
      Add to Wishlist
    </TooltipContent>

      </Tooltip>

      {/* Product Image */}
      <div className="overflow-hidden bg-slate-50 relative cursor-pointer">
        <img
          src={getDisplayImage() || "/placeholder.svg"}
          alt={product.name}
          className={cn("h-60 w-full object-cover transition-all duration-300 group-hover:scale-105")}
        />
        {isShining && (
          <>
            <motion.span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 -skew-x-12"
              initial={{ x: "-130%", opacity: 0 }}
              animate={{ x: "130%", opacity: 1 }}
              transition={{ duration: 1.2, ease: [0.2, 0, 0, 1], repeat: Number.POSITIVE_INFINITY, repeatDelay: 5 }}
              style={{
                background:
                  "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.6) 50%, rgba(255,255,255,0) 100%)",
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
                  "linear-gradient(90deg, rgba(201,166,70,0) 0%, rgba(201,166,70,0.6) 50%, rgba(201,166,70,0) 100%)",
                mixBlendMode: "overlay",
              }}
            />
          </>
        )}
      </div>

      {/* Product Info */}
      <div className="p-4 space-y-1">
        <h3 className="font-medium text-slate-900 text-sm leading-tight line-clamp-1">{product.name}</h3>

        {/* Pricing */}
        <div className="flex items-center gap-2">
          {product.originalPrice && (
            <span className="text-slate-400 text-sm line-through">₹{product.originalPrice.toLocaleString()}</span>
          )}
          <span className="text-slate-900 font-semibold text-lg">₹{product.price.toLocaleString()}</span>
        </div>

        {/* Save Amount Badge */}
        {discountAmount > 0 && (
          <Badge variant="secondary" className="bg-slate-600 text-white hover:bg-slate-700 text-xs px-2 py-1">
            SAVE ₹{discountAmount.toLocaleString()}
          </Badge>
        )}

        {/* Color Variants */}
        <div className="flex gap-2 pt-2">
          {product.metalColors.map((color, index) => (
            <Tooltip key={index} >
                <TooltipTrigger asChild>
                  
            <button
            //   key={index}
              onClick={() => handleColorChange(index)}
              className={cn(
                "w-6 h-6 rounded-full border-2 transition-all duration-200 overflow-hidden relative p-[1.5px] cursor-pointer",
                selectedColor === index ? "border-slate-900 scale-110" : "border-slate-200 hover:border-slate-400",
              )}
              
            >
              <img
                src={getMetalColorImage(color.name) || "/placeholder.svg"}
                alt={color.name}
                className="w-full h-full object-cover rounded-full "
              />
            </button>
              </TooltipTrigger>
              <TooltipContent side="bottom">
                {color.name}
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </div>
    </Card>
  )
}
