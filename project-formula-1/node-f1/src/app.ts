import { FastifyInstance } from "fastify";
import { buildServer } from "./server";

const server: FastifyInstance = buildServer();
server.listen({ port: 3333 }, () => {
  console.log("Server running on http://localhost:3333");
});
