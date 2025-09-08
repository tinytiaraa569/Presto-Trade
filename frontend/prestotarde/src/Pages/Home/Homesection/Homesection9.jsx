
// "use client"

// import { useEffect, useState, useCallback } from "react"
// import axios from "axios"
// import { Swiper, SwiperSlide } from "swiper/react"
// import { motion, AnimatePresence } from "framer-motion"
// import { PlayCircle, Instagram, Film, ChevronLeft, ChevronRight, Loader2 } from "lucide-react"
// import "swiper/css"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { Button } from "@/components/ui/button"
// import { set } from "react-hook-form"

// const Homesection9 = () => {
//   const [username, setUsername] = useState("")
//   const [reels, setReels] = useState([])
//   const [posts, setPosts] = useState([])
//   const [swiper, setSwiper] = useState(null)
//   const [activeIndex, setActiveIndex] = useState(0)
//   const [loading, setLoading] = useState(false)
//   const [loadingMore, setLoadingMore] = useState(false)
//   const [hasMoreReels, setHasMoreReels] = useState(true)
//   const [hasMorePosts, setHasMorePosts] = useState(true)
//   const [reelsNextUrl, setReelsNextUrl] = useState(null)
//   const [postsNextUrl, setPostsNextUrl] = useState(null)
//   const [igUserId, setIgUserId] = useState(null)


//   const reelsdata = [
//     {
//       id: "reel1",
//       media_url: "https://www.pexels.com/download/video/6763534/",
//       media_type: "VIDEO",
//       caption: "Handcrafted diamond engagement ring ✨",
//       permalink: "#",
//       timestamp: "2024-01-15T10:00:00Z",
//     },
//     {
//       id: "reel2",
//       media_url: "https://www.pexels.com/download/video/8183385/",
//       media_type: "VIDEO",
//       caption: "24k gold necklace creation process 💎",
//       permalink: "#",
//       timestamp: "2024-01-14T15:30:00Z",
//     },
//     {
//       id: "reel3",
//       media_url: "https://www.pexels.com/download/video/9431542/",
//       media_type: "VIDEO",
//       caption: "Emerald tennis bracelet collection 🌟",
//       permalink: "#",
//       timestamp: "2024-01-13T12:45:00Z",
//     },
//     {
//       id: "reel4",
//       media_url: "https://www.pexels.com/download/video/8247020/",
//       media_type: "VIDEO",
//       caption: "Pearl drop earrings styling guide ✨",
//       permalink: "#",
//       timestamp: "2024-01-12T09:20:00Z",
//     },
//     {
//       id: "reel5",
//       media_url: "https://www.pexels.com/download/video/6469640/",
//       media_type: "VIDEO",
//       caption: "Blue sapphire pendant masterpiece 💙",
//       permalink: "#",
//       timestamp: "2024-01-11T16:15:00Z",
//     },
//     {
//       id: "reel6",
//      media_url: "https://www.pexels.com/download/video/6262804/",
//       media_type: "VIDEO",
//       caption: "Ruby cocktail rings collection 🔴",
//       permalink: "#",
//       timestamp: "2024-01-10T14:00:00Z",
//     },
//     {
//       id: "reel7",
//       media_url: "https://www.pexels.com/download/video/9328448/",
//       media_type: "VIDEO",
//       caption: "Custom wedding band engraving 💍",
//       permalink: "#",
//       timestamp: "2024-01-09T11:30:00Z",
//     },
//     {
//       id: "reel8",
//       media_url: "https://www.pexels.com/download/video/31757666/",
//       media_type: "VIDEO",
//       caption: "Vintage brooch restoration art 🎨",
//       permalink: "#",
//       timestamp: "2024-01-08T13:45:00Z",
//     },
//     {
//       id: "reel9",
//       media_url: "https://www.pexels.com/download/video/5327599/",
//       media_type: "VIDEO",
//       caption: "Classic diamond studs collection ✨",
//       permalink: "#",
//       timestamp: "2024-01-07T10:15:00Z",
//     },
//     {
//       id: "reel10",
//       media_url: "https://www.pexels.com/download/video/31992241/",
//       media_type: "VIDEO",
//       caption: "Luxury watch & jewelry pairing 🕰️",
//       permalink: "#",
//       timestamp: "2024-01-06T17:20:00Z",
//     },
//   ]

