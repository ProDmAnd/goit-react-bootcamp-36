import { CITY_OPTIONS } from 'constants/loginForm';
import { PureComponent } from 'react';

const MarioupolPosts = ['№1 вул .ююю', '№2 вул жжжж'];
const DniproPosts = ['№3 вул .ююю', '№4 вул жжжж'];
const KiyvPosts = ['№5 вул .ююю', '№6 вул жжжж'];

class ControlledCitySelect extends PureComponent {
  state = {
    selectedPostId: 0,
    cities: [],
  };
  intervalId;

  componentDidMount() {
    document.body.addEventListener('keydown', this.handleKeyDown);
    this.intervalId = setInterval(
      () =>
        this.setState(prev => ({ selectedPostId: prev.selectedPostId + 1 })),
      3000
    );
  }
  componentDidUpdate(prevProps, prevState) {
    console.log(
      'Controlled CIty Select componentDidUpdate',
      this.state.selectedPostId
    );
    // console.log(prevProps, this.props);
    if (prevProps.city !== this.props.city) {
      this.changeCities();
    }
  }
  componentWillUnmount() {
    document.body.removeEventListener('keydown', this.handleKeyDown);
    clearInterval(this.intervalId);
  }

  handleKeyDown = event => {
    console.log(event.code);
    if (event.code === 'Escape') {
      console.log('Escape pressed');
    }
  };

  changeCities = () => {
    const { city } = this.props;
    switch (city) {
      case CITY_OPTIONS.Kyiv:
        this.setState({ cities: KiyvPosts });
        break;
      case CITY_OPTIONS.Dnipro:
        this.setState({ cities: DniproPosts });
        break;
      case CITY_OPTIONS.Marioupl:
        this.setState({ cities: MarioupolPosts });
        break;
      default:
        this.setState({ cities: [] });
        break;
    }
  };

  handleChangeValue = event => {
    console.log(event.target.name, event.target.value);
    this.setState({ selectedPost: event.target.value });
  };

  render() {
    const { city } = this.props;
    const { cities } = this.state;
    return (
      <select value={city} name="city" onChange={this.handleChangeValue}>
        {Object.entries(cities).map(entry => (
          <option key={entry[0]} value={entry[1]}>
            {entry[1]}
          </option>
        ))}
      </select>
    );
  }
}

export default ControlledCitySelect;
