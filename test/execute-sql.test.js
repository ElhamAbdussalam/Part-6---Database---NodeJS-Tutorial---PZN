import { prismaClient } from "../prisma-client";

describe("PrismaClient", () => {
  it("should be able to execute sql", async () => {
    const id = "1";
    const name = "Elham Abdussalam";

    const impacted =
      await prismaClient.$executeRaw`INSERT INTO sample(id,name) VALUES (${id}, ${name})`;
    expect(impacted).toBe(1);
  });
});
