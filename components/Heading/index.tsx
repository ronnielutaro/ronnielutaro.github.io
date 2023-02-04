import Heading from './Heading';
import { HeadingProps } from './Heading.types';

function H1(props: HeadingProps) {
  return <Heading {...props} size="1" />;
}
function H2(props: HeadingProps) {
  return <Heading {...props} size="2" />;
}
function H3(props: HeadingProps) {
  return <Heading {...props} size="3" />;
}
function H4(props: HeadingProps) {
  return <Heading {...props} size="4" />;
}
function H5(props: HeadingProps) {
  return <Heading {...props} size="5" />;
}
function H6(props: HeadingProps) {
  return <Heading {...props} size="6" />;
}
function BigHeading(props: HeadingProps) {
  return <Heading {...props} size="bigHeading" />;
}

export { H1, H2, H3, H4, H5, H6, BigHeading };
