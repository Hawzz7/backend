import express from "express";
import bodyParser from "body-parser";
import cors from "cors"
import jokeRoutes from "./routes/jokeRoutes.js"

const app = express();
const port = 8000;

app.use(cors());
app.use(bodyParser.json());
app.use('/api', jokeRoutes);

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
