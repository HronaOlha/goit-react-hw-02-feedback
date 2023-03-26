import PropTypes from 'prop-types';

import css from './Section.module.css';

const Section = ({ title, children }) => (
  <>
    <h1 className={css.title}>{title}</h1>
    {children}
  </>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Section;
