import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Main from '../main/main.jsx';

class App extends PureComponent {
  constructor(props) {
    super(props);

  }

  filmTitleHandler() {}

  render() {
    const {title, genre, release, films} = this.props;
    return (
      <Main
        title={title}
        genre={genre}
        release={release}
        films={films}
        onFilmTitleClick={this.filmTitleHandler}
      />
    );
  }
}

App.propTypes = {
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  release: PropTypes.number.isRequired,
  films: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  }))
};

export default App;
