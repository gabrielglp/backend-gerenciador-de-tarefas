import { Request, Response } from 'express';
import { DeleteTaskService } from '../../services/taskManager/DeleteTaskManagerService';

class DeleteTaskController {
    async handle(req: Request, res: Response) {
        const { id } = req.params; // Obtendo o ID da tarefa dos parâmetros da rota
        const user_id = req.user_id; // Obtendo user_id do middleware

        const deleteTaskService = new DeleteTaskService();

        try {
            const result = await deleteTaskService.execute(id, user_id);

            return res.json(result);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }
}

export { DeleteTaskController };