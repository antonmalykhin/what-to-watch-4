import * as React from 'react';
import {Subtract} from 'utility-types';
import { getCurrentFilm } from '../../utils';

interface State {
  duration: number,
  progress: number,
  isPlaying: boolean,
};

interface InjectingProps {
  duration: number,
  progress: number,
  isPlaying: boolean,
  onPlayButtonClick: () => void,
  onFullscreenButtonClick: () => void
};

const withActiveMainPlayer = (Component) => {
  type P = React.ComponentProps<typeof Component>;
  type T = Subtract<P, InjectingProps>;

  class WithActiveMainPlayer extends React.PureComponent<T, State> {
    private videoRef: React.RefObject<HTMLVideoElement>;
    constructor(props) {
      super(props);

      this.videoRef = React.createRef();

      this.state = {
        duration: 0,
        progress: 0,
        isPlaying: false,
      };

      this._handlePlay = this._handlePlay.bind(this);
    }

    componentDidMount() {
      const film = this.videoRef.current;

      const { films, match } = this.props;
      const currentFilm = getCurrentFilm(films, match.params.id);

      const { background, video } = currentFilm;

      film.poster = background;
      film.src = video;

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
      const film = this.videoRef.current;

      film.oncanplaythrough = null;
      film.onplay = null;
      film.onpause = null;
      film.ontimeupdate = null;
      film.poster = ``;
      film.src = ``;
    }

    componentDidUpdate() {
      const film = this.videoRef.current;

      if (this.state.isPlaying) {
        film.play();
      } else {
        film.pause();
      }
    }

    _handlePlay() {
      return this.setState({ isPlaying: !this.state.isPlaying });
    }

    render() {
      return (
        <Component
          {...this.props}
          duration={this.state.duration}
          progress={this.state.progress}
          isPlaying={this.state.isPlaying}
          onPlayButtonClick={() => {
            this._handlePlay();
          }}
          onFullscreenButtonClick={() => this.videoRef.current.requestFullscreen()
          }
        >
          <video
            className="player__video"
            ref={this.videoRef}
            autoPlay={true}
          />
        </Component>
      );
    }
  }

  return WithActiveMainPlayer;
};

export default withActiveMainPlayer;
