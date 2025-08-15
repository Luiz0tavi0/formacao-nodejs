
import { beforeAll, describe, it, expect, beforeEach } from 'vitest';
import request from 'supertest';
import { createApp } from '../src/app';
import { db, initDb } from '../src/data/db';
import { ClubModel } from '../src/models/club-model';
import type { Express } from 'express';
import { randomEntity } from './utils/random-helper';
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
    it('retorna o club com id especificado', async () => {
        const randomClub = await randomEntity<ClubModel>(db.data.clubs)
        const idToFind = randomClub?.id
        const res = await request(app).get(`${URI_CLUBS}/${idToFind}`);
        expect(res.status).toBe(200);
        const findedClub: ClubModel = res.body;
        expect(findedClub.id).toBe(idToFind);
    });
});
