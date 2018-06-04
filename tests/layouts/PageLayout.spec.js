import React from 'react'
import PageLayout from 'layouts/PageLayout/PageLayout'
import { shallow } from 'enzyme'

describe('Test page principal', () => {

  it('Test du titre de l\'app' , () => {
    shallow(<PageLayout />).find('h1').should.have.text('React World Cup')
  })
})
