import prismaClient from '../../prisma';

interface TaskRequest {
    title: string;
    description: string;
    user_id: string;
}

class CreateTaskService {
    async execute({ title, description, user_id }: TaskRequest) {
        if (!title) {
            throw new Error("Title is required");
        }

        const task = await prismaClient.task.create({
            data: {
                title,
                description,
                user_id
            }
        });

        return task;
    }
}

export { CreateTaskService };