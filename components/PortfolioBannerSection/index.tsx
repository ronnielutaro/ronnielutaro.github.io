import { memo } from 'react';

import { Section, Container, Spacing, Row, Col } from '../Layout';
import { BigHeading } from '../Heading';
import Subtitle from '../Subtitle';
import theme from '../../global/theme';

import portfolioBannerStyles from './PortfolioBanner.styles';
import { PortfolioBannerProps } from './PortfolioBanner.types';

function PortfolioBannerSection({
  title,
  shortDescrip,
  type,
}: PortfolioBannerProps) {
  return (
    <div css={portfolioBannerStyles(theme)}>
      <Section className="pt-3">
        <Container>
          <Row>
            <Col fraction={2}>
              <Subtitle data-aos="fade-up" data-aos-delay={150}>
                {type}
              </Subtitle>
              <BigHeading color={theme.colors.white} data-aos="fade-up" data-aos-delay={300}>
                <>
                  {title.split('').map((t, index) => (
                    <span key={`h-${index}`}>{t}</span>
                  ))}
                </>
              </BigHeading>
            </Col>
            <Col fraction={2}>
              <div className="align-l" data-aos="fade-up" data-aos-delay={300}>
                <p className="big-text-3 short-descrip">{shortDescrip}</p>
              </div>
            </Col>
          </Row>
          <Spacing size={2} />
        </Container>
      </Section>
    </div>
  );
}

export default memo(PortfolioBannerSection);
