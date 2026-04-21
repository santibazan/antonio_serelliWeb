export interface ImageItem {
  id: number;
  src: string;
  title: string;
  description?: string;
  medida?: string;
  anio?: number;
  size: "small" | "medium" | "large";
}

export const images: ImageItem[] = [
  { id: 1, src: "https://res.cloudinary.com/dovztsxyv/image/upload/q_auto/f_auto/v1775485954/2017_-_Presencia-Ausencia_femenino_-_birome_sobre_papel_eg4kva.jpg", title: "Presencia-Ausencia (femeninno)", description: "birome sobre papel", anio:2017, size: "large" },

  { id: 2, src: "https://res.cloudinary.com/dovztsxyv/image/upload/q_auto/f_auto/v1775485937/2017_-_Presencia-Ausencia_masculino_-_birome_sobre_papel_b7f0kj.jpg", title: "Presencia-Ausencia (masculino)", description: "birome sobre papel",anio:2017, size: "medium" },

  { id: 3, src: "https://res.cloudinary.com/dovztsxyv/image/upload/q_auto/f_auto/v1775486213/2018_-_Eso_que_nos_recorre_-_mixta_sobre_madera_lbaqeq.jpg", title: "Eso que nos recorre", description: "Mixta sobre madera",anio:2018, size: "large" },

  { id: 4, src: "https://res.cloudinary.com/dovztsxyv/image/upload/q_auto/f_auto/v1775486213/2018_-Espacios_fragmentados_I_-_mixta_sobre_madera_mrxtwz.jpg", title: "Espacios fragmentados I", description: "Mixta sobre madera",anio:2018, size: "small" },

  { id: 5, src: "https://res.cloudinary.com/dovztsxyv/image/upload/q_auto/f_auto/v1775485935/2018-Al_Este_I-o%CC%81leo_sobre_carto%CC%81n_sc17h8.jpg", title: "Al este I", description: "Óleo sobre cartón",anio:2018, size: "medium" },

  { id: 6, src: "https://res.cloudinary.com/dovztsxyv/image/upload/q_auto/f_auto/v1775485934/2018-Al_Norte_II-o%CC%81leo_sobre_carto%CC%81n_ryudl2.jpg", title: "Al norte I", description: "Óleo sobre cartón",anio:2018, size: "small" },

  { id: 7, src: "https://res.cloudinary.com/dovztsxyv/image/upload/q_auto/f_auto/v1775485930/2018-Al_Oeste_III-o%CC%81leo_sobre_carto%CC%81n_awhg8i.jpg", title: "Al oeste III", description: "Óleo sobre cartón",anio:2018, size: "large" },

  { id: 8, src: "https://res.cloudinary.com/dovztsxyv/image/upload/q_auto/f_auto/v1775485951/2018-Espacios_fragmentados_II_-_mixta_sobre_madera_dfajur.jpg", title: "Espacios fragmentados II", description: "Mixta sobre madera",anio:2018, size: "medium" },

  { id: 9, src: "https://res.cloudinary.com/dovztsxyv/image/upload/q_auto/f_auto/v1775485955/2018-Espacios_fragmentados_III-_mixta_sobre_madera_ydyfi5.jpg", title: "Espacios fragmentados III", description: "Mixta sobre madera",anio:2018, size: "small" },

  { id: 10, src: "https://res.cloudinary.com/dovztsxyv/image/upload/q_auto/f_auto/v1775485953/2018-Ventisca-o%CC%81leo_sobre_madera_mup5i1.jpg", title: "Ventisca", description: "Óleo sobre madera",anio:2018, size: "large" },

  { id: 11, src: "https://res.cloudinary.com/dovztsxyv/image/upload/q_auto/f_auto/v1775485953/2018-Zonda-o%CC%81leo_sobre_madera_urzp3u.jpg", title: "Zonda", description: "Óleo sobre madera",anio:2018, size: "medium" },

  { id: 12, src: "https://res.cloudinary.com/dovztsxyv/image/upload/q_auto/f_auto/v1775485956/2020-Hacia_el_sur-o%CC%81leo_sobre_tela_enchapada_nwt6rj.jpg", title: "Hacia el sur", description: "Óleo sobre tela enchapada",anio:2020, size: "small" },
];
