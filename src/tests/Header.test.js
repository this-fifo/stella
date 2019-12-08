import React from 'react';
import { shallow } from 'enzyme';
import Header from '../components/Header';

describe('Header', () => {
  it('renders without crashing', () => {
    shallow(<Header darkModeBlenderRef={{}} />);
  });

  it('contains dark mode toggle', () => {
    const wrapper = shallow(<Header darkModeBlenderRef={{}} />);
    const darkModeToggle = <img alt="dark mode" src="toggle.svg" width="25%" />;
    expect(wrapper).toContainReact(darkModeToggle);
  });
});
