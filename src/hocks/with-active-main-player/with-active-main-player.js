import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {getCurrentFilm} from '../../utils.js';


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

      const {films, match} = this.props;
      const currentFilm = getCurrentFilm(films, match.params.id);

      const {background, video} = currentFilm;

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
            autoPlay={true}
          />
        </Component>
      );
    }
  }

  WithActiveMainPlayer.propTypes = {
    films: PropTypes.array,
    match: PropTypes.object.isRequired
  };

  return WithActiveMainPlayer;
};

export default withActiveMainPlayer;
