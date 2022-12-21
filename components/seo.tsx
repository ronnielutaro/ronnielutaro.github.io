import { DefaultSeo } from "next-seo";

const config = {
  title: "Ronnie Lutalo -Software Engineer | Designer",
  description: "I design & build Software Products, Technology and Experiences",
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
