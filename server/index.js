const express = require("express");
require("dotenv").config();
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const userRoute = require("./routes/userRoute").router;
const { connectMongoDB } = require("./config/dbConnect");

const app = express();

// connect to mongoDB
connectMongoDB();

// Middlewares & Plugins
app.use(
	cors({
		origin: ["http://localhost:3000", "http://localhost:4001"],
	})
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Routes
app.use("/api/user", userRoute);

const PORT = process.env.PORT || 4001;

app.listen(PORT, () => {
	console.log("server running on port " + PORT);
});
