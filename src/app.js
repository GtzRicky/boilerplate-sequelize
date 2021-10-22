const express = require('express');
const cors = require('cors');

const userRoutes = require("./routes/users.routes");
const conversationRoutes = require("./routes/conversations.routes");
const authRoutes = require("./routes/auth.routes");
const messageRoutes = require("./routes/messages.routes")

const middlewareError = require("./middlewares/error.middleware");

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const app = express();
app.use(cors());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(express.json());

app.use("/api/v1", userRoutes);
app.use("/api/v1", conversationRoutes);
app.use("/api/v1", messageRoutes);
app.use("/api/v1", authRoutes);
app.use(middlewareError);

module.exports = app;