import { Counter, Wrapper } from 'components';

export const App = () => {
  return (
    <Wrapper>
      <Counter />
      <Counter initialValue={10} increment={10} />
    </Wrapper>
  );
};
