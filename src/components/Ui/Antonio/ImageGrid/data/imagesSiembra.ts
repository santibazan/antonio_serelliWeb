export interface ImageItem {
  id: number
  src: string
  title: string
  description: string
  size: "small" | "medium" | "large"
}

export const images: ImageItem[] = [
  { id: 1, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771951850/ArteMendocino_zkrofv.jpg", title: "1 ", description: "107 x 147 cm", size: "medium" },
  { id: 2, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771951847/14esculturasAmaneciendo_lgvds3.jpg", title: "2 ", description: "107 x 147 cm ", size: "small" },
  { id: 3, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771951844/11esculturas_tsptc8.jpg", title: "3", description: "95 x 120 cm", size: "small" },
  { id: 4, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771951844/12jardinEntrada_asbfvw.jpg", title: "4 ", description: "94 x 124 cm", size: "large" },

  { id: 5, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771951844/13estrellaNorte_ms6ygf.jpg", title: "5 ", description: "98 x 66 cm", size: "large" },
  // { id: 6, src: "", title: "6 ", description: "105 x 75 cm", size: "medium" },
  // { id: 7, src: "", title: "7 ", description: "74 x 104 cm", size: "medium" },
  // { id: 8, src: "", title: "8 ", description: "75 x 100 cm", size: "small" },

  // { id: 9, src: "", title: "9 ", description: "90 x 70 cm", size: "small" },
  // { id: 10, src: "", title: "10", description: "61 x 47 cm", size: "small" },
  // { id: 11, src: "", title: "11 ", description: "61 x 47 cm", size: "small" }
]