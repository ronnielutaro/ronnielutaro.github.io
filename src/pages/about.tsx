import * as React from 'react'
import Layout from '../components/layouts/layout'
import Seo from '../components/layouts/seo'
import { StaticImage } from 'gatsby-plugin-image'

const AboutPage = () => {
  return (
    <Layout pageTitle='About Me'>
      <p>
        Hi there!
        I&apos;m Ronnie. Driven by desire and curiosity for creating Technology and
        Experiences that unlock new possibilities. Over time, I&apos;ve worked on various
        projects using a wide range of Tools & Technologies like C#, ASP.NET Core, Entity
        Framework Core, JavaScript/TypeScript, React.js, Microsoft Azure (Cloud),
        WPF, SQL, Unity 3D, Unreal Engine.
      </p>
      <p>
        When I&apos;m not coding, you can find me blogging on my Official Personal Website or
        working on a Motion Picture. I&apos;m always excited to share and talk about Technology Development
        or Motion Picture Arts. The best way to reach me is through email at <i>ronnielutaro@gmail.com</i>
      </p>
      <StaticImage
        alt='Ronnie Lutalo speaking at the first annual Open Source Summit Kampala, Uganda'
        src='../images/ronnie-speaking.jpg'
      />
    </Layout>
  )
}

export const Head = () => <Seo title='About Me' />

export default AboutPage
