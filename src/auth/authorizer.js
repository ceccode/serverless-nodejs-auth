import logger from './../libs/logger'
import {
  ensureAuthenticated
} from './service'

const generatePolicy = (decoded, effect, resource) => {
  const authResponse = {}
  authResponse.principalId = decoded.sub
  authResponse.context = {
    payload: decoded
  }

  if (effect && resource) {
    const policyDocument = {}
    policyDocument.Version = '2012-10-17'
    policyDocument.Statement = []
    const statementOne = {}
    statementOne.Action = 'execute-api:Invoke'
    statementOne.Effect = effect
    statementOne.Resource = resource
    policyDocument.Statement[0] = statementOne
    authResponse.policyDocument = policyDocument
  }
  return authResponse
}

export function handler(event, context, callback) {

  if (!event.authorizationToken) {
    return callback('Unauthorized')
  }

  const token = event.authorizationToken.substring(7)
  ensureAuthenticated(token, (err, decoded) => {
    if (err) {
      logger.error(err)
      return callback('Unauthorized')
    }
    callback(null, generatePolicy(decoded, 'Allow', event.methodArn))
  })

}