import { prismaClient } from "../prisma-client";

describe("Create with Select", () => {
  it("should be able create and select", async () => {
    const customer = await prismaClient.customer.create({
      data: {
        id: "Budi",
        email: "budi@email.com",
        phone: "1234",
        name: "Budi",
      },
      select: {
        id: true,
        name: true,
      },
    });
    expect(customer.id).toBe("Budi");
    expect(customer.name).toBe("Budi");
    expect(customer.email).toBeUndefined();
    expect(customer.phone).toBeUndefined();
  });

  it("should be able find many with select", async () => {
    const customers = await prismaClient.customer.findMany({
      select: {
        id: true,
        name: true,
      },
    });

    for (const customer of customers) {
      expect(customer.id).toBeDefined();
      expect(customer.name).toBeDefined();
      expect(customer.email).toBeUndefined();
      expect(customer.phone).toBeUndefined();
    }
  });
});
