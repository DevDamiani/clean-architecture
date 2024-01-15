import Product  from "../entities/Product"

export default interface IProductRepository {        

    GetProduct(): Promise<Product[]>
    GetByID(id: number): Promise<Product>

    Create(product: Product): Promise<number>
    Update(product: Product): Promise<Product>
    Remove(product: Product): Promise<Product>


}