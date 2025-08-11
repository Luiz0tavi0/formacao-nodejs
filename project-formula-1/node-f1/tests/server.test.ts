import { describe, it, expect, afterEach, beforeEach } from "vitest";
import { buildServer } from "../src/server";
import teams from "../respositories/repository-teams";

describe("API Formula One", () => {
    const app = buildServer();
    let backupTeams = [...teams]

    beforeEach(() => {
        app.resetData()
    })


    it("GET /teams deve retornar lista de equipes", async () => {
        const res = await app.inject({ method: "GET", url: "/teams" });
        expect(res.statusCode).toBe(200);
        expect(res.json().teams.length).toBe(12);
    });

    it("GET /drivers deve retornar lista de pilotos", async () => {
        const res = await app.inject({ method: "GET", url: "/drivers" });
        expect(res.statusCode).toBe(200);
        expect(res.json().drivers.length).toBe(3);
    });

    it("GET /drivers/:id deve retornar um piloto existente", async () => {
        const res = await app.inject({ method: "GET", url: "/drivers/1" });
        expect(res.statusCode).toBe(200);
        expect(res.json().driver.name).toBe("Max Verstappen");
    });

    it("GET /drivers/:id deve retornar 404 para piloto inexistente", async () => {
        const res = await app.inject({ method: "GET", url: "/drivers/999" });
        expect(res.statusCode).toBe(404);
        expect(res.json().message).toBe("Driver Not Found");
    });
    it("DELETE /drivers/:id deve retornar 204 para piloto removido", async () => {
        const res = await app.inject({ method: "DELETE", url: "/drivers/1" });
        expect(res.statusCode).toBe(204);
        expect(res.body).toBe('');
    });
});
