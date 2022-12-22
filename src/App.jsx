import { useTheme } from '@mui/system';
import { Wrapper } from 'components';
import Header from 'components/Header/Header';
import News from 'components/News/News';
import AppThemeProvider from 'contexts/AppThemeProvider';
import UserAuthProvider from 'contexts/UserAuthProvider';

export const App = () => {
  return (
    <UserAuthProvider>
      <AppThemeProvider>
        <Header />
        <Wrapper>
          {/* <ControlledForm /> */}
          <News minWidth={700} />
        </Wrapper>
      </AppThemeProvider>
    </UserAuthProvider>
  );
};
