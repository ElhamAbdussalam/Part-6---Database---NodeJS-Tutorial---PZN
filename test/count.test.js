import { prismaClient } from "../prisma-client";

describe("Count", () => {
  it("should be able count", async () => {
    const total = await prismaClient.customer.count({
      where: {
        name: "elham",
      },
    });
    expect(total).toBe(1);
  });
});
