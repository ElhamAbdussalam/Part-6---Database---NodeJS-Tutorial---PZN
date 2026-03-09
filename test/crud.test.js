import { prismaClient } from "../prisma-client";

describe("Prisma Client", () => {
  beforeEach(async () => {
    await prismaClient.customer.deleteMany();
  });

  it("should be able to create customer", async () => {
    const customer = await prismaClient.customer.create({
      data: {
        id: "Elham1",
        email: "elham1@email.com",
        name: "Elham1",
        phone: "089999999999",
      },
    });

    expect(customer.id).toBe("Elham1");
    expect(customer.email).toBe("elham1@email.com");
    expect(customer.name).toBe("Elham1");
    expect(customer.phone).toBe("089999999999");
  });

  it("should be able to update customer", async () => {
    await prismaClient.customer.create({
      data: {
        id: "Elham1",
        email: "elham1@email.com",
        name: "Elham1",
        phone: "089999999999",
      },
    });

    const customer = await prismaClient.customer.update({
      where: { id: "Elham1" },
      data: { name: "M Elham Abdussalam" },
    });

    expect(customer.name).toBe("M Elham Abdussalam");
  });

  it("should be able to read customer", async () => {
    await prismaClient.customer.create({
      data: {
        id: "Elham1",
        email: "elham1@email.com",
        name: "Elham1",
        phone: "089999999999",
      },
    });

    const customer = await prismaClient.customer.findUnique({
      where: { id: "Elham1" },
    });

    expect(customer.id).toBe("Elham1");
    expect(customer.email).toBe("elham1@email.com");
    expect(customer.name).toBe("Elham1");
    expect(customer.phone).toBe("089999999999");
  });
});
