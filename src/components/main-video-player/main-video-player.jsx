import React from 'react';
import PropTypes from 'prop-types';
import {formatTime} from '../../utils.js';


const MainVideoPlayer = (props) => {
  const {
    film,
    onExitClick,
    children,
    progress,
    duration,
    isPlaying,
    onPlayButtonClick,
    onFullscreenButtonClick
  } = props;

  const {
    title,
  } = film;

  const remainingTime = duration - progress;
  const formattedRemainingTime = formatTime(remainingTime);
  const togglerPosition = progress * 100 / duration;

  return (
    <div className="player">

      {children}

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
              onPlayButtonClick();
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
            onClick={() => {
              onFullscreenButtonClick();
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
};

MainVideoPlayer.propTypes = {
  film: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
  onExitClick: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  duration: PropTypes.number.isRequired,
  progress: PropTypes.number.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  onPlayButtonClick: PropTypes.func.isRequired,
  onFullscreenButtonClick: PropTypes.func.isRequired
};

export default MainVideoPlayer;
