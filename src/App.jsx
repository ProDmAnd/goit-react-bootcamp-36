import { Counter, Wrapper } from 'components';
import ControlledForm from 'components/ControlledForm/ControlledForm';
import MUIForm from 'components/MUIForm/MUIForm';
import MUIFormWithFormik from 'components/MUIFormWithFormik/MUIFormWithFormik';
import UncontrolledForm from 'components/UncontrolledForm/UncontrolledForm';
import { CITY_OPTIONS } from 'constants/loginForm';
import { Component } from 'react';

export class App extends Component {
  state = {
    city: CITY_OPTIONS.Kyiv,
  };
  componentDidMount() {
    setTimeout(() => this.setState({ city: CITY_OPTIONS.Kyiv }), 3000);
  }

  componentDidUpdate() {
    console.log('APP did update');
  }
  render() {
    return (
      <Wrapper>
        {/* <Counter /> */}
        {/* <Counter initialValue={10} increment={10} /> */}
        {/* <UncontrolledForm /> */}
        <ControlledForm city={this.state} />
        {/* <MUIForm email="mail@mail.com" /> */}
        {/* <MUIFormWithFormik /> */}
      </Wrapper>
    );
  }
}
