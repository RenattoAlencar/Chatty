import { Router } from 'express'

import MessageController from './controllers/MessagesController'
import SettingsController from './controllers/SettingsController'
import UserController from './controllers/UsersController'

const routes = Router()

const settingsController = new SettingsController()
const usersController = new UserController()
const messageController = new MessageController()

routes.post('/settings', settingsController.create)
routes.post('/users', usersController.create)
routes.post('/messages', messageController.create)
routes.get('/messages/:id', messageController.showByUser)

export default routes
