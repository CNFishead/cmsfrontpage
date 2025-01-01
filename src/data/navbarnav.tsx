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
    pageTitle: "ShepherdCMS",
    pageDescription: "ShepherdCMS",
    hidden: true,
  },

  pricing: {
    path: "/pricing",
    pageTitle: "Pricing",
    pageDescription: "ShepherdCMS",
  },
  about: {
    path: "/about",
    pageTitle: "About",
    pageDescription: "Truthcasting",
  },

  // resources: {
  //   pageTitle: "Resources",
  //   menu: [
  //     {
  //       pageTitle: "Support",
  //       path: "https://blog.shepherdcms.com/",
  //       external: true,
  //     },
  //     {
  //       path: "/faq",
  //       pageTitle: "FAQ",
  //     },
  //   ],
  // },
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
    path: `https://auth.shepherdcms.org` + (partner ? "?partner=" + partner : ""),
    pageTitle: "Get Started",
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
