import { prismaClient } from "./prisma-client.js";

async function test() {
  const data = await prismaClient.customer.findMany();
  console.log(data);
}

test();
