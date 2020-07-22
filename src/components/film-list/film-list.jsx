import React from 'react';
import PropTypes from 'prop-types';
import SmallFilmCard from '../small-film-card/small-film-card.jsx';
import withActivePlayer from '../../hocks/with-active-player/with-active-player.js';

const SmallFilmCardWrapped = withActivePlayer(SmallFilmCard);

const FilmList = (props) => {
  const {
    films,
    onFilmClick,
    onActiveItemChange
  } = props;

  return (
    <div className="catalog__movies-list">
      {films.map((film) => (
        <SmallFilmCardWrapped
          key={film.id}
          onFilmClick={onFilmClick}
          onFilmMouseOver={() => {
            onActiveItemChange(film);
          }}
          film={film} />
      ))}
    </div>
  );
};

FilmList.propTypes = {
  films: PropTypes.array.isRequired,
  onFilmClick: PropTypes.func.isRequired,
  onActiveItemChange: PropTypes.func.isRequired,
};

export default FilmList;


