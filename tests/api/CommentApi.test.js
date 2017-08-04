import 'babel-polyfill'
import { expect } from 'chai'
import request from 'supertest'
import app from '../../query/view-user/app'
import jwt from 'jsonwebtoken'

describe('Comment API', () => {
  describe('GET /user', () => {
    describe('with correct token', () => {
      it('should return status success and correct user info with tokenId', (done) => {
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

    describe('with wrong token', () => {
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

    describe('without token', () => {
      it('should return status noData', (done) => {
        request(app)
          .get('/user')
          .expect('Content-Type', /json/)
          .expect(200)
          .end((err, res) => {
            const expectedResult = {
              status: 'noData',
              user: {
                id: 'Guest'
              }
            }
            expect(res.body).to.deep.equal(expectedResult)
            done()
          })
      })
    })

    describe('with correct token of banned user', () => {
      it('should return status failed with banned reson', (done) => {
        const token = jwt.sign({_id: '0015979f436810eaa65bbca1a65'}, 'secret', { expiresIn: 60 * 60 * 60 })
        request(app)
          .get('/user')
          .set('Cookie', 'token=' + token)
          .expect('Content-Type', /json/)
          .expect(200)
          .end((err, res) => {
            const expectedResult = {
              tokenId: null,
              status: 'failed',
              banned: true,
              reason: 'Spam',
              user: {
                id: '0015979f436810eaa65bbca1a65'
              }
            }
            expect(res.body).to.deep.equal(expectedResult)
            done()
          })
      })
    })
  })

  describe('GET /user/:id', () => {
    describe('with correct token and requesterId == id', () => {
      it('should return status success and correct user info related :id with tokenId', (done) => {
        const token = jwt.sign({_id: '0015979f436810eaa65bbca1a64'}, 'secret', { expiresIn: 60 * 60 * 60 })
        request(app)
          .get('/user/0015979f436810eaa65bbca1a64')
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

    describe('with correct token and requesterId != id', () => {
      it('should return status success and correct user public info related :id', (done) => {
        const token = jwt.sign({_id: '0015979f436810eaa65bbca1a65'}, 'secret', { expiresIn: 60 * 60 * 60 })
        request(app)
          .get('/user/0015979f436810eaa65bbca1a64')
          .set('Cookie', 'token=' + token)
          .expect('Content-Type', /json/)
          .expect(200)
          .end((err, res) => {
            const expectedResult = {
              status: 'success',
              user: {
                id: '0015979f436810eaa65bbca1a64',
                username: 'Từ Thiện Nguyễn Văn',
                email: '',
                avatarUrl: 'https://lh5.googleusercontent.com/-Uabj3hUMOdY/AAAAAAAAAAI/AAAAAAAAAAA/AMp5VUoDplUFVn3NPsk8FMoKjDPp30Cf6g/s96-c/photo.jpg',
                coverUrl: 'https://lh5.googleusercontent.com/-Uabj3hUMOdY/AAAAAAAAAAI/AAAAAAAAAAA/AMp5VUoDplUFVn3NPsk8FMoKjDPp30Cf6g/s96-c/photo.jpg',
                address: {},
                phone: '',
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

    describe('with wrong token', () => {
      it('should return status success and correct user public info related to :id', (done) => {
        const token = 'wrong token'
        request(app)
          .get('/user/0015979f436810eaa65bbca1a64')
          .set('Cookie', 'token=' + token)
          .expect('Content-Type', /json/)
          .expect(200)
          .end((err, res) => {
            const expectedResult = {
              status: 'success',
              user: {
                id: '0015979f436810eaa65bbca1a64',
                username: 'Từ Thiện Nguyễn Văn',
                email: '',
                avatarUrl: 'https://lh5.googleusercontent.com/-Uabj3hUMOdY/AAAAAAAAAAI/AAAAAAAAAAA/AMp5VUoDplUFVn3NPsk8FMoKjDPp30Cf6g/s96-c/photo.jpg',
                coverUrl: 'https://lh5.googleusercontent.com/-Uabj3hUMOdY/AAAAAAAAAAI/AAAAAAAAAAA/AMp5VUoDplUFVn3NPsk8FMoKjDPp30Cf6g/s96-c/photo.jpg',
                address: {},
                phone: '',
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

    describe('with correct token of banned user', () => {
      it('should return status failed with banned reson', (done) => {
        const token = jwt.sign({_id: '0015979f436810eaa65bbca1a64'}, 'secret', { expiresIn: 60 * 60 * 60 })
        request(app)
          .get('/user/0015979f436810eaa65bbca1a65')
          .set('Cookie', 'token=' + token)
          .expect('Content-Type', /json/)
          .expect(200)
          .end((err, res) => {
            const expectedResult = {
              status: 'failed',
              banned: true,
              reason: 'Spam',
              user: {
                id: '0015979f436810eaa65bbca1a65'
              }
            }
            expect(res.body).to.deep.equal(expectedResult)
            done()
          })
      })
    })
  })

  describe('GET /imagelist/user', () => {
    describe('with correct token and offset', () => {
      it('should return status success and list of uploaded images', (done) => {
        const token = jwt.sign({_id: '0015979f436810eaa65bbca1a64'}, 'secret', { expiresIn: 60 * 60 * 60 })
        request(app)
          .get('/imagelist/user?offset=' + (new Date('2017-08-01T12:50:56.093Z')).getTime())
          .set('Cookie', 'token=' + token)
          .expect('Content-Type', /json/)
          .expect(200)
          .end((err, res) => {
            const expectedResult = {
              offset: -2,
              status: 'success',
              listImage: [
                {
                  url: 'https://lh5.googleusercontent.com/-Uabj3hUMOdY/AAAAAAAAAAI/AAAAAAAAAAA/AMp5VUoDplUFVn3NPsk8FMoKjDPp30Cf6g/s96-c/photo.jpg',
                  time: (new Date('2017-07-27T14:09:58.447Z')).getTime()
                }
              ]
            }
            expect(res.body).to.deep.equal(expectedResult)
            done()
          })
      })
    })

    describe('with correct token but no offset', () => {
      it('should return status success and list of uploaded images', (done) => {
        const token = jwt.sign({_id: '0015979f436810eaa65bbca1a64'}, 'secret', { expiresIn: 60 * 60 * 60 })
        request(app)
          .get('/imagelist/user')
          .set('Cookie', 'token=' + token)
          .expect('Content-Type', /json/)
          .expect(200)
          .end((err, res) => {
            const expectedResult = {
              offset: -2,
              status: 'success',
              listImage: [
                {
                  url: 'https://lh5.googleusercontent.com/-Uabj3hUMOdY/AAAAAAAAAAI/AAAAAAAAAAA/AMp5VUoDplUFVn3NPsk8FMoKjDPp30Cf6g/s96-c/photo.jpg',
                  time: (new Date('2017-07-27T14:09:58.447Z')).getTime()
                }
              ]
            }
            expect(res.body).to.deep.equal(expectedResult)
            done()
          })
      })
    })

    describe('with correct token and offset == -1', () => {
      it('should return status success and list of uploaded images', (done) => {
        const token = jwt.sign({_id: '0015979f436810eaa65bbca1a64'}, 'secret', { expiresIn: 60 * 60 * 60 })
        request(app)
          .get('/imagelist/user?offset=-1')
          .set('Cookie', 'token=' + token)
          .expect('Content-Type', /json/)
          .expect(200)
          .end((err, res) => {
            const expectedResult = {
              offset: -2,
              status: 'success',
              listImage: [
                {
                  url: 'https://lh5.googleusercontent.com/-Uabj3hUMOdY/AAAAAAAAAAI/AAAAAAAAAAA/AMp5VUoDplUFVn3NPsk8FMoKjDPp30Cf6g/s96-c/photo.jpg',
                  time: (new Date('2017-07-27T14:09:58.447Z')).getTime()
                }
              ]
            }
            expect(res.body).to.deep.equal(expectedResult)
            done()
          })
      })
    })

    describe('with wrong token', () => {
      it('should return status noData', (done) => {
        const token = 'wrong token'
        request(app)
          .get('/imagelist/user?offset=-1')
          .set('Cookie', 'token=' + token)
          .expect('Content-Type', /json/)
          .expect(200)
          .end((err, res) => {
            const expectedResult = {
              status: 'noData',
              listImage: []
            }
            expect(res.body).to.deep.equal(expectedResult)
            done()
          })
      })
    })

    describe('without token', () => {
      it('should return status noData', (done) => {
        request(app)
          .get('/imagelist/user?offset=-1')
          .expect('Content-Type', /json/)
          .expect(200)
          .end((err, res) => {
            const expectedResult = {
              status: 'noData',
              listImage: []
            }
            expect(res.body).to.deep.equal(expectedResult)
            done()
          })
      })
    })

    describe('with banned user', () => {
      it('should return status failed with banned reason', (done) => {
        const token = jwt.sign({_id: '0015979f436810eaa65bbca1a65'}, 'secret', { expiresIn: 60 * 60 * 60 })
        request(app)
          .get('/imagelist/user?offset=' + (new Date('2017-08-01T12:50:56.093Z')).getTime())
          .set('Cookie', 'token=' + token)
          .expect('Content-Type', /json/)
          .expect(200)
          .end((err, res) => {
            const expectedResult = {
              offset: '2017-08-01T12:50:56.093Z',
              status: 'failed',
              banned: true,
              reason: 'Spam',
              listImage: []
            }
            expect(res.body).to.deep.equal(expectedResult)
            done()
          })
      })
    })

  })

  describe('GET /notification', () => {
    describe('with correct token, offset and length', () => {
      it('should return status success and notifications info', (done) => {
        const token = jwt.sign({_id: '0015979f436810eaa65bbca1a64'}, 'secret', { expiresIn: 60 * 60 * 60 })
        request(app)
          .get('/notification?offset=-1&length=1')
          .set('Cookie', 'token=' + token)
          .expect('Content-Type', /json/)
          .expect(200)
          .end((err, res) => {
            const expectedResult = {
              status: 'success',
              numUnreaded: 0,
              offset: (new Date('2017-07-31T15:42:22.971Z')).getTime(),
              notifications: [
                {
                  type: 'leadercomment',
                  id : '597f4fde93e2e5691ddaf0e6',
                  leadercommentid: '004597f4fde1f1d9e2313b42dbb',
                  sellpostid: '012597a24ede65b1a7b08de02db',
                  ownerid: '0025979f4c3e65b1a7b08de02c5',
                  avatarUrl: 'https://d1z4p30mgj29.cloudfront.net/a6a1acbb56aae018694f97951008d77e4befc90e473e2d11355b775aea3.png',
                  name: 'ga rau rau ga',
                  content: '1',
                  time: (new Date("2017-07-31T15:42:22.971Z")).getTime(),
                  likes: [],
                  likestatus: ['like'],
                  storename: 'ga rau rau ga',
                  urlname: 'rauga',
                  avartarStore: 'https://d1z4p30mgj29.cloudfront.net/a6a1acbb56aae018694f97951008d77e4befc90e473e2d11355b775aea3.png',
                  order: [],
                  isclick: true
                }
              ]
            }
            expect(res.body).to.deep.equal(expectedResult)
            done()
          })
      })
    })

    describe('with correct token but no offset', () => {
      it('should return status success and notifications info', (done) => {
        const token = jwt.sign({_id: '0015979f436810eaa65bbca1a64'}, 'secret', { expiresIn: 60 * 60 * 60 })
        request(app)
          .get('/notification?length=1')
          .set('Cookie', 'token=' + token)
          .expect('Content-Type', /json/)
          .expect(200)
          .end((err, res) => {
            const expectedResult = {
              status: 'success',
              numUnreaded: 0,
              offset: (new Date('2017-07-31T15:42:22.971Z')).getTime(),
              notifications: [
                {
                  type: 'leadercomment',
                  id : '597f4fde93e2e5691ddaf0e6',
                  leadercommentid: '004597f4fde1f1d9e2313b42dbb',
                  sellpostid: '012597a24ede65b1a7b08de02db',
                  ownerid: '0025979f4c3e65b1a7b08de02c5',
                  avatarUrl: 'https://d1z4p30mgj29.cloudfront.net/a6a1acbb56aae018694f97951008d77e4befc90e473e2d11355b775aea3.png',
                  name: 'ga rau rau ga',
                  content: '1',
                  time: (new Date("2017-07-31T15:42:22.971Z")).getTime(),
                  likes: [],
                  likestatus: ['like'],
                  storename: 'ga rau rau ga',
                  urlname: 'rauga',
                  avartarStore: 'https://d1z4p30mgj29.cloudfront.net/a6a1acbb56aae018694f97951008d77e4befc90e473e2d11355b775aea3.png',
                  order: [],
                  isclick: true
                }
              ]
            }
            expect(res.body).to.deep.equal(expectedResult)
            done()
          })
      })
    })

    describe('with correct token and offset == -1', () => {
      it('should return status success and notifications info', (done) => {
        const token = jwt.sign({_id: '0015979f436810eaa65bbca1a64'}, 'secret', { expiresIn: 60 * 60 * 60 })
        request(app)
          .get('/notification?offset=-1&length=1')
          .set('Cookie', 'token=' + token)
          .expect('Content-Type', /json/)
          .expect(200)
          .end((err, res) => {
            const expectedResult = {
              status: 'success',
              numUnreaded: 0,
              offset: (new Date('2017-07-31T15:42:22.971Z')).getTime(),
              notifications: [
                {
                  type: 'leadercomment',
                  id : '597f4fde93e2e5691ddaf0e6',
                  leadercommentid: '004597f4fde1f1d9e2313b42dbb',
                  sellpostid: '012597a24ede65b1a7b08de02db',
                  ownerid: '0025979f4c3e65b1a7b08de02c5',
                  avatarUrl: 'https://d1z4p30mgj29.cloudfront.net/a6a1acbb56aae018694f97951008d77e4befc90e473e2d11355b775aea3.png',
                  name: 'ga rau rau ga',
                  content: '1',
                  time: (new Date("2017-07-31T15:42:22.971Z")).getTime(),
                  likes: [],
                  likestatus: ['like'],
                  storename: 'ga rau rau ga',
                  urlname: 'rauga',
                  avartarStore: 'https://d1z4p30mgj29.cloudfront.net/a6a1acbb56aae018694f97951008d77e4befc90e473e2d11355b775aea3.png',
                  order: [],
                  isclick: true
                }
              ]
            }
            expect(res.body).to.deep.equal(expectedResult)
            done()
          })
      })
    })

    describe('with wrong token', () => {
      it('should return status noData', (done) => {
        const token = 'wrong token'
        request(app)
          .get('/notification?offset=' + (new Date('2017-08-01T12:50:56.093Z')).getTime())
          .set('Cookie', 'token=' + token)
          .expect('Content-Type', /json/)
          .expect(200)
          .end((err, res) => {
            const expectedResult = {
              status: 'failed',
              reason: 'Guest',
              offset: '2017-08-01T12:50:56.093Z'
            }
            expect(res.body).to.deep.equal(expectedResult)
            done()
          })
      })
    })

    describe('without token', () => {
      it('should return status noData', (done) => {
        request(app)
          .get('/notification?offset=-1')
          .expect('Content-Type', /json/)
          .expect(200)
          .end((err, res) => {
            const expectedResult = {
              status: 'failed',
              reason: 'Guest',
              offset: res.body.offset
            }
            expect(res.body).to.deep.equal(expectedResult)
            done()
          })
      })
    })
  })


})
