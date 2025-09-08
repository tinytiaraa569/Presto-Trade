// "use client"

// import { useEffect, useState, useMemo } from "react"
// import { Card, CardContent } from "@/components/ui/card"
// import { AnimatePresence, motion } from "framer-motion"
// import {
//   Filter,
//   Search,
//   SlidersHorizontal,
//   Loader2,
//   Grid3X3,
//   Grid2X2,
//   LayoutGrid,
//   ChevronDown,
//   ChevronUp,
// } from "lucide-react"
// import { Input } from "@/components/ui/input"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { Button } from "@/components/ui/button"
// import { Badge } from "@/components/ui/badge"
// import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer"
// import { Slider } from "@/components/ui/slider"
// import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
// import { cn } from "@/lib/utils"
// import {
//   jewelryCategories,
//   productsdata,
//   Collections,
//   DiamondShapeSVGs,
//   Metalcolors,
//   CaratOptions,
//   ColorStones,
// } from "@/data"
// import ProductCard from "../ProductCard/Productcard"
// import { Separator } from "@/components/ui/separator"

// // Debounce hook for price range
// function useDebounce(value, delay) {
//   const [debouncedValue, setDebouncedValue] = useState(value)

//   useEffect(() => {
//     const handler = setTimeout(() => {
//       setDebouncedValue(value)
//     }, delay)

//     return () => {
//       clearTimeout(handler)
//     }
//   }, [value, delay])

//   return debouncedValue
// }

// function ProductsPage() {
//   const [searchQuery, setSearchQuery] = useState("")
//   const [priceRange, setPriceRange] = useState([0, 350000])
//   const [sortOption, setSortOption] = useState("default")
//   const [selectedMetalColor, setSelectedMetalColor] = useState("")
//   const [selectedDiamondShape, setSelectedDiamondShape] = useState("")
//   const [selectedCollection, setSelectedCollection] = useState("")
//   const [selectedCarat, setSelectedCarat] = useState("")
//   const [selectedColorStone, setSelectedColorStone] = useState("")
//   const [selectedEnamelColor, setSelectedEnamelColor] = useState("")
//   const [selectedTag, setSelectedTag] = useState("")
//   const [selectedAgeGroup, setSelectedAgeGroup] = useState("")
//   const [loading, setLoading] = useState(false)
//   const [selectedCategory, setSelectedCategory] = useState("all")

//   const [gridLayout, setGridLayout] = useState("4")
//   const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false)
//   const [expandedSections, setExpandedSections] = useState({
//     category: true,
//     price: true,
//     diamondShape: true,
//     colorStone: false,
//     metalColor: true,
//     carat: false,
//     collection: false,
//     colors: false,
//     tags: false,
//   })

//   const debouncedSearchQuery = useDebounce(searchQuery, 300)
//   const debouncedPriceRange = useDebounce(priceRange, 500)

//   const filteredProducts = useMemo(() => {
//     return productsdata.filter((product) => {
//       const matchesSearch = product.name.toLowerCase().includes(debouncedSearchQuery.toLowerCase())
//       const matchesPrice = product.price >= debouncedPriceRange[0] && product.price <= debouncedPriceRange[1]
//       const matchesCategory =
//         selectedCategory === "all" || selectedCategory === "All Categories" || product.category === selectedCategory
//       const matchesMetalColor =
//         !selectedMetalColor ||
//         (product.metalColors && product.metalColors.some((metal) => metal.name === selectedMetalColor))
//       const matchesCarat = !selectedCarat || selectedCarat === "all" || product.carat === selectedCarat
//       const matchesColorStone = !selectedColorStone || product.colorStone === selectedColorStone
//       const matchesDiamondShape = !selectedDiamondShape || product.diamondShape === selectedDiamondShape
//       const matchesCollection =
//         !selectedCollection || selectedCollection === "all" || product.collection === selectedCollection

//       return (
//         matchesSearch &&
//         matchesPrice &&
//         matchesCategory &&
//         matchesMetalColor &&
//         matchesCarat &&
//         matchesColorStone &&
//         matchesDiamondShape &&
//         matchesCollection
//       )
//     })
//   }, [
//     debouncedSearchQuery,
//     debouncedPriceRange,
//     selectedCategory,
//     selectedMetalColor,
//     selectedCarat,
//     selectedColorStone,
//     selectedDiamondShape,
//     selectedCollection,
//   ])

//   const sortedProducts = useMemo(() => {
//     const sorted = [...filteredProducts]
//     switch (sortOption) {
//       case "price-low":
//         return sorted.sort((a, b) => a.price - b.price)
//       case "price-high":
//         return sorted.sort((a, b) => b.price - a.price)
//       case "name":
//         return sorted.sort((a, b) => a.name.localeCompare(b.name))
//       case "rating":
//         return sorted.sort((a, b) => (b.rating || 0) - (a.rating || 0))
//       case "default":
//       default:
//         return sorted
//     }
//   }, [filteredProducts, sortOption])

//   const clearAllFilters = () => {
//     setSearchQuery("")
//     setPriceRange([0, 350000])
//     setSelectedCategory("all")
//     setSelectedMetalColor("")
//     setSelectedDiamondShape("")
//     setSelectedCollection("")
//     setSelectedCarat("")
//     setSelectedColorStone("")
//     setSelectedEnamelColor("")
//     setSelectedTag("")
//     setSelectedAgeGroup("")
//     setSortOption("default")
//   }

//   const activeFiltersCount = [
//     searchQuery,
//     selectedCategory !== "all" && selectedCategory !== "All Categories" ? selectedCategory : "",
//     selectedMetalColor,
//     selectedDiamondShape,
//     selectedCollection !== "all" ? selectedCollection : "",
//     selectedCarat !== "all" ? selectedCarat : "",
//     selectedColorStone,
//     selectedEnamelColor,
//     selectedTag,
//     selectedAgeGroup,
//     priceRange[0] > 0 || priceRange[1] < 350000 ? "price" : "",
//   ].filter(Boolean).length

