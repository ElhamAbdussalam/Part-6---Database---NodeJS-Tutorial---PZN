import { prismaClient } from "../prisma-client";

jest.setTimeout(20000);

describe("CRUD Many", () => {
  beforeEach(async () => {
    await prismaClient.customer.deleteMany();
  });

  afterAll(async () => {
    await prismaClient.$disconnect();
  });

  it("should be able to create many", async () => {
    const { count } = await prismaClient.customer.createMany({
      data: [
        {
          id: "elham",
          email: "elham@email",
          phone: "1234",
          name: "elham",
        },
        {
          id: "abdussalam",
          email: "abdussalam@email",
          phone: "5678",
          name: "abdussalam",
        },
      ],
    });

    expect(count).toBe(2);
  });
});
