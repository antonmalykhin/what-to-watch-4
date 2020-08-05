import * as React from 'react';
import {Subtract} from 'utility-types';

interface State {
  isPlaying: boolean;
}

interface InjectingProps {
  isPlaying: boolean;
  onPlayVideo: () => void;
}

const withActivePlayer = (Component) => {
  type P = React.ComponentProps<typeof Component>;
  type T = Subtract<P, InjectingProps>;

  class WithActivePlayer extends React.PureComponent<T, State> {
    constructor(props) {
      super(props);

      this.state = {
        isPlaying: false
      };

      this._handlePlayVideo = this._handlePlayVideo.bind(this);
    }

    _handlePlayVideo(isPlaying) {
      this.setState({
        isPlaying
      });
    }

    render() {
      return (
        <Component
          {...this.props}
          isPlaying={this.state.isPlaying}
          onPlayVideo={this._handlePlayVideo}
        />
      );
    }
  }

  return WithActivePlayer;
};

export default withActivePlayer;
