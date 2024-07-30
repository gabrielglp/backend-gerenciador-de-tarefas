import { Request, Response } from 'express';
import { CreateTaskService } from '../../services/taskManager/CreateTaskManagerService';

class CreateTaskController {
    async handle(req: Request, res: Response) {
        const { title, description } = req.body;
        const user_id = req.user_id;

        const createTaskService = new CreateTaskService();

        try {
            const task = await createTaskService.execute({
                title,
                description,
                user_id
            });

            return res.json(task);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }
}

export { CreateTaskController };