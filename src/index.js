import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';
import films from './mock/films.js';

const Film = {
  TITLE: `The Grand Budapest Hotel`,
  GENRE: `Drama`,
  RELEASE: 2014
};

ReactDOM.render(
    <App
      title={Film.TITLE}
      genre={Film.GENRE}
      release={Film.RELEASE}
      films={films}
    />,
    document.querySelector(`#root`)
);
