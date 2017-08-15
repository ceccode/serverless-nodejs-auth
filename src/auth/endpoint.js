import {
  success
} from './../libs/response'

// Public API
export function publicEndpoint(event, context, callback) {
  callback(null, success({
    message: 'Welcome to our Public API!',
    input: event
  }))
}

// Private API
export function privateEndpoint(event, context, callback) {
  callback(null, success({
    message: 'Only logged in users can see this',
    input: event,
    context: context
  }))
}