//   const postsdata = [
//     {
//       id: "post1",
//       media_url: "https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg",
//       media_type: "IMAGE",
//       caption: "Elegant diamond necklace collection ✨",
//       permalink: "#",
//       timestamp: "2024-01-15T08:00:00Z",
//     },
//     {
//       id: "post2",
//       media_url: "https://images.pexels.com/photos/2735970/pexels-photo-2735970.jpeg",
//       media_type: "IMAGE",
//       caption: "Gold bracelet stacking inspiration 💛",
//       permalink: "#",
//       timestamp: "2024-01-14T12:30:00Z",
//     },
//     {
//       id: "post3",
//       media_url: "https://images.pexels.com/photos/33154633/pexels-photo-33154633.jpeg",
//       media_type: "IMAGE",
//       caption: "Emerald engagement ring perfection 💚",
//       permalink: "#",
//       timestamp: "2024-01-13T15:45:00Z",
//     },
//     {
//       id: "post4",
//       media_url: "https://images.pexels.com/photos/33222151/pexels-photo-33222151.jpeg",
//       media_type: "IMAGE",
//       caption: "Pearl jewelry set for special occasions 🤍",
//       permalink: "#",
//       timestamp: "2024-01-12T11:20:00Z",
//     },
//     {
//       id: "post5",
//       media_url: "https://images.pexels.com/photos/29632053/pexels-photo-29632053.jpeg",
//       media_type: "IMAGE",
//       caption: "Sapphire drop earrings elegance 💙",
//       permalink: "#",
//       timestamp: "2024-01-11T14:15:00Z",
//     },
//     {
//       id: "post6",
//       media_url: "https://images.pexels.com/photos/8165654/pexels-photo-8165654.jpeg",
//       media_type: "IMAGE",
//       caption: "Ruby pendant statement piece ❤️",
//       permalink: "#",
//       timestamp: "2024-01-10T16:00:00Z",
//     },
//     {
//       id: "post7",
//       media_url: "https://images.pexels.com/photos/17298632/pexels-photo-17298632.jpeg",
//       media_type: "IMAGE",
//       caption: "Wedding rings for your perfect day 💍",
//       permalink: "#",
//       timestamp: "2024-01-09T09:30:00Z",
//     },
//     {
//       id: "post8",
//       media_url: "https://images.pexels.com/photos/20013416/pexels-photo-20013416.jpeg",
//       media_type: "IMAGE",
//       caption: "Vintage jewelry collection treasures 🏺",
//       permalink: "#",
//       timestamp: "2024-01-08T13:45:00Z",
//     },
//     {
//       id: "post9",
//       media_url: "https://images.pexels.com/photos/4544818/pexels-photo-4544818.jpeg",
//       media_type: "IMAGE",
//       caption: "Diamond tennis bracelet perfection ✨",
//       permalink: "#",
//       timestamp: "2024-01-07T12:15:00Z",
//     },
//     {
//       id: "post10",
//       media_url: "https://images.pexels.com/photos/7743044/pexels-photo-7743044.jpeg",
//       media_type: "IMAGE",
//       caption: "Luxury jewelry collection showcase 💎",
//       permalink: "#",
//       timestamp: "2024-01-06T15:20:00Z",
//     },
//   ]
// //   const accessToken =
// //         "EAAQI3kdFLIMBPL98eY8GMrF1SH7ZCo3z2vkfM8ZBpv6B9vl264kzTMSjZAFmZBReEZAT9xcsDRghdgHsXoDWszKLEtbGUqEwLV2CTHt4wRILfEBwlZCIzo0hKQZCTveEaykZBBf3FbVTZA8sf6vNWpzxDvxv6i9isgJY5Bdd7JoIMTnyvvZCHUW8H7f9ct8vQB1Mtk"
// //     // "EAAQI3kdFLIMBO4Of7AwXgZAyKqFmcLyNpnRj0qsNcTC7v9IO0qqZCJmvF05TAB8cGgMHskNpQ2eBbzcpRAokZAzKpwHIqDo7BTXTiC1MWZBnRQzJzNeYGZBcJC0iZCZBq0xyKOUQXW95XMErrwi7fPggedaKpW8Ob8PTMRL7amoZBiMU7KDrzece"
// //   const pageId = "142039082320769"
// //   const ITEMS_PER_LOAD = 20

//   // Initial data fetch
// //   useEffect(() => {
// //     const fetchInitialData = async () => {
// //       setLoading(true)
// //       try {
// //         // Get Instagram Business Account ID
// //         const pageRes = await axios.get(`https://graph.facebook.com/v22.0/${pageId}`, {
// //           params: {
// //             fields: "instagram_business_account",
// //             access_token: accessToken,
// //           },
// //         })

