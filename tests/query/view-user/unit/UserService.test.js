import * as UserService from '../../../../query/view-user/services/UserService'
import { expect } from 'chai'
import jwt from 'jsonwebtoken'

describe('UserService', () => {
  it('verify token and return decoded payload', () => {
    const payload = { foo: 'bar' }
    const token = jwt.sign({ foo: 'bar' }, 'secret')
    const decoded = UserService.verifyToken(token)
    expect(decoded).to.include(payload)
    expect(decoded).to.have.all.keys(['foo', 'iat'])
  })

  it('getUser', (done) => {
    UserService.getUser('123', '0015979f436810eaa65bbca1a64', (result) => {
      const expectedResult = {
        status: 'success',
        user: {
          id: '0015979f436810eaa65bbca1a64',
          username: 'Từ Thiện Nguyễn Văn',
          email: 'charitynguyenvan@gmail.com',
          avatarUrl: 'https://lh5.googleusercontent.com/-Uabj3hUMOdY/AAAAAAAAAAI/AAAAAAAAAAA/AMp5VUoDplUFVn3NPsk8FMoKjDPp30Cf6g/s96-c/photo.jpg',
          coverUrl: undefined,
          address: undefined,
          phone: undefined,
          language: undefined,
          sex: undefined,
          yearOfBirth: undefined,
          lastUpdate: undefined,
          blacklist: [],
          storeList:  [],
          numUnreaded: 2
        }
      }
      expect(result).to.deep.equal(expectedResult)
      done()
    })
  })
})
