import { prismaClient } from "../prisma-client";

describe("Aggregate", () => {
  it("should be able query using aggregate and group by", async () => {
    const result = await prismaClient.product.groupBy({
      by: ["category"],
      _min: {
        price: true,
      },
      _max: {
        price: true,
      },
      _avg: {
        price: true,
      },
    });

    for (const item of result) {
      console.info(
        `Category ${item.category}, min ${item._min.price} max ${item._max.price} avg ${item._avg.price}`,
      );
    }
  });
});
