import { prismaClient } from "../prisma-client";

describe("Prisma Transaction", () => {
  beforeEach(async () => {
    await prismaClient.customer.deleteMany();
  });

  it("should create interactive transaction", async () => {
    const [elham, abdussalam] = await prismaClient.$transaction(
      async (prisma) => {
        const elham = await prisma.customer.create({
          data: {
            id: "elham",
            email: "elham@gmail.com",
            name: "elham",
            phone: "1234",
          },
        });
        const abdussalam = await prisma.customer.create({
          data: {
            id: "abdussalam",
            email: "abdussalam@gmail.com",
            name: "abdussalam",
            phone: "5678",
          },
        });
        return [elham, abdussalam];
      },
    );
  });
});
