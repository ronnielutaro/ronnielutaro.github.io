import { Container, Row, Col } from '../Layout';
import loadingScreenStyles from './LoadingScreen.styles';
import theme from '../../global/theme';

function LoadingScreen() {
  return (
    <div css={loadingScreenStyles(theme)}>
      <Container>
        <Row>
          <Col fraction={1}>
            Ronnie Lutalo
            <div className="progressbar">
              <div className="stylization" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default LoadingScreen;
