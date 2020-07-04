import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class ShowMoreButton extends PureComponent {
  constructor(props) {
    super(props);

  }

  render() {
    const {onButtonClick} = this.props;

    return (
      <div className="catalog__more">
        <button className="catalog__button" type="button" onClick={onButtonClick}>Show more</button>
      </div>
    );
  }
}

ShowMoreButton.propTypes = {
  onButtonClick: PropTypes.func.isRequired
};

export default ShowMoreButton;
