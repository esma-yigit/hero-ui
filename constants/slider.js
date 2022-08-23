import SeoYonetimi from "@/components/svg/SeoYonetimi.vue";
import SosyalMedya from "@/components/svg/SosyalMedya.vue";
import IcerikYonetimi from "@/components/svg/IcerikYonetimi.vue";
import DigitalYonetim from "@/components/svg/DigitalYonetim.vue";
import GoogleYonetimi from "@/components/svg/GoogleYonetimi.vue";
import GoogleAds from "@/components/svg/GoogleAds.vue";
import GoogleBusiness from "@/components/svg/GoogleBusiness.vue";
import GoogleBusinessRaporlama from "@/components/svg/GoogleBusinessRaporlama.vue";
import KonseptFotografCekimi from "@/components/svg/KonseptFotografCekimi.vue";
import KurumsalSeo from "@/components/svg/KurumsalSeo.vue";
import Produksiyon from "@/components/svg/Produksiyon.vue";
import ProfesyonelEkipman from "@/components/svg/ProfesyonelEkipman.vue";
import ReklamFilmi from "@/components/svg/ReklamFilmi.vue";
import TanitimFilmi from "~/components/svg/TanitimFilmi.vue";

export default [
  {
    darkMode: false,
    id: "digital_yonetim",

    style: {
      header: "",
      textFirst: "",
      textSecond: "",
      textThird: "",
      animContainer: "",
    },
    header: "marka",
    text: {
      first: "sıra dışı",
      second: "dijital yönetim",
      third:
        "işletmenizi Google ve sosyal medyada  en kısa sürede en iyi noktaya ulaştırmanız için 360 derece dijital paket, Arma Digital’de.",
    },
    footer: {
      text: "dijital yönetim",
    },
    anim: DigitalYonetim,
    bgColor:
      "background-image: url('/splash.png'),linear-gradient(90deg, #2b2b2b 15%, #6b7181 80%);background-repeat:no-repeat,no-repeat; background-size: contain, cover; background-position: right bottom,center;",
  },
  {
    darkMode: false,
    id: "seo_yonetimi",
    style: {
      header: "",
      textFirst: "",
      textSecond: "",
      textThird: "",
      animContainer: "right:10%;",
    },
    header: "goool",
    text: {
      first: "iyi bir SEO",
      second: "gol getirir!",
      third:
        "Google’da siteniz ve sayfalarınız, kitlenizi rakiplerinizden sıyrılarak en üst sıralarda karşılasın.",
    },
    footer: {
      text: "SEO yönetimi",
    },
    anim: SeoYonetimi,

    bgColor:
      "background:#1D2F57;background-image:url('/hero-seo-fog.png');background-repeat:no-repeat; background-size:50%; background-position:100% 100%;",
  },
  {
    darkMode: true,
    id: "google_yonetimi",
    style: {
      header: "",
      textFirst: "color: black;",
      textSecond: "color: black;",
      textThird: "color: black;",
      animContainer: " top:10%;",
    },
    header: "UUUÇ",
    text: {
      first: "markan google'da",
      second: "yükselsin!",
      third:
        "Google’da siteniz ve sayfalarınız, kitlenizi rakiplerinizden sıyrılarak en üst sıralarda karşılasın.",
    },
    footer: {
      text: "Google yönetimi",
    },
    anim: GoogleYonetimi,
    bgColor:
      " background-image: url('/hero-google-yonetimi-up-cloud.png'), url('/hero-google-yonetimi-down-cloud.png');background-position: left top, left bottom top;background-repeat: no-repeat, no-repeat;background-size:cover",
  },
  {
    darkMode: false,
    id: "sosyal_medya",
    style: {
      header: "font-size:18vw;",
      textFirst: "",
      textSecond: "",
      textThird: "",
      animContainer: "",
    },
    header: "mutfak",
    text: {
      first: "sosyal medya'da",
      second: "işin mutfağı",
      third:
        "Instagram, Facebook ve Youtube kanallarınızı bize bırakın, tüm içerik ve reklamlarınızı uzman ekibimiz yönetsin, kitlenize en etkili şekilde ulaşın.",
    },
    footer: {
      text: "sosyal medya",
    },
    anim: SosyalMedya,

    bgColor:
      "background:#542FA7;background-image: url('/sosyal-medya-dots.png'); background-position:80% 100%; background-repeat: no-repeat; background-size: contain;",
  },
  {
    darkMode: false,
    id: "icerik_yonetimi",
    style: {
      header: "font-size:14vw; margin-bottom:8rem;",
      textFirst: "",
      textSecond: "",
      textThird: "",
      animContainer: "width:90%;top:18%",
    },
    header: "BİZE BIRAK",
    text: {
      first: "web sitesi içeriğini",
      second: "dert etme",
      third:
        "Web sitenizin revizyon ve geliştirme, her tür içerik yönetimini bize bırakın, sorunsuz bir içerik yönetimine sahip olun.",
    },
    footer: {
      text: "İçerik yönetimi",
    },
    anim: IcerikYonetimi,
    bgColor: "background:#494B5F;",
  },
  {
    darkMode: false,
    id: "kurumsal_seo",
    style: {
      header: "",
      textFirst: "",
      textSecond: "",
      textThird: "",
      animContainer: "",
    },
    header: "ZİRVEYE",
    text: {
      first: "Kurumsal SEO",
      second: {
        fline: "markanızı",
        sline: "zirveye taşıyalım!",
      },
      third:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
    footer: {
      text: "KURUMSAL SEO",
    },
    anim: KurumsalSeo,
    bgColor:
      "background-color:#020D26;background-image: url('/kurumsal-seo-stars.png');background-position: center;background-repeat: no-repeat;background-size:cover",
  },
  {
    darkMode: false,
    id: "google_ads",
    style: {
      header: "",
      textFirst: "",
      textSecond: "",
      textThird: "",
      animContainer: "",
    },
    header: "1.SIRA",
    text: {
      first: "Google Ads",
      second: {
        fline: "en düşük bütçe",
        sline: "en yüksek verim!",
      },
      third:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
    footer: {
      text: "GOOGLE ADS",
    },
    anim: GoogleAds,
    bgColor:
      "background:#151515; background-image: url('/google-ads-bg.png'); background-position:center; background-repeat: no-repeat; background-size: cover;",
  },
  {
    darkMode: false,
    id: "google_business",
    style: {
      header: "",
      textFirst: "",
      textSecond: "",
      textThird: "",
      animContainer: "",
    },
    header: "KRALSIN",
    text: {
      first: "Google Business Optimizasyonu",
      second: {
        fline: "bölgenizde öncelik",
        sline: "sizin olsun!",
      },
      third:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
    footer: {
      text: "GOOGLE BUSINESS",
    },
    anim: GoogleBusiness,
    bgColor:
      "background:#EA5E06;background-image: url('/google-business-sand.png');background-position: bottom end;background-repeat: no-repeat;background-size:cover",
  },
  {
    darkMode: true,
    id: "google_business_raporlama",
    style: {
      header: "font-size:15vw; opacity:0.05; margin-bottom:6rem; ",
      textFirst: "color: black;",
      textSecond: "color: black;",
      textThird: "color: black;",
      animContainer: "",
    },
    header: "DÖNÜŞÜM",
    text: {
      first: "en iyi raporlama",
      second: {
        fline: "aylık düzenli raporlama",
        sline: "dönüşüm takibi",
      },
      third:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
    footer: {
      text: "GOOGLE BUSINESS",
    },
    anim: GoogleBusinessRaporlama,
    bgColor: "background:#F5F5F5;",
  },
  {
    darkMode: false,
    id: "produksiyon",
    style: {
      header: "opacity:0",
      textFirst: "",
      textSecond: "",
      textThird: "",
      animContainer: "width:92%",
    },
    header: "Perspective",
    text: {
      first: "kaderimizse",
      second: "çekeriz :)",
      third:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
    footer: {
      text: "PRODÜKSİYON",
    },
    anim: Produksiyon,
    bgColor:
      "background:#020D26; background-image: url('/produksiyon-bg.png');background-position: center;background-repeat: no-repeat;background-size:cover;",
  },
  {
    darkMode: false,
    id: "profesyonel_ekipman",
    style: {
      header: "opacity:0;",
      textFirst: "",
      textSecond: "",
      textThird: "",
      animContainer: "",
    },
    header: "Technical",
    text: {
      first: "profesyonel ekip",
      second: "güçlü ekipmanlar!",
      third:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
    footer: {
      text: "PROFESYONEL EKİPMAN",
    },
    anim: ProfesyonelEkipman,
    bgColor:
      "background-image: url('/profesyonel-ekipman-fog-top.png'),url('/profesyonel-ekipman-fog-down.png'),linear-gradient(238deg, #F2F6FF 1%, #080A0E 63%);background-position:0px 0px, 80% 100%;background-repeat:no-repeat, no-repeat;background-size:60%,60%,cover;",
  },
  {
    darkMode: true,
    id: "reklam_yonetimi",
    style: {
      header: "opacity:0;",
      textFirst: "color: black;",
      textSecond: "color: black;",
      textThird: "color: black;",
      animContainer: "",
    },
    header: "Bilgi",
    text: {
      first: "tv ve sinemalar için",
      second: "reklam ve kamu spotu çekimleri",
      third:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
    footer: {
      text: "KAMU SPOTU & REKLAM FİLMİ",
    },
    anim: ReklamFilmi,
    bgColor:
      "background:#FFFFFF; background-image: url('/kamu-spotu-people.png');background-position: top right;background-repeat: no-repeat;background-size:contain;",
  },
  {
    darkMode: false,
    id: "tanitim_filmi",
    style: {
      header: "opacity:0;",
      textFirst: "",
      textSecond: "",
      textThird: "",
      animContainer: "",
    },
    header: "görsel",
    text: {
      first: "tanıtım filmi",
      second: "",
      third:
        "İşletmenizi tanıtmanın en doğru yolu görsel hafızayı hedeflemektir.",
    },
    footer: {
      text: "TANITIM FİLMİ",
    },
    anim: TanitimFilmi,
    bgColor:
      "background:#262626;background-image: url('/tanitim-filmi-bg.png');background-position: center;background-repeat: no-repeat;background-size:cover;",
  },
  {
    darkMode: true,
    id: "konsept_fotograf_cekimi",
    style: {
      header: "opacity:0",
      textFirst: "color: black;",
      textSecond: "color: black;",
      textThird: "color: black;",
      animContainer: "",
    },
    header: "Konsept",
    text: {
      first: "ürün & konsept fotoğraf",
      second: "çekimleri ve dekupaj işlemleri",
      third:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
    footer: {
      text: "KONSEPT FOTOĞRAF ÇEKİMİ",
    },
    anim: KonseptFotografCekimi,
    bgColor:
      "background:#f2f2f2; background-image: url('/konsept-people.png');background-position: 110% 100%;background-repeat: no-repeat;background-size:contain;",
  },
];
