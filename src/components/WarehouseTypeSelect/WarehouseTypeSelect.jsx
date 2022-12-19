import { PureComponent } from 'react';
import { getWarehouseTypes } from 'services/PostAPI';

class WarehouseTypeSelect extends PureComponent {
  state = {
    selectedWarehouseTypeRef: '',
    warehousesTypes: [],
  };

  componentDidMount() {
    this.fetchWarehouseTypes();
  }

  handleChangeValue = event => {
    this.setState({ selectedWarehouseTypeRef: event.target.value });
    this.props.onSelect(event.target.value);
  };

  fetchWarehouseTypes = async () => {
    try {
      const warehousesTypes = await getWarehouseTypes();
      this.setState({ warehousesTypes });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { selectedWarehouseTypeRef, warehousesTypes } = this.state;

    return (
      <select
        value={selectedWarehouseTypeRef}
        onChange={this.handleChangeValue}
      >
        <option key="first" value="">Оберіть тип відділення</option>
        {Object.values(warehousesTypes).map(warehouse => (
          <option key={warehouse.Ref} value={warehouse.Ref}>
            {warehouse.Description}
          </option>
        ))}
      </select>
    );
  }
}

export default WarehouseTypeSelect;
