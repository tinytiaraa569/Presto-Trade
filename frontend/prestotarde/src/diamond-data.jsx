
// Diamond shape images
import roundimg from "./Pages/Navbar/images/ht-round.webp"
import pearimg from "./Pages/Navbar/images/ht-pear.webp"
import ovalimg from "./Pages/Navbar/images/ht-oval.webp"
import asscherimg from "./Pages/Navbar/images/ht-asscher.webp"
import marquiseimg from "./Pages/Navbar/images/ht-marquise.webp"
import princessimg from "./Pages/Navbar/images/ht-princess.png"
import cushionimg from "./Pages/Navbar/images/ht-cushion.webp"
import emeraldimg from "./Pages/Navbar/images/ht-emerald.webp"
import heartimg from "./Pages/Navbar/images/ht-heart.webp"
import radientimg from "./Pages/Navbar/images/ht-radient.webp"

import goldmetalimg from "./Pages/Navbar/images/ht-18k-yellow-gold.webp"
import rosemetalimg from "./Pages/Navbar/images/ht-18k-rose-gold.webp"
import platinummetalimg from "./Pages/Navbar/images/ht-platinum.webp"

// gemstone images
import Rubyimg from "./Pages/Navbar/gemstoneimages/ruby.webp"
import Sapphireimg from "./Pages/Navbar/gemstoneimages/sapphire.webp"
import Emeraldimg from "./Pages/Navbar/gemstoneimages/emerald.webp"
import Amethystimg from "./Pages/Navbar/gemstoneimages/amethyst.webp"
import Topazimg from "./Pages/Navbar/gemstoneimages/topaz.webp"
import Aquamarineimg from "./Pages/Navbar/gemstoneimages/aquamarine.webp"


const diamondShapeImages = {
  round: roundimg,
  princess: princessimg,
  cushion: cushionimg,
  emerald: emeraldimg,
  oval: ovalimg,
  pear: pearimg,
  marquise: marquiseimg,
  asscher: asscherimg,
  radiant: radientimg,
  heart: heartimg,
}

// Gemstone images
const gemstoneImages = {
  ruby: Rubyimg,
  sapphire: Sapphireimg,
  emerald: Emeraldimg,
  amethyst: Amethystimg,
  topaz: Topazimg,
  aquamarine: Aquamarineimg ,
}

