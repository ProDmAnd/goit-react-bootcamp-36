import { Counter, Wrapper } from 'components';
import ControlledForm from 'components/ControlledForm/ControlledForm';
import MUIForm from 'components/MUIForm/MUIForm';
import UncontrolledForm from 'components/UncontrolledForm/UncontrolledForm';

export const App = () => {
  return (
    <Wrapper>
      {/* <Counter /> */}
      {/* <Counter initialValue={10} increment={10} /> */}
      {/* <UncontrolledForm /> */}
      {/* <ControlledForm /> */}
      <MUIForm/>
    </Wrapper>
  );
};
