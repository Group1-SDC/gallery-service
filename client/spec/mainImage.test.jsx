/**
 * This legacy code is not the work of Luke Hatcher.
 * Please see the README.md
 */

import React from 'react';
import { shallow } from 'enzyme';

import MainImage from '../src/components/mainImage';
import { MainImg, ButtonLeft, ButtonRight } from '../src/styledComponents/galleryStyles';

const sampleMain = 'https://s3-us-west-2.amazonaws.com/adidas.gallery/images025.jpg';

describe('Main Image Unit Tests', () => {
  describe('Render Tests', () => {
    it('should render 1 images when a main img url is provided', () => {
      const wrapper = shallow(
        <MainImage
          main={sampleMain}
        />,
      );

      expect(wrapper.find(MainImg)).toHaveLength(1);
    });
  });
  describe('onClick', () => {
    it('should invoke the correct function when the Button Right component is clicked', () => {
      const mockOnClickFuncRight = jest.fn();
      const wrapper = shallow(
        <MainImage
          nextImage={mockOnClickFuncRight}
        />,
      );
      const clickableButton = wrapper.find(ButtonRight);
      clickableButton.simulate('click');
      expect(mockOnClickFuncRight).toHaveBeenCalled();
    });
    it('should invoke the correct function when the Button Left component is clicked', () => {
      const mockOnClickFuncLeft = jest.fn();
      const wrapper = shallow(
        <MainImage
          previousImage={mockOnClickFuncLeft}
        />,
      );
      const clickableButton = wrapper.find(ButtonLeft);
      clickableButton.simulate('click');
      expect(mockOnClickFuncLeft).toHaveBeenCalled();
    });
  });
});
