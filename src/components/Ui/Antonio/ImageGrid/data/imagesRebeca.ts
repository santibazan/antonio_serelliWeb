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
  { id: 1, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1772463371/Poder_decir_adios-talla_en_madera_Eucaliptus_-133_x_30_x_25_cm-2025_ng2rcy.jpg", title: "Poder decir adios.", description: "Talla en madera Eucaliptus.", size: "large" },
  { id: 2, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1772463371/Lo_no_dicho-talla_en_piedra_Alabastro_36_x_18_x_18_cm-2021_kzuzje.jpg", title: "Lo no dicho.", description: "Talla en piedra Alabastro.", size: "medium" },
  { id: 3, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1772463368/Bucle_temporal-talla_en_madera_Vid_-68_x_35_x_18_cm-2025_rghd3f.jpg", title: "Bucle temporal.", description: " Talla en madera Vid.", size: "small" },
  { id: 4, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1772463365/Esperando_el_alba-Vaciado_en_cemento_patinado-75_x_15_x_16_cm-2023_vgbsmd.jpg", title: "Esperando el alba.", description: "Vaciado en cemento patinado.", size: "large" },

  { id: 5, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1772463365/Paloma-talla_en_piedra_Alabastro_-2016_rxtsnh.jpg", title: "Paloma.", description: "Talla en piedra Alabastro.", size: "medium" },
  { id: 6, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1772463365/Juntando_cicatrices-talla_en_madera_Paraiso_-115_x_40_x_30_cm-2025_wfqlgc.jpg", title: "Juntando cicatrices.", description: "Talla en madera Paraiso.", size: "large" },
  { id: 7, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1772463364/Encuentro-talla_en_piedra_laja_-29_x_27_x_15_cm-2023_rcmrq5.jpg", title: "Encuentro.", description: "Talla en piedra laja.", size: "small" },
  { id: 8, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1772463364/Capullo-talla_en_madera_E%CC%81bano_-2017_ttlnth.jpg", title: "Capullo.", description: " Talla en madera Ébano.", size: "large" },

  { id: 9, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1772463364/Hacia_la_luz-vaciado_en_cemento_patinado-46_x_77_x_17_cm-2021_zissrn.jpg", title: "Hacia la luz.", description: "Vaciado en cemento patinado.", size: "small" },
  { id: 10, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1772463361/Kathleen_Battle-vaciaso_en_cemento_patinado-110_x_20_x_20_cm-2022_fs25wb.jpg", title: "Kathleen Battle.", description: " Vaciaso en cemento patinado.", size: "large" },
  { id: 11, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1772463357/Jessye_Norman-vacado_en_cemento_patimado-125_x_28_x_26_cm_2022_jp6fxi.jpg", title: "Jessye Norman.", description: " vacado en cemento patimado.", size: "large" },
  { id: 12, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1772463356/Vacios-cera_perdida_fundicio%CC%81n_en_bronce_y_cobre_-2002_kfikbg.jpg", title: "Vacios cera perdida.", description: "Fundición en bronce y cobre.", size: "medium" },
  { id: 13, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1772463353/Fausto-talla_en_piedra-2018_nlryjk.jpg", title: "Fausto.", description: "Talla en piedra.", size: "small" }
]