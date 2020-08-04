import * as React from 'react';
import {Subtract} from 'utility-types';
import {Film} from '../../types';

interface State {
  activeItem: Film | string;
}

interface InjectingProps {
  onActiveItemChange: (item: Film | string) => void;
  activeItem: Film | string;
}

const withActiveItem = (Component, items) => {
  type P = React.ComponentProps<typeof Component>;
  type T = Subtract<P, InjectingProps>;

  class WithActiveItem extends React.PureComponent<T, State> {
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
