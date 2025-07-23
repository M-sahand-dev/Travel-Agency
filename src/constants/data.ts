import type { IIconBar, dataHeroImgType } from "../types";

export const iconBar: IIconBar[] = [
  { id: 1, icon: "⛺", title: "کمپ" },
  { id: 2, icon: "🏖️", title: "ساحل" },
  { id: 3, icon: "🌆", title: "شهر " },
  { id: 4, icon: "🏞️", title: "جنگل" },
];

export const dataHeroImg: dataHeroImgType[] = [
  {
    id: 1,
    img: "/public/image/place/pataya.png",
    contry: "تایلند",
    city: "پاتایا",
  },
  {
    id: 2,
    img: "/public/image/place/malezy.png",
    contry: "مالزی",
    city: "مالزی",
  },
  {
    id: 3,
    img: "/public/image/place/Dubai .png",
    contry: "امارات",
    city: "دبی",
  },
  {
    id: 4,
    img: "/public/image/place/antalia.png",
    contry: "ترکیه",
    city: "انتالیا",
  },
];

export const cityNames: string[] = [
  "تهران",
  "دبی",
  "اصفهان",
  "استانبول",
  "شیراز",
  "کیف",
];
