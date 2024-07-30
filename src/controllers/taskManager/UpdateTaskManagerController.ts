import { Request, Response } from 'express';
import { UpdateTaskService } from '../../services/taskManager/UpdateTaskManagerService';

class UpdateTaskController {
    async handle(req: Request, res: Response) {
        const { id } = req.params;
        const { title, description } = req.body;
        const user_id = (req as any).user_id;

        const updateTaskService = new UpdateTaskService();

        try {
            const task = await updateTaskService.execute({
                task_id: id,
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

export { UpdateTaskController };