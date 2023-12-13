import { Product } from "../entities/Product"

export default interface IProductCategoryRepository {


    GetCategories(): Array<Product>
    GetByID(id: number): Product

    Create(product: Product): Product
    Update(product: Product): Product
    Remove(product: Product): Product


}