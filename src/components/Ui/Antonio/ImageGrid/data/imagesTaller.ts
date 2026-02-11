import img1 from "../../../../../Imagenes/Taller/1entradaTaller.jpg"
import img2 from "../../../../../Imagenes/Taller/2imgResiliencia.jpeg"
// import img3 from "../../../../../Imagenes/Taller/3puerta.jpeg"
// import img4 from "../../../../../Imagenes/Taller/4.jpg"

// import img5 from "../../../../../Imagenes/Taller/5.jpg"
// import img6 from "../../../../../Imagenes/Taller/6TallerNorte.jpeg"
// import img7 from "../../../../../Imagenes/Taller/7ArteMendodino.jpg"
// import img8 from "../../../../../Imagenes/Taller/8SegPiso.jpg"

// import img9 from "../../../../../Imagenes/Taller/9maquina.jpeg"
import img10 from "../../../../../Imagenes/Taller/10jardin.jpg"
// import img11 from "../../../../../Imagenes/Taller/11esculturas.jpg"
import img12 from "../../../../../Imagenes/Taller/12jardinEntrada.jpg"
// import img13 from "../../../../../Imagenes/Taller/13estrellaNorte.jpg"
// import img14 from "../../../../../Imagenes/Taller/14esculturasAmaneciendo.jpg"




export interface ImageItem {
  id: number
  src: string
  title: string
  description: string
  size: "small" | "medium" | "large"
}

export const images: ImageItem[] = [
  { id: 1, src: img1, title: "1 ", description: "107 x 147 cm", size: "medium" },
  { id: 2, src: img2, title: "2 ", description: "107 x 147 cm ", size: "small" },
  // { id: 3, src: img3, title: " 3", description: "95 x 120 cm", size: "small" },
  // { id: 4, src: img4, title: " 4", description: "94 x 124 cm", size: "large" },

  // { id: 5, src: img5, title: "5 ", description: "98 x 66 cm", size: "large" },
  // { id: 6, src: img6, title: "6 ", description: "105 x 75 cm", size: "medium" },
  // { id: 7, src: img7, title: "7 ", description: "74 x 104 cm", size: "medium" },
  // { id: 8, src: img8, title: "8 ", description: "75 x 100 cm", size: "large" },

  // { id: 9, src: img9, title: "9 ", description: "90 x 70 cm", size: "medium" },
  { id: 10, src: img10, title: "10 ", description: "61 x 47 cm", size: "large" },
  // { id: 11, src: img11, title: " 11", description: "61 x 47 cm", size: "medium" },
  { id: 12, src: img12, title: " 12", description: "61 x 47 cm", size: "medium" },

  // { id: 13, src: img13, title: " 13", description: "61 x 47 cm", size: "small" },
  // { id: 14, src: img14, title: " 14", description: "61 x 47 cm", size: "small" },
]