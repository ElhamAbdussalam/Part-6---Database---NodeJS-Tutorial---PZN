import { prismaClient } from "../prisma-client";

describe("Many to many", () => {
  it("should be able to many to many", async () => {
    // const like = await prismaClient.like.create({
    //   data: {
    //     customer_id: "eko",
    //     product_id: "P0001",
    //   },
    //   include: {
    //     customer: true,
    //     product: true,
    //   },
    // });
    // console.info(like);

    // const customer = await prismaClient.customer.findUnique({
    //   where: {
    //     id: "eko",
    //   },
    //   include: {
    //     likes: {
    //       include: {
    //         product: true,
    //       },
    //     },
    //   },
    // });
    // console.info(JSON.stringify(customer));

    const customer = await prismaClient.customer.findMany({
      where: {
        likes: {
          some: {
            product: {
              name: {
                contains: "A",
              },
            },
          },
        },
      },
      include: {
        likes: {
          include: {
            product: true,
          },
        },
      },
    });
  });
});
