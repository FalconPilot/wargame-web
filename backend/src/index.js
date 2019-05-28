// Validate and override env
const validatedEnv = require('./env')(process.env)
process.env = validatedEnv

const app = require('express')()

const PORT = process.env.PORT

app.listen(PORT, () => {
  console.log(`> App is listening on port ${PORT}`)
})
