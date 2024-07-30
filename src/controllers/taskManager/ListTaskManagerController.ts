import { Request, Response } from 'express';
import { ListTasksService } from '../../services/taskManager/ListTasksManagerService';

class ListTasksController {
    async handle(req: Request, res: Response) {
        const user_id = req.user_id; // Obtendo user_id do middleware

        console.log('User ID:', user_id);

        const listTasksService = new ListTasksService();

        try {
            const tasks = await listTasksService.execute(user_id);

            return res.json(tasks);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }
}

export { ListTasksController };