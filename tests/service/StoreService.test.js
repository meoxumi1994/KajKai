import * as UserService from '../../query/view-user/services/UserService'
import * as StoreService from '../../query/view-store/services/StoreService'
import { expect } from 'chai'
import jwt from 'jsonwebtoken'

describe('StoreService', () => {
  describe('getStore', () => {
    describe('with correct storeId', () => {
      it('should return status success and correct store info', (done) => {
        UserService.getUser('0015979f436810eaa65bbca1a64', '0015979f436810eaa65bbca1a64', (result) => {
          const expectedResult = {
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
          expect(result).to.deep.equal(expectedResult)
          done()
        })
      })
    })

    describe('with wrong storeId', () => {
      it('should return status noData', (done) => {
        UserService.getUser('', 'wrongId', (result) => {
          const expectedResult = {
            status: 'noData',
            user: {
              id: 'wrongId'
            }
          }
          expect(result).to.deep.equal(expectedResult)
          done()
        })
      })
    })

    describe('with storeId of a banned user', () => {
      it('should return status failed with banned reason', (done) => {
        UserService.getUser('', '0015979f436810eaa65bbca1a65', (result) => {
          const expectedResult = {
            status: 'failed',
            banned: true,
            reason: 'Spam',
            user: {
              id: '0015979f436810eaa65bbca1a65'
            }
          }
          expect(result).to.deep.equal(expectedResult)
          done()
        })
      })
    })
  })

  describe('createStore', () => {
    describe('with all store valid info', () => {
      it('should return success and the store info', (done) => {
        UserService.getUserImageList('', '0015979f436810eaa65bbca1a64', new Date('2017-08-01T12:50:56.093Z'), (result) => {
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
          expect(result).to.deep.equal(expectedResult)
          done()
        })
      })
    })

    describe('with store name does not conform business rule', () => {
      it('should return status failed and reason', (done) => {
        UserService.getUserImageList('', '0015979f436810eaa65bbca1a64', new Date('2017-08-01T12:50:56.093Z'), (result) => {
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
          expect(result).to.deep.equal(expectedResult)
          done()
        })
      })
    })

    describe('with existed url name', () => {
      it('should return status failed and reason', (done) => {
        UserService.getUserImageList('', 'wrongId',  new Date('2017-08-01T12:50:56.093Z'), (result) => {
          const expectedResult = {
            status: 'noData',
            listImage: []
          }
          expect(result).to.deep.equal(expectedResult)
          done()
        })
      })
    })

    describe('with url name does not conform business rule', () => {
      it('should return status failed and reason', (done) => {
        UserService.getUserImageList('', '0015979f436810eaa65bbca1a65', new Date('2017-08-01T12:50:56.093Z'), (result) => {
          const expectedResult = {
            offset: new Date('2017-08-01T12:50:56.093Z'),
            status: 'failed',
            banned: true,
            reason: 'Spam',
            listImage: []
          }
          expect(result).to.deep.equal(expectedResult)
          done()
        })
      })
    })

    describe('without category', () => {
      it('should return status failed and reason', (done) => {
        UserService.getUserImageList('', '0015979f436810eaa65bbca1a65', new Date('2017-08-01T12:50:56.093Z'), (result) => {
          const expectedResult = {
            offset: new Date('2017-08-01T12:50:56.093Z'),
            status: 'failed',
            banned: true,
            reason: 'Spam',
            listImage: []
          }
          expect(result).to.deep.equal(expectedResult)
          done()
        })
      })
    })

    describe('without verified phone', () => {
      it('should return status failed and reason', (done) => {
        UserService.getUserImageList('', '0015979f436810eaa65bbca1a65', new Date('2017-08-01T12:50:56.093Z'), (result) => {
          const expectedResult = {
            offset: new Date('2017-08-01T12:50:56.093Z'),
            status: 'failed',
            banned: true,
            reason: 'Spam',
            listImage: []
          }
          expect(result).to.deep.equal(expectedResult)
          done()
        })
      })
    })

    describe('without map address', () => {
      it('should return status failed and reason', (done) => {
        UserService.getUserImageList('', '0015979f436810eaa65bbca1a65', new Date('2017-08-01T12:50:56.093Z'), (result) => {
          const expectedResult = {
            offset: new Date('2017-08-01T12:50:56.093Z'),
            status: 'failed',
            banned: true,
            reason: 'Spam',
            listImage: []
          }
          expect(result).to.deep.equal(expectedResult)
          done()
        })
      })
    })

  })

  describe('updateStore', () => {
    describe('with correct userId and storeId', () => {
      it('should return status success and the new info', (done) => {
        UserService.getNotifications('0015979f436810eaa65bbca1a64', new Date('2017-08-01T12:50:56.093Z'), 1, (result) => {
          const expectedResult = {
            status: 'success',
            numUnreaded: 0,
            offset: (new Date('2017-07-31T15:42:22.971Z')).getTime(),
            notifications: [
              {
                type: 'leadercomment',
                id : '597f4fde93e2e5691ddaf0e6',
                commentid: undefined,
                leadercommentid: '004597f4fde1f1d9e2313b42dbb',
                sellpostid: '012597a24ede65b1a7b08de02db',
                ownerid: '0025979f4c3e65b1a7b08de02c5',
                avatarUrl: 'https://d1z4p30mgj29.cloudfront.net/a6a1acbb56aae018694f97951008d77e4befc90e473e2d11355b775aea3.png',
                name: 'ga rau rau ga',
                content: '1',
                time: (new Date('2017-07-31T15:42:22.971Z')).getTime(),
                numlike: undefined,
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
          expect(result).to.deep.equal(expectedResult)
          done()
        })
      })
    })

    describe('with userId is not owner of storeId', () => {
      it('should return status failed and reason', (done) => {
        UserService.getNotifications('wrongId', new Date('2017-08-01T12:50:56.093Z'), 1, (result) => {
          const expectedResult = {
            status: 'noData',
            offset: new Date('2017-08-01T12:50:56.093Z'),
            notifications: []
          }
          expect(result).to.deep.equal(expectedResult)
          done()
        })
      })
    })

    describe('with new info does not conform business rule', () => {
      it('should return status failed and reason', (done) => {
        UserService.getNotifications('wrongId', new Date('2017-08-01T12:50:56.093Z'), 1, (result) => {
          const expectedResult = {
            status: 'noData',
            offset: new Date('2017-08-01T12:50:56.093Z'),
            notifications: []
          }
          expect(result).to.deep.equal(expectedResult)
          done()
        })
      })
    })

  })

  describe('updateNotification', () => {
    describe('with correct userId', () => {
      it('should return status success', (done) => {
        UserService.updateNotification('0015979f436810eaa65bbca1a64', '597f4fde93e2e5691ddaf0e6', (result) => {
          const expectedResult = 'success'
          expect(result).to.deep.equal(expectedResult)
          done()
        })
      })
    })

    describe('with wrong userId', () => {
      it('should return status noData', (done) => {
        UserService.updateNotification('wrongId', '597f4fde93e2e5691ddaf0e6', (result) => {
          const expectedResult = 'noData'
          expect(result).to.deep.equal(expectedResult)
          done()
        })
      })
    })
  })

  describe('getInterests', () => {
    describe('with correct userId', () => {
      it('should return status success and interests info', (done) => {
        UserService.getInterests('0015979f436810eaa65bbca1a64', new Date('2017-08-01T12:50:56.093Z'), (result) => {
          const expectedResult = {
            status: 'success',
            offset: -2,
            numberOfInterest: 1,
            interests: [
              {
                'id': '0155979f436810eaa65bbca1111',
                'categoryId': '0055979f436810eaa65bbca1111',
                'categoryName': 'Tả giấy trẻ em',
                'longitude': 45,
                'latitude': 45,
                'time': (new Date('2017-07-31T06:26:55.269Z')).getTime()
              }
            ]
          }
          expect(result).to.deep.equal(expectedResult)
          done()
        })
      })
    })

    describe('with wrong userId', () => {
      it('should return status noData', (done) => {
        UserService.getInterests('wrongId', new Date('2017-08-01T12:50:56.093Z'), (result) => {
          const expectedResult = {
            status: 'noData'
          }
          expect(result).to.deep.equal(expectedResult)
          done()
        })
      })
    })
  })

  describe('verifyToken', () => {
    it('should return decoded that equals payload', () => {
      const payload = {
        _id: '0015979f436810eaa65bbca1a64'
      }
      const token = jwt.sign({_id: '0015979f436810eaa65bbca1a64'}, 'secret', { expiresIn: 60 * 60 * 60 })
      const decoded = StoreService.verifyToken(token)
      expect(decoded).to.include(payload)
    })
  })
})
