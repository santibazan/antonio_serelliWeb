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
  { id: 1, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771951558/Dos_pesos_e6uxre.jpg", title: "Dos pesos", description: "Mixta sobre tela", medida:"100 x 50 cm", anio:2020, size: "medium" },
  { id: 2, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1774870498/Los_que_nos_piensan_sogy8y.jpg", title: "Los que nos piensan", description: "Collage sobre madera", medida:"90 x 60 cm", anio:2021, size: "small" }, 
  { id: 3, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1774870357/Rescate_del_viejo_bau%CC%81l_II_yhz9su.jpg", title: "Rescate del viejo baúl II", description: "Collage sobre madera", medida:"90 x 60 cm", anio:2021, size: "small" }, 
  { id: 4, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1774870264/Devoradores_aw7p8h.jpg", title: "Devoradores", description: "Collage sobre madera", medida:"90 x 60 cm", anio:2021, size: "small" }, 
  { id: 5, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1774870143/Albergue_interior_gdqfyl.jpg", title: "Albergue interior", description: "Collage sobre madera", medida:"90 x 60 cm", anio:2021, size: "small" }, 
  { id: 6, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1774869643/Hora_de_la_tarde_y6wcxn.jpg", title: "Hora de la tarde", description: "Collage sobre madera", medida:"90 x 60 cm", anio:2021, size: "small" }, 
  { id: 7, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1774869639/Recuerdo_a_Magritte_II_bxuuul.jpg", title: "Recuerdo a Margritte II", description: "Collage sobre madera", medida:"90 x 60 cm", anio:2021, size: "small" }, 
  { id: 8, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1774869639/Luna%CC%81tico_wv1d66.jpg", title: "Lunático", description: "Collage sobre madera", medida:"90 x 60 cm", anio:2021, size: "small" }, 
  { id: 10, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1774869638/Perpetuo_dilmema_II_eb6rk7.jpg", title: "Perpetuo dilmema", description: "Collage sobre madera", medida:"90 x 60 cm", anio:2021, size: "small" }, 
  { id: 9, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1774869638/Ni_tanto_cielo_o_infierno_como_hoy_g424mp.jpg", title: "Ni tanto cielo o infierno como hoy", description: "Collage sobre madera", medida:"90 x 60 cm", anio:2021, size: "small" }, 
  { id: 10, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1774869635/Tres_espacios_tmd7vq.jpg", title: "Tres espacios", description: "Collage sobre madera", medida:"90 x 60 cm", anio:2021, size: "small" }, 
]
