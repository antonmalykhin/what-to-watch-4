import * as React from 'react';
import {Subtract} from 'utility-types';

const DEFAULT_RATING_VALUE = 3;

interface State {
  rating: number;
}

interface InjectingProps {
  onRatingCheck: (value: number) => void;
  rating: number;
}

const withSetRating = (Component) => {
  type P = React.ComponentProps<typeof Component>;
  type T = Subtract<P, InjectingProps>;

  class WithSetRating extends React.PureComponent<T, State> {
    constructor(props) {
      super(props);

      this.state = {
        rating: DEFAULT_RATING_VALUE
      };

      this.handleCheck = this.handleCheck.bind(this);
    }

    handleCheck(value) {
      this.setState({rating: value});
    }

    render() {
      return (
        <Component
          {...this.props}
          onRatingCheck={(value) => this.handleCheck(value)}
          rating={this.state.rating}
        />
      );
    }
  }

  return WithSetRating;
};

export default withSetRating;
