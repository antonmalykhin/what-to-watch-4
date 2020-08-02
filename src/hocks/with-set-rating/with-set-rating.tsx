import * as React from 'react';
import * as PropTypes from 'prop-types';

const DEFAULT_RATING_VALUE = 3;

const withSetRating = (Component) => {
  class WithSetRating extends PureComponent {
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

  WithSetRating.propTypes = {
    films: PropTypes.array.isRequired,
    onSubmit: PropTypes.func.isRequired
  };

  return WithSetRating;
};

export default withSetRating;