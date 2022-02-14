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
 /*  const updateUser = await prisma.user.update({
    data: {
      name: "Alice"
    },
    where: {
      email: "alice@prisma.io"
    }
  }); */
  /* const newPost = await prisma.post.create({
    data: {
      title: "Hello World"
    }
  });
  console.log(newPost); */
  const result = await prisma.post.update({
    where: {
      id: 1
    },
    data: {
      author: {
        connect: {
          email: "alice@prisma.io"
        }
      }
    }
  });
  console.log(result);
}

main()
  .catch(e => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
