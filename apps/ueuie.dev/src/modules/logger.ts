import { createLogger, format as f, transports as t } from 'winston';

const logger = createLogger({
    level: 'info', // Set the default log level
    format: f.combine(
        f.timestamp(),
        f.json(), // or any other format you prefer
    ),
    transports: [
        new t.Console(), // Log to the console
        new t.File({ filename: 'error.log', level: 'error' }), // Log errors to a file
        // Add more transports as needed
    ],
});

export { logger };
