import type {
  IIconBar,
  dataHeroImgType,
  ProductTour,
  WhyUsTravelData,
  TourProduct,
  TourProductCategory,
  CommentUser,
  FooterMenu,
  NavReview,
  TravelAgencyContent,
  CompanyValue,
  TravelInsuranceData,
  Travelogue,
  DashbordMenuProp,
  HeroMeniItem,
  // TravelInsuranceData,
} from "../types";
import { PiPizzaLight } from "react-icons/pi";
import { IoWifiSharp } from "react-icons/io5";
import { FiCoffee } from "react-icons/fi";
import { BsFileMedical } from "react-icons/bs";
import {
  FaTooth,
  FaMedkit,
  FaShieldAlt,
  FaSuitcase,
  FaBalanceScale,
  FaPlane,
  FaClock,
  FaTimesCircle,
  FaUser,
  FaUsers,
  FaStar,
  FaDollarSign,
} from "react-icons/fa";
import {
  MdCardTravel,
  MdOutlineLocalPostOffice,
  MdPayment,
} from "react-icons/md";
import { BiSupport } from "react-icons/bi";

export const iconBar: IIconBar[] = [
  { id: 1, icon: "⛺", title: "کمپ" },
  { id: 2, icon: "🏖️", title: "ساحل" },
  { id: 3, icon: "🌆", title: "شهر " },
  { id: 4, icon: "🏞️", title: "جنگل" },
];

export const dataHeroImg: dataHeroImgType[] = [
  {
    id: 1,
    img: "/image/place/pataya.png",
    contry: "تایلند",
    city: "پاتایا",
  },
  {
    id: 2,
    img: "/image/place/malezy.png",
    contry: "مالزی",
    city: "مالزی",
  },
  {
    id: 3,
    img: "/image/place/Dubai .png",
    contry: "امارات",
    city: "دبی",
  },
  {
    id: 4,
    img: "/image/place/antalia.png",
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
    img: "/image/place/malezy.png",
    numbers: 4.1,
    time: "3 روز و 4 شب",
    price: 85000000,
    discount: 20,
    hotel: false,
  },
  {
    id: 2,
    title: "دبی",
    img: "/image/place/Dubai .png",
    numbers: 4.9,
    time: "3 روز و 4 شب",
    price: 65000000,
    discount: 0,
    hotel: false,
  },
  {
    id: 3,
    title: "آنتالیا",
    img: "/image/place/antalia.png",
    numbers: 4.1,
    time: "3 روز و 4 شب",
    price: 45000000,
    discount: 0,
    hotel: false,
  },
];

