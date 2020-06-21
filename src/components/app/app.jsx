import React, {PureComponent} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import PropTypes from 'prop-types';
import Main from '../main/main.jsx';
import FilmPage from '../film-page/film-page.jsx';

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      currentFilm: null
    };
  }

  filmTitleHandler(film) {
    this.setState({
      currentFilm: film
    });
  }

  _renderApp() {
    const {films} = this.props;
    const {currentFilm} = this.state;
    const promoFilm = films[0];

    if (!currentFilm) {
      return (
        <Main
          promoFilm={promoFilm}
          films={films}
          onFilmClick={(film) => {
            this.setState({currentFilm: film});
          }}
        />
      );
    }

    if (currentFilm) {
      return (
        <FilmPage
          film={currentFilm}
          films={films}
          onFilmClick={(film) => {
            this.setState({currentFilm: film});
          }}/>
      );
    }

    return null;
  }

  render() {
    const {films} = this.props;
    const currentFilm = films[0];

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/dev-film">
            <FilmPage
              film={currentFilm}
              films={films}
              onFilmClick={(film) => {
                this.setState({currentFilm: film});
              }}/>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  }))
};

export default App;
