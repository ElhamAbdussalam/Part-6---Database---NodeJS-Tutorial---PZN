import { prismaClient } from "../prisma-client";

describe("One to one", () => {
  it("should be able to create one to one", async () => {
    const customer = await prismaClient.customer.create({
      data: {
        id: "elham",
        name: "Elham",
        email: "elham@gmail.com",
        phone: "08123456789",
      },
    });

    const wallet = await prismaClient.wallet.create({
      data: {
        id: "wallet1",
        balance: 1000,
        customer_id: customer.id,
      },
    });

    console.info(wallet);
  });

  it("should be able to find one to one", async () => {
    const customer = await prismaClient.customer.findUnique({
      where: {
        id: "elham",
      },
      include: {
        wallet: true,
      },
    });
    console.info(customer);
  });
});
