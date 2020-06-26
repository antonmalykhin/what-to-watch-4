import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import VideoPlayer from '../video-player/video-player.jsx';

const TIMEOUT = 1000;

const filmPreviewSettings = {
  WIDTH: 280,
  HEIGHT: 175,
  MUTED: true,
  LOOP: true
};

class SmallFilmCard extends PureComponent {
  constructor(props) {
    super(props);

    this.timeoutID = null;

    this.state = {
      isPlaying: false
    };
  }

  render() {
    const {film, onFilmClick, onFilmMouseOver} = this.props;
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
          onMouseOver={() => {
            this.timeoutID = setTimeout(() => this.setState({isPlaying: true}), TIMEOUT);
          }}
          onMouseOut={() => {
            this.setState({isPlaying: false});
            clearTimeout(this.timeoutID);
          }}
        >
          <VideoPlayer
            width={filmPreviewSettings.WIDTH}
            height={filmPreviewSettings.HEIGHT}
            src={preview}
            poster={image}
            muted={filmPreviewSettings.MUTED}
            loop={filmPreviewSettings.LOOP}
            isPlaying={this.state.isPlaying}
          />
        </div>

        <h3 className="small-movie-card__title">
          <a className="small-movie-card__link" href="movie-page.html" onClick={(evt) => {
            evt.preventDefault();
            onFilmClick(film);
          }}>{title}</a>
        </h3>
      </article>
    );
  }
}

SmallFilmCard.propTypes = {
  film: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
  }).isRequired,
  onFilmMouseOver: PropTypes.func.isRequired,
  onFilmClick: PropTypes.func.isRequired
};

export default SmallFilmCard;
