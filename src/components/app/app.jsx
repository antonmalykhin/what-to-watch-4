import React from 'react';
import PropTypes from 'prop-types';
import Main from '../main/main.jsx';

const filmTitleHandler = () => {};

const App = (props) => {
  const {title, genre, release, filmTitles} = props;
  return (
    <Main
      title={title}
      genre={genre}
      release={release}
      filmTitles={filmTitles}
      onFilmTitleClick={filmTitleHandler}
    />
  );
};

App.propTypes = {
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  release: PropTypes.number.isRequired,
  filmTitles: PropTypes.arrayOf(PropTypes.string.isRequired)
};

export default App;
