export interface ImageItem {
  id: number
  src: string
  title: string
  description: string
  medida?: string
  anio?: number
  size: "small" | "medium" | "large"
}

export const images: ImageItem[] = [
  { id: 1, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1772734946/01_Vista_General_Ingreso_Estudio_1_vtiqlo.jpg", title: "Donde el arte se vive", description: "El ingreso al Taller de Arte Sarelli, con esculturas de Rebeca Sarelli.", size: "small" },
  { id: 2, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771951821/1entradaTaller_wrlc3i.jpg", title: "Sean bienvenidos al taller.", description: "Donde dos obras de Rebeca Sarelli marcan el inicio de un diálogo artístico entre generaciones. Una sensibilidad compartida que se transforma y florece en el corazón de una familia de artistas.", size: "small" },
  { id: 3, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1772734941/21_1_Escultura_piedra_Reb_u147i3.jpg", title: "Jardin ", description: "", size: "small" },
  { id: 4, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1772734940/20_2_Vista_general_Sur_pouktz.jpg", title: "Jardin ", description: "", size: "small" },
  { id: 5, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1772734940/20_1_Vista_general_Jardin_ecshdi.jpg", title: "Jardin ", description: "", size: "small" },
  { id: 6, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771951841/10jardin_jlqki6.jpg", title: "Jardin ", description: "", size: "small" },
  { id: 7, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771951823/2imgResiliencia_lnfhtq.jpg", title: "Diciembre, Enero y Febrero (2002)", description: "Técnica mixta sobre tela, 120 x 300 cm. Tres gestos, tres meses, tres silencios. Esta obra de la colección particular de Sarelli condensa el dolor colectivo de la crisis argentina de 2001. Rostros cubiertos, miradas detenidas, manos que intentan decir lo que no se puede pronunciar. Un testimonio visual de lo que no debe repetirse.", size: "small" },
  { id: 8, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1772734946/04_1_Vista_Mesa_y_obras_flvpsz.jpg", title: "Interior ", description: "", size: "small" },
  { id: 9, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1772734940/12_1_Vista_general_pintura_mendocina_n8pqan.jpg", title: "22 ", description: "", size: "small" },
  { id: 10, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1772734941/12_2_Pequen%CC%83os_formatos_y_Pint_mendocina_cndl0t.jpg", title: "222 ", description: "", size: "small" },
  { id: 11, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771951832/7ArteMendodino_j1pevm.jpg", title: "1 ", description: "", size: "small" },
  { id: 12, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1772734940/09_11_Esculturas_obras_mendocinas_bfc29a.jpg", title: "1 ", description: "", size: "small" },
  { id: 13, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771951850/ArteMendocino_zkrofv.jpg", title: "100 ", description: "", size: "small" },
  { id: 14, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1772734946/05_3_Sopranos_y_Busto_AS_xyt5mh.jpg", title: "3 ", description: "", size: "small" },
  { id: 15, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1772734946/09_1_Sopranos_ybhbsz.jpg", title: "1 ", description: "", size: "small" },
  { id: 16, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1772734942/06_04_Vista_general_escultursa_lbp7my.jpg", title: "1 ", description: "", size: "small" },
  { id: 17, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1772734942/09_5_Esculturas_sopranos_dwzewf.jpg", title: "1 ", description: "", size: "small" },
  { id: 18, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1772734942/09_2_Jessie_mbwzjh.jpg", title: "1 ", description: "", size: "small" },
  { id: 19, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1772734942/09_4_Esculturas_Joyas_wp4dfw.jpg", title: "1 ", description: "", size: "small" },
  { id: 20, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1772734941/09_6_Esculturas_Reb_dzbixh.jpg", title: "1 ", description: "", size: "small" },
  { id: 21, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1772734941/09_10_Esculturas_Reb_ydghrs.jpg", title: "1 ", description: "", size: "small" },
  { id: 22, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1772734941/09_9_Escultura_Reb_olypy3.jpg", title: "1 ", description: "", size: "small" },
  { id: 23, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1772734941/09_10_Escultura_Reb_vrlrtd.jpg", title: "1 ", description: "", size: "small" },
  { id: 24, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1772734940/33_Pinceles_3_cg0rnp.jpg", title: "1 ", description: "", size: "small" },
  { id: 25, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771951856/paletaAldo_rgdz7d.jpg", title: "1 ", description: "", size: "small" },
  { id: 26, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771951836/9maquina_laizui.jpg", title: "1 ", description: "", size: "small" },
  { id: 27, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771951834/8SegPiso_wudji5.jpg", title: "1 ", description: "", size: "small" },
  { id: 28, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771951830/6TallerNorte_hfjlbi.jpg", title: "1 ", description: "", size: "small" },
  
]