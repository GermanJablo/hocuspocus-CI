import { Hocuspocus } from "@hocuspocus/server";

const server = new Hocuspocus({
  name: "hocuspocus-CI",
  port: 8000,
});


server.listen();
