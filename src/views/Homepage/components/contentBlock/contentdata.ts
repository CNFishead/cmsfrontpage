export interface ContentType {
  image: string;
  title: string;
  text: string;
  ctaText: string;
  ctaLink: string;
  reverse?: boolean;
}

export default [
  {
    image:
      "https://res.cloudinary.com/wulfdev/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1735241844/DALL_E-2024-12-08-09.42.20-An-illustration-of-a-serene-church-scene-showcasing-diverse-people-in-a-community-setting.-The-focus-is-on-modern-technology-blending-with-traditiona_awgnl8.webp",
    title: "Built for Ministry",
    text: "We understand the unique challenges churches face. ShepherdCMS is purpose-built to lighten the administrative load, so your team can focus on ministry.",
    ctaText: "Learn More",
    ctaLink: "/pricing",
  },
  {
    image:
      "https://res.cloudinary.com/wulfdev/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1735241828/DALL_E-2024-12-08-09.43.58-A-vibrant-illustration-showing-a-church-office-with-a-team-of-administrators-and-volunteers-using-technology-to-manage-tasks-efficiently.-The-scene-in_si8vj4.webp",
    title: "Time-Saving Tools",
    text: "Simplify how you manage your congregation, events, and volunteers. Less time on logistics means more time making an impact.",
    ctaText: "Learn More",
    ctaLink: "/pricing",
    reverse: true,
  },
  {
    image:
      "https://res.cloudinary.com/wulfdev/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1735241817/DALL_E-2024-12-08-09.48.23-An-illustration-of-a-family-sitting-in-a-church-pew-using-a-mobile-app-to-check-in.-The-family-includes-two-parents-and-two-children-smiling-and-enga_jxk5sd.webp",
    title: "More Ministry. Less Admin.",
    text: "Automate your scheduling, check-ins, and reports — so you can lead with less stress and more presence.",
    ctaText: "Learn More",
    ctaLink: "/pricing",
  },
  {
    image: "https://i.postimg.cc/gjH4H3d1/Chat-GPT-Image-Apr-11-2025-06-53-50-PM.png",
    title: "Designed for Every Member",
    text: "Whether it's a first-time visitor or a faithful member, ShepherdCMS makes everyone feel seen — with effortless check-ins, personalized records, and family-first design.",
    ctaText: "Learn More",
    ctaLink: "/pricing",
    reverse: true,
  },
  {
    image:
      "https://res.cloudinary.com/wulfdev/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1735241803/DALL_E-2024-12-08-10.02.00-An-illustration-depicting-a-warm-and-approachable-customer-support-scenario.-A-smiling-individual-sits-at-a-desk-with-a-computer-engaging-with-a-chur_tgcopf.webp",
    title: "Unmatched Support",
    text: "You're not alone in ministry. With ShepherdCMS, you get more than software — you get a partner who knows the weight of the work and walks with you.",
    ctaText: "Learn More",
    ctaLink: "/pricing",
  },
] as ContentType[];
