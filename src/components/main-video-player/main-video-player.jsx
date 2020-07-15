import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {convertMinutesToSeconds, formatTime} from '../../utils.js';


class MainVideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = React.createRef();

    this.state = {
      isPlaying: false
    };

    this._handlePlay = this._handlePlay.bind(this);
    this._handleStop = this._handleStop.bind(this);

  }

  _handlePlay() {
    return this.setState({isPlaying: true});
  }

  _handleStop() {
    return this.setState({isPlaying: false});
  }

  render() {
    const {film} = this.props;

    const {
      title,
      runtime,
      video
    } = film;

    let remainingTime = convertMinutesToSeconds(runtime);
    let formattedRemainingTime = formatTime(remainingTime);

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
            console.log(`exit`);
          }}
        >Exit</button>

        <div className="player__controls">
          <div className="player__controls-row">
            <div className="player__time">
              <progress className="player__progress" value="30" max="100"></progress>
              <div className="player__toggler" style={{ left: `30%` }}>Toggler</div>
            </div>
            <div className="player__time-value">{formattedRemainingTime}</div>
          </div>

          <div className="player__controls-row">
            <button
              type="button"
              className="player__play"
              onClick={() => {
                console.log(`play`);
              }}
            >
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref="#play-s"></use>
              </svg>
              <span>Play</span>
            </button>
            <div className="player__name">{title}</div>

            <button
              type="button"
              className="player__full-screen"
              onClick={() => {
                console.log(`fullscreen`);
              }}
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
    runtime: PropTypes.number.isRequired,
    video: PropTypes.string.isRequired
  }).isRequired
};

export default MainVideoPlayer;
