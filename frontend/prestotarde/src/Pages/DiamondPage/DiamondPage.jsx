
// "use client"

// import { useState, useMemo, useEffect } from "react"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { Badge } from "@/components/ui/badge"
// import { Slider } from "@/components/ui/slider"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { Input } from "@/components/ui/input"
// import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { Separator } from "@/components/ui/separator"
// import { Label } from "@/components/ui/label"
// import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
// import {
//   Pagination,
//   PaginationContent,
//   PaginationEllipsis,
//   PaginationItem,
//   PaginationLink,
//   PaginationNext,
//   PaginationPrevious,
// } from "@/components/ui/pagination"
// import { Info, Diamond, Gem, Search, Filter, ChevronDown, ChevronUp } from "lucide-react"
// import diamondData from "@/diamond-data"
// import { diamondProducts } from "@/diamond-product-data"
// import DiamondCard from "../DiamondCard/DiamondCard"

// export default function DiamondSelectorV1() {
//   const [filters, setFilters] = useState({
//     diamondType: "all", // Default value changed to "all"
//     shape: "", // Empty means all shapes
//     cut: [1, 4], // Full range: Ideal to Good
//     color: [1, 8], // Full range: D to K
//     clarity: [1, 8], // Full range: FL to SI2
//     carat: [0.3, 5.0], // Full range available
//     budget: [1000, 1000000], // Wide budget range
//     polish: "",
//     symmetry: "",
//     fluorescence: "",
//     certification: "",
//     depth: [58, 65],
//     table: [54, 62],
//   })

//   const [certificateNumber, setCertificateNumber] = useState("")
//   const [showAdvanced, setShowAdvanced] = useState(false)
//   const [showFilters, setShowFilters] = useState(false)
//   const [currentPage, setCurrentPage] = useState(1)
//   const [sortBy, setSortBy] = useState("default")
//   const itemsPerPage = 12

//   const updateFilter = (key, value) => {
//     setFilters((prev) => ({ ...prev, [key]: value }))
//     setCurrentPage(1) // Reset to first page when filters change
//   }

 

//   const filteredDiamonds = useMemo(() => {
//     return diamondProducts.filter((diamond) => {
//       // Diamond type filter - only apply if set
//       if (filters.diamondType !== "all" && diamond.diamondType !== filters.diamondType) {
//         return false
//       }

//       // Shape filter - only apply if set
//       if (filters.shape && diamond.shape !== filters.shape) {
//         return false
//       }

//       const cutGrades = ["ideal", "excellent", "very-good", "good"]
//       const cutStartIndex = filters.cut[0] - 1
//       const cutEndIndex = filters.cut[1] - 1
//       const allowedCuts = cutGrades.slice(cutStartIndex, cutEndIndex + 1)
//       if (!allowedCuts.includes(diamond.cut)) {
//         return false
//       }

//       const colorGrades = ["D", "E", "F", "G", "H", "I", "J", "K"]
//       const colorStartIndex = filters.color[0] - 1
//       const colorEndIndex = filters.color[1] - 1
//       const allowedColors = colorGrades.slice(colorStartIndex, colorEndIndex + 1)
//       if (!allowedColors.includes(diamond.color)) {
//         return false
//       }

//       const clarityGrades = ["FL", "IF", "VVS1", "VVS2", "VS1", "VS2", "SI1", "SI2"]
//       const clarityStartIndex = filters.clarity[0] - 1
//       const clarityEndIndex = filters.clarity[1] - 1
//       const allowedClarities = clarityGrades.slice(clarityStartIndex, clarityEndIndex + 1)
//       if (!allowedClarities.includes(diamond.clarity)) {
//         return false
//       }

//       // Carat filter
//       if (diamond.carat < filters.carat[0] || diamond.carat > filters.carat[1]) {
//         return false
//       }

//       // Budget filter
//       if (diamond.price < filters.budget[0] || diamond.price > filters.budget[1]) {
//         return false
//       }

//       if (filters.polish && diamond.polish && diamond.polish !== filters.polish) {
//         return false
//       }

//       if (filters.symmetry && diamond.symmetry && diamond.symmetry !== filters.symmetry) {
//         return false
//       }

//       if (filters.fluorescence && diamond.fluorescence && diamond.fluorescence !== filters.fluorescence) {
//         return false
//       }

//       if (filters.certification && diamond.certification && diamond.certification !== filters.certification) {
//         return false
//       }

//       return true
//     })
//   }, [filters])

//   const sortedDiamonds = useMemo(() => {
//     if (!sortBy || sortBy === "default") return filteredDiamonds

//     const sorted = [...filteredDiamonds]

//     switch (sortBy) {
//       case "price-low-high":
//         return sorted.sort((a, b) => a.price - b.price)
//       case "price-high-low":
//         return sorted.sort((a, b) => b.price - a.price)
//       case "carat-large-small":
//         return sorted.sort((a, b) => b.carat - a.carat)
//       case "carat-small-large":
//         return sorted.sort((a, b) => a.carat - b.carat)
//       default:
//         return sorted
//     }
//   }, [filteredDiamonds, sortBy])

//   const totalPages = Math.ceil(sortedDiamonds.length / itemsPerPage)
//   const startIndex = (currentPage - 1) * itemsPerPage
//   const paginatedDiamonds = sortedDiamonds.slice(startIndex, startIndex + itemsPerPage)
//   useEffect(()=>{
//     window.scrollTo(0,0)
//   },[])

//    useEffect(()=>{
//     window.scrollTo({top: 0, left:0,  behavior: 'smooth'})
//   },[currentPage])

//   const InfoDialog = ({ title, children }) => (
//     <Dialog>
//       <DialogTrigger asChild>
//         <Button variant="ghost" size="icon" className="h-4 w-4 p-0 !cursor-pointer">
//           <Info className="h-4 w-4 text-gray-400 hover:text-gray-600 " />
//         </Button>
//       </DialogTrigger>
//       <DialogContent className="max-w-md">
//         <DialogHeader>
//           <DialogTitle>{title}</DialogTitle>
//         </DialogHeader>
//         <div className="space-y-3 text-sm">{children}</div>
//       </DialogContent>
//     </Dialog>
//   )

//   return (
//     <div className="min-h-screen ">
//       {/* Header Progress */}
//       <div className="max-w-7xl mx-auto bg-white dark:bg-slate-900 ">
//         <div className="max-w-full mx-auto px-4 pt-6">
//           <div className="flex items-center justify-center">
//             <div className="flex items-center space-x-8">
//               <div className="flex items-center space-x-3 bg-black text-white px-6 py-3 rounded-l-lg">
//                 <span className="text-2xl font-bold">1</span>
//                 <div>
//                   <div className="font-semibold">Choose a</div>
//                   <div className="font-bold">DIAMOND</div>
//                 </div>
//                 <Diamond className="h-6 w-6" />
//               </div>

              

