
import Product from "domain/src/entities/Product";
import type IProductRepository from "domain/src/interfaces/IProductRepository"
import ApplicationDbContext from "../dbcontext";
import { TYPES } from "infra-ioc/types"

import { inject, injectable } from 'inversify';
import { Knex } from "knex";

@injectable()
export default class ProductRepository implements IProductRepository {

    private context: Knex<any, unknown[]>
    private TABLE_NAME = "product"

    constructor(@inject(TYPES.ApplicationDbContext) applicationDbContext: ApplicationDbContext) {
        this.context = applicationDbContext.context
    }
    GetProduct(): Promise<Product[]> {
        return this.context(this.TABLE_NAME).select("*")
    }
    GetByID(id: number): Promise<Product> {
        return this.context(this.TABLE_NAME)
            .select("*")
            .where({ id: id })
            .first()
    }
    Create(product: Product): Promise<Product> {
        return this.context(this.TABLE_NAME).insert(product, 'id');
    }
    Update(product: Product): Promise<Product> {
        return this.context(this.TABLE_NAME).where({ id: product.id }).update(product);
    }
    Remove(product: Product): Promise<Product> {
        return this.context(this.TABLE_NAME).where({ id: product.id }).del();
    }


}