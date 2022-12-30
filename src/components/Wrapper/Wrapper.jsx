import { useThemeContext } from 'contexts/AppThemeProvider';
import css from './Wrapper.module.css';

const Wrapper = ({ children }) => {
  const { themeLight } = useThemeContext();

  return (
    <div
      style={{ backgroundColor: themeLight ? 'transparent' : '#000' }}
      className={css.wrap}
    >
      {children}
    </div>
  );
};

export default Wrapper;
