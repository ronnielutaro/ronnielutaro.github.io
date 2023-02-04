/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable import/no-unresolved */
import { useEffect, useState } from 'react';
import { HiChevronRight, HiExternalLink } from 'react-icons/hi';
import { CSSTransition } from 'react-transition-group';
import { Keyboard, FreeMode, Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
import 'swiper/css/scrollbar';

import Root from '../../components/Root';
import { H2, H3 } from '../../components/Heading';
import Button from '../../components/Button';
import { Section, Container, Row, Col, Spacing } from '../../components/Layout';
import Footer from '../../components/Footer';
import LoadingScreen from '../../components/LoadingScreen';
import PortfolioBannerSection from '../../components/PortfolioBannerSection';
import ParallaxSection from '../../components/ParallaxSection';

import { fileBaseUrl } from '../../global/defaultValues';
import { preLoadImage, tooSlowFallback } from '../../helpers';
import { portfolioType } from '../../global/defaultValues';
import theme from '../../global/theme';
import { GetStaticProps, GetStaticPaths } from 'next'
import { getAllProjectSlugs, getSingleProject } from '../../helpers/projects'

interface ProjectProps {
  singleProject: {
    slug: string,
    contentHtml: string,
    title: string,
    shortDescription: string,
    featured: boolean,
    type: 'productDesign' | 'webDevelopment' | 'windowsDevelopment',
    viewOrder: number,
    thumb: string,
    parallax: {
      url: string
    },
    tools: {
      list: string[]
    },
    roles: {
      list: string[]
    },
    previewUrl: string,
    githubUrl: string,
    gallery: {
      url: string,
      name: string
    }[]
  }
}

export default function Portfolio({
  singleProject: singleProject
}: ProjectProps
) {
  const [imagesReady, setImagesReady] = useState(false);
  const [pageLoading, setPageLoading] = useState(true);

  const imageList = singleProject.gallery;

  const startLoadImage = () => {
    tooSlowFallback(setImagesReady, 1000);
    Promise.all(
      [singleProject.parallax, ...singleProject.gallery].map((p) =>
        preLoadImage(fileBaseUrl + p.url)
      )
    )
      .then(() => setImagesReady(true))
      .catch(() => setImagesReady(true));
  };

  useEffect(() => {
    startLoadImage();
  }, []);

  useEffect(() => {
    if (imagesReady) {
      setTimeout(() => {
        setPageLoading(false);
      }, 200);
    }
  }, [imagesReady]);

  return (
    <Root
      title={singleProject.title}
      description={singleProject.shortDescription}
      banner={`${fileBaseUrl}${singleProject.thumb}`}
    >
      <PortfolioBannerSection
        title={singleProject.title}
        type={portfolioType[singleProject.type]}
        shortDescrip={singleProject.shortDescription}
      />
      <ParallaxSection image={singleProject.parallax.url} />
      <Spacing size={2} />
      <Section>
        <Container>
          <Row>
            <Col fraction={3} size={2} data-aos="fade-up">
              <div className="big-text-1">
                <div dangerouslySetInnerHTML={{ __html: singleProject.contentHtml }} />
              </div>
            </Col>
            <Col fraction={3}>
              <div data-aos="fade-up" data-aos-delay={150}>
                <H3 color={theme.colors.primary}>Technologies</H3>
                <ul>
                  {singleProject.tools.list.map((tool, index) => (
                    <li key={`tech-${index}`}>{tool}</li>
                  ))}
                </ul>
              </div>
              <div data-aos="fade-up" data-aos-delay={300}>
                <Spacing />
                <H3 color={theme.colors.primary}>Roles</H3>
                <ul>
                  {singleProject.roles.list.map((tool, index) => (
                    <li key={`tech-${index}`}>{tool}</li>
                  ))}
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </Section>
      <Section>
        <Container>
          <Row>
            <Col fraction={1}>
              <div className="big-text-1">
                <H2 color={theme.colors.primary}>The Results</H2>
              </div>
            </Col>
          </Row>
        </Container>
        <Spacing size={3} />
        <Swiper
          direction="horizontal"
          slidesPerView={1}
          freeMode
          a11y={{ enabled: true }}
          updateOnWindowResize
          keyboard={{ enabled: true }}
          pagination={{ clickable: true }}
          navigation
          modules={[Keyboard, FreeMode, Navigation, A11y]}
          breakpoints={{
            550: {
              slidesPerView: 1.4,
            },
            720: {
              slidesPerView: 1.6,
            },
            1024: {
              slidesPerView: 1.7,
            },
          }}
        >
          {imageList.map((image, index) => (
            <SwiperSlide key={`image-slide-${index}`}>
              <img
                src={`${fileBaseUrl}${image.url}`}
                className="swiper-image"
                alt={image.name || 'Slider Image'}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-descrip">
          [Swipe to Slide, Use Arrow Keys or Click & Drag]
        </div>
        <Section>
          <Container>
            <Row>
              <Col fraction={1}>
                <div className="big-text-1">
                  <Button
                  href={singleProject.previewUrl}
                  color="primaryOutline"
                  externalLink
                >
                  <span>View Live Project</span>
                  <HiExternalLink />
                </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </Section>
      </Section>
      <Section data-aos="fade-up" className="pb-0">
        <Container>
          <Row>
            <hr />
          </Row>
          <Spacing size={3} />
          <Row>
            <Col fraction={1}>
              <Button
                href= "/portfolio"
                color="secondaryOutline"
              >
                <span>More Projects</span>
                <HiChevronRight />
              </Button>
            </Col>
          </Row>
          <Spacing size={3} />
          <Row>
            <hr />
          </Row>
        </Container>
      </Section>
      <Footer />
      <CSSTransition
        in={pageLoading}
        timeout={300}
        classNames="opacity-transition"
        unmountOnExit
      >
        <LoadingScreen />
      </CSSTransition>
    </Root>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllProjectSlugs()
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const singleProject = await getSingleProject(params?.slug as string)
  return {
    props: {
      singleProject
    }
  }
}