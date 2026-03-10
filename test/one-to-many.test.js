import { prismaClient } from "../prisma-client";

describe("One to many", () => {
  it("should be able to one to many", async () => {
    const comment = await prismaClient.comment.create({
      data: {
        customer_id: "eko",
        title: "Insert comment",
        description: "Description comment",
      },
      include: {
        customer: true,
      },
    });
    console.info(comment);
  });
});
