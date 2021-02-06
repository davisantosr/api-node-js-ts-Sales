import { Router } from 'express'
import { celebrate, Joi, Segments } from 'celebrate'
import SessionsController from '../controllers/SessionsController';
import ForgotPasswordController from '../controllers/ForgotPasswordController';

const passwordRouter = Router()
const forgotPasswordController = new ForgotPasswordController()

passwordRouter.post(
  '/forgot',
  celebrate({
    [Segments.BODY]: {
      password: Joi.string().required(),
    },
  }),
  forgotPasswordController.create
)

export default passwordRouter;
