const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/animepahe.mp4", (req, res) => {
  const fullUrl = req.originalUrl;
  const link = fullUrl.split('/animepahe.mp4?url=')[1];
  if (!link) {
    return res.status(400).send("Missing 'url' query parameter.");
  }

  // You can add any additional headers you need here
  const headers = {
    "Content-Type": "video/mp4",
  };

    const customResponse = {
    ...headers,
    "Location": link,
  };

  // Send the custom response
  res.set(customResponse);
  res.status(302).send();
});

// Listen on port 3000 (adjust as needed)
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
