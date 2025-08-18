
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

describe('POST /clubs', () => {
    it('cria um novo clube', async () => {
        const newClub = {
            id: 99,
            name: 'Inter de Melão'
        };

        const res = await request(app)
            .post(URI_CLUBS)
            .send(newClub);

        expect(res.status).toBe(201);
        expect(res.body).toEqual({ message: 'successful' });
    });
});
describe('DELETE /clubs', () => {
    it('remove um clube a partir do id', async () => {
        const randomClubToDelete = await randomEntity<ClubModel>(db.data.clubs)

        const res = await request(app)
            .delete(`${URI_CLUBS}/${randomClubToDelete?.id}`)

        const clubDeleted: ClubModel | undefined = db.data.clubs.find(
            (club: ClubModel) => club.id === randomClubToDelete?.id
        )

        expect(res.status).toBe(200);
        expect(clubDeleted).toBeUndefined();
        expect(res.body).toEqual({ message: 'deleted' });
    });
});

