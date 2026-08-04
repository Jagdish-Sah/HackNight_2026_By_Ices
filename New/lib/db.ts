import { neon } from '@neondatabase/serverless';
import { PrismaClient } from '@prisma/client';

// 1. Neon Serverless PostgreSQL Driver (HTTP direct SQL querying)
const connectionString =
  process.env.DATABASE_URL ||
  'postgresql://neondb_owner:npg_QP68pckzRGIa@ep-late-bird-ayu7650q-pooler.c-5.us-east-2.aws.neon.tech/neondb?sslmode=require&channel_binding=require';

export const sql = neon(connectionString);

// 2. Prisma Client Singleton (Optimized for connection pooling in HMR)
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const db =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
  });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = db;

