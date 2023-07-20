import * as Y from "yjs";
import * as YWebsocket from "y-websocket";
import { HocuspocusProvider } from "@hocuspocus/provider";

const ydoc = new Y.Doc();
const ycounter = ydoc.getArray("counter");

// Create a function to update the counter value on the page
function updateCounter() {
  const counterElement = document.getElementById("counter");
  counterElement.textContent = ycounter.length;
}

// Subscribe to events to keep the counter updated on the page
ycounter.observe(updateCounter);
updateCounter(); // Update the counter on the page initially

// Connect to the y-websocket server
// new YWebsocket.WebsocketProvider(
//   "ws://localhost:1234",
//   "",
//   ydoc
// );

new HocuspocusProvider({
  url: "ws://localhost:80",
  name: "hocuspocus-CI-provider",
  // token: "",
  document: ydoc,
});

// Increment the counter in response to a click on the button
const incrementBtn = document.getElementById("incrementBtn");
incrementBtn.addEventListener("click", () => {
  ydoc.transact(() => {
    ycounter.push([1]); // Increment the counter by 1
  });
});
