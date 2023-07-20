import { Hocuspocus } from "@hocuspocus/server";

const server = new Hocuspocus({
  name: "hocuspocus-CI",
  port: 80,
});

server.listen();
