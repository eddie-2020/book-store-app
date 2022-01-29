import proptypes from 'proptypes';

const Button = ({ text, handleClick }) => (
  <button type="button" onClick={handleClick}>
    {' '}
    {text}
    {' '}
  </button>
);

Button.proptypes = {
  text: proptypes.string.isRequired,
  handleClick: proptypes.string.isRequired,
};

export default Button;
