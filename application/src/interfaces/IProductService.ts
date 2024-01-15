import type ProductDTO from "../dtos/ProductDTO"

export default interface IProductService {

    GetProducts(): Promise<ProductDTO[]>
    GetByID(id: number): Promise<ProductDTO>

    Create(product: ProductDTO): Promise<ProductDTO>
    Update(product: ProductDTO): void
    Remove(product: ProductDTO): void


}