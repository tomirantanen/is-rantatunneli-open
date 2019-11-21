import express from "express";
import axios from "axios";
const app = express();
const port = 3000;

app.listen(port, () => console.log(`App is running on port ${port}!`));
const statusUrl =
  "https://it101.infotripla.fi/city_app_traffic_data_rest_api/city_specific/tampere/tunneli/tunnel_status_extended.php";

async function getStatus() {
  const response = await axios.get(statusUrl);
  const isEastClosed = Boolean(response.data.tunnelStatus.statusValueEast);
  const isWestClosed = Boolean(response.data.tunnelStatus.statusValueWest);

  if (isEastClosed && isWestClosed) {
    return "Rantatunneli on kokonaan suljettu";
  } else if (isEastClosed && !isWestClosed) {
    return "Itään johtava rantatunneli on suljettu";
  } else if (!isEastClosed && isWestClosed) {
    return "Länteen johtava rantatunneli on suljettu";
  } else {
    return "Rantatunneli on auki";
  }
}

app.get("/", async (request: express.Request, response: express.Response) => {
  try {
    response.send(await getStatus());
  } catch (error) {
    console.error(error);
    response.status(500).send("Rantatunnelin tilan tarkistaminen epäonnistui");
  }
});
