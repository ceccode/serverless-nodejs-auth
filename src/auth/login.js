import {
  success,
  failure
} from './../libs/response'
import logger from './../libs/logger'
import {
  login
} from './service'

export function handler(event, context, callback) {

  const user = event.body ? JSON.parse(event.body) : {}

  login(user, (err, token) => {
    if (err) {
      logger.error('Error login user.', err.message)
      return callback(null, failure(err.message))
    }
    callback(null, success({
      token: token
    }))

  })

}