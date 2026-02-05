import img1 from "../../../../../Imagenes/Cosechas/Cordón de Plata en Casa Gobierno Mza.jpeg"
import img2 from "../../../../../Imagenes/Cosechas/Cuadro Residencia de Olivos.jpeg"
import img3 from "../../../../../Imagenes/Cosechas/Escrito Piso 7 de Casa Gobierno.jpeg"
import img4 from "../../../../../Imagenes/Cosechas/Espacio Antonio Sarelli - Piso 7 Casa de Gobierno.jpeg"

import img5 from "../../../../../Imagenes/Cosechas/WhatsApp Image 2025-12-17 at 12.54.14 PM.jpeg"
import img6 from "../../../../../Imagenes/Cosechas/WhatsApp Image 2025-12-23 at 11.00.34 PM.jpeg"
import img7 from "../../../../../Imagenes/Cosechas/WhatsApp Image 2025-12-23 at 11.10.42 PM.jpeg"
import img8 from "../../../../../Imagenes/Cosechas/WhatsApp Image 2025-12-23 at 11.10.43 PM.jpeg"

import img9 from "../../../../../Imagenes/Cosechas/WhatsApp Image 2025-12-23 at 11.16.11 PM.jpeg"
import img10 from "../../../../../Imagenes/Cosechas/WhatsApp Image 2026-01-02 at 3.05.57 PM (2).jpeg"
import img11 from "../../../../../Imagenes/Cosechas/WhatsApp Image 2026-01-02 at 3.05.57 PM (3).jpeg"
import img12 from "../../../../../Imagenes/Cosechas/WhatsApp Image 2026-01-02 at 3.05.57 PM (4).jpeg"
import img13 from "../../../../../Imagenes/Cosechas/WhatsApp Image 2026-01-02 at 3.05.57 PM.jpeg"





export interface ImageItem {
  id: number
  src: string
  title: string
  description: string
  size: "small" | "medium" | "large"
}

export const images: ImageItem[] = [
  { id: 1, src: img1, title: "Cordón de Plata en Casa Gobierno Mza", description: "107 x 147 cm", size: "medium" },
  { id: 2, src: img2, title: "Cuadro Residencia de Olivos", description: "107 x 147 cm ", size: "small" },
  { id: 3, src: img3, title: "Escrito Piso 7 de Casa Gobierno", description: "95 x 120 cm", size: "small" },
  { id: 4, src: img4, title: "Espacio Antonio Sarelli - Piso 7 Casa de Gobierno", description: "94 x 124 cm", size: "large" },

  { id: 5, src: img5, title: "Figura con ave óleo sobre madera", description: "98 x 66 cm", size: "large" },
  { id: 6, src: img6, title: "A nada nadas  óleo sobre tela enchapada", description: "105 x 75 cm", size: "medium" },
  { id: 7, src: img7, title: "Después de la lluvia óleo sobre tela enchapada", description: "74 x 104 cm", size: "medium" },
  { id: 8, src: img8, title: "Contraluz óleo sobre tela enchapada", description: "75 x 100 cm", size: "small" },

  { id: 9, src: img9, title: "Diálogo en ocres óleo sobre tela", description: "90 x 70 cm", size: "small" },
  { id: 10, src: img10, title: "Cueva del sueño óleo sobre madera", description: "61 x 47 cm", size: "small" },
  { id: 11, src: img11, title: "Cueva del sueño óleo sobre madera", description: "61 x 47 cm", size: "small" },
  { id: 12, src: img12, title: "Cueva del sueño óleo sobre madera", description: "61 x 47 cm", size: "small" },
  { id: 13, src: img13, title: "Cueva del sueño óleo sobre madera", description: "61 x 47 cm", size: "small" }
  
]