import { APIGatewayProxyEventV2, APIGatewayProxyResultV2 } from "aws-lambda";
import tasks from '@tasks-api/core/tasks'

export const handler = async (event: APIGatewayProxyEventV2): Promise<APIGatewayProxyResultV2> => {
    console.log('In Get All Tasks function');
    console.log(event)
    return {
        statusCode: 200,
        body: JSON.stringify(tasks)
    }
}