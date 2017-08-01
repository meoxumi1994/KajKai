import { verifyToken } from '../../../../query/view-store/services/StoreService'
import { expect } from 'chai'
import jwt from 'jsonwebtoken'

describe('StoreService', () => {
  it('verify token and return decoded payload', () => {
    const payload = { foo: 'bar' }
    const token = jwt.sign({ foo: 'bar' }, 'secret')
    const decoded = verifyToken(token)
    expect(decoded).to.include(payload)
    expect(decoded).to.have.all.keys(['foo', 'iat'])
  })

  // it('can test async function', (done) => {
  //   UserService.testAsync((result) => {
  //     const expectedResult = 'testAsync'
  //     expect(result).to.equal(expectedResult)
  //     done()
  //   })
  // })
})
