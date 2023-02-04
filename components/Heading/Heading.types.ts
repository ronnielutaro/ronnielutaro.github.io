import { AosSupported } from '../../global/types';

export interface HeadingProps extends AosSupported {
    color: string;
}

export interface SizedHeadingProps extends HeadingProps {
  size: number | string;
}