//               <div className="flex items-center space-x-3 bg-gray-200 dark:bg-gray-700 px-6 py-3">
//                 <span className="text-2xl font-bold text-gray-600">2</span>
//                 <div className="text-gray-600">
//                   <div className="font-semibold">Choose a</div>
//                   <div className="font-bold">SETTING</div>
//                 </div>
//                 <div className="text-right text-sm">
//                   <div className="font-bold">AED 2,387</div>
//                   <div className="text-xs">View | Remove</div>
//                 </div>
//                 <Gem className="h-6 w-6" />
//               </div>

//               <div className="flex items-center space-x-3 bg-gray-100 dark:bg-gray-800 px-6 py-3 rounded-r-lg">
//                 <span className="text-2xl font-bold text-gray-400">3</span>
//                 <div className="text-gray-400">
//                   <div className="font-semibold">Personalise</div>
//                   <div className="font-bold">RING</div>
//                 </div>
//                 <div className="h-6 w-6 bg-gray-300 rounded" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="max-w-full mx-auto px-4 sm:px-16 py-8">
//         <div className="max-w-7xl mx-auto mb-1 flex items-center justify-between">
//          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
//             <div className="flex items-center gap-4">
//               <Button
//                 onClick={() => setShowFilters(!showFilters)}
//                 variant="outline"
//                 className="flex items-center gap-2 px-4 py-2 font-medium cursor-pointer"
//               >
//                 <Filter className="h-4 w-4" />
//                 {showFilters ? "Hide Filters" : "Show Filters"}
//                 {showFilters ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
//               </Button>

//               {/* Results Summary */}
//               <div className="flex items-center gap-2 text-sm">
//                 <Badge variant="secondary" className="px-3 py-1">
//                   {sortedDiamonds.length} {sortedDiamonds.length === 1 ? "Diamond" : "Diamonds"} Found
//                 </Badge>
//                 {sortedDiamonds.length > 0 && (
//                   <span className="text-muted-foreground">
//                     Showing {startIndex + 1}-{Math.min(startIndex + itemsPerPage, sortedDiamonds.length)}
//                   </span>
//                 )}
//               </div>
//             </div>

            

          
//           </div>
       
//         </div>

//         {showFilters && (
//           <div className="max-w-7xl mx-auto space-y-6 mb-8">
//             {/* Diamond Type */}
//             <Card className="py-2 shadow-none border-none">
//               <CardContent className="p-0">
//                 <Tabs value={filters.diamondType} onValueChange={(value) => updateFilter("diamondType", value)}>
//                   <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto">
//                     <TabsTrigger value="all" className="cursor-pointer flex items-center gap-2">
//                       All Types
//                     </TabsTrigger>
//                     <TabsTrigger value="lab-grown" className="cursor-pointer flex items-center gap-2">
//                       <Diamond className="h-4 w-4" />
//                       Lab Grown
//                     </TabsTrigger>
//                     <TabsTrigger value="natural" className="cursor-pointer flex items-center gap-2">
//                       <Diamond className="h-4 w-4" />
//                       Natural
//                     </TabsTrigger>
//                   </TabsList>
//                 </Tabs>
//               </CardContent>
//             </Card>

//             {/* Main Filters Grid */}
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
//               {/* Shape Selection */}
//               <Card>
//                 <CardHeader>
//                   <CardTitle className="flex items-center gap-2">
//                     Shape
//                     <InfoDialog title="Diamond Shape">
//                       <p>The shape of a diamond refers to its physical form and outline when viewed from above.</p>
//                       <ul className="list-disc list-inside space-y-1">
//                         <li>
//                           <strong>Round:</strong> Most popular, maximum brilliance
//                         </li>
//                         <li>
//                           <strong>Princess:</strong> Square shape with pointed corners
//                         </li>
//                         <li>
//                           <strong>Cushion:</strong> Square with rounded corners, vintage appeal
//                         </li>
//                         <li>
//                           <strong>Emerald:</strong> Rectangular with step cuts
//                         </li>
//                         <li>
//                           <strong>Oval:</strong> Elongated round shape
//                         </li>
//                         <li>
//                           <strong>Pear:</strong> Teardrop shape, unique and elegant
//                         </li>
//                       </ul>
//                     </InfoDialog>
//                   </CardTitle>
//                   <p className="text-sm text-muted-foreground">See on hand</p>
//                 </CardHeader>
//                 <CardContent>
//                   <div className="grid grid-cols-5 gap-2">
//                     <Button
//                       variant={filters.shape === "" ? "default" : "outline"}
//                       className="h-16 p-2 flex flex-col items-center gap-1 hidden"
//                       onClick={() => updateFilter("shape", "")}
//                     >
//                       <span className="text-xs">All</span>
//                     </Button>
//                     {diamondData.shapes.map((shape) => (
//                       <Button
//                         key={shape.id}
//                         variant={filters.shape === shape.id ? "default" : "outline"}
//                         className="h-16 p-2 flex flex-col items-center gap-1 cursor-pointer "
//                         onClick={() => updateFilter("shape", shape.id)}
//                       >
//                         <img src={shape.image || "/placeholder.svg"} alt={shape.name} className="h-6 w-6" />
//                         <span className="text-xs">{shape.name}</span>
//                       </Button>
//                     ))}
//                   </div>
//                   {filters.shape && (
//                     <div className="mt-3 text-center">
//                       <Badge variant="secondary">{diamondData.shapes.find((s) => s.id === filters.shape)?.name}</Badge>
//                     </div>
//                   )}
//                 </CardContent>
//               </Card>

//               {/* Cut Quality */}
//               <Card>
//                 <CardHeader>
//                   <CardTitle className="flex items-center gap-2">
//                     Cut
//                     <InfoDialog title="Diamond Cut">
//                       <p>
//                         Cut refers to how well a diamond's facets interact with light. It's the most important factor
//                         affecting a diamond's beauty.
//                       </p>
//                       <ul className="list-disc list-inside space-y-1">
//                         <li>
//                           <strong>Ideal:</strong> Maximum fire and brilliance
//                         </li>
//                         <li>
//                           <strong>Excellent:</strong> Exceptional light performance
//                         </li>
//                         <li>
//                           <strong>Very Good:</strong> High level of brilliance
//                         </li>
//                         <li>
//                           <strong>Good:</strong> Good brilliance and value
//                         </li>
//                       </ul>
//                       <p className="mt-2 text-xs text-muted-foreground">Only applies to round diamonds</p>
//                     </InfoDialog>
//                   </CardTitle>
//                   <p className="text-sm text-muted-foreground">Only applies to round shape</p>
//                 </CardHeader>
//                 <CardContent>
//                   <div className="space-y-4">
//                     <div className="flex justify-between text-xs">
//                       <span>IDEAL</span>
//                       <span>EXCELLENT</span>
//                       <span>VERY GOOD</span>
//                       <span>GOOD</span>
//                     </div>
//                     <Slider
//                       value={filters.cut}
//                       max={4}
//                       min={1}
//                       step={1}
//                       className="w-full"
//                       onValueChange={(value) => updateFilter("cut", value)}
//                     />
//                     <div className="flex justify-between text-xs text-muted-foreground">
//                       <span>Max Sparkle</span>
//                       <span>Less Sparkle</span>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>

