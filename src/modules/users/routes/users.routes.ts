import { Router } from 'express'
import { celebrate, Joi, Segments } from 'celebrate'
import multer from 'multer'
import uploadConfig from '@config/upload'
import UsersController from '../controllers/UsersController'
import isAuthenticated from '../../../shared/http/middewares/isAuthenticated'
import UserAvatarController from '../controllers/UserAvatarController'

const usersRouter = Router()
const usersController = new UsersController()
const usersAvatarController = new UserAvatarController()

const updload = multer(uploadConfig)

usersRouter.get('/', isAuthenticated, usersController.index);

usersRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    },
  }),
  usersController.create
)

usersRouter.patch(
  '/avatar',
  isAuthenticated,
  updload.single('avatar'),
  usersAvatarController.update
)

export default usersRouter;
