const express = require('express');
const userRoutes = require("./routes/users.routes");
const conversationRoutes = require("./routes/conversations.routes");
const authRoutes = require("./routes/auth.routes")
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const app = express();

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(express.json());

app.use("/api/v1", userRoutes);
app.use("/api/v1", conversationRoutes);
app.use("/api/v1", authRoutes);

module.exports = app;
