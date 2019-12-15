import React from 'react'
import { shallow } from 'enzyme'
import Header from '../components/Header'

describe('Header', () => {
  it('renders without crashing', () => {
    shallow(<Header darkModeBlenderRef={{}} />)
  })

  it('contains dark mode toggle', () => {
    const wrapper = shallow(
      <Header.WrappedComponent darkModeBlenderRef={{}} history={{ location: { pathname: '/' } }} />
    )
    const darkModeToggle = <img alt="dark mode" src="toggle.svg" style={{ maxWidth: '2.0rem' }} />
    expect(wrapper).toContainReact(darkModeToggle)
  })
})
