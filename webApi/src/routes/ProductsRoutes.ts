import { Router, type Request, type Response } from 'express';
import { container } from "infra-ioc/inversify.config";
import { TYPES } from 'infra-ioc/types';
import type IProductService from 'application/src/interfaces/IProductService';
import ProductDTO from 'application/src/dtos/ProductDTO';



export default class ProductsRoutes {

  private productService: IProductService;

  constructor() {

    this.productService = container.get<IProductService>(TYPES.IProductService);

  }

  getRoutes(): Router {

    const router = Router();

    router.get('/', (req: Request, res: Response) => {
      this.productService.GetProducts()
        .then(products => {
          res.json(products);
        })
        .catch(err => {
          res.json({ err });
        });

    });

    router.get('/:id', async (req: Request, res: Response) => {

      try {
        const product = await this.productService.GetByID(parseInt(req.params.id));
        if (!product) {
          res.status(404).send('Product not found');
        } else {
          res.json(product);
        }
      } catch (error) {
        res.status(500).json(error);
      }


    });

    router.post('/', async (req: Request, res: Response) => {

      try {

        const { name, description, price, stock } = req.query;

        console.log({
          name,
          description,
          price,
          stock
        });

        if (!name || !description || !price || !stock) {
          
          return res.status(400).json({ error: 'Both name and description are required in the query parameters' });
        }

        const product = new ProductDTO(0, name as string, description as string, parseFloat(price as string), parseInt(stock as string))

        const produductCreated = await this.productService.Create(product);

        res.status(201).json(produductCreated);

      } catch (error) {
        res.status(500).json(error);
      }


    });


    return router;
  }


}
