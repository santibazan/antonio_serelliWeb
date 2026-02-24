export interface ImageItem {
  id: number
  src: string
  title: string
  description: string
  size: "small" | "medium" | "large"
}

export const images: ImageItem[] = [
  { id: 1, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771967306/0270-a_sebkv8.jpg", title: "1 ", description: "107 x 147 cm", size: "medium" },
  { id: 2, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771967307/0270-b_dgi8dp.jpg", title: "2 ", description: "107 x 147 cm ", size: "small" },
  { id: 3, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771967308/0270-c_cbmw2u.jpg", title: "3", description: "95 x 120 cm", size: "small" },
  { id: 4, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771967309/0270-d_h7emj9.jpg", title: "4 ", description: "94 x 124 cm", size: "large" },

  { id: 5, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771967310/0270-e_poyr2a.jpg", title: "5 ", description: "98 x 66 cm", size: "large" },
  { id: 6, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771967311/0270_ytuq9y.jpg", title: "6 ", description: "105 x 75 cm", size: "medium" },
  { id: 7, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771967312/0305_o1bnjs.jpg", title: "7 ", description: "74 x 104 cm", size: "medium" },
  { id: 8, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771967315/0305a_l58idr.jpg", title: "8 ", description: "75 x 100 cm", size: "small" },

  { id: 9, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771967314/0305b_vhnbvk.jpg", title: "9 ", description: "90 x 70 cm", size: "small" },
  { id: 10, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771967316/0305c_eedrug.jpg", title: "10", description: "61 x 47 cm", size: "small" },
  { id: 11, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771967317/0569_aslzrd.jpg", title: "11 ", description: "61 x 47 cm", size: "small" }
]