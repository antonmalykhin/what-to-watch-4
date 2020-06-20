import React, {PureComponent} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import PropTypes from 'prop-types';
import Main from '../main/main.jsx';
import FilmPage from '../film-page/film-page.jsx';

class App extends PureComponent {
  constructor(props) {
    super(props);

  }

  filmTitleHandler() { }

  _renderApp() {
    const {title, genre, release, films} = this.props;

    return (
      <Main
        title={title}
        genre={genre}
        release={release}
        films={films}
        onFilmTitleClick={this.filmTitleHandler}
      />
    );
  }

  render() {

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/dev-film">
            <FilmPage />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  release: PropTypes.number.isRequired,
  films: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  }))
};

export default App;
