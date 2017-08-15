import moment from 'moment'
import jwt from 'jwt-simple'

export function encodeToken(user) {
  const payload = {
    exp: moment().add(14, 'days').unix(),
    iat: moment().unix(),
    sub: user.id,
    user: {
      username: user.username,
      name: user.name,
	    scope: user.scope,
    }
  }
  return jwt.encode(payload, process.env.TOKEN_SECRET)
}

export function decodeToken(token, callback) {
  const payload = jwt.decode(token, process.env.TOKEN_SECRET)
  const now = moment().unix()

  // check if the token has expired
  if (now > payload.exp) callback('Token has expired.')
  else callback(null, payload)
}
