import { css, Theme } from '@emotion/react';
import { Breakpoints, mq } from '../../global/mq';
import { headShakeAnimate } from '../../global/helperStyles';

export const menuSwitchStyles = (theme: Theme, open: boolean) => css`
  position: fixed;
  z-index: 2000;
  width: 48px;
  height: 48px;
  border-radius: 0;
  border: none;
  background: ${theme.colors.darkest};
  padding: 5px;
  font-size: 0;
  -webkit-transition: all 0.5s;
  -o-transition: all 0.5s;
  transition: all 0.5s;
  box-shadow: 0px 0px 10px 0px ${theme.colors.darkGrey};
  top: 11px;
  right: 11px;

  ${mq(Breakpoints.bs)} {
    width: 50px;
    height: 50px;
    right: 29px;
    top: 29px;

    &:hover:before,
    &:hover:after {
      background: ${theme.colors.primary};
    }
  }

  &:before,
  &:after {
    content: '';
    display: inline-block;
    width: 24px;
    height: 2px;
    background: ${theme.colors.white};
    transition: transform 0.25s, background 0.5s;
  }

  &:before {
    margin-bottom: 3px;
  }
  &:after {
    margin-top: 3px;
  }

  ${open &&
  css`
    &:after {
      transform: translateY(-4px) rotate(-45deg);
      background: ${theme.colors.secondaryDark} !important;
    }
    &:before {
      transform: translateY(4px) rotate(45deg);
      background: ${theme.colors.secondaryDark} !important;
    }
  `}
`;

export const menuStyles = (theme: Theme) => css`
  position: fixed;
  z-index: 1000;
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  background: ${theme.colors.darkest} !important;
  display: flex;
  align-items: flex-start;
  text-align: center;

  @media (min-height: 514px) {
    align-items: center;
  }

  ${mq(Breakpoints.tb)} {
    text-align: left;
  }

  & .row {
    max-width: 600px;
    margin: 0 auto;

    & .col-links {
      height: 300px;

      ${mq(Breakpoints.tb)} {
        height: auto;
      }
    }
    & .social-column {
      overflow: hidden;
    }
  }

  & h1 {
    overflow: hidden;
    font-size: 30px;
    line-height: 35px;

    ${mq(Breakpoints.tb)} {
      font-size: ${theme.sizes.h1.size.tablet} !important;
      line-height: ${theme.sizes.h1.lineheight.tablet} !important;
    }
  }

  & h1 a {
    color: ${theme.colors.light};
    display: inline-block;
  }
  & h1 a:hover,
  & h1 a:focus {
    color: ${theme.colors.primary};
    ${headShakeAnimate}
  }
  & h1 a.active {
    color: ${theme.colors.primary};
  }

  & .menu-social-title {
    display: none;

    ${mq(Breakpoints.tb)} {
      display: block;
    }
  }

  & .menu-social {
    list-style-type: none;
    margin: 20px 0 0 0;
    padding: 0;

    ${mq(Breakpoints.tb)} {
      margin: 0;
    }

    & li {
      display: inline-block;
      margin: 0 5px;

      ${mq(Breakpoints.tb)} {
        display: block;
        margin: 0 0 20px 0;
      }

      & .social-text {
        padding-left: 20px;
        display: none;
        transition: color 0.5s;

        ${mq(Breakpoints.tb)} {
          display: inline-block;
          line-height: 30px;
        }
      }

      & a {
        height: 30px;
        display: inline-block;
      }

      & a .social-text {
        color: ${theme.colors.light};
        vertical-align: top;
      }
      & a:hover .social-text,
      & a:focus .social-text {
        color: ${theme.colors.secondary};
      }

      & .social-icon {
        height: 30px;
        width: 30px;
        display: inline-block;
        border-radius: 5px;
        background: ${theme.colors.light};
        color: ${theme.colors.dark};
        transition: all 0.5s;
        text-align: center;
        padding: 5px;

        & svg {
          width: 20px;
          height: 20px;
        }
      }

      & a:hover .social-icon,
      & a:focus .social-icon {
        transform: scale(1.2);
        background: ${theme.colors.secondary};
        color: ${theme.colors.white};
      }

      &.facebook a:hover .social-icon,
      &.facebook a:focus .social-icon {
        background: ${theme.colors.facebook};
        color: ${theme.colors.white};
      }
      &.facebook a:hover .social-text,
      &.facebook a:focus .social-text {
        color: ${theme.colors.facebook};
      }

      &.github a:hover .social-icon,
      &.github a:focus .social-icon {
        background: ${theme.colors.github};
        color: ${theme.colors.white};
      }
      &.github a:hover .social-text,
      &.github a:focus .social-text {
        color: ${theme.colors.github};
      }

      &.twitter a:hover .social-icon,
      &.twitter a:focus .social-icon {
        background: ${theme.colors.twitter};
        color: ${theme.colors.white};
      }
      &.twitter a:hover .social-text,
      &.twitter a:focus .social-text {
        color: ${theme.colors.twitter};
      }

      &.linkedin a:hover .social-icon,
      &.linkedin a:focus .social-icon {
        background: ${theme.colors.linkedin};
        color: ${theme.colors.white};
      }
      &.linkedin a:hover .social-text,
      &.linkedin a:focus .social-text {
        color: ${theme.colors.linkedin};
      }

      &.instagram a:hover .social-icon,
      &.instagram a:focus .social-icon {
        background: ${theme.colors.instagram};
        color: ${theme.colors.white};
      }
      &.instagram a:hover .social-text,
      &.instagram a:focus .social-text {
        color: ${theme.colors.instagram};
      }
    }
  }

  & .nav-transition-enter,
  & .nav-transition-exit-active {
    margin-left: -280px;
  }
  & .nav-transition-exit,
  & .nav-transition-enter-active {
    margin-left: 0;
  }

  .social-transition-enter {
    margin-top: -100px;
  }
  .social-transition-exit {
    margin-top: 0;
  }
  .social-transition-enter-active {
    margin-top: 0;
    transition: margin 0.4s linear;
  }
  .social-transition-exit-active {
    margin-top: -100px;
    transition: margin 0.4s linear;
  }
`;
