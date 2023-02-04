import { memo } from 'react';

import { Row, Col } from '../Layout';
import { H1 } from '../Heading';
import theme from '../../global/theme';
import { fileBaseUrl } from '../../global/defaultValues';

import blogBannerStyles from './BlogBanner.styles';
import { BlogBannerProps } from './BlogBanner.types';

function BlogBanner({ title, publishDateTime, lastUpdateDateTime, image }: BlogBannerProps) {
  return (
    <div css={blogBannerStyles(theme)}>
      <Row>
        <Col fraction={1} className="align-c blog-header">
          <p className="date mb-1" data-aos="fade-up">
            Published: {publishDateTime} - Last Updated: {lastUpdateDateTime}
          </p>
          <H1 color="default" data-aos="fade-up">{title}</H1>
        </Col>
        <Col fraction={1} className="align-c">
          <img src={`${fileBaseUrl}${image}`} alt={title} />
        </Col>
      </Row>
    </div>
  );
}

export default memo(BlogBanner);
