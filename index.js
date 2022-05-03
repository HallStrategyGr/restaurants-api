import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

//Routes go here

app.listen(3000, () => {
    console.log('listening on http://localhost:3000...');
});