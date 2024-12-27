import { create } from "zustand";
import { FiExternalLink } from "react-icons/fi";
import { usePartnerStore } from "@/state/partner";

const partner = usePartnerStore.getState().partner;

export type Page = {
  path?: string;
  pageTitle: string;
  pageDescription?: string;
  hideHeader?: boolean;
  hideFooter?: boolean;
  hidden?: boolean;
  fullPage?: boolean;
  external?: React.ReactNode;
  menu?: Page[];
  button?: boolean;
  pageHeader?: {
    backgroundSrc: string;
    buttonText?: string;
    buttonLink?: string;
    title: string;
    subTitle?: string;
    isSmall?: boolean;
    isVideo?: boolean;
  };
};

export const navigationData: {
  [key: string]: Page;
} = {
  home: {
    path: "/",
    pageTitle: "Truthcasting",
    pageDescription: "Truthcasting",
    hidden: true,

    pageHeader: {
      backgroundSrc: "https://s3.us-east-1.wasabisys.com/truthcasting/SaltShakerMedia/videos/TruthcastingAd3.mp4",
      buttonText: "Start your free trial!",
      buttonLink: `https://auth.truthcasting.com/signup` + (partner ? "?partner=" + partner : ""),
      title: "Christian Livestreaming",
      subTitle: "Bringing the word to you",
      isSmall: false,
      isVideo: true,
    },
  },

  pricing: {
    path: "/pricing",
    pageTitle: "Pricing",
    pageDescription: "Truthcasting",

    pageHeader: {
      backgroundSrc:
        "https://www.worshiphousemedia.com/church-media-blog/wp-content/uploads/2021/03/pexels-shelagh-murphy-1666816-scaled.jpg",
      title: "Pricing",
      isSmall: true,
    },
  },
  about: {
    path: "/about",
    pageTitle: "About",
    pageDescription: "Truthcasting",

    pageHeader: {
      backgroundSrc:
        "https://images.ctfassets.net/lwoaet07hh7w/5S23etSZ9BHGedxvtDWTXn/9b1e9a1a36480379ccacdb06d7714187/BethelSongsnew.jpg",
      title: "About",
      isSmall: true,
    },
  },

  resources: {
    pageTitle: "Resources",
    menu: [
      {
        pageTitle: "Support",
        path: "https://blog.truthcasting.com/",
        external: true,
      },
      {
        path: "/faq",
        pageTitle: "FAQ",
      },
    ],
  },

  stream: {
    pageTitle: "Stream",
    path: "https://stream.truthcasting.com/",
    external: true,
  },
  "terms-of-use": {
    path: "/terms-of-use",
    pageTitle: "Terms of Use",
    pageDescription: "Truthcasting",
    hidden: true,
    pageHeader: {
      title: "Terms of Use",
      backgroundSrc: "",
      isSmall: true,
    },
  },
  "privacy-policy": {
    path: "/privacy-policy",
    pageTitle: "Privacy Policy",
    pageDescription: "Truthcasting",
    hidden: true,
    pageHeader: {
      title: "Privacy Policy",
      backgroundSrc: "",
      isSmall: true,
    },
  },

  faq: {
    path: "/faq",
    pageTitle: "FAQ",
    pageDescription: "Truthcasting",
    hidden: true,
    pageHeader: {
      title: "FAQ",
      backgroundSrc: "",
      isSmall: true,
    },
  },
  login: {
    path: `https://auth.truthcasting.com` + (partner ? "?partner=" + partner : ""),
    pageTitle: "Login",
    button: true,
  },
};

interface INavigation {
  page: Page;
  setPage: (page: Page) => void;
}

export const useNavigationStore = create<INavigation>((set) => ({
  page: navigationData.home,
  setPage: (page) => set({ page }),
}));
