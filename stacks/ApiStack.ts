import { Api, StackContext } from "sst/constructs";

export function ApiStack({ stack }: StackContext) {

  stack.setDefaultFunctionProps({
    memorySize: "128 MB",
    architecture: "arm_64",
    runtime: "nodejs18.x",
    logRetention: "one_day"
  })

  const api = new Api(stack, "Api", {
    routes: {
      "GET /tasks": "packages/functions/src/getAllTasks.handler",
      "GET /tasks/{id}": {
        type: "function",
        function: {
          functionName: "getTaskById",
          handler: "packages/functions/src/getTask.handler"
        }
      }
    }
  })

  stack.addOutputs({
    ApiEndpoint: api.url
  })
}
