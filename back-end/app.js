const express = require("express");
const cors = require("cors");
const session = require("express-session");

const rateLimit = require("express-rate-limit");
const limiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 minutes
  max: 550, // Limit each IP to 50 requests per windowMs
  message: {
    success: false,
    msg: "Too many requests from this IP, please try again after 10 minutes",
  },
  statusCode: 400,
  standardHeaders: true,
  legacyHeaders: false,
  keyGenerator: (req, res) => {
    return req.ip;
  },
  validate: {
    xForwardedForHeader: false, // Disable xForwardedForHeader validation
  },
});

const app = express();
app.use(cors({
  origin: 'http://localhost:3000', 
  credentials: true, 
}));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session({
  secret: 'securekarde',
  resave: false,
  saveUninitialized: false,
  cookie: { 
    secure: false, // set to false for HTTP in localhost
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
  }
}));


//rate limiter
app.use(limiter);

//testing routes
app.get("/", (req, res) => {
  console.dev({ route: "home sweet home" }, "home");
  return res.status(200).send({
    msg: `home route ${
      process.env.production == "true" ? "production" : "dev"
    }!`,
  });
});

// production routes
const chatBotRoute = require("./routes/chatBot.route.js");
const cookieParser = require("cookie-parser");
app.use(cookieParser());

app.use("/api/v1", chatBotRoute);
app.use("/api/auth", require("./routes/auth.js"));

module.exports = { app };
