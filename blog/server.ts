import express from 'express';
import payload from 'payload';

require('dotenv').config();
const app = express();

const start = async () => {
  const payloadSecret = process.env.PAYLOAD_SECRET;

  if (!payloadSecret) {
    console.error("PAYLOAD_SECRET environment variable is not set.");
    return;
  }

  await payload.init({
    secret: payloadSecret,
    express: app,
  });

  app.listen(3000, () => {
    console.log("Express is now listening for incoming connections on port 3000.");
  });
};

start();