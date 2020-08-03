import * as React from 'react';
import * as renderer from 'react-test-renderer';
import NavItem from './nav-item';
import {noop} from '../../utils';

it(`Should NavItem render correctly`, () => {
  const tree = renderer
    .create(
        <NavItem
          title={`Overview`}
          onNavItemClick={noop}
          isActive={true}
        />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
