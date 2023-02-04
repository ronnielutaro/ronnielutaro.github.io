import { Theme } from '@emotion/react';

const theme: Theme = {
  spacing: {
    maxWidth: '1128px',
    maxWidthLaptop: '1190px',
    maxWidthLimit: '1320px',
    spacer: 16,
    paddingTopBody: { mobile: '0px', tablet: '0px' },
    marginContainer: { mobile: '20px', tablet: '20px' },
  },
  logo: {
    width: {
      big: 139,
    },
  },
  colors: {
    primary: '#00E2AC',
    primaryDark: '#00BF8F',
    secondary: '#F95884',
    secondaryDark: '#F7376C',
    light: '#F0F3F3',
    lightGrey: '#9BB2BE',
    grey: '#687084',
    transparentGrey: 'rgba(17, 18, 24, 0.5)',
    darkGrey: '#292A37',
    darkerGrey: '#1C1D26',
    dark: '#111218',
    transparentDark: 'rgba(5, 5, 7, 0.95)',
    darkest: '#0B0B0F',
    facebook: '#4267B2',
    github: '#6e5494',
    twitter: '#1DA1F2',
    linkedin: '#2867B2',
    instagram: '#C13584',
    white: '#fff',
    black: '#000',
    success: '#03a678',
    error: '#d91e18',
    warning: 'orange',
  },
  fonts: {
    text: "'Poppins', Verdana, Helvetica, Arial, sans-serif",
    heading: "'Poppins', Verdana, Helvetica, Arial, sans-serif",
  },
  sizes: {
    bigHeading: {
      size: {
        mobile: '40px',
        tablet: '50px',
        desktop: '68px',
        bigscreen: '72px',
      },
      lineheight: {
        mobile: 1.3,
        tablet: 1.2,
        desktop: 1.2,
        bigscreen: 1.2,
      },
    },
    h1: {
      size: {
        mobile: '36px',
        tablet: '44px',
        bigscreen: '52px',
      },
      lineheight: {
        mobile: 1.3,
        tablet: 1.3,
        bigscreen: 1.3,
      },
    },
    h2: {
      size: {
        mobile: '28px',
        tablet: '34px',
        bigscreen: '42px',
      },
      lineheight: {
        mobile: 1.3,
        tablet: 1.3,
        bigscreen: 1.3,
      },
    },
    h3: {
      size: {
        mobile: '20px',
        tablet: '30px',
        bigscreen: '36px',
      },
      lineheight: {
        mobile: 1.4,
        tablet: 1.4,
        bigscreen: 1.4,
      },
    },
    h4: {
      size: {
        mobile: '19px',
        tablet: '22px',
        bigscreen: '28px',
      },
      lineheight: {
        mobile: 1.4,
        tablet: 1.4,
        bigscreen: 1.4,
      },
    },
    h5: {
      size: {
        mobile: '18px',
        tablet: '20px',
        bigscreen: '24px',
      },
      lineheight: {
        mobile: 1.5,
        tablet: 1.5,
        bigscreen: 1.4,
      },
    },
    h6: {
      size: {
        mobile: '17px',
        tablet: '18px',
        bigscreen: '22px',
      },
      lineheight: {
        mobile: 1.5,
        tablet: 1.5,
        bigscreen: 1.4,
      },
    },
    text: {
      size: {
        mobile: 16,
        tablet: 17,
        bigscreen: 18,
      },
      lineheight: {
        mobile: 1.65,
        tablet: 1.65,
        bigscreen: 1.65,
      },
    },
    small: {
      size: {
        mobile: '11px',
        tablet: '13px',
        bigscreen: '15px',
      },
      lineheight: {
        mobile: 1.3,
        tablet: 1.3,
        bigscreen: 1.3,
      },
    },
  },
};

export default theme;
