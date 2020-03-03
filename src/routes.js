import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';
// import User from './app/models/User';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
import ProviderController from './app/controllers/ProviderController';
import AppointmentController from './app/controllers/AppointmentController';
import ScheduleController from './app/controllers/ScheduleController';
import NotificationController from './app/controllers/NotificationController';

import authMidleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

/* routes.get('/', async (req, res) => {
	const user = await User.create({
		name: 'Alex Mac',
		email: 'alexmac@gmail.com',
		password_hash: '123456789',
	});

	return res.send(user);
}); */

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMidleware);

routes.put('/users', UserController.update);

routes.get('/providers', ProviderController.index);

routes.get('/appointments', AppointmentController.index);
routes.post('/appointments', AppointmentController.store);

routes.get('/schedules', ScheduleController.index);

routes.get('/notifications', NotificationController.index);

routes.post('/files', upload.single('file'), FileController.store);

export default routes;
