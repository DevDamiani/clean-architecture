import knex, { Knex } from "knex";

export default class ApplicationDbContext{

    public context: Knex<any, unknown[]>

    constructor() {
        this.context = this.dbcontext()
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

}

const context = new ApplicationDbContext 

const db = context.context

const createProductTable = async () => {


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

const createCategoryTable = async () => {

    const tableExists = await db.schema.hasTable('category');

    if (!tableExists) {
        return db.schema.createTable('category', (table:any) => {
            table.increments('id').primary();
            table.string('name').notNullable();
            table.timestamps(true, true);
        });
    }
};


createCategoryTable()

createProductTable()
