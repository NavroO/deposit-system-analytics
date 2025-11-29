import cors from "@fastify/cors";
import dotenv from "dotenv";
import fastify from "fastify";
import { v4 as uuidv4 } from "uuid";
dotenv.config();

const server = fastify();

server.register(cors, {
  origin: process.env.CORS_ORIGIN || "*",
});

server.get("/deposit", async (request, reply) => {
  return reply.send({
    eventId: uuidv4(),
    locationId: uuidv4(),
    itemSku: "pet_05",
    quantity: 10,
    depositTime: Date.now(),
  });
});

server.listen({ port: Number(process.env.PORT) }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
