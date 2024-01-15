import { Container } from 'inversify';
import ProductRepository from 'infra-data/src/repositories/ProductRepository';
import ApplicationDbContext from 'infra-data/src/dbcontext';
import { TYPES } from './types';
import type IProductRepository from 'domain/src/interfaces/IProductRepository';

const container = new Container();

container
    .bind<ApplicationDbContext>(TYPES.ApplicationDbContext)
    .to(ApplicationDbContext)
    .inSingletonScope();

container
    .bind<IProductRepository>(TYPES.IProductRepository)
    .to(ProductRepository)
    .inTransientScope();

export { container };

