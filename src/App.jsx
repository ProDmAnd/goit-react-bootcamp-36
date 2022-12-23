import { Wrapper } from 'components';
import ControlledForm from 'components/ControlledForm/ControlledForm';
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
          <News minWidth={700} />
          <ControlledForm />
        </Wrapper>
      </AppThemeProvider>
    </UserAuthProvider>
  );
};
