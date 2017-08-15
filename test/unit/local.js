const chai = require('chai')
const should = chai.should()

import {
  encodeToken,
  decodeToken
} from './../../src/auth/local'

describe('Locale', () => {
  describe('#encodeToken', () => {

    it('should return a token', (done) => {
      const results = encodeToken({
        id: 1
      })
      should.exist(results)
      results.should.be.a('string')
      done()
    })

  })

  describe('decodeToken()', () => {
    it('should return a payload', (done) => {
      const token = encodeToken({
        id: 1
      })
      should.exist(token)
      token.should.be.a('string')
      decodeToken(token, (err, res) => {
        should.not.exist(err)
        res.sub.should.eql(1)
        done()
      })
    })
  })

})
