// @flow
import { socialLinkTypes } from '../types/SocialLink';
import type { SocialLink } from '../types/SocialLink';

export const socialLinks: SocialLink[] = [
  {
    type: socialLinkTypes.linkedIn,
    url: 'https://www.linkedin.com/in/ronnie-lutalo-b73240aa/',
    secondary: false,
    caption: 'Ronnie Lutalo on LinkedIn',
  },
  {
    type: socialLinkTypes.gitHub,
    url: 'https://github.com/RonnieLutalo',
    secondary: false,
    caption: 'Ronnie Lutalo on GitHub',
  },
  {
    type: socialLinkTypes.twitter,
    url: 'https://twitter.com/r_lutalo',
    secondary: false,
    caption: 'Ronnie Lutalo on Twitter',
  },
  {
    type: socialLinkTypes.facebook,
    url: 'https://www.facebook.com/RLutalo/',
    secondary: true,
    caption: 'Ronnie Lutalo on Facebook',
  },
  {
    type: socialLinkTypes.instagram,
    url: 'https://www.instagram.com/r_lutalo/',
    secondary: true,
    caption: 'Ronnie Lutalo on Instagram',
  },
  {
    type: socialLinkTypes.medium,
    url: 'https://medium.com/@ronnielutalo',
    secondary: true,
    caption: 'Ronnie Lutalo on Medium',
  },
  {
    type: socialLinkTypes.devTo,
    url: 'https://dev.to/ronnielutalo',
    secondary: true,
    caption: 'Ronnie Lutalo on DevTo',
  },
  {
    type: socialLinkTypes.stackOverflow,
    url: 'https://stackoverflow.com/users/12148393/ronnie-lutalo',
    secondary: true,
    caption: 'Ronnie Lutalo on StackOverflow',
  },
  {
    type: socialLinkTypes.youTube,
    url: 'https://www.youtube.com/channel/UCW2t0pjW3TRi8t5zq6f27Ow',
    secondary: true,
    caption: 'Ronnie Lutalo on YouTube',
  },
];