export const diamondData = {
  // Diamond shapes with their properties
  shapes: [
    {
      id: "round",
      name: "Round",
      image: diamondShapeImages.round,
      description: "Classic and brilliant",
      popularity: "Most Popular",
    },
    {
      id: "princess",
      name: "Princess",
      image: diamondShapeImages.princess,
      description: "Modern square cut",
      popularity: "Popular",
    },
    {
      id: "cushion",
      name: "Cushion",
      image: diamondShapeImages.cushion,
      description: "Vintage inspired",
      popularity: "Trending",
    },
    {
      id: "emerald",
      name: "Emerald",
      image: diamondShapeImages.emerald,
      description: "Elegant step cut",
      popularity: "Classic",
    },
    {
      id: "oval",
      name: "Oval",
      image: diamondShapeImages.oval,
      description: "Elongated brilliance",
      popularity: "Popular",
    },
    {
      id: "pear",
      name: "Pear",
      image: diamondShapeImages.pear,
      description: "Unique teardrop",
      popularity: "Unique",
    },
    {
      id: "marquise",
      name: "Marquise",
      image: diamondShapeImages.marquise,
      description: "Dramatic elongated",
      popularity: "Distinctive",
    },
    {
      id: "asscher",
      name: "Asscher",
      image: diamondShapeImages.asscher,
      description: "Art deco square",
      popularity: "Vintage",
    },
    {
      id: "radiant",
      name: "Radiant",
      image: diamondShapeImages.radiant,
      description: "Brilliant square cut",
      popularity: "Modern",
    },
    {
      id: "heart",
      name: "Heart",
      image: diamondShapeImages.heart,
      description: "Symbol of love",
      popularity: "Romantic",
    },
  ],

  // Cut quality grades
  cutGrades: [
    { value: "ideal", label: "Ideal", description: "Maximum brilliance and fire" },
    { value: "excellent", label: "Excellent", description: "Exceptional brilliance" },
    { value: "very-good", label: "Very Good", description: "High brilliance" },
    { value: "good", label: "Good", description: "Good brilliance" },
    { value: "fair", label: "Fair", description: "Moderate brilliance" },
  ],

  // Color grades (D-Z scale)
  colorGrades: [
    { value: "D", label: "D", description: "Absolutely colorless", category: "Colorless" },
    { value: "E", label: "E", description: "Colorless", category: "Colorless" },
    { value: "F", label: "F", description: "Colorless", category: "Colorless" },
    { value: "G", label: "G", description: "Near colorless", category: "Near Colorless" },
    { value: "H", label: "H", description: "Near colorless", category: "Near Colorless" },
    { value: "I", label: "I", description: "Near colorless", category: "Near Colorless" },
    { value: "J", label: "J", description: "Near colorless", category: "Near Colorless" },
    { value: "K", label: "K", description: "Faint yellow", category: "Slight Warmth" },
    { value: "L", label: "L", description: "Faint yellow", category: "Slight Warmth" },
    { value: "M", label: "M", description: "Faint yellow", category: "Slight Warmth" },
  ],

  // Clarity grades
  clarityGrades: [
    { value: "FL", label: "FL", description: "Flawless", category: "100% eye clean" },
    { value: "IF", label: "IF", description: "Internally Flawless", category: "100% eye clean" },
    { value: "VVS1", label: "VVS1", description: "Very Very Slightly Included", category: "100% eye clean" },
    { value: "VVS2", label: "VVS2", description: "Very Very Slightly Included", category: "100% eye clean" },
    { value: "VS1", label: "VS1", description: "Very Slightly Included", category: "100% eye clean" },
    { value: "VS2", label: "VS2", description: "Very Slightly Included", category: "100% eye clean" },
    { value: "SI1", label: "SI1", description: "Slightly Included", category: "Contact Us" },
    { value: "SI2", label: "SI2", description: "Slightly Included", category: "Contact Us" },
  ],

  // Carat weight ranges
  caratRanges: [
    { min: 0.3, max: 0.49, label: "0.30 - 0.49 ct" },
    { min: 0.5, max: 0.69, label: "0.50 - 0.69 ct" },
    { min: 0.7, max: 0.89, label: "0.70 - 0.89 ct" },
    { min: 0.9, max: 0.99, label: "0.90 - 0.99 ct" },
    { min: 1.0, max: 1.49, label: "1.00 - 1.49 ct" },
    { min: 1.5, max: 1.99, label: "1.50 - 1.99 ct" },
    { min: 2.0, max: 2.99, label: "2.00 - 2.99 ct" },
    { min: 3.0, max: 4.99, label: "3.00 - 4.99 ct" },
    { min: 5.0, max: 10.0, label: "5.00+ ct" },
  ],

  // Advanced filters
  advancedFilters: {
    polish: ["Excellent", "Very Good", "Good", "Fair"],
    symmetry: ["Excellent", "Very Good", "Good", "Fair"],
    fluorescence: ["None", "Faint", "Medium", "Strong", "Very Strong"],
    certification: ["GIA", "AGS", "EGL", "IGI", "GCAL"],
    depth: { min: 58, max: 65 },
    table: { min: 54, max: 62 },
  },

  // Gemstone options
  gemstones: [
    {
      id: "ruby",
      name: "Ruby",
      image: gemstoneImages.ruby,
      color: "#E0115F",
      description: "Symbol of passion and love",
    },
    {
      id: "sapphire",
      name: "Sapphire",
      image: gemstoneImages.sapphire,
      color: "#0F52BA",
      description: "Represents wisdom and royalty",
    },
    {
      id: "emerald",
      name: "Emerald",
      image: gemstoneImages.emerald,
      color: "#50C878",
      description: "Stone of rebirth and love",
    },
    {
      id: "amethyst",
      name: "Amethyst",
      image: gemstoneImages.amethyst,
      color: "#9966CC",
      description: "Promotes clarity and peace",
    },
    {
      id: "topaz",
      name: "Topaz",
      image: gemstoneImages.topaz,
      color: "#FFC87C",
      description: "Brings joy and abundance",
    },
    {
      id: "aquamarine",
      name: "Aquamarine",
      image: gemstoneImages.aquamarine,
      color: "#7FFFD4",
      description: "Calming stone of the sea",
    },
  ],
}

export default diamondData
