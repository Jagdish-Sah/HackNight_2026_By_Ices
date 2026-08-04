import { neon } from '@neondatabase/serverless';
import { createClient } from '@supabase/supabase-js';
import { PrismaClient } from '@prisma/client';

// 1. Neon Serverless PostgreSQL Driver (HTTP direct SQL querying)
const connectionString = process.env.DATABASE_URL || 'postgres://user:password@localhost:5432/neondb';
export const sql = neon(connectionString);

// 2. Supabase Cloud JS Client (Fallback HTTPS client)
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder_key';
export const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: { persistSession: false },
});

// 3. Prisma Client Singleton (Optimized for connection pooling in HMR)
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const db =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
  });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = db;
