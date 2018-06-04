import {default as createStore} from 'store/createStore'

describe('Test de création du store redux et d\'un dispatch d\'action, () => {
  var store


  before(() => {
    store = createStore()
  })

  describe('(Location) : /twitter', () => {
    it('l etat du state doit être egal à twitter', () => {
      const location = {
        pathname : '/twitter'
      }
      store.dispatch({
        type    : 'LOCATION_CHANGE',
        payload : location
      })
      expect(store.getState().location).to.deep.equal(location)
    })
  })
})
