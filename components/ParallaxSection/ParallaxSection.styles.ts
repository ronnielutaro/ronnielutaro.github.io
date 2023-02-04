import { css } from '@emotion/react';
import { Breakpoints, mq } from '../../global/mq';

const parallaxSectionStyles = (image: string) => css`
  background-image: url(${image});
  background-repeat: no-repeat;
  background-size: cover;
  height: 360px;
  max-height: 100vh;
  transition: all 0.5s;

  ${mq(Breakpoints.ds)} {
    background-attachment: fixed;
    background-position: 50% 50%;
  }

  ${mq(Breakpoints.tb)} {
    height: 768px;
  }
  ${mq(Breakpoints.gs)} {
    height: 100vh;
  }
`;

export default parallaxSectionStyles;
