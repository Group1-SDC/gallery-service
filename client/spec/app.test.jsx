/**
 * This legacy code is not the work of Luke Hatcher.
 * Please see the README.md
 */

import React from 'react';
import { shallow } from 'enzyme';
import App from '../src/components/app';
import { Container } from '../src/styledComponents/galleryStyles';

const mockItemImageObjs = [
  {
    url: 'http://picsum.photos/seed/26/840/840',
    id: 0,
  },
  {
    url: 'http://picsum.photos/seed/27/840/840',
    id: 1,
  },
  {
    url: 'http://picsum.photos/seed/28/840/840',
    id: 2,
  },
  {
    url: 'http://picsum.photos/seed/29/840/840',
    id: 3,
  },
  {
    url: 'http://picsum.photos/seed/30/840/840',
    id: 4,
  },
];

describe('App Unit Tests', () => {
  describe('Render Tests', () => {
    it('should render the app component', () => {
      const wrapper = shallow(<App />);
      expect(wrapper.find(Container)).toHaveLength(1);
    });
  });
  describe('Function invocation', () => {
    it('should invoke getImages on componentDidMount', () => {
      const wrapper = shallow(<App />);
      const mockGetImages = jest.fn();
      wrapper.instance().getImages = mockGetImages;
      wrapper.instance().forceUpdate();
      wrapper.instance().componentDidMount();
      expect(mockGetImages).toHaveBeenCalled();
    });
    it('should change state of main and curr Img when previousImg is invoked', () => {
      const wrapper = shallow(<App />);
      wrapper.setState({ currImg: 2, main: 'http://picsum.photos/seed/28/840/840' });
      expect(wrapper.state().currImg).toBe(2);
      expect(wrapper.state().main).toBe('http://picsum.photos/seed/28/840/840');
      wrapper.instance().setMain(mockItemImageObjs[0]);
      expect(wrapper.state().currImg).toBe(0);
      expect(wrapper.state().main).toBe('http://picsum.photos/seed/26/840/840');
    });
    it('should change state of main and curr Img when nextImg is invoked', () => {
      const wrapper = shallow(<App />);
      wrapper.setState({ currImg: 1, itemImageObjs: mockItemImageObjs, main: '' });
      wrapper.instance().nextImage();
      expect(wrapper.state().currImg).toBe(2);
      expect(wrapper.state().main).toBe('http://picsum.photos/seed/28/840/840');
    });
    it('should change state of main and curr Img when previousImg is invoked', () => {
      const wrapper = shallow(<App />);
      wrapper.setState({ currImg: 3, itemImageObjs: mockItemImageObjs, main: '' });
      wrapper.instance().previousImage();
      expect(wrapper.state().currImg).toBe(2);
      expect(wrapper.state().main).toBe('http://picsum.photos/seed/28/840/840');
    });
  });
});
