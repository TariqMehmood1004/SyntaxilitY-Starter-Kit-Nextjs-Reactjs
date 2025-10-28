import { PrismaClient } from "@/generated/prisma";
// import { PrismaClient } from "@prisma/client";

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({ log: ["query", "error", "warn"] });

if (!globalForPrisma.prisma) globalForPrisma.prisma = prisma;