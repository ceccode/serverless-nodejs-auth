const chai = require('chai')
chai.should()

import {
  success,
  failure,
  notFound,
  badRequest
} from './../../src/libs/response'

describe('Response', () => {
  describe('#success', () => {

    it('returns status 200', () => {
      const successRes = success()
      successRes.statusCode.should.equal(200)
    })

  })

  describe('#failure', () => {

    it('returns status 500', () => {
      const successRes = failure()
      successRes.statusCode.should.equal(500)
    })

  })

  describe('#badRequest', () => {

    it('returns status 400', () => {
      const successRes = badRequest()
      successRes.statusCode.should.equal(400)
    })

  })

  describe('#notFound', () => {

    it('returns status 500', () => {
      const successRes = notFound()
      successRes.statusCode.should.equal(404)
    })

  })

})