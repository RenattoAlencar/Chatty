import { Router } from 'express'

import SettingsController from './controllers/SettingsController'
import UserController from './controllers/UsersController'

const routes = Router()

const settingsController = new SettingsController()
const usersController = new UserController()

routes.post('/settings', settingsController.create)
routes.post('/users', usersController.create)

export default routes
