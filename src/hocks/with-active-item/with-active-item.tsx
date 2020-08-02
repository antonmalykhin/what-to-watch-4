import * as React from 'react';


const withActiveItem = (Component, items) => {
  class WithActiveItem extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeItem: this.props[items][0]
      };

      this._handleActiveItem = this._handleActiveItem.bind(this);
    }

    _handleActiveItem(item) {
      this.setState({activeItem: item});
    }

    render() {
      return (
        <Component
          {...this.props}
          onActiveItemChange={(item) => {
            this._handleActiveItem(item);
          }}
          activeItem={this.state.activeItem}
        />
      );
    }
  }

  return WithActiveItem;
};

export default withActiveItem;
