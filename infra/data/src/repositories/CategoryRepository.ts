
import Category from "domain/src/entities/Category";
import type ICategoryRepository from "domain/src/interfaces/ICategoryRepository"
import ApplicationDbContext from "../dbcontext";
import { Knex } from "knex";


export default class CategoryRepository implements ICategoryRepository {

    private dbContext: ApplicationDbContext
    private context: Knex<any, unknown[]>

    constructor(applicationDbContext: ApplicationDbContext) {
        this.dbContext = applicationDbContext
        this.context = applicationDbContext.context
    }
    GetCategories(): Promise<Category[]> {
        return this.context("category").select("*")
    }
    GetByID(id: number): Promise<Category> {
        return this.context("category")
            .select("*")
            .where({ id: id })
            .first()
    }
    Create(category: Category): Promise<Category> {
        return this.context('category').insert(category, 'id');
    }
    Update(category: Category): Promise<Category> {
        return this.context('category').where({ id: category.id }).update(category);
    }
    Remove(category: Category): Promise<Category> {
        return this.context('category').where({ id: category.id }).del();
    }


}