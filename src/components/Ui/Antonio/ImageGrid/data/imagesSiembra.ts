import img1 from "../../../../../Imagenes/AutoretratosSiembra/0270-a.jpeg"
import img2 from "../../../../../Imagenes/AutoretratosSiembra/0270-b.jpeg"
import img3 from "../../../../../Imagenes/AutoretratosSiembra/0270-c.jpeg"
import img4 from "../../../../../Imagenes/AutoretratosSiembra/0270-d.jpeg"

import img5 from "../../../../../Imagenes/AutoretratosSiembra/0270-e.jpeg"
import img6 from "../../../../../Imagenes/AutoretratosSiembra/0270.jpeg"
import img7 from "../../../../../Imagenes/AutoretratosSiembra/0305.jpeg"
import img8 from "../../../../../Imagenes/AutoretratosSiembra/0305a.jpeg"

import img9 from "../../../../../Imagenes/AutoretratosSiembra/0305b.jpeg"
import img10 from "../../../../../Imagenes/AutoretratosSiembra/0305c.jpeg"
import img11 from "../../../../../Imagenes/AutoretratosSiembra/0569.jpeg"




export interface ImageItem {
  id: number
  src: string
  title: string
  description: string
  size: "small" | "medium" | "large"
}

export const images: ImageItem[] = [
  { id: 1, src: img1, title: " ", description: "107 x 147 cm", size: "medium" },
  { id: 2, src: img2, title: " ", description: "107 x 147 cm ", size: "small" },
  { id: 3, src: img3, title: " ", description: "95 x 120 cm", size: "small" },
  { id: 4, src: img4, title: " ", description: "94 x 124 cm", size: "large" },

  { id: 5, src: img5, title: " ", description: "98 x 66 cm", size: "large" },
  { id: 6, src: img6, title: " ", description: "105 x 75 cm", size: "medium" },
  { id: 7, src: img7, title: " ", description: "74 x 104 cm", size: "medium" },
  { id: 8, src: img8, title: " ", description: "75 x 100 cm", size: "small" },

  { id: 9, src: img9, title: " ", description: "90 x 70 cm", size: "small" },
  { id: 10, src: img10, title: " ", description: "61 x 47 cm", size: "small" },
  { id: 11, src: img11, title: " ", description: "61 x 47 cm", size: "small" }
]