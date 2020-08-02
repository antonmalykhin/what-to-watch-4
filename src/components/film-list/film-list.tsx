import * as React from 'react';
import * as PropTypes from 'prop-types';
import SmallFilmCard from '../small-film-card/small-film-card';
import withActivePlayer from '../../hocks/with-active-player/with-active-player';

const SmallFilmCardWrapped = withActivePlayer(SmallFilmCard);


const FilmList = (props) => {
  const {
    films,
    loadComments,
    onActiveItemChange,
  } = props;

  return (
    <div className="catalog__movies-list">
      {films.map((film) => (
        <SmallFilmCardWrapped
          key={film.id}
          onFilmMouseOver={() => {
            onActiveItemChange(film);
          }}
          loadComments={loadComments}
          film={film} />
      ))}
    </div>
  );
};

FilmList.propTypes = {
  films: PropTypes.array.isRequired,
  onActiveItemChange: PropTypes.func.isRequired,
  loadComments: PropTypes.func.isRequired
};

export default FilmList;