export const tourProductData: TourProduct[] = [
  {
    id: 1,
    title: "مالزی",
    contry: "مالزی",
    categoryTour: "تور آسیا",
    isDomestic: false,
    img: [
      "https://satraa.com/blog/wp-content/uploads/2020/01/Untitled-1-min.jpg",
      "https://mohajermag.ir/wp-content/uploads/2021/03/malasiya-wallpaper-780x470.jpg",
      "https://www.alefbatour.com/api/UploadedImages/?set=GalleryImages&name=Mabul-Island-Malaysia.webp",
    ],
    numbers: 4.1,
    time: "3 روز و 4 شب",
    price: 85000000,
    discount: 20,
    startTour: "1403/8/12",
    endTour: "1403/1/18",
    strength: "3 بزرگ سال, 1 کودک",
    benefitsItem: [
      { id: 1, benefits: "استخر", cont: 90000 },
      { id: 2, benefits: "ماساژ هر نفر", cont: 200000 },
      { id: 3, benefits: "صبحانه برای هر نفر", cont: 60000 },
      { id: 4, benefits: "سرویس", cont: 60000 },
    ],
    benefits: [],
    checkTour: [
      {
        id: 1,
        description:
          "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت.",
        features: [
          { id: 1, icon: PiPizzaLight, title: "ناهار رایگان" },
          { id: 3, icon: IoWifiSharp, title: "وای فای رایگان" },
          { id: 4, icon: FiCoffee, title: "میان وعده رایگان" },
          { id: 5, icon: BsFileMedical, title: "بیمه مسافرتی" },
        ],
        planDay: [
          {
            id: 1,
            title: "روز اول",
            description:
              "در این روز به بازدید از جاذبه های گردشگری شهر می پردازیم و از غذاهای محلی لذت می بریم.",
          },
          {
            id: 2,
            title: "روز دوم",
            description:
              "در این روز به گشت و گذار در بازارهای محلی و خرید سوغاتی می پردازیم.",
          },
          {
            id: 3,
            title: "روز سوم",
            description:
              "در این روز به بازدید از جاذبه های طبیعی و تفریحی شهر می پردازیم.",
          },
          {
            id: 4,
            title: "روز چهارم",
            description:
              "در این روز به استراحت و لذت بردن از امکانات هتل می پردازیم.",
          },
          {
            id: 5,
            title: "روز پنجم",
            description:
              "در این روز به بازدید از جاذبه های گردشگری شهر می پردازیم و از غذاهای محلی لذت می بریم.",
          },
          {
            id: 6,
            title: "روز ششم",
            description:
              "در این روز به بازدید از جاذبه های طبیعی و تفریحی شهر می پردازیم.",
          },
          {
            id: 7,
            title: "روز هفتم",
            description:
              "در این روز به استراحت و لذت بردن از امکانات هتل می پردازیم.",
          },
        ],
      },
    ],
    place: [
      {
        id: 1,
        img: "https://satraa.com/blog/wp-content/uploads/2020/01/Untitled-1-min.jpg",
        title: "برج‌های دوقلو پتروناس",
        description:
          "نماد معروف شهر کوالالامپور با معماری خیره‌کننده و چشم‌انداز فوق‌العاده از بالای برج.",
      },
      {
        id: 2,
        img: "https://satraa.com/blog/wp-content/uploads/2020/01/Untitled-1-min.jpg",
        title: "غارهای باتو",
        description:
          "معبد هندو با ۲۷۲ پله رنگارنگ و مجسمه طلایی عظیم الهه موروگان.",
      },
      {
        id: 3,
        img: "https://satraa.com/blog/wp-content/uploads/2020/01/Untitled-1-min.jpg",
        title: "جزیره لنکاوی",
        description:
          "بهشت استوایی با ساحل‌های بکر، جنگل‌های حرا و تله‌کابین هوایی.",
      },
      {
        id: 4,
        img: "https://satraa.com/blog/wp-content/uploads/2020/01/Untitled-1-min.jpg",
        title: "تفریحگاه گنتینگ هایلند",
        description: "شهر بازی و کازینو روی ابرها با هوای خنک در ارتفاعات.",
      },
      {
        id: 5,
        img: "https://satraa.com/blog/wp-content/uploads/2020/01/Untitled-1-min.jpg",
        title: "شهر تاریخی ملاکا",
        description:
          "ترکیبی از معماری پرتغالی، هلندی و انگلیسی با کانال‌های آبی رنگارنگ.",
      },
      {
        id: 6,
        img: "https://satraa.com/blog/wp-content/uploads/2020/01/Untitled-1-min.jpg",
        title: "تپه‌های کامرون",
        description: "منطقه ییلاقی با مزارع چای سرسبز و باغ‌های توت فرنگی.",
      },
    ],
    lows: {
      general: [
        "مسئولیت رعایت مقررات مهاجرتی (ویزا، پاسپورت معتبر و مدارک لازم) بر عهده مسافر است.",
        "حداقل اعتبار پاسپورت ۶ ماه از تاریخ ورود به مالزی الزامی است.",
        "پرداخت ۵۰% هزینه تور به عنوان پیش‌پرداخت جهت رزرو الزامی است.",
      ],
      cancellation: [
        "لغو رزرو تا ۳۰ روز قبل از پرواز: بازپرداخت ۹۰% مبلغ",
        "لغو ۱۵ تا ۳۰ روز قبل: کسر ۵۰% مبلغ به عنوان جریمه",
        "لغو کمتر از ۱۵ روز قبل: بازپرداختی انجام نمی‌شود",
      ],
      health: [
        "تزریق واکسن‌های مورد نیاز طبق پروتکل وزارت بهداشت مالزی الزامی است.",
        "مسئولیت حمل داروهای خاص بر عهده مسافر است (به همراه نسخه پزشک معتبر).",
      ],
      notes: [
        "هتل‌ها معمولاً ساعت ۱۴:00 Check-in و ۱۲:00 Check-out دارند.",
        "خدمات اضافی (مینی بار، اینترنت پرسرعت) ممکن است مشمول هزینه جداگانه باشد.",
        "تور مطابق برنامه از پیش اعلام شده است اما در شرایط فورس ماژور ممکن است تغییر کند.",
      ],
    },
    hostTour: {
      title: "میزبانی تور مالزی",
      services: [
        "ترانسفر فرودگاهی",
        "اقامت در هتل ۴ یا ۵ ستاره",
        "راهنمای فارسی‌زبان",
        "بازدید از جاذبه‌های اصلی",
        "پشتیبانی ۲۴ ساعته",
        "بیمه مسافرتی",
      ],
      conditions: [
        "حداقل ۴ نفر برای تور گروهی",
        "رزرو حداقل ۳۰ روز قبل از سفر",
        "پرداخت ۵۰% پیش‌پرداخت",
      ],
    },
    comment: [
      {
        id: 1,
        userName: "@sara_rahimi",
        image: "/images/users/sara.jpg",
        description:
          "تور مالزی عالی بود! راهنمای تور خیلی حرفه‌ای برخورد کرد و هتل‌ها کیفیت بالایی داشتند. مخصوصاً صبحانه‌های هتل رو خیلی دوست داشتم.",
        date: "۱۴۰۲/۰۵/۱۵",
      },
      {
        id: 2,
        userName: "@ali_traveler",
        image: "/images/users/ali.jpg",
        description:
          "تجربه خوبی بود اما ای کاش زمان بازدید از برج‌های پتروناس بیشتر می‌شد. به هر حال ممنون از تیم حرفه‌ای شما.",
        date: "۱۴۰۲/۰۴/۲۲",
      },
      {
        id: 3,
        userName: "@narges_malaysia",
        image: "/images/users/narges.jpg",
        description:
          "اولین بار بود که با تور سفر می‌کردم و واقعاً راضی بودم. برنامه‌ریزی عالی بود و اصلاً استرس نداشتم. حتماً دوباره با شما سفر می‌کنم.",
        date: "۱۴۰۲/۰۶/۰۵",
      },
      {
        id: 4,
        userName: "@amirhossein",
        image: "/images/users/amir.jpg",
        description:
          "تور خوبی بود اما غذاهای محلی که وعده داده بودید رو کمتر از حد انتظار بود. پیشنهاد می‌کنم رستوران‌های بهتری رو انتخاب کنید.",
        date: "۱۴۰۲/۰۳/۱۸",
      },
      {
        id: 5,
        userName: "@fatima_gh",
        image: "/images/users/fatima.jpg",
        description:
          "جزیره لنکاوی واقعاً بهشت بود! مخصوصاً غروب‌های ساحل تانجونگ رو خیلی دوست داشتم. ممنون از راهنمای خوبتون که همه جا همراه ما بود.",
        date: "۱۴۰۲/۰۷/۱۲",
      },
      {
        id: 6,
        userName: "@reza_joon",
        image: "/images/users/reza.jpg",
        description:
          "بهترین توری بود که تجربه کردم. از برنامه‌ریزی دقیق گرفته تا خدمات هتل و حمل‌ونقل همه چیز عالی بود. به همه دوستانم شما رو معرفی می‌کنم.",
        date: "۱۴۰۲/۰۲/۲۸",
      },
    ],
  },
  {
    id: 2,
    title: "دبی",
    contry: "امارات متحده عربی",
    isDomestic: false,
    img: [
      "https://www.investindubai.gov.ae/-/media/gathercontent/poi/b/burj-khalifa/fallback-image/burj-khalifa-det-3.jpg",
      "https://example.com/dubai1.jpg",
      "https://example.com/dubai2.jpg",
    ],
    numbers: 4.9,
    time: "3 روز و 4 شب",
    price: 65000000,
    discount: 0,
    startTour: "1403/9/10",
    endTour: "1403/9/13",
    strength: "2 بزرگ سال",
    benefitsItem: [
      { id: 1, benefits: "استخر روف تاپ", cont: 120000 },
      { id: 2, benefits: "تور صحرا", cont: 250000 },
      { id: 3, benefits: "صبحانه بوفه", cont: 80000 },
    ],
    benefits: [],
    checkTour: [
      {
        id: 1,
        description:
          "تور دبی شامل بازدید از مدرن‌ترین جاذبه‌های شهری و تجربه تفریحات منحصر به فرد در این شهر پیشرفته می‌شود.",
        features: [
          { id: 1, icon: PiPizzaLight, title: "شام در رستوران گردان" },
          { id: 2, icon: IoWifiSharp, title: "وای فای پرسرعت" },
          { id: 3, icon: BsFileMedical, title: "بیمه مسافرتی" },
        ],
        planDay: [
          {
            id: 1,
            title: "روز اول",
            description:
              "بازدید از برج خلیفه و دبی مال، بزرگترین مرکز خرید جهان.",
          },
          {
            id: 2,
            title: "روز دوم",
            description: "تور صحرا با شترسواری و شام عربی در کمپ صحرایی.",
          },
          {
            id: 3,
            title: "روز سوم",
            description: "جزیره مصنوعی نخل جمیرا و پارک آبی آتلانتیس.",
          },
          {
            id: 4,
            title: "روز چهارم",
            description: "بازدید از محله سنتی دبی و خرید از بازار طلا.",
          },
        ],
      },
    ],
    place: [
      {
        id: 1,
        img: "/images/dubai/burj-khalifa.jpg",
        title: "برج خلیفه",
        description:
          "بلندترین ساختمان جهان با ارتفاع 828 متر و چشم‌انداز پانوراما از شهر.",
      },
      {
        id: 2,
        img: "/images/dubai/dubai-mall.jpg",
        title: "دبی مال",
        description:
          "بزرگترین مرکز خرید جهان با آکواریوم عظیم و پیست اسکی سرپوشیده.",
      },
      {
        id: 3,
        img: "/images/dubai/palm.jpg",
        title: "نخل جمیرا",
        description:
          "جزیره مصنوعی به شکل نخل با هتل‌های لوکس و تفریحات دریایی.",
      },
    ],
    lows: {
      general: [
        "ارائه پاسپورت با حداقل 6 ماه اعتبار الزامی است.",
        "پرداخت 30% پیش‌پرداخت برای رزرو تور الزامی است.",
        "مسئولیت ویزا بر عهده مسافر است.",
      ],
      cancellation: [
        "لغو تا 20 روز قبل: بازپرداخت 80%",
        "لغو 10 تا 20 روز قبل: کسر 40%",
        "لغو کمتر از 10 روز: بدون بازپرداخت",
      ],
      health: [
        "تزریق واکسن‌های ضروری توصیه می‌شود.",
        "ممنوعیت حمل داروهای مخصوص بدون نسخه پزشک.",
      ],
      notes: [
        "هتل‌ها ساعت 15:00 تحویل و 12:00 تخلیه می‌کنند.",
        "پرداخت هزینه‌های اضافی در هتل به عهده مسافر است.",
      ],
    },
    hostTour: {
      title: "میزبانی تور دبی",
      services: [
        "ترانسفر VIP فرودگاهی",
        "اقامت در هتل 5 ستاره",
        "راهنمای فارسی زبان",
        "بلیط جاذبه‌های اصلی",
        "پشتیبانی 24 ساعته",
      ],
      conditions: [
        "حداقل 2 نفر برای رزرو",
        "پرداخت 30% پیش‌پرداخت",
        "رزرو حداقل 20 روز قبل",
      ],
    },
    comment: [
      {
        id: 1,
        userName: "@dubai_lover",
        image: "/images/users/dubai1.jpg",
        description: "تجربه فوق‌العاده‌ای بود! برج خلیفه واقعاً دیدنی بود.",
        date: "1402/06/20",
      },
      {
        id: 2,
        userName: "@traveler_ali",
        image: "/images/users/ali2.jpg",
        description: "تور صحرا بهترین بخش سفر بود، شام عربی عالی بود.",
        date: "1402/05/15",
      },
    ],
    categoryTour: "",
  },
  {
    id: 3,
    title: "آنتالیا",
    contry: "ترکیه",
    categoryTour: "تور اروپا",
    isDomestic: false,
    img: [
      "https://last-cdn.com/2022/07/19/7DSH4MFE8BEGMZ6d1o77g0v71bzfpjmq0X73uxzn.jpg",
      "https://example.com/antalya1.jpg",
      "https://example.com/antalya2.jpg",
    ],
    numbers: 4.1,
    time: "3 روز و 4 شب",
    price: 45000000,
    discount: 0,
    startTour: "1403/7/20",
    endTour: "1403/7/23",
    strength: "2 بزرگ سال, 1 کودک",
    benefitsItem: [
      { id: 1, benefits: "استخر خصوصی", cont: 150000 },
      { id: 2, benefits: "تور قایق سواری", cont: 180000 },
      { id: 3, benefits: "صبحانه بوفه", cont: 70000 },
    ],
    benefits: [],
    checkTour: [
      {
        id: 1,
        description:
          "تور آنتالیا شامل بازدید از جاذبه‌های تاریخی و تفریحات ساحلی در این شهر زیبای ترکیه می‌شود.",
        features: [
          { id: 1, icon: PiPizzaLight, title: "ناهار محلی" },
          { id: 2, icon: IoWifiSharp, title: "وای فای رایگان" },
          { id: 3, icon: BsFileMedical, title: "بیمه مسافرتی" },
        ],
        planDay: [
          {
            id: 1,
            title: "روز اول",
            description: "بازدید از شهر قدیمی کالیچی و بندر مارینا.",
          },
          {
            id: 2,
            title: "روز دوم",
            description: "تور قایق سواری در آب‌های فیروزه‌ای و آبشار دودن.",
          },
          {
            id: 3,
            title: "روز سوم",
            description: "بازدید از سایت تاریخی پرگه و آمفی تئاتر آسپندوس.",
          },
          {
            id: 4,
            title: "روز چهارم",
            description: "تفریحات ساحلی و خرید از بازار بزرگ آنتالیا.",
          },
        ],
      },
    ],
    place: [
      {
        id: 1,
        img: "/images/antalya/kaleici.jpg",
        title: "کالیچی",
        description:
          "مرکز تاریخی شهر با معماری سنتی عثمانی و خیابان‌های سنگفرش.",
      },
      {
        id: 2,
        img: "/images/antalya/duden.jpg",
        title: "آبشار دودن",
        description:
          "آبشار زیبا که مستقیماً به دریا می‌ریزد و منظره‌ای خیره‌کننده دارد.",
      },
      {
        id: 3,
        img: "/images/antalya/aspendos.jpg",
        title: "آسپندوس",
        description:
          "آمفی تئاتر رومی با معماری خارق‌العاده و اکوستیک فوق‌العاده.",
      },
    ],
    lows: {
      general: [
        "پاسپورت با حداقل 3 ماه اعتبار کافی است.",
        "پرداخت 40% پیش‌پرداخت الزامی است.",
        "ویزا برای ایرانیان در فرودگاه صادر می‌شود.",
      ],
      cancellation: [
        "لغو تا 15 روز قبل: بازپرداخت 70%",
        "لغو 7 تا 15 روز قبل: کسر 30%",
        "لغو کمتر از 7 روز: بدون بازپرداخت",
      ],
      health: [
        "کارت واکسیناسیون الزامی نیست.",
        "ممنوعیت حمل برخی اقلام دارویی خاص.",
      ],
      notes: [
        "هتل‌ها ساعت 14:00 تحویل و 12:00 تخلیه می‌کنند.",
        "پرداخت هزینه‌های اضافی در هتل به عهده مسافر است.",
      ],
    },
    hostTour: {
      title: "میزبانی تور آنتالیا",
      services: [
        "ترانسفر فرودگاهی",
        "اقامت در هتل 4 ستاره",
        "راهنمای فارسی زبان",
        "بلیط جاذبه‌های اصلی",
        "پشتیبانی 24 ساعته",
      ],
      conditions: [
        "حداقل 2 نفر برای رزرو",
        "پرداخت 40% پیش‌پرداخت",
        "رزرو حداقل 15 روز قبل",
      ],
    },
    comment: [
      {
        id: 1,
        userName: "@antalya_fan",
        image: "/images/users/antalya1.jpg",
        description: "سواحل آنتالیا فوق‌العاده بودند، آبشار دودن دیدنی بود.",
        date: "1402/04/10",
      },
      {
        id: 2,
        userName: "@family_travel",
        image: "/images/users/family1.jpg",
        description: "برای سفر خانوادگی عالی بود، کودک ما هم خیلی لذت برد.",
        date: "1402/03/25",
      },
    ],
  },
  {
    id: 4,
    title: "استانبول",
    contry: "ترکیه",
    categoryTour: "تور اروپا",
    isDomestic: false, // تور خارجی
    img: [
      "https://assets.micontenthub.com/traveloffers/travel-tips/the-blue-mosque-in-istanbul-turkey_uBl9m1ErD.jpg",
      "https://example.com/istanbul1.jpg",
      "https://example.com/istanbul2.jpg",
    ],
    numbers: 4.7,
    time: "4 روز و 3 شب",
    price: 55000000,
    discount: 15,
    startTour: "1403/10/05",
    endTour: "1403/10/08",
    strength: "2 بزرگ سال",
    benefitsItem: [
      { id: 1, benefits: "کروز بسفر", cont: 200000 },
      { id: 2, benefits: "تور خرید", cont: 150000 },
      { id: 3, benefits: "صبحانه عثمانی", cont: 90000 },
    ],
    benefits: [],
    checkTour: [
      {
        id: 1,
        description:
          "تجربه ای منحصر به فرد از ترکیب فرهنگ شرق و غرب در شهری که روی دو قاره قرار دارد.",
        features: [
          { id: 1, icon: PiPizzaLight, title: "شام ترکی" },
          { id: 2, icon: IoWifiSharp, title: "وای فای پرسرعت" },
          { id: 3, icon: BsFileMedical, title: "بیمه مسافرتی" },
        ],
        planDay: [
          {
            id: 1,
            title: "روز اول",
            description: "بازدید از مسجد ایاصوفیه و کاخ توپکاپی",
          },
          {
            id: 2,
            title: "روز دوم",
            description: "گردش در بازار بزرگ و تنگه بسفر",
          },
          {
            id: 3,
            title: "روز سوم",
            description: "بازدید از برج گالاتا و محله تکسیم",
          },
        ],
      },
    ],
    place: [
      {
        id: 1,
        img: "/images/istanbul/hagia-sophia.jpg",
        title: "ایاصوفیه",
        description: "بنای تاریخی منحصر به فرد با معماری بیزانسی و عثمانی",
      },
      {
        id: 2,
        img: "/images/istanbul/bosphorus.jpg",
        title: "تنگه بسفر",
        description: "کروز در آبراهی که اروپا و آسیا را از هم جدا می‌کند",
      },
    ],
    lows: {
      general: [
        "پاسپورت با حداقل 3 ماه اعتبار کافی است",
        "ویزا در فرودگاه صادر می‌شود",
      ],
      cancellation: [
        "لغو تا 20 روز قبل: بازپرداخت 80%",
        "لغو 10 تا 20 روز قبل: کسر 30%",
      ],
      health: ["کارت واکسیناسیون الزامی نیست"],
      notes: ["هتل‌ها ساعت 14:00 تحویل می‌دهند"],
    },
    hostTour: {
      title: "میزبانی تور استانبول",
      services: ["ترانسفر فرودگاهی", "راهنمای فارسی زبان", "بلیط جاذبه‌ها"],
      conditions: ["حداقل 2 نفر", "پرداخت 30% پیش‌پرداخت"],
    },
    comment: [
      {
        id: 1,
        userName: "@history_lover",
        image: "/images/users/history1.jpg",
        description: "ایاصوفیه واقعاً شگفت‌انگیز بود!",
        date: "1402/07/15",
      },
    ],
  },
  {
    id: 5,
    title: "اصفهان",
    contry: "ایران",
    categoryTour: "تور ایران",
    isDomestic: true,
    img: [
      "https://luxuryproperties.ir/uploads/images/images/Blog/Things%20to%20Do%20in%20Iran/Top%2010%20Historical%20Landmarks%20%26%20Monuments%20in%20Isfahan/1khajoo.jpg",
      "https://example.com/isfahan1.jpg",
      "https://example.com/isfahan2.jpg",
    ],
    numbers: 4.9,
    time: "2 روز و 1 شب",
    price: 25000000,
    discount: 10,
    startTour: "1403/09/01",
    endTour: "1403/09/02",
    strength: "4 بزرگ سال",
    benefitsItem: [
      { id: 1, benefits: "رستوران سنتی", cont: 80000 },
      { id: 2, benefits: "تور شبانه", cont: 120000 },
    ],
    benefits: [],
    checkTour: [
      {
        id: 1,
        description:
          "گشت‌وگذار در نصف جهان و تماشای شاهکارهای معماری ایرانی-اسلامی",
        features: [
          { id: 1, icon: PiPizzaLight, title: "شام اصیل اصفهانی" },
          { id: 2, icon: IoWifiSharp, title: "وای فای رایگان" },
        ],
        planDay: [
          {
            id: 1,
            title: "روز اول",
            description: "بازدید از میدان نقش جهان و مسجد شیخ لطف‌الله",
          },
          {
            id: 2,
            title: "روز دوم",
            description: "سی وسه پل و پل خواجو",
          },
        ],
      },
    ],
    place: [
      {
        id: 1,
        img: "/images/isfahan/naqsh-e-jahan.jpg",
        title: "میدان نقش جهان",
        description: "میراث جهانی یونسکو با معماری بی‌نظیر",
      },
      {
        id: 2,
        img: "/images/isfahan/si-o-se-pol.jpg",
        title: "سی وسه پل",
        description: "پل تاریخی با معماری منحصر به فرد",
      },
    ],
    lows: {
      general: ["کارت ملی الزامی است"],
      cancellation: ["لغو تا 7 روز قبل: بازپرداخت کامل"],
      health: [],
      notes: [],
    },
    hostTour: {
      title: "میزبانی تور اصفهان",
      services: ["اقامت در هتل 4 ستاره", "راهنمای محلی"],
      conditions: ["حداقل 4 نفر"],
    },
    comment: [
      {
        id: 1,
        userName: "@iran_traveler",
        image: "/images/users/iran1.jpg",
        description: "نقش جهان واقعاً نفس‌گیر بود!",
        date: "1402/06/20",
      },
    ],
  },
  {
    id: 6,
    title: "بالی",
    contry: "اندونزی",
    categoryTour: "تور آسیا",
    isDomestic: false, // تور خارجی
    img: [
      "https://media.digitalnomads.world/wp-content/uploads/2021/01/20120709/bali-for-digital-nomads.jpg",
      "https://example.com/bali1.jpg",
      "https://example.com/bali2.jpg",
    ],
    numbers: 4.8,
    time: "5 روز و 4 شب",
    price: 75000000,
    discount: 25,
    startTour: "1403/11/10",
    endTour: "1403/11/14",
    strength: "2 بزرگ سال",
    benefitsItem: [
      { id: 1, benefits: "ویلا خصوصی", cont: 300000 },
      { id: 2, benefits: "ماساژ بالیایی", cont: 250000 },
    ],
    benefits: [],
    checkTour: [
      {
        id: 1,
        description: "تجربه آرامش در جزیره خدایان با سواحل بکر و فرهنگ غنی",
        features: [
          { id: 1, icon: PiPizzaLight, title: "غذای محلی" },
          { id: 2, icon: IoWifiSharp, title: "وای فای رایگان" },
        ],
        planDay: [
          {
            id: 1,
            title: "روز اول",
            description: "استراحت در ویلا و لذت بردن از ساحل",
          },
          {
            id: 2,
            title: "روز دوم",
            description: "بازدید از معبد تانا لوط و آبشار تیبومانا",
          },
        ],
      },
    ],
    place: [
      {
        id: 1,
        img: "/images/bali/uluwatu.jpg",
        title: "معبد اولوواتو",
        description: "معبد زیبا روی صخره‌های مشرف به اقیانوس",
      },
      {
        id: 2,
        img: "/images/bali/tegallalang.jpg",
        title: "شالیزارهای تگالالانگ",
        description: "شالیزارهای پلکانی با منظره‌ای خیره‌کننده",
      },
    ],
    lows: {
      general: ["پاسپورت با حداقل 6 ماه اعتبار"],
      cancellation: ["لغو تا 30 روز قبل: بازپرداخت 90%"],
      health: ["واکسیناسیون هپاتیت A توصیه می‌شود"],
      notes: [],
    },
    hostTour: {
      title: "میزبانی تور بالی",
      services: ["ترانسفر فرودگاهی", "راهنمای انگلیسی زبان"],
      conditions: ["پرداخت 50% پیش‌پرداخت"],
    },
    comment: [
      {
        id: 1,
        userName: "@bali_lover",
        image: "/images/users/bali1.jpg",
        description: "سواحل بالی رویایی بودند!",
        date: "1402/08/15",
      },
    ],
  },
  {
    id: 7,
    title: "پاریس",
    contry: "فرانسه",
    categoryTour: "تور اروپا",
    isDomestic: false, // تور خارجی
    img: [
      "https://res.cloudinary.com/dtljonz0f/image/upload/c_auto,ar_4:3,w_3840,g_auto/f_auto/q_auto/v1/shutterstock_2118458942_ss_non-editorial_jnjpwq?_a=BAVAZGE70",
      "https://example.com/paris1.jpg",
      "https://example.com/paris2.jpg",
    ],
    numbers: 4.9,
    time: "5 روز و 4 شب",
    price: 120000000,
    discount: 0,
    startTour: "1403/12/20",
    endTour: "1403/12/24",
    strength: "2 بزرگ سال",
    benefitsItem: [
      { id: 1, benefits: "تور رود سن", cont: 300000 },
      { id: 2, benefits: "بلیط موزه لوور", cont: 200000 },
    ],
    benefits: [],
    checkTour: [
      {
        id: 1,
        description: "گشت‌وگذار در شهر عشق و تماشای شاهکارهای هنری و معماری",
        features: [
          { id: 1, icon: PiPizzaLight, title: "صبحانه فرانسوی" },
          { id: 2, icon: IoWifiSharp, title: "وای فای پرسرعت" },
        ],
        planDay: [
          {
            id: 1,
            title: "روز اول",
            description: "برج ایفل و شانزلیزه",
          },
          {
            id: 2,
            title: "روز دوم",
            description: "موزه لوور و نوتردام",
          },
        ],
      },
    ],
    place: [
      {
        id: 1,
        img: "/images/paris/eiffel.jpg",
        title: "برج ایفل",
        description: "نماد پاریس با چشم‌انداز پانوراما از شهر",
      },
      {
        id: 2,
        img: "/images/paris/louvre.jpg",
        title: "موزه لوور",
        description: "خانه مونالیزا و هزاران اثر هنری ارزشمند",
      },
    ],
    lows: {
      general: ["پاسپورت با حداقل 6 ماه اعتبار", "ویزای شینگن الزامی است"],
      cancellation: ["لغو تا 40 روز قبل: بازپرداخت 70%"],
      health: [],
      notes: [],
    },
    hostTour: {
      title: "میزبانی تور پاریس",
      services: ["اقامت در هتل 4 ستاره", "راهنمای فارسی زبان"],
      conditions: ["پرداخت 50% پیش‌پرداخت"],
    },
    comment: [
      {
        id: 1,
        userName: "@paris_amour",
        image: "/images/users/paris1.jpg",
        description: "پاریس واقعاً شهر عشق است!",
        date: "1402/09/10",
      },
    ],
  },
  {
    id: 8,
    title: "شیراز",
    contry: "ایران",
    categoryTour: "تور ایران",
    isDomestic: true, // تور داخلی
    img: [
      "https://www.tappersia.com/blog/wp-content/uploads/2019/12/Persepolis-Shiraz.jpg",
      "https://example.com/shiraz1.jpg",
      "https://example.com/shiraz2.jpg",
    ],
    numbers: 4.8,
    time: "3 روز و 2 شب",
    price: 30000000,
    discount: 5,
    startTour: "1403/10/15",
    endTour: "1403/10/17",
    strength: "3 بزرگ سال",
    benefitsItem: [
      { id: 1, benefits: "رستوران سنتی", cont: 70000 },
      { id: 2, benefits: "تور شبانه", cont: 100000 },
    ],
    benefits: [],
    checkTour: [
      {
        id: 1,
        description:
          "سفر به شهر شعر و ادب و بازدید از جاذبه‌های تاریخی و فرهنگی",
        features: [
          { id: 1, icon: PiPizzaLight, title: "شام شیرازی" },
          { id: 2, icon: IoWifiSharp, title: "وای فای رایگان" },
        ],
        planDay: [
          {
            id: 1,
            title: "روز اول",
            description: "بازدید از حافظیه و سعدیه",
          },
          {
            id: 2,
            title: "روز دوم",
            description: "تخت جمشید و پاسارگاد",
          },
        ],
      },
    ],
    place: [
      {
        id: 1,
        img: "/images/shiraz/persepolis.jpg",
        title: "تخت جمشید",
        description: "پایتخت باشکوه هخامنشیان با معماری بی‌نظیر",
      },
      {
        id: 2,
        img: "/images/shiraz/hafezieh.jpg",
        title: "حافظیه",
        description: "آرامگاه حافظ شیرازی شاعر بزرگ ایرانی",
      },
    ],
    lows: {
      general: ["کارت ملی الزامی است"],
      cancellation: ["لغو تا 10 روز قبل: بازپرداخت کامل"],
      health: [],
      notes: [],
    },
    hostTour: {
      title: "میزبانی تور شیراز",
      services: ["اقامت در هتل 3 ستاره", "راهنمای محلی"],
      conditions: ["حداقل 3 نفر"],
    },
    comment: [
      {
        id: 1,
        userName: "@poetry_lover",
        image: "/images/users/shiraz1.jpg",
        description: "حافظیه فضای بسیار روح‌نوازی داشت!",
        date: "1402/07/30",
      },
    ],
  },
];

