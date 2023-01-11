import fastifyMiddie from "@fastify/middie";
import fastify from "fastify";
import { mockRoutes } from "./routes/mock.routes";

const app = fastify({ logger: true });

app.get("/", () => {
  return "Mock api";
});

app.register(mockRoutes);

const start = async () => {
  await app.register(fastifyMiddie);
  app.use(require('cors')());

  try {
    await app.listen({ port: 3000 });
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};
start();
