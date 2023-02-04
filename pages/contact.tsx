import { useState, useRef } from 'react';
import {
  IoLogoGithub,
  IoLogoTwitter,
  IoLogoLinkedin,
  IoLogoInstagram,
  IoLogoFacebook,
} from 'react-icons/io5';
import { Formik, Form, Field, FormikProps } from 'formik';

import Root from '../components/Root';
import { BigHeading, H4 } from '../components/Heading';
import Subtitle from '../components/Subtitle';
import { Section, Container, Row, Col, Spacing } from '../components/Layout';
import Footer from '../components/Footer';
import Button from '../components/Button';
import theme from '../global/theme';

import {
  socialLinks,
  devName,
  siteMetaDescription,
  callToAction,
} from '../global/defaultValues';
import {
  ContactFormValues,
  ContactFormErrors,
} from '../global/types/pages/contact';

const initialValues = {
  name: '',
  email: '',
  how: '',
  message: '',
};

export default function Contact() {
  const formRef = useRef<FormikProps<any>>(null);
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [statusSubmit, setStatusSubmit] = useState(0);

  const heading = `Contact Me`;

  const validateForm = (values: ContactFormValues) => {
    const errors: ContactFormErrors = {};

    if (!values.name) {
      errors.name = 'Please enter Name';
    }

    if (!values.email) {
      errors.email = 'Please enter E-mail';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = 'Invalid E-mail Address';
    }

    if (!values.message) {
      errors.message = 'Please enter Message';
    }

    return errors;
  };

  const onSubmit = async (values: ContactFormValues) => {
    setLoadingSubmit(true);
    setStatusSubmit(0);

    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    });

    if (!response.ok) {
      setLoadingSubmit(false);
      return setStatusSubmit(-1);
    }

    setLoadingSubmit(false);
    setStatusSubmit(1);

    if (formRef.current) {
      formRef.current.handleReset();
    }

    return null;
  };

  return (
    <Root title={`Contact - ${devName}`} description={siteMetaDescription}>
      <Section className="pb-0">
        <Container>
          <Row>
            <Col fraction={1}>
              <Subtitle data-aos="fade-up">Get in Touch</Subtitle>
              <BigHeading
                color={theme.colors.white}
                className="playful"
                data-aos-delay={200}
                data-aos="fade-up"
              >
                {heading.split('').map((h, i) => (
                  <span key={`h-${i}`}>{h}</span>
                ))}
              </BigHeading>
            </Col>
          </Row>
        </Container>
      </Section>
      <Section className="pt-2">
        <Container>
          <Row>
            <Col fraction={2}>
              <Spacing />
              <div data-aos="fade-up" data-aos-duration={400}>
                <p className="big-text-1 contact-text">{callToAction}</p>
                <p className="big-text-1 contact-text">
                  You can send me an e-mail directly, connect with me on Social
                  Media or complete the Contact Form. I’ll get back to you as
                  soon as possible.
                </p>
                <Spacing />
                <Spacing />
                <p className="fade-text mb-0">E-MAIL:</p>
                <p className="big-text-3 mb-0 mt-0">
                  <a
                    className="white-link-secondary"
                    href={`mailto:${socialLinks.mail}`}
                  >
                    {socialLinks.mail}
                  </a>
                </p>
                <Spacing />
                <p className="fade-text mb-1">CONNECT:</p>
                <ul className="footer-social pb-4">
                  {socialLinks.github && (
                    <li className="github">
                      <a
                        href={socialLinks.github}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span className="social-icon">
                          <IoLogoGithub />
                        </span>
                      </a>
                    </li>
                  )}
                  {socialLinks.twitter && (
                    <li className="twitter">
                      <a
                        href={socialLinks.twitter}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span className="social-icon">
                          <IoLogoTwitter />
                        </span>
                      </a>
                    </li>
                  )}
                  {socialLinks.linkedin && (
                    <li className="linkedin">
                      <a
                        href={socialLinks.linkedin}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span className="social-icon">
                          <IoLogoLinkedin />
                        </span>
                      </a>
                    </li>
                  )}
                  {socialLinks.instagram && (
                    <li className="instagram">
                      <a
                        href={socialLinks.instagram}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span className="social-icon">
                          <IoLogoInstagram />
                        </span>
                      </a>
                    </li>
                  )}
                  {socialLinks.facebook && (
                    <li className="facebook">
                      <a
                        href={socialLinks.facebook}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span className="social-icon">
                          <IoLogoFacebook />
                        </span>
                      </a>
                    </li>
                  )}
                </ul>
              </div>
            </Col>
            <Col
              fraction={2}
              data-aos-delay={600}
              data-aos="fade-up"
              className="margin-top-mobile"
            >
              <H4 color={theme.colors.primary} className="color-primary">Fill out the form</H4>
              <Formik
                initialValues={initialValues}
                validate={validateForm}
                onSubmit={onSubmit}
                innerRef={formRef}
              >
                {({ errors, values, touched, handleChange, handleBlur }) => (
                  <Form autoComplete="off">
                    <div
                      className={`form-group${
                        errors.name && touched.name ? ' error' : ''
                      }`}
                    >
                      <label htmlFor="name">
                        Your Name: <span className="red">*</span>
                      </label>
                      <Field
                        className="form-control"
                        name="name"
                        maxLength={100}
                        placeholder=""
                      />
                      {errors.name && touched.name && (
                        <div className="error-text">{errors.name}</div>
                      )}
                    </div>
                    <div
                      className={`form-group${
                        errors.email && touched.email ? ' error' : ''
                      }`}
                    >
                      <label htmlFor="email">
                        E-mail Address: <span className="red">*</span>
                      </label>
                      <Field
                        className="form-control"
                        name="email"
                        maxLength={100}
                        placeholder=""
                      />
                      {errors.email && touched.email && (
                        <div className="error-text">{errors.email}</div>
                      )}
                    </div>
                    <div
                      className={`form-group${
                        errors.how && touched.how ? ' error' : ''
                      }`}
                    >
                      <label htmlFor="how">How did you learn about Me?</label>
                      <select
                        name="how"
                        className="form-control"
                        value={values.how}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      >
                        <option value="">Choose</option>
                        <option value="Referred by Someone">
                          Referred by Someone
                        </option>
                        <option value="Link from a Website I Made">
                          Link from a Website I Made
                        </option>
                        <option value="Google Search">Google Search</option>
                        <option value="Twitter">Twitter</option>
                        <option value="Facebook">Facebook</option>
                        <option value="Instagram">Instagram</option>
                        <option value="LinkedIn">LinkedIn</option>
                        <option value="GitHub">GitHub</option>
                        <option value="We know one another">
                          We know one another
                        </option>
                        <option value="At an Event">At an Event</option>
                      </select>
                      {errors.how && touched.how && (
                        <div className="error-text">{errors.how}</div>
                      )}
                    </div>
                    <div
                      className={`form-group${
                        errors.message && touched.message ? ' error' : ''
                      }`}
                    >
                      <label htmlFor="message">
                        Your Message <span className="red">*</span>
                      </label>
                      <Field
                        className="form-control"
                        name="message"
                        maxLength={100}
                        component="textarea"
                        placeholder=""
                      />
                      {errors.message && touched.message && (
                        <div className="error-text">{errors.message}</div>
                      )}
                    </div>
                    <div className="mt-1 form-group">
                      {!loadingSubmit && statusSubmit === 1 && (
                        <div className="success-message">
                          Message Sent Successfully!
                        </div>
                      )}
                      {!loadingSubmit && statusSubmit === -1 && (
                        <div className="error-message">
                          Unexpected Error while trying to Send Message.
                        </div>
                      )}
                      <Button
                        type="submit"
                        color="primary"
                        disabled={loadingSubmit}
                      >
                        {loadingSubmit && <>Please Wait...</>}
                        {!loadingSubmit && <>Send Message!</>}
                      </Button>
                    </div>
                  </Form>
                )}
              </Formik>
            </Col>
          </Row>
        </Container>
      </Section>
      <Footer hideHire hideSocial />
    </Root>
  );
}
