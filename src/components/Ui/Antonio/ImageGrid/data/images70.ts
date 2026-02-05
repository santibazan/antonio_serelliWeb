import img1 from "../../../../../Imagenes/Decada70/0035-Dimensión violeta óleo sobre tela enchapada  148 x 111 1975.jpeg"
import img2 from "../../../../../Imagenes/Decada70/0054-Flores óleo sobre tela  80 x 50  1970.jpeg"
import img3 from "../../../../../Imagenes/Decada70/0059-Serie del huevo óleo sobre tela 70 x 50 1973.jpeg"
import img4 from "../../../../../Imagenes/Decada70/0061-Gestación óleo sobre madera  39 x 28 1973.jpeg"

import img5 from "../../../../../Imagenes/Decada70/0062-Mensaje oculto óleo sobre madera.jpeg"
import img6 from "../../../../../Imagenes/Decada70/0346-Soliloquio oleo sobre tela 1974 110 x 158(Cartellone).jpeg"
import img7 from "../../../../../Imagenes/Decada70/0348-El manto blanco oleo sobre tela 120 x 90 1979 (Cartellone).jpeg"
import img8 from "../../../../../Imagenes/Decada70/0351-La casa blanca óleo sobre tela 90 x 70.5 1979 (Cartellone).jpeg"

import img9 from "../../../../../Imagenes/Decada70/0361-Clamor al atardecer óleo sobre tela  149 x 105  1973 (Cartellone).jpeg"
import img10 from "../../../../../Imagenes/Decada70/0362-Errante óleo sobre tela 103 x 86  1976 (Cartellone)1.jpeg"
import img11 from "../../../../../Imagenes/Decada70/Oleo Despues del Zonda.jpeg"



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
  { id: 11, src: img11, title: "Cueva del sueño óleo sobre madera", description: "61 x 47 cm", size: "small" },


]
