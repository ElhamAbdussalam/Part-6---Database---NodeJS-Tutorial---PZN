import { prismaClient } from "../prisma-client";

describe("Many to many", () => {
  it("should be able to many to many", async () => {
    const like = await prismaClient.like.create({
      data: {
        customer_id: "eko",
        product_id: "P0001",
      },
      include: {
        customer: true,
        product: true,
      },
    });
    console.info(like);
  });
});
