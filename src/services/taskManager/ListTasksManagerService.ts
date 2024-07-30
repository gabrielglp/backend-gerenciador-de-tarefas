import prismaClient from '../../prisma';

class ListTasksService {
    async execute(user_id: string) {
        console.log('User ID no serviço:', user_id);
        const tasks = await prismaClient.task.findMany({
            where: { user_id },
            select: {
                id: true,
                title: true,
                description: true
            }
        });

        return tasks;
    }
}

export { ListTasksService };