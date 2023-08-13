import { ApiHandler } from "sst/node/api";

export const handler = ApiHandler(async (evt) => {
  return {
    statusCode: 200,
    body: JSON.stringify([
      {
        title: "Free Plan",
        price: "Free",
        benefits: [
          "Unlimited Bandwitch",
          "Encrypted Connection",
          "No Traffic Logs",
          "Works on All Devices",
        ],
      },
      {
        title: "Standard Plan",
        price: 9,
        currency: "U$S",
        type: "monthly",
        benefits: [
          "Unlimited Bandwitch",
          "Encrypted Connection",
          "Yes Traffic Logs",
          "Works on All Devices",
          "Connect Anyware",
        ],
      },
      {
        title: "Premium Plan",
        price: 12,
        currency: "U$S",
        type: "monthly",
        benefits: [
          "Unlimited Bandwitch",
          "Encrypted Connection",
          "Yes Traffic Logs",
          "Works on All Devices",
          "Connect Anyware",
          "Get New Features",
        ],
      },
    ]),
  };
});
