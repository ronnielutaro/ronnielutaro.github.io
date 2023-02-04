import { useEffect, useState } from 'react';

import Link from 'next/link';
import { H4 } from '../Heading';
import { fileBaseUrl } from '../../global/defaultValues';

import { CardProps } from './Grid.types';
import theme from '../../global/theme';

function Card({ data, visible }: CardProps) {
  const [transition, setTransition] = useState('transition-start');
  useEffect(() => {
    if (visible) {
      setTransition('transition-finish');
    } else {
      setTransition('transition-start');
    }
  }, [visible]);

  return (
    <Link href={`/portfolio/${data.uri}`}>
      <a className={`${visible ? 'show ' : 'hide '}card-holder ${transition}`}>
        <div className="image-holder">
          <img src={`${fileBaseUrl}${data.thumb}`} alt={data.title} />
          <div className="image-hover">
            <div className="zoom-holder">Case Study</div>
          </div>
        </div>
        <div className="card-title">
          <H4 color={theme.colors.white}>{data.title}</H4>
        </div>
      </a>
    </Link>
  );
}

export default Card;