//               {/* Color */}
//               <Card>
//                 <CardHeader>
//                   <CardTitle className="flex items-center gap-2">
//                     Color
//                     <InfoDialog title="Diamond Color">
//                       <p>
//                         Diamond color grading measures the absence of color in a diamond. The less color, the higher the
//                         grade.
//                       </p>
//                       <ul className="list-disc list-inside space-y-1">
//                         <li>
//                           <strong>D-F:</strong> Colorless - highest quality
//                         </li>
//                         <li>
//                           <strong>G-J:</strong> Near Colorless - excellent value
//                         </li>
//                         <li>
//                           <strong>K-M:</strong> Faint Yellow - budget friendly
//                         </li>
//                       </ul>
//                       <p className="mt-2">Most people cannot detect color differences in the D-J range when mounted.</p>
//                     </InfoDialog>
//                   </CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <div className="space-y-4">
//                     <div className="flex justify-between text-xs font-medium">
//                       <span>D</span>
//                       <span>E</span>
//                       <span>F</span>
//                       <span>G</span>
//                       <span>H</span>
//                       <span>I</span>
//                       <span>J</span>
//                       <span>K</span>
//                     </div>
//                     <Slider
//                       value={filters.color}
//                       max={8}
//                       min={1}
//                       step={1}
//                       className="w-full"
//                       onValueChange={(value) => updateFilter("color", value)}
//                     />
//                     <div className="flex justify-between text-xs text-muted-foreground">
//                       <span>Colourless</span>
//                       <span>Near Colourless</span>
//                       <span>Slight Warmth</span>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>

//               {/* Clarity */}
//               <Card>
//                 <CardHeader>
//                   <CardTitle className="flex items-center gap-2">
//                     Clarity
//                     <InfoDialog title="Diamond Clarity">
//                       <p>Clarity measures the absence of inclusions and blemishes in a diamond.</p>
//                       <ul className="list-disc list-inside space-y-1">
//                         <li>
//                           <strong>FL/IF:</strong> Flawless - no inclusions visible
//                         </li>
//                         <li>
//                           <strong>VVS1/VVS2:</strong> Very Very Slightly Included
//                         </li>
//                         <li>
//                           <strong>VS1/VS2:</strong> Very Slightly Included
//                         </li>
//                         <li>
//                           <strong>SI1/SI2:</strong> Slightly Included - may be visible
//                         </li>
//                       </ul>
//                       <p className="mt-2">
//                         VS2 and above are typically "eye clean" - no inclusions visible to naked eye.
//                       </p>
//                     </InfoDialog>
//                   </CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <div className="space-y-4">
//                     <div className="flex justify-between text-xs font-medium">
//                       <span>FL</span>
//                       <span>IF</span>
//                       <span>VVS1</span>
//                       <span>VVS2</span>
//                       <span>VS1</span>
//                       <span>VS2</span>
//                       <span>SI1</span>
//                       <span>SI2</span>
//                     </div>
//                     <Slider
//                       value={filters.clarity}
//                       max={8}
//                       min={1}
//                       step={1}
//                       className="w-full"
//                       onValueChange={(value) => updateFilter("clarity", value)}
//                     />
//                     <div className="flex justify-between text-xs text-muted-foreground">
//                       <span>100% eye clean</span>
//                       <span>Contact Us</span>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>

//               {/* Carat */}
//               <Card>
//                 <CardHeader>
//                   <CardTitle className="flex items-center gap-2">
//                     Carat
//                     <InfoDialog title="Diamond Carat">
//                       <p>Carat is the unit of measurement for a diamond's weight. One carat equals 200 milligrams.</p>
//                       <ul className="list-disc list-inside space-y-1">
//                         <li>
//                           <strong>0.5ct:</strong> Popular choice for engagement rings
//                         </li>
//                         <li>
//                           <strong>1.0ct:</strong> Classic milestone weight
//                         </li>
//                         <li>
//                           <strong>2.0ct+:</strong> Statement pieces with significant presence
//                         </li>
//                       </ul>
//                       <p className="mt-2">
//                         Carat weight significantly affects price, with premium jumps at milestone weights.
//                       </p>
//                     </InfoDialog>
//                   </CardTitle>
//                   <p className="text-sm text-muted-foreground">See on hand</p>
//                 </CardHeader>
//                 <CardContent>
//                   <div className="space-y-4">
//                     <div className="flex gap-2">
//                       <Input
//                         placeholder={filters.carat[0].toString()}
//                         className="w-20"
//                         value={filters.carat[0]}
//                         onChange={(e) =>
//                           updateFilter("carat", [Number.parseFloat(e.target.value) || 0.3, filters.carat[1]])
//                         }
//                       />
//                       <Input
//                         placeholder={filters.carat[1].toString()}
//                         className="w-20"
//                         value={filters.carat[1]}
//                         onChange={(e) =>
//                           updateFilter("carat", [filters.carat[0], Number.parseFloat(e.target.value) || 5.0])
//                         }
//                       />
//                     </div>
//                     <Slider
//                       value={filters.carat}
//                       max={5}
//                       min={0.3}
//                       step={0.1}
//                       className="w-full"
//                       onValueChange={(value) => updateFilter("carat", value)}
//                     />
//                   </div>
//                 </CardContent>
//               </Card>

//               {/* Budget - Full Width */}
//               <Card>
//                 <CardHeader>
//                   <CardTitle className="flex items-center gap-2">
//                     Budget
//                     <InfoDialog title="Diamond Budget">
//                       <p>Set your budget range to find diamonds within your price range.</p>
//                       <ul className="list-disc list-inside space-y-1">
//                         <li>Prices vary based on the 4Cs: Cut, Color, Clarity, and Carat</li>
//                         <li>Lab-grown diamonds typically cost 30-40% less than natural diamonds</li>
//                         <li>Consider certification and quality when comparing prices</li>
//                       </ul>
//                       <p className="mt-2">All prices shown are in your local currency.</p>
//                     </InfoDialog>
//                   </CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <div className="max-w-2xl mx-auto space-y-4">
//                     <div className="flex gap-4 justify-center">
//                       <Input
//                         placeholder="1000"
//                         className="w-32"
//                         value={filters.budget[0]}
//                         onChange={(e) =>
//                           updateFilter("budget", [Number.parseInt(e.target.value) || 1000, filters.budget[1]])
//                         }
//                       />
//                       <Input
//                         placeholder="100000"
//                         className="w-32"
//                         value={filters.budget[1]}
//                         onChange={(e) =>
//                           updateFilter("budget", [filters.budget[0], Number.parseInt(e.target.value) || 1000000])
//                         }
//                       />
//                     </div>
//                     <Slider
//                       value={filters.budget}
//                       max={1000000}
//                       min={1000}
//                       step={1000}
//                       className="w-full"
//                       onValueChange={(value) => updateFilter("budget", value)}
//                     />
//                   </div>
//                 </CardContent>
//               </Card>
//             </div>

