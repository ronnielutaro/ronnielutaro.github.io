import { css, Theme } from '@emotion/react';
import { Breakpoints, mq } from './mq';
import projectTheme from './theme';
import { appBaseUrl, logoPath, logoButtonPath } from './defaultValues';

const theme: Theme = projectTheme;

const globalStyles = css`
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/poppins/v15/pxiEyp8kv8JHgFVrJJbecmNE.woff2)
      format('woff2');
    unicode-range: U+0900-097F, U+1CD0-1CF6, U+1CF8-1CF9, U+200C-200D, U+20A8,
      U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FB;
  }
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/poppins/v15/pxiEyp8kv8JHgFVrJJnecmNE.woff2)
      format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
      U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/poppins/v15/pxiEyp8kv8JHgFVrJJfecg.woff2)
      format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
      U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212,
      U+2215, U+FEFF, U+FFFD;
  }
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    src: url(https://fonts.gstatic.com/s/poppins/v19/pxiByp8kv8JHgFVrLGT9Z11lFc-K.woff2)
      format('woff2');
    unicode-range: U+0900-097F, U+1CD0-1CF6, U+1CF8-1CF9, U+200C-200D, U+20A8,
      U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FB;
  }
  /* latin-ext */
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    src: url(https://fonts.gstatic.com/s/poppins/v19/pxiByp8kv8JHgFVrLGT9Z1JlFc-K.woff2)
      format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
      U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    src: url(https://fonts.gstatic.com/s/poppins/v19/pxiByp8kv8JHgFVrLGT9Z1xlFQ.woff2)
      format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
      U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212,
      U+2215, U+FEFF, U+FFFD;
  }
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/poppins/v15/pxiByp8kv8JHgFVrLEj6Z11lFc-K.woff2)
      format('woff2');
    unicode-range: U+0900-097F, U+1CD0-1CF6, U+1CF8-1CF9, U+200C-200D, U+20A8,
      U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FB;
  }
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/poppins/v15/pxiByp8kv8JHgFVrLEj6Z1JlFc-K.woff2)
      format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
      U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/poppins/v15/pxiByp8kv8JHgFVrLEj6Z1xlFQ.woff2)
      format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
      U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212,
      U+2215, U+FEFF, U+FFFD;
  }

  @keyframes rubberBand {
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
  }
  .rubber-band {
    &:hover,
    &:focus {
      animation-name: rubberBand;
      animation-duration: 1s;
      animation-fill-mode: both;
      animation-iteration-count: 1;
    }
  }

  html,
  body {
    overflow-x: clip;
    margin: 0;
    padding: 0;
    min-height: 100%;
  }

  body {
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    font-family: ${theme.fonts.text};
    font-size: ${theme.sizes.text.size.mobile}px;
    line-height: ${theme.sizes.text.lineheight.mobile};
    color: ${theme.colors.light};
    background: ${theme.colors.dark};
    margin: 0;
    font-weight: 400;
    padding-top: 0;

    ${mq(Breakpoints.tb)} {
      font-size: ${theme.sizes.text.size.tablet}px;
      line-height: ${theme.sizes.text.lineheight.tablet};
    }
    ${mq(Breakpoints.bs)} {
      font-size: ${theme.sizes.text.size.bigscreen}px;
      line-height: ${theme.sizes.text.lineheight.bigscreen};
    }

    &.sticky-header {
      padding-top: 70px;
      ${mq(Breakpoints.ds)} {
        padding-top: 108px;
      }
      & #header {
        position: fixed;
        top: 0;
        left: 0;
      }
    }
  }

  .block {
    display: block;
  }

  .big-text-1,
  .big-text-1 p {
    font-size: ${theme.sizes.text.size.mobile * 1.1}px;
    line-height: ${theme.sizes.text.lineheight.mobile * 1};

    ${mq(Breakpoints.tb)} {
      font-size: ${theme.sizes.text.size.tablet * 1.125}px;
      line-height: ${theme.sizes.text.lineheight.tablet * 1};
    }
    ${mq(Breakpoints.bs)} {
      ${theme.sizes.text.size.bigscreen
        ? `font-size: ${theme.sizes.text.size.bigscreen * 1.125}px;`
        : ''}
      ${theme.sizes.text.lineheight.bigscreen
        ? `line-height: ${theme.sizes.text.lineheight.bigscreen * 1.12};`
        : ''}
    }
  }

  .big-text-2,
  .big-text-2 p {
    font-size: ${theme.sizes.text.size.mobile * 1.15}px;
    line-height: ${theme.sizes.text.lineheight.mobile * 1};

    ${mq(Breakpoints.tb)} {
      font-size: ${theme.sizes.text.size.tablet * 1.225}px;
      line-height: ${theme.sizes.text.lineheight.tablet * 1};
    }
    ${mq(Breakpoints.bs)} {
      ${theme.sizes.text.size.bigscreen
        ? `font-size: ${theme.sizes.text.size.bigscreen * 1.275}px;`
        : ''}
      ${theme.sizes.text.lineheight.bigscreen
        ? `line-height: ${theme.sizes.text.lineheight.bigscreen * 1.05};`
        : ''}
    }
  }

  .big-text-3,
  .big-text-3 p {
    font-size: ${theme.sizes.text.size.mobile * 1.225}px;
    line-height: ${theme.sizes.text.lineheight.mobile * 1};

    ${mq(Breakpoints.tb)} {
      font-size: ${theme.sizes.text.size.tablet * 1.3}px;
      line-height: ${theme.sizes.text.lineheight.tablet * 1};
    }
    ${mq(Breakpoints.bs)} {
      ${theme.sizes.text.size.bigscreen
        ? `font-size: ${theme.sizes.text.size.bigscreen * 1.375}px;`
        : ''}
      ${theme.sizes.text.lineheight.bigscreen
        ? `line-height: ${theme.sizes.text.lineheight.bigscreen * 1.275};`
        : ''}
    }
  }

  * {
    box-sizing: border-box;

    &:before,
    &:after {
      box-sizing: border-box;
    }

    &::selection {
      background: ${theme.colors.primaryDark};
      color: ${theme.colors.light};
    }
  }

  main {
    display: block;
  }

  hr {
    background: none;
    border: none;
    border-bottom: solid 1px ${theme.colors.grey};
    box-sizing: content-box;
    height: 0;
    overflow: visible;
    margin: 10px 0;
  }

  input,
  button,
  select,
  textarea {
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    font-family: ${theme.fonts.text};
    font-size: ${theme.sizes.text.size.mobile}px;

    ${mq(Breakpoints.tb)} {
      font-size: ${theme.sizes.text.size.tablet}px;
    }
    ${mq(Breakpoints.bs)} {
      font-size: ${theme.sizes.text.size.bigscreen}px;
    }
  }

  pre,
  code,
  kbd,
  samp {
    font-family: monospace;
  }

  pre {
    border-radius: 6px;
  }

  small {
    font-size: ${theme.sizes.small.size.mobile};
    line-height: ${theme.sizes.small.lineheight.mobile};

    ${mq(Breakpoints.tb)} {
      font-size: ${theme.sizes.small.size.tablet};
      line-height: ${theme.sizes.small.lineheight.tablet};
    }

    ${mq(Breakpoints.bs)} {
      font-size: ${theme.sizes.small.size.bigscreen};
      line-height: ${theme.sizes.small.lineheight.bigscreen};
    }
  }

  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  sub {
    bottom: -0.25em;
  }

  sup {
    top: -0.5em;
  }

  a,
  button {
    cursor: pointer;
    outline: none;
    text-decoration: none;
    transition: all 0.5s ease;
  }

  a {
    background-color: transparent;
    color: ${theme.colors.lightGrey};

    &:hover,
    &:focus {
      color: ${theme.colors.primary};
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 500;
    margin: 0 0 1rem;

    & a {
      color: ${theme.colors.primary};

      &:hover,
      &:focus {
        color: ${theme.colors.secondary};
      }
    }
  }

  .secondary-link {
    color: ${theme.colors.secondary};

    &:hover,
    &:focus {
      color: ${theme.colors.secondaryDark};
    }
  }
  .white-link {
    color: ${theme.colors.light};

    &:hover,
    &:focus {
      color: ${theme.colors.primary};
    }
  }
  .white-link-secondary {
    color: ${theme.colors.light};

    &:hover,
    &:focus {
      color: ${theme.colors.secondary};
    }
  }
  .alt-link {
    color: ${theme.colors.lightGrey};

    &:hover,
    &:focus {
      color: ${theme.colors.primary};
    }
  }
  .alt-link-secondary {
    color: ${theme.colors.lightGrey};

    &:hover,
    &:focus {
      color: ${theme.colors.secondary};
    }
  }
  .fade-text {
    color: ${theme.colors.lightGrey};
  }

  p {
    margin: 0 0 1rem;

    & a {
      color: ${theme.colors.primary};

      &:hover,
      &:focus {
        color: ${theme.colors.secondary};
      }
    }
  }

  img {
    transition: all 0.3s ease;
  }

  img {
    display: inline-block;
    max-width: 100%;
    width: auto;
    height: auto;
    border-style: none;
    object-fit: contain;
  }

  strong,
  b {
    font-weight: 600;
  }

  .cursor {
    position: fixed;
    border-radius: 50%;
    transform: translateX(-50%) translateY(-50%);
    pointer-events: none;
    left: -100px;
    top: 50%;
    /* mix-blend-mode: difference; */
    background-color: transparent;
    z-index: 10000000;
    border: 2px solid ${theme.colors.primary};
    height: 30px;
    width: 30px;
    transition: all 300ms ease-out;

    @media screen and (max-width: 1200px) {
      display: none;
    }
  }

  .cursor-inside {
    display: none;
  }

  .cursor.link {
    background-color: ${theme.colors.white};
    border: 2px solid ${theme.colors.white};
    opacity: 0.3;
    width: 40px;
    height: 40px;
  }

  .cursor.swipe {
    border: none !important;
    background-color: ${theme.colors.transparentDark};
    border: 2px solid ${theme.colors.transparentDark};
    opacity: 1;
    width: 80px;
    height: 80px;
  }

  .cursor.swipe .cursor-inside {
    display: block;
    width: 100%;
    padding: 28px 0;
    text-align: center;
    color: ${theme.colors.light};
    font-size: 20px;
  }

  .stat {
    max-width: 150px;
    margin: 0;

    ${mq(Breakpoints.tb)} {
      max-width: 200px;
      margin: auto;
    }
  }

  .color-primary {
    color: ${theme.colors.primary} !important;
  }

  .hide-mobile {
    display: none !important;

    ${mq(Breakpoints.tb)} {
      display: block !important;
    }
  }

  .float-mobile-right {
    float: right;

    ${mq(Breakpoints.tb)} {
      float: none;
    }
  }

  .w-50 {
    width: 50% !important;
  }

  .w-100 {
    width: 100% !important;
  }

  .w-mobile-50 {
    width: 50%;
    float: left;

    ${mq(Breakpoints.tb)} {
      width: 100%;
    }
  }

  .nowrap {
    white-space: nowrap;
  }

  .portrait {
    width: 100%;
    border-radius: 5px;
    display: block;
    transition: transform 0.3s;

    &:hover,
    &:focus {
      transform: scale(1.07) !important;
    }
  }

  .about-text {
    margin: 0;
    max-width: 640px;
  }

  .contact-text {
    ${mq(Breakpoints.tb)} {
      max-width: 470px;
    }
  }

  & .footer-social {
    list-style-type: none;
    margin: 10px 0 0 0;
    padding: 0;

    & li {
      display: inline-block;
      margin: 0 10px 0 0;

      ${mq(Breakpoints.tb)} {
        margin: 0 15px 0 0;
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
        background: ${theme.colors.secondary};
        color: ${theme.colors.white};
      }

      &.facebook a:hover .social-icon,
      &.facebook a:focus .social-icon {
        background: ${theme.colors.facebook};
        color: ${theme.colors.white};
      }

      &.github a:hover .social-icon,
      &.github a:focus .social-icon {
        background: ${theme.colors.github};
        color: ${theme.colors.white};
      }

      &.twitter a:hover .social-icon,
      &.twitter a:focus .social-icon {
        background: ${theme.colors.twitter};
        color: ${theme.colors.white};
      }

      &.linkedin a:hover .social-icon,
      &.linkedin a:focus .social-icon {
        background: ${theme.colors.linkedin};
        color: ${theme.colors.white};
      }

      &.instagram a:hover .social-icon,
      &.instagram a:focus .social-icon {
        background: ${theme.colors.instagram};
        color: ${theme.colors.white};
      }
    }

    & li:last-child {
      margin-right: 0;
    }
  }

  .playful {
    & span {
      transition: color 0.5s, opacity 0.5s;

      &:hover,
      &:focus {
        color: ${theme.colors.secondary};
      }
    }
  }

  .swiper-descrip {
    margin-top: 10px;
    font-weight: 400;
    font-size: 12px;
    text-align: center;
    color: ${theme.colors.lightGrey};
  }

  .swiper-button-disabled {
    opacity: 0 !important;
  }

  .swiper-slide {
    cursor: pointer;
  }

  .swiper-image {
    max-height: 85vh;
    padding-left: 11px;
    padding-right: 11px;

    ${mq(Breakpoints.bs)} {
      padding-left: 25px;
      padding-right: 25px;
    }
  }

  .swiper-button-next:after,
  .swiper-button-prev:after {
    font-size: 20px;

    ${mq(Breakpoints.ds)} {
      font-size: 40px;
    }
  }

  .swiper-button-prev {
    left: 0;

    ${mq(Breakpoints.ds)} {
      left: 10px;
    }
  }

  .swiper-button-next {
    right: 0;

    ${mq(Breakpoints.ds)} {
      right: 10px;
    }
  }

  .swiper-button-prev,
  .swiper-button-next {
    transition: opacity 0.5s;
    color: ${theme.colors.primary};
    text-shadow: 2px 2px 4px #000000;
  }

  .red {
    color: ${theme.colors.error};
  }

  .margin-top-mobile {
    margin-top: 2em;

    ${mq(Breakpoints.tb)} {
      margin-top: 0;
    }
  }

  .form-group {
    margin-bottom: 0.5em;
    float: left;
    width: 100%;

    .form-control {
      font-size: 15px;
      transition: color 0.5s, background 0.5s, border 0.5s;
      width: 100%;
      background: ${theme.colors.darkGrey};
      color: ${theme.colors.lightGrey};
      outline: none;
      float: left;
      border: solid 2px ${theme.colors.darkGrey};
      border-radius: 5px;
      padding: 10px;

      &:hover,
      &:focus {
        background: ${theme.colors.darkGrey};
        color: ${theme.colors.light};
        border-color: ${theme.colors.primary};
      }
    }

    label {
      display: block;
      font-size: 16px;
      color: ${theme.colors.light};
    }

    textarea {
      min-height: 150px;
    }

    &.error {
      .form-control {
        border-color: ${theme.colors.error} !important;
      }
    }

    & .error-text {
      font-size: 14px;
      font-weight: 500;
      color: ${theme.colors.error} !important;
    }
  }

  & .success-message,
  & .error-message {
    display: block;
    float: left;
    width: 100%;
    padding: 11px;
    font-size: 16px;
    margin: 0.25em 0;
    border-radius: 5px;
  }
  & .success-message {
    background: ${theme.colors.success};
  }
  & .error-message {
    background: ${theme.colors.error};
  }

  .cursor.link {
    background-color: ${theme.colors.white};
    border: 2px solid ${theme.colors.white};
    opacity: 0.3;
    width: 40px;
    height: 40px;
  }

  .clearfix:after,
  .row:after {
    display: block;
    visibility: hidden;
    clear: both;
    height: 0;
    font-size: 0;
    content: ' ';
  }

  .col-inner {
    padding: 0 ${theme.spacing.spacer / 2}px;

    ${mq(Breakpoints.mb)} {
      padding: 0 ${theme.spacing.spacer}px;
    }
  }

  .m-0 {
    margin: 0 !important;
  }
  .m-1 {
    margin: ${theme.spacing.spacer * 0.25}px !important;
  }
  .m-2 {
    margin: ${theme.spacing.spacer * 0.5}px !important;
  }
  .m-3 {
    margin: ${theme.spacing.spacer * 1}px !important;
  }
  .m-4 {
    margin: ${theme.spacing.spacer * 1.5}px !important;
  }
  .m-5 {
    margin: ${theme.spacing.spacer * 2}px !important;
  }
  .m-6 {
    margin: ${theme.spacing.spacer * 3}px !important;
  }
  .m-7 {
    margin: ${theme.spacing.spacer * 4}px !important;
  }
  .m-8 {
    margin: ${theme.spacing.spacer * 5}px !important;
  }
  .m-auto {
    margin: auto !important;
  }

  .mt-0 {
    margin-top: 0 !important;
  }
  .mt-1 {
    margin-top: ${theme.spacing.spacer * 0.25}px !important;
  }
  .mt-2 {
    margin-top: ${theme.spacing.spacer * 0.5}px !important;
  }
  .mt-3 {
    margin-top: ${theme.spacing.spacer * 1}px !important;
  }
  .mt-4 {
    margin-top: ${theme.spacing.spacer * 1.5}px !important;
  }
  .mt-5 {
    margin-top: ${theme.spacing.spacer * 2}px !important;
  }
  .mt-6 {
    margin-top: ${theme.spacing.spacer * 3}px !important;
  }
  .mt-7 {
    margin-top: ${theme.spacing.spacer * 4}px !important;
  }
  .mt-8 {
    margin-top: ${theme.spacing.spacer * 5}px !important;
  }
  .mt-auto {
    margin-top: auto !important;
  }

  .mb-0 {
    margin-bottom: 0 !important;
  }
  .mb-1 {
    margin-bottom: ${theme.spacing.spacer * 0.25}px !important;
  }
  .mb-2 {
    margin-bottom: ${theme.spacing.spacer * 0.5}px !important;
  }
  .mb-3 {
    margin-bottom: ${theme.spacing.spacer * 1}px !important;
  }
  .mb-4 {
    margin-bottom: ${theme.spacing.spacer * 1.5}px !important;
  }
  .mb-5 {
    margin-bottom: ${theme.spacing.spacer * 2}px !important;
  }
  .mb-6 {
    margin-bottom: ${theme.spacing.spacer * 3}px !important;
  }
  .mb-7 {
    margin-bottom: ${theme.spacing.spacer * 4}px !important;
  }
  .mb-8 {
    margin-bottom: ${theme.spacing.spacer * 5}px !important;
  }
  .mb-auto {
    margin-bottom: auto !important;
  }

  .ml-0 {
    margin-left: 0 !important;
  }
  .ml-0 {
    margin-left: ${theme.spacing.spacer * 0.25}px !important;
  }
  .ml-2 {
    margin-left: ${theme.spacing.spacer * 0.5}px !important;
  }
  .ml-3 {
    margin-left: ${theme.spacing.spacer * 1}px !important;
  }
  .ml-4 {
    margin-left: ${theme.spacing.spacer * 1.5}px !important;
  }
  .ml-5 {
    margin-left: ${theme.spacing.spacer * 2}px !important;
  }
  .ml-6 {
    margin-left: ${theme.spacing.spacer * 3}px !important;
  }
  .ml-7 {
    margin-left: ${theme.spacing.spacer * 4}px !important;
  }
  .ml-8 {
    margin-left: ${theme.spacing.spacer * 5}px !important;
  }
  .ml-auto {
    margin-left: auto !important;
  }

  .mr-0 {
    margin-right: 0 !important;
  }
  .mr-1 {
    margin-right: ${theme.spacing.spacer * 0.25}px !important;
  }
  .mr-2 {
    margin-right: ${theme.spacing.spacer * 0.5}px !important;
  }
  .mr-3 {
    margin-right: ${theme.spacing.spacer * 1}px !important;
  }
  .mr-4 {
    margin-right: ${theme.spacing.spacer * 1.5}px !important;
  }
  .mr-5 {
    margin-right: ${theme.spacing.spacer * 2}px !important;
  }
  .mr-6 {
    margin-right: ${theme.spacing.spacer * 3}px !important;
  }
  .mr-7 {
    margin-right: ${theme.spacing.spacer * 4}px !important;
  }
  .mr-8 {
    margin-right: ${theme.spacing.spacer * 5}px !important;
  }
  .mr-auto {
    margin-right: auto !important;
  }

  .p-0 {
    padding: 0 !important;
  }
  .p-1 {
    padding: ${theme.spacing.spacer * 0.25}px !important;
  }
  .p-2 {
    padding: ${theme.spacing.spacer * 0.5}px !important;
  }
  .p-3 {
    padding: ${theme.spacing.spacer * 1}px !important;
  }
  .p-4 {
    padding: ${theme.spacing.spacer * 1.5}px !important;
  }
  .p-5 {
    padding: ${theme.spacing.spacer * 2}px !important;
  }
  .p-6 {
    padding: ${theme.spacing.spacer * 3}px !important;
  }
  .p-7 {
    padding: ${theme.spacing.spacer * 4}px !important;
  }
  .p-8 {
    padding: ${theme.spacing.spacer * 5}px !important;
  }

  .pt-0 {
    padding-top: 0 !important;
  }
  .pt-1 {
    padding-top: ${theme.spacing.spacer * 0.25}px !important;
  }
  .pt-2 {
    padding-top: ${theme.spacing.spacer * 0.5}px !important;
  }
  .pt-3 {
    padding-top: ${theme.spacing.spacer * 1}px !important;
  }
  .pt-4 {
    padding-top: ${theme.spacing.spacer * 1.5}px !important;
  }
  .pt-5 {
    padding-top: ${theme.spacing.spacer * 2}px !important;
  }
  .pt-6 {
    padding-top: ${theme.spacing.spacer * 3}px !important;
  }
  .pt-7 {
    padding-top: ${theme.spacing.spacer * 4}px !important;
  }
  .pt-8 {
    padding-top: ${theme.spacing.spacer * 5}px !important;
  }

  .pb-0 {
    padding-bottom: 0 !important;
  }
  .pb-1 {
    padding-bottom: ${theme.spacing.spacer * 0.25}px !important;
  }
  .pb-2 {
    padding-bottom: ${theme.spacing.spacer * 0.5}px !important;
  }
  .pb-3 {
    padding-bottom: ${theme.spacing.spacer * 1}px !important;
  }
  .pb-4 {
    padding-bottom: ${theme.spacing.spacer * 1.5}px !important;
  }
  .pb-5 {
    padding-bottom: ${theme.spacing.spacer * 2}px !important;
  }
  .pb-6 {
    padding-bottom: ${theme.spacing.spacer * 3}px !important;
  }
  .pb-7 {
    padding-bottom: ${theme.spacing.spacer * 4}px !important;
  }
  .pb-8 {
    padding-bottom: ${theme.spacing.spacer * 5}px !important;
  }

  .pl-0 {
    padding-left: 0 !important;
  }
  .pl-1 {
    padding-left: ${theme.spacing.spacer * 0.25}px !important;
  }
  .pl-2 {
    padding-left: ${theme.spacing.spacer * 0.5}px !important;
  }
  .pl-3 {
    padding-left: ${theme.spacing.spacer * 1}px !important;
  }
  .pl-4 {
    padding-left: ${theme.spacing.spacer * 1.5}px !important;
  }
  .pl-5 {
    padding-left: ${theme.spacing.spacer * 2}px !important;
  }
  .pl-6 {
    padding-left: ${theme.spacing.spacer * 3}px !important;
  }
  .pl-7 {
    padding-left: ${theme.spacing.spacer * 4}px !important;
  }
  .pl-8 {
    padding-left: ${theme.spacing.spacer * 5}px !important;
  }

  .pr-0 {
    padding-right: 0 !important;
  }
  .pr-1 {
    padding-right: ${theme.spacing.spacer * 0.25}px !important;
  }
  .pr-2 {
    padding-right: ${theme.spacing.spacer * 0.5}px !important;
  }
  .pr-3 {
    padding-right: ${theme.spacing.spacer * 1}px !important;
  }
  .pr-4 {
    padding-right: ${theme.spacing.spacer * 1.5}px !important;
  }
  .pr-5 {
    padding-right: ${theme.spacing.spacer * 2}px !important;
  }
  .pr-6 {
    padding-right: ${theme.spacing.spacer * 3}px !important;
  }
  .pr-7 {
    padding-right: ${theme.spacing.spacer * 4}px !important;
  }
  .pr-8 {
    padding-right: ${theme.spacing.spacer * 5}px !important;
  }

  .w-50-all {
    width: 50% !important;
  }
  .w-30-all {
    width: 30% !important;
  }
  .w-70-all {
    width: 70% !important;
  }

  .align-c {
    text-align: center !important;
  }
  .align-l {
    text-align: left !important;
  }
  .align-r {
    text-align: right !important;
  }
  .align-j {
    text-align: justify !important;
  }

  #header {
    width: 70px;
    height: 70px;
    transition: background 0.3s;
    z-index: 1000;

    ${mq(Breakpoints.bs)} {
      height: 108px;
      width: 72px;
    }

    &.with-bg {
      width: 100%;
      background: ${theme.colors.dark};

      ${mq(Breakpoints.ds)} {
        background: transparent;
        width: 72px;
      }
      ${mq(Breakpoints.bs)} {
        background: transparent;
        width: 100px;
      }
      ${mq(Breakpoints.gs)} {
        width: ${theme.logo.width.big + 48}px;
      }
    }

    & .logo-image {
      position: absolute;
      height: 50px;
      width: 50px;
      background-image: url('${appBaseUrl}${logoButtonPath}');
      background-repeat: no-repeat;
      background-size: 50px 50px;
      left: 10px;
      top: 10px;
      z-index: 2000;

      &:hover,
      &:focus {
        animation-name: rubberBand;
        animation-duration: 1s;
        animation-fill-mode: both;
        animation-iteration-count: 1;
      }

      ${mq(Breakpoints.bs)} {
        left: 24px;
        top: 24px;
        height: 60px;
        width: 60px;
        background-size: 60px 60px;
      }

      ${mq(Breakpoints.gs)} {
        width: ${theme.logo.width.big}px;
        background-image: url('${appBaseUrl}${logoPath}');
        background-size: ${theme.logo.width.big}px 60px;
      }
    }
  }

  .opacity-transition-enter {
    opacity: 0;
  }
  .opacity-transition-exit {
    opacity: 1;
  }
  .opacity-transition-enter-active {
    opacity: 1;
    transition: opacity 0.3s linear;
  }
  .opacity-transition-exit-active {
    opacity: 0;
    transition: opacity 0.3s linear;
  }

  .opacity-transition-menu-enter {
    opacity: 0;
  }
  .opacity-transition-menu-exit {
    opacity: 1;
  }
  .opacity-transition-menu-enter-active {
    opacity: 1;
    transition: opacity 1s linear;
  }
  .opacity-transition-menu-exit-active {
    opacity: 0;
    transition: opacity 1s linear;
  }
`;

export default globalStyles;
