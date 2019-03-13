const app = require("express")();
const cors = require("cors");

const restaurantRoutes = require("./api/stocks/stocksRoutes");

app.use(cors());

app.use("/stocks", restaurantRoutes);

const server = app.listen(4000, () => {
  console.info(`Example app listening on port 4000!`);
});
