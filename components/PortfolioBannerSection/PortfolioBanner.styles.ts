import { css, Theme } from '@emotion/react';
import { Breakpoints, mq } from '../../global/mq';

const portfolioBannerStyles = (theme: Theme) => css`
  & section {
    ${mq(Breakpoints.gs)} {
      padding-top: 72px !important;
      padding-bottom: 72px;
    }
  }

  & .row {
    ${mq(Breakpoints.tb)} {
      display: flex;
      align-items: center;
    }
  }

  & h1 {
    margin-top: 0.3rem;
    margin-bottom: 0.5rem;

    & span {
      transition: color 0.5s, opacity 0.5s;

      &:hover,
      &:focus {
        color: ${theme.colors.secondary};
      }
    }
  }

  & .align-r {
    position: relative;
  }

  & img {
    border-radius: 10px;
    margin-top: 2em;

    ${mq(Breakpoints.tb)} {
      margin-top: 0;
    }
  }

  & .type {
    color: ${theme.colors.grey};
    text-transform: uppercase;
  }

  & .short-descrip {
    color: ${theme.colors.lightGrey};
  }
`;

export default portfolioBannerStyles;
