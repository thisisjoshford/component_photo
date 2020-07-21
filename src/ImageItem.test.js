import React from 'react';
import ImageItem from './ImageItem.js';
import renderer from 'react-test-renderer';
import images from './data.js'

it('header renders correctly', () => {
  const tree = renderer
    .create(<ImageItem images={images}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});