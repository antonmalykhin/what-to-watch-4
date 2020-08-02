import * as React from 'react';
import {formatTime} from '../../utils';
import history from '../../history';
import {getCurrentFilm} from '../../utils';
import {Film, Match} from '../../types';

interface Props {
  films: Film[],
  children: React.ReactNode | React.ReactNode[];
  duration: number,
  progress: number,
  isPlaying: boolean,
  onPlayButtonClick: () => void,
  onFullscreenButtonClick: () => void,
  match: Match
};

const MainVideoPlayer: React.FunctionComponent<Props> = (props: Props) => {
  const {
    films,
    children,
    progress,
    duration,
    isPlaying,
    onPlayButtonClick,
    onFullscreenButtonClick,
    match
  } = props;

  const currentFilm = getCurrentFilm(films, match.params.id);
  const {title} = currentFilm;

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
          history.goBack();
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

export default MainVideoPlayer;
