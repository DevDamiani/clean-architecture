import Product from "domain/src/entities/Product";
import type IProductRepository from "domain/src/interfaces/IProductRepository";
import { TYPES } from "infra-ioc/types";

import ProductDTO from "../dtos/ProductDTO";
import type IProductService from "../interfaces/IProductService";
import { inject, injectable } from "inversify";

@injectable()
export default class ProductService implements IProductService {


    constructor(
        @inject(TYPES.IProductRepository) private productRepository: IProductRepository) {

    }

    async GetProducts(): Promise<ProductDTO[]> {

        try{
            const productsDTO = await this.productRepository
                .GetProduct()
                .then(products => products.map((product) => new ProductDTO(product.id, product.name, product.description, product.price, product.stock)))

            return productsDTO
        }
        catch(error){
            throw new Error(`GetProducts error: ${error}`)
        }

    }
    async GetByID(id: number): Promise<ProductDTO> {
        try{
            const productDTO = await this.productRepository
                .GetByID(id)
                .then(product => new ProductDTO(product.id, product.name, product.description, product.price, product.stock))

            return productDTO
        }
        catch(error){
            throw new Error(`GetByID error: ${error}`)
        }

    }
    async Create(product: ProductDTO): Promise<ProductDTO> {
        try {
            return await this.productRepository
                .Create(new Product({ id: product.id, name: product.name, description: product.description, price: product.price, stock: product.stock, image: ""}))
                .then(id => new ProductDTO(id, product.name, product.description, product.price, product.stock))
        } catch (error) {
            throw new Error(`Create error: ${error}`)
        }
    }
    async Update(product: ProductDTO) {
        try {
            await this.productRepository
                .Update(new Product({ id: product.id, name: product.name, description: product.description, price: product.price, stock: product.stock, image: ""}))
        } catch (error) {
            throw new Error(`Update error: ${error}`)
        }
    }
    async Remove(product: ProductDTO) {
        try {
            await this.productRepository
                .Remove(new Product({ id: product.id, name: product.name, description: product.description, price: product.price, stock: product.stock, image: ""}))
        } catch (error) {
            throw new Error(`Remove error: ${error}`)
        }

    }

}