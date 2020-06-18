import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
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

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should film title link be pressed`, () => {
  const onTitleButtonClick = jest.fn();

  const mainPage = shallow(
      <Main
        title={Film.TITLE}
        genre={Film.GENRE}
        release={Film.RELEASE}
        films={films}
        onFilmTitleClick={onTitleButtonClick}
      />
  );

  const filmTitles = mainPage.find(`.small-movie-card__link`);

  filmTitles.forEach((filmTitle) => filmTitle.simulate(`click`));

  expect(onTitleButtonClick).toHaveBeenCalledTimes(filmTitles.length);
});
