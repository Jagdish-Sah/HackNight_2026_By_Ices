import { neon } from '@neondatabase/serverless';
import { PrismaClient } from '@prisma/client';

// Neon Serverless PostgreSQL Driver (HTTP direct SQL querying)
const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  console.warn(
    '⚠️ DATABASE_URL is not set in environment variables! Please configure DATABASE_URL in .env.local or your Vercel Project Settings.'
  );
}

export const sql = neon(connectionString || '');

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
