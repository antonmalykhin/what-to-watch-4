import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main.jsx';

const Film = {
  TITLE: `The Grand Budapest Hotel`,
  GENRE: `Drama`,
  RELEASE: 2014
};

const films = [{
  title: `Fantastic Beasts: The Crimes of Grindelwald`,
  image: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`
}, {
  title: `Bohemian Rhapsody`,
  image: `img/bohemian-rhapsody.jpg`
}, {
  title: `Macbeth`,
  image: `img/macbeth.jpg`
}, {
  title: `Aviator`,
  image: `img/aviator.jpg`
}, {
  title: `We need to talk about Kevin`,
  image: `img/we-need-to-talk-about-kevin.jpg`
}, {
  title: `What We Do in the Shadows`,
  image: `img/what-we-do-in-the-shadows.jpg`
}, {
  title: `Revenant`,
  image: `img/revenant.jpg`
}, {
  title: `Johnny English`,
  image: `img/johnny-english.jpg`
}];

const filmTitleHandler = () => {};

it(`Should Main render correctly`, () => {
  const tree = renderer
    .create(<Main
      title={Film.TITLE}
      genre = {Film.GENRE}
      release={Film.RELEASE}
      films={films}
      onFilmTitleClick={filmTitleHandler}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

