import React from 'react';
import renderer from 'react-test-renderer';
import AddReview from './add-review.jsx';
import {Router} from 'react-router-dom';
import history from '../../history.js';

it(`AddReview render correctly`, () => {
  const tree = renderer.create(
      <Router history={history}>
        <AddReview
          filmID={13}
          onSubmit={() => {}}
          rating={3}
          onRatingCheck={() => {}}
          isCommentSend={true}
          resetWarning={() => {}}
        />
      </Router>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
