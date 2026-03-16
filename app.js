import express from "express";
import http from "http";
import { Server } from "socket.io";

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: "*" }
});
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));

const sharedState = {
  collectiveColor: [255, 150, 180],
  users: []
};

io.on("connection", (socket) => {
  console.log("用户加入：", socket.id);
  sharedState.users.push(socket.id);
  socket.emit("sync-state", sharedState);

  socket.on("update-cheer", (data) => {
    const safeData = {
      baseColor: data.baseColor || [255, 150, 180],
      lightColor: data.lightColor || [255, 220, 240],
      darkColor: data.darkColor || [200, 100, 150],
      glowColor: data.glowColor || [255, 180, 220],
      brightness: data.brightness || 255,
      size: data.size || { w: 18, h: 150 }
    };
    socket.broadcast.emit("remote-cheer", { userId: socket.id, ...safeData });

    sharedState.collectiveColor = [
      Math.floor(sharedState.collectiveColor[0] * 0.7 + safeData.baseColor[0] * 0.3),
      Math.floor(sharedState.collectiveColor[1] * 0.7 + safeData.baseColor[1] * 0.3),
      Math.floor(sharedState.collectiveColor[2] * 0.7 + safeData.baseColor[2] * 0.3)
    ];
    io.emit("sync-collective-color", sharedState.collectiveColor);
  });

  // 接收点击事件，携带点击设备颜色，广播给所有设备
  socket.on("beat-trigger", (clickColor) => {
    io.emit("sync-beat", clickColor);
  });

  socket.on("disconnect", () => {
    console.log("用户离开：", socket.id);
    sharedState.users = sharedState.users.filter(id => id !== socket.id);
    socket.broadcast.emit("user-left", { userId: socket.id });
  });

  socket.on('heartbeat', () => {
    socket.emit('heartbeat-ack');
  });
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`服务器运行：http://localhost:${PORT}`);
  console.log(`手机访问：http://你的电脑IP:${PORT}`);
});
app.js