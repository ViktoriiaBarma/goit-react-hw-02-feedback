import { Container } from './Marking.styled';
import PropTypes from 'prop-types';

export const Marking = ({ children }) => {
  return (
    <Container>
      <main>{children}</main>
    </Container>
  );
};

Layout.propTypes = {
   children: PropTypes.any.isRequired,
};