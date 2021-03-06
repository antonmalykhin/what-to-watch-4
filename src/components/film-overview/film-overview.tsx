import * as React from 'react';
import {getRaringLevel} from '../../utils';

interface Props {
  rating: {
    score: number;
    count: number;
  };
  description: string;
  crew: {
    director: string;
    starring: string[];
  };
}

const FilmOverview: React.FunctionComponent<Props> = (props: Props) => {
  const {
    rating,
    description,
    crew
  } = props;

  const {
    score,
    count
  } = rating;

  const {
    director,
    starring
  } = crew;

  const level = getRaringLevel(score);

  return (
    <React.Fragment>
      <div className="movie-rating">
        <div className="movie-rating__score">{score}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{level}</span>
          <span className="movie-rating__count">{count} ratings</span>
        </p>
      </div>

      <div className="movie-card__text">
        <p>{description}</p>

        <p className="movie-card__director">
          <strong>Director: {director}</strong>
        </p>

        <p className="movie-card__starring">
          <strong>Starring: {starring.slice(0, 4).join(`, `)} and other</strong>
        </p>
      </div>
    </React.Fragment>
  );
};

export default FilmOverview;
