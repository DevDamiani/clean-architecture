
import Product from "domain/src/entities/Product";
import type IProductRepository from "domain/src/interfaces/IProductRepository"
import ApplicationDbContext from "../dbcontext";
import { Knex } from "knex";


export default class ProductRepository implements IProductRepository {

    private dbContext: ApplicationDbContext
    private context: Knex<any, unknown[]>

    constructor(applicationDbContext: ApplicationDbContext) {
        this.dbContext = applicationDbContext
        this.context = applicationDbContext.context
    }
    GetCategories(): Promise<Product[]> {
        return this.context("Product").select("*")
    }
    GetByID(id: number): Promise<Product> {
        return this.context("Product")
            .select("*")
            .where({ id: id })
            .first()
    }
    Create(product: Product): Promise<Product> {
        return this.context('Product').insert(product, 'id');
    }
    Update(product: Product): Promise<Product> {
        return this.context('Product').where({ id: product.id }).update(product);
    }
    Remove(product: Product): Promise<Product> {
        return this.context('Product').where({ id: product.id }).del();
    }


}