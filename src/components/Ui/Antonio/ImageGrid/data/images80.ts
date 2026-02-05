import img1 from "../../../../../Imagenes/Decada80/0024-Altar de los humildes  óleo sobre madera  158 x 140 1988.jpeg"
import img2 from "../../../../../Imagenes/Decada80/0025-Universos de silencios  óleo sobre madera 160 x 140  1987.jpeg"
import img3 from "../../../../../Imagenes/Decada80/0026-Paisaje de la memoria dormida  óleo sobre madera  150 x 138  1988.jpeg"
import img4 from "../../../../../Imagenes/Decada80/0044-Primavera  óleo sobre tela  110 x 100  1984.jpeg"

import img5 from "../../../../../Imagenes/Decada80/0045-Dos imágenes y el silencio óleo sobre tela 110 x 100 1982.jpeg"
import img6 from "../../../../../Imagenes/Decada80/0051-Composición azul óleo sobre madera 80 x 90  1987.jpeg"
import img7 from "../../../../../Imagenes/Decada80/0058-Naturaleza con fondo rojo y blanco  óleo sobre tela  70 x 50  1983.jpeg"
import img8 from "../../../../../Imagenes/Decada80/0110-La nota del silencio  óleo sobre madera  165 x 182  1984 1.jpeg"

import img9 from "../../../../../Imagenes/Decada80/0226 - Dimensión del silencio  óleo sobre madera 180 x 165 1985 1.jpeg"
import img10 from "../../../../../Imagenes/Decada80/0272-Desde siempre óleo sobre tela 90 x 70 1981.jpeg"




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

