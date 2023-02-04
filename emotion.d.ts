/// <reference types="@emotion/react/types/css-prop" />

import '@emotion/react';

declare module '@emotion/react' {
  interface DeviceSizePx {
    mobile: `${number}px`;
    tablet: `${number}px`;
    desktop?: `${number}px`;
    bigscreen?: `${number}px`;
  }

  interface DeviceSizeNum {
    mobile: number;
    tablet: number;
    desktop?: number;
    bigscreen?: number;
  }

  export interface Colors {
    primary: string;
    primaryDark: string;
    secondary: string;
    secondaryDark: string;
    light: string;
    lightGrey: string;
    grey: string;
    transparentGrey: string;
    darkGrey: string;
    darkerGrey: string;
    dark: string;
    transparentDark: string;
    darkest: string;
    facebook: string;
    github: string;
    twitter: string;
    linkedin: string;
    instagram: string;
    white: string;
    black: string;
    success: string;
    error: string;
    warning: string;
  }

  export type themeColor = keyof Colors;

  export type color = keyof Colors | 'transparent' | 'inherit';

  export interface Theme {
    spacing: {
      maxWidth: string;
      maxWidthLaptop: string;
      maxWidthLimit: string;
      spacer: number;
      paddingTopBody: DeviceSizePx;
      marginContainer: DeviceSizePx;
    };
    logo: {
      width: {
        big: number;
      };
    };
    colors: Colors;
    fonts: {
      text: string;
      heading: string;
    };
    sizes: {
      bigHeading: {
        size: DeviceSizePx;
        lineheight: DeviceSizeNum;
      };
      h1: {
        size: DeviceSizePx;
        lineheight: DeviceSizeNum;
      };
      h2: {
        size: DeviceSizePx;
        lineheight: DeviceSizeNum;
      };
      h3: {
        size: DeviceSizePx;
        lineheight: DeviceSizeNum;
      };
      h4: {
        size: DeviceSizePx;
        lineheight: DeviceSizeNum;
      };
      h5: {
        size: DeviceSizePx;
        lineheight: DeviceSizeNum;
      };
      h6: {
        size: DeviceSizePx;
        lineheight: DeviceSizeNum;
      };
      text: {
        size: DeviceSizeNum;
        lineheight: DeviceSizeNum;
      };
      small: {
        size: DeviceSizePx;
        lineheight: DeviceSizeNum;
      };
    };
  }
}
