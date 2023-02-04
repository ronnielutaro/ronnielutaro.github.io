import { css, Theme } from '@emotion/react';
import { Breakpoints, mq } from '../../global/mq';

export const sectionStyles = (theme: Theme, background: string, color: string) =>
  css`
    display: block;
    background: ${background};
    color: ${color};
    padding: ${theme.spacing.spacer * 2.5}px 0;

    ${mq(Breakpoints.tb)} {
      padding: ${theme.spacing.spacer * 3}px 0;
    }
  `;

export const containerStyles = (theme: Theme, fullWidth: boolean, background: string, color: string) =>
  css`
    display: block;
    background: ${background};
    color: ${color};
    margin: 0 auto;
    width: 100%;
    max-width: ${fullWidth ? '100%' : theme.spacing.maxWidth};

    ${mq(Breakpoints.bs)} {
      max-width: ${fullWidth ? '100%' : theme.spacing.maxWidthLaptop};
    }

    ${mq(Breakpoints.gs)} {
      max-width: ${fullWidth ? '100%' : theme.spacing.maxWidthLimit};
    }
  `;

export const rowStyles = (theme: Theme, background: string, color: string) =>
  css`
    display: block;
    background: ${background};
    color: ${color};
    padding: 0 ${theme.spacing.spacer * 1}px;

    ${mq(Breakpoints.mb)} {
      padding: 0 ${theme.spacing.spacer * 2}px;
    }
    ${mq(Breakpoints.tb)} {
      padding: 0 ${theme.spacing.spacer * 3}px;
    }
  `;

export const spacingStyles = (theme: Theme, size: number) =>
  css`
    display: block;
    width: 100%;
    height: ${theme.spacing.spacer * size}px;
  `;

export const colStyles = (
  background: string,
  color: string,
  fraction: number,
  size: number
) => css`
  display: block;
  background: ${background};
  color: ${color};
  width: 100%;
  float: left;

  ${fraction >= 3 &&
  css`
    ${mq(Breakpoints.tb)} {
      width: 50%;
    }
  `}

  ${mq(Breakpoints.tb)} {
    width: ${Math.min(Math.floor((100 / fraction) * size), 100)}%;
  }

  &.col-right-desktop .col-inner {
    float: none;

    ${mq(Breakpoints.tb)} {
      float: right;
    }
  }
`;
