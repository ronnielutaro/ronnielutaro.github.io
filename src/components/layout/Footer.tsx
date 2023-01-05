import * as React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { FiMail } from 'react-icons/fi';
import { SiGithub, SiLinkedin, SiTwitter } from 'react-icons/si';
import { Tooltip as TooltipTippy } from 'react-tippy';

import { trackEvent } from '@/lib/analytics';

import Accent from '@/components/Accent';
import UnstyledLink from '@/components/links/UnstyledLink';
import Tooltip from '@/components/Tooltip';

export default function Footer() {
  return (
    <footer className='mt-4 pb-2'>
      <main className='layout flex flex-col items-center border-t pt-6 dark:border-gray-600'>
        <FooterLinks />

        <p className='mt-12 font-medium text-gray-600 dark:text-gray-300'>
          Connect With Me
        </p>
        <SocialLinks />

        <p className='mt-8 mb-8 text-sm text-gray-600 dark:text-gray-300'>
          Copyright © {new Date().getFullYear()} Ronnie Lutalo. All rights
          reserved.
        </p>
      </main>
    </footer>
  );
}

function FooterLinks() {
  return (
    <div className='flex flex-wrap justify-center gap-y-4 gap-x-8'>
      {footerLinks.map(({ href, text, tooltip }) => (
        <Tooltip interactive={false} key={href} content={tooltip}>
          <UnstyledLink
            className='animated-underline rounded-sm text-sm font-medium focus:outline-none focus-visible:ring focus-visible:ring-primary-300 dark:text-gray-200'
            href={href}
            onClick={() => {
              trackEvent(`Footer Link: ${text}`, 'link');
            }}
          >
            {text}
          </UnstyledLink>
        </Tooltip>
      ))}
    </div>
  );
}

function SocialLinks() {
  const [copyStatus, setCopyStatus] = React.useState(
    'Click the mail logo to copy'
  );

  return (
    <div className='mt-2 flex space-x-4'>
      <div className='flex items-center justify-center'>
        <TooltipTippy
          trigger='mouseenter'
          hideOnClick={false}
          interactive
          html={
            <div className='inline-block rounded-md border bg-white p-2 text-gray-600 shadow-md dark:border-gray-600 dark:bg-dark dark:text-gray-200'>
              {copyStatus}
              <Accent className='inline-block font-medium'>
                ronnielutaro@gmail.com
              </Accent>
            </div>
          }
        >
          <CopyToClipboard
            text='ronnielutaro@gmail.com'
            onCopy={() => {
              setCopyStatus('Copied to clipboard 🥳');
              setTimeout(
                () => setCopyStatus('Click the mail logo to copy'),
                1500
              );
            }}
          >
            <button className='rounded-sm align-middle focus:outline-none focus-visible:ring focus-visible:ring-primary-300'>
              <FiMail className='h-7 w-7 align-middle text-gray-600 hover:text-primary-300 dark:text-gray-300 dark:hover:text-primary-300' />
            </button>
          </CopyToClipboard>
        </TooltipTippy>
      </div>
      {socials.map((social) => (
        <Tooltip interactive={false} key={social.href} content={social.text}>
          <UnstyledLink
            className='inline-flex items-center justify-center rounded-sm focus:outline-none focus-visible:ring focus-visible:ring-primary-300'
            href={social.href}
            onClick={() => {
              trackEvent(`Footer Link: ${social.id}`, 'link');
            }}
          >
            <social.icon className='my-auto h-6 w-6 align-middle text-gray-600 transition-colors hover:text-primary-300 dark:text-gray-300 dark:hover:text-primary-300' />
          </UnstyledLink>
        </Tooltip>
      ))}
    </div>
  );
}

const footerLinks = [
  {
    href: 'https://github.com/RonnieLutalo/ronnielutalo.github.io',
    text: 'Source Code',
    tooltip: (
      <>
        This website is <strong>open source</strong>!
      </>
    ),
  },
  {
    href: '/subscribe',
    text: 'Subscribe',
    tooltip: 'Get an email whenever I post, no spam',
  },
  {
    href: 'https://ronnielutalo.github.io/rss.xml',
    text: 'RSS',
    tooltip: 'Add ronnielutalo.github.io blog to your feeds',
  },
];

const socials = [
  {
    href: 'https://github.com/RonnieLutalo',
    icon: SiGithub,
    id: 'Github',
    text: (
      <>
        See my Engineering work on{' '}
        <Accent className='font-medium'>Github</Accent>
      </>
    ),
  },
  {
    href: 'https://www.linkedin.com/in/ronnie-lutalo-b73240aa/',
    icon: SiLinkedin,
    id: 'Linkedin',
    text: (
      <>
        Connect with me on <Accent className='font-medium'>Linkedin</Accent>
      </>
    ),
  },
  {
    href: 'https://twitter.com/r_lutalo',
    icon: SiTwitter,
    id: 'Twitter',
    text: (
      <>
        I post updates, tips, insight, thoughts, and sometimes do some talks.
        Follow me on <Accent className='font-medium'>Twitter</Accent>!
      </>
    ),
  },
];
