import Link from "components/Link";
import Section from "components/Section";
import avatar from "public/avatar.png";
import { NextSeo } from "next-seo";
import Image from "next/image";

export const connectLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ronnie-lutalo-b73240aa/" },
  { label: "Twitter", href: "https://twitter.com/r_lutalo" },
  { label: "GitHub", href: "https://github.com/RonnieLutalo" },
];

const seoTitle = "About | Ronnie Lutalo";
const seoDesc =
  "Software Engineer and Designer from Kampala - Uganda that enjoys building great" +
  " Products from end to end. Uses C#, ASP.NET Core, SQL, Entity Framework Core, WPF," +
  " JavaScript/TypeScript, HTML, CSS, React.js/Next.js.";

export default function About() {
  return (
    <>
      <NextSeo
        title={seoTitle}
        description={seoDesc}
        openGraph={{
          title: seoTitle,
          description: seoDesc,
          url: `https://ronnielutalo.github.io/about/`,
          site_name: "Ronnie Lutalo",
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
      />
      <div className="flex flex-col gap-16 md:gap-24">
        <div className="-mb-8 " >
          <Image
            src={avatar}
            width={200}
            height={200}
            alt="avatar of Ronnie Lutalo"
          />
        </div>
        <Section heading="About me" headingAlignment="right">
          <div className="flex flex-col gap-6">
            <p>
              <em className="font-semibold">Hi there! 👋</em>&nbsp; I&apos;m Ronnie Lutalo,
              Software Engineer and Designer that enjoys building great
              Products from end to end.
            </p>
            <p>
              I&apos;m always curious about Art, Science, and People. Personally,
              I believe everything in the universe is connected to everything else. 
              Over time I&apos;ve worked on various projects involving Backend Services and UI Design.
              Most people believe Art and Science are separate fields,
              which is academically correct, but personally,
              I believe Art & Science have no reason to be disconnected and that&apos;s exactly
              how I view the world and approach life. 
            </p>
            <p>
              I mostly code using C# but also work with
              other Tools like ASP.NET Core, SQL, Entity Framework Core, WPF, JavaScript/TypeScript, HTML,
              CSS, React.js/Next.js.
            </p>
            <p>
              Outside work, you might find me cheering my favorite sports team. 
              I&apos;m into Soccer and Formula One Racing at the moment. 
              A Huge fan of Sports teams like SC Vipers, Manchester United, and Mercedes F1.
            </p>
            <p>
              Have an Idea you&apos;d like to share, suggest or collaborate with me on? Try leaving me a message. 
              I respond to all my messages and I&apos;m always excited to talk about Software Engineering, Design, Product, and Technology
              so feel free to reach out anytime.
              The best way to reach me is through email - ronnielutaro@gmail.com and Direct messaging on Twitter or LinkedIn.
            </p>
          </div>
        </Section>
        <Section heading="Connect" headingAlignment="right">
          <ul className="flex gap-6 animated-list">
            {connectLinks.map((link) => (
              <li className="transition-opacity" key={link.label}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </Section>
      </div>
    </>
  );
}
