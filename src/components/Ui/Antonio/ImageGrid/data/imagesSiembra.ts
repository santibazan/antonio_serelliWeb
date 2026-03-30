export interface ImageItem {
  id: number
  src: string
  title: string
  description: string
  medida?: string
  anio?: number
  size: "small" | "medium" | "large"
}

export const images: ImageItem[] = [
  { id: 1, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771967317/0569_aslzrd.jpg", title: "1", description: "", size: "medium" },
  { id: 2, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771967316/0305c_eedrug.jpg", title: "2", description: " ", size: "large" },
  { id: 3, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771967315/0305a_l58idr.jpg", title: "3", description: "", size: "medium" },
  { id: 4, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771967314/0305b_vhnbvk.jpg", title: "4", description: "", size: "small" },

  { id: 5, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771967311/0270_ytuq9y.jpg", title: "5", description: "", size: "medium" },
  { id: 6, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771967309/0270-d_h7emj9.jpg", title: "6", description: "", size: "large" },
  { id: 7, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771967312/0305_o1bnjs.jpg", title: "7", description: "", size: "small" },
  { id: 8, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771967310/0270-e_poyr2a.jpg", title: "8", description: "", size: "medium" },
  { id: 9, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771967307/0270-b_dgi8dp.jpg", title: "9", description: "", size: "small" },
  { id: 10, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771967308/0270-c_cbmw2u.jpg", title: "10", description: "", size: "medium" },
  { id: 11, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771967306/0270-a_sebkv8.jpg", title: "11", description: "", size: "small" },
 
]