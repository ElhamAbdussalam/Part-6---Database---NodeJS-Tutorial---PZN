import { prismaClient } from "../prisma-client";

describe("Auto Increment", () => {
  it("should be able to execute sql", async () => {
    const category = await prismaClient.category.create({
      data: {
        name: "Food",
      },
    });

    console.info(category);
    expect(category).toHaveProperty("id");
  });
});
