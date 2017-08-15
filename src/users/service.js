import {users} from './db'

export function getUser (username) {
  return users().find((item) => item.username === username)
}
