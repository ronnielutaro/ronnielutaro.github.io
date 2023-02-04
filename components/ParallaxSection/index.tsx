import { useEffect, memo } from 'react';

import { fileBaseUrl } from '../../global/defaultValues';
import parallaxSectionStyles from './ParallaxSection.styles';
import { ParallaxSectionProps } from './ParallaxSection.types';

function ParallaxSection({ image }: ParallaxSectionProps) {
  useEffect(() => {
    const body = document.querySelector('body');

    if (body) {
      body.classList.add('parallax-page');

      return () => {
        body.classList.remove('parallax-page');
      };
    }
  });

  return (
    <div
      className="parallax-section"
      css={parallaxSectionStyles(`${fileBaseUrl}${image}`)}
    />
  );
}

export default memo(ParallaxSection);
