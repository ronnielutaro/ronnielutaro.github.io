import { css, keyframes } from '@emotion/react';

export const specialTextStyles = css`
  font-weight: 500;
`;

export const underlineLink = (base: string, hover: string) => css`
  border-bottom: solid 2px ${base};
  &:hover,
  &:focus {
    color: ${hover};
  }
`;

export const bounce = keyframes`
  from, 20%, 53%, 80%, to {
    transform: translate3d(0,0,0);
  }

  40%, 43% {
    transform: translate3d(0, -5px, 0);
  }

  70% {
    transform: translate3d(0, -2.5px, 0);
  }

  90% {
    transform: translate3d(0,-1.5px,0);
  }
`;
export const bounceAnimateInfinite = css`
  animation-name: ${bounce};
  animation-duration: 1s;
  animation-fill-mode: both;
  animation-iteration-count: 1;
  animation-iteration-count: infinite;
`;

export const fadeInRight = keyframes`
    from {
        opacity:0;
        transform: translatex(-200px);
    }
    to {
        opacity:1;
        transform: translatex(0);
    }
`;

export const headShake = keyframes`
    0 {
      transform: translateX(0);
    }

    12.5% {
      transform: translateX(-6px) rotateY(-9deg) skewY(1deg);
    }

    37.5% {
      transform: translateX(5px) rotateY(4.5deg) skewY(-1deg);
    }

    62.5% {
      transform: translateX(-3px) rotateY(-2.25deg) skewY(0);
    }

    87.5% {
      transform: translateX(2px) rotateY(3deg);
    }

    100% {
      transform: translateX(0);
    }
`;
export const headShakeAnimate = css`
  animation-duration: 0.5s;
  animation-timing-function: cubic-bezier(0, 0.23, 1, 0.71);
  animation-name: ${headShake};
  transform-origin: center bottom;
`;
export const headShakeAnimateInfinite = css`
  animation-duration: 0.5s;
  animation-timing-function: cubic-bezier(0, 0.23, 1, 0.71);
  animation-name: ${headShake};
  transform-origin: center bottom;
  animation-iteration-count: infinite;
`;

export const opacity = keyframes`
  0%   { opacity: 1; }
  50%  { opacity: 0; }
  100% { opacity: 1; }
`;
export const opacityAnimate = css`
  animation: ${opacity} 0.5s infinite;
`;

export const moveLoading = keyframes`
  from {
    background-position: 0 0
  }
  to {
    background-position: 200px 0
  }
`;

export const rubberBand = keyframes`
from {
      transform: scale3d(1, 1, 1);
    }

    30% {
      transform: scale3d(1.25, 0.75, 1);
    }

    40% {
      transform: scale3d(0.75, 1.25, 1);
    }

    50% {
      transform: scale3d(1.15, 0.85, 1);
    }

    65% {
      transform: scale3d(0.95, 1.05, 1);
    }

    75% {
      transform: scale3d(1.05, 0.95, 1);
    }

    to {
      transform: scale3d(1, 1, 1);
    }
`;
export const rubberBandAnimate = css`
  animation-name: ${rubberBand};
  animation-duration: 1s;
  animation-fill-mode: both;
  animation-iteration-count: 1;
`;
export const rubberBandAnimateInfinite = css`
  animation-name: ${rubberBand};
  animation-duration: 1s;
  animation-fill-mode: both;
  animation-iteration-count: 1;
  animation-iteration-count: infinite;
`;

export const bigBounce = keyframes`
  from, 20%, 53%, 80%, to {
    transform: translate3d(0,0,0);
  }

  40%, 43% {
    transform: translate3d(0, -200px, 0);
  }

  70% {
    transform: translate3d(0, -100px, 0);
  }

  90% {
    transform: translate3d(0,-30px,0);
  }
`;
export const bigBounceAnimateInfinite = css`
  animation-name: ${bigBounce};
  animation-duration: 1.3s;
  animation-fill-mode: both;
  animation-iteration-count: 1;
  animation-iteration-count: infinite;
`;

export const landArrow = keyframes`
  0% { top:-7.5vh;}
  50% { top:0; }
  100% { top:7.5vh; }
`;
export const landArrowMobile = keyframes`
  0% { top:-10vh;}
  50% { top:0; }
  100% { top:10vh; }
`;
export const landArrowAnimateInfinite = css`
  animation-name: ${landArrow};
  animation-duration: 2s;
  animation-timing-function: ease;
  animation-delay: 2s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
`;
export const landArrowAnimateMobileInfinite = css`
  animation-name: ${landArrowMobile};
  animation-duration: 2s;
  animation-timing-function: ease;
  animation-delay: 2s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
`;
