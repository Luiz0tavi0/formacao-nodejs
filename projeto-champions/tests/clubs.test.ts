
import { beforeAll, describe, it, expect, beforeEach } from 'vitest';
import request from 'supertest';
import { createApp } from '../src/app';
import { db, initDb } from '../src/data/db';
import { ClubModel } from '../src/models/club-model';
import type { Express } from 'express';
process.env.NODE_ENV = 'test';
let app: Express;

const URI_CLUBS = '/api/clubs';


beforeAll(async () => {
    app = createApp();
});

beforeEach(async () => {
    await initDb();
})

describe('GET /clubs', () => {
    it('retorna os clubes', async () => {
        const res = await request(app).get(URI_CLUBS);
        expect(res.status).toBe(200);
        expect(res.body.length).toBe(32);
    });
});
