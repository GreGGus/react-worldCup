import React from 'react'
import { HomeViewContainer } from 'routes/Home/containers/HomeViewContainer'
import { render } from 'enzyme'

describe('Test du component Home', () => {
  let _component

  beforeEach(() => {
    _component = render(<HomeViewContainer />)
  })

  it('Doit faire apparaitre Accueil', () => {
    const welcome = _component.find('h4')
    expect(welcome).to.exist()
    expect(welcome.text()).to.match(/Accueil!/)
  })

})
