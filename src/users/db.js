const userListProd = [{
  id: '543234',
  name: 'Francesco F.',
  username: 'francesco',
  scope: '',
  password: '8ubEBbmzvsBk2N+z3bT8v6HB0Z/Ij4UInmh3LhEDG1pnXplw4FH/GGS5pvPES89X1wEDkIga6tGWOeRfA/OmW8GOsUqWGk1PEvdGivQZyfnKQnvsaIDYvX5SFziBoRBz75vwIiW6xsA3Ojiv9GQ4vjwhWqZG2v0Y8KxmObf1sGbwartgv1koubg3f6jKIi+y9tEhBs2H6mCP5KG3L/SYpIAoT1LsLHxABNW+U67na0wjJHAjJhOSBx/UFe9HxOkV3E7PsHZSq6rFMIUlVrihrOsTUcDWnrGf6cBsSxoXWQf7rCkAVXIWJ4tulNnD9MTze9+eB3wpCpVTY3Mw4KxLTPaMfvZtucaGSLAiVy7+SVbI79vnknN1KWaAoLxKDrO48vNPkhxziNonCSJh0oaxg8TeBy/3OXTWsNS7JvpNqIHr7f4Na4jmAD4zXvh0IbKakfZOdeOWUaB/CIil+LHIrd9pwyVH2VllriHMr1hrzjGGGXCIGKNgexRVCIc7ag2+2jsTjSGCLEbOQ92nOAzqyA7xq6q7WhOuAObY1Zv+nKVdMFTjAvkzBmGVncZHNcRPd2jOg+mD+ZbMQkaD/LQZX38M3XAoXoEUyeE8VP2Ia4v0tmfbc+7iYtYeiyYHwUpoxdZc22i+bzz26m92oliriwDY+7owqtJ4ZMDeqRMmfgk=',
  salt: 'dCiTT969z0Wz5lNJbRsxn3a4j/59JFKuw7x4bAD0sYGcgtMb2j8a9Ppo80y3vK/gusi8GqkWmEuYCHB7MKROju7lTU4KrUy5tqXBzbaLymzBWR6ohYCoEz9fWwFnECw7A0yh4EVl2Z7GEUNHvXGPn6jwRqasvaSHJtCR7Mo6jeo='
}]

const userListDev = [{
  id: '543234',
  name: 'Francesco F.',
  username: 'francesco',
  scope: '',  
  password: '8ubEBbmzvsBk2N+z3bT8v6HB0Z/Ij4UInmh3LhEDG1pnXplw4FH/GGS5pvPES89X1wEDkIga6tGWOeRfA/OmW8GOsUqWGk1PEvdGivQZyfnKQnvsaIDYvX5SFziBoRBz75vwIiW6xsA3Ojiv9GQ4vjwhWqZG2v0Y8KxmObf1sGbwartgv1koubg3f6jKIi+y9tEhBs2H6mCP5KG3L/SYpIAoT1LsLHxABNW+U67na0wjJHAjJhOSBx/UFe9HxOkV3E7PsHZSq6rFMIUlVrihrOsTUcDWnrGf6cBsSxoXWQf7rCkAVXIWJ4tulNnD9MTze9+eB3wpCpVTY3Mw4KxLTPaMfvZtucaGSLAiVy7+SVbI79vnknN1KWaAoLxKDrO48vNPkhxziNonCSJh0oaxg8TeBy/3OXTWsNS7JvpNqIHr7f4Na4jmAD4zXvh0IbKakfZOdeOWUaB/CIil+LHIrd9pwyVH2VllriHMr1hrzjGGGXCIGKNgexRVCIc7ag2+2jsTjSGCLEbOQ92nOAzqyA7xq6q7WhOuAObY1Zv+nKVdMFTjAvkzBmGVncZHNcRPd2jOg+mD+ZbMQkaD/LQZX38M3XAoXoEUyeE8VP2Ia4v0tmfbc+7iYtYeiyYHwUpoxdZc22i+bzz26m92oliriwDY+7owqtJ4ZMDeqRMmfgk=',
  salt: 'dCiTT969z0Wz5lNJbRsxn3a4j/59JFKuw7x4bAD0sYGcgtMb2j8a9Ppo80y3vK/gusi8GqkWmEuYCHB7MKROju7lTU4KrUy5tqXBzbaLymzBWR6ohYCoEz9fWwFnECw7A0yh4EVl2Z7GEUNHvXGPn6jwRqasvaSHJtCR7Mo6jeo='
}]
const userListTest = [{
  id: '543234',  
  name: 'Francesco F.',
  username: 'francesco',
  scope: '',
  password: '8ubEBbmzvsBk2N+z3bT8v6HB0Z/Ij4UInmh3LhEDG1pnXplw4FH/GGS5pvPES89X1wEDkIga6tGWOeRfA/OmW8GOsUqWGk1PEvdGivQZyfnKQnvsaIDYvX5SFziBoRBz75vwIiW6xsA3Ojiv9GQ4vjwhWqZG2v0Y8KxmObf1sGbwartgv1koubg3f6jKIi+y9tEhBs2H6mCP5KG3L/SYpIAoT1LsLHxABNW+U67na0wjJHAjJhOSBx/UFe9HxOkV3E7PsHZSq6rFMIUlVrihrOsTUcDWnrGf6cBsSxoXWQf7rCkAVXIWJ4tulNnD9MTze9+eB3wpCpVTY3Mw4KxLTPaMfvZtucaGSLAiVy7+SVbI79vnknN1KWaAoLxKDrO48vNPkhxziNonCSJh0oaxg8TeBy/3OXTWsNS7JvpNqIHr7f4Na4jmAD4zXvh0IbKakfZOdeOWUaB/CIil+LHIrd9pwyVH2VllriHMr1hrzjGGGXCIGKNgexRVCIc7ag2+2jsTjSGCLEbOQ92nOAzqyA7xq6q7WhOuAObY1Zv+nKVdMFTjAvkzBmGVncZHNcRPd2jOg+mD+ZbMQkaD/LQZX38M3XAoXoEUyeE8VP2Ia4v0tmfbc+7iYtYeiyYHwUpoxdZc22i+bzz26m92oliriwDY+7owqtJ4ZMDeqRMmfgk=',
  salt: 'dCiTT969z0Wz5lNJbRsxn3a4j/59JFKuw7x4bAD0sYGcgtMb2j8a9Ppo80y3vK/gusi8GqkWmEuYCHB7MKROju7lTU4KrUy5tqXBzbaLymzBWR6ohYCoEz9fWwFnECw7A0yh4EVl2Z7GEUNHvXGPn6jwRqasvaSHJtCR7Mo6jeo='
}]

const userList = {
  test: userListTest,
  dev: userListDev,
  prod: userListProd,
  production: userListProd  
}

export function users() {
  return userList[process.env.NODE_ENV] || []
}