//   const toggleSection = (section) => {
//     setExpandedSections((prev) => ({
//       ...prev,
//       [section]: !prev[section],
//     }))
//   }

//   const getGridClasses = () => {
//     switch (gridLayout) {
//       case "2":
//         return "grid-cols-1 sm:grid-cols-2"
//       case "3":
//         return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
//       case "4":
//         return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
//       default:
//         return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
//     }
//   }

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth >= 1024) {
//         // lg breakpoint
//         setIsFilterDrawerOpen(false)
//       }
//     }

//     window.addEventListener("resize", handleResize)
//     return () => window.removeEventListener("resize", handleResize)
//   }, [])

//   const FilterContent = ({ isMobile = false }) => (
//     <div className="space-y-5">
//       {/* Search */}
//       <div className="space-y-2">
//         <label className="text-xs font-semibold text-slate-800 uppercase tracking-wide ">Search Products</label>
//         <div className="relative mt-1">
//           <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
//           <Input
//             placeholder="Search luxury jewelry..."
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             className="pl-10 bg-white border-slate-300 focus:border-amber-500 focus:ring-amber-500/20 rounded-lg text-sm"
//           />
//         </div>
//       </div>

//       {/* Categories */}
//       <Collapsible open={expandedSections.category} onOpenChange={() => toggleSection("category")}>
//         <CollapsibleTrigger className="flex items-center justify-between w-full text-left group">
//           <span className="text-xs font-semibold text-slate-800 uppercase tracking-wide group-hover:text-amber-600 transition-colors">
//             Categories
//           </span>
//           {expandedSections.category ? (
//             <ChevronUp className="h-3 w-3 text-slate-600" />
//           ) : (
//             <ChevronDown className="h-3 w-3 text-slate-600" />
//           )}
//         </CollapsibleTrigger>
//         <CollapsibleContent className="space-y-2 mt-2">
//           <Select value={selectedCategory} onValueChange={setSelectedCategory}>
//             <SelectTrigger className="bg-white border-slate-300 focus:border-amber-500 rounded-lg text-sm h-9">
//               <SelectValue placeholder="All Categories" />
//             </SelectTrigger>
//             <SelectContent>
//               <SelectItem value="all">All Categories</SelectItem>
//               {jewelryCategories.map((cat) => (
//                 <SelectItem key={cat.id} value={cat.name}>
//                   {cat.name}
//                 </SelectItem>
//               ))}
//             </SelectContent>
//           </Select>
//         </CollapsibleContent>
//       </Collapsible>

//       {/* Price Range */}
//       <Collapsible open={expandedSections.price} onOpenChange={() => toggleSection("price")}>
//         <CollapsibleTrigger className="flex items-center justify-between w-full text-left group">
//           <span className="text-xs font-semibold text-slate-800 uppercase tracking-wide group-hover:text-amber-600 transition-colors">
//             Price Range
//           </span>
//           {expandedSections.price ? (
//             <ChevronUp className="h-3 w-3 text-slate-600" />
//           ) : (
//             <ChevronDown className="h-3 w-3 text-slate-600" />
//           )}
//         </CollapsibleTrigger>
//         <CollapsibleContent className="space-y-2 mt-2">
//           <Slider
//             value={priceRange}
//             onValueChange={setPriceRange}
//             max={350000}
//             min={0}
//             step={1000}
//             className="w-full"
//           />
//           <div className="flex justify-between text-xs text-slate-600 font-medium">
//             <span>₹{priceRange[0].toLocaleString()}</span>
//             <span>₹{priceRange[1].toLocaleString()}</span>
//           </div>
//         </CollapsibleContent>
//       </Collapsible>

//       {/* Diamond Shapes - Show only on desktop or first filter on mobile */}
//       {(!isMobile || (isMobile && true)) && (
//         <Collapsible open={expandedSections.diamondShape} onOpenChange={() => toggleSection("diamondShape")}>
//           <CollapsibleTrigger className="flex items-center justify-between w-full text-left group">
//             <span className="text-xs font-semibold text-slate-800 uppercase tracking-wide group-hover:text-amber-600 transition-colors">
//               Diamond Shapes
//             </span>
//             {expandedSections.diamondShape ? (
//               <ChevronUp className="h-3 w-3 text-slate-600" />
//             ) : (
//               <ChevronDown className="h-3 w-3 text-slate-600" />
//             )}
//           </CollapsibleTrigger>
//           <CollapsibleContent className="space-y-2 mt-2">
//             <div className="grid grid-cols-3 gap-1.5">
//               {Object.entries(DiamondShapeSVGs).map(([shape, Component]) => (
//                 <button
//                   key={shape}
//                   onClick={() => setSelectedDiamondShape(selectedDiamondShape === shape ? "" : shape)}
//                   className={cn(
//                     "flex flex-col items-center p-2 rounded-lg border-2 transition-all duration-200 hover:shadow-md hover:bg-slate-50",
//                     selectedDiamondShape === shape
//                       ? "border-amber-500 bg-amber-50 shadow-sm"
//                       : "border-slate-200 bg-white hover:border-slate-300",
//                   )}
//                 >
//                   <Component />
//                   <span className="text-[10px] font-medium text-slate-700 mt-1">{shape}</span>
//                 </button>
//               ))}
//             </div>
//           </CollapsibleContent>
//         </Collapsible>
//       )}

//       {/* Metal Colors - Show only on desktop or second filter on mobile */}
//       {(!isMobile || (isMobile && true)) && (
//         <Collapsible open={expandedSections.metalColor} onOpenChange={() => toggleSection("metalColor")}>
//           <CollapsibleTrigger className="flex items-center justify-between w-full text-left group">
//             <span className="text-xs font-semibold text-slate-800 uppercase tracking-wide group-hover:text-amber-600 transition-colors">
//               Metal Colors
//             </span>
//             {expandedSections.metalColor ? (
//               <ChevronUp className="h-3 w-3 text-slate-600" />
//             ) : (
//               <ChevronDown className="h-3 w-3 text-slate-600" />
//             )}
//           </CollapsibleTrigger>
//           <CollapsibleContent className="space-y-2 mt-2">
//             <div className="space-y-1.5">
//               {Metalcolors.map((metal) => (
//                 <button
//                   key={metal.name}
//                   onClick={() => setSelectedMetalColor(selectedMetalColor === metal.name ? "" : metal.name)}
//                   className={cn(
//                     "flex items-center w-full p-2 rounded-lg border-2 transition-all duration-200 hover:shadow-md hover:bg-slate-50",
//                     selectedMetalColor === metal.name
//                       ? "border-amber-500 bg-amber-50 shadow-sm"
//                       : "border-slate-200 bg-white hover:border-slate-300",
//                   )}
//                 >
//                   <img
//                     src={metal.imgurl || "/placeholder.svg"}
//                     alt={metal.name}
//                     className="h-6 w-6 rounded-full object-cover mr-2 border border-slate-200"
//                   />
//                   <span className="text-xs font-medium text-slate-700">{metal.name}</span>
//                 </button>
//               ))}
//             </div>
//           </CollapsibleContent>
//         </Collapsible>
//       )}

//       {/* Color Stones - Desktop only */}
//       {(!isMobile || (isMobile && true)) && (
//         <Collapsible open={expandedSections.colorStone} onOpenChange={() => toggleSection("colorStone")}>
//           <CollapsibleTrigger className="flex items-center justify-between w-full text-left group">
//             <span className="text-xs font-semibold text-slate-800 uppercase tracking-wide group-hover:text-amber-600 transition-colors">
//               Gemstones
//             </span>
//             {expandedSections.colorStone ? (
//               <ChevronUp className="h-3 w-3 text-slate-600" />
//             ) : (
//               <ChevronDown className="h-3 w-3 text-slate-600" />
//             )}
//           </CollapsibleTrigger>
//           <CollapsibleContent className="space-y-2 mt-2">
//             <div className="grid grid-cols-3 gap-1.5">
//               {ColorStones.map((stone) => (
//                 <button
//                   key={stone.name}
//                   onClick={() => setSelectedColorStone(selectedColorStone === stone.name ? "" : stone.name)}
//                   className={cn(
//                     "flex flex-col items-center p-2 rounded-lg border-2 transition-all duration-200 hover:shadow-md hover:bg-slate-50",
//                     selectedColorStone === stone.name
//                       ? "border-amber-500 bg-amber-50 shadow-sm"
//                       : "border-slate-200 bg-white hover:border-slate-300",
//                   )}
//                 >
//                   {stone.component ? (
//                     <stone.component />
//                   ) : (
//                     <img
//                       src={stone.image || "/placeholder.svg"}
//                       alt={stone.name}
//                       className="h-6 w-6 rounded-full object-cover border border-slate-200"
//                     />
//                   )}
//                   <span className="text-[10px] font-medium text-slate-700 mt-1">{stone.name}</span>
//                 </button>
//               ))}
//             </div>
//           </CollapsibleContent>
//         </Collapsible>
//       )}

//       {/* Carat - Desktop only */}
//       {(!isMobile || (isMobile && true)) && (
//         <Collapsible open={expandedSections.carat} onOpenChange={() => toggleSection("carat")}>
//           <CollapsibleTrigger className="flex items-center justify-between w-full text-left group">
//             <span className="text-xs font-semibold text-slate-800 uppercase tracking-wide group-hover:text-amber-600 transition-colors">
//               Carat Weight
//             </span>
//             {expandedSections.carat ? (
//               <ChevronUp className="h-3 w-3 text-slate-600" />
//             ) : (
//               <ChevronDown className="h-3 w-3 text-slate-600" />
//             )}
//           </CollapsibleTrigger>
//           <CollapsibleContent className="space-y-2 mt-2">
//             <Select value={selectedCarat} onValueChange={setSelectedCarat}>
//               <SelectTrigger className="bg-white border-slate-300 focus:border-amber-500 rounded-lg text-sm h-9">
//                 <SelectValue placeholder="All Carats" />
//               </SelectTrigger>
//               <SelectContent>
//                 <SelectItem value="all">All Carats</SelectItem>
//                 {CaratOptions.map((carat) => (
//                   <SelectItem key={carat.value} value={carat.value}>
//                     {carat.label}
//                   </SelectItem>
//                 ))}
//               </SelectContent>
//             </Select>
//           </CollapsibleContent>
//         </Collapsible>
//       )}

//       {/* Collections - Desktop only */}
//       {(!isMobile || (isMobile && true)) && (
//         <Collapsible open={expandedSections.collection} onOpenChange={() => toggleSection("collection")}>
//           <CollapsibleTrigger className="flex items-center justify-between w-full text-left group">
//             <span className="text-xs font-semibold text-slate-800 uppercase tracking-wide group-hover:text-amber-600 transition-colors">
//               Collections
//             </span>
//             {expandedSections.collection ? (
//               <ChevronUp className="h-3 w-3 text-slate-600" />
//             ) : (
//               <ChevronDown className="h-3 w-3 text-slate-600" />
//             )}
//           </CollapsibleTrigger>
//           <CollapsibleContent className="space-y-2 mt-2">
//             <Select value={selectedCollection} onValueChange={setSelectedCollection}>
//               <SelectTrigger className="bg-white border-slate-300 focus:border-amber-500 rounded-lg text-sm h-9">
//                 <SelectValue placeholder="All Collections" />
//               </SelectTrigger>
//               <SelectContent>
//                 <SelectItem value="all">All Collections</SelectItem>
//                 {Collections.map((collection, index) => (
//                   <SelectItem key={index} value={collection.name}>
//                     {collection.name}
//                   </SelectItem>
//                 ))}
//               </SelectContent>
//             </Select>
//           </CollapsibleContent>
//         </Collapsible>
//       )}

//       {/* Clear Filters */}
//       {activeFiltersCount > 0 && (
//         <Button
//           variant="outline"
//           onClick={clearAllFilters}
//           className="w-full border-slate-300 text-slate-700 hover:bg-slate-50 bg-white font-medium rounded-lg text-sm h-9"
//         >
//           Clear All Filters ({activeFiltersCount})
//         </Button>
//       )}
//     </div>
//   )

//   return (
//     <div className="min-h-screen ">
//       {/* Collections Banner */}
//       {/* <CollectionsBanner /> */}

//       {/* Header */}
//       <div className="bg-white  sticky top-0 z-40 ">
//         <div className="mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-16">
//             <div className="flex items-center space-x-4">
//               {/* <h1 className="text-2xl font-bold text-?slate-900 tracking-tight">Luxury Jewelry Collection</h1> */}
//               {activeFiltersCount > 0 && (
//                 <Badge variant="secondary" className="bg-amber-100 text-amber-800 font-medium">
//                   {activeFiltersCount} filter{activeFiltersCount !== 1 ? "s" : ""} active
//                 </Badge>
//               )}
//             </div>

//             <div className="flex items-center space-x-3">
//               {/* Grid Layout Controls */}
//               <div className="hidden sm:flex items-center space-x-1 bg-slate-100 rounded-lg p-1">
//                 {["2", "3", "4"].map((layout) => (
//                   <Button
//                     key={layout}
//                     variant={gridLayout === layout ? "default" : "ghost"}
//                     size="sm"
//                     onClick={() => setGridLayout(layout)}
//                     className={cn(
//                       "h-8 w-8 p-0 rounded-md",
//                       gridLayout === layout
//                         ? "bg-white text-slate-900 shadow-sm"
//                         : "text-slate-600 hover:text-slate-900 hover:bg-white/50",
//                     )}
//                   >
//                     {layout === "2" && <Grid2X2 className="h-4 w-4" />}
//                     {layout === "3" && <Grid3X3 className="h-4 w-4" />}
//                     {layout === "4" && <LayoutGrid className="h-4 w-4" />}
//                   </Button>
//                 ))}
//               </div>

//               {/* Sort */}
//               <Select value={sortOption} onValueChange={setSortOption}>
//                 <SelectTrigger className="w-40 bg-white border-slate-300 focus:border-amber-500 rounded-lg">
//                   <SelectValue placeholder="Sort by" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectItem value="default">Default</SelectItem>
//                   <SelectItem value="price-low">Price: Low to High</SelectItem>
//                   <SelectItem value="price-high">Price: High to Low</SelectItem>
//                   <SelectItem value="name">Name A-Z</SelectItem>
//                   <SelectItem value="rating">Highest Rated</SelectItem>
//                 </SelectContent>
//               </Select>

//               {/* Mobile Filter Drawer */}
//               <Drawer open={isFilterDrawerOpen} onOpenChange={setIsFilterDrawerOpen}>
//                 <DrawerTrigger asChild>
//                   <Button
//                     variant="outline"
//                     size="sm"
//                     className="lg:hidden border-slate-300 bg-white font-medium rounded-lg"
//                   >
//                     <SlidersHorizontal className="h-4 w-4 mr-2" />
//                     Filters
//                     {activeFiltersCount > 0 && (
//                       <Badge className="ml-2 h-5 w-5 p-0 text-xs bg-amber-600 rounded-full">{activeFiltersCount}</Badge>
//                     )}
//                   </Button>
//                 </DrawerTrigger>
//                 <DrawerContent className="max-h-[80vh]">
//                   <DrawerHeader className="border-b border-slate-200 bg-white">
//                     <DrawerTitle className="text-slate-900 font-semibold">Filter Products</DrawerTitle>
//                   </DrawerHeader>
//                   <div className="p-6 overflow-y-auto bg-white">
//                     <FilterContent isMobile={true} />
//                   </div>
//                 </DrawerContent>
//               </Drawer>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         <div className="flex gap-8">
//           {/* Desktop Sidebar Filters */}
//           <div className="hidden lg:block w-64 flex-shrink-0">
//             <Card className="bg-white border-slate-200 shadow-sm rounded-xl overflow-hidden py-0">
//               <CardContent className="p-5">
//                 <div className="flex items-center justify-between ">
//                   <h2 className="text-base font-bold text-slate-900 tracking-tight">Refine Your Search</h2>
//                   <Filter className="h-4 w-4 text-amber-600" />
//                 </div>
//                   <Separator className='my-2.5'/>
//                 <FilterContent />
//               </CardContent>
//             </Card>
//           </div>

//           {/* Products Grid */}
//           <div className="flex-1">
//             <div className="mb-6 flex items-center justify-between">
//               <p className="text-slate-600 font-medium">
//                 Showing <span className="font-semibold text-slate-900">{sortedProducts.length}</span> of{" "}
//                 <span className="font-semibold text-slate-900">{productsdata.length}</span> products
//               </p>

//               {/* Mobile Grid Layout Controls */}
//               <div className="sm:hidden flex items-center space-x-1 bg-slate-100 rounded-lg p-1">
//                 {["2", "3"].map((layout) => (
//                   <Button
//                     key={layout}
//                     variant={gridLayout === layout ? "default" : "ghost"}
//                     size="sm"
//                     onClick={() => setGridLayout(layout)}
//                     className={cn(
//                       "h-8 w-8 p-0 rounded-md",
//                       gridLayout === layout
//                         ? "bg-white text-slate-900 shadow-sm"
//                         : "text-slate-600 hover:text-slate-900 hover:bg-white/50",
//                     )}
//                   >
//                     {layout === "2" && <Grid2X2 className="h-4 w-4" />}
//                     {layout === "3" && <Grid3X3 className="h-4 w-4" />}
//                   </Button>
//                 ))}
//               </div>
//             </div>

//             {loading ? (
//               <div className="flex items-center justify-center py-12">
//                 <Loader2 className="h-8 w-8 animate-spin text-slate-400" />
//               </div>
//             ) : (
//               <AnimatePresence>
//                 <motion.div
//                   className={cn("grid gap-6", getGridClasses())}
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   {sortedProducts.map((product) => (
//                     <motion.div
//                       key={product.id}
//                       layout
//                       initial={{ opacity: 0, scale: 0.9 }}
//                       animate={{ opacity: 1, scale: 1 }}
//                       exit={{ opacity: 0, scale: 0.9 }}
//                       transition={{ duration: 0.2 }}
//                     >
//                       <ProductCard product={product} />
//                     </motion.div>
//                   ))}
//                 </motion.div>
//               </AnimatePresence>
//             )}

//             {sortedProducts.length === 0 && !loading && (
//               <div className="text-center py-12 bg-white rounded-xl border border-slate-200">
//                 <div className="text-slate-400 mb-4">
//                   <Search className="h-12 w-12 mx-auto" />
//                 </div>
//                 <h3 className="text-lg font-semibold text-slate-900 mb-2">No products found</h3>
//                 <p className="text-slate-600 mb-4">Try adjusting your filters or search terms</p>
//                 <Button variant="outline" onClick={clearAllFilters} className="font-medium bg-transparent">
//                   Clear all filters
//                 </Button>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default ProductsPage


"use client"

import { useEffect, useState, useMemo } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { AnimatePresence, motion } from "framer-motion"
import {
  Filter,
  Search,
  SlidersHorizontal,
  Loader2,
  Grid3X3,
  Grid2X2,
  LayoutGrid,
  ChevronDown,
  ChevronUp,
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer"
import { Slider } from "@/components/ui/slider"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { cn } from "@/lib/utils"
import {
  jewelryCategories,
  productsdata,
  Collections,
  DiamondShapeSVGs,
  Metalcolors,
  CaratOptions,
  ColorStones,
} from "@/data"
import ProductCard from "../ProductCard/Productcard"
import { Separator } from "@/components/ui/separator"
import CollectionsBanner from "./CollectionsBanner"

// Debounce hook for price range
function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => {
      clearTimeout(handler)
    }
  }, [value, delay])

  return debouncedValue
}

function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [priceRange, setPriceRange] = useState([0, 350000])
  const [sortOption, setSortOption] = useState("default")
  const [selectedMetalColor, setSelectedMetalColor] = useState("")
  const [selectedDiamondShape, setSelectedDiamondShape] = useState("")
  const [selectedCollection, setSelectedCollection] = useState("")
  const [selectedCarat, setSelectedCarat] = useState("")
  const [selectedColorStone, setSelectedColorStone] = useState("")
  const [selectedEnamelColor, setSelectedEnamelColor] = useState("")
  const [selectedTag, setSelectedTag] = useState("")
  const [selectedAgeGroup, setSelectedAgeGroup] = useState("")
  const [loading, setLoading] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("all")

  const [gridLayout, setGridLayout] = useState("4")
  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false)
  const [expandedSections, setExpandedSections] = useState({
    category: true,
    price: true,
    diamondShape: true,
    colorStone: false,
    metalColor: true,
    carat: false,
    collection: false,
    colors: false,
    tags: false,
  })

  const debouncedSearchQuery = useDebounce(searchQuery, 300)
  const debouncedPriceRange = useDebounce(priceRange, 500)

  const filteredProducts = useMemo(() => {
    return productsdata.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(debouncedSearchQuery.toLowerCase())
      const matchesPrice = product.price >= debouncedPriceRange[0] && product.price <= debouncedPriceRange[1]
      const matchesCategory =
        selectedCategory === "all" || selectedCategory === "All Categories" || product.category === selectedCategory
      const matchesMetalColor =
        !selectedMetalColor ||
        (product.metalColors && product.metalColors.some((metal) => metal.name === selectedMetalColor))
      const matchesCarat = !selectedCarat || selectedCarat === "all" || product.carat === selectedCarat
      const matchesColorStone = !selectedColorStone || product.colorStone === selectedColorStone
      const matchesDiamondShape = !selectedDiamondShape || product.diamondShape === selectedDiamondShape
      const matchesCollection =
        !selectedCollection || selectedCollection === "all" || product.collection === selectedCollection

      return (
        matchesSearch &&
        matchesPrice &&
        matchesCategory &&
        matchesMetalColor &&
        matchesCarat &&
        matchesColorStone &&
        matchesDiamondShape &&
        matchesCollection
      )
    })
  }, [
    debouncedSearchQuery,
    debouncedPriceRange,
    selectedCategory,
    selectedMetalColor,
    selectedCarat,
    selectedColorStone,
    selectedDiamondShape,
    selectedCollection,
  ])

  const sortedProducts = useMemo(() => {
    const sorted = [...filteredProducts]
    switch (sortOption) {
      case "price-low":
        return sorted.sort((a, b) => a.price - b.price)
      case "price-high":
        return sorted.sort((a, b) => b.price - a.price)
      case "name":
        return sorted.sort((a, b) => a.name.localeCompare(b.name))
      case "rating":
        return sorted.sort((a, b) => (b.rating || 0) - (a.rating || 0))
      case "default":
      default:
        return sorted
    }
  }, [filteredProducts, sortOption])

  const clearAllFilters = () => {
    setSearchQuery("")
    setPriceRange([0, 350000])
    setSelectedCategory("all")
    setSelectedMetalColor("")
    setSelectedDiamondShape("")
    setSelectedCollection("")
    setSelectedCarat("")
    setSelectedColorStone("")
    setSelectedEnamelColor("")
    setSelectedTag("")
    setSelectedAgeGroup("")
    setSortOption("default")
  }

  const activeFiltersCount = [
    searchQuery,
    selectedCategory !== "all" && selectedCategory !== "All Categories" ? selectedCategory : "",
    selectedMetalColor,
    selectedDiamondShape,
    selectedCollection !== "all" ? selectedCollection : "",
    selectedCarat !== "all" ? selectedCarat : "",
    selectedColorStone,
    selectedEnamelColor,
    selectedTag,
    selectedAgeGroup,
    priceRange[0] > 0 || priceRange[1] < 350000 ? "price" : "",
  ].filter(Boolean).length

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  const getGridClasses = () => {
    switch (gridLayout) {
      case "2":
        return "grid-cols-1 sm:grid-cols-2"
      case "3":
        return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
      case "4":
        return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      default:
        return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
    }
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        // lg breakpoint
        setIsFilterDrawerOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const FilterContent = ({ isMobile = false }) => (
    <div className="space-y-5">
      {/* Search */}
      <div className="space-y-2">
        <label className="text-xs font-semibold text-slate-800 uppercase tracking-wide ">Search Products</label>
        <div className="relative mt-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
          <Input
            placeholder="Search luxury jewelry..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-white border-slate-300 focus:border-amber-500 focus:ring-amber-500/20 rounded-lg text-sm"
          />
        </div>
      </div>

      {/* Categories */}
      <Collapsible open={expandedSections.category} onOpenChange={() => toggleSection("category")}>
        <CollapsibleTrigger className="flex items-center justify-between w-full text-left group">
          <span className="text-xs font-semibold text-slate-800 uppercase tracking-wide group-hover:text-amber-600 transition-colors">
            Categories
          </span>
          {expandedSections.category ? (
            <ChevronUp className="h-3 w-3 text-slate-600" />
          ) : (
            <ChevronDown className="h-3 w-3 text-slate-600" />
          )}
        </CollapsibleTrigger>
        <CollapsibleContent className="space-y-2 mt-2">
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="bg-white border-slate-300 focus:border-amber-500 rounded-lg text-sm h-9">
              <SelectValue placeholder="All Categories" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              {jewelryCategories.map((cat) => (
                <SelectItem key={cat.id} value={cat.name}>
                  {cat.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </CollapsibleContent>
      </Collapsible>

      {/* Price Range */}
      <Collapsible open={expandedSections.price} onOpenChange={() => toggleSection("price")}>
        <CollapsibleTrigger className="flex items-center justify-between w-full text-left group">
          <span className="text-xs font-semibold text-slate-800 uppercase tracking-wide group-hover:text-amber-600 transition-colors">
            Price Range
          </span>
          {expandedSections.price ? (
            <ChevronUp className="h-3 w-3 text-slate-600" />
          ) : (
            <ChevronDown className="h-3 w-3 text-slate-600" />
          )}
        </CollapsibleTrigger>
        <CollapsibleContent className="space-y-2 mt-2">
          <Slider
            value={priceRange}
            onValueChange={setPriceRange}
            max={350000}
            min={0}
            step={1000}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-slate-600 font-medium">
            <span>₹{priceRange[0].toLocaleString()}</span>
            <span>₹{priceRange[1].toLocaleString()}</span>
          </div>
        </CollapsibleContent>
      </Collapsible>

      {/* Diamond Shapes - Show only on desktop or first filter on mobile */}
      {(!isMobile || (isMobile && true)) && (
        <Collapsible open={expandedSections.diamondShape} onOpenChange={() => toggleSection("diamondShape")}>
          <CollapsibleTrigger className="flex items-center justify-between w-full text-left group">
            <span className="text-xs font-semibold text-slate-800 uppercase tracking-wide group-hover:text-amber-600 transition-colors">
              Diamond Shapes
            </span>
            {expandedSections.diamondShape ? (
              <ChevronUp className="h-3 w-3 text-slate-600" />
            ) : (
              <ChevronDown className="h-3 w-3 text-slate-600" />
            )}
          </CollapsibleTrigger>
          <CollapsibleContent className="space-y-2 mt-2">
            <div className="grid grid-cols-3 gap-1.5">
              {Object.entries(DiamondShapeSVGs).map(([shape, Component]) => (
                <button
                  key={shape}
                  onClick={() => setSelectedDiamondShape(selectedDiamondShape === shape ? "" : shape)}
                  className={cn(
                    "flex flex-col items-center p-2 rounded-lg border-2 transition-all duration-200 hover:shadow-md hover:bg-slate-50",
                    selectedDiamondShape === shape
                      ? "border-amber-500 bg-amber-50 shadow-sm"
                      : "border-slate-200 bg-white hover:border-slate-300",
                  )}
                >
                  <Component />
                  <span className="text-[10px] font-medium text-slate-700 mt-1">{shape}</span>
                </button>
              ))}
            </div>
          </CollapsibleContent>
        </Collapsible>
      )}

      {/* Metal Colors - Show only on desktop or second filter on mobile */}
      {(!isMobile || (isMobile && true)) && (
        <Collapsible open={expandedSections.metalColor} onOpenChange={() => toggleSection("metalColor")}>
          <CollapsibleTrigger className="flex items-center justify-between w-full text-left group">
            <span className="text-xs font-semibold text-slate-800 uppercase tracking-wide group-hover:text-amber-600 transition-colors">
              Metal Colors
            </span>
            {expandedSections.metalColor ? (
              <ChevronUp className="h-3 w-3 text-slate-600" />
            ) : (
              <ChevronDown className="h-3 w-3 text-slate-600" />
            )}
          </CollapsibleTrigger>
          <CollapsibleContent className="space-y-2 mt-2">
            <div className="space-y-1.5">
              {Metalcolors.map((metal) => (
                <button
                  key={metal.name}
                  onClick={() => setSelectedMetalColor(selectedMetalColor === metal.name ? "" : metal.name)}
                  className={cn(
                    "flex items-center w-full p-2 rounded-lg border-2 transition-all duration-200 hover:shadow-md hover:bg-slate-50",
                    selectedMetalColor === metal.name
                      ? "border-amber-500 bg-amber-50 shadow-sm"
                      : "border-slate-200 bg-white hover:border-slate-300",
                  )}
                >
                  <img
                    src={metal.imgurl || "/placeholder.svg"}
                    alt={metal.name}
                    className="h-6 w-6 rounded-full object-cover mr-2 border border-slate-200"
                  />
                  <span className="text-xs font-medium text-slate-700">{metal.name}</span>
                </button>
              ))}
            </div>
          </CollapsibleContent>
        </Collapsible>
      )}

      {/* Color Stones - Desktop only */}
      {(!isMobile || (isMobile && true)) && (
        <Collapsible open={expandedSections.colorStone} onOpenChange={() => toggleSection("colorStone")}>
          <CollapsibleTrigger className="flex items-center justify-between w-full text-left group">
            <span className="text-xs font-semibold text-slate-800 uppercase tracking-wide group-hover:text-amber-600 transition-colors">
              Gemstones
            </span>
            {expandedSections.colorStone ? (
              <ChevronUp className="h-3 w-3 text-slate-600" />
            ) : (
              <ChevronDown className="h-3 w-3 text-slate-600" />
            )}
          </CollapsibleTrigger>
          <CollapsibleContent className="space-y-2 mt-2">
            <div className="grid grid-cols-3 gap-1.5">
              {ColorStones.map((stone) => (
                <button
                  key={stone.name}
                  onClick={() => setSelectedColorStone(selectedColorStone === stone.name ? "" : stone.name)}
                  className={cn(
                    "flex flex-col items-center p-2 rounded-lg border-2 transition-all duration-200 hover:shadow-md hover:bg-slate-50",
                    selectedColorStone === stone.name
                      ? "border-amber-500 bg-amber-50 shadow-sm"
                      : "border-slate-200 bg-white hover:border-slate-300",
                  )}
                >
                  {stone.component ? (
                    <stone.component />
                  ) : (
                    <img
                      src={stone.image || "/placeholder.svg"}
                      alt={stone.name}
                      className="h-6 w-6 rounded-full object-cover border border-slate-200"
                    />
                  )}
                  <span className="text-[10px] font-medium text-slate-700 mt-1">{stone.name}</span>
                </button>
              ))}
            </div>
          </CollapsibleContent>
        </Collapsible>
      )}

      {/* Carat - Desktop only */}
      {(!isMobile || (isMobile && true)) && (
        <Collapsible open={expandedSections.carat} onOpenChange={() => toggleSection("carat")}>
          <CollapsibleTrigger className="flex items-center justify-between w-full text-left group">
            <span className="text-xs font-semibold text-slate-800 uppercase tracking-wide group-hover:text-amber-600 transition-colors">
              Carat Weight
            </span>
            {expandedSections.carat ? (
              <ChevronUp className="h-3 w-3 text-slate-600" />
            ) : (
              <ChevronDown className="h-3 w-3 text-slate-600" />
            )}
          </CollapsibleTrigger>
          <CollapsibleContent className="space-y-2 mt-2">
            <Select value={selectedCarat} onValueChange={setSelectedCarat}>
              <SelectTrigger className="bg-white border-slate-300 focus:border-amber-500 rounded-lg text-sm h-9">
                <SelectValue placeholder="All Carats" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Carats</SelectItem>
                {CaratOptions.map((carat) => (
                  <SelectItem key={carat.value} value={carat.value}>
                    {carat.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </CollapsibleContent>
        </Collapsible>
      )}

      {/* Collections - Desktop only */}
      {(!isMobile || (isMobile && true)) && (
        <Collapsible open={expandedSections.collection} onOpenChange={() => toggleSection("collection")}>
          <CollapsibleTrigger className="flex items-center justify-between w-full text-left group">
            <span className="text-xs font-semibold text-slate-800 uppercase tracking-wide group-hover:text-amber-600 transition-colors">
              Collections
            </span>
            {expandedSections.collection ? (
              <ChevronUp className="h-3 w-3 text-slate-600" />
            ) : (
              <ChevronDown className="h-3 w-3 text-slate-600" />
            )}
          </CollapsibleTrigger>
          <CollapsibleContent className="space-y-2 mt-2">
            <Select value={selectedCollection} onValueChange={setSelectedCollection}>
              <SelectTrigger className="bg-white border-slate-300 focus:border-amber-500 rounded-lg text-sm h-9">
                <SelectValue placeholder="All Collections" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Collections</SelectItem>
                {Collections.map((collection, index) => (
                  <SelectItem key={index} value={collection.name}>
                    {collection.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </CollapsibleContent>
        </Collapsible>
      )}

      {/* Clear Filters */}
      {activeFiltersCount > 0 && (
        <Button
          variant="outline"
          onClick={clearAllFilters}
          className="w-full border-slate-300 text-slate-700 hover:bg-slate-50 bg-white font-medium rounded-lg text-sm h-9"
        >
          Clear All Filters ({activeFiltersCount})
        </Button>
      )}
    </div>
  )

  return (
    <div className="min-h-screen ">
      {/* Collections Banner */}
      <CollectionsBanner />

      {/* Header */}
      <div className="bg-white sticky top-0 z-40 block lg:hidden">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              {/* <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Luxury Jewelry Collection</h1> */}
              {activeFiltersCount > 0 && (
                <Badge variant="secondary" className="bg-amber-100 text-amber-800 font-medium">
                  {activeFiltersCount} filter{activeFiltersCount !== 1 ? "s" : ""} active
                </Badge>
              )}
            </div>

            <div className="flex items-center space-x-3">
              {/* Mobile Filter Drawer */}
              <Drawer open={isFilterDrawerOpen} onOpenChange={setIsFilterDrawerOpen}>
                <DrawerTrigger asChild>
                  <Button
                    variant="outline"
                    size="sm"
                    className="lg:hidden border-slate-300 bg-white font-medium rounded-lg"
                  >
                    <SlidersHorizontal className="h-4 w-4 mr-2" />
                    Filters
                    {activeFiltersCount > 0 && (
                      <Badge className="ml-2 h-5 w-5 p-0 text-xs bg-amber-600 rounded-full">{activeFiltersCount}</Badge>
                    )}
                  </Button>
                </DrawerTrigger>
                <DrawerContent className="max-h-[80vh]">
                  <DrawerHeader className="border-b border-slate-200 bg-white">
                    <DrawerTitle className="text-slate-900 font-semibold">Filter Products</DrawerTitle>
                  </DrawerHeader>
                  <div className="p-6 overflow-y-auto bg-white">
                    <FilterContent isMobile={true} />
                  </div>
                </DrawerContent>
              </Drawer>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Desktop Sidebar Filters */}
          <div className="hidden lg:block w-64 flex-shrink-0">
            <Card className="bg-white border-slate-200 shadow-sm rounded-xl overflow-hidden py-0">
              <CardContent className="p-5">
                <div className="flex items-center justify-between">
                  <h2 className="text-base font-bold text-slate-900 tracking-tight">Refine Your Search</h2>
                  <Filter className="h-4 w-4 text-amber-600" />
                </div>
                <Separator className="my-2.5" />
                <FilterContent />
              </CardContent>
            </Card>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="mb-6 flex items-center justify-between">
              <p className="text-slate-600 font-medium">
                Showing <span className="font-semibold text-slate-900">{sortedProducts.length}</span> of{" "}
                <span className="font-semibold text-slate-900">{productsdata.length}</span> products
              </p>

              <div className="hidden lg:flex items-center space-x-3">
                {/* Grid Layout Controls */}
                <div className="flex items-center space-x-1 bg-slate-100 rounded-lg p-1">
                  {["2", "3", "4"].map((layout) => (
                    <Button
                      key={layout}
                      variant={gridLayout === layout ? "default" : "ghost"}
                      size="sm"
                      onClick={() => setGridLayout(layout)}
                      className={cn(
                        "h-8 w-8 p-0 rounded-md",
                        gridLayout === layout
                          ? "bg-white text-slate-900 shadow-sm"
                          : "text-slate-600 hover:text-slate-900 hover:bg-white/50",
                      )}
                    >
                      {layout === "2" && <Grid2X2 className="h-4 w-4" />}
                      {layout === "3" && <Grid3X3 className="h-4 w-4" />}
                      {layout === "4" && <LayoutGrid className="h-4 w-4" />}
                    </Button>
                  ))}
                </div>

                {/* Sort Dropdown */}
                <Select value={sortOption} onValueChange={setSortOption}>
                  <SelectTrigger className="w-40 bg-white border-slate-300 focus:border-amber-500 rounded-lg">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="default">Default</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="name">Name A-Z</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Mobile Grid Layout Controls */}
              <div className="lg:hidden flex items-center space-x-1 bg-slate-100 rounded-lg p-1">
                {["2", "3"].map((layout) => (
                  <Button
                    key={layout}
                    variant={gridLayout === layout ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setGridLayout(layout)}
                    className={cn(
                      "h-8 w-8 p-0 rounded-md",
                      gridLayout === layout
                        ? "bg-white text-slate-900 shadow-sm"
                        : "text-slate-600 hover:text-slate-900 hover:bg-white/50",
                    )}
                  >
                    {layout === "2" && <Grid2X2 className="h-4 w-4" />}
                    {layout === "3" && <Grid3X3 className="h-4 w-4" />}
                  </Button>
                ))}
              </div>
            </div>

            {loading ? (
              <div className="flex items-center justify-center py-12">
                <Loader2 className="h-8 w-8 animate-spin text-slate-400" />
              </div>
            ) : (
              <AnimatePresence>
                <motion.div
                  className={cn("grid gap-6", getGridClasses())}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {sortedProducts.map((product) => (
                    <motion.div
                      key={product.id}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ProductCard product={product} />
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            )}

            {sortedProducts.length === 0 && !loading && (
              <div className="text-center py-12 bg-white rounded-xl border border-slate-200">
                <div className="text-slate-400 mb-4">
                  <Search className="h-12 w-12 mx-auto" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">No products found</h3>
                <p className="text-slate-600 mb-4">Try adjusting your filters or search terms</p>
                <Button variant="outline" onClick={clearAllFilters} className="font-medium bg-transparent">
                  Clear all filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductsPage

