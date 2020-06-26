import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = React.createRef();
  }

  componentDidMount() {
    const video = this._videoRef.current;
    const {src} = this.props;
    video.src = src;
  }

  componentWillUnmount() {
    const video = this._videoRef.current;
    video.src = ``;
  }

  componentDidUpdate() {
    const {src, isPlaying} = this.props;
    const video = this._videoRef.current;

    if (isPlaying) {
      video.src = src;
      video.play();
    } else {
      video.load();
    }
  }

  render() {
    const {src, poster, width, height, muted, loop} = this.props;

    return (
      <video
        width={width}
        height={height}
        ref={this._videoRef}
        src={src}
        poster={poster}
        muted={muted}
        loop={loop}
      />
    );
  }
}

VideoPlayer.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  muted: PropTypes.bool.isRequired,
  loop: PropTypes.bool.isRequired
};

export default VideoPlayer;
