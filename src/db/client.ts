import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

import * as schema from "@/db/schema";

type AppDatabase = ReturnType<typeof drizzle>;

declare global {
  // eslint-disable-next-line no-var
  var __signalMacroDb__: AppDatabase | undefined;
  // eslint-disable-next-line no-var
  var __signalMacroSql__: postgres.Sql | undefined;
}

function createDatabase() {
  const databaseUrl = process.env.DATABASE_URL;

  if (!databaseUrl) {
    return null;
  }

  const sqlClient = globalThis.__signalMacroSql__ ?? postgres(databaseUrl, {
    max: 1,
    prepare: false,
  });

  globalThis.__signalMacroSql__ = sqlClient;

  const database = globalThis.__signalMacroDb__ ?? drizzle(sqlClient, { schema });

  globalThis.__signalMacroDb__ = database;

  return database;
}

export const db = createDatabase();

export function isDatabaseEnabled(): boolean {
  return db !== null;
}
