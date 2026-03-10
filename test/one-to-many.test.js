import { prismaClient } from "../prisma-client";

describe("One to many", () => {
  it("should be able to one to many", async () => {
    // const comment = await prismaClient.comment.create({
    //   data: {
    //     customer_id: "eko",
    //     title: "Insert comment",
    //     description: "Description comment",
    //   },
    //   include: {
    //     customer: true,
    //   },
    // });
    // console.info(comment);

    const customer = await prismaClient.customer.create({
      data: {
        id: "alex",
        name: "alex",
        email: "alex@email",
        phone: "12345678",
        comments: {
          createMany: {
            data: [
              {
                title: "Comment 1",
                description: "Description comment 1",
              },
              {
                title: "Comment 2",
                description: "Description comment 2",
              },
            ],
          },
        },
      },
    });
  });
});
