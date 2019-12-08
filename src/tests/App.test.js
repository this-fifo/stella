import React from 'react';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import configureMockStore from 'redux-mock-store';
import App from '../App';

const initialState = {
  repos: [],
  prev: {},
  next: {},
  last: {},
  error: false,
};
const mockStore = configureMockStore();
const store = mockStore(initialState);

describe('App', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });

  it('really renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      div,
    );
  });
});
