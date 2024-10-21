import express from 'express';
import { countryRouter } from './routes/countryRouter';
import cors from 'cors';


export function buildApp(){
    const app = express();
    app.use(express.json());
    app.use(cors())

    app.get('/', (_req, res) => {
        console.log("req")
        res.send('Hello, world!');
    });

    app.use('/country', countryRouter)
    return app
}



