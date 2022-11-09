import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hello world! I&apos;m <strong>Ronnie</strong>, a
          Software Engineer, C# .NET developer and Visual Artist
          from Kampala, Uganda. Driven by desire and curiosity for creating Technology and
          Experiences that unlock new possibilities.
          Over time, I&apos;ve worked on various projects using a wide range
          of Tools & Technologies like C#, ASP.NET Core,
          Entity Framework Core,
          JavaScript/TypeScript, React.js/Next.js,
          Microsoft Azure (Cloud), WPF, SQL.
        </p>
        <p>
          When I&apos;m not coding, you can find me blogging here,
          or working on Visual Arts.
          I&apos;m always excited to talk about Technology and Visual Arts so feel free to reach out.
          The best way to reach me is through email (ronnielutaro@gmail.com).
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
