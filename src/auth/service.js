import * as authHelpers from './../auth/helper'
import * as localAuth from './../auth/local'

export function login(user, callback) {
  return authHelpers.getUser(user.username)
    .then((userFound) => {
      if (!userFound) {
        throw new Error('Invalid credentials')
      }

      const passwordMach = authHelpers.comparePass(user.password, userFound.password, userFound.salt)
      if (!passwordMach) {
        throw new Error('Invalid credentials')
      }
      return userFound
    })
    .then((userFound) => {
      return localAuth.encodeToken(userFound)
    })
    .then((token) => {
      return callback(null, token)
    })
    .catch((err) => {
      callback(err, null)
    })
}

export function ensureAuthenticated(token, callback) {

  localAuth.decodeToken(token, (err, payload) => {
    if (err) {
      callback('Unauthorized', null)
    } else {
      callback(null, payload)
    }
  })

}