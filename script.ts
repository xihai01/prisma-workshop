import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// A `main` function so that you can use async/await
async function main() {
  // ... you will write your Prisma Client queries here
  /* const users = await prisma.user.findMany();
  console.table(users); */
  /* const newUser = await prisma.user.create({
    data: {
      email: "alice@prisma.io"
    }
  }); */
  const updateUser = await prisma.user.update({
    data: {
      name: "Alice"
    },
    where: {
      email: "alice@prisma.io"
    }
  });
}

main()
  .catch(e => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
