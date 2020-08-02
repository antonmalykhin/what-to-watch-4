import * as React from 'react';
import VideoPlayer from '../video-player/video-player';
import history from '../../history';
import {AppRoute} from '../../const';
import {Film} from '../../types';

interface Props {
  film: Film;
  loadComments: (filmID: string | number) => void;
  onFilmMouseOver: () => void;
  isPlaying: boolean;
  onPlayVideo: () => void;
  onStopVideo: () => void;
}

const filmPreviewSettings = {
  WIDTH: 280,
  HEIGHT: 175,
  LOOP: true
};


const SmallFilmCard: React.FunctionComponent<Props> = (props: Props) => {
  const {
    film,
    loadComments,
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
          loadComments(id);
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
            loadComments(id);
            history.push(`${AppRoute.FILMS}/${id}`);
          }}>
          {title}
        </a>
      </h3>
    </article>
  );
};

export default SmallFilmCard;
