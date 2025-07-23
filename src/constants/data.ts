import type { IIconBar, dataHeroImgType, ProductTour } from "../types";

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

export const productTour: ProductTour[] = [
  {
    id: 1,
    title: "مالزی",
    img: "/public/image/place/malezy.png",
    numbers: 4.1,
    time: "3 روز و 4 شب",
    price: "85.000.000",
    discount: 20,
  },
  {
    id: 2,
    title: "دبی",
    img: "/public/image/place/Dubai .png",
    numbers: 4.9,
    time: "3 روز و 4 شب",
    price: "65.000.000 ",
    discount: 0,
  },
  {
    id: 3,
    title: "آنتالیا",
    img: "/public/image/place/antalia.png",
    numbers: 4.1,
    time: "3 روز و 4 شب",
    price: "45.000.000",
    discount: 0,
  },
];
