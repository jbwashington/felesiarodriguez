
interface SiteConfig {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    instagram: string;
  };
  mainNav: {
    title: string;
    href: string;
  }[],
}

export const siteConfig: SiteConfig = {
    name: "Wellness FelEsia",
    description: "Wellness FelEsia is a ",
    url: "https://wellnessfelesia.com",
    ogImage: "https://wellnessfelesia.com/og.jpg",
    links: {
        instagram: "https://instagram.com/wellnessfelesia",
    },
    mainNav: [
        {
            title: "About",
            href: "/about",
        },
        {
            title: "Contact",
            href: "/contact",
        },
    ],
};