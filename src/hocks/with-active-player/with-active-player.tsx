import * as React from 'react';
import {Subtract} from 'utility-types';

const TIMEOUT = 1000;

interface State {
  isPlaying: boolean
};

interface InjectingProps {
  isPlaying: boolean,
  onPlayVideo: () => void,
  onStopVideo: () => void
}

const withActivePlayer = (Component) => {
  type P = React.ComponentProps<typeof Component>;
  type T = Subtract<P, InjectingProps>;

  class WithActivePlayer extends React.PureComponent<T, State> {
    private timeoutID: number | null;

    constructor(props) {
      super(props);

      this.timeoutID = null;

      this.state = {
        isPlaying: false
      };

      this._handlePlayVideo = this._handlePlayVideo.bind(this);
      this._handleStopVideo = this._handleStopVideo.bind(this);
    }

    _handlePlayVideo() {
      this.timeoutID = window.setTimeout(() => this.setState({isPlaying: true}), TIMEOUT);
    }

    _handleStopVideo() {
      this.setState({isPlaying: false});
      clearTimeout(this.timeoutID);
    }

    componentWillUnmount() {
      if (this.timeoutID) {
        clearTimeout(this.timeoutID);
      }
    }

    render() {
      return (
        <Component
          {...this.props}
          isPlaying={this.state.isPlaying}
          onPlayVideo={this._handlePlayVideo}
          onStopVideo={this._handleStopVideo}
        />
      );
    }
  }

  return WithActivePlayer;
};

export default withActivePlayer;