export const tourProductCategory: TourProductCategory[] = [
  { id: 1, title: "همه تور ها", to: "/" },
  { id: 2, title: "تور ایران", to: "/" },
  { id: 3, title: "تور اروپا", to: "/" },
  { id: 4, title: "تور آسیا", to: "/" },
];

export const whyUsTravelData: WhyUsTravelData[] = [
  {
    id: 1,
    title: "رزرو آنلاین",
    icon: "/image/icon/airplane.png",
    description: "رزرو آنلاین بلیط هواپیما و هتل با بهترین قیمت و کیفیت",
  },
  {
    id: 2,
    title: "ضمانت بهترین قیمت",
    icon: "/image/icon/duler.png",
    description: "ما بهترین قیمت ها را برای شما تضمین می کنیم",
  },
  {
    id: 3,
    title: "پشتیبانی 24 ساعته",
    icon: "/image/icon/clock.png",
    description:
      "تیم پشتیبانی ما در هر ساعت از شبانه روز آماده پاسخگویی به شماست",
  },
];

export const commentUser: CommentUser[] = [
  {
    id: 1,
    userName: "@ali_mohammadi",
    name: "علی محمدی",
    image:
      "https://www.profilebakery.com/wp-content/uploads/2023/04/LINKEDIN-Profile-Picture-AI.jpg",
    description:
      "با تور های اینترنتی، می توانید به راحتی تور هایی را انتخاب کنید که می خواهید و بهترین قیمت را برای شما دریافت کنید. این تور ها بهترین تجربه و خوشمزه ترین تور هایی را ارائه می دهند.",
    date: "1402/07/30",
  },
  {
    id: 2,
    userName: "@poetry_lover",
    name: "زهرا حسینی",
    image:
      "https://www.profilebakery.com/wp-content/uploads/2023/04/AI-Profile-Picture.jpg",
    description: "حافظیه فضای بسیار روح‌نوازی داشت!",
    date: "1402/07/30",
  },
  {
    id: 3,
    userName: "@poetry_lover",
    name: "محمد حسینی",
    image:
      "https://img.freepik.com/premium-photo/ai-generated-images-build-user-profile-page_1290175-101.jpg",
    description: "حافظیه فضای بسیار روح‌نوازی داشت!",
    date: "1402/07/30",
  },
  {
    id: 4,
    userName: "@poetry_lover",
    name: "سارا رحیمی",
    image:
      "https://lucid.content-delivery-one.com/cdn-cgi/image/w=600,format=auto,metadata=none/675703157f0da.png",
    description: "حافظیه فضای بسیار روح‌نوازی داشت!",
    date: "1402/07/30",
  },
  {
    id: 5,
    userName: "@poetry_lover",
    name: "سیدرضا حسینی",
    image: "/image/ad2fccd6f19d4f77fe6308520136edbc166eb172.png",
    description: "حافظیه فضای بسیار روح‌نوازی داشت!",
    date: "1402/07/30",
  },
];

export const footerMenu: FooterMenu[] = [
  { id: 1, title: "صفحه اصلی", to: "/" },
  { id: 2, title: "درباره ما", to: "/aboutUs" },
  { id: 3, title: "تماس با ما", to: "/callUs" },
];

export const navReview: NavReview[] = [
  { id: 1, name: "بررسی", to: "/detail/:id/check" },
  { id: 2, name: "مکان ها", to: "/detail/:id/place" },
  { id: 3, name: "قوانین", to: "/detail/:id/lows" },
  { id: 4, name: "میزبان تور", to: "/detail/:id/hostTour" },
  { id: 5, name: "نظرات", to: "/detail/:id/coment" },
];
export const aboutTravelAgency: TravelAgencyContent = {
  header: {
    title: "برنامه «سفر کن»: راهی آسان برای سفرهای بهیادماندنی",
    description:
      "عازم کجا هستید؟ فرقی نمیکند! هر مقصدی که در ذهن دارید، این حق شماست که سفری باکیفیت، راحت و امن را تجربه کنید.",
  },

  features: {
    title: "✈️ سفر باید آسان باشد، و با «سفر کن» هست!",
    items: [
      "از هر کجا به هر کجا: پرواز داخلی و خارجی، قطار، اتوبوس یا تورهای مسافرتی",
      "اقامتی شایسته: رزرو هتلهای معتبر در سراسر جهان با بهترین قیمت",
      "پشتیبانی 24 ساعته: تیم حرفهای ما همیشه آماده پاسخگویی به شماست",
    ],
  },

  services: {
    title: "🛡️ همسفر حرفهایها باشید",
    items: [
      "مشاوره و برنامهریزی سفر",
      "خرید آسان و مطمئن بلیط",
      "تغییر یا کنسلی بدون دردسر",
      "پشتیبانی در طول سفر",
    ],
  },

  aboutUs: {
    title: "🏆 برندی معتبر و قابل اعتماد",
    description:
      "ما افتخار داریم که با اعتماد شما، به یکی از پیشروهای صنعت گردشگری تبدیل شدهایم. اما این پایان راه نیست! ما هر روز تلاش میکنیم تا تجربه سفر شما را بهتر از دیروز کنیم.",
  },

  testimonials: {
    title: "📢 سفیران «سفر کن»: شما!",
    description:
      "اعتماد شما سرمایه ماست. ۹۷% از مسافران ما، «سفر کن» را به دیگران معرفی کردهاند. این یعنی راه درست را انتخاب کردهایم، چون همراهی شما بزرگترین انگیزه ماست.",
  },

  callToAction: {
    text: "همین حالا برنامه سفرتان را با «سفر کن» شروع کنید! 🌍✈️🚆🏨",
    linkText: "برای خرید بلیط و اطلاعات بیشتر، به برنامه «سفر کن» مراجعه کنید.",
  },
};
export const companyValues: CompanyValue[] = [
  {
    id: 1,
    title: "گفت‌وگوی خنثی و شنود مؤثر",
    description:
      "ما گفته‌های همکاران را بدون پیش‌زمینه می‌شنویم و اهل پیش‌داوری نیستیم. ضمن اینکه همیشه منظورمان را واضح و بدون تفسیر بیان می‌کنیم.",
  },
  {
    id: 2,
    title: "حرمتِ کلام",
    description:
      "ما برای انجام وظایفمان منتظر کلمه‌ها هستیم، نه دستورالعمل و نامه‌ی رسمی؛ درست مثل یک خانواده.",
  },
  {
    id: 3,
    title: "عاملیت",
    description:
      "همه‌ی اعضا خودشان را مسئول انجام دادن یا انجام ندادن کارهای‌شان می‌دانند و این مسئولیت را در تمام مدت زندگی کاری‌شان پذیرفته‌اند.",
  },
  {
    id: 4,
    title: "روابط شبکه‌ای",
    description:
      "ما به دنبال برقراری روابط میان فردیِ فراتر از سِمَت، سطح و واحد هستیم تا با تجربه‌ها و تخصص یکدیگر آشنا شویم.",
  },
  {
    id: 5,
    title: "تعهد حرفه‌ای",
    description:
      "ما به دنبال ارزیابی تعهد در تمامی ابعاد آن بوده و در پی ارزش افزوده‌ی دو طرفه از سمت سازمان و برای سازمان هستیم.",
  },
  {
    id: 6,
    title: "توانمندسازی",
    description:
      "ما به دنبال ارتقای دائمی دانش و مهارت‌ها در ابعاد رفتاری و شغلی، و بهینه‌سازی توانایی‌ها در راستای نیازهای سازمان هستیم.",
  },
  {
    id: 7,
    title: "توسعه و تعالی",
    description:
      "ما به دنبال تسهیل تعالی سازمان هستیم؛ تا جایی که زمینه‌ی تعالی واحدهای سازمانی و خود را فراهم کنیم.",
  },
  {
    id: 8,
    title: "تیم‌سازی بهینه",
    description:
      "ما برای ایده‌ی خود به دنبال تیم هستیم، تیمی که با همراهی آن، ایده را عملی و در نهایت به محصول تبدیل کنیم.",
  },
  {
    id: 9,
    title: "پاسخگویی به نیازها",
    description:
      "ما شنونده و بیننده‌ی همکاران و مشتریان هستیم تا مطمئن شویم کوچک‌ترین خواسته‌های آن‌ها بی‌جواب نمانده است.",
  },
  {
    id: 10,
    title: "ایده و خلق راهکار",
    description:
      "ما به دنبال نظرات‌ کسانی هستیم که در مورد موضوع، تخصص و تجربه دارند و می‌توانند راهی برای رفع مشکلات ارائه کنند.",
  },
  {
    id: 11,
    title: "روحیه‌ی پیشرویی",
    description:
      "ما هیچ‌وقت متوقف نخواهیم شد و به دنبال بهبود مستمر در همه‌ی ابعاد هستیم.",
  },
  {
    id: 12,
    title: "رهبری تسهیل‌گرانه",
    description:
      "رهبران ما، مدیران و سرپرستانی هستند که از تجارب و حمایت‌هایشان برای تسهیل و پیشبرد اهداف سازمان استفاده می‌کنند.",
  },
  {
    id: 13,
    title: "محیط دوستانه",
    description:
      "ما در جامعه‌ای کار می‌کنیم که ملاحظه‌گر و هواخواه اعضای آن است.",
  },
  {
    id: 14,
    title: "کار تیمی",
    description:
      "ما کارهایی را که می‌توانیم با هم انجام دهیم، فردی پیش نمی‌بریم و از با هم بودن لذت می‌بریم.",
  },
  {
    id: 15,
    title: "مربی‌گری",
    description:
      "رهبران ما اعضای تیم‌شان را برای انجام وظایف رشد داده و بستر این رشد را فراهم می‌کنند.",
  },
];

