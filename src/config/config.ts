import dotenv from 'dotenv';
dotenv.config();

export const server = {
    PORT_APP: process.env.PORT_APP,
    MAINTENANCE_MODE: false
};
