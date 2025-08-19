import createApp from "./app";

// v8 ignore file


(async () => {
  const app = await createApp();
  const port = process.env.PORT;

  app.listen(port, () => {
    console.log(`🔥 Server running at port http://localhost:${port}`);
  });
})();
