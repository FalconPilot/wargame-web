const envalid = require('envalid')

const validators = {
  NODE_ENV: envalid.str({
    choices: ['development', 'staging', 'test', 'production']
  }),
  PORT: envalid.num(),
  DATABASE_URL: envalid.url()
}

const validateEnv = processDotEnv => envalid.cleanEnv(
  processDotEnv,
  validators,
  { dotEnvPath: null }
)

module.exports = validateEnv
