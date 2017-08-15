import pino from 'pino'

const pretty = pino.pretty()
pretty.pipe(process.stdout)

const logger = pino({
  name: process.env.APP_NAME,
  safe: true,
  // enabled: !!process.env.NOLOG
}, pretty)

export default logger

