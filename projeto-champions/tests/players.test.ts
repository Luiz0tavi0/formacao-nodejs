import { beforeEach, beforeAll, describe, it, expect } from 'vitest';
import request from 'supertest';
import { createApp } from '../src/app';
import { db, initDb } from '../src/data/db';
import { ClubModel } from '../src/models/club-model';
import type { Express } from 'express';
import { PlayerModel } from '../src/models/player-model';
import { randomInt } from 'crypto';
process.env.NODE_ENV = 'test';

let app: Express;

const URI_PLAYERS = '/api/players';

// router.get("/players", PlayerController.getPlayer); Ok
// router.get("/players/:id", PlayerController.getPlayerById); ok
// router.post("/players", PlayerController.postPlayer); ok
// router.delete("/players/:id", PlayerController.deletePlayer); ok
// router.patch("/players/:id", PlayerController.updatePlayer); ok


beforeAll(async () => {
    app = createApp();
});

beforeEach(async () => {
    await initDb();
})

describe('GET /players', () => {
    it('retorna os players', async () => {
        const res = await request(app).get(URI_PLAYERS);
        expect(res.status).toBe(200);
        expect(res.body.length).toBe(19);
    });
    it('retorna o player com id especificado', async () => {
        const idToSearch: number = 2;
        const res = await request(app).get(`${URI_PLAYERS}/${idToSearch}`);
        expect(res.status).toBe(200);

        const data: PlayerModel = res.body
        const { id, name, position, club } = data
        expect(id).toEqual(idToSearch);
        expect(name).toEqual("Cristiano Ronaldo");
        expect(position).toEqual('Forward');
        expect(club).toEqual('Manchester United');
    });
});

describe('POST /players', () => {
    it('cria um novo player', async () => {
        const newPlayer = {
            name: "Neymar Jr",
            position: "Forward",
            club: "Al-Hilal"
        };

        const res = await request(app)
            .post(URI_PLAYERS)
            .send(newPlayer);

        expect(res.status).toBe(201);
        expect(res.body).toEqual({ message: 'successful' });
    });
});

describe('DELETE /players', () => {
    it('deleta um player', async () => {
        const quantityTotalPlayers = db.data.players.length
        const randomIdToDelete = randomInt(1, quantityTotalPlayers)

        const res = await request(app)
            .delete(`${URI_PLAYERS}/${randomIdToDelete}`)

        const playerDeleted: PlayerModel | undefined = db.data.players.find((player: PlayerModel) => player.id === randomIdToDelete)
        console.debug(playerDeleted)
        expect(res.status).toBe(200);
        expect(playerDeleted).toBe(undefined);
        expect(res.body).toEqual({ message: 'deleted' });



    });
});
describe('PATCH /players', () => {
    it('atualiza estatisticas de um player', async () => {
        const quantityTotalPlayers = db.data.players.length
        const randomId = randomInt(1, quantityTotalPlayers)
        const newDrible = 8000;


        const playerToUpdate: PlayerModel | undefined = db.data.players.find((player: PlayerModel) => player.id === randomId)
        if (playerToUpdate) {
            playerToUpdate.statistics.Dribbling = newDrible;

            const res = await request(app)
                .patch(`${URI_PLAYERS}/${playerToUpdate?.id}`).send(playerToUpdate.statistics)
            expect(res.status).toBe(200);
            const data: PlayerModel = res.body
            expect(res.body.statistics.Dribbling).eq(newDrible);
        }
    });
});
