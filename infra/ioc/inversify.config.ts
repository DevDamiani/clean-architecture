import { Container } from 'inversify';
import { TYPES } from './types';

import ProductRepository from 'infra-data/src/repositories/ProductRepository';
import ApplicationDbContext from 'infra-data/src/dbcontext';
import type IProductRepository from 'domain/src/interfaces/IProductRepository';
import type IProductService from 'application/src/interfaces/IProductService';
import ProductService from 'application/src/services/ProductService';

const container = new Container();

container
    .bind<ApplicationDbContext>(TYPES.ApplicationDbContext)
    .to(ApplicationDbContext)
    .inSingletonScope();

container
    .bind<IProductRepository>(TYPES.IProductRepository)
    .to(ProductRepository)
    .inTransientScope();

container
    .bind<IProductService>(TYPES.IProductService)
    .to(ProductService)
    .inTransientScope();

export { container };

