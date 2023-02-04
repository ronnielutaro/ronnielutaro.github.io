import { css, Theme } from '@emotion/react';
import { opacityAnimate, moveLoading } from '../../global/helperStyles';

const loadingScreenStyles = (theme: Theme) => css`
  position: fixed;
  z-index: 2500;
  width: 100%;
  height: 100vh;
  top: 0;
  left 0:
  overflow-y: auto;
  background: ${theme.colors.darkest};
  display: flex;
  align-items: center;
  text-align: center;

  & .row {
    margin: 0 auto;
  }

  & .shades {
    ${opacityAnimate}
  }

  svg {
    margin-top: -30px;
  }

  & .progressbar {
    display: block;
    position: absolute;
    z-index: 9;
    top: 70px;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    width: 200px;
    height: 15px;
  }
  & .progressbar::before {
    box-shadow: 0 6px 10px 0 rgb(0 0 0 / 10%);
  }
  & .progressbar::after {
    z-index: 9;
    top: 6px;
    filter: blur(16px);
    opacity: 0.7;
  }
  & .progressbar::before, & .progressbar::after {
    content: '';
    display: block;
    position: absolute;
    z-index: 99;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 15px;
    background-image: linear-gradient(90deg, ${theme.colors.primary} 0%, ${theme.colors.secondaryDark} 40%,${theme.colors.secondaryDark} 60%, ${theme.colors.primary} 100%);
    background-position: 0 0;
    animation: ${moveLoading} .5s linear infinite;
  }
  & .stylization {
    position: absolute;
    z-index: 999;
    height: 5px;
    width: 90%;
    left: 5%;
    top: 5px;
    opacity: 0.2;
  }
  & .stylization::before {
    background: #fff;
    left: 0;
    right: 10px;
  }
  & .stylization::before, & .stylization::after {
    content: '';
    display: block;
    position: absolute;
    height: 4px;
    top: 0;
    border-radius: 2px;
  }

  @keyframes movebar
`;

export default loadingScreenStyles;
