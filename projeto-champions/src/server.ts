import createApp from "./app";

(async () => {
  const app = await createApp();
  const port = process.env.PORT;

  app.listen(port, () => {
    console.log(`🔥 Server running at port http://localhost:${port}`);
  });
})();
