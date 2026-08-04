import { neon } from '@neondatabase/serverless';
import { PrismaClient } from '@prisma/client';

// Dynamic SQL query runner to evaluate process.env.DATABASE_URL at execution time
export const sql = (strings: TemplateStringsArray, ...values: any[]) => {
  const url = process.env.DATABASE_URL;
  if (!url) {
    throw new Error(
      'DATABASE_URL environment variable is missing. Please add DATABASE_URL to your Vercel Project Settings or .env.local file.'
    );
  }
  const client = neon(url);
  return client(strings, ...values);
};

// Prisma Client Singleton
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const db =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
  });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = db;
