import prismaClient from '../../prisma';

class DeleteTaskService {
    async execute(task_id: string, user_id: string) {
        const task = await prismaClient.task.findFirst({
            where: {
                id: task_id,
                user_id: user_id,
            },
        });

        if (!task) {
            throw new Error("Task not found or you're not authorized to delete this task");
        }

        await prismaClient.task.delete({
            where: {
                id: task_id,
            },
        });

        return { message: "Task deleted successfully" };
    }
}

export { DeleteTaskService };