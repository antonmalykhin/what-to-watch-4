import * as React from 'react';
import * as PropTypes from 'prop-types';

class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = React.createRef();
  }

  componentDidMount() {
    const video = this._videoRef.current;
    const {src} = this.props;
    video.src = src;
    video.muted = true;
  }

  componentWillUnmount() {
    const video = this._videoRef.current;
    video.src = ``;
    video.muted = null;
  }

  componentDidUpdate() {
    const {isPlaying} = this.props;
    const video = this._videoRef.current;

    if (isPlaying) {
      video.play();
    } else {
      video.load();
    }
  }

  render() {
    const {src, poster, width, height, loop} = this.props;

    return (
      <video
        width={width}
        height={height}
        ref={this._videoRef}
        src={src}
        poster={poster}
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
  loop: PropTypes.bool.isRequired
};

export default VideoPlayer;
