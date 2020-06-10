import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';

const Film = {
  TITLE: `The Grand Budapest Hotel`,
  GENRE: `Drama`,
  RELEASE: 2014
};

ReactDOM.render(
    <App title={Film.TITLE} genre={Film.GENRE} release={Film.RELEASE}/>,
    document.querySelector(`#root`)
);
