import { PureComponent } from 'react';
import { getWarehouse } from 'services/PostAPI';

class WarehouseFinder extends PureComponent {
  static defaultProps = {
    onSelect: () => {},
  };
  state = {
    selectedWarehouseId: 0,
    warehouses: [],
  };

  componentDidUpdate(prevProps, prevState) {
    const { deliveryRef: PdeliveryRef, warehouseType: PwarehouseType } =
      prevProps;
    const { deliveryRef, warehouseType } = this.props;
    const propsChanged =
      PdeliveryRef !== deliveryRef || PwarehouseType !== warehouseType;
    const propsNotEmpty = deliveryRef && warehouseType;
    if (propsChanged && propsNotEmpty) {
      this.fetchWarehouses();
    }
  }

  handleChangeValue = event => {
    this.setState({ selectedWarehouseId: event.target.value });
    this.props.onSelect(event.target.value);
  };

  fetchWarehouses = async () => {
    const { deliveryRef, warehouseType: TypeOfWarehouseRef } = this.props;
    try {
      const warehouses = await getWarehouse({
        deliveryRef,
        TypeOfWarehouseRef,
      });
      this.setState({ warehouses });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { selectedWarehouseId, warehouses } = this.state;

    return (
      <select
        id="select"
        value={selectedWarehouseId}
        onChange={this.handleChangeValue}
      >
        <option value="">Оберіть номер віддлення</option>
        {Object.values(warehouses).map(warehouse => (
          <option key={warehouse.SiteKey} value={warehouse.Description}>
            {warehouse.Description}
          </option>
        ))}
      </select>
    );
  }
}

export default WarehouseFinder;
