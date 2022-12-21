import { DefaultSeo } from "next-seo";

const config = {
  title: "Ronnie Lutalo | Software Engineer | Designer",
  description: `Personal Website & Blog where I share my 
  thoughts & write about software engineering, animation techniques, 
  design systems and more. I also talk about new & recent stuff I'm working on.`,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ronnielutalo.github.io",
    site_name: "Ronnie Lutalo",
    images: [
      {
        url: "https://ronnielutalo.github.io/og.jpg",
        alt: "Ronnie Lutalo",
      },
    ],
  },
  twitter: {
    handle: "@r_lutalo",
    site: "@r_lutalo",
    cardType: "summary_large_image",
  },
};

export default function SEO() {
  return <DefaultSeo {...config} />;
}
