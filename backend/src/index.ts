import 'dotenv/config';
import express, { NextFunction, Request, Response } from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { config } from './config/app.config';
import connectDatabase from './database/database';
import { errorHandler } from './middlewares/errorHandler';
import { HTTPSTATUS } from './config/http.config';
import { asyncHandler } from './middlewares/asyncHandler';
import authRoutes from './modules/auth/auth.routes';
import passport from './middlewares/passport';
import sessionRoutes from './modules/session/session.routes';
import { authenticateJWT } from './common/strategies/jwt.strategy';

const app = express();
const BASE_PATH = config.BASE_PATH;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ credentials: true, origin: config.APP_ORIGIN }));

app.use(cookieParser());
app.use(passport.initialize());

app.get(
  '/',
  asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    res.status(HTTPSTATUS.OK).json({ message: 'Hello World!' });
  })
);

app.use(`${BASE_PATH}/auth`, authRoutes);
app.use(`${BASE_PATH}/session`, authenticateJWT, sessionRoutes);

app.use(errorHandler);

app.listen(config.PORT, async () => {
  console.log(
    `Server is running on http://localhost:${config.PORT} in ${config.NODE_ENV} mode`
  );
  await connectDatabase();
});
