import 'babel-polyfill'
import { expect } from 'chai'
import request from 'supertest'
import app from '../../app'


describe('Test API', () => {
  it('get /test', (done) => {
    request(app)
      .get('/test')
      .expect('Content-Type', /json/)
      .expect(200, done)
  })

  it('post /test', (done) => {
    request(app)
      .post('/test')
      .send({
        username: 'charity',
        password: '123456'
      })
      .expect('Content-Type', /json/)
      .expect(200, done)
  })

  it('put /test', (done) => {
    request(app)
      .put('/test')
      .send({
        username: 'charity',
        password: '123456'
      })
      .expect('Content-Type', /json/)
      .expect(200, done)
  })
})
