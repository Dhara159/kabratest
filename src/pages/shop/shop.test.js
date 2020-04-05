import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import ShopPage from './shop.component';

const mockStore = configureMockStore([thunk]);

describe('ShopPage', () => {
  let wrapper;

  beforeEach(() => {
    const store = mockStore();
    wrapper = shallow(
      <Provider store={store}>
        <ShopPage />
      </Provider>);
  });

  it('should render ShopPage component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});