// //         const userId = pageRes.data.instagram_business_account?.id
// //         if (!userId) {
// //           console.error("Instagram Business Account not found")
// //           return
// //         }

// //         setIgUserId(userId)

// //         // Get username
// //         const userRes = await axios.get(`https://graph.facebook.com/v22.0/${userId}`, {
// //           params: {
// //             fields: "username",
// //             access_token: accessToken,
// //           },
// //         })
// //         setUsername(userRes.data.username)

// //         // Fetch initial media (owned)
// //         await fetchInitialMedia(userId)
// //       } catch (err) {
// //         console.error("Failed to fetch Instagram data:", err)
// //       } finally {
// //         setLoading(false)
// //       }
// //     }

// //     fetchInitialData()
// //   }, [])

// //   const fetchInitialMedia = async (userId) => {
// //     try {
// //       // Fetch owned media with limit
// //       const ownedRes = await axios.get(`https://graph.facebook.com/v22.0/${userId}/media`, {
// //         params: {
// //           fields: "id,caption,media_type,media_url,thumbnail_url,timestamp,permalink",
// //           access_token: accessToken,
// //           limit: ITEMS_PER_LOAD,
// //         },
// //       })

// //       // Fetch tagged media with limit
// //       const taggedRes = await axios.get(`https://graph.facebook.com/v22.0/${userId}/tags`, {
// //         params: {
// //           fields: "id,caption,media_type,media_url,thumbnail_url,timestamp,permalink",
// //           access_token: accessToken,
// //           limit: ITEMS_PER_LOAD,
// //         },
// //       })

// //       // Combine and separate media
// //       const allMedia = [...ownedRes.data.data, ...taggedRes.data.data]
// //       const sortedMedia = allMedia.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))

// //       const initialReels = sortedMedia.filter((item) => item.media_type === "VIDEO")
// //       const initialPosts = sortedMedia.filter(
// //         (item) => item.media_type === "IMAGE" || item.media_type === "CAROUSEL_ALBUM",
// //       )

// //       setReels(initialReels)
// //       setPosts(initialPosts)

// //       // Set pagination URLs
// //       setReelsNextUrl(ownedRes.data.paging?.next || taggedRes.data.paging?.next)
// //       setPostsNextUrl(ownedRes.data.paging?.next)

// //       // Check if there's more data
// //       setHasMoreReels(!!(ownedRes.data.paging?.next || taggedRes.data.paging?.next))
// //       setHasMorePosts(!!ownedRes.data.paging?.next)
// //     } catch (err) {
// //       console.error("Failed to fetch initial media:", err)
// //     }
// //   }

// //   const loadMoreMedia = useCallback(
// //     async (type) => {
// //       if (loadingMore || !igUserId) return

// //       setLoadingMore(true)
// //       try {
// //         let nextUrl = type === "reels" ? reelsNextUrl : postsNextUrl
// //         if (!nextUrl) {
// //           // If no next URL, try to fetch more from the base endpoint with offset
// //           const currentCount = type === "reels" ? reels.length : posts.length
// //           nextUrl = `https://graph.facebook.com/v22.0/${igUserId}/media?fields=id,caption,media_type,media_url,thumbnail_url,timestamp,permalink&access_token=${accessToken}&limit=${ITEMS_PER_LOAD}&offset=${currentCount}`
// //         }

// //         const res = await axios.get(nextUrl)
// //         const newMedia = res.data.data || []

// //         if (newMedia.length > 0) {
// //           const sortedNewMedia = newMedia.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))

// //           if (type === "reels") {
// //             const newReels = sortedNewMedia.filter((item) => item.media_type === "VIDEO")
// //             setReels((prev) => [...prev, ...newReels])
// //             setReelsNextUrl(res.data.paging?.next)
// //             setHasMoreReels(!!res.data.paging?.next && newReels.length > 0)
// //           } else {
// //             const newPosts = sortedNewMedia.filter(
// //               (item) => item.media_type === "IMAGE" || item.media_type === "CAROUSEL_ALBUM",
// //             )
// //             setPosts((prev) => [...prev, ...newPosts])
// //             setPostsNextUrl(res.data.paging?.next)
// //             setHasMorePosts(!!res.data.paging?.next && newPosts.length > 0)
// //           }
// //         } else {
// //           // No more data available
// //           if (type === "reels") {
// //             setHasMoreReels(false)
// //           } else {
// //             setHasMorePosts(false)
// //           }
// //         }
// //       } catch (err) {
// //         console.error(`Failed to load more ${type}:`, err)
// //       } finally {
// //         setLoadingMore(false)
// //       }
// //     },
// //     [igUserId, reels.length, posts.length, reelsNextUrl, postsNextUrl, loadingMore],
// //   )

