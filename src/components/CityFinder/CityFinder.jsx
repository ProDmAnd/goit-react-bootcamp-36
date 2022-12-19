import { PureComponent } from 'react';
import { getCity } from 'services/PostAPI';

class CityFinder extends PureComponent {
  state = {
    cityQuery: '',
    cities: [],
    showList: false,
  };

  handleChangeValue = event => {
    const cityName = event.target.value;
    this.setState({ cityQuery: cityName }, this.fetchCities);
  };

  fetchCities = async () => {
    try {
      const cities = await getCity(this.state.cityQuery);
      this.setState({ cities, showList: cities.length ? true : false });
    } catch (error) {
      console.log(error);
    }
  };

  selectCity = city => () => {
    this.setState({
      cityQuery: city.Present,
      showList: false,
    });
    this.props.onSelect(city.DeliveryCity);
  };

  render() {
    const { cityQuery, cities, showList } = this.state;
    return (
      <>
        <input
          value={cityQuery}
          name="cityQuery"
          onChange={this.handleChangeValue}
        />
        {showList && (
          <ul>
            {Object.values(cities).map(city => (
              <li
                key={city.Ref}
                value={city.Present}
                onClick={this.selectCity(city)}
              >
                {city.Present}
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
}

export default CityFinder;
