import { Router, type Request, type Response } from 'express';

import type IProductRepository from "domain/src/interfaces/IProductRepository"
import { container } from "infra-ioc/inversify.config"
import { TYPES } from 'infra-ioc/types';


export default class ProductsRoutes {

  private clients: any[] = []
  private productRepository: IProductRepository

  constructor() {

    this.productRepository = container.get<IProductRepository>(TYPES.IProductRepository);

  }

  getRoutes(): Router {

    const router = Router()
    router.get('/', (req: Request, res: Response) => {
      this.productRepository.GetProduct()
        .then(products => {
          res.json(products);
        })
        .catch(err => {
          res.json({err})
        })

    });

    router.get('/:id', (req: Request, res: Response) => {
      const client = this.clients.find((t) => t.id === parseInt(req.params.id));

      if (!client) {
        res.status(404).send('Task not found');
      } else {
        res.json(client);
      }
    });


    return router
  }


}
