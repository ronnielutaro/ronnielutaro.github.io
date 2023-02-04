import { color } from '@emotion/react';

export interface AosSupported extends React.HTMLAttributes<any> {
  'data-aos'?: string;
  'data-aos-delay'?: number;
  'data-aos-easing'?: string;
  'data-aos-offset'?: number;
  'data-aos-duration'?: number;
}

export interface BackgroundColorChildren extends AosSupported {
  background?: color;
  color?: color;
  children: React.ReactNode;
}
