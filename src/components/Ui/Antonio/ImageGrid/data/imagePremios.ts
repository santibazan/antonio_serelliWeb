export interface ImageItem {
  id: number
  src: string
  title: string
  description?: string
  medida?: string
  anio?: number
  size: "small" | "medium" | "large"
}

export const images: ImageItem[] = [
  { id: 1, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1774983817/1964_-Premio_Esti%CC%81mulo_-Dialogo_de_duendes-_Tercer_Salo%CC%81n_Bienal_de_Artes_Pla%CC%81sticas_cxxuxk.jpg", title: "Premio Estímulo -Dialogo de duendes- Tercer Salón Bienal de Artes Plásticas", anio: 1964, size: "medium" },
  { id: 2, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1774983817/1964-10-22_-_Premio_Esti%CC%81mulo_-Dialogo_de_duendes-_Tercer_Salo%CC%81n_Bienal_de_Artes_Pla%CC%81sticas_nkqfum.jpg", title: "Premio Estímulo -Dialogo de duendes- Tercer Salón Bienal de Artes Plásticas", anio: 1964, size: "medium" },
  { id: 3, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1774983817/1965-03-28_-_obra_-Figura-Premio_Brigadas_Li%CC%81ricas-_XV_Salo%CC%81n_de_Primavera_San_Rafael_hercit.jpg", title: " obra -Figura Premio Brigadas Líricas- XV Salón de Primavera San Rafael", anio: 1964, size: "medium" },
  { id: 4, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1774983816/1965-Diploma_aovijy.jpg", title: "Diploma", anio: 1965, size: "medium" },
  { id: 5, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1774983817/1966_-_Nocturno-Primer_Premio_Adquisicio%CC%81n_-_Primer_Salo%CC%81n_F.O.E.C.Y.T._gpxmxp.jpg", title: " Nocturno- Primer Premio Adquisición - Primer Salón F.O.E.C.Y.T", anio: 1966 , size: "medium" },
  { id: 6, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1774983816/1966-09-18_Los_Andes_exzg9i.jpg", title: "Los Andes", anio: 1966, size: "medium" },
  { id: 7, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1774983817/1967_-_Primer_Premio_IV_Salo%CC%81n_Nacional_Feria_del_Libro_de_Mendoza_compartido_junto_a_Rafael_Montemayor_aflrvz.jpg", title: "Primer Premio IV Salón Nacional Feria del Libro de Mendoza compartido junto a Rafael Montemayor", anio: 1967, size: "medium" },
  { id: 8, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1774983816/1968-11-30_Diario_El_Trabajo_Mar_del_Plata_myxghz.jpg", title: "Diario El Trabajo Mar del Plata", anio: 1968 , size: "medium" },
  { id: 9, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1774983820/1969-11-23_-_Despue%CC%81s_de_la_Tormenta_-_Gran_Premio_de_Honor_Cristela_Gonza%CC%81lez_de_Vin%CC%83uela_o8ui1s.jpg", title: "Después de la Tormenta - Gran Premio de Honor Cristela González de Viñuela", anio: 1969 , size: "medium" },
  { id: 10, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1774983816/1969-Diploma_y4rh88.jpg", title: "Diploma", anio: 1969, size: "medium" },
  { id: 11, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1774983827/1971_-La_visita_del_duende-_Tercer_Premio_de_la_IX_Bienal_Municipal_de_Artes_Pla%CC%81sticas_vdnhko.jpg", title: "La visita del duende - Tercer Premio de la IX Bienal Municipal de Artes Plásticas", anio: 1971, size: "medium" },
  { id: 12, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1774983816/1971-11-19_-_Diario_Mendoza-Premios_de_la_Bienal_se_entregan_hoy_raw7zt.jpg", title: "Diario Mendoza - Premios de la Bienal se entregan hoy", anio: 1971 , size: "medium" },
]
