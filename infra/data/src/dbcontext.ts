import { injectable } from "inversify";
import knex, { Knex } from "knex";


@injectable()
export default class ApplicationDbContext{

    public context: Knex<any, unknown[]>

    constructor() {
        this.context = this.dbcontext()

        this.createProductTable(this.context)
        this.createCategoryTable(this.context)

    }

    private dbcontext() {
        return knex({
            client: 'mysql2',
            connection: {
                host: '127.0.0.1',
                port: 3306,
                user: 'root',
                password: 'admin',
                database: 'default'
            },
            pool: { min: 0, max: 7 }
        });
    }

    private createProductTable = async (db:Knex<any, unknown[]>) => {

        const tableExists = await db.schema.hasTable('product');
    
        if (!tableExists) {
            return db.schema.createTable('product', (table:any) => {
                table.increments('id').primary();
                table.string('name').notNullable();
                table.string('description').notNullable();
                table.decimal('price', 8, 2).notNullable();
                table.integer('stock').notNullable();
                table.string('image').notNullable();
                table.integer('categoryId').unsigned();
                table.foreign('categoryId').references('category.id');
                table.timestamps(true, true);
            });
        }
    };
    
    private createCategoryTable = async (db: Knex<any, unknown[]>) => {
    
        const tableExists = await db.schema.hasTable('category');
    
        if (!tableExists) {
            return db.schema.createTable('category', (table:any) => {
                table.increments('id').primary();
                table.string('name').notNullable();
                table.timestamps(true, true);
            });
        }
    };

}

