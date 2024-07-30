import { Router } from 'express';

import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController';
import { DetailUserController } from './controllers/user/DetailUserController';

import { CreateTaskController } from './controllers/taskManager/CreateTaskManagerController';
import { ListTasksController } from './controllers/taskManager/ListTaskManagerController';
import { UpdateTaskController } from './controllers/taskManager/UpdateTaskManagerController';
import { DeleteTaskController } from './controllers/taskManager/DeleteTaskManagerController';

import { isAuthenticated } from './middlewares/isAuthenticated'; 

const router = Router();


// USER
router.post('/users', new CreateUserController().handle)

router.post('/session', new AuthUserController().handle)

router.get('/me', isAuthenticated, new DetailUserController().handle)

// TASKS
router.post('/tasks', isAuthenticated, new CreateTaskController().handle);
router.get('/tasks', isAuthenticated, new ListTasksController().handle);
router.put('/tasks/:id', isAuthenticated, new UpdateTaskController().handle);
router.delete('/tasks/:id', isAuthenticated, new DeleteTaskController().handle);

export { router };