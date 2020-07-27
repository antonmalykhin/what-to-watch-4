import React from 'react';
import renderer from 'react-test-renderer';
import AddReview from './add-review.jsx';

it(`AddReview render correctly`, () => {
  const tree = renderer.create(
      <AddReview
        filmID={13}
        onSubmit={() => {}}
        rating={3}
        onRatingCheck={() => {}}
        isCommentSend={true}
        resetWarning={() => {}}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
