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
  { id: 1, src: "https://res.cloudinary.com/dovztsxyv/image/upload/q_auto/f_auto/v1775485195/2004_-_Aguafuerte_-_1-10_2_snbhwz.jpg", title: "Aguafuerte",description: "", anio:2004, size: "large" },

  { id: 2, src: "https://res.cloudinary.com/dovztsxyv/image/upload/q_auto/f_auto/v1775485197/2004_-_Xilografi%CC%81a_-_1-10_3_ndrrqw.jpg", title: "Xilografía", description: "", anio:2004, size: "medium" },

  { id: 3, src: "https://res.cloudinary.com/dovztsxyv/image/upload/q_auto/f_auto/v1775485195/2004_-_Aguafuerte_-_1-10_d5e453.jpg", title: "Aguafuerte", description: "", anio:2004, size: "large" },

  { id: 4, src: "https://res.cloudinary.com/dovztsxyv/image/upload/q_auto/f_auto/v1775485194/2004_-_Xilografi%CC%81a_-_1-10_bcvcmm.jpg", title: "Xilografía", description: "", anio:2004, size: "small" },

  { id: 5, src: "https://res.cloudinary.com/dovztsxyv/image/upload/q_auto/f_auto/v1775485188/2004_-_Xilografi%CC%81a_-_1-10_2_amhw4u.jpg", title: "Xilografía", description: "", anio:2004, size: "medium" },

  { id: 6, src: "https://res.cloudinary.com/dovztsxyv/image/upload/q_auto/f_auto/v1775485176/2004-_Aguafuerte_-_1-10_r3hhhr.jpg", title: "Aguafuerte", description: "", anio:2004, size: "small" },

  { id: 7, src: "https://res.cloudinary.com/dovztsxyv/image/upload/q_auto/f_auto/v1775485197/2005_-_Xilografi%CC%81a_-_P-A_qsr4zy.jpg", title: "Xilografía", description: "", anio:2005, size: "medium" },

  { id: 8, src: "https://res.cloudinary.com/dovztsxyv/image/upload/q_auto/f_auto/v1775485161/2005_-_Ellos_que_nos_piensan_-_Xilografi%CC%81a_-_2-10_svyo1m.jpg", title: "Ellos que nos piensan", description: "", anio:2005, size: "medium" },

  { id: 9, src: "https://res.cloudinary.com/dovztsxyv/image/upload/q_auto/f_auto/v1775485161/2018_-_Eso_que_nos_recorre_-_gofrado_sobre_papel_intervenido_1-2_nq2jw1.jpg", title: "Eso que nos recorre", description: "Grofado sobre papel", anio:2018, size: "small" },

  { id: 10, src: "https://res.cloudinary.com/dovztsxyv/image/upload/q_auto/f_auto/v1775485192/2018_-_Eso_que_nos_recorre_-_gofrado_sobre_papel_intervenido_2-2_ew3l6d.jpg", title: "Eso que nos recorre", description: "Grofado sobre papel", anio:2018, size: "medium" },

  { id: 11, src: "https://res.cloudinary.com/dovztsxyv/image/upload/q_auto/f_auto/v1775485198/2018_-_Eso_que_nos_recorre_I_-_gofrados_sobre_papel_intervenido_bnhn5k.jpg", title: "Eso que nos recorre", description: "Grofado sobre papel", anio:2018, size: "small" },
];
