import * as dotenv from 'dotenv';

dotenv.config();

export const APP_PORT = Number(process.env.APP_PORT);
export const HOST_PORT = String(process.env.HOST_PORT);