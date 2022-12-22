import Button from 'components/Button/Button';
import ThemeSwitcher from 'components/ThemeSwitcher/ThemeSwitcher';
import { useUserAuthContext } from 'contexts/UserAuthProvider';
import css from './Header.module.css';

const pages = ['Home', 'About', 'Contacts'];

const Header = () => {
  const { isAuth, login, logout } = useUserAuthContext();

  return (
    <div className={css.container}>
      <h2>Context</h2>
      <nav>
        <ul className={css.navList}>
          {pages.map(page => (
            <li key={page}>
              <a href={`/${page}`}>{page}</a>
            </li>
          ))}
          {isAuth && (
            <li>
              <a href="/Profile">Profile</a>
            </li>
          )}
        </ul>
      </nav>
      <Button onClick={login} success>
        Login
      </Button>
      <Button onClick={logout} error>
        Logout
      </Button>
      <ThemeSwitcher />
    </div>
  );
};

export default Header;
