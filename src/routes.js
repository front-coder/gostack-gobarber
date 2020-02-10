import { Router } from 'express';
// import User from './app/models/User';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

import authMidleware from './app/middlewares/auth';

const routes = new Router();

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

export default routes;
