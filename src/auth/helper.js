import * as userProvider from './../users/service'
import crypto from 'crypto'

export function getUser(username) {
  return new Promise((resolve) => {
    resolve(userProvider.getUser(username))
  })
}

export function comparePass(userPassword, databasePassword, salt) {
  return databasePassword === hashPassword(userPassword, salt)
}

export function hashPassword(password, salt) {
  const length = parseInt(process.env.CRYPTO_BYTE_SIZE, 10) || 256
  const iterations = 4096

  return crypto.pbkdf2Sync(password, salt, iterations, length, 'sha512').toString('base64')
}
