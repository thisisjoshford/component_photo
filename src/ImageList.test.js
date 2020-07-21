import React from 'react';
import ImageList from './ImageList.js';
import renderer from 'react-test-renderer';
import images from './data.js';

it('header renders correctly', () => {
  const tree = renderer
    .create(<ImageList images={images} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});