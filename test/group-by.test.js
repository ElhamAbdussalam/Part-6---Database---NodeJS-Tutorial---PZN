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
      having: {
        price: {
          _avg: {
            gt: 3000,
          },
        },
      },
    });

    for (const item of result) {
      console.info(
        `Category ${item.category}, min ${item._min.price} max ${item._max.price} avg ${item._avg.price}`,
      );
    }

    const products = await prismaClient.product.findMany({
      where: {
        OR: [{ name: "A" }, { name: "B" }],
      },
      orderBy: [
        {
          name: "asc",
        },
      ],
    });

    expect(products).toHaveLength(2);
    expect(products[0].name).toBe("A");
    expect(products[1].name).toBe("B");
  });
});
