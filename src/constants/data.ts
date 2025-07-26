import type {
  IIconBar,
  dataHeroImgType,
  ProductTour,
  WhyUsTravelData,
  TourProduct,
} from "../types";
import { PiPizzaLight } from "react-icons/pi";
import { IoWifiSharp } from "react-icons/io5";
import { FiCoffee } from "react-icons/fi";
import { BsFileMedical } from "react-icons/bs";

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
    price: 85000000,
    discount: 20,
  },
  {
    id: 2,
    title: "دبی",
    img: "/public/image/place/Dubai .png",
    numbers: 4.9,
    time: "3 روز و 4 شب",
    price: 65000000,
    discount: 0,
  },
  {
    id: 3,
    title: "آنتالیا",
    img: "/public/image/place/antalia.png",
    numbers: 4.1,
    time: "3 روز و 4 شب",
    price: 45000000,
    discount: 0,
  },
];

export const tourProductData: TourProduct[] = [
  {
    id: 1,
    title: "مالزی",
    contry: "مالزی",
    categoryTour: "تور آسیا",
    img: "https://satraa.com/blog/wp-content/uploads/2020/01/Untitled-1-min.jpg",
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
        img: "/images/malaysia/klcc.jpg",
        title: "برج‌های دوقلو پتروناس",
        description:
          "نماد معروف شهر کوالالامپور با معماری خیره‌کننده و چشم‌انداز فوق‌العاده از بالای برج.",
      },
      {
        id: 2,
        img: "/images/malaysia/batu-caves.jpg",
        title: "غارهای باتو",
        description:
          "معبد هندو با ۲۷۲ پله رنگارنگ و مجسمه طلایی عظیم الهه موروگان.",
      },
      {
        id: 3,
        img: "/images/malaysia/langkawi.jpg",
        title: "جزیره لنکاوی",
        description:
          "بهشت استوایی با ساحل‌های بکر، جنگل‌های حرا و تله‌کابین هوایی.",
      },
      {
        id: 4,
        img: "/images/malaysia/genting.jpg",
        title: "تفریحگاه گنتینگ هایلند",
        description: "شهر بازی و کازینو روی ابرها با هوای خنک در ارتفاعات.",
      },
      {
        id: 5,
        img: "/images/malaysia/melaka.jpg",
        title: "شهر تاریخی ملاکا",
        description:
          "ترکیبی از معماری پرتغالی، هلندی و انگلیسی با کانال‌های آبی رنگارنگ.",
      },
      {
        id: 6,
        img: "/images/malaysia/cameron.jpg",
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
    categoryTour: "تور آسیا",
    img: "https://www.investindubai.gov.ae/-/media/gathercontent/poi/b/burj-khalifa/fallback-image/burj-khalifa-det-3.jpg",
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
  },
  {
    id: 3,
    title: "آنتالیا",
    contry: "ترکیه",
    categoryTour: "تور اروپا",
    img: "https://last-cdn.com/2022/07/19/7DSH4MFE8BEGMZ6d1o77g0v71bzfpjmq0X73uxzn.jpg",
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
    img: "https://assets.micontenthub.com/traveloffers/travel-tips/the-blue-mosque-in-istanbul-turkey_uBl9m1ErD.jpg",
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
    img: "https://luxuryproperties.ir/uploads/images/images/Blog/Things%20to%20Do%20in%20Iran/Top%2010%20Historical%20Landmarks%20%26%20Monuments%20in%20Isfahan/1khajoo.jpg",
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
    img: "https://media.digitalnomads.world/wp-content/uploads/2021/01/20120709/bali-for-digital-nomads.jpg",
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
  // {
  //   id: 7,
  //   title: "پاریس",
  //   contry: "فرانسه",
  //   categoryTour: "تور اروپا",
  //   img: "https://res.cloudinary.com/dtljonz0f/image/upload/c_auto,ar_4:3,w_3840,g_auto/f_auto/q_auto/v1/shutterstock_2118458942_ss_non-editorial_jnjpwq?_a=BAVAZGE70",
  //   numbers: 4.9,
  //   time: "5 روز و 4 شب",
  //   price: 120000000,
  //   discount: 0,
  //   startTour: "1403/12/20",
  //   endTour: "1403/12/24",
  //   strength: "2 بزرگ سال",
  //   benefitsItem: [
  //     { id: 1, benefits: "تور رود سن", cont: 300000 },
  //     { id: 2, benefits: "بلیط موزه لوور", cont: 200000 },
  //   ],
  //   benefits: [],
  //   checkTour: [
  //     {
  //       id: 1,
  //       description: "گشت‌وگذار در شهر عشق و تماشای شاهکارهای هنری و معماری",
  //       features: [
  //         { id: 1, icon: PiPizzaLight, title: "صبحانه فرانسوی" },
  //         { id: 2, icon: IoWifiSharp, title: "وای فای پرسرعت" },
  //       ],
  //       planDay: [
  //         {
  //           id: 1,
  //           title: "روز اول",
  //           description: "برج ایفل و شانزلیزه",
  //         },
  //         {
  //           id: 2,
  //           title: "روز دوم",
  //           description: "موزه لوور و نوتردام",
  //         },
  //       ],
  //     },
  //   ],
  //   place: [
  //     {
  //       id: 1,
  //       img: "/images/paris/eiffel.jpg",
  //       title: "برج ایفل",
  //       description: "نماد پاریس با چشم‌انداز پانوراما از شهر",
  //     },
  //     {
  //       id: 2,
  //       img: "/images/paris/louvre.jpg",
  //       title: "موزه لوور",
  //       description: "خانه مونالیزا و هزاران اثر هنری ارزشمند",
  //     },
  //   ],
  //   lows: {
  //     general: ["پاسپورت با حداقل 6 ماه اعتبار", "ویزای شینگن الزامی است"],
  //     cancellation: ["لغو تا 40 روز قبل: بازپرداخت 70%"],
  //     health: [],
  //     notes: [],
  //   },
  //   hostTour: {
  //     title: "میزبانی تور پاریس",
  //     services: ["اقامت در هتل 4 ستاره", "راهنمای فارسی زبان"],
  //     conditions: ["پرداخت 50% پیش‌پرداخت"],
  //   },
  //   comment: [
  //     {
  //       id: 1,
  //       userName: "@paris_amour",
  //       image: "/images/users/paris1.jpg",
  //       description: "پاریس واقعاً شهر عشق است!",
  //       date: "1402/09/10",
  //     },
  //   ],
  // },
  // {
  //   id: 8,
  //   title: "شیراز",
  //   contry: "ایران",
  //   categoryTour: "تور ایران",
  //   img: "https://www.tappersia.com/blog/wp-content/uploads/2019/12/Persepolis-Shiraz.jpg",
  //   numbers: 4.8,
  //   time: "3 روز و 2 شب",
  //   price: 30000000,
  //   discount: 5,
  //   startTour: "1403/10/15",
  //   endTour: "1403/10/17",
  //   strength: "3 بزرگ سال",
  //   benefitsItem: [
  //     { id: 1, benefits: "رستوران سنتی", cont: 70000 },
  //     { id: 2, benefits: "تور شبانه", cont: 100000 },
  //   ],
  //   benefits: [],
  //   checkTour: [
  //     {
  //       id: 1,
  //       description:
  //         "سفر به شهر شعر و ادب و بازدید از جاذبه‌های تاریخی و فرهنگی",
  //       features: [
  //         { id: 1, icon: PiPizzaLight, title: "شام شیرازی" },
  //         { id: 2, icon: IoWifiSharp, title: "وای فای رایگان" },
  //       ],
  //       planDay: [
  //         {
  //           id: 1,
  //           title: "روز اول",
  //           description: "بازدید از حافظیه و سعدیه",
  //         },
  //         {
  //           id: 2,
  //           title: "روز دوم",
  //           description: "تخت جمشید و پاسارگاد",
  //         },
  //       ],
  //     },
  //   ],
  //   place: [
  //     {
  //       id: 1,
  //       img: "/images/shiraz/persepolis.jpg",
  //       title: "تخت جمشید",
  //       description: "پایتخت باشکوه هخامنشیان با معماری بی‌نظیر",
  //     },
  //     {
  //       id: 2,
  //       img: "/images/shiraz/hafezieh.jpg",
  //       title: "حافظیه",
  //       description: "آرامگاه حافظ شیرازی شاعر بزرگ ایرانی",
  //     },
  //   ],
  //   lows: {
  //     general: ["کارت ملی الزامی است"],
  //     cancellation: ["لغو تا 10 روز قبل: بازپرداخت کامل"],
  //     health: [],
  //     notes: [],
  //   },
  //   hostTour: {
  //     title: "میزبانی تور شیراز",
  //     services: ["اقامت در هتل 3 ستاره", "راهنمای محلی"],
  //     conditions: ["حداقل 3 نفر"],
  //   },
  //   comment: [
  //     {
  //       id: 1,
  //       userName: "@poetry_lover",
  //       image: "/images/users/shiraz1.jpg",
  //       description: "حافظیه فضای بسیار روح‌نوازی داشت!",
  //       date: "1402/07/30",
  //     },
  //   ],
  // },
];

export const whyUsTravelData: WhyUsTravelData[] = [
  {
    id: 1,
    title: "رزرو آنلاین",
    icon: "/public/image/icon/airplane.png",
    description: "رزرو آنلاین بلیط هواپیما و هتل با بهترین قیمت و کیفیت",
  },
  {
    id: 2,
    title: "ضمانت بهترین قیمت",
    icon: "/public/image/icon/duler.png",
    description: "ما بهترین قیمت ها را برای شما تضمین می کنیم",
  },
  {
    id: 3,
    title: "پشتیبانی 24 ساعته",
    icon: "/public/image/icon/clock.png",
    description:
      "تیم پشتیبانی ما در هر ساعت از شبانه روز آماده پاسخگویی به شماست",
  },
];
