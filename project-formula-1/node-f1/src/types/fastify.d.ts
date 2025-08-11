import "fastify";

declare module "fastify" {
    interface FastifyInstance {
        resetData: () => void;
    }
}
