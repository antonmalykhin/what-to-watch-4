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
  onPlayVideo: (arg: boolean) => void;
}


class SmallFilmCard extends React.PureComponent<Props> {
  private timeoutID: NodeJS.Timeout;

  constructor(props) {
    super(props);

    this.timeoutID = null;
  }

  componentWillUnmount() {
    clearTimeout(this.timeoutID);
  }

  render() {
    const {
      film,
      loadComments,
      onFilmMouseOver,
      isPlaying,
      onPlayVideo,
    } = this.props;

    const {
      id,
      title,
      image,
      preview
    } = film;

    return (
      <article
        className="small-movie-card catalog__movies-card"
        onMouseEnter={() => {
          this.timeoutID = setTimeout(() => onPlayVideo(true), 1000);
          onFilmMouseOver();
        }}
        onMouseLeave={() => {
          clearTimeout(this.timeoutID);
          onPlayVideo(false);
        }}
      >

        <div
          className="small-movie-card__image"
          onClick={() => {
            loadComments(id);
            history.push(`${AppRoute.FILMS}/${id}`);
          }}
        >
          <VideoPlayer
            src={preview}
            poster={image}
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
  }
}

export default SmallFilmCard;
