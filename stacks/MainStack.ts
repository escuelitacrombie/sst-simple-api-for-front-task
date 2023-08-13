import { Api, StackContext } from "sst/constructs";

export function MainStack({ stack }: StackContext) {
  const api = new Api(stack, "Api", {
    cors: {
      allowMethods: ["ANY"],
      allowHeaders: ["*"],
      allowOrigins: ["*"],
    },
    routes: {
      "GET /api/subscription": "packages/functions/src/subscription.handler",
      "GET /api/testimonial": "packages/functions/src/testimonial.handler",
      "POST /api/send-email": "packages/functions/src/send-email.handler",
    },
  });

  stack.addOutputs({
    ApiEndpoint: api.url,
  });
}
