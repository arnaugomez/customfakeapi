import { FastifyInstance } from "fastify";
import { mockController } from "../controllers/mock.controller";
import { MockRequest } from "../types/MockRequest";

export const mockRoutes = (fastify: FastifyInstance) =>
  fastify.post("/", (request, reply) => {
    return mockController(request.body);
  });
