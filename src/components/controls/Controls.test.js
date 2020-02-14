import React from 'react';
import { shallow } from 'enzyme';
import Controls from './Controls';

describe('Controls component', () => {
  it('should render Controls', () => {
    const wrapper = shallow(<Controls />);
    expect(wrapper).toMatchSnapshot();
  });
});