//             {/* Advanced Filters */}
//             <Card>
//               <CardHeader>
//                 <CardTitle className="flex items-center gap-2">
//                   <Button
//                     variant="ghost"
//                     onClick={() => setShowAdvanced(!showAdvanced)}
//                     className="cursor-pointer h-auto font-semibold"
//                   >
//                     Advanced {showAdvanced ? "−" : "+"}
//                   </Button>
//                 </CardTitle>
//               </CardHeader>
//               {showAdvanced && (
//                 <CardContent className="space-y-4">
//                   <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
//                     <div>
//                       <Label>Polish</Label>
//                       <Select value={filters.polish} onValueChange={(value) => updateFilter("polish", value)}>
//                         <SelectTrigger>
//                           <SelectValue placeholder="Any" />
//                         </SelectTrigger>
//                         <SelectContent>
//                           <SelectItem value="any">Any</SelectItem>
//                           {diamondData.advancedFilters.polish.map((option) => (
//                             <SelectItem key={option} value={option}>
//                               {option}
//                             </SelectItem>
//                           ))}
//                         </SelectContent>
//                       </Select>
//                     </div>
//                     <div>
//                       <Label>Symmetry</Label>
//                       <Select value={filters.symmetry} onValueChange={(value) => updateFilter("symmetry", value)}>
//                         <SelectTrigger>
//                           <SelectValue placeholder="Any" />
//                         </SelectTrigger>
//                         <SelectContent>
//                           <SelectItem value="any">Any</SelectItem>
//                           {diamondData.advancedFilters.symmetry.map((option) => (
//                             <SelectItem key={option} value={option}>
//                               {option}
//                             </SelectItem>
//                           ))}
//                         </SelectContent>
//                       </Select>
//                     </div>
//                     <div>
//                       <Label>Fluorescence</Label>
//                       <Select
//                         value={filters.fluorescence}
//                         onValueChange={(value) => updateFilter("fluorescence", value)}
//                       >
//                         <SelectTrigger>
//                           <SelectValue placeholder="Any" />
//                         </SelectTrigger>
//                         <SelectContent>
//                           <SelectItem value="any">Any</SelectItem>
//                           {diamondData.advancedFilters.fluorescence.map((option) => (
//                             <SelectItem key={option} value={option}>
//                               {option}
//                             </SelectItem>
//                           ))}
//                         </SelectContent>
//                       </Select>
//                     </div>
//                     <div>
//                       <Label>Certification</Label>
//                       <Select
//                         value={filters.certification}
//                         onValueChange={(value) => updateFilter("certification", value)}
//                       >
//                         <SelectTrigger>
//                           <SelectValue placeholder="Any" />
//                         </SelectTrigger>
//                         <SelectContent>
//                           <SelectItem value="any">Any</SelectItem>
//                           {diamondData.advancedFilters.certification.map((option) => (
//                             <SelectItem key={option} value={option}>
//                               {option}
//                             </SelectItem>
//                           ))}
//                         </SelectContent>
//                       </Select>
//                     </div>
//                     <div>
//                       <Label>Depth</Label>
//                       <Select>
//                         <SelectTrigger>
//                           <SelectValue placeholder="Select depth" />
//                         </SelectTrigger>
//                         <SelectContent>
//                           <SelectItem value="58-65">58% - 65%</SelectItem>
//                         </SelectContent>
//                       </Select>
//                     </div>
//                     <div>
//                       <Label>Table</Label>
//                       <Select>
//                         <SelectTrigger>
//                           <SelectValue placeholder="Select table" />
//                         </SelectTrigger>
//                         <SelectContent>
//                           <SelectItem value="54-62">54% - 62%</SelectItem>
//                         </SelectContent>
//                       </Select>
//                     </div>
//                   </div>

//                   <Separator />

//                   <div className="max-w-md mx-auto">
//                     <Label>Certificate Number</Label>
//                     <div className="flex gap-2 mt-1">
//                       <Input
//                         placeholder="Certificate Number"
//                         value={certificateNumber}
//                         onChange={(e) => setCertificateNumber(e.target.value)}
//                       />
//                       <Button size="icon" variant="outline">
//                         <Search className="h-4 w-4" />
//                       </Button>
//                     </div>
//                   </div>
//                 </CardContent>
//               )}
//             </Card>
//           </div>
//         )}

//         {/* Results Section - Bottom */}
//         <Card className="shadow-none border-none">
//           <CardHeader className="flex items-center justify-between">
//             <div>

//             <CardTitle className="text-2xl"> <h1 >Available Diamonds</h1></CardTitle>
//             <p className="text-muted-foreground text-sm">
//               Showing {startIndex + 1}-{Math.min(startIndex + itemsPerPage, sortedDiamonds.length)} of{" "}
//               {sortedDiamonds.length} diamonds
//             </p>
//             </div>
//                <div className="flex items-center gap-2">
//             <Label htmlFor="sort-select" className="!mb-0 text-sm font-medium cursor-pointer">
//               Sort by:
//             </Label>
//             <Select value={sortBy} onValueChange={setSortBy}>
//               <SelectTrigger id="sort-select" className="w-48 cursor-pointer">
//                 <SelectValue placeholder="Default" />
//               </SelectTrigger>
//               <SelectContent>
//                 <SelectItem value="default" className="cursor-pointer">Default</SelectItem>
//                 <SelectItem value="price-low-high" className="cursor-pointer">Price: Low to High</SelectItem>
//                 <SelectItem value="price-high-low" className="cursor-pointer">Price: High to Low</SelectItem>
//                 <SelectItem value="carat-large-small" className="cursor-pointer">Carat: Large to Small</SelectItem>
//                 <SelectItem value="carat-small-large" className="cursor-pointer">Carat: Small to Large</SelectItem>
//               </SelectContent>
//             </Select>
//           </div>
//           </CardHeader>
//           <CardContent>
//             {paginatedDiamonds.length > 0 ? (
//               <>
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//                   {paginatedDiamonds.map((diamond) => (
//                     <DiamondCard key={diamond.id} diamond={diamond} />
//                   ))}
//                 </div>

//                 {totalPages > 1 && (
//                   <div className="mt-8 flex justify-center">
//                     <Pagination>
//                       <PaginationContent>
//                         <PaginationItem>
//                           <PaginationPrevious
//                             href="#"
//                             onClick={(e) => {
//                               e.preventDefault()
//                               if (currentPage > 1) setCurrentPage(currentPage - 1)
//                             }}
//                             className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
//                           />
//                         </PaginationItem>

