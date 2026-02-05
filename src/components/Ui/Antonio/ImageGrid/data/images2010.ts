import img1 from "../../../../../Imagenes/Decada2010/0178-Historias secretas collage sobre tela 150 x 300 cm 2013.jpeg"
import img2 from "../../../../../Imagenes/Decada2010/0188-La Carta- Triptico acrilico sobre tela 200 x 360 cm 2013.jpeg"
import img3 from "../../../../../Imagenes/Decada2010/0189-Polichinela óleo sobre tela 94 x 80 cm 2013.jpeg"
import img4 from "../../../../../Imagenes/Decada2010/0237-Hora del Sosiego óleo sobre tela 120 x 200 cm 2012.jpeg"

import img5 from "../../../../../Imagenes/Decada2010/0300-Formula para la Piedra Infinita mixta sobre tela 2013.jpeg"
import img6 from "../../../../../Imagenes/Decada2010/0311-Equilibrio musical óleo sobre tela 120 x 80 cm 2013.jpeg"
import img7 from "../../../../../Imagenes/Decada2010/0528.jpeg"
import img8 from "../../../../../Imagenes/Decada2010/0529.jpeg"

import img9 from "../../../../../Imagenes/Decada2010/0530.jpeg"
import img10 from "../../../../../Imagenes/Decada2010/0537-Equilibrio con pájaros y luna mixta sobre tela 120 x 80 cm 2015.jpeg"
import img11 from "../../../../../Imagenes/Decada2010/0538-Espejos óleo sobre tela 240 x 180 cm 2015.jpeg"
import img12 from "../../../../../Imagenes/Decada2010/0539-Verano óleo sobre tela 200 x 150 cm 2015.jpeg"
import img13 from "../../../../../Imagenes/Decada2010/Dos pesos.jpeg"
import img14 from "../../../../../Imagenes/Decada2010/La silla del poeta.jpeg"
import img15 from "../../../../../Imagenes/Decada2010/Los que nos piensan.jpeg"




export interface ImageItem {
  id: number
  src: string
  title: string
  description: string
  size: "small" | "medium" | "large"
}

export const images: ImageItem[] = [
  { id: 1, src: img1, title: "Historias secretas collage sobre tela", description: "107 x 147 cm", size: "medium" },
  { id: 2, src: img2, title: "La Carta- Triptico acrilico sobre tela", description: "107 x 147 cm ", size: "small" },
  { id: 3, src: img3, title: "Polichinela óleo sobre tela", description: "95 x 120 cm", size: "small" },
  { id: 4, src: img4, title: "Hora del Sosiego óleo sobre tela", description: "94 x 124 cm", size: "large" },

  { id: 5, src: img5, title: "Formula para la Piedra Infinita mixta sobre tela", description: "98 x 66 cm", size: "large" },
  { id: 6, src: img6, title: "Equilibrio musical óleo sobre tela", description: "105 x 75 cm", size: "medium" },
  { id: 7, src: img7, title: "", description: "74 x 104 cm", size: "medium" },
  { id: 8, src: img8, title: "", description: "75 x 100 cm", size: "small" },

  { id: 9, src: img9, title: "", description: "90 x 70 cm", size: "small" },
  { id: 10, src: img10, title: "Equilibrio con pájaros y luna mixta sobre tela", description: "61 x 47 cm", size: "small" },
  { id: 11, src: img11, title: "Espejos óleo sobre tela", description: "61 x 47 cm", size: "small" },
  { id: 12, src: img12, title: "Verano óleo sobre tela", description: "61 x 47 cm", size: "small" },
  { id: 13, src: img13, title: "Dos pesos", description: "61 x 47 cm", size: "small" },
  { id: 14, src: img14, title: "La silla del poeta", description: "61 x 47 cm", size: "small" },
  { id: 15, src: img15, title: "Los que nos piensan", description: "61 x 47 cm", size: "small" },

]