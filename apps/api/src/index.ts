import { createServer } from "./server";

const port = process.env.PORT || 5001;
const server = createServer();

// const dotenv = require("dotenv").config();
const WebSocket = require("ws");

const ws = new WebSocket(
  `wss://ropsten.infura.io/ws/v3/800d18cb00f842ef94556575cfa0f20d`
);

ws.on("open", function open() {
  ws.send(
    '{"jsonrpc":"2.0","method":"eth_subscribe","params":["newHeads"], "id":1}'
  );
});

ws.on("message", function incoming(data) {
  var obj = JSON.parse(data);
  console.log(obj);
  // ws.close();
});

server.listen(port, () => {
  console.log(`api running on ${port}`);
});
