import img1 from "../../../../../Imagenes/Decada90/0004-El aire me sabe bien  óleo sobre tela  140 x 180 cm  1994.jpeg"
import img2 from "../../../../../Imagenes/Decada90/0005-Primera lección  óleo sobre tela 160 x 180 cm  1998.jpeg"
import img3 from "../../../../../Imagenes/Decada90/0006-Sembrador óleo sobre tela  160 x 180 cm  1998.jpeg"
import img4 from "../../../../../Imagenes/Decada90/0020-Blanca ternura en Tupungato óleo sobre tela  130 x 162  cm  1995.jpeg"

import img5 from "../../../../../Imagenes/Decada90/0027-Poesía y orden  óleo sobre tela  120 x 160 cm  1991.jpeg"
import img6 from "../../../../../Imagenes/Decada90/0028-Homenaje a Walt Whitman III óleo sobre tela  160 x 120 cm  1991.jpeg"
import img7 from "../../../../../Imagenes/Decada90/0029-Figura sentada con paisaje  óleo sobre tela  100 x 150 cm 1994.jpeg"
import img8 from "../../../../../Imagenes/Decada90/0032-Flor azul sobre jarrón blanco  óleo sobre tela  150 x 100 cm  1991.jpeg"

import img9 from "../../../../../Imagenes/Decada90/0041-Alegoría al mantelito blanco mixta sobre tela   116 x 89 cm  1995.jpeg"
import img10 from "../../../../../Imagenes/Decada90/0270 - Evocacion óleo sobre tela  145 x 154 cm  1995.jpeg"




export interface ImageItem {
  id: number
  src: string
  title: string
  description: string
  size: "small" | "medium" | "large"
}

export const images: ImageItem[] = [
  { id: 1, src: img1, title: "El llamado oleo sobre tela enchapada", description: "107 x 147 cm", size: "medium" },
  { id: 2, src: img2, title: "Dimensión blanca  óleo sobre tela enchapada", description: "107 x 147 cm ", size: "small" },
  { id: 3, src: img3, title: "La hora del sueño óleo sobre tela enchapada", description: "95 x 120 cm", size: "small" },
  { id: 4, src: img4, title: "Reflejos de la tarde óleo sobre tela enchapada", description: "94 x 124 cm", size: "large" },

  { id: 5, src: img5, title: "Figura con ave óleo sobre madera", description: "98 x 66 cm", size: "large" },
  { id: 6, src: img6, title: "A nada nadas  óleo sobre tela enchapada", description: "105 x 75 cm", size: "medium" },
  { id: 7, src: img7, title: "Después de la lluvia óleo sobre tela enchapada", description: "74 x 104 cm", size: "medium" },
  { id: 8, src: img8, title: "Contraluz óleo sobre tela enchapada", description: "75 x 100 cm", size: "small" },

  { id: 9, src: img9, title: "Diálogo en ocres óleo sobre tela", description: "90 x 70 cm", size: "small" },
  { id: 10, src: img10, title: "Cueva del sueño óleo sobre madera", description: "61 x 47 cm", size: "small" },

]
