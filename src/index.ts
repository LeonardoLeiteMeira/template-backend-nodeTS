import express from 'express';
import routes from "./Domain/Routes/Routes";
import bodyParser from "body-parser";
import morgan from 'morgan';
import cors from 'cors';


const app = express();

app.use(cors());
app.use(morgan("tiny"));
app.use(bodyParser.json());
app.use(express.json());
app.use(routes);

app.listen(3333);