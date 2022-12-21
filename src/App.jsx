import { Wrapper } from 'components';
import ControlledForm from 'components/ControlledForm/ControlledForm';
import News from 'components/News/News';
import { useEffect, useState } from 'react';

export const App = () => {
  return (
    <Wrapper>
      {/* <ControlledForm /> */}
      <News minWidth={700} />
    </Wrapper>
  );
};
