import prismaClient from '../../prisma';

interface TaskUpdateRequest {
    task_id: string;
    title?: string;
    description?: string;
    user_id: string;
}

class UpdateTaskService {
    async execute({ task_id, title, description, user_id }: TaskUpdateRequest) {
        const task = await prismaClient.task.findFirst({
            where: {
                id: task_id,
                user_id: user_id,
            },
        });

        if (!task) {
            throw new Error("Task not found or you're not authorized to update this task");
        }

        const updatedTask = await prismaClient.task.update({
            where: {
                id: task_id,
            },
            data: {
                title,
                description,
            },
        });

        return updatedTask;
    }
}

export { UpdateTaskService };