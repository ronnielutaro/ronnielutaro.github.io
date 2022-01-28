import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'
import './Home.css'
import Emoji from './shared/Emoji'
import Link from './shared/Link'
import Page from './shared/Page'

export default function HomePage () {
  return (
    <Page>
      <figure className='avatar'>
        <StaticImage
          className='avatar-image'
          src='./images/photo.png'
          width={128}
          height={128}
          placeholder='blurred'
          alt='Ronnie Lutalo'
        />
      </figure>

      <hr />
      <div>
        <p>
          <Emoji code='👋' /> Hi there, My name is Ronnie Lutalo. I enjoy converting complex problems
          into technology and experiences that are both intuitive and exciting. Over time I&apos;ve
          worked on projects in different areas of Computer Science.
        </p>
        <p>
          <Emoji code='🛰' /> Most of my endeavors are in C#/.NET, but every now and then I code in
          TypeScript and Kotlin as well. I&apos;m primarily interested in the Cloud, Distributed Systems, Mobile,
          Windows and Computer Graphics.
        </p>
        <p>
          <Emoji code='✏' /> My professional hobbies involve Open Source and blogging. Outside of that,
          I&apos;m also into Filmmaking.
        </p>
        <p>
          <Emoji code='💡' /> This site is where I get to write about stuff I&apos;m working on and
          share my lessons along the way.
        </p>
      </div>

      <hr />

      <div className='social-links'>
        <Link className='social-link' href='https://github.com/RonnieLutalo'>
          <FiGithub strokeWidth={1} />
        </Link>
        <Link className='social-link' href='https://twitter.com/r_lutalo'>
          <FiTwitter strokeWidth={1} />
        </Link>
        <Link className='social-link' href='https://www.linkedin.com/in/ronnie-lutalo-b73240aa/'>
          <FiLinkedin strokeWidth={1} />
        </Link>
      </div>
    </Page>
  )
}
