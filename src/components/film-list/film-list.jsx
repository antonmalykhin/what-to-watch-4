import React from 'react';
import PropTypes from 'prop-types';
import SmallFilmCard from '../small-film-card/small-film-card.jsx';
import withActiveFilm from '../../hocks/with-active-film/with-active-film.js';

const FilmList = (props) => {
  const {films, onFilmClick, onActiveFilmChange} = props;

  return (
    <div className="catalog__movies-list">
      {films.map((film, index) => (
        <SmallFilmCard
          key={`${index}-${film.title}`}
          onFilmClick={onFilmClick}
          onFilmMouseOver={(filmData) => {
            onActiveFilmChange(filmData);
          }}
          film={film} />
      ))}
    </div>
  );
};


FilmList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  })).isRequired,
  onFilmClick: PropTypes.func.isRequired,
  onActiveFilmChange: PropTypes.func.isRequired
};

export default withActiveFilm(FilmList);


