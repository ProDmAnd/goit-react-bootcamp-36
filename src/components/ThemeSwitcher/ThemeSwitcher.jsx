import clsx from 'clsx';
import { useThemeContext } from 'contexts/AppThemeProvider';

import css from './ThemeSwitcher.module.css';

const ThemeSwitcher = () => {
  const { mode, toggleTheme } = useThemeContext();

  const themeLight = mode === 'light';
  return (
    <div className={css.container}>
      <span
        className={clsx(css.themeName, { [css.themeNameLight]: themeLight })}
      >
        {themeLight ? 'Light' : 'Dark'}
      </span>
      <button
        className={clsx(css.button, { [css.buttonLight]: themeLight })}
        onClick={toggleTheme}
      >
        <span className={clsx(css.switch, { [css.switchLight]: themeLight })} />
      </button>
    </div>
  );
};

export default ThemeSwitcher;
