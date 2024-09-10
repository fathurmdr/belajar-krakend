const socket = io("http://localhost:9016");

socket.on("connect", () => {
  console.log("Connected to server");
});

socket.on("disconnect", () => {
  console.log("Disconnected from server");
});

socket.on("messages", (data) => {
  const chatList = document.getElementById("messages");

  if (Array.isArray(data)) {
    data.forEach((message) => {
      const li = document.createElement("li");
      li.textContent = message;
      chatList.appendChild(li);
    });
  }
});

socket.on("chat message", (data) => {
  const chatList = document.getElementById("messages");
  const li = document.createElement("li");
  li.textContent = data;
  chatList.appendChild(li);
});

socket.on("error", (error) => {
  console.error("Socket error:", error);
});

socket.on("connect_error", (error) => {
  console.error("Socket connection error:", error);
});

socket.on("connect_timeout", (timeout) => {
  console.error("Socket connection timeout:", timeout);
});

const form = document.getElementById("form");
const input = document.getElementById("input");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (input.value) {
    socket.emit("chat message", input.value);
    input.value = "";
  }
});
