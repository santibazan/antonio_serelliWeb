import img1 from "../../../../../Imagenes/Decada60/0036-El llamado óleo sobre tela enchapada  107 x 147 cm 1969.jpeg"
import img2 from "../../../../../Imagenes/Decada60/0037-Dimensión blanca  óleo sobre tela enchapada 107 x 147 cm 1969.jpeg"
import img3 from "../../../../../Imagenes/Decada60/0042-La hora del sueño óleo sobre tela enchapada  95 x 120 cm 1968.jpeg"
import img4 from "../../../../../Imagenes/Decada60/0043-Reflejos de la tarde óleo sobre tela enchapada  94 x 124 cm 1967.jpeg"

import img5 from "../../../../../Imagenes/Decada60/0047-Figura con ave óleo sobre madera 98 x 66 cm 1965.jpeg"
import img6 from "../../../../../Imagenes/Decada60/0048-A nada nadas  óleo sobre tela enchapada  105 x 75 cm 1968.jpeg"
import img7 from "../../../../../Imagenes/Decada60/0049-Después de la lluvia óleo sobre tela enchapada 74 x 104 cm 1966.jpeg"
import img8 from "../../../../../Imagenes/Decada60/0053-Contraluz óleo sobre tela enchapada 75 x 100 cm 1964.jpeg"

import img9 from "../../../../../Imagenes/Decada60/0055-Diálogo en ocres óleo sobre tela  90 x 70 cm 1968.jpeg"
import img10 from "../../../../../Imagenes/Decada60/0060-Cueva del sueño óleo sobre madera 61 x 47 cm  1964.jpeg"



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
