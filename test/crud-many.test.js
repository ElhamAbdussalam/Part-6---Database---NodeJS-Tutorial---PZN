import { prismaClient } from "../prisma-client";

// jest.setTimeout(20000);

describe("CRUD Many", () => {
  beforeEach(async () => {
    await prismaClient.customer.deleteMany();
  });

  // afterAll(async () => {
  //   await prismaClient.$disconnect();
  // });

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

  it("should be able to update many", async () => {
    const { count } = await prismaClient.customer.updateMany({
      data: {
        email: "elhamm@email",
      },
      where: {
        name: "elham",
      },
    });
    expect(count).toBe(1);
  });

  it("should be able to delete many", async () => {
    const { count } = await prismaClient.customer.deleteMany({
      where: { name: "Tidak ada" },
    });
    expect(count).toBe(0);
  });

  it("should be able to read many", async () => {
    const customer = await prismaClient.customer.findMany({});
    expect(customer.length).toBe(3);
  });
});
