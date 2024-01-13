import Product  from "../entities/Product"

export default interface IProductCategoryRepository {


    GetCategories(): Promise<Product[]>
    GetByID(id: number): Promise<Product>

    Create(product: Product): Promise<Product>
    Update(product: Product): Promise<Product>
    Remove(product: Product): Promise<Product>


}