//   useEffect(()=>{
//     setReels(reelsdata)   
//     setPosts(postsdata)
//   },[])

//   const handlePrev = () => swiper?.slidePrev()
//   const handleNext = () => swiper?.slideNext()

//   const renderSwiper = (filteredMedia, type) => (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ delay: 0.3 }}
//       className="overflow-hidden px-4"
//     >
//       <Swiper
//         spaceBetween={20}
//         slidesPerView={"auto"}
//         onSwiper={setSwiper}
//         onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
//         style={{ padding: "10px 0" }}
//       >
//         <AnimatePresence>
//           {filteredMedia.map((item, index) => (
//             <SwiperSlide
//               key={item.id}
//               style={{ width: "220px", height: "360px" }}
//               className="relative rounded-xl overflow-hidden shadow-lg cursor-pointer group"
//               onClick={() => window.open(item.permalink, "_blank")}
//             >
//               <motion.div
//                 initial={{ scale: 0.9, opacity: 0 }}
//                 animate={{ scale: 1, opacity: 1 }}
//                 transition={{ duration: 0.5, delay: (index * 0.1) % 0.5 }}
//                 className="w-full h-full relative"
//               >
//                 {item.media_type === "VIDEO" ? (
//                   <>
//                     <video
//                       src={item.media_url}
//                       autoPlay
//                       muted
//                       loop
//                       playsInline
//                       className="w-full h-full object-cover"
//                     />
//                     <motion.div
//                       className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 flex items-center justify-center"
//                       initial={{ opacity: 0.7 }}
//                       whileHover={{ opacity: 0.4 }}
//                       transition={{ duration: 0.2 }}
//                     >
//                       <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/30 transition duration-300">
//                         <div className="opacity-0 group-hover:opacity-100 transition duration-300">
//                           <PlayCircle className="w-8 h-8 text-white drop-shadow-lg" />
//                         </div>
//                       </div>
//                     </motion.div>
//                     <motion.div
//                       className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm rounded-full p-1.5 flex items-center gap-1"
//                       initial={{ opacity: 0, y: -10 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ delay: 0.3 + index * 0.05 }}
//                     >
//                       <Film className="w-3.5 h-3.5 text-white" />
//                       <span className="text-white text-xs font-medium">Reel</span>
//                     </motion.div>
//                   </>
//                 ) : (
//                   <>
//                     <img
//                       src={item.media_url || "/placeholder.svg"}
//                       alt="Instagram Post"
//                       className="w-full h-full object-cover"
//                     />
//                     <motion.div
//                       className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50"
//                       initial={{ opacity: 0.7 }}
//                       whileHover={{ opacity: 0.3 }}
//                       transition={{ duration: 0.2 }}
//                     />
//                     <motion.div
//                       className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm rounded-full p-1.5 flex items-center gap-1"
//                       initial={{ opacity: 0, y: -10 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ delay: 0.3 + index * 0.05 }}
//                     >
//                       <Instagram className="w-3.5 h-3.5 text-white" />
//                       <span className="text-white text-xs font-medium">Post</span>
//                     </motion.div>
//                   </>
//                 )}
//               </motion.div>
//             </SwiperSlide>
//           ))}
//         </AnimatePresence>

//         {/* Load More Slide */}
//         {((type === "reels" && hasMoreReels) || (type === "posts" && hasMorePosts)) && (
//           <SwiperSlide
//             style={{ width: "220px", height: "360px" }}
//             className="relative rounded-xl overflow-hidden shadow-lg flex items-center justify-center bg-gradient-to-r from-slate-800/20 via-slate-700/10 to-slate-800/20"
//           >
//             <motion.div
//               className="flex items-center justify-center h-full w-full text-center p-6"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.5 }}
//             >
//               <Button
//                 onClick={() => loadMoreMedia(type)}
//                 disabled={loadingMore}
//                 className="cursor-pointer bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800  text-white px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105"
//               >
//                 {loadingMore ? (
//                   <>
//                     <Loader2 className="w-4 h-4 mr-2 animate-spin" />
//                     Loading...
//                   </>
//                 ) : (
//                   `Load More ${type === "reels" ? "Reels" : "Posts"}`
//                 )}
//               </Button>
//             </motion.div>
//           </SwiperSlide>
//         )}
//       </Swiper>
//     </motion.div>
//   )

