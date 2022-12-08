import { Profile } from '../types/Profile';
import { socialLinks } from './socialLinks';

export const profile: Profile = {
  firstName: 'Ronnie',
  lastName: 'Lutalo',
  fullName: 'Ronnie Lutalo',
  position: 'Software Engineer | Designer | CG Artist',
  avatar: {
    src: '/images/about/avatar_400x400.jpg',
    alt: 'Professional Headshot of Ronnie Lutalo',
  },
  location: {
    name: 'Kampala, Uganda',
  },
  socialLinks,
};
