import { useRef } from 'react';
import { HiArrowRight } from 'react-icons/hi';

import Root from '../components/Root';
import Grid from '../components/Grid';
import Footer from '../components/Footer';
import HomeBannerSection from '../components/HomeBannerSection';
import { BigHeading, H2 } from '../components/Heading';
import Button from '../components/Button';
import Subtitle from '../components/Subtitle';
import { Section, Container, Row, Col, Spacing } from '../components/Layout';
import theme from '../global/theme';
import { GetStaticProps } from 'next';
import { PortfolioGridData } from '../types/portfolioData';
import { getAllProjects } from '../helpers/projects'

import {
  siteTitle,
  siteMetaDescription,
  aboutExcerpt,
} from '../global/defaultValues';

export default function Home({
  portfolioGridData
}: {
  portfolioGridData: PortfolioGridData[]
}) {
  const scrollToRef = useRef<HTMLDivElement>(null);

  return (
    <Root title={siteTitle} description={siteMetaDescription}>
      <HomeBannerSection scrollToRef={scrollToRef} />
      <div ref={scrollToRef} />
      <Spacing size={4} />
      <Section data-aos="fade-up" className="pb-0">
        <Container>
          <Row>
            <Col size={1}>
              <Subtitle color="secondary">Portfolio</Subtitle>
              <H2 color={theme.colors.white}>Notable Projects I&rsquo;ve worked on</H2>
            </Col>
          </Row>
        </Container>
      </Section>
      <Grid data={portfolioGridData} featured className="pt-4 pb-1" />
      <Section className="pt-0">
        <Container>
          <Row>
            <Col size={1}>
              <Button href="/portfolio" color="secondaryOutline">
                View Portfolio
                <HiArrowRight />
              </Button>
            </Col>
          </Row>
        </Container>
      </Section>
      <Section className="pb-0" data-aos="fade-up">
        <Container>
          <Row>
            <Col fraction={3} size={2} data-aos="fade-up">
              <Subtitle color="primary">About Me</Subtitle>
              <p className="mt-1 big-text-2">{aboutExcerpt}</p>
              <Button href="/about" color="primaryOutline">
                Learn More
                <HiArrowRight />
              </Button>
            </Col>
            <Col fraction={3} className="hide-mobile">
              <div
                className="mb-5 align-c"
                data-aos-delay={100}
                data-aos="zoom-in"
              >
                <div className="stat">
                  <Subtitle align="center" color="primary">
                    &nbsp;Years&nbsp;
                  </Subtitle>
                  <BigHeading color={theme.colors.white}>5+</BigHeading>
                </div>
              </div>
              <div
                className="mb-1 align-c"
                data-aos-delay={100}
                data-aos="zoom-in"
              >
                <div className="stat">
                  <Subtitle align="center" color="primary">
                    Projects
                  </Subtitle>
                  <BigHeading color={theme.colors.white}>20+</BigHeading>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Section>
      <Spacing size={3} />
      <Footer secondary />
    </Root>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const portfolioGridData = await getAllProjects();

  return {
    props: {
      portfolioGridData,
    },
  };
}