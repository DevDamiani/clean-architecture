import "reflect-metadata";
import express, { type Request, type Response, Router } from 'express';
import ProductsRoutes from './routes/ProductsRoutes';

const app = express();
const port = process.env.PORT || 3000;

const clientRoutes = new ProductsRoutes();

app.use('/Product', clientRoutes.getRoutes());

app.get('/', (req: Request, res: Response) => {
    res.send('Hello, TypeScript Express!');
});


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});