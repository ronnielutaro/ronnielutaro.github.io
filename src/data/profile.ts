import { Profile } from '../types/Profile';
import { socialLinks } from './socialLinks';

export const profile: Profile = {
  firstName: 'Ronnie',
  lastName: 'Lutalo',
  position: 'Software Engineer',
  summary: [
    '"Distributed Systems | Cloud"',
  ],
  avatar: {
    srcPath: 'profile/avatar_500x500.jpg',
    caption: 'Ronnie Lutalo',
  },
  location: {
    name: 'Kampala, Uganda',
  },
  tags: [
    { name: '.NET' },
    { name: 'C#' },
    { name: 'TypeScript' },
    { name: 'JavaScript' },
  ],
  socialLinks,
};
