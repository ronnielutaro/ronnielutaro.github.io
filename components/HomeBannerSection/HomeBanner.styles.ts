import { css, Theme } from '@emotion/react';
import { Breakpoints, mq } from '../../global/mq';
import {
  headShakeAnimateInfinite,
  bounceAnimateInfinite,
  landArrowAnimateInfinite,
} from '../../global/helperStyles';

const homeBannerStyles = (theme: Theme) => css`
  & section {
    position: relative;
    margin-top: -108px;
    padding-top: 108px;
    min-height: 104vh;
    display: flex;
    align-items: center;

    ${mq(Breakpoints.mb)} {
      min-height: 100vh;
    }
  }
  & .row,
  & .container {
    height: 100%;
  }

  ${mq(Breakpoints.ds)} {
    & .text-column {
      width: 44%;
    }
    & .svg-column {
      width: 56%;
    }
  }

  & .svg-column {
    display: none;
    margin-top: 40px;
    margin-left: -10px;
    transition: transform 0.5s;
    transform: scale(1.1);

    @media (max-width: 850px) {
      transform: scale(1.35);
    }

    ${mq(Breakpoints.tb)} {
      display: block;
      margin-top: 0;
      margin-left: 0;
    }
  }

  & section {
    ${mq(Breakpoints.gs)} {
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
    font-size: 48px;
    line-height: 1.3;

    ${mq(Breakpoints.tb)} {
      font-size: 52px;
      line-height: 1.2;
    }
    ${mq(Breakpoints.ds)} {
      font-size: 62px;
    }
    ${mq(Breakpoints.bs)} {
      font-size: 70px;
    }
    ${mq(Breakpoints.gs)} {
      font-size: 80px;
    }

    & span {
      transition: color 1s, opacity 0.5s;
      display: inline-block;
      color: ${theme.colors.primary};

      &:hover,
      &:focus {
        ${headShakeAnimateInfinite}
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

  & .intro {
    color: ${theme.colors.light};
    width: 90%;
    max-width: 440px;

    ${mq(Breakpoints.tb)} {
      width: 100%;
    }
    ${mq(Breakpoints.ds)} {
      width: 100%;
    }

    & span {
      transition: margin 0.5s, color 0.5s, transform 0.5s;

      &:hover,
      &:focus {
        color: ${theme.colors.secondary};
      }
    }
  }

  & .svg-container {
    display: inline-block;
    position: relative;
    width: 100%;
    padding-bottom: 73%;
    vertical-align: middle;
    overflow: hidden;
    transform: scale(-1, 1);

    ${mq(Breakpoints.tb)} {
      transform: none;
    }
  }

  & .svg-content {
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
    & #lift-img-scroll {
      will-change: transform;
      transition: transform 0.2s;
    }
  }

  & .hire-button {
    ${bounceAnimateInfinite}
    margin-top: 10px;

    ${mq(Breakpoints.tb)} {
      margin-top: 0;
      animation: none;
    }
  }

  & .scroll-text {
    cursor: pointer;
    color: rgba(255, 255, 255, 0.5);
    position: absolute;
    writing-mode: vertical-rl;
    bottom: 10.5vh;
    font-size: 11px;
    letter-spacing: 2px;
    display: inline-block;
    padding-bottom: 5px;

    &.left {
      left: 8px;
    }
    &.right {
      right: 8px;
    }

    ${mq(Breakpoints.mb)} {
      bottom: 13vh;
      padding-bottom: 10px;

      &.left {
        left: 22px;
      }
      &.right {
        right: 23px;
      }
    }
  }

  & .landing-arrow {
    display: block;
    cursor: pointer;

    &.right {
      right: 15px;
    }
    &.left {
      left: 15px;
    }

    position: absolute;
    bottom: 2.5%;
    z-index: 4;
    overflow: hidden;
    width: 4px;
    background: rgba(255, 255, 255, 0.2);
    height: 7.5vh;

    & span {
      position: relative;
      display: block;
      top: -7.5vh;
      width: 100%;
      height: 100%;
      ${landArrowAnimateInfinite}
      animation-delay: 1s;
      background: rgba(255, 255, 255, 0.4);
    }

    ${mq(Breakpoints.mb)} {
      &.right {
        right: 30px;
      }
      &.left {
        left: 30px;
      }

      width: 4px;
      bottom: 5.5%;
      height: 7.5vh;

      & span {
        ${landArrowAnimateInfinite}
        top: -7.5vh;
      }
    }
  }
`;

export default homeBannerStyles;