//   if (loading) {
//     return (
//       <div className="py-12 px-4 bg-white relative overflow-hidden">
//         <div className="flex items-center justify-center h-64">
//           <div className="text-center">
//             <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4 text-[#D7A295]" />
//             <p className="text-gray-600">Loading Instagram content...</p>
//           </div>
//         </div>
//       </div>
//     )
//   }

//   return (
//     <div className="py-12 px-4 bg-white relative overflow-hidden">
//       <motion.div
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.2 }}
//         variants={{
//           hidden: { opacity: 0, y: -20 },
//           visible: { opacity: 1, y: 0 },
//         }}
//         className="text-center mb-3"
//       >
//         <motion.div
//           className="inline-flex items-center gap-2 mb-2"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={{
//             hidden: { scale: 0.9 },
//             visible: { scale: 1 },
//           }}
//           transition={{
//             type: "spring",
//             stiffness: 500,
//             damping: 15,
//           }}
//         >
//           <Instagram className="text-pink-600 w-6 h-6" />
//           <a
//             href={`https://instagram.com/${username || "Presto_Trade"}`}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-sm font-medium text-pink-600 hover:underline"
//           >
//             @{username || "Presto_Trade"}
//           </a>
//         </motion.div>
//          <motion.h2
//             className="text-xl sm:text-2xl font-bold  text-balance"
//             whileHover={{ scale: 1.02 }}
//             transition={{ type: "spring", stiffness: 300, damping: 20 }}
//           >
//              Follow Us on Instagram
//           </motion.h2>
//           <motion.p
//             className=" text-slate-600 max-w-4xl mx-auto text-pretty"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.2, duration: 0.6 }}
//           >
//             Explore behind-the-scenes moments, 
//           styling inspiration, and timeless jewelry designs loved by our community.
//           </motion.p>
//       </motion.div>

//       <Tabs defaultValue="reels" className="w-full">
//         <TabsList className="mx-auto mb-2 flex justify-center bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 rounded-lg w-fit">
//           <TabsTrigger value="reels" className="cursor-pointer px-5 py-1 aria-selected:text-black text-white">
//             Reels 
//           </TabsTrigger>
//           <TabsTrigger value="posts" className="cursor-pointer px-5 py-1 aria-selected:text-black text-white">
//             Posts 
//           </TabsTrigger>
//         </TabsList>

//         <div className="relative">
//           {/* Left Arrow */}
//           <motion.button
//             className="cursor-pointer absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 backdrop-blur-sm rounded-full p-2 shadow-lg -ml-3"
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.95 }}
//             onClick={handlePrev}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={{
//               hidden: { opacity: 0, x: -10 },
//               visible: { opacity: 1, x: 0 },
//             }}
//             transition={{ delay: 0.5 }}
//           >
//             <ChevronLeft className="w-5 h-5 text-white" />
//           </motion.button>

//           {/* Right Arrow */}
//           <motion.button
//             className="cursor-pointer absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 backdrop-blur-sm rounded-full p-2 shadow-lg -mr-3"
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.95 }}
//             onClick={handleNext}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={{
//               hidden: { opacity: 0, x: 10 },
//               visible: { opacity: 1, x: 0 },
//             }}
//             transition={{ delay: 0.5 }}
//           >
//             <ChevronRight className="w-5 h-5 text-white" />
//           </motion.button>

//           <TabsContent value="reels">{renderSwiper(reels, "reels")}</TabsContent>
//           <TabsContent value="posts">{renderSwiper(posts, "posts")}</TabsContent>
//         </div>
//       </Tabs>
//     </div>
//   )
// }

// export default Homesection9


"use client"

import { useEffect, useState, useCallback } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { motion, AnimatePresence } from "framer-motion"
import { PlayCircle, Instagram, Film, ChevronLeft, ChevronRight, Loader2 } from "lucide-react"
import "swiper/css"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"

