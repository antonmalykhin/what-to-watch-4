import React from 'react';
import PropTypes from 'prop-types';


const FilmDetails = (props) => {
  const {
    genre,
    release,
    runtime,
    crew
  } = props;

  const {
    director,
    starring
  } = crew;

  const cast = starring.split(`, `);

  return (
    <div className="movie-card__text movie-card__row">
      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Director</strong>
          <span className="movie-card__details-value">{director}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Starring</strong>
          <span className="movie-card__details-value">

            {cast.map((item, index) => {
              return (
                <React.Fragment key={`${item}-${index}`}>
                  {item}<br />
                </React.Fragment>
              );
            })}

          </span>
        </p>
      </div>

      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Run Time</strong>
          <span className="movie-card__details-value">{runtime}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Genre</strong>
          <span className="movie-card__details-value">{genre}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Released</strong>
          <span className="movie-card__details-value">{release}</span>
        </p>
      </div>
    </div>
  );
};

FilmDetails.propTypes = {
  genre: PropTypes.string.isRequired,
  release: PropTypes.number.isRequired,
  runtime: PropTypes.string.isRequired,
  crew: PropTypes.shape({
    director: PropTypes.string.isRequired,
    starring: PropTypes.string.isRequired
  }).isRequired
};

export default FilmDetails;
