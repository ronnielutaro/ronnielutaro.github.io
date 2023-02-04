import { AosSupported } from '../../global/types';

export interface BlogBannerProps extends AosSupported {
  title: string;
  publishDateTime: string;
  lastUpdateDateTime: string;
  image: string;
}
