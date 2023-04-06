import express from "express";
const app = express();
const PORT = process.env.PORT || 3000;
import db from "./models";

db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`App listening on port ${PORT}`)
    })
})