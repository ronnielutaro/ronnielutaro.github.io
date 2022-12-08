import { SocialLink } from './SocialLink';
import { Location } from './Location';
import { Image } from './Image';

export type Profile = {
  firstName?: string,
  lastName?: string,
  fullName?: string,
  position?: string,
  avatar?: Image,
  socialLinks?: SocialLink[],
  location?: Location,
};