const Homesection9 = () => {
  const [username, setUsername] = useState("")
  const [reels, setReels] = useState([])
  const [posts, setPosts] = useState([])
  const [swiper, setSwiper] = useState(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [loading, setLoading] = useState(false)
  const [loadingMore, setLoadingMore] = useState(false)
  const [hasMoreReels, setHasMoreReels] = useState(true)
  const [hasMorePosts, setHasMorePosts] = useState(true)
  const [reelsNextUrl, setReelsNextUrl] = useState(null)
  const [postsNextUrl, setPostsNextUrl] = useState(null)
  const [igUserId, setIgUserId] = useState(null)
  const [hasAnimated, setHasAnimated] = useState(false)

  const reelsdata = [
    {
      id: "reel1",
      media_url: "https://www.pexels.com/download/video/6763534/",
      media_type: "VIDEO",
      caption: "Handcrafted diamond engagement ring ✨",
      permalink: "#",
      timestamp: "2024-01-15T10:00:00Z",
    },
    {
      id: "reel2",
      media_url: "https://www.pexels.com/download/video/8183385/",
      media_type: "VIDEO",
      caption: "24k gold necklace creation process 💎",
      permalink: "#",
      timestamp: "2024-01-14T15:30:00Z",
    },
    {
      id: "reel3",
      media_url: "https://www.pexels.com/download/video/9431542/",
      media_type: "VIDEO",
      caption: "Emerald tennis bracelet collection 🌟",
      permalink: "#",
      timestamp: "2024-01-13T12:45:00Z",
    },
    {
      id: "reel4",
      media_url: "https://www.pexels.com/download/video/8247020/",
      media_type: "VIDEO",
      caption: "Pearl drop earrings styling guide ✨",
      permalink: "#",
      timestamp: "2024-01-12T09:20:00Z",
    },
    {
      id: "reel5",
      media_url: "https://www.pexels.com/download/video/6469640/",
      media_type: "VIDEO",
      caption: "Blue sapphire pendant masterpiece 💙",
      permalink: "#",
      timestamp: "2024-01-11T16:15:00Z",
    },
    {
      id: "reel6",
      media_url: "https://www.pexels.com/download/video/6262804/",
      media_type: "VIDEO",
      caption: "Ruby cocktail rings collection 🔴",
      permalink: "#",
      timestamp: "2024-01-10T14:00:00Z",
    },
    {
      id: "reel7",
      media_url: "https://www.pexels.com/download/video/9328448/",
      media_type: "VIDEO",
      caption: "Custom wedding band engraving 💍",
      permalink: "#",
      timestamp: "2024-01-09T11:30:00Z",
    },
    {
      id: "reel8",
      media_url: "https://www.pexels.com/download/video/31757666/",
      media_type: "VIDEO",
      caption: "Vintage brooch restoration art 🎨",
      permalink: "#",
      timestamp: "2024-01-08T13:45:00Z",
    },
    {
      id: "reel9",
      media_url: "https://www.pexels.com/download/video/5327599/",
      media_type: "VIDEO",
      caption: "Classic diamond studs collection ✨",
      permalink: "#",
      timestamp: "2024-01-07T10:15:00Z",
    },
    {
      id: "reel10",
      media_url: "https://www.pexels.com/download/video/31992241/",
      media_type: "VIDEO",
      caption: "Luxury watch & jewelry pairing 🕰️",
      permalink: "#",
      timestamp: "2024-01-06T17:20:00Z",
    },
  ]

  const postsdata = [
    {
      id: "post1",
      media_url: "https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg",
      media_type: "IMAGE",
      caption: "Elegant diamond necklace collection ✨",
      permalink: "#",
      timestamp: "2024-01-15T08:00:00Z",
    },
    {
      id: "post2",
      media_url: "https://images.pexels.com/photos/2735970/pexels-photo-2735970.jpeg",
      media_type: "IMAGE",
      caption: "Gold bracelet stacking inspiration 💛",
      permalink: "#",
      timestamp: "2024-01-14T12:30:00Z",
    },
    {
      id: "post3",
      media_url: "https://images.pexels.com/photos/33154633/pexels-photo-33154633.jpeg",
      media_type: "IMAGE",
      caption: "Emerald engagement ring perfection 💚",
      permalink: "#",
      timestamp: "2024-01-13T15:45:00Z",
    },
    {
      id: "post4",
      media_url: "https://images.pexels.com/photos/33222151/pexels-photo-33222151.jpeg",
      media_type: "IMAGE",
      caption: "Pearl jewelry set for special occasions 🤍",
      permalink: "#",
      timestamp: "2024-01-12T11:20:00Z",
    },
    {
      id: "post5",
      media_url: "https://images.pexels.com/photos/29632053/pexels-photo-29632053.jpeg",
      media_type: "IMAGE",
      caption: "Sapphire drop earrings elegance 💙",
      permalink: "#",
      timestamp: "2024-01-11T14:15:00Z",
    },
    {
      id: "post6",
      media_url: "https://images.pexels.com/photos/8165654/pexels-photo-8165654.jpeg",
      media_type: "IMAGE",
      caption: "Ruby pendant statement piece ❤️",
      permalink: "#",
      timestamp: "2024-01-10T16:00:00Z",
    },
    {
      id: "post7",
      media_url: "https://images.pexels.com/photos/17298632/pexels-photo-17298632.jpeg",
      media_type: "IMAGE",
      caption: "Wedding rings for your perfect day 💍",
      permalink: "#",
      timestamp: "2024-01-09T09:30:00Z",
    },
    {
      id: "post8",
      media_url: "https://images.pexels.com/photos/20013416/pexels-photo-20013416.jpeg",
      media_type: "IMAGE",
      caption: "Vintage jewelry collection treasures 🏺",
      permalink: "#",
      timestamp: "2024-01-08T13:45:00Z",
    },
    {
      id: "post9",
      media_url: "https://images.pexels.com/photos/4544818/pexels-photo-4544818.jpeg",
      media_type: "IMAGE",
      caption: "Diamond tennis bracelet perfection ✨",
      permalink: "#",
      timestamp: "2024-01-07T12:15:00Z",
    },
    {
      id: "post10",
      media_url: "https://images.pexels.com/photos/7743044/pexels-photo-7743044.jpeg",
      media_type: "IMAGE",
      caption: "Luxury jewelry collection showcase 💎",
      permalink: "#",
      timestamp: "2024-01-06T15:20:00Z",
    },
  ]

  const loadMoreMedia = useCallback((type) => {
    setLoadingMore(true)
    // Simulate fetching more media
    setTimeout(() => {
      setLoadingMore(false)
    }, 1000)
  }, [])

  useEffect(() => {
    setReels(reelsdata)
    setPosts(postsdata)
  }, [])

  const handleAnimationComplete = () => {
    if (!hasAnimated) {
      setHasAnimated(true)
    }
  }

  const handlePrev = () => swiper?.slidePrev()
  const handleNext = () => swiper?.slideNext()

  const renderSwiper = (filteredMedia, type) => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="overflow-hidden px-4"
    >
      <Swiper
        spaceBetween={20}
        slidesPerView={"auto"}
        onSwiper={setSwiper}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        style={{ padding: "10px 0" }}
      >
        <AnimatePresence>
          {filteredMedia.map((item, index) => (
            <SwiperSlide
              key={item.id}
              style={{ width: "220px", height: "360px" }}
              className="relative rounded-xl overflow-hidden shadow-lg cursor-pointer group"
              onClick={() => window.open(item.permalink, "_blank")}
            >
              <motion.div
                initial={!hasAnimated ? { scale: 0.9, opacity: 0 } : { scale: 1, opacity: 1 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: !hasAnimated ? (index * 0.1) % 0.5 : 0 }}
                onAnimationComplete={index === 0 ? handleAnimationComplete : undefined}
                className="w-full h-full relative"
              >
                {item.media_type === "VIDEO" ? (
                  <>
                    <video
                      src={item.media_url}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover"
                    />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 flex items-center justify-center"
                      initial={{ opacity: 0.7 }}
                      whileHover={{ opacity: 0.4 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/30 transition duration-300">
                        <div className="opacity-0 group-hover:opacity-100 transition duration-300">
                          <PlayCircle className="w-8 h-8 text-white drop-shadow-lg" />
                        </div>
                      </div>
                    </motion.div>
                    <motion.div
                      className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm rounded-full p-1.5 flex items-center gap-1"
                      initial={!hasAnimated ? { opacity: 0, y: -10 } : { opacity: 1, y: 0 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: !hasAnimated ? 0.3 + index * 0.05 : 0 }}
                    >
                      <Film className="w-3.5 h-3.5 text-white" />
                      <span className="text-white text-xs font-medium">Reel</span>
                    </motion.div>
                  </>
                ) : (
                  <>
                    <img
                      src={item.media_url || "/placeholder.svg"}
                      alt="Instagram Post"
                      className="w-full h-full object-cover"
                    />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50"
                      initial={{ opacity: 0.7 }}
                      whileHover={{ opacity: 0.3 }}
                      transition={{ duration: 0.2 }}
                    />
                    <motion.div
                      className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm rounded-full p-1.5 flex items-center gap-1"
                      initial={!hasAnimated ? { opacity: 0, y: -10 } : { opacity: 1, y: 0 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: !hasAnimated ? 0.3 + index * 0.05 : 0 }}
                    >
                      <Instagram className="w-3.5 h-3.5 text-white" />
                      <span className="text-white text-xs font-medium">Post</span>
                    </motion.div>
                  </>
                )}
              </motion.div>
            </SwiperSlide>
          ))}
        </AnimatePresence>

        {/* Load More Slide */}
        {((type === "reels" && hasMoreReels) || (type === "posts" && hasMorePosts)) && (
          <SwiperSlide
            style={{ width: "220px", height: "360px" }}
            className="relative rounded-xl overflow-hidden shadow-lg flex items-center justify-center bg-gradient-to-r from-slate-800/20 via-slate-700/10 to-slate-800/20"
          >
            <motion.div
              className="flex items-center justify-center h-full w-full text-center p-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <Button
                onClick={() => loadMoreMedia(type)}
                disabled={loadingMore}
                className="cursor-pointer bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800  text-white px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105"
              >
                {loadingMore ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Loading...
                  </>
                ) : (
                  `Load More ${type === "reels" ? "Reels" : "Posts"}`
                )}
              </Button>
            </motion.div>
          </SwiperSlide>
        )}
      </Swiper>
    </motion.div>
  )

  if (loading) {
    return (
      <div className="py-12 px-4 bg-white relative overflow-hidden">
        <div className="flex items-center justify-center h-64">
          <div className="text-center">
            <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4 text-[#D7A295]" />
            <p className="text-gray-600">Loading Instagram content...</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="py-12 px-4 bg-white relative overflow-hidden">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2, margin: "0px 0px -100px 0px" }}
        onAnimationComplete={handleAnimationComplete}
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0 },
        }}
        className="text-center mb-3"
      >
        <motion.div
          className="inline-flex items-center gap-2 mb-0.5"
          initial={!hasAnimated ? "hidden" : "visible"}
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { scale: 0.9 },
            visible: { scale: 1 },
          }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 15,
          }}
        >
          <Instagram className="text-pink-600 w-6 h-6" />
          <a
            href={`https://instagram.com/${username || "Presto_Trade"}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-pink-600 hover:underline"
          >
            @{username || "Presto_Trade"}
          </a>
        </motion.div>
        <motion.h2
          className="text-xl sm:text-2xl font-bold  text-balance"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          Follow Us on Instagram
        </motion.h2>
        <motion.p
          className=" text-slate-600 max-w-4xl mx-auto text-pretty"
          initial={!hasAnimated ? { opacity: 0 } : { opacity: 1 }}
          animate={{ opacity: 1 }}
          transition={{ delay: !hasAnimated ? 0.2 : 0, duration: 0.6 }}
        >
          Explore behind-the-scenes moments, styling inspiration, and timeless jewelry designs loved by our community.
        </motion.p>
      </motion.div>

      <Tabs defaultValue="reels" className="w-full">
        <TabsList className="mx-auto mb-2 flex justify-center bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 rounded-lg w-fit">
          <TabsTrigger value="reels" className="cursor-pointer px-5 py-1 aria-selected:text-black text-white">
            Reels
          </TabsTrigger>
          <TabsTrigger value="posts" className="cursor-pointer px-5 py-1 aria-selected:text-black text-white">
            Posts
          </TabsTrigger>
        </TabsList>

        <div className="relative">
          {/* Left Arrow */}
          <motion.button
            className="cursor-pointer absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 backdrop-blur-sm rounded-full p-2 shadow-lg -ml-3"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={handlePrev}
            initial={!hasAnimated ? "hidden" : "visible"}
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, x: -10 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ delay: !hasAnimated ? 0.5 : 0 }}
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </motion.button>

          {/* Right Arrow */}
          <motion.button
            className="cursor-pointer absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 backdrop-blur-sm rounded-full p-2 shadow-lg -mr-3"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleNext}
            initial={!hasAnimated ? "hidden" : "visible"}
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, x: 10 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ delay: !hasAnimated ? 0.5 : 0 }}
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </motion.button>

          <TabsContent value="reels">{renderSwiper(reels, "reels")}</TabsContent>
          <TabsContent value="posts">{renderSwiper(posts, "posts")}</TabsContent>
        </div>
      </Tabs>
    </div>
  )
}

export default Homesection9
