import { css, Theme } from '@emotion/react';
import { Breakpoints, mq } from '../../global/mq';

const headingStyles = (
  theme: Theme,
  color: string,
  size: number | string
) => css`
  font-family: ${theme.fonts.heading};
  color: ${color};

  ${size === 'bigHeading' &&
  css`
    font-size: ${theme.sizes.bigHeading.size.mobile};
    line-height: ${theme.sizes.bigHeading.lineheight.mobile};
    font-weight: 600;

    ${mq(Breakpoints.tb)} {
      font-size: ${theme.sizes.bigHeading.size.tablet};
      line-height: ${theme.sizes.bigHeading.lineheight.tablet};
    }
    ${mq(Breakpoints.ds)} {
      font-size: ${theme.sizes.bigHeading.size.desktop};
      line-height: ${theme.sizes.bigHeading.lineheight.desktop};
    }
    ${mq(Breakpoints.gs)} {
      font-size: ${theme.sizes.bigHeading.size.bigscreen};
      line-height: ${theme.sizes.bigHeading.lineheight.bigscreen};
    }
  `}

  ${size === 1 &&
  css`
    font-weight: 600;
    font-size: ${theme.sizes.h1.size.mobile};
    line-height: ${theme.sizes.h1.lineheight.mobile};

    ${mq(Breakpoints.tb)} {
      font-size: ${theme.sizes.h1.size.tablet};
      line-height: ${theme.sizes.h1.lineheight.tablet};
    }
    ${mq(Breakpoints.gs)} {
      font-size: ${theme.sizes.h1.size.bigscreen};
      line-height: ${theme.sizes.h1.lineheight.bigscreen};
    }
  `}

  ${size === 2 &&
  css`
    font-size: ${theme.sizes.h2.size.mobile};
    line-height: ${theme.sizes.h2.lineheight.mobile};

    ${mq(Breakpoints.tb)} {
      font-size: ${theme.sizes.h2.size.tablet};
      line-height: ${theme.sizes.h2.lineheight.tablet};
    }
    ${mq(Breakpoints.gs)} {
      font-size: ${theme.sizes.h2.size.bigscreen};
      line-height: ${theme.sizes.h2.lineheight.bigscreen};
    }
  `}

  ${size === 3 &&
  css`
    font-size: ${theme.sizes.h3.size.mobile};
    line-height: ${theme.sizes.h3.lineheight.mobile};

    ${mq(Breakpoints.tb)} {
      font-size: ${theme.sizes.h3.size.tablet};
      line-height: ${theme.sizes.h3.lineheight.tablet};
    }
    ${mq(Breakpoints.gs)} {
      font-size: ${theme.sizes.h3.size.bigscreen};
      line-height: ${theme.sizes.h3.lineheight.bigscreen};
    }
  `}

  ${size === 4 &&
  css`
    font-size: ${theme.sizes.h4.size.mobile};
    line-height: ${theme.sizes.h4.lineheight.mobile};

    ${mq(Breakpoints.tb)} {
      font-size: ${theme.sizes.h4.size.tablet};
      line-height: ${theme.sizes.h4.lineheight.tablet};
    }
    ${mq(Breakpoints.gs)} {
      font-size: ${theme.sizes.h4.size.bigscreen};
      line-height: ${theme.sizes.h4.lineheight.bigscreen};
    }
  `}

  ${size === 5 &&
  css`
    font-size: ${theme.sizes.h5.size.mobile};
    line-height: ${theme.sizes.h5.lineheight.mobile};

    ${mq(Breakpoints.tb)} {
      font-size: ${theme.sizes.h5.size.tablet};
      line-height: ${theme.sizes.h5.lineheight.tablet};
    }
    ${mq(Breakpoints.gs)} {
      font-size: ${theme.sizes.h5.size.bigscreen};
      line-height: ${theme.sizes.h5.lineheight.bigscreen};
    }
  `}

  ${size === 6 &&
  css`
    font-size: ${theme.sizes.h6.size.mobile};
    line-height: ${theme.sizes.h6.lineheight.mobile};

    ${mq(Breakpoints.tb)} {
      font-size: ${theme.sizes.h6.size.tablet};
      line-height: ${theme.sizes.h6.lineheight.tablet};
    }
    ${mq(Breakpoints.gs)} {
      font-size: ${theme.sizes.h6.size.bigscreen};
      line-height: ${theme.sizes.h6.lineheight.bigscreen};
    }
  `}
`;

export default headingStyles;
