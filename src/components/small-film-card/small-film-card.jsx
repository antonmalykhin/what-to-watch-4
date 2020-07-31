import React from 'react';
import PropTypes from 'prop-types';
import VideoPlayer from '../video-player/video-player.jsx';
import history from '../../history.js';
import {AppRoute} from '../../const.js';

const filmPreviewSettings = {
  WIDTH: 280,
  HEIGHT: 175,
  LOOP: true
};


const SmallFilmCard = (props) => {
  const {
    film,
    onFilmMouseOver,
    isPlaying,
    onPlayVideo,
    onStopVideo
  } = props;

  const {
    id,
    title,
    image,
    preview
  } = film;

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseOver={() => {
        onFilmMouseOver();
      }}
    >

      <div
        className="small-movie-card__image"
        onClick={() => {
          history.push(`${AppRoute.FILMS}/${id}`);
        }}
        onMouseOver={() => onPlayVideo()}
        onMouseOut={() => onStopVideo()}
      >
        <VideoPlayer
          width={filmPreviewSettings.WIDTH}
          height={filmPreviewSettings.HEIGHT}
          src={preview}
          poster={image}
          loop={filmPreviewSettings.LOOP}
          isPlaying={isPlaying}
        />
        <img src={image} alt={title} width="280" height="175" />
      </div>

      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html"
          onClick={(evt) => {
            evt.preventDefault();
            history.push(`${AppRoute.FILMS}/${id}`);
          }}>
          {title}
        </a>
      </h3>
    </article>
  );
};

SmallFilmCard.propTypes = {
  film: PropTypes.object.isRequired,
  onFilmMouseOver: PropTypes.func.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  onPlayVideo: PropTypes.func.isRequired,
  onStopVideo: PropTypes.func.isRequired
};

export default SmallFilmCard;
