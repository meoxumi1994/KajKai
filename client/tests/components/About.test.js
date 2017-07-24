import React from 'react'
import About from '../../components/user/About'
import renderer  from 'react-test-renderer'
import {shallow} from 'enzyme';

describe('About', () => {
  it('should render self and subcomponents', () => {
    const component = shallow(
      <About/>
    )

    const clickme = component.find('div.btn.btn-default')
    expect(clickme.text()).toEqual('click me')
    clickme.simulate('click')

    expect(component.text()).toMatch(/hihihi/)

    clickme.simulate('click')
    expect(component.text()).not.toMatch(/hihihi/)

  })
})
