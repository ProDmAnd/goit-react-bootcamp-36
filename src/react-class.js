class Component {
  constructor(props) {
    this.props = props;
    this.init();
  }

  init = () => {
    this.render();
    this.componentDidMount();
  };

  setState = state => {
    const prevState = { ...this.state };
    this.state = { ...this.state, ...state };
    const shouldUpdate = this.shouldComponentUpdate(
      this.props,
      this.state,
      snapshot
    );
    if (!shouldUpdate) return;
    this.render();
    this.componentDidUpdate(this.prevProps, prevState);
  };

  removeFromDomTree = () => {
    this.componentWillUnmount();
    this.remove();
  };
}
