import { prismaClient } from "../prisma-client";

describe("Prisma Client", () => {
  beforeEach(async () => {
    await prismaClient.sample.deleteMany();
  });

  it("should be able to execute sql", async () => {
    const id = "1";
    const name = "Elham Abdussalam";

    const impacted =
      await prismaClient.$executeRaw`INSERT INTO sample(id,name) VALUES (${id}, ${name})`;
    expect(impacted).toBe(1);
  });
});

describe("Prisma Client", () => {
  it("should be able to query sql", async () => {
    const id = "1";

    const samples =
      await prismaClient.$queryRaw`SELECT * FROM sample where id = ${id}`;
    for (const sample of samples) {
      console.info(`Result sample id: ${sample.id} and name ${sample.name}`);
    }
  });
});
