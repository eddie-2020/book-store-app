import PropTypes from 'prop-types';

const Button = ({ text, handleClick }) => (
  <button className="addBtn" style={{ padding: 10 }} type="button" onClick={handleClick}>{text}</button>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.string.isRequired,
};

export default Button;
