import fastifyMiddie from "@fastify/middie";
import fastify from "fastify";
import { mockRoutes } from "./routes/mock.routes";
import dotenv from "dotenv";

dotenv.config();

const app = fastify({ logger: true });

app.get("/", () => {
  return "Mock api";
});

app.register(mockRoutes);

const start = async () => {
  await app.register(fastifyMiddie);
  app.use(require("cors")());

  try {
    const { PORT, HOST } = process.env;
    if (!PORT) throw "Missing PORT env variable";
    if (!HOST) throw "Missing HOST env variable";
    await app.listen({
      port: parseInt(process.env.PORT!),
      host: process.env.HOST,
    });
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};
start();
