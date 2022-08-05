import SeoYonetimi from "@/components/svg/SeoYonetimi.vue";
import SosyalMedya from "@/components/svg/SosyalMedya.vue";
import IcerikYonetimi from "@/components/svg/IcerikYonetimi.vue";
import DigitalYonetim from "@/components/svg/DigitalYonetim.vue";
import GoogleYonetimi from "@/components/svg/GoogleYonetimi.vue";

export default [
  {
    id: "digital_yonetim",
    header: "marka",
    text: {
      first: "sıra dışı",
      second: "dijital yönetim",
      third:
        "şletmenizi Google ve sosyal medyada  en kısa sürede \n" +
        "en iyi noktaya ulaştırmanız için 360 derece dijital paket, \n" +
        "Arma Digital’de.",
    },
    footer: {
      text: "dijital yönetim",
    },
    anim: DigitalYonetim,
    bgColor: "",
  },
  {
    id: "seo_yonetimi",
    header: "goool",
    text: {
      first: "iyi bir SEO",
      second: "gol getirir",
      third:
        "Google’da siteniz ve sayfalarınız, kitlenizi \n" +
        "rakiplerinizden sıyrılarak en üst sıralarda karşılasın.",
    },
    footer: {
      text: "SEO yönetimi",
    },
    anim: SeoYonetimi,

    bgColor: "",
  },
  {
    id: "google_yonetimi",
    header: "UUUÇ",
    text: {
      first: "markan google'da",
      second: "yükselsin!",
      third:
        "Google’da siteniz ve sayfalarınız, kitlenizi \n" +
        "rakiplerinizden sıyrılarak en üst sıralarda karşılasın.\n",
    },
    footer: {
      text: "Google yönetimi",
    },
    anim: GoogleYonetimi,
    bgColor: "",
  },
  {
    id: "sosyal_medya",
    header: "mutfak",
    text: {
      first: "sosyal medya'da",
      second: "işin mutfağı",
      third:
        "Instagram, Facebook ve Youtube kanallarınızı bize bırakın, \n" +
        "tüm içerik ve reklamlarınızı uzman ekibimiz yönetsin, \n" +
        "kitlenize en etkili şekilde ulaşın.",
    },
    footer: {
      text: "sosyal medya",
    },
    anim: SosyalMedya,

    bgColor: "",
  },
  {
    id: "icerik_yonetimi",
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
    bgColor: "",
  },
];
