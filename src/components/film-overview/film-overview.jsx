import React from 'react';
import PropTypes from 'prop-types';


const FilmOverview = (props) => {
  const {
    rating,
    description,
    crew
  } = props;

  const {
    score,
    level,
    count
  } = rating;

  const {
    director,
    starring
  } = crew;

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
          <strong>Starring: {starring.split(`, `).slice(0, 4).join(`, `)} and other</strong>
        </p>
      </div>
    </React.Fragment>
  );
};

FilmOverview.propTypes = {
  rating: PropTypes.shape({
    score: PropTypes.number.isRequired,
    level: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired
  }).isRequired,
  description: PropTypes.string.isRequired,
  crew: PropTypes.shape({
    director: PropTypes.string.isRequired,
    starring: PropTypes.string.isRequired
  }).isRequired
};

export default FilmOverview;

