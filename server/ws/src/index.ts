import express from 'express'
import { Kafka, logLevel } from 'kafkajs'
import { config } from 'dotenv'

config()

const app = express()

export const kafka = new Kafka({
  clientId: 'my-ws-server',
  brokers: [process.env.KAFKA_URL || 'localhost:9092'],
  logLevel: logLevel.INFO,
  retry: {
    initialRetryTime: 1000, // wait 1s before first retry
    retries: 5               // retry 5 times on transient errors
  }
})

app.listen(5000, () => console.log('Listening on port 5000'))
