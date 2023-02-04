import { css } from '@emotion/react';
import { Breakpoints, mq } from '../../global/mq';

const footerStyles = () => css`
  & .col-inner {
    margin: 0 0 20px 0;

    ${mq(Breakpoints.tb)} {
      margin: 0;
    }
  }

  & .copyright {
    text-transform: uppercase;
    text-align: right;
  }

  & .footer-logo {
    transform-origin: 10px;
  }

  & a:hover .footer-logo,
  & a:focus .footer-logo {
    transform: scale(1.05);
  }
`;

export default footerStyles;
