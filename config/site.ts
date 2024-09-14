
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
    name: "FelEsia Rodriguez LCSW",
    description: "Offering mental health services to New York",
    url: "https://therapistfelesia.com",
    ogImage: "https://therapistfelesia.com/og.jpg",
    links: {
        instagram: "#",
    },
    mainNav: [
        {
            title: "About",
            href: "/about",
        },
    ],
};