import * as React from 'react';
import SmallFilmCard from '../small-film-card/small-film-card';
import withActivePlayer from '../../hocks/with-active-player/with-active-player';
import {Film} from '../../types';

const SmallFilmCardWrapped = withActivePlayer(SmallFilmCard);

interface Props {
  films: Film[];
  onActiveItemChange: (film: Film) => void;
  loadComments: (filmID: string | number) => void;
}

const FilmList: React.FunctionComponent<Props> = (props: Props) => {
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

export default FilmList;


