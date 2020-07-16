import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';


const withActiveMainPlayer = (Component) => {
  class WithActiveMainPlayer extends PureComponent {
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
      const {video, background} = this.props.film;

      film.poster = background;
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
      film.poster = ``;
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
      return (
        <Component
          {...this.props}
          duration={this.state.duration}
          progress={this.state.progress}
          isPlaying={this.state.isPlaying}
          onPlayButtonClick={() => {
            this._handlePlay();
          }}
          onFullscreenButtonClick={() => this._videoRef.current.requestFullscreen()
          }
        >
          <video
            className="player__video"
            ref={this._videoRef}
          />
        </Component>
      );
    }
  }

  WithActiveMainPlayer.propTypes = {
    film: PropTypes.shape({
      video: PropTypes.string.isRequired,
      background: PropTypes.string.isRequired
    }).isRequired,
    onExitClick: PropTypes.func.isRequired
  };

  return WithActiveMainPlayer;
};

export default withActiveMainPlayer;
