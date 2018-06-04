import React from 'react'
import { HomeView } from 'routes/Home/components/HomeView'
import { render } from 'enzyme'

describe('Test du component Home', () => {
  let _component

  beforeEach(() => {
    _component = render(<HomeView />)
  })

  it('Doit faire apparaitre Accueil', () => {
    const welcome = _component.find('h4')
    expect(welcome).to.exist()
    expect(welcome.text()).to.match(/Accueil!/)
  })

})
