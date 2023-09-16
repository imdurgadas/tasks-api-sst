import { APIGatewayProxyEventV2, APIGatewayProxyResultV2 } from "aws-lambda";
import tasks from '@tasks-api/core/tasks'

export const handler = async (event: APIGatewayProxyEventV2): Promise<APIGatewayProxyResultV2> => {
    console.log('In Get Task By Id function');
    const id = event.pathParameters?.id;

    if (id) {
        const taskId = parseInt(id);
        const task = tasks[taskId]
        if (task) {
            return {
                statusCode: 200,
                body: JSON.stringify(tasks[taskId])
            }
        } else {
            return {
                statusCode: 404,
                body: `task with id: ${taskId} not found`
            }
        }

    } else {
        return {
            statusCode: 400,
            body: "Invalid request"
        }
    }
}