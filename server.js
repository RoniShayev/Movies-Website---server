const express = require('express');
const userRouter = require('./routers/userRouter');
const movieRouter = require('./routers/movieRouter');
const memberRouter = require('./routers/membersRouter');
const subscriptionRouter = require('./routers/subscriptionRouter');
var cors = require('cors')

const app = express();

app.use(cors())

require('./config/database');


app.use(express.json())

app.use("/api/user", userRouter);
app.use("/api/member", memberRouter);
app.use("/api/movie", movieRouter);
app.use("/api/subcription", subscriptionRouter);

app.listen(8000);