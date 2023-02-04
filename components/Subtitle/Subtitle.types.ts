import { themeColor } from '@emotion/react';
import { BackgroundColorChildren } from '../../global/types';

export interface SubtitleProps extends BackgroundColorChildren {
  color?: themeColor;
  align?: string;
}
