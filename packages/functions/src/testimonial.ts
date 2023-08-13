import { ApiHandler } from "sst/node/api";

export const handler = ApiHandler(async (evt) => {
  return {
    statusCode: 200,
    body: JSON.stringify([
      {
        avatar:
          "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw4NjYyMzA3MXx8ZW58MHx8fHx8&w=1000&q=80",
        fullName: "Viezh Robert",
        testimonial:
          "“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.",
      },
      {
        avatar:
          "https://media.istockphoto.com/id/1145045307/photo/portrait-of-a-happy-mature-black-businessman.jpg?s=612x612&w=0&k=20&c=tMwV7b94hTyY7Cg13d_oRjeIOoZXTTOoSPZhbW2cphQ=",
        fullName: "Jhon Doe",
        testimonial:
          "Exceeding my expectations, this VPN has been flawless. No issues so far, and LaslesVPN continues to impress",
      },
      {
        avatar:
          "https://swaysight.com/wp-content/uploads/2022/02/testimonial.jpeg",
        fullName: "Viezh Robert",
        testimonial:
          "This is very unusual for my business that currently requires a virtual private network that has high security",
      },
      {
        avatar: "https://www.captel.com/wp-content/uploads/2022/06/senior2.jpg",
        fullName: "Gabriela Solaz",
        testimonial:
          "SafeGuardVPN has simplified my online security. It's the best VPN I've used, hands down",
      },
      {
        avatar:
          "https://images.squarespace-cdn.com/content/v1/5d434f761649ef0001de15ba/1564846505219-O2WWXHZYCQZYRD9GAFIF/Juli_2328.jpg",
        fullName: "Emily Jackson",
        testimonial:
          "I like it because I like to travel far and still can connect with high speed",
      },
    ]),
  };
});
