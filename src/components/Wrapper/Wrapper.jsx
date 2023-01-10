import { useThemeContext } from 'contexts/AppThemeProvider';
import css from './Wrapper.module.css';

const Wrapper = ({ children }) => {
  const { mode } = useThemeContext();
  const themeLight = mode === 'light';
  return (
    <div
      style={{ backgroundColor: themeLight ? 'transparent' : '#000' }}
      className={css.wrap}
    >
      <div className={css.content}>{children}</div>
    </div>
  );
};

export default Wrapper;
