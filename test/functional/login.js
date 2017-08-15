import {
  handler as login
} from './../../src/auth/login'
import yaml_config from 'node-yaml-config'

import event from './../../mocks/login-event.json'
import eventWrongPassword from './../../mocks/login-event-wrong-password.json'
import eventWrongUsername from './../../mocks/login-event-wrong-username.json'

const config = yaml_config.load(`${__dirname}/../../env-test.yml`, 'environment')
Object.assign(process.env, config)

const chai = require('chai')
const should = chai.should()

describe('Login API', () => {

  it('should return the auth token', (done) => {

    const context = {}
    const callback = (ctx, data) => {
      data.statusCode.should.be.equal(200)
      should.exist(data.body)
      const body = JSON.parse(data.body)
      should.exist(body.token)
      done()
    }

    login(event, context, callback)

  })

  it('should return an error if username is invalid', (done) => {

    const context = {}
    const callback = (ctx, data) => {
      data.statusCode.should.be.equal(500)
      done()
    }

    login(eventWrongUsername, context, callback)

  })

  it('should return an error if password is invalid', (done) => {

    const context = {}
    const callback = (ctx, data) => {
      data.statusCode.should.be.equal(500)
      should.exist(data.body)
      done()
    }

    login(eventWrongPassword, context, callback)

  })

  it('should return an error if user is invalid', (done) => {

    const context = {}
    const callback = (ctx, data) => {
      data.statusCode.should.be.equal(500)
      should.exist(data.body)
      done()
    }

    login({
      'body': '{"username":""}'
    }, context, callback)

  })

})