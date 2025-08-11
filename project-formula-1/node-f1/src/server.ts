import fastify, { FastifyRequest } from "fastify";
import cors from "@fastify/cors";
import { Driver } from "./interfaces/interfaces-driver";
import InitialTeams from "../respositories/repository-teams";
import InitialDrivers from "../respositories/repository-drivers";
import { Team } from "./interfaces/interfaces-teams";


export function buildServer() {
  const server = fastify({ logger: true });
  let teams: Team[] = [];
  let drivers: Driver[] = [];

  const resetData = () => {
    teams = structuredClone(InitialTeams)
    drivers = structuredClone(InitialDrivers)
  }
  resetData();
  server.decorate('resetData', resetData);
  server.register(cors, { origin: "*" });

  server.get("/teams", async () => ({ teams }));

  server.get("/drivers", async () => ({ drivers }));

  server.get<{ Params: { id: string } }>("/drivers/:id", async (request, reply) => {
    const id = parseInt(request.params.id);
    const driver = drivers.find((d): d is Driver => d.id === id);

    if (!driver) {
      reply.code(404);
      return { message: "Driver Not Found" };
    }
    return { driver };
  });

  server.delete('/drivers/:id', async (request: FastifyRequest<{ Params: { id: string } }>, reply) => {
    const idToRemove = parseInt(request.params.id);
    const findedIndex = drivers.findIndex((driver: Driver) => driver.id === idToRemove)
    drivers.splice(findedIndex, 1)
    reply.code(204).send();
  })
  return server;
}
