import 'babel-polyfill'
import { expect } from 'chai'
import request from 'supertest'
import app from '../../../../query/view-user/app'
import jwt from 'jsonwebtoken'

describe('User API', () => {
  describe('GET /user with correct token', () => {
    it('should return correct user info', (done) => {
      const token = jwt.sign({_id: '0015979f436810eaa65bbca1a64'}, 'secret', { expiresIn: 60 * 60 * 60 })
      request(app)
        .get('/user')
        .set('Cookie', 'token=' + token)
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
          const expectedResult = {
            tokenId: token,
            status: 'success',
            user: {
              id: '0015979f436810eaa65bbca1a64',
              username: 'Từ Thiện Nguyễn Văn',
              email: 'charitynguyenvan@gmail.com',
              avatarUrl: 'https://lh5.googleusercontent.com/-Uabj3hUMOdY/AAAAAAAAAAI/AAAAAAAAAAA/AMp5VUoDplUFVn3NPsk8FMoKjDPp30Cf6g/s96-c/photo.jpg',
              coverUrl: 'https://lh5.googleusercontent.com/-Uabj3hUMOdY/AAAAAAAAAAI/AAAAAAAAAAA/AMp5VUoDplUFVn3NPsk8FMoKjDPp30Cf6g/s96-c/photo.jpg',
              address: {
                city : 'Quảng Nam',
                district : 'Cầu Giấy',
                street : 'Đại lộ Thăng Long',
                longitude : 45,
                latitude : 45
              },
              phone: '0123456789',
              language: 'vi',
              sex: 'MALE',
              yearOfBirth: (new Date('2017-08-01T12:50:56.093Z')).getTime(),
              lastUpdate: {
                username : (new Date('2017-08-01T12:50:56.093Z')).getTime(),
                phone : (new Date('2017-08-01T12:50:56.093Z')).getTime(),
                address : (new Date('2017-08-01T12:50:56.093Z')).getTime()
              },
              blacklist: [
                {
                  id: '0015979f436810eaa65bbca1a65',
                  type: 'userid',
                  name: 'Charity'
                }
              ],
              storeList:  [],
              numUnreaded: 0
            }
          }
          expect(res.body).to.deep.equal(expectedResult)
          done()
        })
    })
  })

  describe('GET /user with wrong token', () => {
    it('should return status noData', (done) => {
      const token = 'wrong token'
      request(app)
        .get('/user')
        .set('Cookie', 'token=' + token)
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
          const expectedResult = {
            status: 'noData',
            tokenId: 'wrong token',
            user: {
              id: 'Guest'
            }
          }
          expect(res.body).to.deep.equal(expectedResult)
          done()
        })
    })
  })
})
