import { PrismaClient, Prisma } from "../app/generated/prisma";

const prisma = new PrismaClient();

const userData: Prisma.UserCreateInput[] = [
  {
    name: "Alice",
    email: "alice@prisma.io",
    posts: {
      create: [
        {
          title: "Join the Prisma Discord",
          content: "https://pris.ly/discord",
          published: true,
        },
        {
          title: "Prisma on YouTube",
          content: "https://pris.ly/youtube",
        },
      ],
    },
  },
  {
    name: "Bob",
    email: "bob@prisma.io",
    posts: {
      create: [
        {
          title: "Follow Prisma on Twitter",
          content: "https://www.twitter.com/prisma",
          published: true,
        },
      ],
    },
  },
  {
    name: "Frank",
    email: "frank@prisma.io",
    posts: {
      create: [
        {
          title: "Follow Prisma on Twitter",
          content: "https://www.twitter.com/prisma",
          published: true,
        },
      ],
    },
  },
];

// New dive data
const diveData = async () => {
  // Create a Dive Company
  const company = await prisma.diveCompany.create({
    data: {
      name: "Sea Explorers",
      email: "info@seaexplorers.com",
      phone: "555-1234",
    },
  });

  // Create a Charter
  const charter = await prisma.charter.create({
    data: {
      date: new Date("2025-09-15T08:00:00Z"),
    },
  });

  // Create a Booking for that company + charter
  const booking = await prisma.booking.create({
    data: {
      diveCompanyId: company.id,
      charterId: charter.id,
      status: "PENDING",
      guests: {
        create: [
          {
            name: "John Diver",
            email: "john@example.com",
            phone: "555-5678",
          },
          {
            name: "Jane Diver",
            email: "jane@example.com",
            phone: "555-8765",
          },
        ],
      },
    },
  });

  console.log("Seeded dive company, charter, booking, and guests:", {
    company,
    charter,
    booking,
  });
};

export async function main() {
  for (const u of userData) {
    await prisma.user.create({ data: u });
  }
  await diveData();
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
