// TODO: add this info 
// Google Voice
//  (917) 267-8420
// Email
// info@therapistfelesia.com


// NPI #1457870180

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