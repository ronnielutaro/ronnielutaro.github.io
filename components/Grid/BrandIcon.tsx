import { DiIllustrator } from 'react-icons/di';
import { GiAirBalloon } from 'react-icons/gi';
import { IoLogoHtml5, IoLogoJavascript, IoLogoNodejs } from 'react-icons/io';
import { GrWordpress } from 'react-icons/gr';
import { FaPhp, FaReact } from 'react-icons/fa';

import { BrandIconProps } from './Grid.types';

function BrandIcon({ brand }: BrandIconProps) {
  switch (brand) {
    case 'Adobe Creative Suite':
      return (
        <span className="icon-holder">
          <DiIllustrator />
        </span>
      );
    case 'Corel Draw':
      return (
        <span className="icon-holder">
          <GiAirBalloon />
        </span>
      );
    case 'HTML5':
      return (
        <span className="icon-holder">
          <IoLogoHtml5 />
        </span>
      );
    case 'HTML5/CSS3':
      return (
        <span className="icon-holder">
          <IoLogoHtml5 />
        </span>
      );
    case 'JavaScript':
      return (
        <span className="icon-holder">
          <IoLogoJavascript />
        </span>
      );
    case 'WordPress':
      return (
        <span className="icon-holder">
          <GrWordpress />
        </span>
      );
    case 'WordPress CMS':
      return (
        <span className="icon-holder">
          <GrWordpress />
        </span>
      );
    case 'PHP':
      return (
        <span className="icon-holder">
          <FaPhp />
        </span>
      );
    case 'NodeJS':
      return (
        <span className="icon-holder">
          <IoLogoNodejs />
        </span>
      );
    case 'ReactJS':
      return (
        <span className="icon-holder">
          <FaReact />
        </span>
      );

    default:
      return null;
  }
}

export default BrandIcon;