//                         {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
//                           let pageNum
//                           if (totalPages <= 5) {
//                             pageNum = i + 1
//                           } else if (currentPage <= 3) {
//                             pageNum = i + 1
//                           } else if (currentPage >= totalPages - 2) {
//                             pageNum = totalPages - 4 + i
//                           } else {
//                             pageNum = currentPage - 2 + i
//                           }

//                           return (
//                             <PaginationItem key={pageNum}>
//                               <PaginationLink
//                                 href="#"
//                                 onClick={(e) => {
//                                   e.preventDefault()
//                                   setCurrentPage(pageNum)
//                                 }}
//                                 isActive={currentPage === pageNum}
//                                 className="cursor-pointer"
//                               >
//                                 {pageNum}
//                               </PaginationLink>
//                             </PaginationItem>
//                           )
//                         })}

//                         {totalPages > 5 && currentPage < totalPages - 2 && (
//                           <PaginationItem>
//                             <PaginationEllipsis />
//                           </PaginationItem>
//                         )}

//                         <PaginationItem>
//                           <PaginationNext
//                             href="#"
//                             onClick={(e) => {
//                               e.preventDefault()
//                               if (currentPage < totalPages) setCurrentPage(currentPage + 1)
//                             }}
//                             className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
//                           />
//                         </PaginationItem>
//                       </PaginationContent>
//                     </Pagination>
//                   </div>
//                 )}
//               </>
//             ) : (
//               <div className="text-center py-12">
//                 <Diamond className="h-16 w-16 mx-auto text-gray-300 mb-4" />
//                 <h3 className="text-lg font-semibold mb-2">No diamonds found</h3>
//                 <p className="text-muted-foreground">
//                   Try adjusting your filters to see more options. Consider expanding your budget, carat range, or
//                   quality criteria.
//                 </p>
//               </div>
//             )}
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   )
// }


"use client"

