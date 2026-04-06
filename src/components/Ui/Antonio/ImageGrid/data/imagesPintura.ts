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
  { id: 1, src: "https://res.cloudinary.com/dovztsxyv/image/upload/q_auto/f_auto/v1775485954/2017_-_Presencia-Ausencia_femenino_-_birome_sobre_papel_eg4kva.jpg", title: "", description: "", size: "small" },
  { id: 2, src: "https://res.cloudinary.com/dovztsxyv/image/upload/q_auto/f_auto/v1775485937/2017_-_Presencia-Ausencia_masculino_-_birome_sobre_papel_b7f0kj.jpg", title: "", description: "", size: "small" },
  { id: 3, src: "https://res.cloudinary.com/dovztsxyv/image/upload/q_auto/f_auto/v1775486213/2018_-_Eso_que_nos_recorre_-_mixta_sobre_madera_lbaqeq.jpg", title: "", description: "", size: "small" },
  { id: 4, src: "https://res.cloudinary.com/dovztsxyv/image/upload/q_auto/f_auto/v1775486213/2018_-Espacios_fragmentados_I_-_mixta_sobre_madera_mrxtwz.jpg", title: "", description: "", size: "small" },
  { id: 5, src: "https://res.cloudinary.com/dovztsxyv/image/upload/q_auto/f_auto/v1775485935/2018-Al_Este_I-o%CC%81leo_sobre_carto%CC%81n_sc17h8.jpg", title: "", description: "", size: "small" },
  { id: 6, src: "https://res.cloudinary.com/dovztsxyv/image/upload/q_auto/f_auto/v1775485934/2018-Al_Norte_II-o%CC%81leo_sobre_carto%CC%81n_ryudl2.jpg", title: "", description: "", size: "small" },
  { id: 7, src: "https://res.cloudinary.com/dovztsxyv/image/upload/q_auto/f_auto/v1775485930/2018-Al_Oeste_III-o%CC%81leo_sobre_carto%CC%81n_awhg8i.jpg", title: "", description: "", size: "small" },
  { id: 8, src: "https://res.cloudinary.com/dovztsxyv/image/upload/q_auto/f_auto/v1775485951/2018-Espacios_fragmentados_II_-_mixta_sobre_madera_dfajur.jpg", title: "", description: "", size: "small" },
  { id: 9, src: "https://res.cloudinary.com/dovztsxyv/image/upload/q_auto/f_auto/v1775485955/2018-Espacios_fragmentados_III-_mixta_sobre_madera_ydyfi5.jpg", title: "", description: "", size: "small" },
  { id: 10, src: "https://res.cloudinary.com/dovztsxyv/image/upload/q_auto/f_auto/v1775485953/2018-Ventisca-o%CC%81leo_sobre_madera_mup5i1.jpg", title: "", description: "", size: "small" },
  { id: 11, src: "https://res.cloudinary.com/dovztsxyv/image/upload/q_auto/f_auto/v1775485953/2018-Zonda-o%CC%81leo_sobre_madera_urzp3u.jpg", title: "", description: "", size: "small" },
  { id: 12, src: "https://res.cloudinary.com/dovztsxyv/image/upload/q_auto/f_auto/v1775485956/2020-Hacia_el_sur-o%CC%81leo_sobre_tela_enchapada_nwt6rj.jpg", title: "", description: "", size: "small" },
];
