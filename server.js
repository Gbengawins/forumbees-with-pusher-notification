const Pusher = require("pusher");

const pusher = new Pusher({
  appId: "1561891",
  key: "240a829aa3907ff4a5ca",
  secret: "01efcd021592f4260175",
  cluster: "eu",
  useTLS: true,
});

pusher.trigger("my-channel", "my-event", {
  message: "hello world",
});
