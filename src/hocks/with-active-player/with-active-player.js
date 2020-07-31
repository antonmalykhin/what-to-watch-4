import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

const TIMEOUT = 1000;


const withActivePlayer = (Component) => {
  class WithActivePlayer extends PureComponent {
    constructor(props) {
      super(props);

      this._timeoutID = null;

      this.state = {
        isPlaying: false
      };

      this._handlePlayVideo = this._handlePlayVideo.bind(this);
      this._handleStopVideo = this._handleStopVideo.bind(this);
    }

    _handlePlayVideo() {
      this._timeoutID = setTimeout(() => this.setState({isPlaying: true}), TIMEOUT);
    }

    _handleStopVideo() {
      this.setState({isPlaying: false});
      clearTimeout(this._timeoutID);
    }

    componentWillUnmount() {
      if (this._timeoutID) {
        clearTimeout(this._timeoutID);
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

  WithActivePlayer.propTypes = {
    film: PropTypes.object.isRequired,
    onFilmMouseOver: PropTypes.func.isRequired,
  };

  return WithActivePlayer;
};

export default withActivePlayer;
