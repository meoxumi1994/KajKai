import React from 'react'
import About from '../../components/user/About'
import renderer from 'react-test-renderer'

describe('About', () => {
  it('should render self and subcomponents', () => {
    const component = renderer.create(
      <About />
    )
    expect(component).toMatchSnapshot()
  })
})
