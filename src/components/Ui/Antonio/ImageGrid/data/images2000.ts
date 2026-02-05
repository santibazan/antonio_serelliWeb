import img1 from "../../../../../Imagenes/Decada2000/0014-Repertorio  acrílico sobre tela 200 x 120 cm  2009.jpeg"
import img2 from "../../../../../Imagenes/Decada2000/0016-Perpetuo dilema acrílico sobre tela 200 x 120 cm 2009.jpeg"
import img3 from "../../../../../Imagenes/Decada2000/0019-Solo lo salva el amor mixta sobre tela  180 x 140 cm  2001.jpeg"
import img4 from "../../../../../Imagenes/Decada2000/0021-Resurrección mixta sobre tela  170 x 114 cm 2000.jpeg"

import img5 from "../../../../../Imagenes/Decada2000/0046-Éxodo 2000  mixta sobre tela  110 x 80 cm 2000.jpeg"
import img6 from "../../../../../Imagenes/Decada2000/0130-Evocando a los maestros mixta sobre tela 152 x 400 cm 2006.jpeg"
import img7 from "../../../../../Imagenes/Decada2000/0268-Desde la Construcción mixta sobre madera 120 x 300 cm 2000.jpeg"
import img8 from "../../../../../Imagenes/Decada2000/0269-Evocación mixta sobre tela  200 x 280 cm  2000.jpeg"

import img9 from "../../../../../Imagenes/Decada2000/0271-Diciembre, Enero y Febrero mixta sobre tela  120 x 300 cm  2002.jpeg"
import img10 from "../../../../../Imagenes/Decada2000/0305-Timonel de quimeras mixta sobre tela 100 x 120 cm 2006.jpeg"




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