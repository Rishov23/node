import express, {Request, Response} from 'express';

const app = express();

app.get('/', (req: Request, res: Response) => {
    res.send("Welcome");
});

app.listen(3000, () => {
    console.log("Server is listening on port 3000");    
});