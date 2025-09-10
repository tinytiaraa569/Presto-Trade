"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Heart, Eye, Info } from "lucide-react"
import { useRef, useState } from "react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

export default function DiamondCard({ diamond }) {
      const videoRef = useRef(null)
  const [isLiked, setIsLiked] = useState(false)
  const [isShining, setIsShining] = useState(false)

  const discountAmount = diamond.originalPrice ? diamond.originalPrice - diamond.price : 0

  const handleViewDetails = () => {
    setIsShining(true)
    setTimeout(() => setIsShining(false), 1200)
  }

  const handleMouseEnter = () => {
    if (videoRef.current && diamond.video && diamond.video.includes("diamondfoundry.com")) {
      videoRef.current.play()
    }
  }

  const handleMouseLeave = () => {
    if (videoRef.current && diamond.video && diamond.video.includes("diamondfoundry.com")) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
  }


  return (
    <TooltipProvider>
      <Card className="group relative overflow-hidden border-0 bg-white shadow-sm hover:shadow-xl transition-all duration-300 p-0 gap-0">
        {/* Discount Badge */}
        {diamond.discount && (
          <Badge
            variant="secondary"
            className="absolute top-3 left-3 z-10 bg-emerald-600 text-white hover:bg-emerald-700 rounded-sm px-2 py-1 text-xs font-medium"
          >
            {diamond.discount}% OFF
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
              <Heart
                className={cn("h-4 w-4 transition-colors", isLiked ? "fill-red-500 text-red-500" : "text-slate-600")}
              />
            </Button>
          </TooltipTrigger>
          <TooltipContent>Add to Wishlist</TooltipContent>
        </Tooltip>

        {/* Diamond Image */}
       {/* Diamond Video/Image */}
        <div
          className="overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100 relative cursor-pointer"
          onClick={handleViewDetails}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {diamond.video && diamond.video.includes("diamondfoundry.com") ? (
            <video
              ref={videoRef}
              src={diamond.video}
              className={cn("h-56 w-full object-cover transition-all duration-300 group-hover:scale-105 ")}
              muted
              playsInline
                preload="auto"     // ensure browser fetches metadata + first frame
                onLoadedData={(e) => {
                    // Pause immediately at the first frame
                    e.currentTarget.currentTime = 0;
                    e.currentTarget.pause();
                }}
            />
          ) : (
            <img
              src={diamond.image || "/placeholder.svg"}
              alt={diamond.name}
              className={cn("h-64 w-full object-cover transition-all duration-300 group-hover:scale-105")}
            />
          )}
          {isShining && (
            <>
              <motion.span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -skew-x-12"
                initial={{ x: "-130%", opacity: 0 }}
                animate={{ x: "130%", opacity: 1 }}
                transition={{ duration: 1.2, ease: [0.2, 0, 0, 1] }}
                style={{
                  background:
                    "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,0) 100%)",
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
                  delay: 0.3,
                }}
                style={{
                  background:
                    "linear-gradient(90deg, rgba(59,130,246,0) 0%, rgba(59,130,246,0.4) 50%, rgba(59,130,246,0) 100%)",
                  mixBlendMode: "overlay",
                }}
              />
            </>
          )}
        </div>
        {/* Diamond Info */}
        <div className="p-4 space-y-0.5">
          <div className="flex items-start justify-between">
            <h3 className="font-semibold text-slate-900 text-sm leading-tight line-clamp-2">{diamond.name}</h3>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="ghost" size="icon" className="h-6 w-6 text-slate-400 hover:text-slate-600 cursor-pointer">
                  <Info className="h-4 w-4" />
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-md">
                <DialogHeader>
                  <DialogTitle>Diamond Details</DialogTitle>
                </DialogHeader>
                <div className="space-y-3">
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <span className="font-medium">Shape:</span> {diamond.shape}
                    </div>
                    <div>
                      <span className="font-medium">Cut:</span> {diamond.cut}
                    </div>
                    <div>
                      <span className="font-medium">Color:</span> {diamond.color}
                    </div>
                    <div>
                      <span className="font-medium">Clarity:</span> {diamond.clarity}
                    </div>
                    <div>
                      <span className="font-medium">Carat:</span> {diamond.carat}ct
                    </div>
                    <div>
                      <span className="font-medium">Polish:</span> {diamond.polish}
                    </div>
                    <div>
                      <span className="font-medium">Symmetry:</span> {diamond.symmetry}
                    </div>
                    <div>
                      <span className="font-medium">Fluorescence:</span> {diamond.fluorescence}
                    </div>
                  </div>
                  <Badge variant="outline" className="w-fit">
                    {diamond.certification} Certified
                  </Badge>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          {/* Diamond Specs */}
          <div className="flex flex-wrap gap-1">
            <Badge variant="outline" className="text-xs px-2 py-0.5">
              {diamond.carat}ct
            </Badge>
            <Badge variant="outline" className="text-xs px-2 py-0.5">
              {diamond.color}
            </Badge>
            <Badge variant="outline" className="text-xs px-2 py-0.5">
              {diamond.clarity}
            </Badge>
            <Badge variant="outline" className="text-xs px-2 py-0.5">
              {diamond.cut}
            </Badge>
          </div>

          {/* Pricing */}
          <div className="flex items-center gap-2">
            {diamond.originalPrice && (
              <span className="text-slate-400 text-sm line-through">₹{diamond.originalPrice.toLocaleString()}</span>
            )}
            <span className="text-slate-900 font-bold text-lg">₹{diamond.price.toLocaleString()}</span>
          </div>

          {/* Save Amount Badge */}
          {discountAmount > 0 && (
            <Badge variant="secondary" className="bg-emerald-600 text-white hover:bg-emerald-700 text-xs px-2 py-1">
              SAVE ₹{discountAmount.toLocaleString()}
            </Badge>
          )}

          {/* Action Buttons */}
          <div className="flex gap-2 pt-2">
            <Button className="flex-1 bg-slate-900 hover:bg-slate-800 text-white cursor-pointer" size="sm">
              <Eye className="h-4 w-4 mr-1" />
              Buy Now
            </Button>
            <Button variant="outline" size="sm" className="px-3 bg-transparent cursor-pointer">
              Compare
            </Button>
          </div>
        </div>
      </Card>
    </TooltipProvider>
  )
}
