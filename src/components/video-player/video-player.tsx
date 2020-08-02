import * as React from 'react';

interface Props {
  isPlaying: boolean,
  src: string,
  poster: string,
  width: number,
  height: number,
  loop: boolean
};

class VideoPlayer extends React.PureComponent<Props, {}> {
  private videoRef: React.RefObject<HTMLVideoElement>
  constructor(props) {
    super(props);

    this.videoRef = React.createRef();
  }

  componentDidMount() {
    const video = this.videoRef.current;
    const {src} = this.props;
    video.src = src;
    video.muted = true;
  }

  componentWillUnmount() {
    const video = this.videoRef.current;
    video.src = ``;
    video.muted = null;
  }

  componentDidUpdate() {
    const {isPlaying} = this.props;
    const video = this.videoRef.current;

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
        ref={this.videoRef}
        src={src}
        poster={poster}
        loop={loop}
      />
    );
  }
}

export default VideoPlayer;