export const hotelReservation: TourProduct[] = [
  // نمونه اول (همان بورج العرب)
  {
    id: 1,
    title: "هتل بورج العرب دبی",
    contry: "امارات متحده عربی",
    categoryTour: "اقامت لوکس",
    isDomestic: false,
    img: [
      "https://cdn01.booking.ir/2023/6/b6176703-bb36-4d91-9d94-099f1e6dd224.jpg",
      "https://www.burj-al-arab.com/wp-content/uploads/2020/11/Royal-Two-Bedroom-Suite-Living-Area.jpg",
      "https://www.burj-al-arab.com/wp-content/uploads/2020/11/Al-Mahara-Restaurant.jpg",
    ],
    numbers: 4.9,
    time: "3 شب",
    price: 2500000,
    discount: 15,
    startTour: "1403/9/1",
    endTour: "1403/9/4",
    strength: "2 بزرگسال",
    benefitsItem: [
      { id: 1, benefits: "استخر اختصاصی", cont: 150000 },
      { id: 2, benefits: "اسپا برای هر نفر", cont: 350000 },
      { id: 3, benefits: "صبحانه لوکس", cont: 120000 },
      { id: 4, benefits: "ترانسفر فرودگاهی", cont: 200000 },
    ],
    benefits: [],
    checkTour: [
      {
        id: 1,
        description:
          "هتل ۷ ستاره بورج العرب نماد لوکس‌گرایی در دبی است. این هتل با معماری منحصر به فردش به شکل بادبان کشتی، یکی از شناخته‌شده‌ترین هتل‌های جهان محسوب می‌شود. تمام سوئیت‌های این هتل دو طبقه بوده و با استانداردهای بالای خدمات هتلداری تجربه‌ای بی‌نظیر را برای مهمانان فراهم می‌کنند.",
        features: [
          { id: 1, icon: PiPizzaLight, title: "رستوران‌های بین‌المللی" },
          { id: 3, icon: IoWifiSharp, title: "وای فای پرسرعت" },
          { id: 4, icon: FiCoffee, title: "میان وعده رایگان" },
          { id: 5, icon: BsFileMedical, title: "سالن اسپا و wellness" },
        ],
        planDay: [
          {
            id: 1,
            title: "روز اول",
            description:
              "ورود به هتل و استقبال گرم با نوشیدنی خوشامدگویی. استراحت در سوئیت لوکس و استفاده از امکانات هتل.",
          },
          {
            id: 2,
            title: "روز دوم",
            description:
              "صرف صبحانه در رستوران اسکای ویو با نمای پانوراما از دبی. استفاده از ساحل اختصاصی هتل و امکانات آبی.",
          },
          {
            id: 3,
            title: "روز سوم",
            description:
              "تجربه اسپا و ماساژ حرفه‌ای. شام در رستوران زیرآبی آل ماهارا با نمای آکواریوم.",
          },
        ],
      },
    ],
    place: [
      {
        id: 1,
        img: "https://www.burj-al-arab.com/wp-content/uploads/2020/11/Burj-Al-Arab-Exterior-Night.jpg",
        title: "سوئیت رویال",
        description:
          "سوئیت‌های دو طبقه با دکوراسیون لوکس، سرویس بهداشتی مرمرین و حمام اختصاصی با محصولات اختصاصی هتل.",
      },
      {
        id: 2,
        img: "https://www.burj-al-arab.com/wp-content/uploads/2020/11/Al-Mahara-Restaurant.jpg",
        title: "رستوران آل ماهارا",
        description:
          "رستوران زیرآبی با آکواریوم عظیم که تجربه‌ای منحصر به فرد از صرف غذا در زیر آب را ارائه می‌دهد.",
      },
      {
        id: 3,
        img: "https://www.burj-al-arab.com/wp-content/uploads/2020/11/Talise-Spa-Treatment-Room.jpg",
        title: "اسپای تالیسه",
        description:
          "مرکز اسپا و wellness با انواع ماساژهای درمانی و آرامش‌بخش در فضایی لوکس و آرام.",
      },
    ],
    lows: {
      general: [
        "حداقل سن رزرو ۲۱ سال است.",
        "پاسپورت معتبر با حداقل ۶ ماه اعتبار الزامی است.",
        "هزینه‌های اضافی مانند mini-bar در چک‌اوت محاسبه می‌شود.",
      ],
      cancellation: [
        "لغو تا ۷ روز قبل: بدون جریمه",
        "لغو ۳ تا ۷ روز قبل: ۵۰% هزینه یک شب",
        "لغو کمتر از ۳ روز قبل: ۱۰۰% هزینه",
      ],
      health: [
        "استفاده از استخر و اسپا نیاز به رزرو قبلی دارد.",
        "ماساژ برای بانوان باردار توصیه نمی‌شود.",
      ],
      notes: [
        "ساعت چک‌این: ۱۵:00 | چک‌اوت: ۱۲:00",
        "حیوانات خانگی مجاز نیستند.",
        "سیگار کشیدن فقط در مناطق مشخص شده امکان‌پذیر است.",
      ],
    },
    hostTour: {
      title: "خدمات هتل بورج العرب",
      services: [
        "باتلر شخصی ۲۴ ساعته",
        "ترانسفر رولز رویس",
        "دسترسی به ساحل اختصاصی",
        "ورودی رایگان به Wild Wadi Waterpark",
        "اینترنت پرسرعت رایگان",
      ],
      conditions: [
        "حداقل اقامت ۲ شب",
        "پرداخت ۱۰۰% در زمان رزرو",
        "ارائه کارت شناسایی معتبر در چک‌این",
      ],
    },
    comment: [
      {
        id: 1,
        userName: "@hamed_dubai",
        image: "/images/users/hamed.jpg",
        description:
          "بهترین تجربه اقامتی عمرم بود! خدمات باتلر واقعاً بی‌نظیر بود. رستوران آل ماهارا رو حتماً تجربه کنید.",
        date: "1402/08/10",
      },
      {
        id: 2,
        userName: "@sara_luxury",
        image: "/images/users/sara.jpg",
        description:
          "هتل واقعاً شگفت‌انگیزه. نمای سوئیت‌ها به دریاست و دکوراسیون خیلی شیک و مدرن داره. اسپاش هم عالیه.",
        date: "1402/07/22",
      },
      {
        id: 3,
        userName: "@ali_traveler",
        image: "/images/users/ali.jpg",
        description:
          "گرونه ولی ارزشش رو داره. صبحونه هتل تنوع فوق‌العاده‌ای داره و کیفیت خدمات واقعاً در سطح ۷ ستاره است.",
        date: "1402/09/05",
      },
    ],
  },

  // نمونه دوم: هتل مارینا بی سندز سنگاپور
  {
    id: 2,
    title: "هتل مارینا بی سندز",
    contry: "سنگاپور",
    categoryTour: "اقامت لوکس",
    isDomestic: false,
    img: [
      "https://cdn01.booking.ir/2023/6/b6176703-bb36-4d91-9d94-099f1e6dd224.jpg",
      "https://www.marinabaysands.com/content/dam/marinabaysands/singapore/accommodation/deluxe-room/MBS-Deluxe-Room-King.jpg",
      "https://www.marinabaysands.com/content/dam/marinabaysands/singapore/restaurants/bread-street-kitchen/MBS-Bread-Street-Kitchen-Interior.jpg",
    ],
    numbers: 4.8,
    time: "4 شب",
    price: 1800000,
    discount: 10,
    startTour: "1403/9/5",
    endTour: "1403/9/9",
    strength: "2 بزرگسال",
    benefitsItem: [
      { id: 1, benefits: "استخر بی‌نظیر", cont: 200000 },
      { id: 2, benefits: "اسکای پارک", cont: 150000 },
      { id: 3, benefits: "صبحانه بوفه", cont: 100000 },
    ],
    benefits: [],
    checkTour: [
      {
        id: 1,
        description:
          "هتل مارینا بی سندز با معماری آینده‌نگرانه و استخر بی‌نظیر روی بام، یکی از نمادهای سنگاپور محسوب می‌شود. این مجموعه شامل کازینو، مرکز خرید و سالن‌های نمایش است.",
        features: [
          { id: 1, icon: PiPizzaLight, title: "رستوران گوردون رمزی" },
          { id: 3, icon: IoWifiSharp, title: "وای فای رایگان" },
          { id: 4, icon: FiCoffee, title: "کافه‌تریا" },
          { id: 5, icon: BsFileMedical, title: "مرکز سلامت" },
        ],
        planDay: [
          {
            id: 1,
            title: "روز اول",
            description:
              "ورود به هتل و استقبال. گشت و گذار در مرکز خرید هتل و شام در یکی از رستوران‌های معروف مجموعه.",
          },
          {
            id: 2,
            title: "روز دوم",
            description:
              "بازدید از اسکای پارک و استخر معروف هتل. عصرها تماشای نمایش Spectra.",
          },
          {
            id: 3,
            title: "روز سوم",
            description:
              "بازدید از جاذبه‌های سنگاپور مانند باغ‌های کنار خلیج و مرکز شهر.",
          },
        ],
      },
    ],
    place: [
      {
        id: 1,
        img: "https://www.marinabaysands.com/content/dam/marinabaysands/singapore/attractions/infinity-pool/MBS-Infinity-Pool-Day.jpg",
        title: "استخر بی‌نهایت",
        description:
          "استخر روی بام با منظره پانوراما از شهر سنگاپور در ارتفاع 200 متری.",
      },
      {
        id: 2,
        img: "https://www.marinabaysands.com/content/dam/marinabaysands/singapore/restaurants/ce-la-vi/MBS-Ce-La-Vi-Interior.jpg",
        title: "رستوران CE LA VI",
        description:
          "رستوران لوکس روی بام با منوی آسیایی-فرانسوی و نمای 360 درجه از شهر.",
      },
      {
        id: 3,
        img: "https://www.marinabaysands.com/content/dam/marinabaysands/singapore/attractions/art-science-museum/MBS-ArtScience-Museum-Exterior.jpg",
        title: "موزه ArtScience",
        description:
          "نمایشگاه‌های تعاملی در موزه‌ای با معماری منحصر به فرد به شکل گل نیلوفر آبی.",
      },
    ],
    lows: {
      general: [
        "ورود به استخر فقط برای مهمانان هتل مجاز است.",
        "حداقل سن برای ورود به کازینو 21 سال است.",
      ],
      cancellation: [
        "لغو تا 14 روز قبل: بدون جریمه",
        "لغو 7 تا 14 روز قبل: 30% هزینه",
        "لغو کمتر از 7 روز قبل: 50% هزینه",
      ],
      health: ["استخر برای کودکان زیر 12 سال فقط با همراهی بزرگسال مجاز است."],
      notes: [
        "چک‌این از ساعت 15:00 | چک‌اوت تا 11:00",
        "پارکینگ رایگان برای مهمانان",
      ],
    },
    hostTour: {
      title: "خدمات هتل مارینا بی سندز",
      services: [
        "دسترسی به اسکای پارک",
        "ورود رایگان به موزه ArtScience",
        "اینترنت پرسرعت",
        "ترانسفر فرودگاهی",
      ],
      conditions: ["حداقل اقامت 2 شب", "پرداخت 50% پیش‌پرداخت"],
    },
    comment: [
      {
        id: 1,
        userName: "@sara_singapore",
        image: "/images/users/sara2.jpg",
        description:
          "استخر روی بام تجربه‌ای فراموش‌نشدنی بود! منظره شهر سنگاپور عالی بود.",
        date: "1402/07/15",
      },
      {
        id: 2,
        userName: "@reza_travel",
        image: "/images/users/reza.jpg",
        description:
          "موقعیت هتل عالیه. نزدیک به همه جاذبه‌های اصلی شهره. اتاق‌ها هم خیلی تمیز و مدرن بودند.",
        date: "1402/08/22",
      },
    ],
  },

  // نمونه سوم: هتل برج الخلیفه دبی
  {
    id: 3,
    title: "هتل آرمانی برج الخلیفه",
    contry: "امارات متحده عربی",
    categoryTour: "اقامت لوکس",
    isDomestic: false,
    img: [
      "https://cdn01.booking.ir/2023/6/b6176703-bb36-4d91-9d94-099f1e6dd224.jpg",
      "https://www.armanihotels.com/content/dam/armani/hotels/dubai/dining/armani-hashi/armani-hashi-restaurant.jpg",
      "https://www.armanihotels.com/content/dam/armani/hotels/dubai/wellness/armani-spa/armani-spa-treatment-room.jpg",
    ],
    numbers: 4.7,
    time: "3 شب",
    price: 2200000,
    discount: 5,
    startTour: "1403/10/1",
    endTour: "1403/10/4",
    strength: "2 بزرگسال",
    benefitsItem: [
      { id: 1, benefits: "صبحانه در اتاق", cont: 150000 },
      { id: 2, benefits: "اسپا", cont: 300000 },
      { id: 3, benefits: "ترانسفر فرودگاهی", cont: 250000 },
    ],
    benefits: [],
    checkTour: [
      {
        id: 1,
        description:
          "هتل آرمانی در برج الخلیفه، بلندترین برج جهان، تجربه‌ای منحصر به فرد از زندگی لوکس را ارائه می‌دهد. طراحی داخلی توسط جورجیو آرمانی انجام شده و تمام جزئیات با دقت بالا انتخاب شده‌اند.",
        features: [
          { id: 1, icon: PiPizzaLight, title: "رستوران هاشی" },
          { id: 3, icon: IoWifiSharp, title: "وای فای پرسرعت" },
          { id: 4, icon: FiCoffee, title: "کافه آرمانی" },
          { id: 5, icon: BsFileMedical, title: "اسپای اختصاصی" },
        ],
        planDay: [
          {
            id: 1,
            title: "روز اول",
            description:
              "ورود به هتل و استقبال ویژه. گشت و گذار در مرکز خرید دبی مال و تماشای آبنمای دبی.",
          },
          {
            id: 2,
            title: "روز دوم",
            description:
              "صرف صبحانه در اتاق با منظره شهر. بازدید از آکواریوم دبی مال و شام در رستوران هاشی.",
          },
          {
            id: 3,
            title: "روز سوم",
            description:
              "تجربه اسپای لوکس آرمانی. عصرها تماشای غروب از تراس هتل.",
          },
        ],
      },
    ],
    place: [
      {
        id: 1,
        img: "https://www.armanihotels.com/content/dam/armani/hotels/dubai/accommodation/armani-suite/armani-suite-living-area.jpg",
        title: "سوئیت آرمانی",
        description:
          "سوئیت‌های طراحی شده توسط جورجیو آرمانی با مبلمان و دکوراسیون اختصاصی.",
      },
      {
        id: 2,
        img: "https://www.armanihotels.com/content/dam/armani/hotels/dubai/dining/armani-hashi/armani-hashi-restaurant.jpg",
        title: "رستوران هاشی",
        description:
          "رستوران ژاپنی با کیفیت عالی و محیطی شیک در طبقات بالای برج الخلیفه.",
      },
      {
        id: 3,
        img: "https://www.armanihotels.com/content/dam/armani/hotels/dubai/wellness/armani-spa/armani-spa-treatment-room.jpg",
        title: "اسپای آرمانی",
        description:
          "مرکز اسپا با خدمات درمانی و آرامش‌بخش در محیطی کاملاً لوکس.",
      },
    ],
    lows: {
      general: ["حداقل سن رزرو 21 سال است.", "پاسپورت معتبر الزامی است."],
      cancellation: [
        "لغو تا 30 روز قبل: بدون جریمه",
        "لغو 15 تا 30 روز قبل: 50% هزینه",
        "لغو کمتر از 15 روز قبل: 100% هزینه",
      ],
      health: ["استفاده از اسپا نیاز به رزرو قبلی دارد."],
      notes: [
        "چک‌این از ساعت 15:00 | چک‌اوت تا 12:00",
        "حیوانات خانگی مجاز نیستند.",
      ],
    },
    hostTour: {
      title: "خدمات هتل آرمانی",
      services: [
        "باتلر شخصی",
        "دسترسی به استخر و سالن ورزشی",
        "اینترنت پرسرعت",
        "ترانسفر مرسدس بنز",
      ],
      conditions: ["حداقل اقامت 2 شب", "پرداخت 100% در زمان رزرو"],
    },
    comment: [
      {
        id: 1,
        userName: "@ali_dubai",
        image: "/images/users/ali2.jpg",
        description:
          "تجربه زندگی در بلندترین برج جهان واقعاً بی‌نظیر بود. خدمات هتل در سطح بسیار بالایی بود.",
        date: "1402/06/10",
      },
      {
        id: 2,
        userName: "@narges_luxury",
        image: "/images/users/narges.jpg",
        description:
          "طراحی داخلی هتل خیره‌کننده است. هر جزئیاتی با دقت انتخاب شده. رستوران هاشی هم عالی بود.",
        date: "1402/07/25",
      },
    ],
  },

  // نمونه چهارم: هتل شانگریلا بانکوک
  {
    id: 4,
    title: "هتل شانگریلا بانکوک",
    contry: "تایلند",
    categoryTour: "اقامت لوکس",
    isDomestic: false,
    img: [
      "https://cdn01.booking.ir/2023/6/b6176703-bb36-4d91-9d94-099f1e6dd224.jpg",
      "https://www.shangri-la.com/content/dam/shangri-la/hotels/bangkok/shangrila/accommodation/deluxe-river-view-room/deluxe-river-view-room-02.jpg",
      "https://www.shangri-la.com/content/dam/shangri-la/hotels/bangkok/shangrila/wellness/chi-spa/chi-spa-01.jpg",
    ],
    numbers: 4.6,
    time: "5 شب",
    price: 1500000,
    discount: 20,
    startTour: "1403/10/10",
    endTour: "1403/10/15",
    strength: "2 بزرگسال",
    benefitsItem: [
      { id: 1, benefits: "صبحانه بوفه", cont: 120000 },
      { id: 2, benefits: "ماساژ تایلندی", cont: 250000 },
      { id: 3, benefits: "قایق سواری", cont: 180000 },
    ],
    benefits: [],
    checkTour: [
      {
        id: 1,
        description:
          "هتل شانگریلا بانکوک با موقعیت ممتاز در کنار رودخانه چائو فرایا، ترکیبی از خدمات لوکس و معماری تایلندی را ارائه می‌دهد. این هتل با فضای سبز وسیع و استخرهای متعدد، محیطی آرامش‌بخش در قلب بانکوک ایجاد کرده است.",
        features: [
          { id: 1, icon: PiPizzaLight, title: "رستوران بین‌المللی" },
          { id: 3, icon: IoWifiSharp, title: "وای فای رایگان" },
          { id: 4, icon: FiCoffee, title: "چای سنتی تایلندی" },
          { id: 5, icon: BsFileMedical, title: "اسپای چی" },
        ],
        planDay: [
          {
            id: 1,
            title: "روز اول",
            description:
              "ورود به هتل و استقبال با گل‌گردن. گشت و گذار در محله تاریخی بانکوک.",
          },
          {
            id: 2,
            title: "روز دوم",
            description:
              "بازدید از کاخ بزرگ و معبد بودای زمردین. شام در رستوران سنتی تایلندی هتل.",
          },
          {
            id: 3,
            title: "روز سوم",
            description:
              "قایق‌سواری در رودخانه چائو فرایا و بازدید از بازارهای شناور.",
          },
        ],
      },
    ],
    place: [
      {
        id: 1,
        img: "https://www.shangri-la.com/content/dam/shangri-la/hotels/bangkok/shangrila/accommodation/shangri-la-suite/shangri-la-suite-01.jpg",
        title: "سوئیت رودخانه‌ای",
        description:
          "سوئیت‌های لوکس با نمای رودخانه چائو فرایا و دکوراسیون تایلندی-چینی.",
      },
      {
        id: 2,
        img: "https://www.shangri-la.com/content/dam/shangri-la/hotels/bangkok/shangrila/dining/restaurants/sala-rim-naam/sala-rim-naam-02.jpg",
        title: "رستوران سالا ریم نام",
        description:
          "رستوران سنتی تایلندی در فضایی رویایی با اجرای رقص و موسیقی محلی.",
      },
      {
        id: 3,
        img: "https://www.shangri-la.com/content/dam/shangri-la/hotels/bangkok/shangrila/wellness/chi-spa/chi-spa-01.jpg",
        title: "اسپای چی",
        description:
          "مرکز اسپا با الهام از طب سنتی چینی و تایلندی در محیطی کاملاً آرام.",
      },
    ],
    lows: {
      general: [
        "پاسپورت معتبر الزامی است.",
        "هزینه خدمات اضافی در چک‌اوت محاسبه می‌شود.",
      ],
      cancellation: [
        "لغو تا 14 روز قبل: بدون جریمه",
        "لغو 7 تا 14 روز قبل: 30% هزینه",
        "لغو کمتر از 7 روز قبل: 50% هزینه",
      ],
      health: ["ماساژ برای افراد با شرایط خاص پزشکی نیاز به مشاوره دارد."],
      notes: [
        "چک‌این از ساعت 14:00 | چک‌اوت تا 12:00",
        "پارکینگ رایگان برای مهمانان",
      ],
    },
    hostTour: {
      title: "خدمات هتل شانگریلا",
      services: [
        "ترانسفر با قایق اختصاصی",
        "دسترسی به استخر و سالن ورزشی",
        "اینترنت پرسرعت",
        "پارکینگ رایگان",
      ],
      conditions: ["حداقل اقامت 3 شب", "پرداخت 50% پیش‌پرداخت"],
    },
    comment: [
      {
        id: 1,
        userName: "@mahsa_thai",
        image: "/images/users/mahsa.jpg",
        description:
          "منظره رودخانه از اتاق عالی بود. خدمات هتل بسیار حرفه‌ای و کارکنان خوش‌برخورد بودند.",
        date: "1402/05/15",
      },
      {
        id: 2,
        userName: "@amir_travel",
        image: "/images/users/amir.jpg",
        description:
          "رستوران تایلندی هتل بهترین غذایی بود که در بانکوک خوردم. محیط هتل هم خیلی آروم و دلنشینه.",
        date: "1402/06/20",
      },
    ],
  },

  // نمونه پنجم: هتل ریچموند استانبول
  {
    id: 5,
    title: "هتل ریچموند استانبول",
    contry: "ترکیه",
    categoryTour: "اقامت اقتصادی",
    isDomestic: false,
    img: [
      "https://cdn01.booking.ir/2023/6/b6176703-bb36-4d91-9d94-099f1e6dd224.jpg",
      "https://www.richmondhotels.com.tr/wp-content/uploads/2021/05/deluxe-room-1.jpg",
      "https://www.richmondhotels.com.tr/wp-content/uploads/2021/05/rooftop-restaurant-1.jpg",
    ],
    numbers: 4.3,
    time: "4 شب",
    price: 850000,
    discount: 15,
    startTour: "1403/11/1",
    endTour: "1403/11/5",
    strength: "2 بزرگسال",
    benefitsItem: [
      { id: 1, benefits: "صبحانه بوفه", cont: 80000 },
      { id: 2, benefits: "ترانسفر فرودگاهی", cont: 150000 },
    ],
    benefits: [],
    checkTour: [
      {
        id: 1,
        description:
          "هتل ریچموند در منطقه نیشانتاشی استانبول، یکی از بهترین انتخاب‌ها برای مسافران اقتصادی است. این هتل با موقعیت عالی نزدیک به مراکز خرید و جاذبه‌های توریستی، اقامتی راحت را ارائه می‌دهد.",
        features: [
          { id: 1, icon: PiPizzaLight, title: "رستوران روی پشت بام" },
          { id: 3, icon: IoWifiSharp, title: "وای فای رایگان" },
          { id: 4, icon: FiCoffee, title: "کافه‌تریا" },
        ],
        planDay: [
          {
            id: 1,
            title: "روز اول",
            description:
              "ورود به هتل و استقبال. گشت و گذار در منطقه نیشانتاشی و خرید از فروشگاه‌های معروف.",
          },
          {
            id: 2,
            title: "روز دوم",
            description:
              "بازدید از میدان تکسیم و خیابان استقلال. استفاده از رستوران روی پشت بام هتل.",
          },
          {
            id: 3,
            title: "روز سوم",
            description:
              "بازدید از مسجد ایاصوفیه و کاخ توپکاپی. شام در رستوران‌های محلی.",
          },
        ],
      },
    ],
    place: [
      {
        id: 1,
        img: "https://www.richmondhotels.com.tr/wp-content/uploads/2021/05/deluxe-room-1.jpg",
        title: "اتاق دلکسه",
        description:
          "اتاق‌های دلباز با طراحی مدرن و امکانات کامل برای اقامتی راحت.",
      },
      {
        id: 2,
        img: "https://www.richmondhotels.com.tr/wp-content/uploads/2021/05/rooftop-restaurant-1.jpg",
        title: "رستوران روی پشت بام",
        description:
          "رستوران با منظره پانوراما از شهر استانبول و منوی بین‌المللی.",
      },
      {
        id: 3,
        img: "https://www.richmondhotels.com.tr/wp-content/uploads/2021/05/lobby-bar-1.jpg",
        title: "لابی بار",
        description:
          "محلی دنج برای استراحت و نوشیدن نوشیدنی‌های خوشمزه در محیطی آرام.",
      },
    ],
    lows: {
      general: ["پاسپورت معتبر الزامی است."],
      cancellation: [
        "لغو تا 7 روز قبل: بدون جریمه",
        "لغو 3 تا 7 روز قبل: 30% هزینه",
        "لغو کمتر از 3 روز قبل: 50% هزینه",
      ],
      health: [],
      notes: ["چک‌این از ساعت 14:00 | چک‌اوت تا 12:00"],
    },
    hostTour: {
      title: "خدمات هتل ریچموند",
      services: ["اینترنت پرسرعت", "صبحانه بوفه", "دسترسی آسان به مراکز خرید"],
      conditions: ["حداقل اقامت 2 شب", "پرداخت 30% پیش‌پرداخت"],
    },
    comment: [
      {
        id: 1,
        userName: "@farhad_istanbul",
        image: "/images/users/farhad.jpg",
        description:
          "موقعیت هتل عالی بود. نزدیک به همه مراکز خرید اصلی. اتاق‌ها هم تمیز و مرتب بودند.",
        date: "1402/04/10",
      },
      {
        id: 2,
        userName: "@zahra_travel",
        image: "/images/users/zahra.jpg",
        description:
          "برای قیمتی که پرداخت کردیم واقعاً ارزش داشت. صبحانه تنوع خوبی داشت و کارکنان خوش‌برخورد بودند.",
        date: "1402/05/15",
      },
    ],
  },

  // نمونه ششم: هتل پلازا نیویورک
  {
    id: 6,
    title: "هتل پلازا نیویورک",
    contry: "آمریکا",
    categoryTour: "اقامت لوکس",
    isDomestic: false,
    img: [
      "https://cdn01.booking.ir/2023/6/b6176703-bb36-4d91-9d94-099f1e6dd224.jpg",
      "https://www.theplazany.com/wp-content/uploads/2021/09/Grand-Luxury-King-Room.jpg",
      "https://www.theplazany.com/wp-content/uploads/2021/09/Palm-Court-Afternoon-Tea.jpg",
    ],
    numbers: 4.7,
    time: "5 شب",
    price: 3500000,
    discount: 10,
    startTour: "1403/12/1",
    endTour: "1403/12/6",
    strength: "2 بزرگسال",
    benefitsItem: [
      { id: 1, benefits: "صبحانه در Palm Court", cont: 150000 },
      { id: 2, benefits: "تور شهری", cont: 250000 },
      { id: 3, benefits: "ترانسفر فرودگاهی", cont: 300000 },
    ],
    benefits: [],
    checkTour: [
      {
        id: 1,
        description:
          "هتل پلازا یکی از نمادهای تاریخی و لوکس نیویورک است که از سال 1907 میزبان شخصیت‌های سرشناس جهانی بوده است. این هتل با معماری بی‌نظیر و موقعیت ممتاز در مرکز منهتن، تجربه‌ای منحصر به فرد از اقامت در نیویورک را ارائه می‌دهد.",
        features: [
          { id: 1, icon: PiPizzaLight, title: "رستوران The Palm Court" },
          { id: 3, icon: IoWifiSharp, title: "وای فای پرسرعت" },
          { id: 4, icon: FiCoffee, title: "چای عصرانه" },
          { id: 5, icon: BsFileMedical, title: "مرکز اسپا" },
        ],
        planDay: [
          {
            id: 1,
            title: "روز اول",
            description:
              "ورود به هتل و استقبال ویژه. گشت و گذار در سنترال پارک و محله پنجم آونو.",
          },
          {
            id: 2,
            title: "روز دوم",
            description:
              "بازدید از موزه متروپولیتن و راکفلر سنتر. چای عصرانه در Palm Court.",
          },
          {
            id: 3,
            title: "روز سوم",
            description:
              "بازدید از مجسمه آزادی و الیس آیلند. شام در رستوران‌های معروف منهتن.",
          },
        ],
      },
    ],
    place: [
      {
        id: 1,
        img: "https://www.theplazany.com/wp-content/uploads/2021/09/Grand-Luxury-King-Room.jpg",
        title: "اتاق گرند لوکس",
        description:
          "اتاق‌های مجلل با طراحی کلاسیک و مبلمان عتیقه، پنجره‌های بلند و سرویس بهداشتی مرمرین.",
      },
      {
        id: 2,
        img: "https://www.theplazany.com/wp-content/uploads/2021/09/Palm-Court-Afternoon-Tea.jpg",
        title: "Palm Court",
        description:
          "سالن معروف چای عصرانه با سقف شیشه‌ای و فضایی رویایی، یکی از نمادهای هتل پلازا.",
      },
      {
        id: 3,
        img: "https://www.theplazany.com/wp-content/uploads/2021/09/The-Plaza-Hotel-Rooftop.jpg",
        title: "تراس روی پشت بام",
        description:
          "تراس خصوصی با نمای پانوراما از سنترال پارک و خط افق منهتن.",
      },
    ],
    lows: {
      general: [
        "پاسپورت و ویزای معتبر الزامی است.",
        "حداقل سن رزرو 21 سال است.",
      ],
      cancellation: [
        "لغو تا 30 روز قبل: بدون جریمه",
        "لغو 14 تا 30 روز قبل: 50% هزینه",
        "لغو کمتر از 14 روز قبل: 100% هزینه",
      ],
      health: [],
      notes: [
        "چک‌این از ساعت 15:00 | چک‌اوت تا 12:00",
        "حیوانات خانگی مجاز نیستند.",
      ],
    },
    hostTour: {
      title: "خدمات هتل پلازا",
      services: [
        "باتلر شخصی",
        "دسترسی به مرکز اسپا",
        "اینترنت پرسرعت",
        "ترانسفر مرسدس بنز",
      ],
      conditions: ["حداقل اقامت 3 شب", "پرداخت 100% در زمان رزرو"],
    },
    comment: [
      {
        id: 1,
        userName: "@sara_nyc",
        image: "/images/users/sara3.jpg",
        description:
          "تجربه اقامت در یک هتل تاریخی واقعاً بی‌نظیر بود. چای عصرانه در Palm Court رو هرگز فراموش نمی‌کنم!",
        date: "1402/03/05",
      },
      {
        id: 2,
        userName: "@amir_usa",
        image: "/images/users/amir2.jpg",
        description:
          "موقعیت هتل عالیه. دقیقاً روبروی سنترال پارک و نزدیک به همه جاذبه‌های اصلی. خدمات هم در سطح بالایی بود.",
        date: "1402/04/15",
      },
    ],
  },

  // نمونه هفتم: هتل بایان تری استانبول
  {
    id: 7,
    title: "هتل بایان تری استانبول",
    contry: "ترکیه",
    categoryTour: "اقامت لوکس",
    isDomestic: false,
    img: [
      "https://cdn01.booking.ir/2023/6/b6176703-bb36-4d91-9d94-099f1e6dd224.jpg",
      "https://www.bayantree.com/content/dam/bayantree/hotels/turkey/istanbul/bayan-tree-istanbul/accommodation/one-bedroom-suite/one-bedroom-suite-living-area.jpg",
      "https://www.bayantree.com/content/dam/bayantree/hotels/turkey/istanbul/bayan-tree-istanbul/dining/rooftop-restaurant/rooftop-restaurant-terrace.jpg",
    ],
    numbers: 4.8,
    time: "4 شب",
    price: 1800000,
    discount: 12,
    startTour: "1403/12/10",
    endTour: "1403/12/14",
    strength: "2 بزرگسال",
    benefitsItem: [
      { id: 1, benefits: "صبحانه بوفه", cont: 120000 },
      { id: 2, benefits: "اسپا", cont: 280000 },
      { id: 3, benefits: "ترانسفر فرودگاهی", cont: 200000 },
    ],
    benefits: [],
    checkTour: [
      {
        id: 1,
        description:
          "هتل بایان تری در منطقه بشیکتاش استانبول، با معماری مدرن و امکانات لوکس، یکی از بهترین انتخاب‌ها برای مسافران نازک‌بین است. این هتل با نمای پانوراما از تنگه بسفر، اقامتی به یاد ماندنی را ارائه می‌دهد.",
        features: [
          { id: 1, icon: PiPizzaLight, title: "رستوران روی پشت بام" },
          { id: 3, icon: IoWifiSharp, title: "وای فای پرسرعت" },
          { id: 4, icon: FiCoffee, title: "کافه‌تریا" },
          { id: 5, icon: BsFileMedical, title: "مرکز اسپا" },
        ],
        planDay: [
          {
            id: 1,
            title: "روز اول",
            description:
              "ورود به هتل و استقبال. گشت و گذار در منطقه اورتاکوی و بازدید از مسجد اورتاکوی.",
          },
          {
            id: 2,
            title: "روز دوم",
            description:
              "قایق‌سواری در تنگه بسفر و بازدید از کاخ دلما باغچه. شام در رستوران روی پشت بام هتل.",
          },
          {
            id: 3,
            title: "روز سوم",
            description:
              "بازدید از میدان تکسیم و خیابان استقلال. تجربه اسپای لوکس هتل.",
          },
        ],
      },
    ],
    place: [
      {
        id: 1,
        img: "https://www.bayantree.com/content/dam/bayantree/hotels/turkey/istanbul/bayan-tree-istanbul/accommodation/one-bedroom-suite/one-bedroom-suite-living-area.jpg",
        title: "سوئیت یک خوابه",
        description:
          "سوئیت‌های دلباز با طراحی مدرن و نمای پانوراما از تنگه بسفر، دارای آشپزخانه مجهز.",
      },
      {
        id: 2,
        img: "https://www.bayantree.com/content/dam/bayantree/hotels/turkey/istanbul/bayan-tree-istanbul/dining/rooftop-restaurant/rooftop-restaurant-terrace.jpg",
        title: "رستوران روی پشت بام",
        description:
          "رستوران با منظره خیره‌کننده از تنگه بسفر و پل بسفر، ارائه‌دهنده منوی بین‌المللی و ترکی.",
      },
      {
        id: 3,
        img: "https://www.bayantree.com/content/dam/bayantree/hotels/turkey/istanbul/bayan-tree-istanbul/wellness/spa/spa-treatment-room.jpg",
        title: "اسپای بایان تری",
        description:
          "مرکز اسپا با خدمات درمانی و آرامش‌بخش در محیطی کاملاً لوکس و آرام.",
      },
    ],
    lows: {
      general: ["پاسپورت معتبر الزامی است."],
      cancellation: [
        "لغو تا 14 روز قبل: بدون جریمه",
        "لغو 7 تا 14 روز قبل: 30% هزینه",
        "لغو کمتر از 7 روز قبل: 50% هزینه",
      ],
      health: ["استفاده از اسپا نیاز به رزرو قبلی دارد."],
      notes: ["چک‌این از ساعت 15:00 | چک‌اوت تا 12:00"],
    },
    hostTour: {
      title: "خدمات هتل بایان تری",
      services: [
        "دسترسی به استخر و سالن ورزشی",
        "اینترنت پرسرعت",
        "ترانسفر فرودگاهی",
      ],
      conditions: ["حداقل اقامت 2 شب", "پرداخت 50% پیش‌پرداخت"],
    },
    comment: [
      {
        id: 1,
        userName: "@nima_istanbul",
        image: "/images/users/nima.jpg",
        description:
          "منظره تنگه بسفر از اتاق واقعاً خیره‌کننده بود. هتل موقعیت عالی داره و خدماتش هم در سطح بالاییه.",
        date: "1402/02/20",
      },
      {
        id: 2,
        userName: "@shima_luxury",
        image: "/images/users/shima.jpg",
        description:
          "اسپای هتل یکی از بهترین تجربه‌های ماساژ من بود. رستوران روی پشت بام هم عصرهای فوق‌العاده‌ای رو ایجاد می‌کنه.",
        date: "1402/03/15",
      },
    ],
  },

  // نمونه هشتم: هتل آتلانتیس دبی
  {
    id: 8,
    title: "هتل آتلانتیس دبی",
    contry: "امارات متحده عربی",
    categoryTour: "اقامت تفریحی",
    isDomestic: false,
    img: [
      "https://cdn01.booking.ir/2023/6/b6176703-bb36-4d91-9d94-099f1e6dd224.jpg",
      "https://www.atlantis.com/content/dam/atlantis/dubai/atlantis-the-palm/accommodation/underwater-suite/underwater-suite-living-area.jpg",
      "https://www.atlantis.com/content/dam/atlantis/dubai/atlantis-the-palm/dining/bread-street-kitchen/bread-street-kitchen-interior.jpg",
    ],
    numbers: 4.7,
    time: "4 شب",
    price: 2200000,
    discount: 15,
    startTour: "1404/1/1",
    endTour: "1404/1/5",
    strength: "2 بزرگسال, 1 کودک",
    benefitsItem: [
      { id: 1, benefits: "ورود رایگان به آکواونچر", cont: 300000 },
      { id: 2, benefits: "صبحانه بوفه", cont: 150000 },
      { id: 3, benefits: "ترانسفر فرودگاهی", cont: 200000 },
    ],
    benefits: [],
    checkTour: [
      {
        id: 1,
        description:
          "هتل آتلانتیس دبی در جزیره نخل جمیرا، یکی از معروف‌ترین هتل‌های تفریحی جهان است. این مجموعه شامل پارک آبی آکواونچر، آکواریوم عظیم و سواحل خصوصی می‌شود که آن را به مقصدی ایده‌آل برای خانواده‌ها تبدیل کرده است.",
        features: [
          { id: 1, icon: PiPizzaLight, title: "رستوران نوبو" },
          { id: 3, icon: IoWifiSharp, title: "وای فای پرسرعت" },
          { id: 4, icon: FiCoffee, title: "کافه‌تریا" },
          { id: 5, icon: BsFileMedical, title: "مرکز اسپا" },
        ],
        planDay: [
          {
            id: 1,
            title: "روز اول",
            description:
              "ورود به هتل و استقبال. گشت و گذار در محوطه هتل و آکواریوم Lost Chambers.",
          },
          {
            id: 2,
            title: "روز دوم",
            description:
              "بازدید از پارک آبی آکواونچر و تجربه سرسره‌های مهیج. شام در رستوران نوبو.",
          },
          {
            id: 3,
            title: "روز سوم",
            description:
              "استراحت در ساحل خصوصی هتل و استفاده از امکانات آبی. عصرها بازدید از دبی مال.",
          },
        ],
      },
    ],
    place: [
      {
        id: 1,
        img: "https://www.atlantis.com/content/dam/atlantis/dubai/atlantis-the-palm/accommodation/underwater-suite/underwater-suite-living-area.jpg",
        title: "سوئیت زیرآبی",
        description:
          "سوئیت‌های منحصر به فرد با دیوارهای شیشه‌ای که نمای بی‌نظیری از زندگی دریایی آکواریوم هتل ارائه می‌دهند.",
      },
      {
        id: 2,
        img: "https://www.atlantis.com/content/dam/atlantis/dubai/atlantis-the-palm/attractions/aquaventure/aquaventure-waterpark.jpg",
        title: "پارک آبی آکواونچر",
        description:
          "یکی از بزرگ‌ترین پارک‌های آبی جهان با سرسره‌های مهیج و رودخانه‌های خروشان.",
      },
      {
        id: 3,
        img: "https://www.atlantis.com/content/dam/atlantis/dubai/atlantis-the-palm/dining/bread-street-kitchen/bread-street-kitchen-interior.jpg",
        title: "رستوران برد استریت",
        description:
          "رستوران تحت مدیریت سرآشپه مشهور گوردون رمزی با منوی بین‌المللی.",
      },
    ],
    lows: {
      general: ["پاسپورت معتبر الزامی است.", "حداقل سن رزرو 21 سال است."],
      cancellation: [
        "لغو تا 21 روز قبل: بدون جریمه",
        "لغو 7 تا 21 روز قبل: 50% هزینه",
        "لغو کمتر از 7 روز قبل: 100% هزینه",
      ],
      health: ["برخی از سرسره‌های آکواونچر برای کودکان محدودیت قدی دارند."],
      notes: [
        "چک‌این از ساعت 15:00 | چک‌اوت تا 12:00",
        "حیوانات خانگی مجاز نیستند.",
      ],
    },
    hostTour: {
      title: "خدمات هتل آتلانتیس",
      services: [
        "ورود رایگان به آکواونچر",
        "دسترسی به آکواریوم Lost Chambers",
        "اینترنت پرسرعت",
        "ترانسفر فرودگاهی",
      ],
      conditions: ["حداقل اقامت 3 شب", "پرداخت 50% پیش‌پرداخت"],
    },
    comment: [
      {
        id: 1,
        userName: "@hamed_family",
        image: "/images/users/hamed2.jpg",
        description:
          "بهترین هتل برای خانواده‌ها! بچه‌ها عاشق پارک آبی شدن و ما از سوئیت و خدمات هتل راضی بودیم.",
        date: "1402/01/10",
      },
      {
        id: 2,
        userName: "@sara_adventure",
        image: "/images/users/sara4.jpg",
        description:
          "سرسره‌های آکواونچر واقعاً هیجان‌انگیز بودند. سوئیت زیرآبی هم تجربه‌ای منحصر به فرد بود که ارزشش رو داشت.",
        date: "1402/02/15",
      },
    ],
  },

  // نمونه نهم: هتل شیانگ لا شیراز
  {
    id: 9,
    title: "هتل شیانگ لا شیراز",
    contry: "ایران",
    categoryTour: "اقامت لوکس",
    isDomestic: true,
    img: [
      "https://cdn01.booking.ir/2023/6/b6176703-bb36-4d91-9d94-099f1e6dd224.jpg",
      "https://www.xianglahotels.com/content/dam/xiangla/hotels/iran/shiraz/xiang-la-shiraz/accommodation/deluxe-room/deluxe-room-living-area.jpg",
      "https://www.xianglahotels.com/content/dam/xiangla/hotels/iran/shiraz/xiang-la-shiraz/dining/persian-restaurant/persian-restaurant-interior.jpg",
    ],
    numbers: 4.5,
    time: "3 شب",
    price: 1200000,
    discount: 20,
    startTour: "1404/2/1",
    endTour: "1404/2/4",
    strength: "2 بزرگسال",
    benefitsItem: [
      { id: 1, benefits: "صبحانه بوفه", cont: 100000 },
      { id: 2, benefits: "ماساژ", cont: 200000 },
      { id: 3, benefits: "ترانسفر فرودگاهی", cont: 150000 },
    ],
    benefits: [],
    checkTour: [
      {
        id: 1,
        description:
          "هتل شیانگ لا شیراز با ترکیبی از معماری مدرن و عناصر سنتی ایرانی، یکی از بهترین هتل‌های ۵ ستاره ایران محسوب می‌شود. این هتل با موقعیت عالی نزدیک به جاذبه‌های تاریخی شیراز، اقامتی لوکس و به یاد ماندنی را ارائه می‌دهد.",
        features: [
          { id: 1, icon: PiPizzaLight, title: "رستوران ایرانی" },
          { id: 3, icon: IoWifiSharp, title: "وای فای پرسرعت" },
          { id: 4, icon: FiCoffee, title: "کافه سنتی" },
          { id: 5, icon: BsFileMedical, title: "مرکز اسپا" },
        ],
        planDay: [
          {
            id: 1,
            title: "روز اول",
            description:
              "ورود به هتل و استقبال. بازدید از حافظیه و سعدیه در هوای خنک عصرگاهی شیراز.",
          },
          {
            id: 2,
            title: "روز دوم",
            description:
              "بازدید از تخت جمشید و پاسارگاد. شام در رستوران ایرانی هتل با موسیقی زنده.",
          },
          {
            id: 3,
            title: "روز سوم",
            description:
              "بازدید از باغ ارم و نارنجستان قوام. تجربه اسپای سنتی هتل.",
          },
        ],
      },
    ],
    place: [
      {
        id: 1,
        img: "https://www.xianglahotels.com/content/dam/xiangla/hotels/iran/shiraz/xiang-la-shiraz/accommodation/deluxe-room/deluxe-room-living-area.jpg",
        title: "اتاق دلکسه",
        description:
          "اتاق‌های دلباز با طراحی ترکیبی از مدرن و سنتی، پنجره‌های بزرگ با نمای باغ یا شهر.",
      },
      {
        id: 2,
        img: "https://www.xianglahotels.com/content/dam/xiangla/hotels/iran/shiraz/xiang-la-shiraz/dining/persian-restaurant/persian-restaurant-interior.jpg",
        title: "رستوران ایرانی",
        description:
          "رستوران با منوی اصیل شیرازی و فضایی سنتی با معماری ایرانی و موسیقی زنده.",
      },
      {
        id: 3,
        img: "https://www.xianglahotels.com/content/dam/xiangla/hotels/iran/shiraz/xiang-la-shiraz/wellness/spa/spa-treatment-room.jpg",
        title: "اسپای سنتی",
        description:
          "مرکز اسپا با خدمات ماساژ سنتی ایرانی و حمام سنتی (حمام شیخ بهایی).",
      },
    ],
    lows: {
      general: ["کارت شناسایی معتبر الزامی است."],
      cancellation: [
        "لغو تا 7 روز قبل: بدون جریمه",
        "لغو 3 تا 7 روز قبل: 30% هزینه",
        "لغو کمتر از 3 روز قبل: 50% هزینه",
      ],
      health: [],
      notes: ["چک‌این از ساعت 14:00 | چک‌اوت تا 12:00"],
    },
    hostTour: {
      title: "خدمات هتل شیانگ لا",
      services: [
        "راهنمای گردشگری",
        "دسترسی به استخر و سالن ورزشی",
        "اینترنت پرسرعت",
        "پارکینگ رایگان",
      ],
      conditions: ["حداقل اقامت 2 شب", "پرداخت 30% پیش‌پرداخت"],
    },
    comment: [
      {
        id: 1,
        userName: "@ali_shiraz",
        image: "/images/users/ali3.jpg",
        description:
          "هتل موقعیت عالی داره و نزدیک به همه جاذبه‌های اصلی شیرازه. خدماتش هم در سطح استانداردهای بین‌المللی بود.",
        date: "1401/12/05",
      },
      {
        id: 2,
        userName: "@narges_culture",
        image: "/images/users/narges2.jpg",
        description:
          "رستوران ایرانی هتل واقعاً عالی بود. غذاهای اصیل شیرازی رو با کیفیت بالا سرو می‌کنن. معماری هتل هم ترکیب جالبی از مدرن و سنتیه.",
        date: "1402/01/20",
      },
    ],
  },

  // نمونه دهم: هتل فرمانیه تهران
  {
    id: 10,
    title: "هتل فرمانیه تهران",
    contry: "ایران",
    categoryTour: "اقامت لوکس",
    isDomestic: true,
    img: [
      "https://cdn01.booking.ir/2023/6/b6176703-bb36-4d91-9d94-099f1e6dd224.jpg",
      "https://www.fermanihotel.com/content/dam/fermani/tehran/fermani-hotel-tehran/accommodation/superior-room/superior-room-living-area.jpg",
      "https://www.fermanihotel.com/content/dam/fermani/tehran/fermani-hotel-tehran/dining/rooftop-restaurant/rooftop-restaurant-terrace.jpg",
    ],
    numbers: 4.4,
    time: "2 شب",
    price: 950000,
    discount: 10,
    startTour: "1404/2/15",
    endTour: "1404/2/17",
    strength: "2 بزرگسال",
    benefitsItem: [
      { id: 1, benefits: "صبحانه بوفه", cont: 80000 },
      { id: 2, benefits: "پارکینگ رایگان", cont: 50000 },
    ],
    benefits: [],
    checkTour: [
      {
        id: 1,
        description:
          "هتل فرمانیه در منطقه اعیانی فرمانیه تهران، با معماری مدرن و امکانات لوکس، یکی از بهترین انتخاب‌ها برای اقامت در پایتخت است. این هتل با فاصله کم از مراکز تجاری و دیدنی تهران، دسترسی آسان به تمام نقاط شهر را فراهم می‌کند.",
        features: [
          { id: 1, icon: PiPizzaLight, title: "رستوران روی پشت بام" },
          { id: 3, icon: IoWifiSharp, title: "وای فای پرسرعت" },
          { id: 4, icon: FiCoffee, title: "کافه‌تریا" },
        ],
        planDay: [
          {
            id: 1,
            title: "روز اول",
            description:
              "ورود به هتل و استقبال. بازدید از برج میلاد و خرید از مراکز تجاری اطراف.",
          },
          {
            id: 2,
            title: "روز دوم",
            description:
              "بازدید از کاخ سعدآباد و مجموعه نیاوران. شام در رستوران روی پشت بام هتل با نمای شهر.",
          },
        ],
      },
    ],
    place: [
      {
        id: 1,
        img: "https://www.fermanihotel.com/content/dam/fermani/tehran/fermani-hotel-tehran/accommodation/superior-room/superior-room-living-area.jpg",
        title: "اتاق سوپریور",
        description:
          "اتاق‌های مدرن و دلباز با امکانات کامل، مناسب برای اقامت‌های کاری و تفریحی.",
      },
      {
        id: 2,
        img: "https://www.fermanihotel.com/content/dam/fermani/tehran/fermani-hotel-tehran/dining/rooftop-restaurant/rooftop-restaurant-terrace.jpg",
        title: "رستوران روی پشت بام",
        description:
          "رستوران با منظره پانوراما از شهر تهران و منوی بین‌المللی و ایرانی.",
      },
      {
        id: 3,
        img: "https://www.fermanihotel.com/content/dam/fermani/tehran/fermani-hotel-tehran/wellness/fitness-center/fitness-center.jpg",
        title: "سالن ورزشی",
        description:
          "سالن ورزشی مجهز با جدیدترین دستگاه‌های بدنسازی و مربی اختصاصی.",
      },
    ],
    lows: {
      general: ["کارت شناسایی معتبر الزامی است."],
      cancellation: [
        "لغو تا 3 روز قبل: بدون جریمه",
        "لغو 1 تا 3 روز قبل: 30% هزینه",
        "لغو کمتر از 24 ساعت قبل: 50% هزینه",
      ],
      health: [],
      notes: ["چک‌این از ساعت 14:00 | چک‌اوت تا 12:00"],
    },
    hostTour: {
      title: "خدمات هتل فرمانیه",
      services: ["دسترسی به سالن ورزشی", "اینترنت پرسرعت", "پارکینگ رایگان"],
      conditions: ["حداقل اقامت 1 شب", "پرداخت 30% پیش‌پرداخت"],
    },
    comment: [
      {
        id: 1,
        userName: "@reza_tehran",
        image: "/images/users/reza2.jpg",
        description:
          "هتل برای اقامت‌های کاری عالیه. موقعیتش در منطقه فرمانیه خیلی خوبه و دسترسی به مراکز تجاری اصلی راحته.",
        date: "1401/11/10",
      },
      {
        id: 2,
        userName: "@fatima_business",
        image: "/images/users/fatima2.jpg",
        description:
          "اتاق‌ها تمیز و مرتب بودند. اینترنت هتل سرعت خوبی داشت که برای کارم خیلی مهم بود. رستوران روی پشت بام هم دید خوبی به شهر داره.",
        date: "1402/01/05",
      },
    ],
  },
];

