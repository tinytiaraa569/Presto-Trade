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

const productsdata = [
  {
    id: 1,
    name: "2.5Ct Round Shape Gold Tennis Bracelet",
    description: "Elegant tennis bracelet with round diamonds",
    price: 95686,
    originalPrice: 106131,
    image: [
      "https://www.mirakijewels.com/s/64e6f45eeac997e94ec94eb1/6891df635b15d4deece87d46/403558-100-round-diamond-marq395-yellow-gold-2.jpg",
      "https://www.mirakijewels.com/s/64e6f45eeac997e94ec94eb1/6891df625b15d4deece87d43/403558-100-round-diamond-marq395-white-gold-2.jpg",
    ],
    category: "Diamond Rings",
    stock: 12,
    rating: 4.7,
    discount: 10,
    diamondShape: "Round",
    collection: "Eternal Wedding Bliss",
    carat: "2.50",
    colorStone: "Ruby",
    reviews: [
      { user: "Sophia", comment: "Absolutely stunning!", stars: 5 },
      { user: "Emma", comment: "Great quality for the price.", stars: 4 },
    ],
    metalColors: [
      {
        name: "Yellow Gold",
        images: [
          "https://www.mirakijewels.com/s/64e6f45eeac997e94ec94eb1/6891df635b15d4deece87d46/403558-100-round-diamond-marq395-yellow-gold-2.jpg",
        ],
      },
      {
        name: "White Gold",
        images: [
          "https://www.mirakijewels.com/s/64e6f45eeac997e94ec94eb1/6891df625b15d4deece87d43/403558-100-round-diamond-marq395-white-gold-2.jpg",
        ],
      },
      {
        name: "Rose Gold",
        images: [
          "https://www.mirakijewels.com/s/64e6f45eeac997e94ec94eb1/6891df625b15d4deece87d42/403558-100-round-diamond-marq395-rose-gold-2.jpg",
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Alura 8Ct Shared Prong Round Tennis Bracelet",
    description: "Luxurious shared prong tennis bracelet",
    price: 271037,
    originalPrice: 300716,
    image: [
      "https://www.mirakijewels.com/s/64e6f45eeac997e94ec94eb1/6891dc86fbacbb96b37fb45c/403160-300-round-diamond-marq395-yellow-gold-1.jpg",
      "https://www.mirakijewels.com/s/64e6f45eeac997e94ec94eb1/6891dc85fbacbb96b37fb452/403160-300-round-diamond-marq395-rose-gold-1.jpg",
    ],
    category: "Gold Necklaces",
    stock: 8,
    rating: 4.9,
    discount: 10,
    diamondShape: "Round",
    collection: "Timeless Heritage Collection",
    carat: "8.00",
    colorStone: "Sapphire",
    reviews: [
      { user: "Liam", comment: "Perfect gift for my sister.", stars: 5 },
      { user: "Olivia", comment: "Looks elegant but a bit delicate.", stars: 4 },
    ],
    metalColors: [
      {
        name: "Yellow Gold",
        images: [
          "https://www.mirakijewels.com/s/64e6f45eeac997e94ec94eb1/6891dc86fbacbb96b37fb45c/403160-300-round-diamond-marq395-yellow-gold-1.jpg",
        ],
      },
      {
        name: "Rose Gold",
        images: [
          "https://www.mirakijewels.com/s/64e6f45eeac997e94ec94eb1/6891dc85fbacbb96b37fb452/403160-300-round-diamond-marq395-rose-gold-1.jpg",
        ],
      },
      {
        name: "White Gold",
        images: [
          "https://www.mirakijewels.com/s/64e6f45eeac997e94ec94eb1/6891dc85fbacbb96b37fb459/403160-300-round-diamond-marq395-white-gold-1.jpg",
        ],
      },
    ],
  },
  {
    id: 3,
    name: "Anise 2Ct Leaf Style Round Tennis Bracelet",
    description: "Delicate leaf-style tennis bracelet",
    price: 130948,
    originalPrice: 145094,
    image: [
      "https://www.mirakijewels.com/s/64e6f45eeac997e94ec94eb1/6891db38e55946b2ed1b1e29/421769-100-heart-diamond-heart_diamond395-white-gold-2.jpg",
      "https://www.mirakijewels.com/s/64e6f45eeac997e94ec94eb1/6891db38e55946b2ed1b1e2c/421769-100-heart-diamond-heart_diamond395-yellow-gold-2.jpg",
    ],
    category: "Pearl Earrings",
    stock: 15,
    rating: 4.6,
    discount: 10,
    diamondShape: "Heart",
    collection: "Modern Glam Essentials",
    carat: "2.00",
    colorStone: "Emerald",
    reviews: [
      { user: "Noah", comment: "My wife loved these!", stars: 5 },
      { user: "Ava", comment: "Sparkles beautifully.", stars: 5 },
    ],
    metalColors: [
      {
        name: "White Gold",
        images: [
          "https://www.mirakijewels.com/s/64e6f45eeac997e94ec94eb1/6891db38e55946b2ed1b1e29/421769-100-heart-diamond-heart_diamond395-white-gold-2.jpg",
        ],
      },
      {
        name: "Yellow Gold",
        images: [
          "https://www.mirakijewels.com/s/64e6f45eeac997e94ec94eb1/6891db38e55946b2ed1b1e2c/421769-100-heart-diamond-heart_diamond395-yellow-gold-2.jpg",
        ],
      },
    ],
  },
  {
    id: 4,
    name: "Arista 8.75Ct Oval Cut Tennis Bracelet",
    description: "Stunning oval cut diamond tennis bracelet",
    price: 283197,
    originalPrice: 314260,
    image: [
      "https://www.mirakijewels.com/s/64e6f45eeac997e94ec94eb1/6891dc0a7d458b2564a7110f/406808-100-marquise-diamond-marquise_diamond395-yellow-gold-1-1-.jpg",
      "https://www.mirakijewels.com/s/64e6f45eeac997e94ec94eb1/6891dc097d458b2564a7110a/406808-100-marquise-diamond-marquise_diamond395-white-gold-1-4-.jpg",
    ],
    category: "Bracelets",
    stock: 6,
    rating: 4.8,
    discount: 10,
    diamondShape: "Oval",
    collection: "Celestial Diamond Dreams",
    carat: "8.75",
    colorStone: "Amethyst",
    reviews: [
      { user: "Isabella", comment: "So elegant, I wear it daily.", stars: 5 },
      { user: "James", comment: "Good craftsmanship.", stars: 4 },
    ],
    metalColors: [
      {
        name: "Rose Gold",
        images: [
          "https://www.mirakijewels.com/s/64e6f45eeac997e94ec94eb1/6891dc0a7d458b2564a7110c/406808-100-marquise-diamond-marquise_diamond395-rose-gold-1-1-.jpg",
        ],
      },
      {
        name: "Yellow Gold",
        images: [
          "https://www.mirakijewels.com/s/64e6f45eeac997e94ec94eb1/6891dc0a7d458b2564a7110f/406808-100-marquise-diamond-marquise_diamond395-yellow-gold-1-1-.jpg",
        ],
      },
      {
        name: "White Gold",
        images: [
          "https://www.mirakijewels.com/s/64e6f45eeac997e94ec94eb1/6891dc097d458b2564a7110a/406808-100-marquise-diamond-marquise_diamond395-white-gold-1-4-.jpg",
        ],
      },
    ],
  },
  {
    id: 5,
    name: "2.5Ct Round Shape Gold Tennis Bracelet",
    description: "Elegant tennis bracelet with round diamonds",
    price: 95686,
    originalPrice: 106131,
    image: [
      "https://www.mirakijewels.com/s/64e6f45eeac997e94ec94eb1/6891df635b15d4deece87d46/403558-100-round-diamond-marq395-yellow-gold-2.jpg",
      "https://www.mirakijewels.com/s/64e6f45eeac997e94ec94eb1/6891df625b15d4deece87d43/403558-100-round-diamond-marq395-white-gold-2.jpg",
    ],
    category: "Bridal Jewelry",
    stock: 12,
    rating: 4.7,
    discount: 10,
    diamondShape: "Princess",
    collection: "Golden Radiance Collection",
    carat: "2.50",
    colorStone: "Topaz",
    reviews: [
      { user: "Sophia", comment: "Absolutely stunning!", stars: 5 },
      { user: "Emma", comment: "Great quality for the price.", stars: 4 },
    ],
    metalColors: [
      {
        name: "Yellow Gold",
        images: [
          "https://www.mirakijewels.com/s/64e6f45eeac997e94ec94eb1/6891df635b15d4deece87d46/403558-100-round-diamond-marq395-yellow-gold-2.jpg",
        ],
      },
      {
        name: "Rose Gold",
        images: [
          "https://www.mirakijewels.com/s/64e6f45eeac997e94ec94eb1/6891df625b15d4deece87d43/403558-100-round-diamond-marq395-white-gold-2.jpg",
        ],
      },
      {
        name: "White Gold",
        images: [
          "https://www.mirakijewels.com/s/64e6f45eeac997e94ec94eb1/6891df625b15d4deece87d42/403558-100-round-diamond-marq395-rose-gold-2.jpg",
        ],
      },
    ],
  },
  {
    id: 6,
    name: "Alura 8Ct Shared Prong Round Tennis Bracelet",
    description: "Luxurious shared prong tennis bracelet",
    price: 271037,
    originalPrice: 300716,
    image: [
      "https://www.mirakijewels.com/s/64e6f45eeac997e94ec94eb1/6891dc86fbacbb96b37fb45c/403160-300-round-diamond-marq395-yellow-gold-1.jpg",
      "https://www.mirakijewels.com/s/64e6f45eeac997e94ec94eb1/6891dc85fbacbb96b37fb452/403160-300-round-diamond-marq395-rose-gold-1.jpg",
    ],
    category: "Men's Jewelry",
    stock: 8,
    rating: 4.9,
    discount: 10,
    diamondShape: "Cushion",
    collection: "Pearls of Elegance",
    carat: "8.00",
    colorStone: "Aquamarine",
    reviews: [
      { user: "Liam", comment: "Perfect gift for my sister.", stars: 5 },
      { user: "Olivia", comment: "Looks elegant but a bit delicate.", stars: 4 },
    ],
    metalColors: [
      {
        name: "Yellow Gold",
        images: [
          "https://www.mirakijewels.com/s/64e6f45eeac997e94ec94eb1/6891dc86fbacbb96b37fb45c/403160-300-round-diamond-marq395-yellow-gold-1.jpg",
        ],
      },
      {
        name: "Rose Gold",
        images: [
          "https://www.mirakijewels.com/s/64e6f45eeac997e94ec94eb1/6891dc85fbacbb96b37fb452/403160-300-round-diamond-marq395-rose-gold-1.jpg",
        ],
      },
      {
        name: "White Gold",
        images: [
          "https://www.mirakijewels.com/s/64e6f45eeac997e94ec94eb1/6891dc85fbacbb96b37fb459/403160-300-round-diamond-marq395-white-gold-1.jpg",
        ],
      },
    ],
  },
  {
    id: 7,
    name: "Anise 2Ct Leaf Style Round Tennis Bracelet",
    description: "Delicate leaf-style tennis bracelet",
    price: 130948,
    originalPrice: 145094,
    image: [
      "https://www.mirakijewels.com/s/64e6f45eeac997e94ec94eb1/6891db38e55946b2ed1b1e29/421769-100-heart-diamond-heart_diamond395-white-gold-2.jpg",
      "https://www.mirakijewels.com/s/64e6f45eeac997e94ec94eb1/6891db38e55946b2ed1b1e2c/421769-100-heart-diamond-heart_diamond395-yellow-gold-2.jpg",
    ],
    category: "Hoop Earrings",
    stock: 15,
    rating: 4.6,
    discount: 10,
    diamondShape: "Emerald",
    collection: "Royal Bridal Treasures",
    carat: "2.00",
    colorStone: "Garnet",
    reviews: [
      { user: "Noah", comment: "My wife loved these!", stars: 5 },
      { user: "Ava", comment: "Sparkles beautifully.", stars: 5 },
    ],
    metalColors: [
      {
        name: "White Gold",
        images: [
          "https://www.mirakijewels.com/s/64e6f45eeac997e94ec94eb1/6891db38e55946b2ed1b1e29/421769-100-heart-diamond-heart_diamond395-white-gold-2.jpg",
        ],
      },
      {
        name: "Yellow Gold",
        images: [
          "https://www.mirakijewels.com/s/64e6f45eeac997e94ec94eb1/6891db38e55946b2ed1b1e2c/421769-100-heart-diamond-heart_diamond395-yellow-gold-2.jpg",
        ],
      },
    ],
  },
  {
    id: 8,
    name: "Diamond Nazaria",
    description: "Stunning oval cut diamond tennis bracelet",
    price: 283197,
    originalPrice: 314260,
    image: [
      "https://www.mirakijewels.com/s/64e6f45eeac997e94ec94eb1/6891dc0a7d458b2564a7110f/406808-100-marquise-diamond-marquise_diamond395-yellow-gold-1-1-.jpg",
      "https://www.mirakijewels.com/s/64e6f45eeac997e94ec94eb1/6891dc097d458b2564a7110a/406808-100-marquise-diamond-marquise_diamond395-white-gold-1-4-.jpg",
    ],
    category: "Bracelets",
    stock: 6,
    rating: 4.8,
    discount: 10,
    diamondShape: "Pear",
    collection: "Everyday Luxe Styles",
    carat: "8.75",
    colorStone: "Peridot",
    reviews: [
      { user: "Isabella", comment: "So elegant, I wear it daily.", stars: 5 },
      { user: "James", comment: "Good craftsmanship.", stars: 4 },
    ],
    metalColors: [
      {
        name: "Rose Gold",
        images: [
          "https://www.mirakijewels.com/s/64e6f45eeac997e94ec94eb1/6891dc0a7d458b2564a7110c/406808-100-marquise-diamond-marquise_diamond395-rose-gold-1-1-.jpg",
        ],
      },
      {
        name: "Yellow Gold",
        images: [
          "https://www.mirakijewels.com/s/64e6f45eeac997e94ec94eb1/6891dc0a7d458b2564a7110f/406808-100-marquise-diamond-marquise_diamond395-yellow-gold-1-1-.jpg",
        ],
      },
      {
        name: "White Gold",
        images: [
          "https://www.mirakijewels.com/s/64e6f45eeac997e94ec94eb1/6891dc097d458b2564a7110a/406808-100-marquise-diamond-marquise_diamond395-white-gold-1-4-.jpg",
        ],
      },
    ],
  },
  // ------------------------------------------------
  // Products 5 - 30 (with similar structure)
]

const jewelryCategories = [
  {
    id: 1,
    name: "Diamond Rings",
    image: "https://i.pinimg.com/736x/b4/65/75/b465756099edfd7b6cc463307fc88efa.jpg",
    price: "From $2,999",
    items: "156 items",
    rating: 4.9,
    featured: true,
  },
  {
    id: 2,
    name: "Gold Necklaces",
    image: "https://i.pinimg.com/736x/63/77/8c/63778ca6c6f38b4f733f06a14c3435ec.jpg",
    price: "From $899",
    items: "89 items",
    rating: 4.8,
    new: true,
  },
  {
    id: 3,
    name: "Pearl Earrings",
    image: "https://i.pinimg.com/736x/44/82/75/448275e871894b22f360056f3a486b15.jpg",
    price: "From $599",
    items: "124 items",
    rating: 4.7,
    sale: true,
  },
  {
    id: 4,
    name: "Bracelets",
    image: "https://i.pinimg.com/736x/41/9c/4a/419c4a5445f137ff56d085e010f47f53.jpg",
    price: "From $1,299",
    items: "67 items",
    rating: 4.9,
    popular: true,
  },
  {
    id: 5,
    name: "Bridal Jewelry",
    image: "https://i.pinimg.com/736x/62/0c/4d/620c4d70dda83e57d4dd09c865a1b02d.jpg",
    price: "From $3,999",
    items: "45 items",
    rating: 5.0,
    featured: true,
  },
  {
    id: 6,
    name: "Men's Jewelry",
    image: "https://i.pinimg.com/736x/22/8f/75/228f7519509126a5a4c43bac7938f854.jpg",
    price: "From $799",
    items: "78 items",
    rating: 4.6,
    new: true,
  },
  // ---- new categories start here ----
  {
    id: 7,
    name: "Hoop Earrings",
    image: "https://i.pinimg.com/736x/bf/2d/40/bf2d4084532107022be211c8511720f1.jpg",
    price: "From $499",
    items: "84 items",
    rating: 4.7,
    popular: true,
  },
  {
    id: 8,
    name: "Diamond Nazaria",
    image: "https://i.pinimg.com/736x/9e/e4/70/9ee470af999c72021fe619f278d48ae6.jpg",
    price: "From $1,999",
    items: "142 items",
    rating: 4.9,
    featured: true,
  },
  {
    id: 9,
    name: "Gemstone Jewelry",
    image: "https://i.pinimg.com/736x/c3/0e/2e/c30e2ef9a7d9452e3b91ac9e46335609.jpg",
    price: "From $1,299",
    items: "93 items",
    rating: 4.8,
    new: true,
  },
  {
    id: 10,
    name: "Stud Earrings",
    image: "https://i.pinimg.com/736x/a3/bc/73/a3bc73774cf4842f6ecc2a8d8fcf4267.jpg",
    price: "From $399",
    items: "118 items",
    rating: 4.6,
    sale: true,
  },
  {
    id: 11,
    name: "Solitaire Necklace",
    image: "https://i.pinimg.com/736x/6c/a9/1b/6ca91b684498f7a6d059bd9f1b24bd6e.jpg",
    price: "From $699",
    items: "74 items",
    rating: 4.7,
    popular: true,
  },
  {
    id: 12,
    name: "Diamond Bangles",
    image: "https://i.pinimg.com/736x/91/63/9f/91639f0636dba77c747321f368d74246.jpg",
    price: "From $1,499",
    items: "59 items",
    rating: 4.9,
    featured: true,
  },
]

const Collections = [
  { name: "Eternal Wedding Bliss", image: "https://i.pinimg.com/736x/3e/26/cd/3e26cd2ac665a7203bcbbaf1b1270050.jpg" },
  {
    name: "Timeless Heritage Collection",
    image: "https://i.pinimg.com/736x/00/6a/af/006aaf0870f12a92fc9e54eea20e9401.jpg",
  },
  { name: "Modern Glam Essentials", image: "https://i.pinimg.com/736x/77/39/07/7739073323c6d5de5834100decb7a128.jpg" },
  {
    name: "Celestial Diamond Dreams",
    image: "https://i.pinimg.com/736x/5e/b7/27/5eb7273d9e9daea3a382c4391247c1ba.jpg",
  },
  {
    name: "Golden Radiance Collection",
    image: "https://i.pinimg.com/736x/20/51/2e/20512e52a0fd5180c2ff0164754f8805.jpg",
  },
  { name: "Pearls of Elegance", image: "https://i.pinimg.com/736x/1f/8c/70/1f8c704c877628b6623e714d4c52a3c6.jpg" },
  { name: "Royal Bridal Treasures", image: "https://i.pinimg.com/474x/21/32/7b/21327b1442d95e65ad1660d884edb958.jpg" },
  { name: "Everyday Luxe Styles", image: "https://i.pinimg.com/736x/0f/9c/23/0f9c23cb9df3a0733ab92737269f59f2.jpg" },
]

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

const Metalcolors = [
  { name: "18K Yellow Gold", imgurl: goldmetalimg },
  { name: "18K Rose Gold", imgurl: rosemetalimg },
  { name: "Platinum", imgurl: platinummetalimg },
]

const CaratOptions = [
  { value: "0.25", label: "0.25 ct" },
  { value: "0.50", label: "0.50 ct" },
  { value: "0.75", label: "0.75 ct" },
  { value: "1.00", label: "1.00 ct" },
  { value: "1.50", label: "1.50 ct" },
  { value: "2.00", label: "2.00 ct" },
  { value: "2.50", label: "2.50 ct" },
  { value: "3.00", label: "3.00 ct" },
  { value: "4.00", label: "4.00 ct" },
  { value: "5.00", label: "5.00 ct+" },
]

const ColorStones = [
  {
    name: "Ruby",
    color: "#E0115F",
    image: Rubyimg,
    component: () => <img src={Rubyimg || "/placeholder.svg"} alt="Ruby" className="h-6 w-6 object-cover" />,
  },
  {
    name: "Sapphire",
    color: "#0F52BA",
    image: Sapphireimg,
    component: () => <img src={Sapphireimg || "/placeholder.svg"} alt="Sapphire" className="h-6 w-6 object-cover" />,
  },
  {
    name: "Emerald",
    color: "#50C878",
    image: Emeraldimg,
    component: () => <img src={Emeraldimg || "/placeholder.svg"} alt="Emerald" className="h-6 w-6 object-cover" />,
  },
  {
    name: "Amethyst",
    color: "#9966CC",
    image: Amethystimg,
    component: () => <img src={Amethystimg || "/placeholder.svg"} alt="Amethyst" className="h-6 w-6 object-cover" />,
  },
  {
    name: "Topaz",
    color: "#FFC87C",
    image: Topazimg,
    component: () => <img src={Topazimg || "/placeholder.svg"} alt="Topaz" className="h-6 w-6 object-cover" />,
  },
  {
    name: "Aquamarine",
    color: "#7FFFD4",
    image: Aquamarineimg,
    component: () => (
      <img src={Aquamarineimg || "/placeholder.svg"} alt="Aquamarine" className="h-6 w-6 object-cover" />
    ),
  },
  {
    name: "Garnet",
    color: "#722F37",
    image: Rubyimg,
    component: () => <img src={Rubyimg || "/placeholder.svg"} alt="Garnet" className="h-6 w-6 object-cover" />,
  },
  {
    name: "Peridot",
    color: "#E6E200",
    image: Emeraldimg,
    component: () => <img src={Emeraldimg || "/placeholder.svg"} alt="Peridot" className="h-6 w-6 object-cover" />,
  },
]

export { productsdata, jewelryCategories, Collections, DiamondShapeSVGs, Metalcolors, CaratOptions, ColorStones }
