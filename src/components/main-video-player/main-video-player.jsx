import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {formatTime} from '../../utils.js';


class MainVideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = React.createRef();

    this.state = {
      duration: 0,
      progress: 0,
      isPlaying: false,
    };

    this._handlePlay = this._handlePlay.bind(this);
  }

  componentDidMount() {
    const film = this._videoRef.current;
    const {video} = this.props.film;

    film.src = video;

    // film.oncanplaythrough = () => this.setState({
    //   isPlaying: true
    // });

    film.onloadedmetadata = () => this.setState({
      duration: Math.floor(film.duration)
    });

    film.onplay = () => this.setState({
      isPlaying: true
    });

    film.onpause = () => this.setState({
      isPlaying: false
    });

    film.ontimeupdate = () => this.setState({
      progress: Math.floor(film.currentTime)
    });

  }

  componentWillUnmount() {
    const film = this._videoRef.current;

    film.oncanplaythrough = null;
    film.onplay = null;
    film.onpause = null;
    film.ontimeupdate = null;
    film.src = ``;
  }

  componentDidUpdate() {
    const film = this._videoRef.current;

    if (this.state.isPlaying) {
      film.play();
    } else {
      film.pause();
    }
  }

  _handlePlay() {
    return this.setState({isPlaying: !this.state.isPlaying});
  }

  render() {
    const {
      film,
      onExitClick
    } = this.props;

    const {
      title,
      video
    } = film;

    const {
      duration,
      progress,
      isPlaying,
    } = this.state;

    const remainingTime = duration - progress;
    const formattedRemainingTime = formatTime(remainingTime);
    const togglerPosition = progress * 100 / duration;

    return (
      <div className="player">
        <video
          ref={this._videoRef}
          src={video}
          className="player__video"
          poster="img/player-poster.jpg"></video>

        <button
          type="button"
          className="player__exit"
          onClick={() => {
            onExitClick();
          }}
        >Exit</button>

        <div className="player__controls">
          <div className="player__controls-row">
            <div className="player__time">
              <progress className="player__progress" value={progress} max={duration}></progress>
              <div className="player__toggler" style={{left: `${togglerPosition}%`}}>Toggler</div>
            </div>
            <div className="player__time-value">{formattedRemainingTime}</div>
          </div>

          <div className="player__controls-row">
            <button
              type="button"
              className="player__play"
              onClick={() => {
                this._handlePlay();
              }}
            >
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref={`#${isPlaying ? `pause` : `play-s`}`}></use>
              </svg>
              <span>Play</span>
            </button>
            <div className="player__name">{title}</div>

            <button
              type="button"
              className="player__full-screen"
              onClick={() => this._videoRef.current.requestFullscreen()}
            >
              <svg viewBox="0 0 27 27" width="27" height="27">
                <use xlinkHref="#full-screen"></use>
              </svg>
              <span>Full screen</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

MainVideoPlayer.propTypes = {
  film: PropTypes.shape({
    title: PropTypes.string.isRequired,
    video: PropTypes.string.isRequired
  }).isRequired,
  onExitClick: PropTypes.func.isRequired
};

export default MainVideoPlayer;
