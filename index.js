const express = require("express");
const app = express();

const PORT = 8080;
const HOST = "0.0.0.0";

app.get('/', (req, res) => {
	res.send("Hello new World!");
});

app.listen(PORT, HOST, () => {
	console.log(`Server is running on: http://${HOST}:${PORT}`);
})