import * as React from 'react';

interface Props {
  isPlaying: boolean;
  src: string;
  poster: string;
}

class VideoPlayer extends React.PureComponent<Props, {}> {
  private videoRef: React.RefObject<HTMLVideoElement>

  constructor(props) {
    super(props);

    this.videoRef = React.createRef();
  }

  componentDidMount() {
    const video = this.videoRef.current;

    video.muted = true;
  }

  componentWillUnmount() {
    const video = this.videoRef.current;
    video.src = ``;
    video.muted = null;
    video.onplay = null;
  }

  componentDidUpdate() {
    const {src, isPlaying} = this.props;
    const video = this.videoRef.current;

    video.src = src;

    if (isPlaying) {
      video.play();
    } else {
      video.load();
    }
  }

  render() {
    const {poster} = this.props;

    return (
      <video
        width="280"
        height="175"
        ref={this.videoRef}
        poster={poster}
      />
    );
  }
}

export default VideoPlayer;
