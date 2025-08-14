
import { beforeAll, describe, it, expect } from 'vitest';
import request from 'supertest';
import { createApp } from '../src/app';
import { initDb } from '../src/data/db';
import { ClubModel } from '../src/models/club-model';
import type { Express } from 'express';
process.env.NODE_ENV = 'test';
let app: Express;

beforeAll(async () => {
    await initDb();  // garante que db.data está populado
    app = createApp();
});

describe('GET /players', () => {
    it('retorna os players', async () => {
        let c: ClubModel;
        const res = await request(app).get('/api/players');
        expect(res.status).toBe(200);
        expect(res.body.length).toBe(19);
    });
});
