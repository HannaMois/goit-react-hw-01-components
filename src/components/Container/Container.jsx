import PropTypes from 'prop-types';
import {Container} from './Container.styled';

export default function Section({ children }) {
  return <Container>{children}</Container>;
}

Section.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]).isRequired,
};