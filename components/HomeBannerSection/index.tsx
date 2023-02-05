import { memo } from 'react';
import { HiArrowRight } from 'react-icons/hi';

import { Section, Container, Spacing, Row, Col } from '../Layout';
import { BigHeading } from '../Heading';
import Subtitle from '../Subtitle';
import Button from '../Button';
import homeBannerStyles from './HomeBanner.styles';
import theme from '../../global/theme';
import { devName, devFirstName } from '../../global/defaultValues';
import { scrollToElement } from '../../helpers';

import SvgImage from './SvgImage';
import { HomeBannerTypes } from './HomeBanner.types';

function HomeBannerSection({ scrollToRef }: HomeBannerTypes) {
  const devDescrip =
    `A Software Engineer from Kampala, Uganda mostly working on 
    Computer Graphics Technology with a focus on Rendering & Simulation for Virtual Reality 
    and Visual Effects for film & television.`;

  const scrollDown = () => {
    if (scrollToRef.current) {
      scrollToElement(scrollToRef.current);
    }
  };

  return (
    <div css={homeBannerStyles(theme)}>
      <Section>
        <Container>
          <Spacing size={2} />
          <Row>
            <Col fraction={2} className="text-column">
              <Subtitle>{devName}</Subtitle>
              <BigHeading color="primary" 
                data-aos="flip-down"
                data-aos-delay={300}
                data-aos-duration={600}
                data-aos-easing="ease-in-sine"
              >
                <>
                  Hi there,
                  <br />
                  I&rsquo;m <span>{devFirstName}</span>
                </>
              </BigHeading>
              <p
                className="intro"
                data-aos="fade-zoom-in"
                data-aos-offset="0"
                data-aos-delay={300}
                data-aos-duration={1000}
                data-aos-easing="ease-in-sine"
              >
                {devDescrip.split(' ').map((t, index) => (
                  <span key={`h-${index}`}>{t} </span>
                ))}
              </p>
              <div>
                <Button href="/contact" color="primary">
                  <span>Reach Out</span>
                  <HiArrowRight />
                </Button>
              </div>
            </Col>
            <Col fraction={2} className="svg-column">
              <div className="svg-container">
                <SvgImage />
              </div>
            </Col>
          </Row>
          <Spacing size={2} />
        </Container>
        <a className="scroll-text left" onClick={scrollDown}>
          SCROLL
        </a>
        <a className="landing-arrow left" onClick={scrollDown}>
          <span />
        </a>
        <a className="scroll-text right" onClick={scrollDown}>
          SCROLL
        </a>
        <a className="landing-arrow right" onClick={scrollDown}>
          <span />
        </a>
      </Section>
    </div>
  );
}

export default memo(HomeBannerSection);
