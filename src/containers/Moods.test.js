import React from 'react';
import { shallow } from 'enzyme';
import { Moods } from './Moods';
import { Provider } from 'react-redux';
import store from '../store';

describe('Moods Container', () => {
  it('matches a snapshot', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <Moods />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
