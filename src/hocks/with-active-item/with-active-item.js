import React, {PureComponent} from 'react';


const withActiveItem = (Component) => {
  class WithActiveItem extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeItem: this._setInitActiveItem()
      };

      this._handleActiveItem = this._handleActiveItem.bind(this);
      this._setInitActiveItem = this._setInitActiveItem.bind(this);
    }

    _setInitActiveItem() {
      return Object.entries(this.props)[0][1][0];
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