export const travelInsuranceData: TravelInsuranceData = {
  mainBanner: {
    title: "بیمه مسافرتی سامان، همراه همسفران سفر کن",
    description:
      "همسفران سفر کن می‌توانند در سفرهای خود از بیمه مسافرتی سامان استفاده کنند. بیمه مسافرتی سامان هزینه‌های فوریت‌های پزشکی و دندان‌پزشکی، هزینه‌های ناشی از مفقودی چمدان و هزینه خسارات ناشی از کنسلی رویدادهای جهانی (هنری، ورزشی، تجاری و...) را جبران می‌کند. همچنین این بیمه به انتخاب شما می‌تواند جبران سرقت و حوادث منزل در طول سفر را هم به عهده‌ بگیرد.",
    image: "/image/travel-insurance/insurance-homepage-airplane-05b2e311.png",
  },
  services: {
    title: "خدمات بیمه سامان",
    description:
      "بیمه مسافرتی سامان در تلاش است تا با ارائه خدمات کاربردی قوت‌قلبی برای شما در طول سفر باشد",
    coverages: [
      {
        title: "پوشش جهانی خدمات درمانی",
        description: "قرارداد با بیش از ۵۵ هزار مرکز درمانی در سراسر دنیا",
        icon: "/image/travel-insurance/globe-logo-8670c22c.svg",
      },
      {
        title: "بالاترین نرخ پوشش بیمه",
        description: "بیشترین سقف پوشش تا ۷۰ هزار یورو",
        icon: "/image/travel-insurance/coverage-logo-897d1add.svg",
      },
      {
        title: "خدمات پشتیبانی",
        description: "دارای خدمات و پشتیبانی ۲۴ ساعته",
        icon: "/image/travel-insurance/contact-logo-27c5fffd.svg",
      },
    ],
  },
  whatIsInsurance: {
    title: "بیمه مسافرتی چیست؟",
    description: `حادثه خبر نمی‌کند!
هر جا این جمله معروف را بشنویم یاد بیمه می‌افتیم. حقیقتا هم همینطور است. در واقع بیمه راهی است برای جبران خسارت‌های احتمالی. بیمه مسافرتی هم درست مثل همه بیمه‌های عمر و ماشین و آتش‌سوزی و... دقیقا با همین ماموریت تعریف می‌شود و در اختیار مسافران قرار می‌گیرد؛ بیمه‌ای که قرار است با جبران خسارات احتمالی در سفر برای مسافران، مایه آرامش باشد.تصور کنید در سفر و در شرایطی که کیلومترها دور از خانه هستید، خدای نکرده اتفاق خاصی برای شما بیفتد؛ مثلا نیاز فوری به دندان‌پزشکی پیدا کنید یا خدای نکرده بیماری خاصی در سفر برایتان اتفاق بیفتد که نیاز به ویزیت پزشک یا مراجعه به بیمارستان داشته باشید. بیمه مسافرتی طراحی شده تا خسارت‌های مسافر را در صورت بروز چنین اتفاقاتی تا حد زیادی جبران کند.
البته نکته مهم درباره همه بیمه‌ها از جمله بیمه‌های مسافرتی این است که شرکت‌های بیمه‌گذار براساس چند فاکتور مختلف ممکن است خدمات متفاوتی به مسافر بدهند که هر کدام از این خدمات هم سقف و محدوده خدمات متفاوتی دارد. بر همین اساس، قیمت هر بیمه مسافرتی هم با دیگری متفاوت است. در ادامه و در همین صفحه درباره این شرایط بیشتر صحبت کرده‌ایم.مهم است که هنگام خرید بیمه مسافرتی به بندهای قرارداد توجه کنید و آن بیمه‌ای را انتخاب کنید که بیشتر از همه با شرایط و خواسته‌های شما جور است. اینکه چه‌جور سفری می‌روید، در انتخاب بیمه مسافرتی مناسب تاثیر دارد؛ مثلا در سفرهای خارجی بهتر است بیمه‌هایی را انتخاب کنید که روی خدمات بیشتری تمرکز دارند.خرید بیمه مسافرتی برای سفر به کشورهایی که نیاز به این بیمه ندارند هم مقرون‌به‌صرفه تمام می‌شود، چون شما در ازای پرداخت حق بیمه بسیار مناسب، خدمات قابل توجهی در حوزه بیمه دریافت خواهید کرد.شرکت‌های بیمه‌گذار با توجه به شرایط شما، می‌توانند بهترین نوع بیمه مسافرتی را به شما معرفی کنند. بنابراین نیازی نیست نگران چگونگی انتخاب نوع بیمه مسافرتی باشید.در ادامه این مطلب، درباره راه‌های خرید بیمه مسافرتی به شکلی مطمئن، قیمت بیمه مسافرتی، سقف بیمه مسافرتی و پوشش انواع خدمات صبحت کرده‌ایم و به پرسش‌های پرتکرار شما درباره بیمه مسافرتی پاسخ داده‌ایم.`,
    image: "/image/travel-insurance/Untitled-1.png",
    split: function (): unknown {
      throw new Error("Function not implemented.");
    },
  },
  purchaseInfo: {
    title: "خرید بیمه مسافرتی",
    description:
      "خرید بیمه مسافرتی برای بسیاری از سفرها اجباری نیست و این حق انتخاب برای مسافر وجود دارد که در سفرهایش بیمه بگیرد یا خیر؛ اما نکته‌ای که مسافران سفرهای خارجی باید در نظر داشته باشند این است که گرفتن بیمه مسافرتی برای بسیاری از کشورهای خارجی (گرفتن ویزا، مخصوصا شینگن) ضروری است که حتما باید آن بیمه را از یک شرکت معتبر بیمه مسافرتی دریافت کرده باشید. برای خرید بیمه مسافرتی، لازم است که قبل از سفر به یک شرکت بیمه که خدمات بیمه مسافرتی ارائه می‌کند مراجعه کنید یا با سفر کن ارتباط بگیرید. اگر همسفر سفر کن باشید، خرید بیمه مسافرتی سامان از سفر کن، کار به‌صرفه‌تر و سریع‌تری است؛ چرا که بدون دردسر و با پشتیبانی 24 ساعته سفر کن در هفت روز هفته، می‌توانید به‌سرعت بیمه متناسب با شرایطتان را پیدا و خریداری کنید.",
    image: "/image/travel-insurance/Made with insMind-Untitled design.png",
    coverages: [
      { title: "دندان‌پزشکی", icon: FaTooth },
      { title: "فوریت‌ پزشکی", icon: FaMedkit },
      { title: "بیمه اموال", icon: FaShieldAlt },
      {
        title: "مفقودی چمدان",
        subText: "در صورت تحویل به بار هواپیما",
        icon: FaSuitcase,
      },
      { title: "مشاور حقوقی", icon: FaBalanceScale },
      { title: "اورژانس هوایی", icon: FaPlane },
      { title: "وقفه سفر", icon: FaClock },
      {
        title: "کنسلی سفر",
        subText: "هزینه بازگشت غیرمنتظره",
        icon: FaTimesCircle,
      },
    ],
    note: "کنسلی سفر (به این شکل که هزینه بازگشت غیرمنتظره بیمه‌شده به‌دلیل مسائل حاد پزشکی و یا فوت بستگان درجه یک یا بلافصل پرداخت می‌شود با این شرط که فرد نتواند از بلیط قبلی خودش برای بازگشت استفاده کند.)",
  },
  pricingFactors: {
    title: "قیمت بیمه مسافرتی",
    description:
      "به‌طور کلی قیمت بیمه مسافرتی بر اساس این سه عامل محاسبه می‌شود:",
    factors: [
      {
        title: "سن مسافر",
        description:
          "به این معنا که هر چه مسافر سن بیشتری داشته باشد، قیمت بیمه مسافرتی او بیشتر می‌شود.",
        image: "/image/travel-insurance/insurance-people-image-0a0ef110.svg",
      },
      {
        title: "مدت سفر",
        description:
          "یعنی اگر مسافر مدت بیشتری در مقصد اقامت کند، باید هزینه بیشتری پرداخت کند.",
        image: "/image/travel-insurance/insurance-time-image-4c4f16e0.svg",
      },
      {
        title: "مقصد سفر",
        description:
          "منطقه جغرافیایی مقصد سفر شما در قیمت بیمه مسافرتی موثر است؛ به‌عنوان مثال کشورهای آمریکا و کانادا گران‌ترین نرخ بیمه مسافرتی به شمار می‌آیند.",
        image: "/image/travel-insurance/insurance-location-image-c8c45af9.svg",
      },
    ],
  },
  calculationMethod: {
    title: "نحوه محاسبه مبلغ بیمه مسافرتی",
    description:
      "با توجه به جدول زیر، سه عامل سن مسافر، مدت و مقصد سفر به طبقات مختلف تقسیم شده‌اند تا طبق فرمول مشخصی، تعیین قیمت بیمه مسافرتی انجام شود:",
    table: {
      headers: [
        "عوامل موثر در تعیین قیمت بیمه مسافرتی",
        "نحوه محاسبه در فرمول تعیین حق بیمه",
      ],
      rows: [
        {
          factor: "سن مسافر",
          calculation:
            "تا ۱۲ سال    •    ۱۳ تا ۶۵ سال    •    ۶۶ تا ۷۰ سال    •    ۷۱ تا ۷۵ سال    •    ۷۶ تا ۸۰ سال    •    ۸۰ سال به بالا\n(البته خیلی از شرکت‌های بیمه ممکن است به افراد بالای ۸۰ یا ۸۵ سال، بیمه مسافرتی ارائه نکنند.)",
        },
        {
          factor: "مدت سفر",
          calculation:
            "۱ تا ۷ روز    •    ۸ تا ۱۵ روز    •    ۱۶ تا ۲۳ روز    •    ۲۴ تا ۳۱ روز    •    ۳۲ تا ۴۵ روز\n۶۳ تا ۹۲ روز    •    ۶ ماهه    •    ۱ ساله",
        },
        {
          factor: "مقصد سفر",
          calculation: "بر اساس مناطق جغرافیایی مختلف",
        },
      ],
    },
    note: "البته توجه داشته باشید که این تقسیم‌بندی بازه‌های سنی در تمام طرح‌های بیمه یکسان نیست و ممکن است طرح‌ها در این تقسیم‌بندی سنی با هم متفاوت باشند. سطح پوشش بیمه و عوامل دیگر هم در تعیین قیمت نهایی بی‌تاثیر نخواهد بود. مثلا برای سفر به برخی مقصدها، امکان پوشش مالی هم برای بیمه‌شده وجود خواهد داشت که این عامل قیمت بیمه مسافرتی را افزایش خواهد داد. در صورت درخواست پوشش کرونا، مبلغ نهایی مجددا افزایش پیدا می‌کند. در مورد اعتبار بیمه‌های مسافرتی یک نکته بسیار مهم وجود دارد؛ اینکه اعتبار زمانی بیمه مسافرتی ۹۲ روز (به‌صورت متوالی) در نظر گرفته شده است؛ یعنی حتی اگر بیمه شما یک ساله باشد، به‌طور متوالی تا ۹۲ روز تحت پوشش بیمه خواهید بود. اگر در مدت اعتبار بیمه (مثلا یک سال) به دفعات از کشور خارج و به آن وارد شوید، در تمام دفعات سفر به شرطی که هر سفر کمتر از ۹۲ روز طول بکشد، تحت پوشش بیمه خواهید بود.",
  },
  faqs: {
    title: "پرسش‌های پرتکرار",
    items: [
      {
        question: "بیمه مسافرتی چیست؟",
        answer:
          "بیمه مسافرتی، نوعی از بیمه است که می‌تواند خسارات احتمالی پیش‌آمده در سفر را تا حد زیادی جبران کند. شرکت‌های بیمه انواع مختلفی بیمه مسافرتی را برای مسافران تدارک دیده‌اند تا در شرایط اضطراری، آرامش را برای مسافران به ارمغان بیاورد.",
      },
      {
        question: "مزایای بیمه مسافرتی چیست؟",
        answer:
          "با داشتن بیمه مسافرتی دیگر نگران خسارات احتمالی نیستید؛ مثلا اگر بار شما (در صورت تحویل به هواپیما) گم شود یا نیاز به ویزیت پزشک داشته باشید، بیمه مسافرتی تا حد زیادی خسارات ناشی از این اتفاقات را پوشش می‌دهد.",
      },
      {
        question: "آیا داشتن بیمه مسافرتی الزامی است؟",
        answer:
          "بیمه مسافرتی برای سفر به برخی کشورها و مناطق الزامی است. حتی برای اخذ ویزای کشورهای مختلف مثل ویزای دانشجویی یا ویزای شینگن، حتما باید بیمه مسافرتی داشته باشید.",
      },
      {
        question: "چگونه بیمه مسافرتی بخریم؟",
        answer:
          "برای خرید بیمه مسافرتی می توانید به صفحه درخواست بیمه مسافرتی سفر کن بروید و یا با مرکز پشتیبانی سفر کن تماس بگیرید. سفر کن برای همسفرانش، در سریع‌ترین زمان ممکن قبل از سفر، با قیمت مناسب، بیمه مسافرتی سامان را تهیه می‌کند.",
      },
      {
        question: "برای سفر به کدام کشورها بیمه مسافرتی لازم است؟",
        answer:
          "به‌طور کلی برای اخذ ویزای کشورهای مختلف ممکن است به بیمه مسافرتی نیاز داشته باشید. به‌عنوان مثال، داشتن بیمه مسافرتی برای سفر به کشورهای حوزه شینگن الزامی است. هر سفارت‌خانه هنگام اخذ ویزا و تکمیل مدارک، لزوم داشتن بیمه مسافرتی را به شما گوشزد خواهد کرد.",
      },
      {
        question:
          "با داشتن بیمه مسافرتی هنگام بروز حادثه در سفر چه اقدامی باید انجام دهم؟",
        answer:
          "به‌سرعت با شرکت کمک‌رسان (شرکت واسط در کشور مقصد) تماس بگیرید و شرایط را عنوان کنید. راه‌های ارتباطی با شرکت کمک‌رسان روی بیمه‌نامه شما نوشته شده است.",
      },
      {
        question: "منظور از پوشش در بیمه مسافرتی چیست؟",
        answer:
          "به خدماتی که در بیمه مسافرتی به بیمه‌شده ارائه می‌شود، «پوشش بیمه مسافرتی» گفته می‌شود. این خدمات می‌توانند از مفقودی مدارک و بار تا هزینه‌های پزشکی و حقوقی را شامل شوند.",
      },
      {
        question: "نداشتن بیمه مسافرتی چه خطراتی دارد؟",
        answer:
          "در مرحله اول باید بدانید که برای سفر به بسیاری از کشورها، داشتن بیمه مسافرتی الزامی است. در سفرهایی که داشتن بیمه مسافرتی ضروری نیست هم بهتر است بیمه مسافرتی داشته باشید. مثلا اگر بیمه مسافرتی نداشته باشید در صورت بیماری، نمی‌توانید هزینه‌های پزشکی خود را در کشور مقصد پرداخت کنید و مشکلاتی جدی برایتان ایجاد می‌شود. بنابراین داشتن بیمه مسافرتی، تضمین آرامش شما در صورت بروز حوادث در سفر خواهد بود.",
      },
    ],
  },
};
export const travelogues: Travelogue[] = [
  {
    id: 1,
    user: {
      name: "پریسا لطیفیان",
      avatar: "https://randomuser.me/api/portraits/women/65.jpg",
      rank: 2,
    },
    title: "سفر به بهشت ایران، رامسر زیبا",
    destination: ["آسیا", "ایران", "استان مازندران", "رامسر"],
    description:
      "سفر یعنی جمع کردن تکه‌های شادی از هر گوشه‌ی زمین، از صدای امواج دریا گرفته تا عطر جنگل‌های بارون‌زده...",
    image:
      "https://cdn.alibaba.ir/ostorage/alibaba-mag/wp-content/uploads/2019/12/ramsar-attractions-cover.jpg",
    date: "۱۴ مرداد ۱۴۰۴",
    time: "12:00",
    rating: 4.8,
    views: 3555,
    likes: 92,
  },
  {
    id: 2,
    user: {
      name: "علی مرادی",
      avatar: "https://randomuser.me/api/portraits/men/33.jpg",
      rank: 5,
    },
    title: "کشف زیبایی‌های کویر لوت",
    destination: ["آسیا", "ایران", "کرمان", "کویر لوت"],
    description:
      "کویر لوت جایی‌ست که شب‌هایش جادویی و ستاره‌هایش دست‌نیافتنی‌اند...",
    image:
      "https://www.alibaba.ir/mag/wp-content/uploads/2021/12/%DA%A9%D9%88%DB%8C%D8%B1-%D9%84%D9%88%D8%AA-%D8%AF%D9%82%DB%8C%D9%82%D8%A7-%D8%AF%D8%B1-%DA%A9%D8%AF%D8%A7%D9%85-%D8%A7%D8%B3%D8%AA%D8%A7%D9%86-%D8%A7%D8%B3%D8%AA-%D8%AE%D8%A8%D8%B1%DA%AF%D8%B2%D8%A7%D8%B1%DB%8C-%D8%AC%D9%85%D8%A7%D8%B1%D8%A7%D9%86-.jpg",
    date: "۱ مرداد ۱۴۰۴",
    time: "10:30",
    rating: 4.5,
    views: 4100,
    likes: 80,
  },
  {
    id: 3,
    user: {
      name: "مهدیه کریمی",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      rank: 3,
    },
    title: "چالوس؛ در آغوش جنگل و دریا",
    destination: ["آسیا", "ایران", "مازندران", "چالوس"],
    description: "با هر قدم در چالوس، صدای جنگل با امواج دریا آمیخته می‌شد...",
    image:
      "https://www.iranhotelonline.com/blog/wp-content/uploads/2023/05/1683365111_%D8%AF%DB%8C%D8%AF%D9%86%DB%8C-%D9%87%D8%A7%DB%8C-%D8%AC%D8%A7%D8%AF%D9%87-%DA%86%D8%A7%D9%84%D9%88%D8%B3-jpg.webp",
    date: "۷ مرداد ۱۴۰۴",
    time: "14:00",
    rating: 4.7,
    views: 2890,
    likes: 74,
  },
  {
    id: 4,
    user: {
      name: "سینا تهرانی",
      avatar: "https://randomuser.me/api/portraits/men/20.jpg",
      rank: 4,
    },
    title: "شیراز؛ عطر بهارنارنج و شعر",
    destination: ["آسیا", "ایران", "فارس", "شیراز"],
    description:
      "شیراز شهری‌ست که با حافظ آغاز می‌شود و با عطر بهارنارنج تمام...",
    image:
      "https://www.farsosareh.com/files/upload/%D8%AF%D8%B1%D9%88%D8%A7%D8%B2%D9%87%20%D9%82%D8%B1%D8%A2%D9%86.jpg",
    date: "۱۰ مرداد ۱۴۰۴",
    time: "11:15",
    rating: 4.9,
    views: 4780,
    likes: 112,
  },
  {
    id: 5,
    user: {
      name: "الهام رضایی",
      avatar: "https://randomuser.me/api/portraits/women/50.jpg",
      rank: 6,
    },
    title: "کیش، نگین خلیج فارس",
    destination: ["آسیا", "ایران", "هرمزگان", "کیش"],
    description:
      "جزیره‌ای گرم، پر از انرژی و رنگ در دل آب‌های نیلگون خلیج فارس...",
    image:
      "data:image/jpeg;base64,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",
    date: "۵ مرداد ۱۴۰۴",
    time: "16:45",
    rating: 4.4,
    views: 3245,
    likes: 65,
  },
  {
    id: 6,
    user: {
      name: "سجاد عزیزی",
      avatar: "https://randomuser.me/api/portraits/men/52.jpg",
      rank: 7,
    },
    title: "تجربه آرامش در ماسوله",
    destination: ["آسیا", "ایران", "گیلان", "ماسوله"],
    description: "ماسوله مثل رویاهای قدیمی‌ست که زنده شده‌اند...",
    image:
      "https://hamrahtrip.ir/wp-content/uploads/2024/08/%D9%85%D8%A7%D8%B3%D9%88%D9%84%D9%87-780x470.webp",
    date: "۳ مرداد ۱۴۰۴",
    time: "09:00",
    rating: 4.6,
    views: 2700,
    likes: 78,
  },
  {
    id: 7,
    user: {
      name: "نگار شریفی",
      avatar: "https://randomuser.me/api/portraits/women/22.jpg",
      rank: 9,
    },
    title: "سفر به دل تاریخ: اصفهان",
    destination: ["آسیا", "ایران", "اصفهان", "اصفهان"],
    description: "اصفهان نصف جهان است؛ ترکیبی از تاریخ، هنر و معماری اسلامی...",
    image:
      "https://safarmarket.com/blog/data/uploaded_files/425dacd8e1c7fa676e435608.jpg",
    date: "۸ مرداد ۱۴۰۴",
    time: "13:30",
    rating: 5.0,
    views: 5000,
    likes: 140,
  },
  {
    id: 8,
    user: {
      name: "احمد آذری",
      avatar: "https://randomuser.me/api/portraits/men/28.jpg",
      rank: 1,
    },
    title: "سفر به تبریز؛ شهر اولین‌ها",
    destination: ["آسیا", "ایران", "آذربایجان شرقی", "تبریز"],
    description:
      "تبریز هم مدرن است و هم اصیل. شهری با تاریخ کهن و مردم مهمان‌نواز...",
    image:
      "https://titrplus.com/wp-content/uploads/2024/07/images_1720861029_66924165aeddb.png",
    date: "۲ مرداد ۱۴۰۴",
    time: "15:00",
    rating: 4.2,
    views: 2190,
    likes: 55,
  },
  {
    id: 9,
    user: {
      name: "فرزانه کیانی",
      avatar: "https://randomuser.me/api/portraits/women/36.jpg",
      rank: 8,
    },
    title: "سفر به همدان؛ دل در گرو تاریخ",
    destination: ["آسیا", "ایران", "همدان", "همدان"],
    description:
      "آرامگاه بوعلی، غار علیصدر و سرمای دلچسب همدان را از یاد نمی‌برم...",
    image:
      "https://files.virgool.io/upload/users/35226/posts/vihbwgcnjnv2/7jezrqybxc9r.jpeg",
    date: "۶ مرداد ۱۴۰۴",
    time: "18:20",
    rating: 4.3,
    views: 2300,
    likes: 59,
  },
  {
    id: 10,
    user: {
      name: "محمد سلیمانی",
      avatar: "https://randomuser.me/api/portraits/men/42.jpg",
      rank: 10,
    },
    title: "سفر به یزد؛ شهر بادگیرها",
    destination: ["آسیا", "ایران", "یزد", "یزد"],
    description:
      "کوچه‌های کاه‌گلی، بادگیرهای بلند و آفتاب گرم یزد، همگی در ذهنم مانده‌اند...",
    image:
      "https://yazdarghotel.com/wp-content/uploads/2024/04/Sightseeing-places-in-Yazd.jpg",
    date: "۹ مرداد ۱۴۰۴",
    time: "17:00",
    rating: 4.7,
    views: 3420,
    likes: 88,
  },
];

