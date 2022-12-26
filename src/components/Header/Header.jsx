import { Button } from '@mui/material';
import ThemeSwitcher from 'components/ThemeSwitcher/ThemeSwitcher';
import { useUserAuthContext } from 'contexts/UserAuthProvider';
import { Link, NavLink } from 'react-router-dom';
import css from './Header.module.css';

const pages = [
  { to: '/', title: 'Home' },
  { to: 'about', title: 'About' },
  { to: 'news', title: 'News' },
];

const Header = () => {
  const { isAuth, login, logout } = useUserAuthContext();

  return (
    <div className={css.container}>
      <h2>Routing</h2>
      <nav>
        <ul className={css.navList}>
          {pages.map(({ to, title }) => (
            <li key={to}>
              <NavLink to={to}>{title}</NavLink>
            </li>
          ))}
          {isAuth && (
            <li>
              <NavLink to="profile">Profile</NavLink>
            </li>
          )}
        </ul>
      </nav>
      <div className={css.buttonGroup}>
        <Button variant="contained" onClick={login}>
          Sign In
        </Button>
        <Button variant="contained" onClick={logout}>
          Sign Out
        </Button>
        <ThemeSwitcher />
      </div>
    </div>
  );
};

export default Header;
