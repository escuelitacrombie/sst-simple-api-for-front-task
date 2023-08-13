import { SSTConfig } from "sst";
import { MainStack } from "./stacks/MainStack";

export default {
  config(_input: unknown) {
    return {
      name: "escuelita-api",
      region: "us-east-1",
    };
  },
  stacks(app: { stack: (value: unknown) => void }) {
    app.stack(MainStack);
  },
} satisfies SSTConfig;
