import pinoHttp from 'pino-http';

export const logger = pinoHttp({
  customErrorMessage: (req, res, err) => {
    return err.message;
  },
});