export const dashbordMenu: DashbordMenuProp[] = [
  { id: 1, title: "حساب کاربری", icon: FaUser },
  { id: 2, title: "خرید خودکار", icon: MdPayment },
  { id: 3, title: "سفرهای من", icon: MdCardTravel },
  { id: 4, title: "لیست مسافران", icon: FaUsers },
  { id: 5, title: "علاقه‌مندی‌ها", icon: FaStar },
  { id: 6, title: "درخواست پشتیبانی", icon: BiSupport },
  { id: 6, title: "تیکت ها", icon: MdOutlineLocalPostOffice },
  { id: 7, title: "موجودی و اعتبار من", icon: FaDollarSign },
];

export const heroMeniItem: HeroMeniItem[] = [
  {
    id: 1,
    image: "/image/panel/airplane.png",
    title: "سفر های من",
    name: "مسافرت",
  },
  {
    id: 2,
    image: "/image/panel/questions-empty.png",
    title: "پرسش ها",
    name: "پرسش",
  },
  {
    id: 3,
    image: "/image/panel/tickets-empty.png",
    title: "تیکت ها",
    name: "تیکت",
  },
  {
    id: 4,
    image: "/image/panel/transactions-empty.png",
    title: "کیف پول",
    name: "تومان",
  },
];
