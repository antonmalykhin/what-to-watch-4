import React from 'react';
import PropTypes from 'prop-types';
import VideoPlayer from '../video-player/video-player.jsx';
import withActivePlayer from '../../hocks/with-active-player/with-active-player.js';

const filmPreviewSettings = {
  WIDTH: 280,
  HEIGHT: 175,
  LOOP: true
};

const SmallFilmCard = (props) => {
  const {film, onFilmClick, onFilmMouseOver, isPlaying, onPlayVideo, onStopVideo} = props;
  const {title, image, preview} = film;

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseOver={() => {
        onFilmMouseOver(film);
      }}
    >

      <div
        className="small-movie-card__image"
        onClick={() => onFilmClick(film)}
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
            onFilmClick(film);
          }}>
          {title}
        </a>
      </h3>
    </article>
  );
};

SmallFilmCard.propTypes = {
  film: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
  }).isRequired,
  onFilmMouseOver: PropTypes.func.isRequired,
  onFilmClick: PropTypes.func.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  onPlayVideo: PropTypes.func.isRequired,
  onStopVideo: PropTypes.func.isRequired
};

export default withActivePlayer(SmallFilmCard);
