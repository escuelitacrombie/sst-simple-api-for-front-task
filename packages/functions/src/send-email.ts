import { ApiHandler } from "sst/node/api";

export const handler = ApiHandler(async (evt) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      dataRecived: evt.body ? JSON.parse(evt.body) : undefined,
      message:
        "this endpoint has no functionality, but let's pretend that the message was sent.",
    }),
  };
});
