import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  try {
    // Simple query to test connection
    const users = await prisma.user.findMany();
    console.log("Users:", users);
  } catch (error) {
    console.error("Error connecting to Prisma Client:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
