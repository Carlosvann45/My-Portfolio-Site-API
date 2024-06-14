import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

/**
 * Transporter config for sending emails
 */
const transporter = nodemailer.createTransport({
    host: process.env.SERVICE_HOST,
    port: process.env.SERVICE_PORT,
    secure: true,
    auth: {
      user: process.env.SERVICE_EMAIL,
      pass: process.env.SERVICE_PASSWORD,
    },
  } as any);

export default transporter;