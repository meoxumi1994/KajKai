import 'babel-polyfill'
import { expect } from 'chai'
import request from 'supertest'
import app from '../../../../query/view-store/app'


describe('Test API', () => {
  it('get /store', (done) => {
    request(app)
      .get('/store/f3452t2t45')
      .expect('Content-Type', /json/)
      .expect(200, done)
  })

  // it('post /test', (done) => {
  //   request(app)
  //     .post('/test')
  //     .send({
  //       username: 'charity',
  //       password: '123456'
  //     })
  //     .expect('Content-Type', /json/)
  //     .expect(200, done)
  // })
  //
  // it('put /test', (done) => {
  //   request(app)
  //     .put('/test')
  //     .send({
  //       username: 'charity',
  //       password: '654321'
  //     })
  //     .expect('Content-Type', /json/)
  //     .expect(200, done)
  //     .expect((res) => {
  //       expect(res.body).to.include({ status: 'success'})
  //       // expect(res.body).to.have.all.keys(['status'])
  //     }, done)
  // })
})
