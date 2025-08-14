// src/data/db.ts
import { join } from 'path';
import { tmpdir } from 'os';
import { randomUUID } from 'crypto';
import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/node';
import { Data, seedDb } from './data-seed/data-seed';

let db: Low<Data>;

const isTest = process.env.NODE_ENV === 'test';
const filePath = isTest
    ? join(tmpdir(), `test-db-${randomUUID()}.json`) // banco temporário para testes
    : join(process.cwd(), 'db.json');               // banco real

const adapter = new JSONFile<Data>(filePath);
db = new Low<Data>(adapter, { players: [], clubs: [] });

export { db };

export async function initDb() {
    await db.read();       // lê o arquivo (ou inicializa vazio)
    await seedDb(db);      // popula db.data com dados do seed
}
