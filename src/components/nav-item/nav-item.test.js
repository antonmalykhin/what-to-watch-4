import React from 'react';
import renderer from 'react-test-renderer';
import NavItem from './nav-item.jsx';

it(`Should NavItem render correctly`, () => {
  const tree = renderer
    .create(
        <NavItem
          title={`Overview`}
          onNavItemClick={() => {}}
          isActive={true}
        />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
