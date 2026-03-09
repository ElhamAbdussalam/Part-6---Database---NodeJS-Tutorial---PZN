import { prismaClient } from "../prisma-client";

describe("Prisma Transaction", () => {
  beforeEach(async () => {
    await prismaClient.customer.deleteMany();
  });

  it("should create sequential transaction", async () => {
    const [elham, abdussalam] = await prismaClient.$transaction([
      prismaClient.customer.create({
        data: {
          id: "elham",
          email: "elham@email.com",
          name: "elham abdussalam",
          phone: "1234",
        },
      }),
      prismaClient.customer.create({
        data: {
          id: "abdussalam",
          email: "abdussalam@email.com",
          name: "elham abdussalam",
          phone: "5678",
        },
      }),
    ]);

    expect(elham.name).toBe("elham abdussalam");
    expect(abdussalam.name).toBe("elham abdussalam");
  });
});
