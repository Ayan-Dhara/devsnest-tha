require('dotenv').config()
const express = require('express')
const logger = require("./logger")
const expressWinston = require('express-winston');
const winston = require('winston')
// const pino = require('pino')
const app = express()
// app.use(pino())

// console.log(logger.prodTransports)

app.use(expressWinston.logger({
  transports: [
    new winston.transports.Console({
      json: true,
      colorize: true
    })
  ]
}));

app.get('/', function (req, res) {
  // req.log.info('something else')
  res.send('hello world')
})
app.listen(3002)

logger.error("messege")
logger.warn("messege")
logger.info("messege")
logger.debug("messege")
