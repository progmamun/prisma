import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  //   const allUsers = await prisma.user.findMany();
  //   console.log(allUsers);
  const postUser = await prisma.user.create({
    data: {
      email: "mamun@gmail.com",
      name: "Al Mamun",
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
