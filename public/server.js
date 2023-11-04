const app = require('./app.js'); // Assuming app.js is where you configure your Express app
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
