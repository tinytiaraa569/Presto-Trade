import { Route, Routes } from "react-router-dom"
import Navbar from "./Pages/Navbar/Navbar"
import Home from "./Pages/Home/Home"
import Promo from "./Pages/Navbar/Promo"
import Lenis from "@studio-freight/lenis";
import { useEffect, useRef } from "react";
import Footer from "./Pages/Footer/Footer";
import ProductPage from "./Pages/ProductPage/ProductPage";


function App() {

 const lenisRef = useRef(null)
  const rafId = useRef(null)

  useEffect(() => {
    if (!lenisRef.current) {
      lenisRef.current = new Lenis({
        duration: 0.9, // scrolling speed
        easing: (t) => 1 - Math.pow(2, -10 * t), // smoother exponential easing
        smoothWheel: true,
      })
    }

    const lenis = lenisRef.current

    const raf = (time) => {
      lenis.raf(time)
      rafId.current = requestAnimationFrame(raf)
    }

    rafId.current = requestAnimationFrame(raf)

    const onMobileMenuOpen = () => lenis.stop()
    const onMobileMenuClose = () => lenis.start()

    window.addEventListener("mobile-menu:open", onMobileMenuOpen)
    window.addEventListener("mobile-menu:close", onMobileMenuClose)

    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current)
      window.removeEventListener("mobile-menu:open", onMobileMenuOpen)
      window.removeEventListener("mobile-menu:close", onMobileMenuClose)
      lenis.destroy()
      lenisRef.current = null
    }
  }, [])

  return (
    <>
    <Promo />
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<ProductPage />} />

    </Routes>


    <Footer />

      
    </>
  )
}

export default App
