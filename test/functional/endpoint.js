import {
  publicEndpoint,
  privateEndpoint
} from './../../src/auth/endpoint'
import yaml_config from 'node-yaml-config'

import event from './../../mocks/endpoint-event.json'

const config = yaml_config.load(`${__dirname}/../../env-test.yml`, 'environment')
Object.assign(process.env, config)

const chai = require('chai')
const should = chai.should()

describe('publicEndpoint API', () => {

  it('should return ok', (done) => {

    const context = {}
    const callback = (ctx, data) => {
      data.statusCode.should.be.equal(200)
      should.exist(data.body)
      done()
    }

    publicEndpoint(event, context, callback)

  })

})

describe('privateEndpoint API', () => {

  it('should return ok', (done) => {

    const context = {}
    const callback = (ctx, data) => {
      data.statusCode.should.be.equal(200)
      should.exist(data.body)
      done()
    }

    privateEndpoint(event, context, callback)

  })

})