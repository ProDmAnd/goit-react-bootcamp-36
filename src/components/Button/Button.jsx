import css from './Button.module.css';
import PropTypes from 'prop-types';

const Button = ({ children, clicked, success, error, onClick }) => {
  const handleClick = () => {
    const newClicked = clicked + 1;
    onClick(newClicked);
  };

  console.log('rerender', clicked);
  const className = success ? css.green : error ? css.red : css.button;
  return (
    <button onClick={handleClick} className={className}>
      {children}
    </button>
  );
};

Button.propTypes = {
  success: PropTypes.bool,
  error: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  clicked: PropTypes.number.isRequired,
};

export default Button;
