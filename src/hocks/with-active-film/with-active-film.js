import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

const withActiveFilm = (Component) => {
  class WithActiveFilm extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeFilm: this.props.films[0]
      };

      this._handleChangeActiveFilm = this._handleChangeActiveFilm.bind(this);
    }

    _handleChangeActiveFilm(film) {
      this.setState({activeFilm: film});
    }

    render() {
      return (
        <Component
          {...this.props}
          onActiveFilmChange={this._handleChangeActiveFilm}
        />
      );
    }
  }

  WithActiveFilm.propTypes = {
    films: PropTypes.array.isRequired,
    onFilmClick: PropTypes.func.isRequired
  };

  return WithActiveFilm;
};

export default withActiveFilm;
