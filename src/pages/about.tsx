import clsx from 'clsx';
import * as React from 'react';
import { SiLinkedin } from 'react-icons/si';

import { trackEvent } from '@/lib/analytics';
import useLoaded from '@/hooks/useLoaded';

import CloudinaryImg from '@/components/images/CloudinaryImg';
import Layout from '@/components/layout/Layout';
import UnstyledLink from '@/components/links/UnstyledLink';
import Seo from '@/components/Seo';

export default function AboutPage() {
  const isLoaded = useLoaded();

  return (
    <Layout>
      <Seo
        templateTitle='About'
        description='Software Engineer from Kampala, Uganda that enjoys building great Products from end to end.'
      />

      <main>
        <section className={clsx(isLoaded && 'fade-in-start')}>
          <div className='layout min-h-main py-20'>
            <h2 data-fade='0'>About</h2>
            <h1 className='mt-1' data-fade='1'>
              Ronnie Lutalo
            </h1>
            <div className='mt-4' data-fade='2'>
              <CloudinaryImg
                className='float-right ml-6 w-36 md:w-72'
                publicId='/images/avatar.png'
                width='400'
                height='400'
                alt='Photo of me'
                preview={false}
              />
              <article className='prose dark:prose-invert'>
                <p data-fade='3'>
                  Hi there! 👋 I'm Ronnie Lutalo, a Software Engineer with both
                  Software Development and Project Management experience as an
                  Individual Contributor and as a Leader respectively. Over
                  time, I've worked on various projects involving Web
                  Development and Windows Development using C#, ASP.NET Core,
                  SQL, Entity Framework Core, WPF, JavaScript/TypeScript, HTML,
                  CSS, React.js/Next.js. Aside from my engineering work, I
                  occasionally work on projects involving Visual Art & Design.
                </p>
                <p data-fade='4'>
                  I also work as a Consultant with United Nations Women
                  alongside other experienced professionals to share Technical
                  knowledge, experience and Mentorship for the African Girls Can
                  Code Initiative (AGCCI) aimed at empowering young girls across
                  Africa to become computer programmers, creators and designers.
                  As an Open Source Technology Enthusiast, I engage both as a
                  Contributor & Technical Lead at Open Source Community Africa
                  (OSCA) - Kampala where we are changing the narrative from
                  having Ugandans not only as users of technology but also as
                  contributors.
                </p>
                <p data-fade='5'>
                  Outside work, you might find me cheering for my favorite
                  sports team or blogging on my personal website about Software
                  Engineering, Windows Development, Web Development or Visual
                  Arts because I generally love sharing with the community. The
                  best way to reach me is through email -
                  ronnielutaro@gmail.com. Want to explore more details on stuff
                  I've been working on? Check out my projects.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section>
          <div className='layout py-6'>
            <h2>How To Contact Me</h2>
            <article className='prose mt-4 dark:prose-invert'>
              <p>
                Have an Idea you'd like to share, suggest or collaborate with me
                on? Drop me a line for inquiries, suggestions, collaborations,
                speaking engagements, or just to say hello. I'm always excited
                to talk about Software Engineering, Windows Development, Product
                Development, Web Development, Visual Arts and Technology in
                general so feel free to reach out anytime. The best way to reach
                me is through email - ronnielutaro@gmail.com and Direct
                messaging on LinkedIn. I'm always happy to meet new people.
                Almost all the time! So feel free to Connect with me on
                LinkedIn.
              </p>
              <div
                data-fade='6'
                className='mt-4 flex flex-wrap gap-4 gap-y-2 md:mt-8'
              >
                <UnstyledLink
                  href='https://www.linkedin.com/in/ronnie-lutalo-b73240aa/'
                  className={clsx(
                    'inline-flex items-center gap-1 text-sm font-medium md:text-base',
                    'text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white',
                    'focus:outline-none focus-visible:ring focus-visible:ring-primary-300',
                    'transition-colors'
                  )}
                  onClick={() => {
                    trackEvent('Social Link: Linkedin', 'link');
                  }}
                >
                  <SiLinkedin className='shrink-0' />
                  <span>LinkedIn</span>
                </UnstyledLink>
              </div>
            </article>
          </div>
        </section>
      </main>
    </Layout>
  );
}
