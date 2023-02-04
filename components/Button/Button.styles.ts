import { css, Theme } from '@emotion/react';
import { Breakpoints, mq } from '../../global/mq';

const buttonStyles = (
  theme: Theme,
  color: string,
  fullWidth: boolean,
  leftIcon: boolean,
  showIconOnHover: boolean
) => css`
  display: inline-flex;
  align-self: center;
  justify-content: center;
  padding: 11px 24px;
  width: ${fullWidth ? '100%' : 'auto'};
  text-align: center;
  margin-bottom: 10px;
  border-radius: 4px;
  position: relative;

  & svg {
    height: 28px;
    width: 20px;
    margin-${leftIcon ? 'right' : 'left'}: 18px;
  }

  ${
    showIconOnHover &&
    css`
      & span {
        margin-right: -42px;
        transition: margin 0.5s ease;
      }
      & svg {
        opacity: 0;
        transition: opacity 0.5s ease;
      }
      &:hover span,
      &:focus span {
        margin-right: 0;
      }
      &:hover svg,
      &:focus svg {
        opacity: 1;
      }
    `
  }

  ${mq(Breakpoints.tb)} {
    padding: 11px 28px;
    border-radius: 6px;

    & svg {
      margin-${leftIcon ? 'right' : 'left'}: 20px;
    }
  }
  ${mq(Breakpoints.bs)} {
    padding: 12px 30px;
    border-radius: 7px;
  }

  ${
    color === 'primary' &&
    css`
      background: ${theme.colors.primary};
      border: solid 2px ${theme.colors.primary};
      color: ${theme.colors.dark};

      &:hover,
      &:focus {
        background: ${theme.colors.primaryDark};
        border: solid 2px ${theme.colors.primaryDark};
        color: ${theme.colors.light};
      }
    `
  }

  ${
    color === 'secondary' &&
    css`
      background: ${theme.colors.secondary};
      border: solid 2px ${theme.colors.secondary};
      color: ${theme.colors.dark};

      &:hover,
      &:focus {
        background: ${theme.colors.secondaryDark};
        border: solid 2px ${theme.colors.secondaryDark};
        color: ${theme.colors.light};
      }
    `
  }

  ${
    color === 'light' &&
    css`
      background: ${theme.colors.lightGrey};
      border: solid 2px ${theme.colors.lightGrey};
      color: ${theme.colors.dark};

      &:hover,
      &:focus {
        background: ${theme.colors.grey};
        border: solid 2px ${theme.colors.grey};
        color: ${theme.colors.light};
      }
    `
  }

  ${
    color === 'primaryOutline' &&
    css`
      background: transparent;
      border: solid 2px ${theme.colors.primary};
      color: ${theme.colors.primary};

      &:hover,
      &:focus {
        background: ${theme.colors.primary};
        border: solid 2px ${theme.colors.primary};
        color: ${theme.colors.dark};
      }
    `
  }

  ${
    color === 'secondaryOutline' &&
    css`
      background: transparent;
      border: solid 2px ${theme.colors.secondary};
      color: ${theme.colors.secondary};

      &:hover,
      &:focus {
        background: ${theme.colors.secondary};
        border: solid 2px ${theme.colors.secondary};
        color: ${theme.colors.dark};
      }
    `
  }

  ${
    color === 'lightOutline' &&
    css`
      background: transparent;
      border: solid 2px ${theme.colors.lightGrey};
      color: ${theme.colors.lightGrey};

      &:hover,
      &:focus {
        background: ${theme.colors.lightGrey};
        border: solid 2px ${theme.colors.lightGrey};
        color: ${theme.colors.dark};
      }
    `
  }
`;

export default buttonStyles;
