import React from 'react'
import { TwitterView } from 'routes/Twitter/components/TwitterView'
import { render } from 'enzyme'

describe('Test du component TwitterView', () => {
  let _component

  beforeEach(() => {
    _component = render(<TwitterView />)
  })

  it('Doit faire apparaitre TwitterView', () => {
    const welcome = _component.find('h4')
    expect(welcome).to.exist()
    expect(welcome.text()).to.match(/TwitterView!/)
  })

})
