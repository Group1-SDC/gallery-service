/**
 * This legacy code is not the work of Luke Hatcher.
 * Please see the README.md
 */

import React from 'react';
import { shallow } from 'enzyme';

import AllImages from '../src/components/allImages';
import { SmallImageContainer } from '../src/styledComponents/galleryStyles';

const sampleImgObjs = [
  {
    url: 'http://picsum.photos/seed/3/840/840',
    id: 3,
  },
  {
    url: 'http://picsum.photos/seed/4/840/840',
    id: 4,
  },
];

const sampleImgObjs1 = [
  {
    url: 'http://picsum.photos/seed/3/840/840',
    id: 3,
  },
];

describe('All Images Unit Tests', () => {
  describe('Render Tests', () => {
    it('should render 2 images when ', () => {
      const wrapper = shallow(
        <AllImages
          itemImageObjs={sampleImgObjs}
        />,
      );

      expect(wrapper.find(SmallImageContainer)).toHaveLength(2);
    });
  });
  describe('onClick', () => {
    it('should invoke the correct function when the component is clicked', () => {
      const mockOnClickFunc = jest.fn();
      const wrapper = shallow(
        <AllImages
          itemImageObjs={sampleImgObjs1}
          setMain={() => mockOnClickFunc()}
        />,
      );
      const clickableImg = wrapper.find(SmallImageContainer);
      clickableImg.simulate('click');
      expect(mockOnClickFunc).toHaveBeenCalled();
    });
  });
});