import { useState, useMemo, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { Info, Diamond, Gem, Search, Filter, ChevronDown, ChevronUp } from "lucide-react"
import diamondData from "@/diamond-data"
import { diamondProducts } from "@/diamond-product-data"
import DiamondCard from "../DiamondCard/DiamondCard"

export default function DiamondSelectorV1() {
  const [filters, setFilters] = useState({
    diamondType: "all", // Default value changed to "all"
    shape: "", // Empty means all shapes
    cut: [1, 4], // Full range: Ideal to Good
    color: [1, 8], // Full range: D to K
    clarity: [1, 8], // Full range: FL to SI2
    carat: [0.3, 5.0], // Full range available
    budget: [1000, 1000000], // Wide budget range
    polish: "",
    symmetry: "",
    fluorescence: "",
    certification: "",
    depth: [58, 65],
    table: [54, 62],
  })

  const [certificateNumber, setCertificateNumber] = useState("")
  const [showAdvanced, setShowAdvanced] = useState(false)
  const [showFilters, setShowFilters] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [sortBy, setSortBy] = useState("default")
  const itemsPerPage = 12

  const updateFilter = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }))
    setCurrentPage(1) // Reset to first page when filters change
  }

  const filteredDiamonds = useMemo(() => {
    return diamondProducts.filter((diamond) => {
      // Diamond type filter - only apply if set
      if (filters.diamondType !== "all" && diamond.diamondType !== filters.diamondType) {
        return false
      }

      // Shape filter - only apply if set
      if (filters.shape && diamond.shape !== filters.shape) {
        return false
      }

      const cutGrades = ["ideal", "excellent", "very-good", "good"]
      const cutStartIndex = filters.cut[0] - 1
      const cutEndIndex = filters.cut[1] - 1
      const allowedCuts = cutGrades.slice(cutStartIndex, cutEndIndex + 1)
      if (!allowedCuts.includes(diamond.cut)) {
        return false
      }

      const colorGrades = ["D", "E", "F", "G", "H", "I", "J", "K"]
      const colorStartIndex = filters.color[0] - 1
      const colorEndIndex = filters.color[1] - 1
      const allowedColors = colorGrades.slice(colorStartIndex, colorEndIndex + 1)
      if (!allowedColors.includes(diamond.color)) {
        return false
      }

      const clarityGrades = ["FL", "IF", "VVS1", "VVS2", "VS1", "VS2", "SI1", "SI2"]
      const clarityStartIndex = filters.clarity[0] - 1
      const clarityEndIndex = filters.clarity[1] - 1
      const allowedClarities = clarityGrades.slice(clarityStartIndex, clarityEndIndex + 1)
      if (!allowedClarities.includes(diamond.clarity)) {
        return false
      }

      // Carat filter
      if (diamond.carat < filters.carat[0] || diamond.carat > filters.carat[1]) {
        return false
      }

      // Budget filter
      if (diamond.price < filters.budget[0] || diamond.price > filters.budget[1]) {
        return false
      }

      if (filters.polish && diamond.polish && diamond.polish !== filters.polish) {
        return false
      }

      if (filters.symmetry && diamond.symmetry && diamond.symmetry !== filters.symmetry) {
        return false
      }

      if (filters.fluorescence && diamond.fluorescence && diamond.fluorescence !== filters.fluorescence) {
        return false
      }

      if (filters.certification && diamond.certification && diamond.certification !== filters.certification) {
        return false
      }

      return true
    })
  }, [filters])

  const sortedDiamonds = useMemo(() => {
    if (!sortBy || sortBy === "default") return filteredDiamonds

    const sorted = [...filteredDiamonds]

    switch (sortBy) {
      case "price-low-high":
        return sorted.sort((a, b) => a.price - b.price)
      case "price-high-low":
        return sorted.sort((a, b) => b.price - a.price)
      case "carat-large-small":
        return sorted.sort((a, b) => b.carat - a.carat)
      case "carat-small-large":
        return sorted.sort((a, b) => a.carat - b.carat)
      default:
        return sorted
    }
  }, [filteredDiamonds, sortBy])

  const totalPages = Math.ceil(sortedDiamonds.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedDiamonds = sortedDiamonds.slice(startIndex, startIndex + itemsPerPage)
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
  }, [currentPage])

  const InfoDialog = ({ title, children }) => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon" className="h-4 w-4 p-0 !cursor-pointer">
          <Info className="h-4 w-4 text-gray-400 hover:text-gray-600 " />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <div className="space-y-3 text-sm">{children}</div>
      </DialogContent>
    </Dialog>
  )

  return (
    <div className="min-h-screen ">
      {/* Header Progress */}
      <div className="max-w-7xl mx-auto bg-white dark:bg-slate-900 ">
        <div className="max-w-full mx-auto px-4 pt-6">
          <div className="flex items-center justify-center">
            <div className="flex items-center relative">
              {/* Connecting line 1-2 */}
              <motion.div
                className="absolute left-[200px] top-1/2 h-0.5 bg-gradient-to-r from-black to-gray-300 z-0"
                initial={{ width: 0 }}
                animate={{ width: "120px" }}
                transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
              />

              {/* Connecting line 2-3 */}
              <motion.div
                className="absolute left-[400px] top-1/2 h-0.5 bg-gradient-to-r from-gray-400 to-gray-200 z-0"
                initial={{ width: 0 }}
                animate={{ width: "120px" }}
                transition={{ duration: 1, delay: 1, ease: "easeInOut" }}
              />

              <motion.div
                className="flex items-center space-x-3 bg-black text-white px-6 py-3 rounded-l-lg relative z-10"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <motion.span
                  className="text-2xl font-bold"
                  initial={{ rotateY: -180 }}
                  animate={{ rotateY: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  1
                </motion.span>
                <div>
                  <motion.div
                    className="font-semibold"
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    Choose a
                  </motion.div>
                  <motion.div
                    className="font-bold"
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    DIAMOND
                  </motion.div>
                </div>
                <motion.div
                  initial={{ rotate: -180, scale: 0 }}
                  animate={{ rotate: 0, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  <Diamond className="h-6 w-6" />
                </motion.div>
              </motion.div>

              <motion.div
                className="flex items-center space-x-3 bg-gray-200 dark:bg-gray-700 px-6 py-3 relative z-10"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              >
                <motion.span
                  className="text-2xl font-bold text-gray-600"
                  initial={{ rotateY: -180 }}
                  animate={{ rotateY: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  2
                </motion.span>
                <div className="text-gray-600">
                  <motion.div
                    className="font-semibold"
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    Choose a
                  </motion.div>
                  <motion.div
                    className="font-bold"
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                  >
                    SETTING
                  </motion.div>
                </div>
                <motion.div
                  className="text-right text-sm"
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  <div className="font-bold">AED 2,387</div>
                  <div className="text-xs">View | Remove</div>
                </motion.div>
                <motion.div
                  initial={{ rotate: -180, scale: 0 }}
                  animate={{ rotate: 0, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  <Gem className="h-6 w-6" />
                </motion.div>
              </motion.div>

              <motion.div
                className="flex items-center space-x-3 bg-gray-100 dark:bg-gray-800 px-6 py-3 rounded-r-lg relative z-10"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
              >
                <motion.span
                  className="text-2xl font-bold text-gray-400"
                  initial={{ rotateY: -180 }}
                  animate={{ rotateY: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  3
                </motion.span>
                <div className="text-gray-400">
                  <motion.div
                    className="font-semibold"
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                  >
                    Personalise
                  </motion.div>
                  <motion.div
                    className="font-bold"
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1 }}
                  >
                    RING
                  </motion.div>
                </div>
                <motion.div
                  className="h-6 w-6 bg-gray-300 rounded"
                  initial={{ scale: 0, rotate: -90 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.8, delay: 1.1 }}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-full mx-auto px-4 sm:px-16 py-8">
        <div className="max-w-7xl mx-auto mb-1 flex items-center justify-between">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  onClick={() => setShowFilters(!showFilters)}
                  variant="outline"
                  className="flex items-center gap-2 px-4 py-2 font-medium cursor-pointer"
                >
                  <motion.div animate={{ rotate: showFilters ? 180 : 0 }} transition={{ duration: 0.3 }}>
                    <Filter className="h-4 w-4" />
                  </motion.div>
                  {showFilters ? "Hide Filters" : "Show Filters"}
                  <motion.div animate={{ rotate: showFilters ? 180 : 0 }} transition={{ duration: 0.3 }}>
                    {showFilters ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                  </motion.div>
                </Button>
              </motion.div>

              {/* Results Summary */}
              <div className="flex items-center gap-2 text-sm">
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5, delay: 0.2 }}>
                  <Badge variant="secondary" className="px-3 py-1">
                    {sortedDiamonds.length} {sortedDiamonds.length === 1 ? "Diamond" : "Diamonds"} Found
                  </Badge>
                </motion.div>
                {sortedDiamonds.length > 0 && (
                  <motion.span
                    className="text-muted-foreground"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    Showing {startIndex + 1}-{Math.min(startIndex + itemsPerPage, sortedDiamonds.length)}
                  </motion.span>
                )}
              </div>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {showFilters && (
            <motion.div
              className="max-w-7xl mx-auto space-y-6 mb-8"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {/* Diamond Type */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Card className="py-2 shadow-none border-none">
                  <CardContent className="p-0">
                    <Tabs value={filters.diamondType} onValueChange={(value) => updateFilter("diamondType", value)}>
                      <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto">
                        <TabsTrigger value="all" className="cursor-pointer flex items-center gap-2">
                          All Types
                        </TabsTrigger>
                        <TabsTrigger value="lab-grown" className="cursor-pointer flex items-center gap-2">
                          <Diamond className="h-4 w-4" />
                          Lab Grown
                        </TabsTrigger>
                        <TabsTrigger value="natural" className="cursor-pointer flex items-center gap-2">
                          <Diamond className="h-4 w-4" />
                          Natural
                        </TabsTrigger>
                      </TabsList>
                    </Tabs>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Main Filters Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
                {/* Shape Selection */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        Shape
                        <InfoDialog title="Diamond Shape">
                          <p>The shape of a diamond refers to its physical form and outline when viewed from above.</p>
                          <ul className="list-disc list-inside space-y-1">
                            <li>
                              <strong>Round:</strong> Most popular, maximum brilliance
                            </li>
                            <li>
                              <strong>Princess:</strong> Square shape with pointed corners
                            </li>
                            <li>
                              <strong>Cushion:</strong> Square with rounded corners, vintage appeal
                            </li>
                            <li>
                              <strong>Emerald:</strong> Rectangular with step cuts
                            </li>
                            <li>
                              <strong>Oval:</strong> Elongated round shape
                            </li>
                            <li>
                              <strong>Pear:</strong> Teardrop shape, unique and elegant
                            </li>
                          </ul>
                        </InfoDialog>
                      </CardTitle>
                      <p className="text-sm text-muted-foreground">See on hand</p>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-5 gap-2">
                        <Button
                          variant={filters.shape === "" ? "default" : "outline"}
                          className="h-16 p-2 flex flex-col items-center gap-1 hidden"
                          onClick={() => updateFilter("shape", "")}
                        >
                          <span className="text-xs">All</span>
                        </Button>
                        {diamondData.shapes.map((shape, index) => (
                          <motion.div
                            key={shape.id}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Button
                              variant={filters.shape === shape.id ? "default" : "outline"}
                              className="h-16 p-2 flex flex-col items-center gap-1 cursor-pointer w-full"
                              onClick={() => updateFilter("shape", shape.id)}
                            >
                              <img src={shape.image || "/placeholder.svg"} alt={shape.name} className="h-6 w-6" />
                              <span className="text-xs">{shape.name}</span>
                            </Button>
                          </motion.div>
                        ))}
                      </div>
                      {filters.shape && (
                        <motion.div
                          className="mt-3 text-center"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Badge variant="secondary">
                            {diamondData.shapes.find((s) => s.id === filters.shape)?.name}
                          </Badge>
                        </motion.div>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Cut Quality */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        Cut
                        <InfoDialog title="Diamond Cut">
                          <p>
                            Cut refers to how well a diamond's facets interact with light. It's the most important
                            factor affecting a diamond's beauty.
                          </p>
                          <ul className="list-disc list-inside space-y-1">
                            <li>
                              <strong>Ideal:</strong> Maximum fire and brilliance
                            </li>
                            <li>
                              <strong>Excellent:</strong> Exceptional light performance
                            </li>
                            <li>
                              <strong>Very Good:</strong> High level of brilliance
                            </li>
                            <li>
                              <strong>Good:</strong> Good brilliance and value
                            </li>
                          </ul>
                          <p className="mt-2 text-xs text-muted-foreground">Only applies to round diamonds</p>
                        </InfoDialog>
                      </CardTitle>
                      <p className="text-sm text-muted-foreground">Only applies to round shape</p>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex justify-between text-xs">
                          <span>IDEAL</span>
                          <span>EXCELLENT</span>
                          <span>VERY GOOD</span>
                          <span>GOOD</span>
                        </div>
                        <Slider
                          value={filters.cut}
                          max={4}
                          min={1}
                          step={1}
                          className="w-full"
                          onValueChange={(value) => updateFilter("cut", value)}
                        />
                        <div className="flex justify-between text-xs text-muted-foreground">
                          <span>Max Sparkle</span>
                          <span>Less Sparkle</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Color */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        Color
                        <InfoDialog title="Diamond Color">
                          <p>
                            Diamond color grading measures the absence of color in a diamond. The less color, the higher
                            the grade.
                          </p>
                          <ul className="list-disc list-inside space-y-1">
                            <li>
                              <strong>D-F:</strong> Colorless - highest quality
                            </li>
                            <li>
                              <strong>G-J:</strong> Near Colorless - excellent value
                            </li>
                            <li>
                              <strong>K-M:</strong> Faint Yellow - budget friendly
                            </li>
                          </ul>
                          <p className="mt-2">
                            Most people cannot detect color differences in the D-J range when mounted.
                          </p>
                        </InfoDialog>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex justify-between text-xs font-medium">
                          <span>D</span>
                          <span>E</span>
                          <span>F</span>
                          <span>G</span>
                          <span>H</span>
                          <span>I</span>
                          <span>J</span>
                          <span>K</span>
                        </div>
                        <Slider
                          value={filters.color}
                          max={8}
                          min={1}
                          step={1}
                          className="w-full"
                          onValueChange={(value) => updateFilter("color", value)}
                        />
                        <div className="flex justify-between text-xs text-muted-foreground">
                          <span>Colourless</span>
                          <span>Near Colourless</span>
                          <span>Slight Warmth</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Clarity */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        Clarity
                        <InfoDialog title="Diamond Clarity">
                          <p>Clarity measures the absence of inclusions and blemishes in a diamond.</p>
                          <ul className="list-disc list-inside space-y-1">
                            <li>
                              <strong>FL/IF:</strong> Flawless - no inclusions visible
                            </li>
                            <li>
                              <strong>VVS1/VVS2:</strong> Very Very Slightly Included
                            </li>
                            <li>
                              <strong>VS1/VS2:</strong> Very Slightly Included
                            </li>
                            <li>
                              <strong>SI1/SI2:</strong> Slightly Included - may be visible
                            </li>
                          </ul>
                          <p className="mt-2">
                            VS2 and above are typically "eye clean" - no inclusions visible to naked eye.
                          </p>
                        </InfoDialog>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex justify-between text-xs font-medium">
                          <span>FL</span>
                          <span>IF</span>
                          <span>VVS1</span>
                          <span>VVS2</span>
                          <span>VS1</span>
                          <span>VS2</span>
                          <span>SI1</span>
                          <span>SI2</span>
                        </div>
                        <Slider
                          value={filters.clarity}
                          max={8}
                          min={1}
                          step={1}
                          className="w-full"
                          onValueChange={(value) => updateFilter("clarity", value)}
                        />
                        <div className="flex justify-between text-xs text-muted-foreground">
                          <span>100% eye clean</span>
                          <span>Contact Us</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Carat */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        Carat
                        <InfoDialog title="Diamond Carat">
                          <p>
                            Carat is the unit of measurement for a diamond's weight. One carat equals 200 milligrams.
                          </p>
                          <ul className="list-disc list-inside space-y-1">
                            <li>
                              <strong>0.5ct:</strong> Popular choice for engagement rings
                            </li>
                            <li>
                              <strong>1.0ct:</strong> Classic milestone weight
                            </li>
                            <li>
                              <strong>2.0ct+:</strong> Statement pieces with significant presence
                            </li>
                          </ul>
                          <p className="mt-2">
                            Carat weight significantly affects price, with premium jumps at milestone weights.
                          </p>
                        </InfoDialog>
                      </CardTitle>
                      <p className="text-sm text-muted-foreground">See on hand</p>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex gap-2">
                          <Input
                            placeholder={filters.carat[0].toString()}
                            className="w-20"
                            value={filters.carat[0]}
                            onChange={(e) =>
                              updateFilter("carat", [Number.parseFloat(e.target.value) || 0.3, filters.carat[1]])
                            }
                          />
                          <Input
                            placeholder={filters.carat[1].toString()}
                            className="w-20"
                            value={filters.carat[1]}
                            onChange={(e) =>
                              updateFilter("carat", [filters.carat[0], Number.parseFloat(e.target.value) || 5.0])
                            }
                          />
                        </div>
                        <Slider
                          value={filters.carat}
                          max={5}
                          min={0.3}
                          step={0.1}
                          className="w-full"
                          onValueChange={(value) => updateFilter("carat", value)}
                        />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Budget - Full Width */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        Budget
                        <InfoDialog title="Diamond Budget">
                          <p>Set your budget range to find diamonds within your price range.</p>
                          <ul className="list-disc list-inside space-y-1">
                            <li>Prices vary based on the 4Cs: Cut, Color, Clarity, and Carat</li>
                            <li>Lab-grown diamonds typically cost 30-40% less than natural diamonds</li>
                            <li>Consider certification and quality when comparing prices</li>
                          </ul>
                          <p className="mt-2">All prices shown are in your local currency.</p>
                        </InfoDialog>
                      </CardTitle>
                      <p className="text-sm text-muted-foreground">Set the Budget</p>

                    </CardHeader>
                    <CardContent>
                      <div className="max-w-2xl mx-auto space-y-4">
                        <div className="flex gap-4 justify-center">
                          <Input
                            placeholder="1000"
                            className="w-32"
                            value={filters.budget[0]}
                            onChange={(e) =>
                              updateFilter("budget", [Number.parseInt(e.target.value) || 1000, filters.budget[1]])
                            }
                          />
                          <Input
                            placeholder="100000"
                            className="w-32"
                            value={filters.budget[1]}
                            onChange={(e) =>
                              updateFilter("budget", [filters.budget[0], Number.parseInt(e.target.value) || 1000000])
                            }
                          />
                        </div>
                        <Slider
                          value={filters.budget}
                          max={1000000}
                          min={1000}
                          step={1000}
                          className="w-full"
                          onValueChange={(value) => updateFilter("budget", value)}
                        />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>

              {/* Advanced Filters */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Button
                        variant="ghost"
                        onClick={() => setShowAdvanced(!showAdvanced)}
                        className="cursor-pointer h-auto font-semibold"
                      >
                        Advanced {showAdvanced ? "−" : "+"}
                      </Button>
                    </CardTitle>
                  </CardHeader>
                  {showAdvanced && (
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        <div>
                          <Label>Polish</Label>
                          <Select value={filters.polish} onValueChange={(value) => updateFilter("polish", value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Any" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="any">Any</SelectItem>
                              {diamondData.advancedFilters.polish.map((option) => (
                                <SelectItem key={option} value={option}>
                                  {option}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label>Symmetry</Label>
                          <Select value={filters.symmetry} onValueChange={(value) => updateFilter("symmetry", value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Any" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="any">Any</SelectItem>
                              {diamondData.advancedFilters.symmetry.map((option) => (
                                <SelectItem key={option} value={option}>
                                  {option}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label>Fluorescence</Label>
                          <Select
                            value={filters.fluorescence}
                            onValueChange={(value) => updateFilter("fluorescence", value)}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Any" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="any">Any</SelectItem>
                              {diamondData.advancedFilters.fluorescence.map((option) => (
                                <SelectItem key={option} value={option}>
                                  {option}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label>Certification</Label>
                          <Select
                            value={filters.certification}
                            onValueChange={(value) => updateFilter("certification", value)}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Any" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="any">Any</SelectItem>
                              {diamondData.advancedFilters.certification.map((option) => (
                                <SelectItem key={option} value={option}>
                                  {option}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label>Depth</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select depth" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="58-65">58% - 65%</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label>Table</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select table" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="54-62">54% - 62%</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <Separator />

                      <div className="max-w-md mx-auto">
                        <Label>Certificate Number</Label>
                        <div className="flex gap-2 mt-1">
                          <Input
                            placeholder="Certificate Number"
                            value={certificateNumber}
                            onChange={(e) => setCertificateNumber(e.target.value)}
                          />
                          <Button size="icon" variant="outline">
                            <Search className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  )}
                </Card>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Results Section - Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="shadow-none border-none">
            <CardHeader className="flex items-center justify-between">
              <div>
                <CardTitle className="text-2xl">
                  <motion.h1
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    Available Diamonds
                  </motion.h1>
                </CardTitle>
                <motion.p
                  className="text-muted-foreground text-sm"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  Showing {startIndex + 1}-{Math.min(startIndex + itemsPerPage, sortedDiamonds.length)} of{" "}
                  {sortedDiamonds.length} diamonds
                </motion.p>
              </div>
              <motion.div
                className="flex items-center gap-2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <Label htmlFor="sort-select" className="!mb-0 text-sm font-medium cursor-pointer">
                  Sort by:
                </Label>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger id="sort-select" className="w-48 cursor-pointer">
                    <SelectValue placeholder="Default" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="default" className="cursor-pointer">
                      Default
                    </SelectItem>
                    <SelectItem value="price-low-high" className="cursor-pointer">
                      Price: Low to High
                    </SelectItem>
                    <SelectItem value="price-high-low" className="cursor-pointer">
                      Price: High to Low
                    </SelectItem>
                    <SelectItem value="carat-large-small" className="cursor-pointer">
                      Carat: Large to Small
                    </SelectItem>
                    <SelectItem value="carat-small-large" className="cursor-pointer">
                      Carat: Small to Large
                    </SelectItem>
                  </SelectContent>
                </Select>
              </motion.div>
            </CardHeader>
            <CardContent>
              {paginatedDiamonds.length > 0 ? (
                <>
                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    {paginatedDiamonds.map((diamond, index) => (
                      <motion.div
                        key={diamond.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                        whileHover={{ y: -5 }}
                      >
                        <DiamondCard diamond={diamond} />
                      </motion.div>
                    ))}
                  </motion.div>

                  {totalPages > 1 && (
                    <motion.div
                      className="mt-8 flex justify-center"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 1 }}
                    >
                      <Pagination>
                        <PaginationContent>
                          <PaginationItem>
                            <PaginationPrevious
                              href="#"
                              onClick={(e) => {
                                e.preventDefault()
                                if (currentPage > 1) setCurrentPage(currentPage - 1)
                              }}
                              className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                            />
                          </PaginationItem>

                          {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                            let pageNum
                            if (totalPages <= 5) {
                              pageNum = i + 1
                            } else if (currentPage <= 3) {
                              pageNum = i + 1
                            } else if (currentPage >= totalPages - 2) {
                              pageNum = totalPages - 4 + i
                            } else {
                              pageNum = currentPage - 2 + i
                            }

                            return (
                              <PaginationItem key={pageNum}>
                                <PaginationLink
                                  href="#"
                                  onClick={(e) => {
                                    e.preventDefault()
                                    setCurrentPage(pageNum)
                                  }}
                                  isActive={currentPage === pageNum}
                                  className="cursor-pointer"
                                >
                                  {pageNum}
                                </PaginationLink>
                              </PaginationItem>
                            )
                          })}

                          {totalPages > 5 && currentPage < totalPages - 2 && (
                            <PaginationItem>
                              <PaginationEllipsis />
                            </PaginationItem>
                          )}

                          <PaginationItem>
                            <PaginationNext
                              href="#"
                              onClick={(e) => {
                                e.preventDefault()
                                if (currentPage < totalPages) setCurrentPage(currentPage + 1)
                              }}
                              className={
                                currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"
                              }
                            />
                          </PaginationItem>
                        </PaginationContent>
                      </Pagination>
                    </motion.div>
                  )}
                </>
              ) : (
                <motion.div
                  className="text-center py-12"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatDelay: 3 }}
                  >
                    <Diamond className="h-16 w-16 mx-auto text-gray-300 mb-4" />
                  </motion.div>
                  <h3 className="text-lg font-semibold mb-2">No diamonds found</h3>
                  <p className="text-muted-foreground">
                    Try adjusting your filters to see more options. Consider expanding your budget, carat range, or
                    quality criteria.
                  </p>
                </motion.div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
